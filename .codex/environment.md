# environment.md — 環境設定

## 必須環境変数

- ローカル開発向けの必須環境変数は未確認（`.env.example` なし）
- CI/CD では GitHub Secrets を使用
  - `SERVER_SSH_KEY`
  - `SERVER_SSH_PORT`
  - `SERVER_SSH_HOST`
  - `SERVER_SSH_USER`
  - `SERVER_TARGET`
  - `OPENAI_API_KEY`

## ローカル開発環境のセットアップ

```bash
nvm use
npm install
npm run index:generate
npm run dev
```

補足:

- `.nvmrc` は `22.15.0`
- `npm run dev` には `predev` があり、インデックス生成が自動実行される
- Docker / docker-compose は未使用
