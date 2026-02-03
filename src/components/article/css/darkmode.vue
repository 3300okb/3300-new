<script lang="ts">
export const metadata = {
  updateDate: '2022/02/09',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader
    title="darkmode"
    sample-url="/sample/html/darkmode.html"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><code>:root {
  --main-text: #000;
  --main-bg: #fff;
}

@media (<b class="t01">prefers-color-scheme: dark</b>) {
  :root {
    --main-text: #ddd;
    --main-bg: #000;
  }
}

body {
  color: var(--main-text);
  background: var(--main-bg);
}
</code></pre>
  </PreCodes>
</template>
