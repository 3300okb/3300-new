<script lang="ts">
export const metadata = {
  updateDate: '2014/10/30',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader
    title="selector-specificity"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><code><b class="t02">(high)</b>
!important
インライン
idセレクタ
classセレクタ,属性セレクタ,擬似クラス
要素セレクタ,擬似要素
ユニバーサルセレクタ
<b class="t02">(low)</b>
</code></pre>

    <p>
      <a
        href="http://specificity.keegan.st/"
        target="_blank"
        class="text-blue-500 underline"
        >Specificity Calculator</a
      >
    </p>
  </PreCodes>
</template>
