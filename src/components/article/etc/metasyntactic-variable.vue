<script lang="ts">
export const metadata = {
  updateDate: '2012/07/23',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader
    title="metasyntactic-variable"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><code>1) foo
2) bar
3) baz
4) qux
5) quux
6) foobar</code></pre>
  </PreCodes>
</template>
