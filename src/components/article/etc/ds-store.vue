<script lang="ts">
export const metadata = {
  updateDate: '2015/03/20',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader title=".DS_Store" :update-date="metadata.updateDate" />

  <PreCodes>
    <pre><code>find . -name ".DS_Store" -print -exec rm {} ";"
<b class="t02"> // カレント配下から .DS_Store の全削除</b>

http://asepsis.binaryage.com/
<b class="t02"> // .DS_Storeを作らないソフト -> OSアップデート時は念のためアンインストール</b>
<b class="t02"> // defaults write com.apple.desktopservices DSDontWriteNetworkStores true で可能という記事は嘘っぽい</b>
</code></pre>
  </PreCodes>
</template>
