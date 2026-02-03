<script lang="ts">
export const metadata = {
  updateDate: '2021/09/09',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader title="keyframes" :update-date="metadata.updateDate" />

  <PreCodes>
    <pre><code><CopyCode><b class="t01">@keyframes openMenu {
  0% {
    left: 100vw;
  }

  100% {
    left: 0;
  }
}

@keyframes closeMenu {
  0% {
    left: 0;
  }

  100% {
    left: 100vw;
  }
}

.Open {
  animation-name: openMenu;
  animation-duration: 0.3s;
  left: 0;
}

.Close {
  animation-name: closeMenu;
  animation-duration: 0.3s;
  left: 100vw;
}</b>
</CopyCode>
</code></pre>
  </PreCodes>
</template>
