<script lang="ts">
export const metadata = {
  updateDate: '2021/09/10',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader title="remove-scrollbar" :update-date="metadata.updateDate" />

  <PreCodes>
    <pre><code><CopyCode><b class="t02">// Firefox</b>
<b class="t01">scrollbar-width: none;</b>
<b class="t02">// Chrome・Safari・Edge</b>
<b class="t01">&amp;::-webkit-scrollbar &#123;
  display: none;
&#125;</b></CopyCode>
</code></pre>
  </PreCodes>
</template>
