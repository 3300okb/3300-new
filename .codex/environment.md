# environment.md — 環境設定

## 必須環境変数

**ローカル開発では環境変数の設定は不要。**

`.env.example` ファイルは存在しない。環境変数は CI/CD（GitHub Actions）でのみ使用され、GitHub Secrets で管理されている：

| シークレット名 | 用途 |
| --- | --- |
| `SERVER_SSH_KEY` | 本番サーバーへの SSH 秘密鍵（デプロイ用） |
| `SERVER_SSH_PORT` | 本番サーバーの SSH ポート番号 |
| `SERVER_SSH_HOST` | 本番サーバーのホスト名 |
| `SERVER_SSH_USER` | 本番サーバーの SSH ユーザー名 |
| `SERVER_TARGET` | 本番サーバーのデプロイ先ディレクトリパス |
| `OPENAI_API_KEY` | OpenAI Codex レビュー用 API キー |

---

## ローカル開発環境のセットアップ

```bash
# 1. Node.js のバージョンを合わせる（.nvmrc: 22.15.0）
nvm use

# 2. 依存パッケージのインストール
npm install

# 3. 記事インデックスを生成（初回必須）
npm run index:generate

# 4. 開発サーバーを起動
npm run dev
# → http://localhost:5173 でアクセス可能
```

`npm run dev` は `predev` フックで `npm run index:generate` を自動実行するため、
ステップ 3 は省略可能（ただし明示実行を推奨）。

---

## 環境ごとの差異

| 環境 | ビルド方法 | 備考 |
| --- | --- | --- |
| ローカル開発 | `npm run dev` | HMR あり、ソースマップあり |
| ローカルプレビュー | `npm run build && npm run preview` | 本番相当の動作確認 |
| 本番 | GitHub Actions `deploy.yml` が実行 | `npm run build` → rsync でサーバーに配置 |

---

## Docker / コンテナ

**Docker は使用していない**（`docker-compose.yml`、`Dockerfile` は存在しない）。

---

## パスエイリアス

```typescript
// tsconfig / vite.config で定義済み
import { foo } from '@/utils/foo' // → src/utils/foo
```
