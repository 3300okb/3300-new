<script lang="ts">
export const metadata = {
  updateDate: '2018/01/16',
}
</script>

<script setup lang="ts">
import SwitchBox from '@/components/SwitchBox.vue'
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader title="jquery" :update-date="metadata.updateDate" />

  <PreCodes>
    <SwitchBox title="即時関数">
      <pre>
<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"&gt;&lt;/script&gt;

&lt;script&gt;

<b class="t01">(function(<b class="t03">$</b>){</b> <b class="t02">// ※1</b>

  var foo = "a";
  console.log(foo);  <b class="t02">// a</b>
  console.log($);  <b class="t02">// function (e,t){return new v.fn.init(e,t,n)}</b>
  console.log(jQuery);  <b class="t02">// function (e,t){return new v.fn.init(e,t,n)}</b>

<b class="t01">})(<b class="t03">jQuery</b>);</b> <b class="t02">// ※2</b>

console.log(foo);  <b class="t02">// Uncaught ReferenceError: foo is not defined </b>

<b class="t02">// 即時関数は、定義と呼び出しを兼ね、実行後はundefinedになる</b>
<b class="t02">// 即時関数で囲む場合、jQueryオブジェクトを変数$に格納してスコープを関数内に制限し、他ライブラリのグローバル$から影響を受けないようにする</b>
<b class="t02">// ※2のjQueryオブジェクトが引数として※1の$に入る</b>

&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="onDomReady">
      <pre>
// その1
<b class="t01">jQuery(function($){</b>
  <b class="t02">処理;</b>
<b class="t01">});</b>


// その2
<b class="t01">$(document).ready(function(){</b>
  <b class="t02">処理;</b>
<b class="t01">});</b>


// その3 <b class="t02">- その2から (document).ready を省略</b>
<b class="t01">$(function(){</b>
  <b class="t02">処理;</b>
<b class="t01">});</b>


<b class="t02">// DOM構築が完了した後、処理を実行する</b>
<b class="t02">// 上の3つは同じ動作</b>
<b class="t02">// DOM参照するときに必要な場合が多い</b>

---

<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"&gt;&lt;/script&gt;

&lt;script&gt;

<b class="t01">jQuery(function($){</b>   <b class="t02">// onDomReady(その1)</b>

  console.log('b');

<b class="t01">});</b>

console.log('a');

<b class="t02">// a -&gt; b の順に実行</b>
<b class="t02">// その2や3は、即時関数で囲まないと$変数が他のライブラリと競合してしまう可能性がある</b>

&lt;/script&gt;
</CopyCode>

---

<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"&gt;&lt;/script&gt;

&lt;script&gt;

<b class="t03">(function($){</b>   <b class="t02">// 即時関数</b>
  <b class="t01">$(function(){</b>   <b class="t02">// onDomReady(その3)</b>

    console.log('b');

  <b class="t01">});</b>
<b class="t03">})(jQuery);</b>

console.log('a');

<b class="t02">// a -&gt; b の順に実行</b>
<b class="t02">// その2や3でも即時関数内に入れれば$の競合は避けられるが、実行後undefinedになるので注意</b>

&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title='$("セレクタ").メソッド(…);'>
      <pre>
<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"&gt;&lt;/script&gt;

&lt;script&gt;

jQuery(function($){ <b class="t02">// onDomReady</b>

  <b class="t01">$(</b>".red"<b class="t01">).</b>css<b class="t01">(</b>"background-color","#f00"<b class="t01">);</b>
  <b class="t01">$(</b>".green"<b class="t01">).</b>css<b class="t01">(</b>"background-color","#0f0"<b class="t01">);</b>
  <b class="t01">$(</b>".blue"<b class="t01">).</b>css<b class="t01">(</b>"background-color","#00f"<b class="t01">);</b>

});

<b class="t02">// $("セレクタ").メソッド(…); が基本の形</b>
<b class="t02">// .css() は数あるメソッドの内の１つ</b>
<b class="t02">// メソッドは後ろに複数連結可能</b>

&lt;/script&gt;

&lt;p class="red"&gt;.red &lt;/p&gt;
&lt;p class="green"&gt;.green &lt;/p&gt;
&lt;p class="blue"&gt;.blue &lt;/p&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="イベントリスナ">
      <pre>
<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"&gt;&lt;/script&gt;

&lt;div class="foo"&gt;click 1&lt;/div&gt;
&lt;div class="foo"&gt;click 2&lt;/div&gt;
&lt;div class="foo"&gt;click 3&lt;/div&gt;

&lt;script&gt;

function fncConsole(ev){
  console.log(ev.target.innerHTML);
}

<b class="t03">$(function(){</b> <b class="t02">// onDomReady</b>
  <b class="t01">$("</b>.foo<b class="t01">").on("</b>click<b class="t01">", function(</b>ev<b class="t01">){</b>
    fncConsole(ev);
  <b class="t01">});</b>
<b class="t03">});</b>

