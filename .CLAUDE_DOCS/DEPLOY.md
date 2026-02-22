# DEPLOY.md — デプロイフロー

## 概要

`main` ブランチへの push をトリガーに GitHub Actions が自動デプロイする。
デプロイ先はプライベートサーバーへの rsync。

## トリガー

```yaml
on:
  push:
    branches: ['main']
  workflow_dispatch: # 手動実行も可
```

## ワークフロー（`.github/workflows/deploy.yml`）

### 1. Checkout

`actions/checkout@v4` でソースを取得。

### 2. Setup Node

```yaml
node-version: '22'
cache: 'npm'
```

Node 22（`.nvmrc` と同じ）+ npm キャッシュ有効。

### 3. Install

```bash
npm ci
```

`package-lock.json` を使用して再現性のあるインストール。

### 4. Build

```bash
npm run build
```

- `prebuild`: index:generate → subset → format
- `build`: check → vue-tsc -b → vite build
- 出力: `dist/`

### 5. Setup SSH

- `secrets.SERVER_SSH_KEY` から `~/.ssh/id_ed25519` を作成（ed25519 鍵）
- `ssh-keyscan` で known_hosts に追加

### 6. Check dist changes（差分チェック）

```bash
rsync --dry-run --itemize-changes dist/ <server>:<target>
```

変更がなければ `changed=false` を出力し、次のステップをスキップ。

### 7. Deploy via rsync

```bash
rsync -avz --delete dist/ <server>:<target>
```

`--delete` で `dist/` にないファイルをサーバーから削除する。

## 必要な GitHub Secrets

| Secret            | 内容                             |
| ----------------- | -------------------------------- |
| `SERVER_SSH_KEY`  | サーバーの SSH 秘密鍵（ed25519） |
| `SERVER_SSH_PORT` | SSH ポート番号                   |
| `SERVER_SSH_HOST` | サーバーのホスト名または IP      |
| `SERVER_SSH_USER` | SSH ユーザー名                   |
| `SERVER_TARGET`   | デプロイ先ディレクトリパス       |

## 同時実行制御

```yaml
concurrency:
  group: deploy-server
  cancel-in-progress: true
```

同じグループの実行が重なった場合、古いものをキャンセルして最新のみ実行する。

## ローカルビルド確認

```bash
npm run build
npm run preview   # http://localhost:4173 でビルド結果を確認
```

## デプロイに含まれるもの

`dist/` の内容（`vite build` の出力）:

- `index.html`
- `assets/` — JS / CSS バンドル（ハッシュ付きファイル名）
- `article-index*.json` / `search-index*.json` — インデックス JSON
- `sample/` — デモファイル（HTML / CSS / 画像 / 動画）
- `favicon.ico`

## 注意

- `main` ブランチへの直接 push または PR マージがデプロイをトリガーする
- `dist/` はリポジトリにコミットしない（`.gitignore` で除外）
- フォントサブセット（`npm run subset`）は CI で Python + fonttools が必要
  - CI の ubuntu-latest には fonttools が事前インストールされていない場合があるため、
    ワークフローを変更する際は `pip install fonttools brotli` ステップの追加を検討
