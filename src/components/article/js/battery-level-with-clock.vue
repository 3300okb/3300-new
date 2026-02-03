<script lang="ts">
export const metadata = {
  updateDate: '2021/11/22',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader
    title="battery-level-with-clock"
    sample-url="/sample/html/battery-level-with-clock.html"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><CopyCode>&lt;!doctype html&gt;
&lt;title&gt;battery-level-with-clock&lt;/title&gt;
&lt;meta
name="viewport"
content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, viewport-fit=cover"
/&gt;
&lt;link rel="stylesheet" href="/sample/font-select.css" /&gt;


&lt;style&gt;
html &#123;
height: 100%;
&#125;
body &#123;
margin: 0;
padding: 0;
display: flex;
height: 100%;
justify-content: center;
align-items: center;
text-align: center;
background: #000;
line-height: 1;
&#125;
div &#123;
display: flex;
align-items: center;
&#125;
#level &#123;
display: inline-block;
margin: 0;
position: relative;
font-size: 8vw;
-moz-osx-font-smoothing: grayscale;
-webkit-font-smoothing: antialiased;
color: #fff;
&#125;
#remain &#123;
display: inline-block;
width: 16vw;
height: 8vw;
margin-left: 2vw;
position: relative;
&#125;
#remain .graph &#123;
display: block;
width: 100%;
height: 100%;
padding: 0.8vw;
box-sizing: border-box;
z-index: 1;
&#125;
#remain .bar &#123;
content: '';
display: block;
width: 100%;
height: 100%;
padding: 0;
background: #1ed57a;
&#125;
#remain::after &#123;
content: '';
display: block;
width: 16vw;
height: 8vw;
position: absolute;
top: 0;
left: 0;
border: #fff 1vw solid;
border-radius: 1vw;
box-sizing: border-box;
z-index: 2;
&#125;
#remain .charging &#123;
position: absolute;
top: 0;
left: 0;
z-index: 3;
&#125;
#remain canvas &#123;
width: 16vw;
height: 10vw;
position: relative;
left: 5.3vw;
top: -1vw;
&#125;
#clock &#123;
display: inline-block;
margin: 0;
margin-right: 5.7vw;
padding-right: 6vw;
&lt;/script&gt;
</CopyCode>
</pre>
  </PreCodes>
</template>