<b class="t02">// onDomReadyは必要ない場合もある</b>
<b class="t02">// 上記 click 以外のイベント
// mouseover, mouseout, mousedown, mouseup, mousemove, dblclick, keydown, keyup, focus, blur, change, resize, scroll など</b>

&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="メソッド作成">
      <pre>
<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1"&gt;
&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"&gt;&lt;/script&gt;

&lt;script&gt;
jQuery(function($){


// デフォルトのスタイルシートをjQueryで指定

<b class="t01">$(":not('input')").css("margin","1px").css("padding","1px").css("font-size","12px").css("line-height","1em").css("border","#fff 1px solid");
$("li").css("list-style","none");</b>
$("li, div span, p").css("margin-left","10px");
$("span").css("display","block");

<b class="t02">// $("セレクタ").メソッド(…); が基本の形</b>
<b class="t02">// .css() は数あるメソッドの内の１つ</b>
<b class="t02">// メソッドは後ろに複数連結可能</b>

<b class="t02">// 一行目は以下のように書ける
// $(":not('input')").css({
//  "margin": "1px",
//  "padding": "1px",
//  "font-size": "12px",
//  "line-height": "1em",
//  "border": "#fff 1px solid"
// });</b>

<b class="t02">// 一行目は以下のようにも書ける
// var foo = {
//  "margin": "1px",
//  "padding": "1px",
//  "font-size": "12px",
//  "line-height": "1em",
//  "border": "#fff 1px solid"
// }
// $(":not('input')").css(foo);</b>

<b class="t02">// 一行目は以下のようにも書ける
// function foo() {
//   return {
//   "margin": "1px",
//   "padding": "1px",
//   "font-size": "12px",
//   "line-height": "1em",
//   "border": "#fff 1px solid"
//   }
// }
// $(":not('input')").css(foo());</b>


// メソッド作成

<b class="t01">$.fn.</b>redBorder<b class="t01"> = function(){</b>
  reset(); <b class="t02">// リセット用関数の実行</b>
  this.css("border","#f00 1px solid").css("background-color","rgba(255,0,0,0.1)"); <b class="t02">// thisに入るオブジェクトに対してborder,background-colorを付ける</b>
<b class="t01">}</b>
<b class="t02">/*</b>
<b class="t02">$.fn.メソッド名 = function(){</b>
<b class="t02">  処理;</b>
<b class="t02">}</b>
<b class="t02">が基本の形</b>
<b class="t02">*/</b>


// リセット用関数の定義

reset = function() {$(":not('input')").css("border","#fff 1px solid").css("background-color","rgba(255,255,255,1)");}
<b class="t02">// input以外の全てのborder,background-colorをリセット</b>


// clickしたinputのvalueが示すオブジェクトをredBorderメソッドに伝える

$("input").on("click", function(){
  <b class="t01">$(this.value)</b>.redBorder();
  <b class="t02">// this -&gt; clickされたinputオブジェクト</b>
  <b class="t02">// this.value -&gt; そのinputのvalueの文字列</b>
  <b class="t02">// $(this.value) -&gt; そのvalueが示すDOM要素をまとめたオブジェクト</b>
});


});
&lt;/script&gt;


&lt;h1&gt;h1&lt;/h1&gt;
&lt;h1 id="ttl"&gt;h1(id="ttl")&lt;/h1&gt;
&lt;h2&gt;h2&lt;/h2&gt;
&lt;ul&gt;ul
&lt;li&gt;li&lt;/li&gt;
&lt;/ul&gt;
&lt;ul&gt;ul
&lt;li&gt;li&lt;/li&gt;
&lt;li class="cls"&gt;li(class="cls")&lt;/li&gt;
&lt;/ul&gt;
&lt;ul&gt;ul
&lt;li class="sty1"&gt;li(class="sty1")&lt;/li&gt;
&lt;li class="sty2 sty1"&gt;li(class="sty2 sty1")&lt;/li&gt;
&lt;li class="sty1 sty2"&gt;li(class="sty1 sty2")&lt;/li&gt;
&lt;li class="sty1-sty2"&gt;li(class="sty1-sty2")&lt;/li&gt;
&lt;/ul&gt;
&lt;span&gt;span&lt;/span&gt;
&lt;span&gt;span&lt;/span&gt;
&lt;div&gt;div
&lt;span&gt;span&lt;/span&gt;
&lt;span&gt;span&lt;/span&gt;
&lt;span&gt;span&lt;/span&gt;
&lt;/div&gt;
&lt;span&gt;span&lt;/span&gt;
&lt;span&gt;span&lt;/span&gt;
&lt;div&gt;div
&lt;p&gt;p
&lt;span&gt;span&lt;/span&gt;
&lt;span&gt;span&lt;/span&gt;
&lt;span&gt;span&lt;/span&gt;
&lt;span&gt;span&lt;/span&gt;
&lt;/p&gt;
&lt;/div&gt;
&lt;div&gt;div
&lt;span&gt;span&lt;/span&gt;
&lt;/div&gt;
&lt;div&gt;div
&lt;p&gt;p&lt;/p&gt;
&lt;span&gt;span&lt;/span&gt;
&lt;/div&gt;
&lt;div&gt;div(include empty span)
&lt;span&gt;&lt;/span&gt;
&lt;/div&gt;
&lt;span&gt;span&lt;/span&gt;
&lt;span&gt;span&lt;/span&gt;

