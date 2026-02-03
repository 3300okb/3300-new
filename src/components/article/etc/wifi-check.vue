<script lang="ts">
export const metadata = {
  updateDate: '2016/06/10',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader title="wifi-check" :update-date="metadata.updateDate" />

  <PreCodes>
    <pre><code>1) Finder 起動
2) command + shift + G
3) /System/Library/CoreServices/Applications/
4) ワイヤレス診断 起動
5) ウィンドウ &gt; スキャン
</code></pre>
  </PreCodes>
</template>
