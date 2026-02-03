<script lang="ts">
export const metadata = {
  updateDate: '2020/12/19',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader title="ssh" :update-date="metadata.updateDate" />

  <PreCodes>
    <pre><code><b class="t02">// Create keys into ~/.ssh/</b>
<b class="t01">ssh-keygen</b>

<b class="t02">// Check created keys</b>
<b class="t01">ls ~/.ssh/</b>

<b class="t02">// Paste code into server's ~/.ssh/authorized_keys or admin</b>
<b class="t01">cat ~/.ssh/id_{XXX}.pub</b></code></pre>

    <pre><code><b class="t02">// Keychain configuration (to avoid entering a password when pushing)</b>
<b class="t01">vi ~/.ssh/config</b>

<b class="t03">Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_{XXX}</b>

<b class="t02">// Add the key to Keychain</b>
<b class="t01">ssh-add --apple-use-keychain ~/.ssh/id_{XXX}</b>
</code></pre>
  </PreCodes>
</template>
