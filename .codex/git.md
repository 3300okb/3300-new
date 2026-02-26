# git.md — Git ワークフロー

## ブランチ戦略

| ブランチ | 用途 |
| --- | --- |
| `main` | 本番ブランチ。プッシュ時に自動デプロイが走る |
| `dev/<date>-<description>` | 開発ブランチ（例: `dev/202602231400-add-article`） |

- 機能開発・修正は `dev/` プレフィックスのブランチで行う
- **`main` への直接プッシュは禁止**
- PR 経由でマージする

---

## コミットメッセージ規則

既存コミット履歴のスタイルに合わせる：

```
<動詞> <変更内容>
```

例：
- `add article`
- `fix lint error`
- `update search logic`
- `rebuild`
- `refactor composables`

ルール：
- **英語表記**
- **命令形**（add, fix, update, remove, refactor, rebuild など）
- 件名のみ（本文なし）

---

## PR / MR のルール

- `dev/` ブランチから `main` へ PR を作成する
- PR マージ後に `main` への push が自動デプロイをトリガーする（`deploy.yml`）
- PR コメントに `@codex review` を投稿すると OpenAI Codex が自動レビューを行う（`codex-review.yml`）

---

## CI/CD パイプライン

### deploy.yml（本番デプロイ）

- **トリガー**: `main` ブランチへの push / 手動実行
- **処理**: `npm ci` → `npm run build` → rsync で本番サーバーにデプロイ
- **必要な GitHub Secrets**: `SERVER_SSH_KEY`, `SERVER_SSH_PORT`, `SERVER_SSH_HOST`, `SERVER_SSH_USER`, `SERVER_TARGET`

### codex-review.yml（自動コードレビュー）

- **トリガー**: PR コメントに `@codex review` が含まれる場合
- **処理**: OpenAI Codex でレビュー → PR コメントに結果投稿
- **必要な GitHub Secrets**: `OPENAI_API_KEY`
