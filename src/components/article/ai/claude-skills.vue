<script lang="ts">
export const metadata = {
  updateDate: '2026/04/05',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader title="Claude Skills" :update-date="metadata.updateDate" />

  <PreCodes>
    <pre><code><CopyCode><b class="t01">npx skills add https://github.com/vercel-labs/skills --skill find-skills
</b></CopyCode>
      <CopyCode><b class="t01">npx skills add https://github.com/obra/superpowers --skill brainstorming
</b></CopyCode>
      <CopyCode><b class="t01">npx skills add https://github.com/anthropics/skills --skill frontend-design
</b></CopyCode>
      <CopyCode><b class="t01">npx skills add https://github.com/vercel-labs/agent-skills --skill web-design-guidelines
</b></CopyCode>
      <CopyCode><b class="t01">npx skills add https://github.com/sleekdotdesign/agent-skills --skill sleek-design-mobile-apps
</b></CopyCode>
      <CopyCode><b class="t01">npx skills add ibelick/ui-skills</b></CopyCode>
      <CopyCode><b class="t01">npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices
</b></CopyCode>
      <CopyCode><b class="t01">npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-composition-patterns
</b></CopyCode>
      <CopyCode><b class="t01">npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-native-skills
</b></CopyCode>
      <CopyCode><b class="t01">npx skills add https://github.com/supabase/agent-skills --skill supabase-postgres-best-practices
</b></CopyCode>
      <CopyCode><b class="t01">npx skills add https://github.com/coreyhaines31/marketingskills --skill seo-audit
</b></CopyCode>
      <CopyCode><b class="t01">npx skills add https://github.com/sanyuan0704/code-review-expert --skill code-review-expert
</b></CopyCode></code></pre>
  </PreCodes>
</template>
