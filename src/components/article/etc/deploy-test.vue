<script lang="ts">
export const metadata = {
  updateDate: '2026/10/13',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
</script>

<template>
  <ArticleHeader title="deploy-test" :update-date="metadata.updateDate" />

  <p>
    リモート環境からの記事追加デプロイテスト用の記事です。Claude Code
    のクラウドセッションを利用。
  </p>
</template>
