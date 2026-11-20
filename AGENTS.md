# AGENTS.md

このファイルは、Codex が `3300-new` で作業するときのリポジトリ固有ハーネスです。
グローバルの `~/.codex/AGENTS.md` を前提に、このリポジトリで守る文脈、変更境界、検証条件を定義します。

## プロジェクト概要

`3300-new` は、Web フロントエンド技術（JS/CSS/HTML/AI など）の記事を管理・検索する Vue 3 SPA です。
記事は `src/components/article/<category>/<name>.vue` に配置され、`scripts/generate-article-index.ts` により `public/` 配下へ一覧・検索インデックス JSON が生成されます。

技術スタック: Vue 3, Vite, TypeScript, Tailwind CSS 4, ESLint, Prettier, markuplint

## 作業開始ハーネス

- 既存記事の `category/filename` は変えない（記事 ID と検索インデックスが壊れる）
- `public/` 配下のインデックス JSON は生成物として扱い、必要な場合だけ再生成する
- `dist/` は生成物として扱い、コミット対象にしない

## ドキュメント参照

必要なときだけ読み込むこと。常に全部読む必要はありません。

| ファイル                     | 内容                                      |
| ---------------------------- | ----------------------------------------- |
| `.codex/project-baseline.md` | 品質・セキュリティ基準                    |
| `.codex/workflow.md`         | 作業手順・報告形式                        |
| `.codex/coding-standards.md` | Vue / TypeScript / 記事のコーディング規約 |
| `.codex/testing.md`          | 検証方針（テストは未導入）                |
| `.codex/git.md`              | ブランチ・コミット・PR                    |
| `.codex/environment.md`      | 環境変数・セットアップ                    |
| `.codex/agents/*.toml`       | サブエージェント設定                      |

## 主要コマンド

```bash
npm run dev
npm run build
npm run check
npm run fix
npm run index:generate
```

## 変更境界

- アプリ本体は `src/` を中心に変更する
- 記事コンテンツは `src/components/article/<category>/<name>.vue` に配置する
- 記事カテゴリは既存の `ai`, `css`, `etc`, `html`, `js`, `photo` を優先する
- 検索・一覧に影響する記事変更では `npm run index:generate` を実行し、生成差分を確認する
- Tailwind は既存の設計とユーティリティ運用に合わせ、不要な独自 CSS を増やさない
- `v-html` や `innerHTML` 相当の直接挿入は原則避け、必要な場合はサニタイズを確認する

## 検証ハーネス

変更内容に応じて、以下を実行して完了を判断します。

```bash
npm run check
npm run build
```

追加条件:

- 記事・検索インデックスに影響する場合: `npm run index:generate`
- UI に影響する場合: ブラウザで主要表示とレスポンシブを確認
- 型やビルドに影響する場合: `npm run build` の `typecheck` と `vite:build` の通過を確認

## 完了条件

- `npm run check` と `npm run build` が成功している
- 生成物に差分が出た場合、その必要性を説明できる

## ディレクトリ構成

```text
.
├── src/
│   ├── App.vue
│   ├── main.ts
│   ├── components/
│   │   └── article/
│   │       ├── ai/
│   │       ├── css/
│   │       ├── etc/
│   │       ├── html/
│   │       ├── js/
│   │       └── photo/
│   ├── composables/
│   └── utils/
├── scripts/
├── public/
├── .github/workflows/
└── .codex/
```

## 主要ディレクトリ

- `src/`: アプリ本体（UI・ロジック・記事コンポーネント）
- `src/components/article/`: 記事コンテンツ（カテゴリ別）
- `src/composables/`: インデックス取得・検索ロジック
- `scripts/`: インデックス生成や補助チェックの実行スクリプト
- `public/`: 生成済みインデックスやサンプル静的ファイル
- `.github/workflows/`: デプロイ/レビュー用 CI ワークフロー
- `.codex/`: Codex CLI 用プロジェクト固有ルールとエージェント設定
