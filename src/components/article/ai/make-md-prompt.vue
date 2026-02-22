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
  <ArticleHeader title="make-md-prompt" :update-date="metadata.updateDate" />

  <PreCodes>
    <pre><code><b class="t02">// CLAUDE.md</b>
      <CopyCode>プロジェクトを解析して、 CLAUDE.md と .CLAUDE_DOCS/ を作りましょう。
AGENTS.md と .AGENTS_DOCS/ が存在する場合は、それらを読んではいけません。
利用時は、最初に CLAUDE.md を読み、段階的開示で、必要な時に .CLAUDE_DOCS/ 内の必要なものだけ読むようにしましょう。
package.json に実コマンドが存在する場合は、コマンドに関するmdファイル（例 .CLAUDE_DOCS/COMMANDS.md）は具体化しましょう。
他の子mdファイルも必要に応じて、実プロジェクト準拠・実装準拠・実コード準拠・実運用準拠 で具体化しましょう。
最後に CLAUDE.md の「ドキュメント配置」節へ、各ファイルの用途を1行ずつ補強して入口品質を上げましょう。</CopyCode>
</code></pre>
    <pre><code><b class="t02">// AGENTS.md</b>
      <CopyCode>プロジェクトを解析して、 AGENTS.md と .AGENTS_DOCS/ を作りましょう。
CLAUDE.md と .CLAUDE_DOCS/ が存在する場合は、それらを読んではいけません。
利用時は、最初に AGENTS.md を読み、段階的開示で、必要な時に .AGENTS_DOCS/ 内の必要なものだけ読むようにしましょう。
package.json に実コマンドが存在する場合は、コマンドに関するmdファイル（例 .AGENTS_DOCS/COMMANDS.md）は具体化しましょう。
他の子mdファイルも必要に応じて、実プロジェクト準拠・実装準拠・実コード準拠・実運用準拠 で具体化しましょう。
最後に AGENTS.md の「ドキュメント配置」節へ、各ファイルの用途を1行ずつ補強して入口品質を上げましょう。</CopyCode>
</code></pre>
  </PreCodes>
</template>
