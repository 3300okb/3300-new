<script lang="ts">
export const metadata = {
  updateDate: '2012/04/05',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
</script>

<template>
  <ArticleHeader title="fujirock06" :update-date="metadata.updateDate" />

  <img
    src="/sample/img/photo/fujirock06.jpg"
    alt="Fujirock06"
    loading="lazy"
    decoding="async"
  />
</template>
