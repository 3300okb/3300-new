---
description: 品質チェック一括実行（fix → check → index:generate）
---

以下を順に実行し、各ステップのログを提示してください。

1. `npm run fix` — 自動修正
2. `npm run check` — lint + markuplint + prettier
3. `npm run index:generate` — 記事インデックス再生成
4. `git status` で変更を確認

いずれかが失敗したら、原因を特定し修正案を提示してから次へ進んでください。
全成功の場合のみ「全チェック通過」と報告してください。
