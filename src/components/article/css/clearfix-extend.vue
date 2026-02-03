<script lang="ts">
export const metadata = {
  updateDate: '2016/01/08',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader title="clearfix-extend" :update-date="metadata.updateDate" />

  <PreCodes>
    <section class="foo">
      <h3>h3</h3>
      <ul>
        <li>li</li>
        <li>li</li>
      </ul>
    </section>

    <pre><code><b class="t02">// ie8 &lt;=</b>

%clearfix {
  &amp;::after {
    content: "";
    display: block;
    clear: both;
  }
}</code></pre>

    <pre><code><b class="t02">// ie8 &gt;</b>

$view-ie7 : true;

%clearfix {
  &amp;:before,
  &amp;:after {
    content: "";
    display: table;
  }
  &amp;:after {
    clear: both;
  }
  @if $view-ie7 {
    &amp; {
      *zoom: 1;
    }
  }
}</code></pre>

    <pre><code>.foo {
  position: relative;
  padding: 20px;
  background: #eee;
  @extend %clearfix;
  h3 {
    position: absolute;
    top: -5px;
    left: -5px;
    padding: 10px;
    background: #ccc;
  }
  li {
    float: left;
    padding: 50px;
    background: #ddd;
  }
}</code></pre>

    <pre><code>&lt;section class="foo"&gt;
  &lt;h3&gt;h3&lt;/h3&gt;
  &lt;ul&gt;
    &lt;li&gt;li&lt;/li&gt;
    &lt;li&gt;li&lt;/li&gt;
  &lt;/ul&gt;
&lt;/section&gt;</code></pre>

    <pre>
// 「h3」のようにはみ出る要素が無い場合は、clearfixの代わりに「overflow: hidden;」のみでも可</pre
    >
  </PreCodes>
</template>

<style scoped>
.foo {
  position: relative;
  padding: 20px;
  &::after {
    content: '';
    display: block;
    clear: both;
  }
  h3 {
    position: absolute;
    top: -5px;
    left: -5px;
    padding: 10px;
    background: #ccc;
  }
  li {
    float: left;
    padding: 50px;
    background: #ddd;
  }
}
</style>
