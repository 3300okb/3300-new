<script lang="ts">
export const metadata = {
  updateDate: '2026/02/22',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader title="CLAUDE.md" :update-date="metadata.updateDate" />

  <PreCodes>
    <pre><code><CopyCode>プロジェクトのルートにCLAUDE.md と .CLAUDE_DOCS/ を作りましょう。
段階的開示を実現し、必要な時に必要のものだけ読むようにしましょう。
package.json に実コマンドが存在する場合は、コマンドに関するmdファイル（例 .CLAUDE_DOCS/COMMANDS.md）は具体化しましょう。
他の子mdファイルも必要に応じて、実プロジェクト準拠・実装準拠・実コード準拠・実運用準拠 で具体化しましょう。
最後に CLAUDE.md の「ドキュメント配置」節へ、各ファイルの用途を1行ずつ補強して入口品質を上げましょう。</CopyCode>
</code></pre>
  </PreCodes>
</template>
