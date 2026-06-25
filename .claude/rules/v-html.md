---
description: v-html の使用制約（GlobalHeader.vue のみ例外）
paths:
  - src/components/GlobalHeader.vue
---

# v-html のルール

- `v-html` は原則使用禁止。このファイル（`GlobalHeader.vue`）のみ例外として許可されている。
- 例外箇所でも **必ず DOMPurify でサニタイズ** してから渡すこと。
- 他コンポーネントで `v-html` が必要になった場合は設計を見直す（生 HTML 注入を避ける）。
