<script lang="ts">
export const metadata = {
  updateDate: '2026/04/07',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader title="claude commands" :update-date="metadata.updateDate" />
  <PreCodes>
    <pre><b class="t01">claude</b>  <b class="t02">// Start session</b>
<b class="t01">claude -c</b>  <b class="t02">// Resume the most recent session</b>
<b class="t01">claude -r</b>  <b class="t02">// Resume a specific session</b>

<b class="t02">// CLI Reference</b>
<a href="https://code.claude.com/docs/ja/cli-reference" target="_blank" class="t05 font-bold">https://code.claude.com/docs/ja/cli-reference</a></pre>

    <pre><b class="t01">shift + tab</b>  <b class="t02">// Change modes during a session</b>
<b class="t01">esc</b>  <b class="t02">// Interrupt thinking</b>

<b class="t02">// Interactive mode Reference</b>
<a href="https://code.claude.com/docs/ja/interactive-mode" target="_blank" class="t05 font-bold">https://code.claude.com/docs/ja/interactive-mode</a></pre>

    <pre><b class="t01">/help</b>  <b class="t02">// Show available commands</b>
<b class="t01">/init</b>  <b class="t02">// Generate CLAUDE.md interactively</b>
<b class="t01">/clear</b>  <b class="t02">// Clear conversation history</b>
<b class="t01">/compact</b>  <b class="t02">// Compress context and continue</b>
<b class="t01">/cost</b>  <b class="t02">// Show token usage for the session</b>
<b class="t01">/model</b>  <b class="t02">// Switch AI model</b>
<b class="t01">/memory</b>  <b class="t02">// Edit CLAUDE.md memory file</b>
<b class="t01">/permissions</b>  <b class="t02">// View or change tool permissions</b>
<b class="t01">/config</b>  <b class="t02">// View or change settings</b>
<b class="t01">/status</b>  <b class="t02">// Show account and system status</b>
<b class="t01">/doctor</b>  <b class="t02">// Diagnose Claude Code configuration</b>
<b class="t01">/review</b>  <b class="t02">// Run code review</b>
<b class="t01">/pr-review</b>  <b class="t02">// Run PR review</b>
<b class="t01">/terminal-setup</b>  <b class="t02">// Set up Shift+Enter keybinding</b>
<b class="t01">/vim</b>  <b class="t02">// Toggle Vim mode</b>
<b class="t01">/login</b>  <b class="t02">// Switch to Anthropic account</b>
<b class="t01">/logout</b>  <b class="t02">// Log out</b>
<b class="t01">/bug</b>  <b class="t02">// Submit a bug report to GitHub</b></pre>

    <pre><b class="t01">/btw</b>  <b class="t02">// Ask a side question without polluting conversation history</b>
<b class="t01">/rewind</b>  <b class="t02">// Rewind code and conversation independently</b>
<b class="t01">/insights</b>  <b class="t02">// Generate usage analytics report for the past month</b>
<b class="t01">/model opusplan</b>  <b class="t02">// Auto-switch between Opus for reasoning and Sonnet for coding</b>
<b class="t01">/simplify</b>  <b class="t02">// Review code quality with 3 parallel agents</b>
<b class="t01">/branch</b>  <b class="t02">// Fork the current conversation into a new session</b>
<b class="t01">/loop</b>  <b class="t02">// Run a task on a recurring interval</b>
<b class="t01">/remote-control</b>  <b class="t02">// Control local execution remotely from a phone</b>
<b class="t01">/export</b>  <b class="t02">// Export the entire conversation to a Markdown file</b></pre>
  </PreCodes>
</template>
