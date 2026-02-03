<script lang="ts">
export const metadata = {
  updateDate: '2025/02/05',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader
    title="rounded-table"
    sample-url="/sample/html/rounded-table.html"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><code>table {
  border: #000 1px solid;
  border-radius: 10px;
  <b class="t01">border-collapse: separate;
  border-spacing: 0;</b>
}
th, td {
  border-right: #000 1px solid;
  border-bottom: #000 1px solid;
}
th:last-child, td:last-child {
  border-right: none;
}
tr:last-child td {
  border-bottom: none;
}

<b class="t02">// border-collapse: separate; （角丸を有効にする。ただし、trにborderが引けなくなる）
// border-spacing: 0; （border-collapse: separate;にした時に発生するセル間の余白を詰める）</b></code></pre>
  </PreCodes>
</template>
