# environment.md — 環境設定

## 必須環境変数

- ローカル開発で必須の `.env` 変数は未確認 - 要記入（`.env.example` なし）
- デプロイ時の秘密情報は GitHub Actions Secrets（`SERVER_*`, `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`）で管理される

## ローカル開発環境のセットアップ

```bash
nvm use 22.15.0
npm ci
npm run dev
```

## 補足セットアップ（必要時）

```bash
# フォントサブセットコマンドを使う場合
python3 -m pip install --user "fonttools[woff]"
npm run subset
```
