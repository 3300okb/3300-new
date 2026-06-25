# CLAUDE.md

## プロジェクト概要

**3300-new** — Web フロントエンド技術（JS・CSS・HTML・AI 等）の個人技術ノート SPA。

技術スタック: **Vue 3** + **Vite** + **TypeScript** + **Tailwind CSS 4**

- UI エントリー: `src/App.vue`、アプリ起動: `src/main.ts`
- 記事配置: `src/components/article/<category>/<name>.vue`
- カテゴリ: `ai`, `css`, `etc`, `html`, `js`, `photo`
- 記事・検索インデックスは `public/` に自動生成され、ランタイムでフェッチ

---

## エージェント構成

| エージェント   | 役割       | 主な起動条件                       |
| -------------- | ---------- | ---------------------------------- |
| **researcher** | 調査・解析 | 情報不足・原因不明・影響範囲の把握 |
| **planner**    | 設計・計画 | 実装方針の決定・ステップ分解       |
| **coder**      | 実装       | コードの作成・修正・テスト         |
| **reviewer**   | レビュー   | 実装完了後の品質確認               |

標準フロー: researcher → planner → coder → reviewer
単純な 1 行修正は researcher/planner を省略可。

---

## クイックリファレンス

```bash
npm run dev              # 開発サーバー（index 自動生成あり）
npm run build            # check + tsc + vite
npm run check            # lint + markuplint + prettier
npm run fix              # lint:fix + format
npm run index:generate   # 記事追加・削除時に必須
```

---

## スラッシュコマンド

- `/add-article` — 記事追加の定型フロー
- `/check` — fix → check → index:generate の順で検証

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
