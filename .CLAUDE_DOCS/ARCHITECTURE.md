# ARCHITECTURE.md — アーキテクチャ詳細

## SPA 全体フロー

```
src/main.ts
  └─ createApp(App)
       └─ src/App.vue
            ├─ GlobalHeader.vue        # ヘッダー・検索・カテゴリフィルタ
            ├─ ArticleList.vue         # 記事一覧（selectedArticle が null の間表示）
            └─ ArticleContent.vue      # 記事詳細（selectedArticle が非 null の間表示）
```

Vue Router は**使用しない**。
状態は `App.vue` の `ref` で管理し、URL クエリパラメータと双方向同期する。

---

## 状態管理（App.vue）

| ref                     | 型               | 意味                                           |
| ----------------------- | ---------------- | ---------------------------------------------- |
| `selectedCategory`      | `string \| null` | 現在のカテゴリフィルタ（null = 全件）          |
| `selectedArticle`       | `string \| null` | 選択中の記事名（null = 一覧表示）              |
| `targetPreIndex`        | `number \| null` | 検索結果スクロール先の `<pre>` インデックス    |
| `restoreScrollPosition` | `boolean`        | 記事詳細から戻る時にスクロール位置を復元するか |

---

## URL パラメータ設計

| パラメータ    | 例                           | 意味                                                 |
| ------------- | ---------------------------- | ---------------------------------------------------- |
| `category`    | `?category=css`              | カテゴリフィルタ                                     |
| `article`     | `?category=css&article=grid` | 記事詳細を表示                                       |
| `preIndex`    | `&preIndex=0`                | 検索結果からのスクロール先 `<pre>` インデックス      |
| `query`       | `&query=flex`                | ハイライトする検索語                                 |
| `search`      | `?search=foo`                | 検索モード（SearchBox が処理）                       |
| `resultIndex` | `&resultIndex=2`             | 検索結果リスト内のフォーカス位置（ブラウザバック用） |

URL 操作には `history.pushState` / `history.replaceState` を直接使用する。
ブラウザバック・フォワードは `popstate` イベントで `useGlobalHeaderLogic.ts` と `useSearchBoxLogic.ts` が処理する。

---

## コンポーネント間のデータフロー

```
App.vue
  │  v-model:selected-category   ←→ GlobalHeader
  │  v-model:selected-article    ←→ GlobalHeader
  │  @scroll-to-pre-index            GlobalHeader → App → ArticleContent/scrollToPreElement
  │  @reset-scroll                   GlobalHeader → App（sessionStorage をクリア）
  │
  ├─ GlobalHeader
  │    ├─ useGlobalHeaderLogic.ts（URL params, popstate, categories 取得）
  │    └─ SearchBox.vue（遅延ロード: isSearchLoaded = true になってから mount）
  │         └─ useSearchBoxLogic.ts（検索ロジック）
  │
  ├─ ArticleList
  │    ├─ useArticleIndex.ts（インデックス JSON のフェッチ・キャッシュ）
  │    └─ @select-article → App.handleArticleSelect
  │
  └─ ArticleContent
       ├─ defineAsyncComponent で `./article/<category>/<name>.vue` を動的インポート
       └─ props: { category, articleName }
```

---

## 記事インデックスの仕組み

### ビルド時（`npm run index:generate`）

`scripts/generate-article-index.ts` が `src/components/article/**/*.vue` を走査:

- **article-index.json** — カテゴリ一覧 `{ categories: string[] }` （マニフェスト）
- **article-index-\<category\>.json** — カテゴリ別記事リスト `ArticleIndexEntry[]`
- **search-index.json** — 同上のマニフェスト
- **search-index-\<category\>.json** — カテゴリ別検索インデックス `SearchIndexEntry[]`

### ランタイム（フェッチ）

`useArticleIndex.ts` / `useSearchIndex.ts` がモジュールスコープのキャッシュを持つ:

1. マニフェスト (`/article-index.json`) をフェッチ → カテゴリ一覧を取得
2. 必要なカテゴリの JSON のみフェッチ（遅延）
3. 全件が必要な場合は全カテゴリを並列フェッチ

---

## 検索フロー（useSearchBoxLogic.ts）

1. 入力変化 → `performSearch()` → 300ms デバウンス
2. `buildFileNameResults()` — `article-index` からファイル名マッチを先に表示
3. `buildContentResults()` — `search-index` の `<pre>` ブロック内をライン単位で検索
4. 結果クリック → `selectSearchResult()` → URL を更新し `App.vue` に emit
5. `App.vue` → `handleScrollToPreIndex()` → `scrollToPreElement.ts` で対象 `<pre>` へスクロール

検索対象は `<pre>` タグ内のテキストのみ（HTML タグ除去済み）。
ファイル名一致は preIndex/query なしで記事を開く（スクロールなし）。

---

## 遅延ロード戦略

| 対象               | タイミング                                                 |
| ------------------ | ---------------------------------------------------------- |
| `ArticleList`      | `defineAsyncComponent`（App.vue mount 直後）               |
| `ArticleContent`   | `defineAsyncComponent`（App.vue mount 直後）               |
| `SearchBox`        | ユーザーが検索窓をクリック or `f` キー押下時               |
| 記事コンポーネント | `ArticleContent.loadArticle()` が動的 import               |
| 検索インデックス   | `requestIdleCallback` でプリフェッチ（SearchBox mount 後） |

---

## Vite チャンク分割（vite.config.ts）

| チャンク名       | 内容                                                |
| ---------------- | --------------------------------------------------- |
| `vendor`         | node_modules（vue-router / tanstack / swiper 以外） |
| `vendor-router`  | vue-router                                          |
| `vendor-query`   | @tanstack/vue-query                                 |
| `vendor-swiper`  | swiper                                              |
| `articles-js`    | `src/components/article/js/*.vue`                   |
| `articles-css`   | `src/components/article/css/*.vue`                  |
| `articles-etc`   | `src/components/article/etc/*.vue`                  |
| `articles-other` | その他のカテゴリ記事                                |

ホスティングの同時接続制限対策として、カテゴリ単位でまとめている。

---

## sessionStorage の使い方

| キー                        | 用途                                                                    |
| --------------------------- | ----------------------------------------------------------------------- |
| `articleListScrollPosition` | 記事詳細から戻る時のスクロール位置（px）                                |
| `selectedCategory`          | 記事詳細から戻る時のカテゴリ復元                                        |
| `reloadedFromSearch`        | 検索 URL からリロードした後のブラウザバック時に検索窓をクリアするフラグ |

---

## カテゴリ順序

`useGlobalHeaderLogic.ts` 内にハードコードされている:

```ts
const categoryOrder = ['html', 'css', 'js', 'ai', 'photo', 'etc']
```

カテゴリを追加する際はこの配列に追加する必要がある。
