# Git ワークフロー

## ブランチ戦略

| ブランチ                   | 用途                                                |
| -------------------------- | --------------------------------------------------- |
| `main`                     | 本番ブランチ。プッシュ時に自動デプロイが走る        |
| `dev/<date>-<description>` | 開発ブランチ（例: `dev/202602231400-claude-setup`） |

- 機能開発・修正は `dev/` プレフィックスのブランチで行う
- `main` への直接プッシュは禁止
- PR経由でマージする

## コミットメッセージ規則

明示的な規則ファイルは存在しないが、既存コミット履歴から以下のパターンが読み取れる:

```
<動詞> <変更内容>
```

例:

- `add article`
- `rebuild`
- `sort search results by updateDate descending within each group`
- `merge`
- `unify make md prompt`

- 英語表記
- 命令形（add, fix, update, remove, refactor, rebuild など）
- 件名のみ（本文なし）が多い

## PR / MR のルール

- PR マージ後に `main` ブランチへのプッシュが自動デプロイをトリガーする
- PR コメントに `@codex review` を投稿すると OpenAI Codex が自動レビューを行う（`codex-review.yml`）

## CI/CD パイプライン

### deploy.yml

- **トリガー**: `main` ブランチへの push / 手動実行（`workflow_dispatch`）
- **実行環境**: ubuntu-latest, Node.js 22
- **処理フロー**:
  1. `npm ci` でクリーンインストール
  2. `npm run build` でビルド（`prebuild` フック含む）
  3. SSH キーをセットアップ
  4. rsync のドライランで差分チェック
  5. 変更があった場合のみ rsync で本番サーバーにデプロイ
- **必要な GitHub Secrets**:
  - `SERVER_SSH_KEY` - SSH 秘密鍵
  - `SERVER_SSH_PORT` - SSH ポート番号
  - `SERVER_SSH_HOST` - サーバーホスト名
  - `SERVER_SSH_USER` - SSH ユーザー名
  - `SERVER_TARGET` - デプロイ先パス
- **コンカレンシー**: `deploy-server` グループで同時実行を防止、後発ジョブが優先

### codex-review.yml

- **トリガー**: PR のコメント作成（`@codex review` 含む場合のみ実行）
- **処理フロー**:
  1. PR 情報取得
  2. PR の merge commit をチェックアウト
  3. OpenAI Codex でコードレビュー実行
  4. レビュー結果を PR コメントとして投稿
- **必要な GitHub Secrets**: `OPENAI_API_KEY`
