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
  <ArticleHeader
    title="line-clamp-ellipsis"
    sample-url="/sample/html/line-clamp-ellipsis.html"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><code><CopyCode><b class="t01">display: -webkit-box;
overflow: hidden;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;</b>
</CopyCode>
</code></pre>
  </PreCodes>
</template>
