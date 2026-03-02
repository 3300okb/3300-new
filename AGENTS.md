# AGENTS.md

このファイルは Codex CLI がこのリポジトリで作業する際のエントリーポイントです。

## プロジェクト概要

**3300-new** — 個人技術ノートアプリ。Web フロントエンド技術（JS・CSS・HTML・AI 等）の記事を記録・検索できる SPA。
記事は Vue コンポーネントとして管理され、ビルド時に検索インデックスが自動生成される。

技術スタック: **Vue 3** + **Vite** + **TypeScript** + **Tailwind CSS 4**

---

## ドキュメント参照

タスクに応じて以下のファイルを参照してください。**必要なときだけ読み込んでください**（常に全部読む必要はありません）：

| ファイル                     | 読むタイミング                           |
| ---------------------------- | ---------------------------------------- |
| `.codex/workflow.md`         | 作業開始時・タスクの進め方を確認するとき |
| `.codex/coding-standards.md` | コードを書く・修正する前                 |
| `.codex/testing.md`          | テストを書く・実行するとき               |
| `.codex/git.md`              | コミット・ブランチ操作を行う前           |
| `.codex/environment.md`      | 環境セットアップ・環境変数を扱うとき     |

---

## クイックリファレンス

よく使うコマンド（詳細は `.codex/workflow.md` 参照）：

```bash
npm run dev              # 開発サーバー起動（index 自動生成あり）
npm run build            # プロダクションビルド（check + tsc + vite）
npm run check            # lint + markuplint + prettier 一括チェック
npm run fix              # lint:fix + format 一括修正
npm run index:generate   # 記事インデックス再生成（記事追加・削除時は必須）
```

---

## ディレクトリ構成

```
3300-new/
├── src/
│   ├── main.ts                    # アプリ起動エントリーポイント
│   ├── App.vue                    # ルートコンポーネント（記事一覧/詳細切替）
│   ├── assets/                    # グローバル CSS（Tailwind エントリー）
│   ├── components/
│   │   ├── ArticleContent.vue     # 記事詳細表示（動的インポート）
│   │   ├── ArticleHeader.vue      # 記事ヘッダー（タイトル・更新日）
│   │   ├── ArticleList.vue        # 記事一覧・カテゴリフィルター
│   │   ├── GlobalHeader.vue       # グローバルヘッダー（検索ボックス含む）
│   │   └── article/               # 記事コンポーネント（カテゴリ別）
│   │       ├── ai/
│   │       ├── css/
│   │       ├── etc/
│   │       ├── html/
│   │       ├── js/
│   │       └── photo/
│   ├── composables/               # Vue composables（useXxx 形式）
│   └── utils/                     # ユーティリティ関数
├── scripts/                       # ビルド補助スクリプト
├── public/                        # 自動生成インデックス JSON
├── .github/workflows/             # CI/CD（deploy, codex-review）
├── vite.config.ts
├── eslint.config.js
└── package.json
```

### 主要ディレクトリ

- `src/components/article/`: 記事コンポーネント。`category/filename` パスが記事 ID に直結するため変更禁止
- `src/composables/`: 記事インデックス・検索ロジックの Vue composables
- `scripts/`: インデックス生成・フォントサブセット・lint ヘルパー
- `public/`: ランタイムでフェッチされる JSON インデックス（`npm run index:generate` で生成）
