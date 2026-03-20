# git.md — Git ワークフロー

## ブランチ戦略

- 本番デプロイは `main` ブランチへの push をトリガーに実行される
- 作業ブランチは既存運用に合わせて `dev/<timestamp>-<topic>` 形式が多い
- 長期作業でも `main` へ直接コミットせず、作業ブランチ経由でマージする

## コミットメッセージ規則

- 既存履歴に合わせ、`feat:`, `fix:`, `refactor:`, `chore:` などの Conventional Commits を推奨
- スコープが明確な変更は `feat(ci): ...` のように `type(scope): summary` を使う
- 1コミット1目的を守り、要約は簡潔に記述する

## PR / MR のルール

- PR 作成前に `npm run build` と `npm run check` を実行して成功を確認する
- PR のレビュー補助として `@codex review` / `@claude-review` コメントで自動レビューを呼び出せる
- 必須レビュー人数・ラベル運用は未確認 - 要記入
