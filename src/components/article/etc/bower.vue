<script lang="ts">
export const metadata = {
  updateDate: '2015/10/05',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  a
  <ArticleHeader title="bower" :update-date="metadata.updateDate" />

  <PreCodes>
    <pre><code><b class="t01">http://nodejs.org/</b>   <b class="t02">// node.js インストール</b>
<b class="t01">node -v</b>  <b class="t02">// node.js バージョン確認</b>
<b class="t01">npm -v</b>  <b class="t02">// npm(node package manager: https://www.npmjs.org/) バージョン確認</b>

<b class="t01">sudo npm install bower -g</b>  <b class="t02">// bower グローバルインストール</b>
<b class="t01">bower -v</b>  <b class="t02">// バージョン確認</b>
</code></pre>

    <pre><code><b class="t01">bower init</b>  <b class="t02">// bower.json作成</b>

<b class="t01">bower i</b> [library] <b class="t01">--save-dev</b>   <b class="t02">// bower_component/ を作りその中にinstallしてbower.jsonのdependenciesを編集</b>
<b class="t02">bower i jquery --save-dev</b>
<b class="t02">bower i jquery#1 --save-dev</b>
<b class="t02">bower i jquery#1.11.3 --save-dev</b>

<b class="t01">bower uninstall</b> [library] <b class="t01">--save-dev</b>  <b class="t02">// bower_component/ からuninstallしてbower.jsonのdependenciesを編集</b>
</code></pre>

    <pre><code><b class="t01">bower ls</b>   <b class="t02">// installしたものを確認</b>
<b class="t01">bower update</b>   <b class="t02">// installしたものをupdate</b>

<b class="t01">bower search</b> [library]  <b class="t02">// ライブラリ検索</b>
<b class="t01">bower info</b> [library]   <b class="t02">// ライブラリ情報確認</b>
</code></pre>

    <pre><code>bower.json <b class="t02">(exsample)</b>

<b class="t01">{
  "name": "</b>package<b class="t01">",
  "version": "",
  "dependencies": {</b>
    "jquery": "~1.12.0",
    "zepto": "~1.1.6"
  <b class="t01">}
}</b>

<b class="t02">// bower i で bower_components/ フォルダを作りその中にinstallする</b>
</code></pre>
  </PreCodes>
</template>
