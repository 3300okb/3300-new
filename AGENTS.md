# AGENTS.md

このファイルは Codex CLI がこのリポジトリで作業する際のエントリーポイントです。

## プロジェクト概要

`3300-new` は、技術メモ記事をカテゴリ別の Vue コンポーネントとして管理し、一覧・検索インデックスを生成して配信するナレッジサイトです。

技術スタック: Vue 3, Vite 7, TypeScript 5, Tailwind CSS 4, ESLint 9, Prettier 3, markuplint, Node.js 22

---

## ドキュメント参照

タスクに応じて以下のファイルを参照してください。**必要なときだけ読み込んでください**（常に全部読む必要はありません）：

| ファイル                     | 読むタイミング                             |
| ---------------------------- | ------------------------------------------ |
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
npm run index:generate
npm run subset
```

---

## ディレクトリ構成

```text
.
├─ .github/workflows/
├─ public/
│  └─ sample/
├─ scripts/
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  └─ article/
│  ├─ composables/
│  └─ utils/
├─ package.json
└─ README.md
```

### 主要ディレクトリ

- `src/components/article/`: カテゴリ別の技術記事 Vue ファイル群
- `src/components/`: 画面構成・UI コンポーネント
- `src/composables/`: 検索・一覧・ヘッダーなどのロジック
- `scripts/`: インデックス生成・フォントサブセット・lint 補助スクリプト
- `public/`: 生成済みインデックス JSON と配信用静的アセット
