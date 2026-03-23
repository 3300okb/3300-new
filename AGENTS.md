# AGENTS.md

このファイルは Codex CLI がこのリポジトリで作業する際のエントリーポイントです。

## プロジェクト概要

`3300-new` は、Web フロントエンド技術（JS/CSS/HTML/AI など）の記事を管理・検索する Vue 3 SPA です。
記事は `src/components/article/<category>/<name>.vue` に配置され、`scripts/generate-article-index.ts` により `public/` 配下へ一覧・検索インデックス JSON が生成されます。

技術スタック: Vue 3, Vite, TypeScript, Tailwind CSS 4, ESLint, Prettier, markuplint

---

## ドキュメント参照

タスクに応じて以下のファイルを参照してください。**必要なときだけ読み込んでください**（常に全部読む必要はありません）：

| ファイル                     | 読むタイミング                             |
| ---------------------------- | ------------------------------------------ |
| `.codex/project-baseline.md` | 共通品質・セキュリティ基準を確認するとき   |
| `.codex/workflow.md`         | 作業開始時・タスクの進め方を確認するとき   |
| `.codex/coding-standards.md` | コードを書く・修正する前                   |
| `.codex/testing.md`          | テストを書く・実行するとき                 |
| `.codex/git.md`              | コミット・ブランチ操作を行う前             |
| `.codex/environment.md`      | 環境セットアップ・環境変数を扱うとき       |
| `.codex/agents/*.toml`       | サブエージェントの設定を変更・追加するとき |

---

## クイックリファレンス

よく使うコマンド（詳細は `.codex/workflow.md` 参照）：

```bash
npm run dev
npm run build
npm run check
npm run fix
npm run index:generate
```

---

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

### 主要ディレクトリ

- `src/`: アプリ本体（UI・ロジック・記事コンポーネント）
- `src/components/article/`: 記事コンテンツ（カテゴリ別）
- `src/composables/`: インデックス取得・検索ロジック
- `scripts/`: インデックス生成や補助チェックの実行スクリプト
- `public/`: 生成済みインデックスやサンプル静的ファイル
- `.github/workflows/`: デプロイ/レビュー用 CI ワークフロー
- `.codex/`: Codex CLI 用プロジェクト固有ルールとエージェント設定
