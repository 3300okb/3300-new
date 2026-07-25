# CLAUDE.md

## プロジェクト概要

**3300-new** — Web フロントエンド技術（JS・CSS・HTML・AI 等）の個人技術ノート SPA。

- 記事配置: `src/components/article/<category>/<name>.vue`
- カテゴリ: `ai`, `css`, `etc`, `html`, `js`, `photo`
- 記事・検索インデックスは `public/` に自動生成され、ランタイムでフェッチ

---

## エージェント構成

標準フロー: researcher → planner → coder → reviewer
単純な 1 行修正は researcher/planner を省略可。

---

## クイックリファレンス

- `npm run index:generate` は記事の追加・削除時に必須。

---

## 詳細ドキュメント（必要時に読み込む）

> 以下は `@` インポートではなく単なるパス参照。
> 毎セッションのコンテキスト消費を避けるため、関連タスク時にのみ Read で読み込む。

- `.claude/docs/ARCHITECTURE.md` — ディレクトリ構成・データフロー
- `.claude/docs/CODING_STANDARDS.md` — 命名規則・コードスタイル
- `.claude/docs/COMMANDS.md` — 実コマンド一覧
- `.claude/docs/TESTING.md` — テスト方針
- `.claude/docs/GIT_WORKFLOW.md` — ブランチ戦略・コミット規則
- `.claude/docs/ENVIRONMENT.md` — 環境変数・ローカルセットアップ

---

## 禁止事項

- `.env` をコミットしない
- `console.log` などのデバッグ出力を残してコミットしない
- `v-html` を DOMPurify なしで使わない
- `dist/` をコミットしない
- 記事の `category/filename` パスを変更しない（検索インデックスが壊れる）
- `main` ブランチへの直接プッシュ禁止

> 機械的な強制は `.claude/hooks/guard.sh` で実施。
