<script lang="ts">
export const metadata = {
  updateDate: '2014/01/05',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader title="apple-touch-icon" :update-date="metadata.updateDate" />

  <PreCodes>
    <pre><code><b class="t01">&lt;link rel="apple-touch-icon-precomposed" href="/apple-touch-icon-precomposed.png"&gt;</b>

<b class="t02">// iPod, iPhone, iPad, 多くのAndroid に対応</b>
<b class="t02">// size: 180px x 180px (iPad基準)</b>
<b class="t02">// -procomposed 無しだと昔のiOSで光沢がつく</b>
</code></pre>
  </PreCodes>
</template>
