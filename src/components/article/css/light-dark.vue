<script lang="ts">
export const metadata = {
  updateDate: '2026/03/02',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader
    title="light-dark()"
    sample-url="/sample/html/light-dark.html"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><code>:root {
  <b class="t01">color-scheme</b>: light dark;
}

.box {
  background: <b class="t01">light-dark</b>(#ffffff, #1a1b1c);
  color: <b class="t01">light-dark</b>(#333435, #f5f6f7);
}</code></pre>
  </PreCodes>
</template>
