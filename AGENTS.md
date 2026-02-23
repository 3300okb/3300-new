# AGENTS.md

このファイルは Codex CLI がこのリポジトリで作業する際の指示です。

## プロジェクト概要

このプロジェクトは、Vue 3 + Vite + TypeScript で構築された個人ナレッジサイトです。記事コンテンツは `src/components/article/` 配下の Vue SFC として管理され、検索用・一覧用インデックスを `scripts/generate-article-index.ts` で生成して `public/` から配信します。

技術スタック: Vue 3, Vite, TypeScript, Tailwind CSS v4, Vue Router, TanStack Query, ESLint, Prettier, markuplint

---

## 作業フロー

タスクに取り組む際は以下の手順を守ってください：

1. **調査**: 対象ファイルをすべて読み、影響範囲を把握してから変更に入る
2. **実装**: 既存コードのスタイル・命名規則・ファイル構成に合わせて実装する
3. **検証**: 実装後はビルド・lint・テストを実行し、すべてパスすることを確認する
4. **報告**: 変更ファイルと実行結果を明示して報告する

シンプルな1行修正などは調査フェーズを省略して直接実装してよい。

---

## クイックリファレンス

よく使うコマンド（詳細は下記参照）：

```bash
npm run dev
npm run build
npm run check
npm run index:generate
npm run lint
```

---

## コマンドリファレンス

### 開発サーバー

```bash
npm run dev
```

### ビルド

```bash
npm run build
```

### テスト

```bash
# 自動テストコマンドは package.json に未定義（2026-02-23 時点）
# 代替の総合チェック:
npm run check
```

### Lint / フォーマット

```bash
npm run lint
npm run lint:fix
npm run lint:markup
npm run lint:markup:all
npm run format
npm run prettier:check
```

---

## ディレクトリ構成

```text
.
├── .github/workflows/      # CI/CD (deploy, codex review)
├── public/                 # 生成済み記事インデックスや公開アセット
├── scripts/                # インデックス生成・フォント処理・lint補助
├── src/
│   ├── assets/             # Tailwind入力CSS・画像・CSV
│   ├── components/
│   │   ├── article/        # 記事本体SFC（カテゴリ別）
│   │   └── *.vue           # 画面コンポーネント
│   ├── composables/        # 再利用ロジック
│   ├── utils/              # ユーティリティ
│   ├── App.vue
│   └── main.ts
├── index.html
├── package.json
└── vite.config.ts
```

### 主要ディレクトリ

- `src/components/article/`: 記事コンテンツ（`category/filename` が記事IDとして扱われる）
- `scripts/`: インデックス生成やフォントサブセットなどの運用スクリプト
- `public/`: 実行時に fetch される検索インデックス JSON を含む配信対象
- `.github/workflows/`: `main` push でのデプロイと PR コメント起点の Codex review

---

## コーディング規約

### 命名規則

- TypeScript は `camelCase`（関数・変数）を使用
- Vue コンポーネントファイルは `PascalCase.vue` を基本とする
- composable は `useXxx.ts` 形式（例: `useSearchIndex.ts`）
- 記事ファイルは kebab-case 相当の名前を使用し、`category/filename` を不変IDとして扱う

### ファイル・フォルダ構成のルール

- 画面のエントリは `src/main.ts` と `src/App.vue`
- 汎用UIは `src/components/`、状態や取得ロジックは `src/composables/` に分離
- 新規記事はカテゴリ配下 (`src/components/article/<category>/`) に追加
- 記事メタ情報として `metadata.updateDate` をエクスポートする

### コメント・ドキュメントのルール

- コメントは「なぜそうするか（Why）」を書く。「何をするか（What）」はコードが語る
- 既存コメントは日本語が中心のため、追加コメントも文脈に合わせる
- README と記事作法（`updateDate` 等）に矛盾する仕様変更をしない

### 禁止事項

- `.env` ファイルをコミットしない
- `console.log` などのデバッグ出力を残したままコミットしない
- DOMPurify なしの `v-html` を追加しない（ESLint でも原則禁止）
- 記事パスを安易に変更しない（検索インデックス・URL互換性に影響）

---

## テスト方針

### テストフレームワーク

- 未確認 - 要記入（少なくとも `package.json` 上は単体テスト実行スクリプト未定義）

### テストファイルの配置

- 未確認 - 要記入（`tests/`、`__tests__/`、`*.spec.*`、`*.test.*` は未検出）

### テストの実行方法

```bash
npm run check
```

### テストを書く際の注意点

- 実装変更時は対応するテストも必ず追加・修正する
- 現状は静的検証中心のため、機能追加時はテスト基盤の導入も検討する

---

## Git ワークフロー

### ブランチ戦略

- `main` ブランチへの push でデプロイワークフローが起動する
- 機能開発は `dev/...` や `codex/...` の作業ブランチで行い、PR 経由でマージする

### コミットメッセージ規則

- 既存履歴は `feat(...)` と短い要約（`add ...`, `edit ...`, `rebuild` など）が混在
- 推奨: 1行要約で変更意図を明確化し、必要に応じて `feat(scope): ...` 形式を使う

### PR / MR のルール

- PR コメントに `@codex review` を含めると Codex review ワークフローが起動する
- それ以外の必須テンプレート・レビュアー規則は未確認 - 要記入

---

## 環境設定

### 必須環境変数

- 未確認 - 要記入（`.env.example` は未検出）
- デプロイ用 GitHub Secrets は `.github/workflows/deploy.yml` を参照

### ローカル開発環境のセットアップ

```bash
npm ci
npm run index:generate
npm run dev
```
