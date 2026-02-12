<script lang="ts">
export const metadata = {
  updateDate: '2026/02/12',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader title="custom-scrollbar" :update-date="metadata.updateDate" />

  <PreCodes>
    <pre><code><CopyCode><b class="t01"><b class="t02">// Firefox</b>
scrollbar-width: <b class="t03">thin</b>;
scrollbar-color: <b class="t03">#bcc4d2 #fff</b>;

<b class="t02">// Chrome・Safari・Edge</b>
&amp;::-webkit-scrollbar &#123;
  height: <b class="t03">0.375rem</b>;
&#125;
&amp;::-webkit-scrollbar<b class="t04">-track</b> &#123;
  border-radius: <b class="t03">9999</b>;
  background-color: <b class="t03">#fff</b>;
&#125;
&amp;::-webkit-scrollbar<b class="t05">-thumb</b> &#123;
  border-radius: <b class="t03">9999</b>;
  background-color: <b class="t03">#bcc4d2</b>;
&#125;</b></CopyCode>
</code></pre>
  </PreCodes>
</template>
