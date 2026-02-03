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
    <pre><code><CopyCode><b class="t01">overflow-x: scroll;
-ms-overflow-style: none;
scrollbar-width: none;

&::-webkit-scrollbar {
  display: none;
}
</b></CopyCode>
</code></pre>
  </PreCodes>
</template>
