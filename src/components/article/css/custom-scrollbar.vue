<script lang="ts">
export const metadata = {
  updateDate: '2026/02/12',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader title="custom-scrollbar" :update-date="metadata.updateDate" />

  <PreCodes>
    <pre><code><CopyCode><b class="t01">&amp;::-webkit-scrollbar &#123;
  height: rem(6);
&#125;
&amp;::-webkit-scrollbar<b class="t03">-track</b> &#123;
  border-radius: 9999;
  background-color: #fff;
&#125;
&amp;::-webkit-scrollbar<b class="t03">-thumb</b> &#123;
  border-radius: 9999;
  background-color: #bcc4d2;
&#125;</b></CopyCode>
</code></pre>
  </PreCodes>
</template>
