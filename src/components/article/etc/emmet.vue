<script lang="ts">
export const metadata = {
  updateDate: '2013/11/03',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader title="emmet" :update-date="metadata.updateDate" />

  <PreCodes>
    <pre><code><b class="t01">http://docs.emmet.io/</b>  <b class="t02">// ドキュメント</b>

<b class="t01">https://github.com/mattn/emmet-vim</b>  <b class="t02">// インストール</b>
<b class="t02">ダウンロードし、autoloadフォルダとpluginフォルダを ~/.vim/ 直下にコピー</b>

---

<b class="t01">vi ~/.vimrc</b>  <b class="t02">// vim設定ファイルを開き、以下1行を追記</b>
let g:user_emmet_expandabbr_key = '&lt;c-y&gt;'  <b class="t02">// [control]+y で展開するという設定</b>

---

div#main&gt;ul.menu&gt;li{item}*3 <b class="t01">[control]+y</b>  <b class="t02">// html展開</b>

<b class="t01">[control]+y /</b>  <b class="t02">コメントon,off</b>

複数行選択 <b class="t01">[control]+y m</b>  <b class="t02">// 連結</b>
imgタグ上 <b class="t01">[control]+y i</b>  <b class="t02">// 幅自動入力</b>
URL上 <b class="t01">[control]+y a</b>  <b class="t02">// aタグ記述</b>
</code></pre>
  </PreCodes>
</template>
