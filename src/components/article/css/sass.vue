<script lang="ts">
export const metadata = {
  updateDate: '2021/02/26',
}
</script>

<script setup lang="ts">
import SwitchBox from '@/components/SwitchBox.vue'
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader title="sass" :update-date="metadata.updateDate" />

  <PreCodes>
    <SwitchBox title="ネスト(property)">
      <pre>// scss

<CopyCode>div {
  <b class="t01">border:</b> {
    <b class="t01">style:</b> <b class="t02">solid;</b>
    <b class="t01">left:</b> {
      <b class="t01">width:</b> <b class="t02">1px;</b>
      <b class="t01">color:</b> <b class="t02">#111;</b>
    }
    <b class="t01">right:</b> {
      <b class="t01">width:</b> <b class="t02">1px;</b>
      <b class="t01">color:</b> <b class="t02">#222;</b>
    }
  }
  <b class="t01">margin:</b> <b class="t02">10px</b> {
    <b class="t01">top:</b> <b class="t02">0;</b>
  }
}
</CopyCode>

---

// css

div {
  <b class="t01">border-style:</b> <b class="t02">solid;</b>
  <b class="t01">border-left-width:</b> <b class="t02">1px;</b>
  <b class="t01">border-left-color:</b> <b class="t02">#111;</b>
  <b class="t01">border-right-width:</b> <b class="t02">1px;</b>
  <b class="t01">border-right-color:</b> <b class="t02">#222;</b>
  <b class="t01">margin:</b> <b class="t02">10px;</b>
  <b class="t01">margin-top:</b> <b class="t02">0;</b>
}
      </pre>
    </SwitchBox>

    <SwitchBox title="ネスト(media query)">
      <pre>// scss

<CopyCode>div {
  <b class="t02">color: #aaa;</b>
  <b class="t01">@media all and (orientation:landscape) {</b>
    <b class="t02">color: #bbb;</b>
  <b class="t01">}</b>
}
</CopyCode>

---

// css

div {
  <b class="t02">color: #aaa;</b>
}
<b class="t01">@media all and (orientation: landscape) {</b>
  div {
  <b class="t02">color: #bbb;</b>
  }
<b class="t01">}</b>
      </pre>
    </SwitchBox>

    <SwitchBox title="変数(データ型)">
      <pre>// scss

<CopyCode><b class="t01">$string_1:</b> ".foo"<b class="t01">;</b> <b class="t02">// .(ドット)など記号で始まる場合、引用符が必要</b>
<b class="t01">$string_2:</b> color<b class="t01">;</b>
<b class="t01">$number_1:</b> 1<b class="t01">;</b>
<b class="t01">$number_2:</b> 1px<b class="t01">;</b> <b class="t02">// cssで有効な単位は数値扱い</b>
<b class="t01">$color_1:</b> rgba(17,34,51,1.0)<b class="t01">;</b> <b class="t02">// アルファが1.0だと16進数6桁表記に変換される</b>
<b class="t01">$color_2:</b> #123<b class="t01">;</b> <b class="t02">// 6桁表記に変換される</b>
<b class="t01">$boolean:</b> true<b class="t01">;</b>
<b class="t01">$null:</b> null<b class="t01">;</b>
<b class="t01">$list:</b> 0 0 no-repeat<b class="t01">;</b> <b class="t02">// カンマ区切りも有効</b>
<b class="t01">$map: (</b>
  img_c<b class="t01">:</b> "/img/common/"<b class="t01">,</b>
  img_s<b class="t01">:</b> "/img/sprite/"<b class="t01">,</b>
  img_f<b class="t01">:</b> "/img/figure/"
<b class="t01">);</b>
<b class="t02">// グローバルスコープ = どこでも有効</b>
<b class="t02">// セレクタ内で宣言した変数はそのセレクタ内でのみ有効(ローカルスコープ)</b>
<b class="t02">// グローバルとローカルで同じ変数名の場合はローカル優先</b>
<b class="t02">// listの値にlistやmapを入れたり、mapの値にlistやmapを入れることができる</b>
<b class="t02">// mapのキーと値はeach文で変数2つとして使うことができる</b>
<b class="t02">// 使えない変数名: 数字から始まる,@などの記号,--(ハイフン2個)から始まる</b>

<b class="t03">#{<b class="t01">$string_1</b>}</b> {

  line-height: <b class="t01">$number_1</b>;
  box-shadow: 0 <b class="t01">$number_2</b> 1px <b class="t01">$color_1</b>;
  <b class="t03">#{<b class="t01">$string_2</b>}</b>: <b class="t01">$color_2</b>;
  background-<b class="t03">#{<b class="t01">$string_2</b>}</b>: #000;

  @if <b class="t01">$boolean</b> == true {
    @if <b class="t01">$null</b> == null {
      background: url(<b class="t03">#{<b class="t01">map-get($map,img_c)</b>}</b>bg.png) <b class="t01">$list</b>;
    }
  }
  opacity: <b class="t01">$null</b>; <b class="t02">// 値にnullが入るとプロパティ名も出力しない</b>
}
<b class="t02">// #{} = インターポレーション = 文字との連結やプロパティやセレクタのとき必要</b>
</CopyCode>

