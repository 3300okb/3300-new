<script lang="ts">
export const metadata = {
  updateDate: '2016/07/16',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader
    title="smooth-scroll-jquery"
    sample-url="/sample/html/smooth-scroll-jquery.html"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><code><CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1"&gt;
&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"&gt;&lt;/script&gt;</b>

&lt;script&gt;
jQuery(function($){
  <b class="t01">var hash;
  var pos;
  $('a[href ^= \'#\']').on('click', (el) => {
    hash = el.target.hash;
    if (hash === '#top') {
      pos = 0;
    } else {
      pos = $(hash).offset().top;
    }
    $('html, body').animate({scrollTop: pos}, </b>300<b class="t01">, '</b>linear<b class="t01">');
    return false;
  });</b>
});

<b class="t02">// $("a[href ^= '#']") ... #から始まるhrefを持つaタグ</b>
<b class="t02">// htmlで href="#top" にすればtopまでスクロール</b>
<b class="t02">// 300 ... スピード</b>
<b class="t02">// linear, swing ... 動きの種類</b>
<b class="t02">// return false ... preventDefaultの役割</b>
&lt;/script&gt;

<b class="t02">&lt;style&gt;
html, body, ul, p {margin: 0; padding: 0; font-size: 14px;}
h1 {margin: 0;}
ul {position: fixed; top: 0; right: 0;}
li {list-style: none;}
a {display: block; width: 44px; height: 44px; border: #ddd 1px dotted; background: #fff; cursor: pointer;}
p {height: 400px;}
#a, #c, #e {background: #eee;}
&lt;/style&gt;</b>

&lt;ul&gt;
&lt;li&gt;&lt;a <b class="t03">href="#top"</b>&gt;top&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a <b class="t03">href="#a"</b>&gt;a&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a <b class="t03">href="#b"</b>&gt;b&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a <b class="t03">href="#c"</b>&gt;c&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a <b class="t03">href="#d"</b>&gt;d&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a <b class="t03">href="#e"</b>&gt;e&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a <b class="t03">href="#f"</b>&gt;f&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;

&lt;h1&gt;smooth scroll&lt;/h1&gt;
&lt;p <b class="t04">id="a"</b>&gt;a&lt;/p&gt;
&lt;p <b class="t04">id="b"</b>&gt;b&lt;/p&gt;
&lt;p <b class="t04">id="c"</b>&gt;c&lt;/p&gt;
&lt;p <b class="t04">id="d"</b>&gt;d&lt;/p&gt;
&lt;p <b class="t04">id="e"</b>&gt;e&lt;/p&gt;
&lt;p <b class="t04">id="f"</b>&gt;f&lt;/p&gt;
</CopyCode>
</code></pre>
  </PreCodes>
</template>
