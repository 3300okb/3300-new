<script lang="ts">
export const metadata = {
  updateDate: '2016/07/27',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader
    title="thin-border"
    sample-url="/sample/html/thin-border.html"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><code>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1"&gt;

&lt;style&gt;
div {
  margin: 20px 10px;
  padding-top: 6px;
}
.normal {
  height: 100px;
  border-top: <b class="t03">#333 1px solid</b>;
}
<b class="t04">.thin</b> {
  height: 100px;
  <b class="t01">position: relative;</b>
}
<b class="t04">.thin</b><b class="t01">::after {
  content: "";
  width: 100%;
  height: 1px;
  border-top: <b class="t03">#333 1px solid</b>;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}</b>
&lt;/style&gt;

&lt;div class="normal"&gt;normal 1px&lt;/div&gt;
&lt;div class="<b class="t04">thin</b>"&gt;thin scaleY(0.5)&lt;/div&gt;</code></pre>
  </PreCodes>
</template>
