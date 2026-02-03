<script lang="ts">
export const metadata = {
  updateDate: '2024/08/09',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader
    title="has"
    sample-url="/sample/html/has.html"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre>// scss

p {
  display: none;
}

li {
  &<b class="t01">:has(</b>input:checked<b class="t01">)</b> {
    label {
      font-weight: 700;
    }
    p {
      display: block;
    }
  }
}</pre>
  </PreCodes>
</template>
