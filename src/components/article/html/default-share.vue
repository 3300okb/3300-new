<script lang="ts">
export const metadata = {
  updateDate: '2018/11/03',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader
    title="default-share"
    sample-url="/sample/html/default-share.html"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;meta charset="UTF-8"&gt;

&lt;!--w3c meta--&gt;</b>
&lt;title&gt;<b class="t04">{title:a}</b>&lt;/title&gt;
&lt;meta name="description" content="<b class="t04">{description:a}</b>"&gt;
<b class="t02">&lt;meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1"&gt;

&lt;!--fb meta--&gt;</b>
&lt;meta property="<b class="t03">og:title</b>" content="<b class="t04">{title:b}</b>"&gt;
&lt;meta property="<b class="t03">og:description</b>" content="<b class="t04">{description:b}</b>"&gt;
&lt;meta property="<b class="t03">og:url</b>" content="http://3300.me/sample/html/default_share/sample.html"&gt;
&lt;meta property="<b class="t03">og:image</b>" content="http://3300.me/top/img/photo/coffee.jpg"&gt;

<b class="t02">&lt;!--tw meta--&gt;</b>
&lt;meta name="<b class="t03">twitter:card</b>" content="summary_large_image"&gt;
&lt;meta name="<b class="t03">twitter:title</b>" content="<b class="t04">{title:c}</b>"&gt;
&lt;meta name="<b class="t03">twitter:description</b>" content="<b class="t04">{description:c}</b>"&gt;
&lt;meta name="<b class="t03">twitter:image</b>" content="http://3300.me/top/img/photo/coffee.jpg"&gt;

&lt;style&gt;
html {
padding: 10px;
}
ul {
padding: 0;
}
li {
display: inline-block;
list-style: none;
}
&lt;/style&gt;


&lt;h2&gt;official&lt;/h2&gt;
&lt;ul&gt;
&lt;li&gt;&lt;a href="https://developers.facebook.com/docs/plugins/share-button?locale=ja_JP"&gt;facebook&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="https://publish.twitter.com/#"&gt;Twitter&lt;/a&gt;&lt;/li&gt;
&lt;li&gt;&lt;a href="https://social-plugins.line.me/ja/how_to_install#lineitbutton"&gt;LINE&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;

&lt;h2&gt;sample&lt;/h2&gt;
&lt;ul&gt;
&lt;li&gt;<b class="t04">&lt;div id="fb-root"&gt;&lt;/div&gt;&lt;script&gt;(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src='https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&amp;version=v3.2&amp;autoLogAppEvents=1';fjs.parentNode.insertBefore(js,fjs);}(document,'script','facebook-jssdk'));&lt;/script&gt;&lt;div class="fb-share-button" data-href="</b>http://3300.me/sample/html/default_share/sample.html<b class="t04">" data-layout="button_count" data-size="small" data-mobile-iframe="true"&gt;&lt;a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=</b>http%3A%2F%2F3300.me%2Fsample%2Fhtml%2Fdefault_share%2Fsample.html<b class="t04">&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore"&gt;シェア&lt;/a&gt;&lt;/div&gt;</b>&lt;/li&gt;
&lt;li&gt;<b class="t05">&lt;a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false"&gt;ツイート&lt;/a&gt;&lt;script async src="https://platform.twitter.com/widgets.js" charset="utf-8"&gt;&lt;/script&gt;</b>&lt;/li&gt;
&lt;li&gt;<b class="t01">&lt;div class="line-it-button" data-lang="ja" data-type="share-a" data-url="</b>http://3300.me/sample/html/default_share/sample.html<b class="t01">" style="display: none;"&gt;&lt;/div&gt;&lt;script src="https://d.line-scdn.net/r/web/social-plugin/js/thirdparty/loader.min.js" async="async" defer="defer"&gt;&lt;/script&gt;</b>&lt;/li&gt;
&lt;/ul&gt;
</CopyCode></pre>
  </PreCodes>
</template>
