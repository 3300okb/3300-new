<script lang="ts">
export const metadata = {
  updateDate: '2026/02/04',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
</script>

<template>
  <ArticleHeader title="test" :update-date="metadata.updateDate" />
  test
</template>
