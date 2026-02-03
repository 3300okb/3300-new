<script lang="ts">
export const metadata = {
  updateDate: '2021/03/29',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader
    title="vscode-cursor-issue"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><b class="t01">defaults write com.microsoft.VSCode ApplePressAndHoldEnabled -bool false
defaults write com.microsoft.VSCodeInsiders ApplePressAndHoldEnabled -bool false</b></pre>
  </PreCodes>
</template>
