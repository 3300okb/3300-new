<script lang="ts">
export const metadata = {
  updateDate: '2025/03/12',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import imgGtc from '@/assets/img/gtc.png'
</script>

<template>
  <ArticleHeader
    title="grid-template-columns"
    sample-url="/sample/html/grid-template-columns.html"
    :update-date="metadata.updateDate"
  />

  <img
    :src="imgGtc"
    alt="grid-template-columns"
    class="mb-30 w-full md:w-[450px]"
    loading="lazy"
    decoding="async"
  />

  <PreCodes>
    <pre><code>&lt;dl&gt;
  &lt;dt&gt;氏名&lt;/dt&gt;
  &lt;dd&gt;あああああ&lt;/dd&gt;
  &lt;dt data-long&gt;今から10年以内に叶えたい夢があるか&lt;/dt&gt;
  &lt;dd data-short&gt;ある&lt;/dd&gt;
  &lt;dt data-short&gt;将来設計&lt;/dt&gt;
  &lt;dd data-long&gt;あああああああああああああああああああああああああああああああああああ&lt;/dd&gt;
  &lt;dt&gt;あなたの長所&lt;/dt&gt;
  &lt;dd&gt;ああああああああああああああ&lt;/dd&gt;
  &lt;dt&gt;好きな食べ物&lt;/dt&gt;
  &lt;dd&gt;あああああああ&lt;/dd&gt;
&lt;/dl&gt;</code></pre>

    <pre><code>dl {
  <b class="t01">display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;</b> <b class="t02">// 横4マス</b>
  width: 375px;
  margin: 60px auto 0;
  border-bottom: #ddd 1px solid;
  font-size: 15px;
}
dt,
dd {
  border-top: #ddd 1px solid;
  margin: 0;
  padding: 10px 0;
}
dt {
  <b class="t01">grid-column: 1 / span 2;</b> <b class="t02">// 1から2マス分繋げる</b>
  font-weight: 700;
}
dd {
  <b class="t01">grid-column: 3 / span 2;</b> <b class="t02">// 3から2マス分繋げる</b>
  text-align: right;
}
dt[data-long] {
  <b class="t01">grid-column: 1 / span 3;</b> <b class="t02">// 1から3マス分繋げる</b>
}
dt[data-short] {
  <b class="t01">grid-column: 1 / span 1;</b> <b class="t02">// 1から1マス分</b>
}
dd[data-long] {
  <b class="t01">grid-column: 2 / span 3;</b> <b class="t02">// 2から3マス分繋げる</b>
}
dd[data-short] {
  <b class="t01">grid-column: 4 / span 1;</b> <b class="t02">// 4から1マス分</b>
}
</code></pre>
  </PreCodes>
</template>
