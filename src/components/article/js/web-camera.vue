<script lang="ts">
export const metadata = {
  updateDate: '2020/04/01',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader
    title="web-camera"
    sample-url="/sample/html/web-camera.html"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><code><CopyCode>&lt;!doctype html&gt;
&lt;title&gt;web-camera&lt;/title&gt;

&lt;style&gt;
html, body {margin: 0; padding: 0;}
video {width: 100%; height: auto;}
&lt;/style&gt;

&lt;video id="<b class="t04">screen</b>" autoplay&gt;&lt;/video&gt;

<b class="t01">&lt;script&gt;
((d) => {
  const video = d.getElementById('</b><b class="t04">screen</b><b class="t01">');
  const media = navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });
  media.then((stream) =&gt; {
    video.srcObject = stream;
  });
})(document);
&lt;/script&gt;</b>
</CopyCode></code></pre>
  </PreCodes>
</template>
