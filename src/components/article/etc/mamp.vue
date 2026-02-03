<script lang="ts">
export const metadata = {
  updateDate: '2014/01/21',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader title="mamp" :update-date="metadata.updateDate" />

  <PreCodes>
    <pre>
<b class="t02">// Install</b>
<a href="https://www.mamp.info/" target="_blank">https://www.mamp.info/</a>

<b class="t02">// Setting</b>
1) open "Preference &gt; Web Server" and select "Apache"
2) select "Document Root"
<b class="t02">or) vi /Applications/MAMP/conf/apache/httpd.conf
and rewrite path to your workspace at about line 194, 219, and 247</b>
</pre>
  </PreCodes>
</template>
