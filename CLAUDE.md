# CLAUDE.md

個人技術メモサイト **3300.cloud** のリポジトリ。
Vue 3 + Vite + TypeScript + Tailwind CSS v4 で構築した SPA。

## スタック

| 項目                 | 値                                                   |
| -------------------- | ---------------------------------------------------- |
| Node                 | 22.15.0 (`.nvmrc`)                                   |
| パッケージマネージャ | npm (`npm ci` / `npm run *`)                         |
| フレームワーク       | Vue 3 (Composition API, `<script setup>`)            |
| ビルドツール         | Vite 7                                               |
| 言語                 | TypeScript 5.9                                       |
| CSS                  | Tailwind CSS v4 (`@tailwindcss/vite` プラグイン)     |
| ルーティング         | Vue Router **なし** — URL クエリパラメータで状態管理 |

## エントリポイント

```
src/main.ts          → アプリ起動
src/App.vue          → ルートコンポーネント（記事一覧 / 記事詳細を切り替え）
src/assets/input.css → Tailwind CSS ソース
```

## ディレクトリ構成（要点）

```
src/
  components/
    article/<category>/<name>.vue   ← 記事コンポーネント（全記事ここに置く）
    ArticleContent.vue              ← 記事を動的インポートして表示
    ArticleHeader.vue               ← 記事タイトル・更新日・sampleリンク
    ArticleList.vue                 ← 記事一覧（更新日降順）
    GlobalHeader.vue                ← ヘッダー（検索・カテゴリフィルタ）
    PreCodes.vue                    ← <pre>ブロックのラッパー
    CopyCode.vue                    ← コードコピーボタン
    SearchBox.vue                   ← 検索UI
    SwitchBox.vue                   ← トグルスイッチ
  composables/
    useArticleIndex.ts              ← 記事インデックスのフェッチ・キャッシュ
    useSearchIndex.ts               ← 検索インデックスのフェッチ・キャッシュ
    useGlobalHeaderLogic.ts         ← ヘッダーロジック（URLパラメータ・history）
    useSearchBoxLogic.ts            ← 検索ロジック（デバウンス・ハイライト）
  utils/
    scrollToPreElement.ts           ← 検索結果からのスクロール先制御
scripts/
  generate-article-index.ts        ← 記事・検索インデックス JSON 生成
  font-subset.ts                   ← フォントサブセット化（要 Python + fonttools）
  markuplint-changed.ts            ← 変更済み .vue のみ markuplint 実行
  check-title-mismatch.ts          ← ファイル名と ArticleHeader title の照合
public/
  article-index.json               ← カテゴリ一覧マニフェスト（生成物）
  article-index-<category>.json    ← カテゴリ別記事リスト（生成物）
  search-index.json                ← 検索用カテゴリマニフェスト（生成物）
  search-index-<category>.json     ← カテゴリ別検索インデックス（生成物）
  sample/                          ← デモ用 HTML / CSS / 画像 / 動画
```

## カテゴリ

固定順: `html` → `css` → `js` → `ai` → `photo` → `etc`

## 記事追加の最小手順

1. `src/components/article/<category>/<name>.vue` を作成
2. ファイル名 = `<ArticleHeader title="...">` の値（完全一致必須）
3. `npm run index:generate` でインデックス再生成（`npm run dev` の predev で自動実行）

詳細 → `.CLAUDE_DOCS/ARTICLE_AUTHORING.md`

## よく使うコマンド（抜粋）

| コマンド                 | 用途                                                                  |
| ------------------------ | --------------------------------------------------------------------- |
| `npm run dev`            | 開発サーバー起動（predev でインデックス自動生成）                     |
| `npm run build`          | 本番ビルド（prebuild でインデックス生成・フォントサブセット・format） |
| `npm run check`          | lint + lint:markup + prettier:check を並列実行                        |
| `npm run fix`            | lint:fix + format を並列実行                                          |
| `npm run index:generate` | 記事・検索インデックス JSON を再生成                                  |

全コマンド詳細 → `.CLAUDE_DOCS/COMMANDS.md`

## ドキュメント配置

| ファイル                            | 用途                                                            |
| ----------------------------------- | --------------------------------------------------------------- |
| `CLAUDE.md`                         | 本ファイル。プロジェクト概要・最小知識の入口                    |
| `.CLAUDE_DOCS/COMMANDS.md`          | npm scripts 全コマンドの詳細・実行タイミング・注意点            |
| `.CLAUDE_DOCS/ARCHITECTURE.md`      | SPA の状態管理・URLパラメータ設計・コンポーネント間データフロー |
| `.CLAUDE_DOCS/ARTICLE_AUTHORING.md` | 記事 .vue ファイルの作成・更新手順と制約                        |
| `.CLAUDE_DOCS/LINTING.md`           | ESLint / Prettier / Markuplint のルール・設定・除外パターン     |
| `.CLAUDE_DOCS/DEPLOY.md`            | GitHub Actions デプロイフロー・rsync・Secrets 一覧              |
