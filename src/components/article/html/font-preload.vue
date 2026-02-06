<script lang="ts">
export const metadata = {
  updateDate: '2026/01/18',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader title="font-preload" :update-date="metadata.updateDate" />

  <PreCodes>
    <pre><code><b class="t02">// To prevent FOUT, preload the font in advance.</b>

<b class="t01">&lt;link rel="preload"
  href="</b>{/**/*.woff2}<b class="t01">"
  as="font"
  type="font/</b>{woff2}<b class="t01">"
  crossorigin="anonymous"
/&gt;</b></code></pre>
  </PreCodes>
</template>
