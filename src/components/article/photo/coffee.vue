<script lang="ts">
export const metadata = {
  updateDate: '2012/04/05',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
</script>

<template>
  <ArticleHeader title="coffee" :update-date="metadata.updateDate" />

  <img
    src="/sample/img/photo/coffee.jpg"
    alt="Coffee"
    loading="lazy"
    decoding="async"
  />
</template>
