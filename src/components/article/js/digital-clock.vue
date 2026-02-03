<script lang="ts">
export const metadata = {
  updateDate: '2020/12/19',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader
    title="digital-clock"
    sample-url="/sample/html/digital-clock.html"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><CopyCode>&lt;!doctype html&gt;
&lt;title&gt;digital-clock&lt;/title&gt;
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
  &#125;
  #clock &#123;
    display: inline-block;
    margin: 0;
    font-size: 13vw;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: #fff;
  &#125;
&lt;/style&gt;

&lt;p id="clock"&gt;&lt;/p&gt;

&lt;script&gt;
  const to2Digits = (num) =&gt; &#123;
    let r
    if (num &lt; 10) &#123;
      r = `0$&#123;num&#125;`
    &#125; else &#123;
      r = num
    &#125;
    return r
  &#125;
  const clock = () =&gt; &#123;
    const date = new Date()
    const hour = to2Digits(date.getHours())
    const min = to2Digits(date.getMinutes())
    const time = `$&#123;hour&#125;:$&#123;min&#125;`
    document.querySelector('#clock').innerHTML = time
  &#125;
  setInterval(() =&gt; &#123;
    clock()
  &#125;, 1000)
&lt;/script&gt;
</CopyCode>
</pre>
  </PreCodes>
</template>
