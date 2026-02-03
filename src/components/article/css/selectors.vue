<script lang="ts">
export const metadata = {
  updateDate: '2015/10/03',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader
    title="selectors"
    sample-url="/sample/html/selectors.html"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><code> <b class="t02">// その他

:target
:root
:required
:optional
:valid
:invalid
:in-range

:out-of-range
::first-line
::first-letter
::after
::before
::selection

※コロン2つなのは擬似クラスとの区別のため推奨される</b>
</code></pre>
  </PreCodes>
</template>
