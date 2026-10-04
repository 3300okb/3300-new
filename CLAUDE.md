# CLAUDE.md

## プロジェクト概要

**3300-new** — Web フロントエンド技術（JS・CSS・HTML・AI 等）の個人技術ノート SPA。

- 記事配置: `src/components/article/<category>/<name>.vue`
- カテゴリ: `ai`, `css`, `etc`, `html`, `js`, `photo`
- 記事・検索インデックスは `public/` に自動生成され、ランタイムでフェッチ

---

## エージェント構成

`.claude/agents/` に researcher / planner / coder / reviewer がある。
使うのは、ユーザーが指示したときか、独立した大きな作業（広範囲の調査など）のときだけ。

---

## クイックリファレンス

- `npm run index:generate` は記事の追加・削除時に必須。
- 完了の検証ゲート: `npm run check` と `npm run build`（build は check・typecheck・vite build を含む）。テストは未導入。

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

- `console.log` などのデバッグ出力を残してコミットしない
- `v-html` を DOMPurify なしで使わない
- `dist/` をコミットしない
- 記事の `category/filename` パスを変更しない（検索インデックスが壊れる）

> 記事の mv、`dist/`・`public/data` の rm は `.claude/hooks/guard.sh`（`.claude/settings.json` の PreToolUse）でブロック。
> `.env` のコミット・main への直接 push はグローバルの hooks でブロック。
