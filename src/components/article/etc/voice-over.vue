<script lang="ts">
export const metadata = {
  updateDate: '2025/02/06',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader title="Voice Over" :update-date="metadata.updateDate" />

  <PreCodes>
    <pre><b class="t01">command + F5</b> <b class="t02">// Voice Over 起動/終了</b>
<b class="t01">control + option + 左右キー</b> <b class="t02">// グループ内で要素移動</b>
<b class="t01">ダブルクリック</b> <b class="t02">// 任意の場所に移動</b>

---

<b class="t01">control</b> <b class="t02">// 音声一時停止/再生</b>

<b class="t01">control + option + shift + 下キー</b> <b class="t02">// グループに入る</b>
<b class="t01">control + option + shift + 上キー</b> <b class="t02">// グループを出る</b>
<b class="t01">control + option + a</b> <b class="t02">// 全て読み上げる</b>
<b class="t01">control + option + u</b> <b class="t02">// リンク一覧表示</b>
<b class="t01">esc</b> <b class="t02">// リンク一覧終了</b></pre>
  </PreCodes>
</template>
