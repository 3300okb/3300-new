<script lang="ts">
export const metadata = {
  updateDate: '2013/04/17',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader title="iTerm" :update-date="metadata.updateDate" />

  <PreCodes>
    <pre><code><b class="t01">http://iterm2.com/downloads</b>  <b class="t02">// ダウンロード</b>

<b class="t01">[command]+[Enter]</b>  <b class="t02">// フルスクリーン</b>

<b class="t01">[command]+d</b>  <b class="t02">// 縦分割</b>
<b class="t01">[command]+[shift]+d</b>  <b class="t02">// 横分割</b>
<b class="t01">[command]+[</b>  <b class="t02">// 移動</b>
<b class="t01">[command]+[option]+[arrow]</b>  <b class="t02">// 移動</b>

<b class="t01">[command]+w</b>  <b class="t02">// 今いるウィンドウを閉じる </b>

<b class="t01">[command]+f</b>  <b class="t02">// 検索</b>
<b class="t01">[command]+g</b>  <b class="t02">// 前の候補に移動</b>
<b class="t01">[command]+[shift]+g</b>  <b class="t02">// 次の候補に移動</b>
</code></pre>
  </PreCodes>
</template>
