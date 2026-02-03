<script lang="ts">
export const metadata = {
  updateDate: '2024/11/27',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader
    title="font-feature-settings"
    sample-url="/sample/html/font-feature-settings.html"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><code>font-feature-settings: 'palt' on;</code>
</pre>
  </PreCodes>
</template>
