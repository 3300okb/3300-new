<script lang="ts">
export const metadata = {
  updateDate: '2020/12/19',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader
    title="mp4-mouse-enter"
    sample-url="/sample/html/mp4-mouse-enter.html"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><code><CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;style&gt;
video {
  width: 480px;
}
&lt;/style&gt;</b>

<b class="t03">&lt;video loop poster="</b>thumb01.png<b class="t03">"&gt;
&lt;source src="</b>sample01.mp4<b class="t03">"&gt;
&lt;/video&gt;

&lt;video loop poster="</b>thumb02.png<b class="t03">"&gt;
&lt;source src="</b>sample02.mp4<b class="t03">"&gt;
&lt;/video&gt;</b>

<b class="t01">&lt;script&gt;</b>
<b class="t01">((d) => {
  const </b>videos<b class="t01"> = d.getElementsByTagName('video');
  const </b>playVideo<b class="t01"> = function () {
    this.play();
  };
  const </b>pauseVideo<b class="t01"> = function () {
    this.pause();
  };
  [].forEach.call(</b>videos<b class="t01">, (</b>item<b class="t01">) => {
    </b>item<b class="t01">.addEventListener('mouseenter', </b>playVideo<b class="t01">, false);
    </b>item<b class="t01">.addEventListener('mouseleave', </b>pauseVideo<b class="t01">, false);
  });
})(document);
&lt;/script&gt;</b>
</CopyCode>
</code></pre>
  </PreCodes>
</template>
