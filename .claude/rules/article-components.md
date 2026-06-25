---
description: 記事コンポーネント（src/components/article/**）固有の制約
paths:
  - src/components/article/**
---

# 記事コンポーネントのルール

- ファイル名は **kebab-case**（例: `flex-basics.vue`）。`vue/multi-word-component-names` は除外済み。
- `export const metadata = { updateDate: 'YYYY/MM/DD' }` を **必須** で含める。
- テンプレート先頭に `<ArticleHeader :update-date="metadata.updateDate" />` を配置する。
- 記事 ID は `category/filename` パスで固定。**ファイル名・配置を変更しない**（検索インデックスが壊れる。mv は guard.sh でブロック）。
- 本文の `<pre>` ブロックは検索インデックスに使われる。
- 追加・削除したら `npm run index:generate` を必ず実行する。