---

// css

<b class="t01">.foo</b> {
  line-height: <b class="t01">1</b>;
  box-shadow: 0 <b class="t01">1px</b> 1px <b class="t01">#112233</b>;
  <b class="t01">color</b>: <b class="t01">#112233</b>;
  background-<b class="t01">color</b>: #000;
  background: url(<b class="t01">/img/common/</b>bg.png) <b class="t01">0 0 no-repeat</b>;
}
      </pre>
    </SwitchBox>

    <SwitchBox title="演算(数値)">
      <pre>// scss

<CopyCode>div {
  margin: <b class="t01">10px + 5</b>;
  margin: <b class="t01">10px - 5</b>;
  margin: <b class="t01">10px * 5</b>;
  margin: <b class="t01">(10px / 5)</b>; <b class="t02">// 割算のスラッシュはフォント一括指定と区別するため括弧が必要</b>
  margin: <b class="t01">10px % 5</b>;

  color: <b class="t01">#111 + #aaa</b>;
  color: <b class="t01">#aaa + #aaa</b>; <b class="t02">// 範囲を超えたら自動調整</b>
  color: <b class="t01">(#999 / 3)</b>;
  color: <b class="t01">rgba(0, 50, 255, 0.5) + rgba(100, 50, 255, 0.5)</b>; <b class="t02">// 255以上は自動調整,アルファは演算不可</b>

  $size: 20px;
  font: <b class="t01">$size</b> <b class="t01">/ 2</b>; <b class="t02">// 変数の時は割算でも括弧が要らない</b>
  font: <b class="t03">#{<b class="t01">$size</b>}</b> <b class="t01">/ 2</b>; <b class="t02">// フォント一括指定にしたいときはインターポレーション</b>
}
</CopyCode>

---

// css

div {
  margin: <b class="t01">15px</b>;
  margin: <b class="t01">5px</b>;
  margin: <b class="t01">50px</b>;
  margin: <b class="t01">2px</b>;
  margin: <b class="t01">0px</b>;
  color: <b class="t01">#bbbbbb</b>;
  color: <b class="t01">white</b>;
  color: <b class="t01">#333333</b>;
  color: <b class="t01">rgba(100, 100, 255, 0.5)</b>;
  font: <b class="t01">10px</b>;
  font: <b class="t01">20px / 2</b>;
}
      </pre>
    </SwitchBox>

    <SwitchBox title="演算(文字列)">
      <pre>// scss

<CopyCode>div:before {
  content : <b class="t01">foo + bar</b>;
  content : <b class="t01">"foo" + bar</b>;
  content : <b class="t01">foo + "bar"</b>;
  content : <b class="t01">"foo" + "bar"</b>;
  <b class="t02">// 先頭の引用符の有無が反映される</b>

  <b class="t01">$root</b> : "../";
  <b class="t01">$kind</b> : "img/";
  <b class="t01">$file</b> : "bg";
  background: url("<b class="t03">#{<b class="t01">$root + $kind + $file</b>}</b>.png") 0 0 no-repeat;
}
</CopyCode>

---

// css

div:before {
  content: <b class="t01">foobar</b>;
  content: <b class="t01">"foobar"</b>;
  content: <b class="t01">foobar</b>;
  content: <b class="t01">"foobar"</b>;
  background: url("<b class="t01">../img/bg.png</b>") 0 0 no-repeat;
}

      </pre>
    </SwitchBox>

    <SwitchBox title="条件分岐(@if)">
      <pre>// scss

<CopyCode><b class="t03">$foo</b> : 1;

.bar {
  <b class="t01">@if</b> <b class="t03">$foo</b> <b class="t01">{</b> <b class="t02">/* falseかnull以外の値が存在するとき */</b>
    color: #111;
  <b class="t01">} @else {</b> <b class="t02">/* 値がfalseかnullのとき */</b>
    color: #222;
  <b class="t01">}</b>
}
<b class="t02">// .bar { color: if($foo == 1, #111, #222); } も同義</b>

.baz {
  <b class="t01">@if</b> <b class="t03">$foo == 0</b> <b class="t01">{</b> <b class="t02">/* 値が0のとき */</b>
    color: #333;
  <b class="t01">} @else if</b> <b class="t03">$foo == 1</b> <b class="t01">{</b> <b class="t02">/* 値が1のとき */</b>
    color: #444;
  <b class="t01">} @else {</b> <b class="t02">/* 0か1以外の値が存在するとき */</b>
    color: #555;
  <b class="t01">}</b>
}
<b class="t02">// .baz { color: if($foo == 0, #333, if($foo == 1, #444, #555)); } も同義</b>
</CopyCode>

---

// css

.bar {
  <b class="t02">/* falseかnull以外の値が存在するとき */</b>
  color: #111;
}
.baz {
  <b class="t02">/* 値が1のとき */</b>
  color: #444;
}


<b class="t02">// 値が存在しない場合はコンパイルエラー</b>
<b class="t02">// 他の演算子は !=, &gt;, &lt;, &gt;=, &lt;=, and, or, not</b>
      </pre>
    </SwitchBox>

    <SwitchBox title="ループ(@for)">
      <pre>// scss

<CopyCode><b class="t01">@for</b> <b class="t03">$num</b> <b class="t01">from</b> 1 <b class="t01">through</b> 3 <b class="t01">{</b>
  .icon_A_<b class="t03">#{$num}</b> {
    background: url(/img/icon_A_<b class="t03">#{$num}</b>.png) 0 ((<b class="t03">$num</b> - 1)*100px) no-repeat;
  }
<b class="t01">}</b>

<b class="t01">@for</b> <b class="t03">$num</b> <b class="t01">from</b> 1 <b class="t01">to</b> 3 <b class="t01">{</b>
  .icon_B_<b class="t03">#{$num}</b> {
    background: url(/img/icon_B_<b class="t03">#{$num}</b>.png) 0 ((<b class="t03">$num</b> - 1)*100px) no-repeat;
  }
<b class="t01">}</b>
</CopyCode>

---

// css

.icon_A_<b class="t01">1</b> {
  background: url(/img/icon_A_<b class="t01">1</b>.png) 0 <b class="t01">0px</b> no-repeat;
}
.icon_A_<b class="t01">2</b> {
  background: url(/img/icon_A_<b class="t01">2</b>.png) 0 <b class="t01">100px</b> no-repeat;
}
.icon_A_<b class="t01">3</b> {
  background: url(/img/icon_A_<b class="t01">3</b>.png) 0 <b class="t01">200px</b> no-repeat;
}

.icon_B_<b class="t01">1</b> {
  background: url(/img/icon_B_<b class="t01">1</b>.png) 0 <b class="t01">0px</b> no-repeat;
}
.icon_B_<b class="t01">2</b> {
  background: url(/img/icon_B_<b class="t01">2</b>.png) 0 <b class="t01">100px</b> no-repeat;
}
      </pre>
    </SwitchBox>

    <SwitchBox title="ループ(@while)">
      <pre>// scss

<CopyCode><b class="t03">$num</b>: 5;
<b class="t01">@while</b> <b class="t03">$num &gt; 0</b> <b class="t01">{</b>
  .icon_<b class="t03">#{$num}</b> {
    background: url(/img/icon_<b class="t03">#{$num}</b>.png) 0 ((<b class="t03">$num</b> - 1)*100px) no-repeat;
  }
  <b class="t03">$num</b>: <b class="t03">$num</b> - 1;
<b class="t01">}</b>
</CopyCode>

---

// css

.icon_<b class="t01">5</b> {
  background: url(/img/icon_<b class="t01">5</b>.png) 0 <b class="t01">400px</b> no-repeat;
}
.icon_<b class="t01">4</b> {
  background: url(/img/icon_<b class="t01">4</b>.png) 0 <b class="t01">300px</b> no-repeat;
}
.icon_<b class="t01">3</b> {
  background: url(/img/icon_<b class="t01">3</b>.png) 0 <b class="t01">200px</b> no-repeat;
}
.icon_<b class="t01">2</b> {
  background: url(/img/icon_<b class="t01">2</b>.png) 0 <b class="t01">100px</b> no-repeat;
}
.icon_<b class="t01">1</b> {
  background: url(/img/icon_<b class="t01">1</b>.png) 0 <b class="t01">0px</b> no-repeat;
}
      </pre>
    </SwitchBox>

    <SwitchBox title="ループ(@each)">
      <pre>// scss

<CopyCode><b class="t02">// each文の中に値を適用</b>
.foo {
  <b class="t01">@each</b> <b class="t03">$prefix</b> <b class="t01">in</b> -webkit- -moz- -ms- -o- null <b class="t01">{</b>
    <b class="t03">#{$prefix}</b>border-radius: 10px;
  <b class="t01">}</b>
}

<b class="t02">// リストにしてからeach文に適用</b>
<b class="t03">$vendor:</b> -webkit- -moz- -ms- -o- null<b class="t03">;</b>
.bar {
  <b class="t01">@each</b> <b class="t03">$prefix</b> <b class="t01">in</b> <b class="t03">$vendor</b> <b class="t01">{</b>
    <b class="t03">#{$prefix}</b>border-radius: 20px;
  <b class="t01">}</b>
}

<b class="t02">// マップにしてからeach文に適用</b>
<b class="t03">$vendor_prefix: (</b>
  webkit<b class="t03">:</b> -webkit-<b class="t03">,</b>
  mozilla<b class="t03">:</b> -moz-<b class="t03">,</b>
  ie<b class="t03">:</b> -ms-<b class="t03">,</b>
  opera<b class="t03">:</b> -o-<b class="t03">,</b>
  none<b class="t03">:</b> null
<b class="t03">);</b>
.baz {
  <b class="t01">@each</b> <b class="t03">$vendor</b><b class="t01">,</b> <b class="t03">$prefix</b> <b class="t01">in</b> <b class="t03">$vendor_prefix</b> <b class="t01">{</b>
    <b class="t03">#{$prefix}</b>border-radius: 30px; <b class="t02">/* <b class="t03">#{$vendor}</b> */</b>
  <b class="t01">}</b>
}
</CopyCode>

---

// css

.foo {
  <b class="t01">-webkit-</b>border-radius: 10px;
  <b class="t01">-moz-</b>border-radius: 10px;
  <b class="t01">-ms-</b>border-radius: 10px;
  <b class="t01">-o-</b>border-radius: 10px;
  border-radius: 10px;
}

.bar {
  <b class="t01">-webkit-</b>border-radius: 20px;
  <b class="t01">-moz-</b>border-radius: 20px;
  <b class="t01">-ms-</b>border-radius: 20px;
  <b class="t01">-o-</b>border-radius: 20px;
  border-radius: 20px;
}

.baz {
  <b class="t01">-webkit-</b>border-radius: 30px;
  <b class="t02">/* <b class="t01">webkit</b> */</b>
  <b class="t01">-moz-</b>border-radius: 30px;
  <b class="t02">/* <b class="t01">mozilla</b> */</b>
  <b class="t01">-ms-</b>border-radius: 30px;
  <b class="t02">/* <b class="t01">ie</b> */</b>
  <b class="t01">-o-</b>border-radius: 30px;
  <b class="t02">/* <b class="t01">opera</b> */</b>
  border-radius: 30px;
  <b class="t02">/* <b class="t01">none</b> */</b>
}
      </pre>
    </SwitchBox>

    <SwitchBox title="@use">
      <pre>// sass template

{project}
│
├ css
│　└ {project}.css
└ sass
　　├ {project}.scss
　　│
　　├ _conf.scss
　　│
　　└ parts
　　　 ├ lib
　　　 │ ├ _reset.scss
　　　 │ └ _utility.scss
　　　 ├ _base.scss
　　　 ├ _layout.scss
　　　 └ _module.scss



// {project}.scss

<b class="t01">@use "</b>conf<b class="t01">";</b>
<b class="t01">@use "</b>parts/lib/reset<b class="t01">";</b>
<b class="t01">@use "</b>parts/lib/utility<b class="t01">";</b>
<b class="t01">@use "</b>parts/base<b class="t01">";</b>
<b class="t01">@use "</b>parts/layout<b class="t01">";</b>
<b class="t01">@use "</b>parts/module<b class="t01">";</b>


<b class="t02">// {project}.scss の中にlib,mod内のscssファイルの内容を読み込む
// 名前がアンダーバーで始まるパーシャルファイルは、sassフォルダごとコンパイルしても個別に出力しない
// @use文の値で、パーシャルファイルの最初のアンダーバーと拡張子は省略可能</b>
      </pre>
    </SwitchBox>

    <SwitchBox title="!default">
      <pre>
<CopyCode>.foo {

  <b class="t02">// A</b>
  <b class="t01">$body_font_size</b>: <b class="t01">12px</b>;
  <b class="t01">$body_line_height</b>: <b class="t01">1em</b>;

  <b class="t02">// B</b>
  body {
    font-size: $body_font_size; <b class="t02">// 12px</b>
    line-height: $body_line_height; <b class="t02">// 1em</b>
  }
}
</CopyCode>

<b class="t02">// Aが別ファイルのパーシャルなどからimportしたものの場合、上記のコードならBは問題無くcssに反映される
// しかし、Aのパーシャル内で仮に変更があった下記のような場合、</b>

<CopyCode>.foo {

  <b class="t02">// A'</b>
  <b class="t01">$body_font_size</b>: <b class="t03">14px</b>; <b class="t02">// 値が更新されていた</b>
  <b class="t01"><b class="t03">$text</b>_line_height</b>: <b class="t03">1.5em</b>; <b class="t02">// 変数名と値が更新されていた</b>

  <b class="t02">// B</b>
  body {
    font-size: $body_font_size; <b class="t02">// 14px</b>
    line-height: $body_line_height; <b class="t02">// コンパイルエラー</b>
  }
}
</CopyCode>

<b class="t02">// Bの $body_font_size には問題なくA'の値が適用されるが、$body_line_height は定義されていないのでエラーになる
// そこで、下記のようにBで!defaultを指定しておくことにより、</b>


<CopyCode>.foo {

  <b class="t02">// A'</b>
  <b class="t01">$body_font_size</b>: <b class="t03">14px</b>; <b class="t02">// 値が更新されていた</b>
  <b class="t01"><b class="t03">$text</b>_line_height</b>: <b class="t03">1.5em</b>; <b class="t02">// 変数名と値が更新されていた</b>

  <b class="t02">// B</b>
  $body_font_size: 12px <b class="t01">!default</b>;
  $body_line_height: 1em <b class="t01">!default</b>;
  body {
    font-size: $body_font_size; <b class="t02">// 14px</b>
    line-height: $body_line_height; <b class="t02">// 1em</b>
  }
}
</CopyCode>

<b class="t02">// A'の変数宣言はBにとって問題が無く、値が更新された $body_font_size には A'の値が適用され、A'の変数宣言に問題がある $body_line_height には !default の値が適用される</b>
      </pre>
    </SwitchBox>

    <SwitchBox title="@mixin">
      <pre>// scss

<CopyCode><b class="t01">@mixin baz {</b>
  margin: 0;
  padding: 10px;
<b class="t01">}</b>

.foo {
  <b class="t01">@include baz;</b>
  color: #000;
}

.bar {
  <b class="t01">@include baz;</b>
  color: #f00;
}
</CopyCode>

---

// css

.foo {
  <b class="t03">margin: 0;</b>
  <b class="t03">padding: 10px;</b>
  color: #000;
}

.bar {
  <b class="t03">margin: 0;</b>
  <b class="t03">padding: 10px;</b>
  color: #f00;
}

<b class="t02">// includeした場所にmixinの内容を読み込む</b>
<b class="t02">// includeした場所よりmixinの表記場所が下にあるとコンパイルエラー</b>
<b class="t02">// mixinの中でincludeすることも可</b>
<b class="t02">// mixinの中でincludeする場合は互いのmixinの表記順にルールは無い</b>
<b class="t02">// 使えないmixin名: 数字から始まる,@などの記号,--(ハイフン2個)から始まる</b>
      </pre>
    </SwitchBox>

    <SwitchBox title="@mixin(引数)">
      <pre>// scss

<CopyCode><b class="t01">@mixin baz($value: 10px) {</b>  <b class="t02">// : 10px = 初期値</b>
  margin: 0;
  padding: <b class="t01">$value</b>;
<b class="t01">}</b>

.foo {
  <b class="t01">@include baz;</b>
  color: #000;
}

.bar{
  <b class="t01">@include baz(20px);</b>
  color: #f00;
}
</CopyCode>

---

// css

.foo {
  <b class="t03">margin: 0;</b>
  <b class="t03">padding: 10px;</b>  <b class="t02">// 引数を指定しなければ初期値が反映される</b>
  color: #000;
}

.bar {
  <b class="t03">margin: 0;</b>
  <b class="t03">padding: 20px;</b>
  color: #f00;
}

<b class="t02">// 初期値は未設定でも可 @mixin baz($value) { 〜 }</b>
<b class="t02">// 初期値が未設定の時、includeで引数を設定しなければエラー</b>
<b class="t02">// 引数の複数設定可 @mixin baz($value1: 10px, $value2: 20px, 〜 ) { 〜 }</b>
      </pre>
    </SwitchBox>

    <SwitchBox title="@mixin(可変長引数)">
      <pre>
<CopyCode>@mixin foo1($value) {
  text-shadow: $value;
}

.bar1 {
  @include foo1(1px 1px 0 #555, -1px -1px 0 #eee); <b class="t02">// 1つの引数に2つの値を渡しているのでエラー</b>
  @include foo1(<b class="t03">(</b>1px 1px 0 #555, -1px -1px 0 #eee<b class="t03">)</b>); <b class="t02">// valid</b>
  @include foo1(<b class="t03">unquote("</b>1px 1px 0 #555, -1px -1px 0 #eee<b class="t03">")</b>); <b class="t02">// valid</b>
}


@mixin foo2(<b class="t01">$value...</b>) { <b class="t02">// 引数の数を限定しない</b>
  text-shadow: $value;
}

.bar2 {
  @include foo2(1px 1px 0 #555, -1px -1px 0 #eee); <b class="t02">// valid</b>
}
</CopyCode>


---


<CopyCode>@mixin foo($t, $r, $b, $l) {
  padding-top: $t;
  padding-right: $r;
  padding-bottom: $b;
  padding-left: $l;
}

.bar {
  $value: 10px, 20px, 30px, 40px;

  @include foo($value); <b class="t02">// $t に4つの値を渡し、$r,$b,$l に値が入らないのでエラー</b>
  @include foo(<b class="t01">$value...</b>); <b class="t02">// valid</b>
}
</CopyCode>
      </pre>
    </SwitchBox>

    <SwitchBox title="@mixin(@content)">
      <pre>// scss

<CopyCode><b class="t01">@mixin media($value) {</b>

  @if $value == pc {
    @media(min-width:769px){
      <b class="t01">@content;</b>
    }
  }
  @if $value == tablet {
    @media(max-width:768px) and (min-width: 321px){
      <b class="t01">@content;</b>
    }
  }
  @if $value == sp {
    @media(max-width:320px){
      <b class="t01">@content;</b>
    }
  }
<b class="t01">}</b>

#header {

  background: #edf;
  color: #222;

  <b class="t01">@include media(pc) {</b>
    height: 100px;
    font-size: 18px;
  <b class="t01">}</b>
  <b class="t01">@include media(tablet) {</b>
    height: 60px;
    font-size: 16px;
  <b class="t01">}</b>
  <b class="t01">@include media(sp) {</b>
    height: 30px;
    font-size: 12px;
  <b class="t01">}</b>
}
</CopyCode>

---

// css

#header {
  background: #edf;
  color: #222;
}
<b class="t03">@media (min-width: 769px) {</b>
  #header {
  <b class="t03">height: 100px;
  font-size: 18px;</b>
  }
<b class="t03">}</b>
<b class="t03">@media (max-width: 768px) and (min-width: 321px) {</b>
  #header {
  <b class="t03">height: 60px;
  font-size: 16px;</b>
  }
<b class="t03">}</b>
<b class="t03">@media (max-width: 320px) {</b>
  #header {
  <b class="t03">height: 30px;
  font-size: 12px;</b>
  }
<b class="t03">}</b>

