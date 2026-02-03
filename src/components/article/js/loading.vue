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
    title="loading"
    sample-url="/sample/html/loading.html"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1"&gt;

&lt;style&gt;
body {
  margin: 0;
  padding: 0;
}</b>
<b class="t03">.loading {
  position: relative;
  <b class="t02">top: 50px;
  left: 50px;</b>
  display: block;
  width: 2px;
  height: 2px;
}
.loading span {
  display: block;
  content: "";
  width: 4px;
  height: 12px;
  border-radius: 4px;
  position: absolute;
  background: #f4f4f4;
}
.loading .chip0 {
  background: #ccc;
}
.loading .chip1 {
  background: #ddd;
}
.loading .chip2 {
  background: #eee;
}</b>
<b class="t02">&lt;/style&gt;

&lt;div class="</b><b class="t04">loading</b><b class="t02">"&gt;&lt;/div&gt;</b>

<b class="t01">&lt;script&gt;
((w, d) =&gt; {
  w.onload = () =&gt; {
    const icon = d.querySelector('<b class="t04">.loading</b>');
    for(i = 0; i < 8; i++){
      const span = d.createElement('span');
      span.classList.add(`chip${i}`);
      icon.appendChild(span);
      const chip = d.querySelector('.chip' + i);
      const r = 14;
      chip.style.transform = 'rotate(-' + 45 * i + 'deg)';
      chip.style.top = r * Math.cos(45 * i / 180 * Math.PI) - 5 + 'px';
      chip.style.left = r * Math.sin(45 * i / 180 * Math.PI) - 1 + 'px';
    }
    const rtt45 = () => {
      var i = 0;
      return () =&gt; {
        icon.style.transform = 'rotate(' + 45 * i + 'deg)';
        (i === 7) ? i = 0 : i++;
      }
    }
    var id = setInterval(rtt45(), 100);
    w.setTimeout(() =&gt; {
      clearInterval(id);
    }, 5000);
  };
})(window, document);
&lt;/script&gt;</b>
</CopyCode>
</pre>
  </PreCodes>
</template>
