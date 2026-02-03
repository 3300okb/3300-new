<script lang="ts">
export const metadata = {
  updateDate: '2026/01/30',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader title="claude code" :update-date="metadata.updateDate" />

  <PreCodes>
    <pre><b class="t01">claude</b>  <b class="t02">// Start session</b>
<b class="t01">claude -c</b>  <b class="t02">// Resume the most recent session</b>
<b class="t01">claude -r</b>  <b class="t02">// Resume a specific session</b>

<b class="t02">// CLI Reference</b>
<a href="https://code.claude.com/docs/ja/cli-reference" target="_blank" class="t05 font-bold">https://code.claude.com/docs/ja/cli-reference</a></pre>

    <pre><b class="t01">shift + tab</b>  <b class="t02">// Change modes during a session</b>
<b class="t01">esc</b>  <b class="t02">// Interrupt thinking</b>

<b class="t01">/init</b>  <b class="t02">// Remember the project's structure</b>

<b class="t02">// Interactive mode Reference</b>
<a href="https://code.claude.com/docs/ja/interactive-mode" target="_blank" class="t05 font-bold">https://code.claude.com/docs/ja/interactive-mode</a></pre>
  </PreCodes>
</template>
