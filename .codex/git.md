# git.md — Git ワークフロー

## ブランチ戦略

- `main`: 本番ブランチ（push で `deploy.yml` が走る）
- `dev/<date>-<description>`: 開発ブランチ（既存運用）
- `main` への直接 push は避け、PR 経由で反映する

## コミットメッセージ規則

- 英語の短い件名を基本とする
- 既存履歴では以下の形式が中心
  - 命令形ベース: `add article`, `update codex setup prompt`
  - Conventional Commits 風: `fix: ...`, `feat(ci): ...`
- 1コミット1目的を基本とする

## PR / MR のルール

- PR コメントで `@codex review` を含めると `codex-review.yml` により自動レビューが実行される
- デプロイは `main` push 時に実行されるため、マージ前に `npm run build` を通しておく
