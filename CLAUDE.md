# CLAUDE.md

このファイルは Claude（AI）がこのリポジトリで作業する際の行動指針です。

## プロジェクト概要

**3300-new** - 個人技術ノートアプリ。Web フロントエンド技術（JS・CSS・HTML・AI 等）の記事を記録・検索できる SPA。

技術スタック: **Vue 3** + **Vite** + **TypeScript** + **Tailwind CSS 4**

- UI エントリー: `src/App.vue`、アプリ起動: `src/main.ts`
- 記事は `src/components/article/<category>/<name>.vue` に配置
- カテゴリ: `ai`, `css`, `etc`, `html`, `js`, `photo`
- 記事インデックス・検索インデックスは `public/` に自動生成され、ランタイムでフェッチ

---

## エージェント構成

このリポジトリには `.claude/agents/` に4つのサブエージェントが定義されています。
タスクの性質に応じて自律的に適切なエージェントを選択・連携させてください。

| エージェント   | 役割       | 主な起動条件                       |
| -------------- | ---------- | ---------------------------------- |
| **researcher** | 調査・解析 | 情報不足・原因不明・影響範囲の把握 |
| **planner**    | 設計・計画 | 実装方針の決定・ステップ分解       |
| **coder**      | 実装       | コードの作成・修正・テスト         |
| **reviewer**   | レビュー   | 実装完了後の品質確認               |

### 標準フロー

```
タスク受信
  → researcher（調査）
  → planner（計画）
  → coder（実装）
  → reviewer（レビュー）
  → 完了 or 差し戻し → coder（修正）
```

シンプルなタスク（明確な1行修正など）は researcher/planner を省略して coder から開始してよい。

---

## クイックリファレンス

よく使うコマンド（詳細は `.claude/docs/COMMANDS.md` を参照）：

```bash
npm run dev              # 開発サーバー起動（index自動生成あり）
npm run build            # プロダクションビルド（check + tsc + vite）
npm run check            # lint + markuplint + prettier 一括チェック
npm run fix              # lint:fix + format 一括修正
npm run index:generate   # 記事インデックス再生成（記事追加・削除時は必須）
```

---

## 作業前チェックリスト

- [ ] タスクの要件を正確に把握したか
- [ ] 影響範囲を確認したか（researcher）
- [ ] 実装方針を決めたか（planner）
- [ ] 既存コードのスタイル・命名規則を確認したか
- [ ] `npm run check` が通っているか確認したか

---

## 記事追加時の手順

1. `src/components/article/<category>/<name>.vue` を作成
2. `export const metadata = { updateDate: 'YYYY/MM/DD' }` を含める
3. `<ArticleHeader :update-date="metadata.updateDate" />` を使用
4. `npm run index:generate` でインデックスを更新
5. `npm run check` で品質チェック

---

## 禁止事項

- `.env` ファイルをコミットしない
- `console.log` などのデバッグ出力を残したままコミットしない
- `v-html` を DOMPurify なしで使用しない
- `dist/` をコミットしない
- 記事の `category/filename` パスを変更しない（検索インデックスが壊れる）
- `main` ブランチに直接プッシュしない

---

## ドキュメント配置

| ファイル                           | 用途                                           |
| ---------------------------------- | ---------------------------------------------- |
| `CLAUDE.md`                        | Claude の行動指針・全体概要（このファイル）    |
| `.claude/agents/researcher.md`     | 調査・解析エージェントの定義と行動原則         |
| `.claude/agents/planner.md`        | プランニングエージェントの定義と行動原則       |
| `.claude/agents/coder.md`          | コーディングエージェントの定義と行動原則       |
| `.claude/agents/reviewer.md`       | レビューエージェントの定義と行動原則           |
| `.claude/docs/COMMANDS.md`         | ビルド・テスト・開発サーバーなど実コマンド一覧 |
| `.claude/docs/ARCHITECTURE.md`     | ディレクトリ構成・モジュール・データフロー     |
| `.claude/docs/CODING_STANDARDS.md` | 命名規則・コードスタイル・禁止事項             |
| `.claude/docs/TESTING.md`          | テスト方針・品質チェック方法                   |
| `.claude/docs/GIT_WORKFLOW.md`     | ブランチ戦略・コミット規則・CI/CD              |
| `.claude/docs/ENVIRONMENT.md`      | 環境変数・ローカルセットアップ                 |