<b class="t02">// includeした場所にmixinの内容を読み込み、contentした場所にはincludeの{}の内容が入る</b>
<b class="t02">// 上記はレスポンシブのmediaquery表記を簡素化するためmixinに纏めた例</b>
      </pre>
    </SwitchBox>

    <SwitchBox title="@extend">
      <pre>// scss

<CopyCode>.baz {
  margin: 0;
  padding: 10px;
}

.foo {
  <b class="t01">@extend</b> .baz;
  color: #000;
}

.bar {
  <b class="t01">@extend</b> .baz;
  color: #f00;
}
</CopyCode>

---

// css

.baz<b class="t03">, .foo, .bar</b> {
  margin: 0;
  padding: 10px;
}

.foo {
  color: #000;
}

.bar {
  color: #f00;
}

<b class="t02">// extendした場所のセレクタ(.fooと.bar)が、指定したセレクタ(.baz)の後に追記される</b>
<b class="t02">// mixinと違い、指定したセレクタの場所が上になければエラー、というルールは無い</b>
<b class="t02">// 指定したセレクタが無い場合はエラーになるが、@extend .baz !optional; とすれば回避する</b>
<b class="t02">// @mediaの中から、外にあるセレクタはextendできない</b>
      </pre>
    </SwitchBox>

    <SwitchBox title="@extend(placeholder selector)">
      <pre>// scss

