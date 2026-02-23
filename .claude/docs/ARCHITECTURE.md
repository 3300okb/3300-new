# アーキテクチャ概要

## ディレクトリ構成

```
3300-new/
├── src/
│   ├── main.ts                    # アプリ起動エントリーポイント
│   ├── App.vue                    # ルートコンポーネント（記事一覧/詳細切替）
│   ├── env.d.ts                   # 環境変数型定義
│   ├── assets/
│   │   └── input.css              # グローバルCSS（Tailwind エントリー）
│   ├── components/
│   │   ├── ArticleContent.vue     # 記事詳細表示（動的インポート）
│   │   ├── ArticleHeader.vue      # 記事ヘッダー（タイトル・更新日）
│   │   ├── ArticleList.vue        # 記事一覧・カテゴリフィルター
│   │   ├── CopyCode.vue           # コードブロックのコピーボタン
│   │   ├── GlobalHeader.vue       # グローバルヘッダー（検索ボックス含む）
│   │   ├── PreCodes.vue           # pre ブロックのラッパー
│   │   ├── SearchBox.vue          # 検索UIコンポーネント
│   │   ├── SwitchBox.vue          # トグルスイッチUI
│   │   └── article/               # 記事コンテンツ（カテゴリ別）
│   │       ├── ai/                # AI関連記事
│   │       ├── css/               # CSS関連記事（26件）
│   │       ├── etc/               # その他記事（32件）
│   │       ├── html/              # HTML関連記事（10件）
│   │       ├── js/                # JavaScript関連記事（27件）
│   │       └── photo/             # 写真関連記事（5件）
│   ├── composables/
│   │   ├── useArticleIndex.ts     # 記事インデックスの fetch・管理
│   │   ├── useGlobalHeaderLogic.ts  # グローバルヘッダーのロジック
│   │   ├── useSearchBoxLogic.ts   # 検索ボックスのロジック（全文検索）
│   │   └── useSearchIndex.ts      # 検索インデックスの fetch・管理
│   └── utils/
│       └── scrollToPreElement.ts  # 検索結果の pre 要素へスクロール
├── scripts/
│   ├── generate-article-index.ts  # 記事インデックス生成スクリプト
│   ├── font-subset.ts             # フォントサブセット生成
│   ├── markuplint-changed.ts      # 変更ファイルのみ markuplint 実行
│   └── check-title-mismatch.ts   # 記事タイトル不一致チェック
├── public/
│   ├── article-index.json             # 全カテゴリ一覧
│   ├── article-index-<category>.json  # カテゴリ別記事一覧（自動生成）
│   ├── search-index.json              # 全カテゴリ一覧（検索用）
│   └── search-index-<category>.json   # カテゴリ別検索インデックス（自動生成）
├── dist/                          # ビルド出力（gitignore）
├── .github/
│   └── workflows/
│       ├── deploy.yml             # main プッシュ時に rsync でサーバーデプロイ
│       └── codex-review.yml       # PR コメント @codex review で OpenAI Codex レビュー
├── vite.config.ts                 # Vite設定（チャンク分割、エイリアス）
├── tsconfig.json / tsconfig.app.json / tsconfig.node.json
├── eslint.config.js               # ESLint 設定
├── .prettierrc                    # Prettier 設定
├── .markuplintrc.json             # markuplint 設定
└── tailwind.config.js             # Tailwind CSS 設定
```

## 主要モジュール・レイヤー

### 記事システム

- 各記事は `src/components/article/<category>/<name>.vue` に配置
- 各記事ファイルは以下を含む:
  - `export const metadata = { updateDate: 'YYYY/MM/DD' }` （必須）
  - `<ArticleHeader>` コンポーネント
  - 記事本文（`<pre>` ブロックが検索インデックスに使われる）
- 記事 ID は `category/filename` 形式で固定（パス変更不可）

### インデックス生成

- `scripts/generate-article-index.ts` が `.vue` ファイルを解析
- `updateDate` と `<pre>` ブロック内テキストを抽出
- カテゴリ別の JSON ファイルとして `public/` に出力
- ランタイムでフェッチされ、`useArticleIndex.ts` / `useSearchIndex.ts` で管理

### 状態管理

- Vue Router は未使用（SPA だが URL ベースルーティングなし）
- 記事選択状態は `App.vue` の `ref` で管理（`selectedCategory`, `selectedArticle`）
- スクロール位置は `sessionStorage` で保存・復元
- 検索インデックスは `@tanstack/vue-query` でキャッシュ管理

## データフロー

```
ユーザー操作
  ↓
App.vue（状態管理: selectedCategory / selectedArticle）
  ├─ GlobalHeader.vue
  │    └─ SearchBox.vue
  │         ├─ useSearchBoxLogic.ts（検索ロジック）
  │         └─ useSearchIndex.ts → fetch public/search-index-<cat>.json
  ├─ ArticleList.vue
  │    └─ useArticleIndex.ts → fetch public/article-index-<cat>.json
  └─ ArticleContent.vue（動的インポート）
       └─ src/components/article/<category>/<name>.vue（記事コンポーネント）
```

## 外部依存サービス

- **デプロイ先**: SSH/rsync で接続するリモートサーバー（詳細は GitHub Secrets 管理）
- **CI/CD**: GitHub Actions
- **コードレビュー**: OpenAI Codex（PR コメントトリガー）

## ビルド・チャンク戦略

Vite の `manualChunks` でカテゴリ別に記事チャンクを分割:

- `vendor-router` - vue-router
- `vendor-query` - @tanstack/vue-query
- `vendor-swiper` - swiper
- `vendor` - その他 node_modules
- `articles-js` - js カテゴリ記事
- `articles-css` - css カテゴリ記事
- `articles-etc` - etc カテゴリ記事
- `articles-other` - その他カテゴリ記事
