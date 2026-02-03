<script lang="ts">
export const metadata = {
  updateDate: '2013/11/03',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader title="mac-hosts" :update-date="metadata.updateDate" />

  <PreCodes>
    <pre><code><CopyCode>sudo vi /private/etc/hosts

</CopyCode></code></pre>
  </PreCodes>
</template>
