<script lang="ts">
export const metadata = {
  updateDate: '2016/09/29',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader
    title="custom-share"
    sample-url="/sample/html/custom-share.html"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;meta charset="UTF-8"&gt;
&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"&gt;&lt;/script&gt;

&lt;!--w3c meta--&gt;</b>
&lt;title&gt;<b class="t04">{title:a}</b>&lt;/title&gt;
&lt;meta name="description" content="<b class="t04">{description:a}</b>"&gt;
<b class="t02">&lt;meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1"&gt;

&lt;!--fb meta--&gt;</b>
&lt;meta property="<b class="t03">og:title</b>" content="<b class="t04">{title:b}</b>"&gt;
&lt;meta property="<b class="t03">og:description</b>" content="<b class="t04">{description:b}</b>"&gt;
&lt;meta property="<b class="t03">og:url</b>" content="http://3300.me/sample/html/custom_share/popup.html"&gt;
&lt;meta property="<b class="t03">og:image</b>" content="http://3300.me/top/img/photo/coffee.jpg"&gt;

<b class="t02">&lt;!--tw meta--&gt;</b>
&lt;meta name="<b class="t03">twitter:card</b>" content="summary_large_image"&gt;
&lt;meta name="<b class="t03">twitter:title</b>" content="<b class="t04">{title:c}</b>"&gt;
&lt;meta name="<b class="t03">twitter:description</b>" content="<b class="t04">{description:c}</b>"&gt;
&lt;meta name="<b class="t03">twitter:image</b>" content="http://3300.me/top/img/photo/coffee.jpg"&gt;

<b class="t02">&lt;style&gt;
html, body, ul {margin: 0; padding: 0;}
body {padding: 30px;}
ul {overflow: hidden;}
li {float: left; margin: 0 4px 4px 0; list-style: none;}
.share a {display: inline-block; padding: 10px 20px; border: #000 1px solid; color: #000; text-decoration: none;}
&lt;/style&gt;</b>

&lt;ul class="share"&gt;
&lt;li class="btnLn"&gt;&lt;a href=""&gt;LINE&lt;/a&gt;&lt;/li&gt;
&lt;li class="btnTw"&gt;&lt;a href=""&gt;Twitter&lt;/a&gt;&lt;/li&gt;
&lt;li class="btnFb"&gt;&lt;a href=""&gt;Facebook&lt;/a&gt;&lt;/li&gt;
&lt;li class="btnTb"&gt;&lt;a href=""&gt;Tumblr&lt;/a&gt;&lt;/li&gt;
&lt;li class="btnGg"&gt;&lt;a href=""&gt;Google&lt;/a&gt;&lt;/li&gt;
&lt;li class="btnMx"&gt;&lt;a href=""&gt;Mixi&lt;/a&gt;&lt;/li&gt;
&lt;li class="btnHt"&gt;&lt;a href=""&gt;Hatena&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;


<b class="t02">&lt;script&gt;

(function(w){
  var ua = w.navigator.userAgent;
  var deviceType;
  // sp
  if (/iPhone/.test(ua) || /iPod/.test(ua)) {
    deviceType = "sp";
  } else if (/Android/.test(ua) && /Mobile/.test(ua)) {
    deviceType = "sp";
  } else if (/Windows/.test(ua) && /Phone/.test(ua)) {
    deviceType = "sp";
  } else if (/Firefox/.test(ua) && /Mobile/.test(ua)) {
    deviceType = "sp";
  } else if (/BlackBerry/.test(ua) || /BB10/.test(ua)) {
    deviceType = "sp";
  } else if (/Nokia/.test(ua)) {
    deviceType = "sp";
  // tablet
  } else if (/iPad/.test(ua)) {
    deviceType = "tablet";
  } else if (/Android/.test(ua) &amp;&amp; !(/Mobile/.test(ua))) {
    deviceType = "tablet";
  } else if (/Windows/.test(ua) &amp;&amp; /Touch/.test(ua) &amp;&amp; !(/Tablet PC/.test(ua))) {
    deviceType = "tablet";
  } else if (/Firefox/.test(ua) &amp;&amp; /Tablet/.test(ua)) {
    deviceType = "tablet";
  } else if (/Playbook/.test(ua)) {
    deviceType = "tablet";
  } else if (/Kindle/.test(ua) || /Silk/.test(ua)) {
    deviceType = "tablet";
  // pc
  } else {
    deviceType = "pc";
  }
  w.deviceType = deviceType;
})(window);</b>

(function(w){

  <b class="t02">// set href</b>
  var data = {
    url : encodeURIComponent(<b class="t05">w.location.href</b>),
    text : encodeURIComponent("<b class="t05">テキストテキスト</b>"),
    space : encodeURIComponent(" ")
  }
  var href = {
    LINEPC : "<b class="t01">https://lineit.line.me/share/ui?url=</b>" + data.url,
    LINESP : "<b class="t01">https://line.me/R/msg/text/?</b>" + data.url + data.space + data.text,
    Twitter : "<b class="t01">https://twitter.com/intent/tweet?text=</b>" + data.url + data.space + data.text,
    Facebook : "<b class="t01">https://www.facebook.com/sharer/sharer.php?u=</b>" + data.url,
    Tumblr : "<b class="t01">https://tumblr.com/widgets/share/tool?canonicalUrl=</b>" + data.url,
    Google : "<b class="t01">https://plus.google.com/share?url=</b>" + data.url,
    Mixi : "<b class="t01">https://mixi.jp/share.pl?u=</b>" + data.url,
    Hatena : "<b class="t01">https://b.hatena.ne.jp/entry/</b>" + data.url
  }
  if(deviceType === "pc"){
    $(".btnLn a").attr("href", href.LINEPC);
  } else {
    $(".btnLn a").attr("href", href.LINESP);
  }
  $(".btnTw a").attr("href", href.Twitter);
  $(".btnFb a").attr("href", href.Facebook);
  $(".btnTb a").attr("href", href.Tumblr);
  $(".btnGg a").attr("href", href.Google);
  $(".btnMx a").attr("href", href.Mixi);
  $(".btnHt a").attr("href", href.Hatena);


  <b class="t02">// event</b>
  if(deviceType === "pc"){ <b class="t02">// spの場合window.openの必要無し</b>

    $(".share a").on("click", function () {
      var site = this.href;

      if(!(site.match(/b\.hatena\.ne\.jp/))){ <b class="t02">// Hatenaはpopup未対応</b>

        <b class="t02">// size of popup</b>
        var pW = 560, pH = 470;
        if(site.match(/lineit\.line\.me/)){ pH = 530; }
        if(site.match(/www\.facebook\.com/)){ pH = 624; }
        if(site.match(/tumblr\.com\/widgets/)){ pH = 716; }
        if(site.match(/plus\.google\.com/)){ pW = 400; pH = 616; }
        if(site.match(/mixi\.jp\/share/)){ pW = 632; pH = 492; }

        <b class="t02">// position</b>
        var pos_x =  w.screenX + (w.innerWidth / 2) - (pW / 2);
        var pos_y =  w.screenY + (w.innerHeight / 2) - (pH / 2);

        w.open(site, 'popup', 'width=' + pW + ', height=' + pH + ', menubar=no, toolbar=no, scrollbars=no, screenX=' + pos_x + ', screenY=' + pos_y);

        return false;
      }
    });
  }
})(window);

<b class="t02">&lt;/script&gt;</b>
</CopyCode></pre>
  </PreCodes>
</template>