<CopyCode><b class="t01">%</b>baz {
  margin: 0;
  padding: 10px;
}

.foo {
  <b class="t01">@extend %</b>baz;
  color: #000;
}

.bar {
  <b class="t01">@extend %</b>baz;
  color: #f00;
}
</CopyCode>

---

// css

<b class="t03">.foo, .bar</b> {
  margin: 0;
  padding: 10px;
}

.foo {
  color: #000;
}

.bar {
  color: #f00;
}

<b class="t02">// extendした場所のセレクタ(.fooと.bar)が、指定したセレクタ(%baz)に代わって表記される</b>
<b class="t02">// mixinと違い、指定したセレクタの場所がextendした場所より上になければエラーというルールは無い</b>
<b class="t02">// 指定したセレクタが無い場合はエラーになるが、@extend %baz !optional; とすれば回避する</b>
<b class="t02">// @mediaの中から、外にあるプレースホルダセレクタはextendできない</b>
      </pre>
    </SwitchBox>

    <SwitchBox title="@at-root">
      <pre>// sass

<CopyCode>.foo_1 {
  <b class="t02">content: "1";</b>

  .foo_2a {
    <b class="t02">content: "2a";</b>
  }
  <b class="t01">@at-root</b> .foo_2b { <b class="t02">/* セレクタの前に付けることで親(.foo_1)の外に出す */</b>
    <b class="t02">content: "2b";</b>
  }
}