&lt;div style="background:#eee;"&gt;
&lt;input type="button" onclick="reset()" value="reset"&gt;
&lt;input type="button" value='h1'&gt;
&lt;input type="button" value='ul'&gt;
&lt;input type="button" value='li'&gt;
&lt;input type="button" value='h1, li'&gt;
&lt;input type="button" value='#ttl'&gt;
&lt;input type="button" value='.cls'&gt;
&lt;input type="button" value=':header'&gt;
&lt;input type="button" value='li[class]'&gt;
&lt;input type="button" value='li[class="sty1"]'&gt;
&lt;input type="button" value='li[class^="sty1"]'&gt;
&lt;input type="button" value='li[class|="sty1"]'&gt;
&lt;input type="button" value='li[class$="y2"]'&gt;
&lt;input type="button" value='li[class*="sty1"]'&gt;
&lt;input type="button" value='span'&gt;
&lt;input type="button" value='div span'&gt;
&lt;input type="button" value='div &gt; span'&gt;
&lt;input type="button" value='div + span'&gt;
&lt;input type="button" value='div ~ span'&gt;
&lt;input type="button" value='span:first'&gt;
&lt;input type="button" value='span:first-child'&gt;
&lt;input type="button" value='span:first-of-type'&gt;
&lt;input type="button" value='span:last'&gt;
&lt;input type="button" value='span:last-child'&gt;
&lt;input type="button" value='span:last-of-type'&gt;
&lt;input type="button" value='span:nth-child(2)'&gt;
&lt;input type="button" value='span:nth-of-type(2)'&gt;
&lt;input type="button" value='span:nth-last-child(2)'&gt;
&lt;input type="button" value='span:nth-last-of-type(2)'&gt;
&lt;input type="button" value='span:nth-child(even)'&gt;
&lt;input type="button" value='span:even'&gt;
&lt;input type="button" value='span:nth-child(odd)'&gt;
&lt;input type="button" value='span:odd'&gt;
&lt;input type="button" value='span:only-child'&gt;
&lt;input type="button" value='span:only-of-type'&gt;
&lt;input type="button" value='span:eq(5)'&gt;
&lt;input type="button" value='span:lt(5)'&gt;
&lt;input type="button" value='span:gt(5)'&gt;
&lt;input type="button" value='span:empty'&gt;
&lt;input type="button" value=':not(h2,span,input)'&gt;
&lt;input type="button" value='div:has(p)'&gt;
&lt;/div&gt;
</CopyCode>

</pre>
    </SwitchBox>

    <SwitchBox title="each">
      <pre><CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1"&gt;
&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"&gt;&lt;/script&gt;

&lt;ul&gt;
&lt;li&gt;&lt;/li&gt;
&lt;li&gt;&lt;/li&gt;
&lt;li&gt;&lt;/li&gt;
&lt;/ul&gt;

&lt;script&gt;
$(function(){</b>
  var <b class="t03">arr</b> = $("li");
  <b class="t01">$.each(<b class="t03">arr</b>, function(<b class="t04">index</b>){</b>
    $(<b class="t05">this</b>).text(<b class="t04">index</b>);
    <b class="t02">console.log(index); // 0, 1, 2
    console.log(this); // &lt;li&gt;0&lt;/li&gt;, &lt;li&gt;1&lt;/li&gt;, &lt;li&gt;2&lt;/li&gt;
    console.log($(this)); // [li, context: li], [li, context: li], [li, context: li]</b>
  <b class="t01">});</b>
<b class="t02">});
&lt;/script&gt;</b>
</CopyCode>

</pre>
    </SwitchBox>

    <SwitchBox title="extend">
      <pre><CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"&gt;&lt;/script&gt;

&lt;script&gt;
jQuery(function($){

var <b class="t05">obj_1 = {
  v1: "a",
  v2: "B"
}</b>

var <b class="t03">obj_2 = {
  v2: "b",
  v3: "c"
}</b>

<b class="t01">$.extend(</b><b class="t05">obj_1</b><b class="t01">, </b><b class="t03">obj_2</b><b class="t01">);</b>

console.log(<b class="t05">obj_1</b>); <b class="t02">// merged // {v1: "a", v2: "b", v3: "c"}</b>
console.log(<b class="t03">obj_2</b>); <b class="t02">// no merged</b>

});
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="///">
      <pre>


<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"&gt;&lt;/script&gt;

&lt;script&gt;
jQuery(function($){



});
&lt;/script&gt;
</CopyCode>


</pre>
    </SwitchBox>
  </PreCodes>
</template>
