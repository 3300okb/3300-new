<script lang="ts">
export const metadata = {
  updateDate: '2020/12/19',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader title="safearea" :update-date="metadata.updateDate" />

  <PreCodes>
    <pre><code>// viewport

&lt;meta name="viewport" content="width=*******, *******, *******, <b class="t01">viewport-fit=cover</b>"&gt;
</code></pre>

    <pre><code>// scss
ex) 16px

$space: 16px;
@each $side in right left bottom {
  padding-#{$side}: $space;
  padding-#{$side}: calc(<b class="t03">constant(safe-area-inset-#{$side}</b>) + #{$space}); <b class="t02">// 11.1</b>
  padding-#{$side}: calc(<b class="t01">env(safe-area-inset-#{$side}</b>) + #{$space}); <b class="t02">// 11.2 ~</b>
}
</code></pre>

    <pre><code>// css
ex) 16px

padding-right: 16px;
padding-left: 16px;
padding-bottom: 16px;
padding-right: calc(<b class="t03">constant(safe-area-inset-right)</b> + 16px); <b class="t02">// 11.1</b>
padding-left: calc(<b class="t03">constant(safe-area-inset-left)</b> + 16px); <b class="t02">// 11.1</b>
padding-bottom: calc(<b class="t03">constant(safe-area-inset-bottom)</b> + 16px); <b class="t02">// 11.1</b>
padding-right: calc(<b class="t01">env(safe-area-inset-right)</b> + 16px); <b class="t02">// 11.2 ~</b>
padding-left: calc(<b class="t01">env(safe-area-inset-left)</b> + 16px); <b class="t02">// 11.2 ~</b>
padding-bottom: calc(<b class="t01">env(safe-area-inset-bottom)</b> + 16px); <b class="t02">// 11.2 ~</b>
</code></pre>
  </PreCodes>
</template>
