# AGENTS.md

このファイルは、Codex が `3300-new` で作業するときのリポジトリ固有ハーネスです。
グローバルの `~/.codex/AGENTS.md` を前提に、このリポジトリで守る文脈、変更境界、検証条件を定義します。

## プロジェクト概要

`3300-new` は、Web フロントエンド技術（JS/CSS/HTML/AI など）の記事を管理・検索する Vue 3 SPA です。
記事は `src/components/article/<category>/<name>.vue` に配置され、`scripts/generate-article-index.ts` により `public/` 配下へ一覧・検索インデックス JSON が生成されます。

技術スタック: Vue 3, Vite, TypeScript, Tailwind CSS 4, ESLint, Prettier, markuplint

## 作業開始ハーネス

- 変更前に対象ファイルと関連する `.codex/*.md` だけを読む
- UI、検索、記事、生成スクリプトのどれに影響するかを先に切り分ける
- 記事 ID は `category/filename` に依存するため、既存記事のリネームは互換性影響を確認してから行う
- `public/` 配下のインデックス JSON は生成物として扱い、必要な場合だけ再生成する
- `dist/` は生成物として扱い、コミット対象にしない

## ドキュメント参照

必要なときだけ読み込むこと。常に全部読む必要はありません。

| ファイル                     | 読むタイミング                           |
| ---------------------------- | ---------------------------------------- |
| `.codex/project-baseline.md` | 品質・セキュリティ基準を確認するとき     |
| `.codex/workflow.md`         | 作業手順や報告形式を確認するとき         |
| `.codex/coding-standards.md` | Vue/TypeScript/記事を修正する前          |
| `.codex/testing.md`          | テスト・検証方針を決めるとき             |
| `.codex/git.md`              | ブランチ・コミット・PR を扱うとき        |
| `.codex/environment.md`      | 環境変数・セットアップを扱うとき         |
| `.codex/agents/*.toml`       | サブエージェント設定を変更・追加するとき |

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

- 変更意図と差分が一致している
- `npm run check` が成功している
- `npm run build` が成功している
- 生成物に差分が出た場合、その必要性を説明できる
- 未実行の検証がある場合は、理由と代替確認を報告する

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