.bar_1 {
  <b class="t02">content: "1";</b>

  <b class="t01">@at-root {</b> <b class="t02">/* 複数のセレクタを親(.bar_1)の外に出す */</b>
    .bar_2 {
      <b class="t02">content: "2";</b>
    }
    .bar_3 {
      <b class="t02">content: "3";</b>
    }
  <b class="t01">}</b>
}

@media all and (orientation:landscape) {
  .baz_1 {
    <b class="t02">content: "1";</b>

    <b class="t01">@at-root</b> .baz_2a { <b class="t02">/* @mediaの外に出ない */</b>
      <b class="t02">content: "2a";</b>
    }
    <b class="t01">@at-root (without: media)</b> {
      .baz_2b { <b class="t02">/* @mediaの外に出る */</b>
        <b class="t02">content: "2b";</b>
      }
    }
    <b class="t01">@at-root (without: media rule)</b> {
      .baz_2c { <b class="t02">/* @mediaの外に出て親(.baz_1)からも出る */</b>
        <b class="t02">content: "2c";</b>
      }
    }
    <b class="t01">@at-root (with: media)</b> {
      .baz_2d { <b class="t02">/* @mediaの外に同じ@mediaを作り、親(.baz_1)からは出る */</b>
        <b class="t02">content: "2d";</b>
      }
    }
  }
}
</CopyCode>

