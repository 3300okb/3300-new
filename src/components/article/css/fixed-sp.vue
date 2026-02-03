<script lang="ts">
export const metadata = {
  updateDate: '2014/11/15',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader
    title="fixed-sp"
    sample-url="/sample/html/fixed-sp.html"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><code><CopyCode>&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;fixed_sp&lt;/title&gt;
&lt;meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no"&gt;
&lt;style&gt;
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
.wrap {
  <b class="t01">position: relative;</b>
}
.head {
  <b class="t01">position: fixed;
  top: 0;
  width: 100%;
  height:</b> 50<b class="t01">px;</b>
  background: #ddd;
  opacity: 0.9;
}
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div class="wrap"&gt;
  &lt;div class="head"&gt;head&lt;/div&gt;
  &lt;div class="content"&gt;content&lt;br&gt;...&lt;/div&gt;
  &lt;div class="foot"&gt;foot&lt;br&gt;...&lt;/div&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
</CopyCode>
</code></pre>

    <pre>(NG)<br />Android 2.3.6 GALAXY SⅡ LTE SC-03D -> headが遅れて追従<br />Windows Phone 7.10.8 IS12T -> headが追従しない</pre>

    <pre>(OK)<br />iOS 6.0.1 iPhone 4S<br />iOS 7.0.4 iPhone 5<br />Android 2.3.4 XPERIA ray SC-03C<br />Android 4.0.4 GALAXY SⅢ SC-06D<br />Android 4.0.4 ARROWS Z ISW13F<br />Android 4.1.2 XPERIA Z SO-02E<br />BlackBerry 7.1.0 Bold 9900</pre>
  </PreCodes>
</template>
