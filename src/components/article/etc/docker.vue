<script lang="ts">
export const metadata = {
  updateDate: '2026/02/07',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader title="docker" :update-date="metadata.updateDate" />

  <PreCodes>
    <pre><b class="t01">docker --version</b>
<b class="t01">docker run</b> <b class="t03">{XXX}</b> <b class="t02">// Make a container</b></pre>

    <pre><b class="t01">docker images</b> <b class="t02">// Check images</b>
<b class="t01">docker ps -a</b> <b class="t02">// Check containers</b></pre>
  </PreCodes>
</template>