---

// css


.foo_1 {
  <b class="t02">content: "1";</b>
}
.foo_1 .foo_2a {
  <b class="t02">content: "2a";</b>
}
<b class="t03">.foo_2b {</b>
  <b class="t02">/* セレクタの前に付けることで親(.foo_1)の外に出す */</b>
  <b class="t02">content: "2b";</b>
<b class="t03">}</b>


.bar_1 {
  <b class="t02">content: "1";</b>
}
<b class="t02">/* 複数のセレクタを親(.bar_1)の外に出す */</b>
<b class="t03">.bar_2 {</b>
  <b class="t02">content: "2";</b>
<b class="t03">}</b>
<b class="t03">.bar_3 {</b>
  <b class="t02">content: "3";</b>
<b class="t03">}</b>


@media all and (orientation: landscape) {
  .baz_1 {
  <b class="t02">content: "1";</b>
  }
  .baz_2a {
  <b class="t02">/* @mediaの外に出ない */</b>
  <b class="t02">content: "2a";</b>
  }
}
.baz_1 <b class="t03">.baz_2b {</b>
  <b class="t02">/* @mediaの外に出る */</b>
  <b class="t02">content: "2b";</b>
<b class="t03">}</b>
<b class="t03">.baz_2c {</b>
  <b class="t02">/* @mediaの外に出て親(.baz_1)からも出る */</b>
  <b class="t02">content: "2c";</b>
<b class="t03">}</b>
@media all and (orientation: landscape) {
  <b class="t03">.baz_2d {</b>
  <b class="t02">/* @mediaの外に同じ@mediaを作り、親(.baz_1)からは出る */</b>
  <b class="t02">content: "2d";</b>
  <b class="t03">}</b>
}
      </pre>
    </SwitchBox>

    <SwitchBox title="関数">
      <pre>// scss

