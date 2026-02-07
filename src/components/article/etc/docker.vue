<script lang="ts">
export const metadata = {
  updateDate: '2026/02/07',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader title="docker" :update-date="metadata.updateDate" />

  <PreCodes>
    <pre><b class="t01">docker --version</b>

<b class="t01">docker run</b> <b class="t03">{XXX}</b> <b class="t02">// Make a container</b>
<b class="t01">docker run</b> <b class="t03">-d --name &#123;XXX&#125;</b> <b class="t01">alpine</b> <b class="t05">sh -c</b> <b class="t04">'while true; do date; sleep 5; done'</b> <b class="t02">// Make a continuously moving container</b>
<b class="t02">// -d : detached mode</b>

<b class="t01">docker images</b> <b class="t02">// Check images</b>

<b class="t01">docker ps -a</b> <b class="t02">// Check all (stopped, running) containers</b>
<b class="t01">docker ps</b> <b class="t02">// Check only running containers</b>

<b class="t01">docker logs</b> <b class="t03">--tail 5 &#123;XXX&#125;</b> <b class="t02">// Check the last five lines of the log</b>

<b class="t01">docker stop</b> <b class="t03">&#123;XXX&#125;</b> <b class="t02">// Stop a container</b>

<b class="t01">docker rm</b> <b class="t03">&#123;XXX&#125;</b> <b class="t02">// Remove a container</b></pre>
  </PreCodes>
</template>
