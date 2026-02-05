<script lang="ts">
export const metadata = {
  updateDate: '2020/12/19',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import CopyCode from '@/components/CopyCode.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader title="ssh" :update-date="metadata.updateDate" />

  <PreCodes>
    <pre><code><b class="t02">// Create keys into ~/.ssh/</b>
<CopyCode><b class="t01">ssh-keygen</b></CopyCode>

<b class="t02">// Check created keys</b>
<CopyCode><b class="t01">ls ~/.ssh/</b></CopyCode>

<b class="t02">// Paste code into server's ~/.ssh/authorized_keys or admin</b>
<CopyCode><b class="t01">cat ~/.ssh/id_{XXX}.pub</b></CopyCode></code></pre>

    <pre><code><b class="t02">// Keychain configuration (to avoid entering a password when pushing)</b>
<CopyCode><b class="t01">vi ~/.ssh/config</b></CopyCode>

<CopyCode><b class="t03">Host &#123;HOST&#125;
  HostName &#123;HOST&#125;
  User git
  IdentityFile ~/.ssh/id_&#123;XXX&#125;
  IdentitiesOnly yes</b></CopyCode>

<b class="t02">// Add the key to Keychain</b>
<CopyCode><b class="t01">ssh-add --apple-use-keychain ~/.ssh/id_{XXX}</b></CopyCode></code></pre>
  </PreCodes>
</template>
