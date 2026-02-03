<script lang="ts">
export const metadata = {
  updateDate: '2022/07/29',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader
    title="flex-center"
    sample-url="/sample/html/flex-center.html"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><code><CopyCode>&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;vh_center3&lt;/title&gt;
&lt;style&gt;
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
body {
  <b class="t01">display: flex;
  justify-content: center;
  align-items: center;</b>
  <b class="t02">/*-- safari5.1以前, iOS8.4以前, Android4.3以前, IE10は要prefix --*/
  /*-- IE9以前は非対応 --*/</b>
}
.content {
  width: 200px;
  height: 120px;
  background: #000;
  color: #fff;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div class="content"&gt;content&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</CopyCode>
</code></pre>
  </PreCodes>
</template>
