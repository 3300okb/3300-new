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
    title="smooth-scroll"
    sample-url="/sample/html/smooth-scroll.html"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <p class="text-black">
      // support IE11, iOS Safari and more<br />
      // buffer unavailable
    </p>

    <pre><code>// npm package

---

<b class="t01">npm i --save smoothscroll-polyfill</b>

---
<CopyCode>
<b class="t01"><b class="t04">import smoothscroll from 'smoothscroll-polyfill';</b>

export const smoothScroll = (<b class="t05">cls</b>) =&gt; {
  <b class="t04">smoothscroll.polyfill();</b>
  document.addEventListener('click', (ev) =&gt; {
    const target = ev.target;
    if (!target.classList.contains(cls)) {
      return;
    }
    ev.preventDefault();
    const targetId = target.<b class="t06">hash</b>;
    document.querySelector(targetId).<b class="t03">scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })</b>;
  });
};</b>
</CopyCode>

---

<b class="t04">import {smoothScroll} from './fnc/smoothScroll';</b>

<b class="t01">window.onload = () =&gt; {
  smoothScroll(<b class="t05">smoothScroll</b>);
};</b>

---

&lt;ul&gt;
&lt;li&gt;&lt;a class="<b class="t05">smoothScroll</b>" href="<b class="t06">#top</b>"&gt;top&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class="<b class="t05">smoothScroll</b>" href="<b class="t06">#a</b>"&gt;a&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class="<b class="t05">smoothScroll</b>" href="<b class="t06">#b</b>"&gt;b&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class="<b class="t05">smoothScroll</b>" href="<b class="t06">#c</b>"&gt;c&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class="<b class="t05">smoothScroll</b>" href="<b class="t06">#d</b>"&gt;d&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class="<b class="t05">smoothScroll</b>" href="<b class="t06">#e</b>"&gt;e&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class="<b class="t05">smoothScroll</b>" href="<b class="t06">#f</b>"&gt;f&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;

&lt;h1 id="<b class="t06">top</b>"&gt;smooth scroll&lt;/h1&gt;
&lt;p id="<b class="t06">a</b>"&gt;a&lt;/p&gt;
&lt;p id="<b class="t06">b</b>"&gt;b&lt;/p&gt;
&lt;p id="<b class="t06">c</b>"&gt;c&lt;/p&gt;
&lt;p id="<b class="t06">d</b>"&gt;d&lt;/p&gt;
&lt;p id="<b class="t06">e</b>"&gt;e&lt;/p&gt;
&lt;p id="<b class="t06">f</b>"&gt;f&lt;/p&gt;
</code></pre>

    <pre><code>// inline

---
<CopyCode>
&lt;!doctype html&gt;
&lt;title&gt;smoothScroll&lt;/title&gt;
&lt;meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1"&gt;

&lt;style&gt;
html, body, ul, p {margin: 0; padding: 0; font-size: 14px;}
h1 {margin: 0;}
ul {position: fixed; top: 0; right: 0;}
li {list-style: none;}
a {display: block; width: 44px; height: 44px; border: #ddd 1px dotted; background: #fff; cursor: pointer;}
p {height: 400px;}
#a, #c, #e {background: #eee;}
&lt;/style&gt;

&lt;ul&gt;
&lt;li&gt;&lt;a class="smoothScroll" href="#top"&gt;top&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class="smoothScroll" href="#a"&gt;a&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class="smoothScroll" href="#b"&gt;b&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class="smoothScroll" href="#c"&gt;c&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class="smoothScroll" href="#d"&gt;d&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class="smoothScroll" href="#e"&gt;e&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a class="smoothScroll" href="#f"&gt;f&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;

&lt;h1 id="top"&gt;smooth scroll&lt;/h1&gt;
&lt;p id="a"&gt;a&lt;/p&gt;
&lt;p id="b"&gt;b&lt;/p&gt;
&lt;p id="c"&gt;c&lt;/p&gt;
&lt;p id="d"&gt;d&lt;/p&gt;
&lt;p id="e"&gt;e&lt;/p&gt;
&lt;p id="f"&gt;f&lt;/p&gt;

&lt;script src="<a href="/sample/js/scroll2/polyfill.min.js">polyfill.min.js</a>"&gt;&lt;/script&gt;
&lt;script&gt;
(function(cls){
  document.addEventListener('click', (ev) =&gt; {
    const target = ev.target;
    if (!target.classList.contains(cls)) {
      return;
    }
    ev.preventDefault();
    const targetId = target.hash;
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
})('smoothScroll');
&lt;/script&gt;
</CopyCode>
</code></pre>
  </PreCodes>
</template>
