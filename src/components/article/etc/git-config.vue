<script lang="ts">
export const metadata = {
  updateDate: '2026/03/08',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader title="git config" :update-date="metadata.updateDate" />

  <PreCodes>
    <pre><code><CopyCode><b class="t01">git config</b> <b class="t04">--global</b> <b class="t01">user.name</b> <b class="t05">'username'</b></CopyCode>
<CopyCode><b class="t01">git config</b> <b class="t04">--global</b> <b class="t01">user.email</b> <b class="t05">'username@example.com'</b></CopyCode>
<b class="t02">// Set VS Code as the default editor for commit messages</b>
<CopyCode><b class="t01">git config</b> <b class="t04">--global</b> <b class="t01">core.editor</b> <b class="t01">'code --wait'</b></CopyCode>
<b class="t02">// Set VS Code as the merge tool for conflict resolution</b>
<CopyCode><b class="t01">git config</b> <b class="t04">--global</b> <b class="t01">merge.tool</b> <b class="t01">'code --wait "$MERGED"'</b></CopyCode>
<b class="t02">// Push only the current branch to its upstream</b>
<CopyCode><b class="t01">git config</b> <b class="t04">--global</b> <b class="t01">push.default simple</b></CopyCode>
<b class="t02">// Use merge (not rebase) when pulling</b>
<CopyCode><b class="t01">git config</b> <b class="t04">--global</b> <b class="t01">pull.rebase false</b></CopyCode>
<b class="t02">// Disable quoting of non-ASCII characters in file paths</b>
<CopyCode><b class="t01">git config</b> <b class="t04">--global</b> <b class="t01">core.quotepath false</b></CopyCode>
</code></pre>
  </PreCodes>
</template>
