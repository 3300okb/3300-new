<script lang="ts">
export const metadata = {
  updateDate: '2020/12/19',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader title="webfont-import" :update-date="metadata.updateDate" />

  <PreCodes>
    <pre>// Exsample 'Noto Sans JP'

<a href="https://fonts.google.com/specimen/Noto+Sans+JP" target="_blank">https://fonts.google.com/specimen/Noto+Sans+JP</a> <b class="t02">(size: 30.1 KB)</b>
SELECT THIS FONT &gt; Family Selected &gt; CUSTOMIZE &gt; EMBED &gt; @IMPORT
</pre>

    <pre>
<b class="t01">@import url(//fonts.googleapis.com/css?family=Noto+Sans+JP:300&display=swap&subset=japanese);

</b>.foo <b class="t01">{
  font-family: 'Noto Sans JP', sans-serif;
}</b>
</pre>
  </PreCodes>
</template>
