<script lang="ts">
export const metadata = {
  updateDate: '2026/10/11',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader title="git-config-setup" :update-date="metadata.updateDate" />

  <PreCodes>
    <pre><code><CopyCode top><b class="t01">git config</b> <b class="t04">--global</b> <b class="t01">color.ui</b> <b class="t05">auto</b> &amp;&amp; \
<b class="t01">git config</b> <b class="t04">--global</b> <b class="t01">alias.a</b> <b class="t05">'add -A'</b> &amp;&amp; \
<b class="t01">git config</b> <b class="t04">--global</b> <b class="t01">alias.c</b> <b class="t05">'commit'</b> &amp;&amp; \
<b class="t01">git config</b> <b class="t04">--global</b> <b class="t01">alias.b</b> <b class="t05">'branch'</b> &amp;&amp; \
<b class="t01">git config</b> <b class="t04">--global</b> <b class="t01">alias.co</b> <b class="t05">'checkout'</b> &amp;&amp; \
<b class="t01">git config</b> <b class="t04">--global</b> <b class="t01">alias.s</b> <b class="t05">'status -s -b -uall'</b> &amp;&amp; \
<b class="t01">git config</b> <b class="t04">--global</b> <b class="t01">alias.t</b> <b class="t05">'log --graph --all --date=short --format="%C(green)[%ad] %C(cyan)%h %C(yellow)%an %C(red)%d %Creset%s"'</b> &amp;&amp; \
<b class="t01">echo</b> <b class="t05">"done"</b></CopyCode></code></pre>
  </PreCodes>
</template>
