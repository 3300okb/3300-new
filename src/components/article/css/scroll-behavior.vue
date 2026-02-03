<script lang="ts">
export const metadata = {
  updateDate: '2022/07/29',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader
    title="scroll-behavior"
    sample-url="/sample/html/scroll-behavior.html"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;scroll-behavior&lt;/title&gt;
    &lt;style&gt;
      html,
      body {
        margin: 0;
        padding: 0;
        height: 100%;
      }
      html {
        <b class="t01">scroll-behavior: smooth;</b>
      }
      .header {
        width: 100%;
        <b class="t01">height:</b> 60px<b class="t01">;</b>
        position: fixed;
      }
      .header ul {
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 0;
      }
      .header li {
        list-style: none;
      }
      .header a {
        color: #fff;
      }
      .inner {
        position: relative;
      }
      .overlay {
        width: 100%;
        height: 60px;
        position: absolute;
        opacity: 0.6;
        background: #000;
      }
      .menu {
        width: 100%;
        display: grid;
        place-content: center;
        position: absolute;
      }
      .content {
        <b class="t01">padding-top:</b> 60px<b class="t01">;</b>
      }
      section {
        height: calc(100vh - 60px);
        border: #000 1px solid;
      }
      section a {
        <b class="t01">scroll-margin-top:</b> 60px<b class="t01">;</b>
      }
      h1 {
        margin: 0;
        padding: 30px;
      }
    &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div class="header"&gt;
      &lt;div class="inner"&gt;
        &lt;div class="overlay"&gt;&lt;/div&gt;
        &lt;div class="menu"&gt;
          &lt;ul&gt;
            &lt;li&gt;&lt;a href="#a"&gt;scroll a&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#b"&gt;scroll b&lt;/a&gt;&lt;/li&gt;
            &lt;li&gt;&lt;a href="#c"&gt;scroll c&lt;/a&gt;&lt;/li&gt;
          &lt;/ul&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="content"&gt;
      &lt;section&gt;
        &lt;a name="a"&gt;&lt;/a&gt;
        &lt;h1&gt;a&lt;/h1&gt;
      &lt;/section&gt;
      &lt;section&gt;
        &lt;a name="b"&gt;&lt;/a&gt;
        &lt;h1&gt;b&lt;/h1&gt;
      &lt;/section&gt;
      &lt;section&gt;
        &lt;a name="c"&gt;&lt;/a&gt;
        &lt;h1&gt;c&lt;/h1&gt;
      &lt;/section&gt;
    &lt;/div&gt;
  &lt;/body&gt;
&lt;/html&gt;
</code></pre>
  </PreCodes>
</template>
