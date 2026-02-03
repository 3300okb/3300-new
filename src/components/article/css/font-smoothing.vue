<script lang="ts">
export const metadata = {
  updateDate: '2016/02/06',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader
    title="font-smoothing"
    sample-url="/sample/html/font-smoothing.html"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><code><CopyCode>&lt;!doctype html&gt;
&lt;meta charset="utf-8"&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1"&gt;

&lt;style&gt;
div {
  margin-bottom:20px;
  padding: 6px;
}
.default {
  -moz-osx-font-smoothing: auto;
  -webkit-font-smoothing: auto;
}
<b class="t03">.smooth</b> {
  <b class="t01">-moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;</b>
}
.none {
  -moz-osx-font-smoothing: none;
  -webkit-font-smoothing: none;
}
&lt;/style&gt;

&lt;div class="default"&gt;abcdefghijklmnopqrstuvwxyzあいうえお&lt;br&gt;default&lt;/div&gt;
&lt;div class="<b class="t03">smooth</b>"&gt;abcdefghijklmnopqrstuvwxyzあいうえお&lt;br&gt;smooth&lt;/div&gt;
&lt;div class="none"&gt;abcdefghijklmnopqrstuvwxyzあいうえお&lt;br&gt;none&lt;/div&gt;
</CopyCode>
</code></pre>
  </PreCodes>
</template>
