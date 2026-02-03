<script lang="ts">
export const metadata = {
  updateDate: '2016/12/12',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader title="escape-html" :update-date="metadata.updateDate" />

  <PreCodes>
    <pre><CopyCode><b class="t01">function <b class="t05">escapeHTML</b>(<b class="t03">str</b>) {
  if(!str){return '';}
  return <b class="t03">str</b>.replace(/["'`<>&]/g, function(<b class="t04">m</b>) {
    return {
      '"': '&amp;quot;',
      "'": '&amp;#x27;',
      '`': '&amp;#x60;',
      '<': '&amp;lt;',
      '>': '&amp;gt;',
      '&': '&amp;amp;',
    }[<b class="t04">m</b>]
  });
}</b>
</CopyCode>
</pre>
  </PreCodes>
</template>
