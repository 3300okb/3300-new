<script lang="ts">
export const metadata = {
  updateDate: '2022/07/30',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader
    title="grid-center"
    sample-url="/sample/html/grid-center.html"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><code><CopyCode>&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;vh_center4&lt;/title&gt;
&lt;style&gt;
html, body &#123;
  margin: 0;
  padding: 0;
  height: 100%;
&#125;
body &#123;
  <b class="t01">display: grid;</b>
  <b class="t01">place-content: center;</b>
&#125;
.content &#123;
  width: 200px;
  height: 120px;
  background: #000;
  color: #fff;
&#125;
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