<CopyCode>$path: (
  img_c: "/img/common/",
  img_s: "/img/sprite/",
  img_f: "/img/figure/"
);

div {
  background-image: url(#{<b class="t01">map-get(</b>$path<b class="t01">,</b>img_c<b class="t01">)</b>}bg.png);
}
<b class="t02">// map-get($map, $key) -&gt; マップのキーから値を返す関数</b>
<b class="t02">// 関数一覧 -&gt; http://sass-lang.com/documentation/Sass/Script/Functions.html</b>
</CopyCode>

---

// css

div {
  background-image: url(<b class="t01">/img/common/</b>bg.png);
}
      </pre>
    </SwitchBox>

    <SwitchBox title="@function">
      <pre>// scss

<CopyCode><b class="t01">@function</b> function_name<b class="t01">(</b>$value<b class="t01">) {</b>  <b class="t02">// 自作関数</b>
  <b class="t01">@return</b> $value * 100<b class="t01">;</b>
<b class="t01">}</b>

div {
  content: function_name(1px);
}
</CopyCode>

---

// css

div {
  content: <b class="t01">100px</b>;
}
      </pre>
    </SwitchBox>

    <SwitchBox title="@debug">
      <pre>// scss

<CopyCode>@function double($value) {
  <b class="t01">@debug</b> $value;
  $value: $value * 2;
  <b class="t01">@debug</b> $value;
  @return $value;
}

.foo {
  content: double(10px);
}
</CopyCode>

---

// css

.foo {
  content: 20px;
}

---

// console

sass/filename.scss<b class="t01">:2 DEBUG: 10px</b>
sass/filename.scss<b class="t01">:4 DEBUG: 20px</b>
      </pre>
    </SwitchBox>

    <SwitchBox title="@warn">
      <pre>// scss

<CopyCode>@function double($value) {
  @if type-of($value) == number { <b class="t02">// type-of() -&gt; 値のタイプを返す関数</b>
    @return $value * 2;
  } @else {
    <b class="t01">@warn "</b><b class="t03">引数には数値を入れてください</b><b class="t01">"</b>;
    @return null;
  }
}

.foo {
  content: double(null);
}
</CopyCode>

---

// css

---

// console

<b class="t01">WARNING: <b class="t03">引数には数値を入れてください</b></b>
     <b class="t01">on line 5 of</b> sass/filename.scss
      </pre>
    </SwitchBox>

    <SwitchBox title="///">
      <pre>

<CopyCode>

</CopyCode>

      </pre>
    </SwitchBox>

    <SwitchBox title="old(ruby-sass)">
      <pre>
<b class="t01">ruby -v</b>  <b class="t02">// Rubyバージョン確認</b>
<b class="t01">gem -v</b>  <b class="t02">// RubyGemsバージョン確認</b>
<b class="t01">sass -v</b>  <b class="t02">// sassバージョン確認</b>

<b class="t01">sudo gem install sass</b>  <b class="t02">// sassインストール</b>
<b class="t01">sudo gem install sass -v</b> [version]  <b class="t02">// バージョン指定インストール</b>
<b class="t02">// sudo gem install sass -v 3.2.17</b>
<b class="t01">sudo gem install sass --pre</b>  <b class="t02">// アルファ版インストール</b>

<b class="t01">sudo gem install oily_png</b>  <b class="t02">// スプライト画像生成の高速化</b>

<b class="t01">sudo gem update --system</b>  <b class="t02">// RubyGemsアップデート</b>
<b class="t01">sudo gem update sass</b>  <b class="t02">// sassアップデート</b>

<b class="t01">sudo gem uninstall sass</b>  <b class="t02">// sassアンインストール</b>

<b class="t01">sass -?</b>  <b class="t02">// ヘルプ表示</b>

<b class="t01">http://sass-lang.com/documentation/file.SASS_REFERENCE.html</b>  <b class="t02">// Reference</b>
<b class="t01">http://sass-lang.com/documentation/file.SASS_CHANGELOG.html</b>  <b class="t02">// Changelog</b>

---

// compile

scssが以下のとき
<CopyCode><b class="t02">/*
 * comment A
 */

/*!
 * comment B
 */

// comment C

body {
  margin: 0;
  padding: 0;
  div {
    display: block;
  }
}</b>
</CopyCode>

<b class="t01">sass</b> [scss path]<b class="t01">:</b>[css path]
<b class="t01">sass</b> [scss path]<b class="t01">:</b>[css path] <b class="t01">-t nested</b>
<b class="t02">/*
 * comment A
 */
/*!
 * comment B
 */
body {
  margin: 0;
  padding: 0; }
  body div {
  display: block; }</b>

<b class="t01">sass</b> [scss path]<b class="t01">:</b>[css path] <b class="t01">-t expanded</b>
<b class="t02">/*
 * comment A
 */
/*!
 * comment B
 */
body {
  margin: 0;
  padding: 0;
}
body div {
  display: block;
}</b>

<b class="t01">sass</b> [scss path]<b class="t01">:</b>[css path] <b class="t01">-t compact</b>
<b class="t02">/* comment A */
/*!
 * comment B
 */
body { margin: 0; padding: 0; }
body div { display: block; }</b>

<b class="t01">sass</b> [scss path]<b class="t01">:</b>[css path] <b class="t01">-t compressed</b>
<b class="t02">/*!
 * comment B
 */body{margin:0;padding:0}body div{display:block}</b>



---

監視コンパイル

<b class="t01">sass -w</b> [scss path]<b class="t01">:</b>[css path]
<b class="t01">sass -w</b> [scss dir]<b class="t01">:</b>[css dir]  <b class="t02">// フォルダ指定</b>
<b class="t01">sass -w --line-comments</b> [scss dir]<b class="t01">:</b>[css dir]  <b class="t02">// line comment付き</b>
<b class="t01">sass -w --no-cache</b> [scss dir]<b class="t01">:</b>[css dir]  <b class="t02">// キャッシュフォルダを作らない</b>
<b class="t01">sass -w</b> [scss dir]<b class="t01">:</b>[css dir] <b class="t01">--load-path</b> [other project dir]  <b class="t02">// 別プロジェクトからライブラリ等をimport</b>

---

cssからscssにコンパイル

<b class="t01">sass-convert --to scss</b> [css path] [scss path]
<b class="t01">sass-convert --recursive --from css --to scss</b> [dir] [dir]<b class="t02">// フォルダごと</b>
      </pre>
    </SwitchBox>

    <SwitchBox title="old(gulp-sass)">
      <pre>
// npm command

<b class="t01">npm install gulp-sass --save-dev</b> <b class="t02">// install</b>
<b class="t01">npm uninstall gulp-sass --save-dev</b> <b class="t02">// uninstall</b>
<b class="t01">npm install gulp-sass@</b>x.x.x<b class="t01"> --save-dev</b> <b class="t02">// specified version install</b>
<b class="t01">npm info gulp-sass</b> <b class="t02">// check version</b>


// gulpfile.js

<CopyCode><b class="t01">var sass = require('gulp-sass');

gulp.task('sass', function(){
  gulp.src('</b>scssのパス<b class="t01">')
    .pipe(sass())
    .pipe(gulp.dest('</b>出力するcssのパス<b class="t01">'));
});

gulp.task('default', ['sass']);</b>
</CopyCode>
      </pre>
    </SwitchBox>

    <SwitchBox title="old (node-sass)">
      <pre><b class="t01">npm install node-sass --save-dev</b> <b class="t02">// install</b>

<b class="t01">node-sass -o {</b>css folder<b class="t01">} {</b>sass folder<b class="t01">}</b> <b class="t02">// compile</b>
      </pre>
    </SwitchBox>
  </PreCodes>
</template>
