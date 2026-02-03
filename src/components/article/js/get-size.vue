<script lang="ts">
export const metadata = {
  updateDate: '2016/10/07',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader
    title="get-size"
    sample-url="/sample/html/get-size.html"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;getSize&lt;/title&gt;
&lt;meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1"&gt;
&lt;meta name="format-detection" content="telephone=no"&gt;

&lt;style&gt;
html, body, dl, p {margin: 0; padding: 0;}
body {padding: 10px; position: relative;}
.innerWindow {position: absolute; top: 0; left: 0; width: 100%; padding: 5px; background: #5ad3dd; box-sizing: border-box; z-index: 1;}
.innerWindow div {height: 100%; background: #fff;}
dl {width: 300px; margin-bottom: 18px; overflow: hidden;}
dt {width: 200px;}
dd {width: 100px; text-align: right;}
dt, dd {float: left; margin: 0; font-size: 12px; border-bottom: #ddd 1px solid;}
h1 {margin: 0;font-size: 30px;}
dl + h1 {margin-top: 30px;}
.windowSection, .elementSection {position: relative; z-index: 2;}
.inner {position: relative; width: 300px; height: 165px; margin-bottom: 10px; background: #f9cc9d;}
.inner p {position: absolute; font-size: 12px; white-space: nowrap;}
.margin {right: 5px; bottom: 1px;}
.border {top: 115px; right: 50px; color: #f00;}
.border span {color: #10af00;}
#element {position: relative; display: block; width: 215px; height: 80px; margin: 0 50px 50px 0; padding: 0 30px 30px 0; background: #c4d08b; border-right: #f00 5px solid; border-bottom: #f00 5px solid; font-size: 12px; overflow: scroll;}
#element div {position: absolute; top: 0; left: 0;}
#element div div {position: relative;}
#element span {position: absolute; right: 5px; bottom: 1px;}
.pure div {width: 215px; height: 80px; background: #8cb6c1;}
.padding div {width: 245px; height: 110px; background: #c4d08b;}
.overflow div {width: 285px; height: 150px; background: #e0e0e0;}
.targetW {color: #5ad3dd;}
.targetE {color: #10af00;}
.upperLeftPoint {display: block; position: absolute; top: 0; left: 0; z-index: 10; font-size: 8px;}
&lt;/style&gt;


&lt;div class="innerWindow"&gt;&lt;div&gt;&lt;/div&gt;&lt;/div&gt;

&lt;div class="windowSection"&gt;
&lt;h1&gt;window&lt;/h1&gt;
&lt;dl&gt;
&lt;dt&gt;window.innerWidth&lt;/dt&gt;&lt;dd class="w_iW"&gt;&lt;/dd&gt;
&lt;dt&gt;window.outerWidth&lt;/dt&gt;&lt;dd class="w_oW"&gt;&lt;/dd&gt;
&lt;dt class="targetW"&gt;$(window).innerWidth()&lt;/dt&gt;&lt;dd class="w_iW2 targetW"&gt;&lt;/dd&gt;
&lt;dt&gt;$(window).outerWidth()&lt;/dt&gt;&lt;dd class="w_oW2"&gt;&lt;/dd&gt;
&lt;dt&gt;window.innerHeight&lt;/dt&gt;&lt;dd class="w_iH"&gt;&lt;/dd&gt;
&lt;dt&gt;window.outerHeight&lt;/dt&gt;&lt;dd class="w_oH"&gt;&lt;/dd&gt;
&lt;dt class="targetW"&gt;$(window).innerHeight()&lt;/dt&gt;&lt;dd class="w_iH2 targetW"&gt;&lt;/dd&gt;
&lt;dt&gt;$(window).outerHeight()&lt;/dt&gt;&lt;dd class="w_oH2"&gt;&lt;/dd&gt;
&lt;/dl&gt;
&lt;/div&gt;

&lt;div class="elementSection"&gt;
&lt;h1&gt;element&lt;/h1&gt;
&lt;div class="inner"&gt;
&lt;p class="margin"&gt;margin +50 / 300 165&lt;/p&gt;
&lt;p class="border"&gt;border +5 / &lt;span&gt;250 115&lt;/span&gt;&lt;/p&gt;
&lt;div id="element"&gt;
&lt;div class="overflow"&gt;&lt;div&gt;&lt;span&gt;overflow +40 / 285 150&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;
&lt;div class="padding"&gt;&lt;div&gt;&lt;span&gt;padding +30 / 245 110&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;
&lt;div class="pure"&gt;&lt;div&gt;&lt;span&gt;#element pure / 215 80&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;/div&gt;
&lt;dl&gt;
&lt;dt&gt;el.clientWidth&lt;/dt&gt;&lt;dd class="el_cW"&gt;&lt;/dd&gt;
&lt;dt&gt;el.scrollWidth&lt;/dt&gt;&lt;dd class="el_sW"&gt;&lt;/dd&gt;
&lt;dt class="targetE"&gt;el.offsetWidth&lt;/dt&gt;&lt;dd class="el_oW targetE"&gt;&lt;/dd&gt;
&lt;dt&gt;$el.width()&lt;/dt&gt;&lt;dd class="el_w"&gt;&lt;/dd&gt;
&lt;dt&gt;$el.innerWidth()&lt;/dt&gt;&lt;dd class="el_iw"&gt;&lt;/dd&gt;
&lt;dt class="targetE"&gt;$el.outerWidth()&lt;/dt&gt;&lt;dd class="el_ow targetE"&gt;&lt;/dd&gt;
&lt;dt&gt;$el.outerWidth(true)&lt;/dt&gt;&lt;dd class="el_owt"&gt;&lt;/dd&gt;
&lt;dt&gt;el.clientHeight&lt;/dt&gt;&lt;dd class="el_cH"&gt;&lt;/dd&gt;
&lt;dt&gt;el.scrollHeight&lt;/dt&gt;&lt;dd class="el_sH"&gt;&lt;/dd&gt;
&lt;dt class="targetE"&gt;el.offsetHeight&lt;/dt&gt;&lt;dd class="el_oH targetE"&gt;&lt;/dd&gt;
&lt;dt&gt;$el.height()&lt;/dt&gt;&lt;dd class="el_h"&gt;&lt;/dd&gt;
&lt;dt&gt;$el.innerHeight()&lt;/dt&gt;&lt;dd class="el_ih"&gt;&lt;/dd&gt;
&lt;dt class="targetE"&gt;$el.outerHeight()&lt;/dt&gt;&lt;dd class="el_oh targetE"&gt;&lt;/dd&gt;
&lt;dt&gt;$el.outerHeight(true)&lt;/dt&gt;&lt;dd class="el_oht"&gt;&lt;/dd&gt;
&lt;/dl&gt;
&lt;/div&gt;

&lt;div class="upperLeftPoint"&gt;(&lt;span class="ulpX"&gt;&lt;/span&gt;, &lt;span class="ulpY"&gt;&lt;/span&gt;)&lt;/div&gt;</b>

&lt;script&gt;
(function(){

  <b class="t02">// window</b>
  var w = window;
  var $w = $(window);

  function resizeWindow() {
    $(".w_iW").text(w.<b class="t01">innerWidth</b>);
    $(".w_oW").text(w.<b class="t01">outerWidth</b>); <b class="t02">// status bar や inspector を含む, iOSで0のバグ</b>
    $(".w_iW2").text($w.<b class="t01">innerWidth()</b>);
    $(".w_oW2").text($w.<b class="t01">outerWidth()</b>);
    $(".w_iH").text(w.<b class="t01">innerHeight</b>); <b class="t02">// iOSでスクロール時に変動(操作バーhidden時)</b>
    $(".w_oH").text(w.<b class="t01">outerHeight</b>); <b class="t02">// status bar や inspector を含む, iOSで0のバグ</b>
    $(".w_iH2").text($w.<b class="t01">innerHeight()</b>);
    $(".w_oH2").text($w.<b class="t01">outerHeight()</b>); <b class="t02">// iOSでスクロール時に変動(操作バーhidden時)</b>
    $(".innerWindow").css('height', $w.innerHeight());
  }
  $(window).on('load resize', function(){
    resizeWindow();
  });

  <b class="t02">// element</b>
  var el = document.getElementById('element');
  var $el = $("#element");

  $(".el_cW").text(el.<b class="t01">clientWidth</b>); <b class="t02">// paddingを含む</b>
  $(".el_sW").text(el.<b class="t01">scrollWidth</b>); <b class="t02">// paddingとoverflowを含む</b>
  $(".el_oW").text(el.<b class="t01">offsetWidth</b>); <b class="t02">// paddingとborderを含む</b>
  $(".el_w").text($el.<b class="t01">width()</b>); <b class="t02">// 要素の幅のみ</b>
  $(".el_iw").text($el.<b class="t01">innerWidth()</b>); <b class="t02">// paddingを含む</b>
  $(".el_ow").text($el.<b class="t01">outerWidth()</b>); <b class="t02">// paddingとborderを含む</b>
  $(".el_owt").text($el.<b class="t01">outerWidth(true)</b>); <b class="t02">// paddingとborderとmarginを含む</b>
  $(".el_cH").text(el.<b class="t01">clientHeight</b>); <b class="t02">// paddingを含む</b>
  $(".el_sH").text(el.<b class="t01">scrollHeight</b>); <b class="t02">// paddingとoverflowを含む</b>
  $(".el_oH").text(el.<b class="t01">offsetHeight</b>); <b class="t02">// paddingとborderを含む</b>
  $(".el_h").text($el.<b class="t01">height()</b>); <b class="t02">// 要素の高さのみ</b>
  $(".el_ih").text($el.<b class="t01">innerHeight()</b>); <b class="t02">// paddingを含む</b>
  $(".el_oh").text($el.<b class="t01">outerHeight()</b>); <b class="t02">// paddingとborderを含む</b>
  $(".el_oht").text($el.<b class="t01">outerHeight(true)</b>); <b class="t02">// paddingとborderとmarginを含む</b>

  <b class="t02">// Point in the upper left</b>
  function getPoint() {
    $(".ulpX").text(w.screenX);
    $(".ulpY").text(w.screenY);
  }
  var moveWindow = setInterval(function () {
    getPoint();
  }, 500);

})();
&lt;/script&gt;
</CopyCode>
</pre>
  </PreCodes>
</template>
