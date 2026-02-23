<script lang="ts">
export const metadata = {
  updateDate: '2026/02/22',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader
    title="codex-setup-prompt"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><code><CopyCode><b class="t02">Under revision</b></CopyCode>
</code></pre>
  </PreCodes>
</template>
