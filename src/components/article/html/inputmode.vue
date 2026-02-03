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
  <ArticleHeader
    title="inputmode"
    sample-url="/sample/html/inputmode.html"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre>
&lt;input type="text" inputmode="text"&gt;

&lt;input type="text" inputmode="decimal"&gt;

&lt;input type="text" inputmode="numeric"&gt;

&lt;input type="text" inputmode="tel"&gt;

&lt;input type="text" inputmode="search"&gt;

&lt;input type="text" inputmode="email"&gt;

&lt;input type="text" inputmode="url"&gt;

&lt;input type="text" inputmode="none"&gt;</pre
    >
  </PreCodes>
</template>
