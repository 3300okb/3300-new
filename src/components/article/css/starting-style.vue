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
    title="@starting-style"
    sample-url="/sample/html/starting-style.html"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><b class="t02">&lt;!-- 例1: opacity を starting-style で指定 --&gt;</b>
&lt;div class="text-3xl opacity-100 transition-opacity duration-1000 <b class="t01">starting</b>:opacity-0"&gt;
  1
&lt;/div&gt;

<b class="t02">&lt;!-- 例2: transform を starting-style で指定 --&gt;</b>
&lt;div class="scale-100 text-3xl transition-transform duration-1000 <b class="t01">starting</b>:scale-90"&gt;
  2
&lt;/div&gt;

<b class="t02">&lt;!-- 例3: translate を starting-style で指定 --&gt;</b>
&lt;div
class="translate-y-0 text-3xl transition-all duration-1000 <b class="t01">starting</b>:-translate-y-1/2"
&gt;
  3
&lt;/div&gt;</pre>
  </PreCodes>
</template>
