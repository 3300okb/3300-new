<script lang="ts">
export const metadata = {
  updateDate: '2021/03/15',
}
</script>

<script setup lang="ts">
import SwitchBox from '@/components/SwitchBox.vue'
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader title="js" :update-date="metadata.updateDate" />

  <PreCodes>
    <SwitchBox title="script設定">
      <pre><b class="t01">&lt;meta http-equiv="Content-Script-Type" content="text/javascript"&gt;</b>

<b class="t02">// HTML5ならデフォルトのContent-Script-TypeがJavaScriptなので省略可</b></pre>
    </SwitchBox>

    <SwitchBox title="内部script">
      <pre>// 書式


<b class="t01">&lt;script type="text/javascript"&gt;</b>  <b class="t02">// HTML5ならtypeは省略可</b>

  処理;

/*
複数行
コメント
*/

// 一行コメント
<b class="t01">&lt;/script&gt;</b>


---


// 最小のHTML5


<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script&gt;

&lt;/script&gt;
</CopyCode>


---


// JavaScript未対応ブラウザ対策


<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script&gt;
<b class="t01">&lt;!--</b>
処理;
<b class="t01">// --&gt;</b>
&lt;/script&gt;
<b class="t02">// scriptを表示してしまうのを防ぐためコメントアウト</b>
<b class="t02">// 閉じコメントアウトの//はNetscape用</b>
<b class="t01">&lt;noscript&gt;</b>
JavaScript対応ブラウザで表示してください。
<b class="t01">&lt;/noscript&gt;</b>
</CopyCode></pre>
    </SwitchBox>

    <SwitchBox title="外部script">
      <pre><b class="t01">&lt;script src="</b>読み込むファイルのパス<b class='t01'>"&gt;&lt;/script&gt;</b>
<b class="t01">&lt;script src="</b>読み込むファイルのパス<b class='t01'>" async&gt;&lt;/script&gt;</b> <b class="t02">// async load, immediately run</b>
<b class="t01">&lt;script src="</b>読み込むファイルのパス<b class='t01'>" defer&gt;&lt;/script&gt;</b> <b class="t02">// async load, run after analysis HTML</b>
</pre>
    </SwitchBox>

    <SwitchBox title="変数">
      <pre>
<CopyCode><b class="t01">var</b> foo = 42;
console.log(foo);  <b class="t02">// 42</b>

var bar = 84<b class="t01">,</b> baz = 126;  <b class="t02">// まとめて定義可能</b>
console.log(bar);  <b class="t02">// 84</b>
console.log(baz);  <b class="t02">// 126</b>
</CopyCode>

<b class="t02">// 変数名には半角英数字とアンダースコアとドルが利用可能</b>
<b class="t02">// 変数名の先頭は数字NG</b>

<b class="t02">// 予約語は利用不可</b>
<b class="t02">// abstract, boolean, break, byte, case, catch, char, class, comment, const, continue, debugger, default, delete, do, double, else, enum, export, extends, false, final, finally, float, for, function, goto, if, implements, import, in, instanceof, int, interface, label, long, native, new, null, package, private, protected, public, return, short, static, super, switch, synchronized, this, throw, throws, transient, true, try, typeof, var, void, volatile, while, with</b></pre>
    </SwitchBox>

    <SwitchBox title="データ型">
      <pre><CopyCode>console.log('foo');　　<b class="t02">// foo(文字列,<b class="t01">string</b>)</b>
console.log('42');　　<b class="t02">// 42(文字列,string)</b>
console.log(42);　　<b class="t02">// 42(数値,<b class="t01">number</b>)</b>
console.log(42 === 42);　　<b class="t02">// true(真偽値,<b class="t01">boolean</b>)</b>
console.log(42 !== 42);　　<b class="t02">// false(真偽値,boolean)</b>

console.log(document.getElementById('foo'));　　<b class="t02">// <b class="t01">null</b>(期待される値が存在しない場合)</b>
console.log(typeof null);　　<b class="t02">// object</b>

var bar;
console.log(bar);　　<b class="t02">// <b class="t01">undefined</b>(未定義の値)</b>
console.log(typeof undefined);　　<b class="t02">// undefined</b>

console.log(0 / 0);　　<b class="t02">// <b class="t01">NaN</b>(数値が期待されるが数値ではない値, Not a Number)</b>

console.log(42 / 0);　　<b class="t02">// <b class="t01">Infinity</b>(正の無限大)</b>
console.log(-42 / 0);　　<b class="t02">// <b class="t01">-Infinity</b>(負の無限大)</b>
<b class="t02">// 1.79769313486231570e+308を超える数</b>
</CopyCode>

---

// 数値の種類

<CopyCode>console.log(42);  <b class="t02">// 42：10進数</b>
console.log(<b class="t01">0</b>42);  <b class="t02">// 34：8進数</b>
console.log(<b class="t01">0x</b>42);  <b class="t02">// 66：16進数</b>
console.log(42.8<b class="t01">e</b>4);  <b class="t02">// 428000：浮動小数点数（42.8×10の4乗）</b>
</CopyCode>

---

// エスケープシーケンス

<CopyCode>console.log('<b class="t01">\</b>n');  <b class="t02">// 改行(LF)</b>
console.log('<b class="t01">\</b>r');  <b class="t02">// リターン(CR)</b>
console.log('<b class="t01">\</b>t');  <b class="t02">// タブ</b>
console.log('<b class="t01">\</b>\');  <b class="t02">// \</b>
console.log('<b class="t01">\</b>'');  <b class="t02">// '</b>
console.log('<b class="t01">\</b>"');  <b class="t02">// "</b>
</CopyCode>

---

// falsy

<CopyCode>console.log(<b class="t01">Boolean(</b>'string'<b class="t01">));</b>  <b class="t02">// true</b>
console.log(<b class="t01">Boolean(</b>true<b class="t01">));</b>  <b class="t02">// true</b>
console.log(<b class="t01">Boolean(</b>1<b class="t01">));</b>  <b class="t02">// true</b>
console.log(<b class="t01">Boolean(</b>{}<b class="t01">));</b>  <b class="t02">// true</b>

console.log(<b class="t01">Boolean(</b>false<b class="t01">));</b>  <b class="t02">// false</b>
console.log(<b class="t01">Boolean(</b>undefined<b class="t01">));</b>  <b class="t02">// false</b>
console.log(<b class="t01">Boolean(</b>null<b class="t01">));</b>  <b class="t02">// false</b>
console.log(<b class="t01">Boolean(</b>0<b class="t01">));</b>  <b class="t02">// false</b>
console.log(<b class="t01">Boolean(</b>NaN<b class="t01">));</b>  <b class="t02">// false</b>
console.log(<b class="t01">Boolean(</b>''<b class="t01">));</b>  <b class="t02">// false</b>
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="数値演算">
      <pre>// 算術演算子

<CopyCode>console.log(5 <b class="t01">+</b> 2);  <b class="t02">// 7（加算）</b>
console.log(5 <b class="t01">-</b> 2);  <b class="t02">// 3（減算）</b>
console.log(5 <b class="t01">*</b> 2);  <b class="t02">// 10（乗算）</b>
console.log(5 <b class="t01">/</b> 2);  <b class="t02">// 2.5（除算）</b>
console.log(5 <b class="t01">%</b> 2);  <b class="t02">// 1（余剰）</b>
console.log(5 <b class="t01">**</b> 2);  <b class="t02">// 25（べき乗） // es6</b>

console.log(0.2 <b class="t01">*</b> 3);  <b class="t02">// 0.6000000000000001 (2進数での計算から生じる誤差)</b>
console.log(((0.2 * 10) <b class="t01">*</b> 3) / 10);  <b class="t02">// 0.6 (一旦整数にして計算すれば回避)</b>
</CopyCode>

---

// 代入演算子

<CopyCode>var foo;

foo <b class="t01">=</b> 5;  <b class="t02">// fooに5を代入</b>
  console.log(foo);  <b class="t02">// 5</b>
foo <b class="t01">+=</b> 5;  <b class="t02">// fooの値に5を加算してfooに再代入</b>
  console.log(foo);  <b class="t02">// 10</b>
foo <b class="t01">-=</b> 5;  <b class="t02">// fooの値に5を減算してfooに再代入</b>
  console.log(foo);  <b class="t02">// 5</b>
foo <b class="t01">*=</b> 5;  <b class="t02">// fooの値に5を乗算してfooに再代入</b>
  console.log(foo);  <b class="t02">// 25</b>
foo <b class="t01">/=</b> 5;  <b class="t02">// fooの値に5を除算してfooに再代入</b>
  console.log(foo);  <b class="t02">// 5</b>
foo <b class="t01">%=</b> 5;  <b class="t02">// fooの値と5の余剰をfooに再代入</b>
  console.log(foo);  <b class="t02">// 0</b>
</CopyCode>

---

// インクリメント演算子, デクリメント演算子

<CopyCode>var foo = 42, bar = 0;

bar = foo<b class="t01">++</b>;  <b class="t02">// 代入してから1を加算</b>
console.log(foo);  <b class="t02">// 43</b>
console.log(bar);  <b class="t02">// 42</b>

var foo = 42, bar = 0;

bar = <b class="t01">++</b>foo;  <b class="t02">// 1を加算してから代入</b>
console.log(foo);  <b class="t02">// 43</b>
console.log(bar);  <b class="t02">// 43</b>

var foo = 42, bar = 0;

bar = foo<b class="t01">--</b>;  <b class="t02">// 代入してから1を減算</b>
console.log(foo);  <b class="t02">// 41</b>
console.log(bar);  <b class="t02">// 42</b>

var foo = 42, bar = 0;

bar = <b class="t01">--</b>foo;  <b class="t02">// 1を減算してから代入</b>
console.log(foo);  <b class="t02">// 41</b>
console.log(bar);  <b class="t02">// 41</b>
</CopyCode>

---

// 優先順位

括弧付き > 掛け算割り算 > 足し算引き算
算術演算子(左 > 右) > 代入演算子(左 &lt; 右)

算術演算子は左から処理
1) foo = 1 + 2 + 3;
2) foo = 3 + 3;
3) foo = 6;

代入演算子は右から処理
1) foo = bar = baz = 42;  <b class="t02">// bazに42を代入</b>
2) foo = bar = 42;  <b class="t02">// barに42を代入</b>
3) foo = 42;  <b class="t02">// fooに42を代入</b>

<CopyCode>console.log(foo = 42);  <b class="t02">// は、「42」と出る。すなわち、</b>
</CopyCode>

1) foo = 42;
2) 42;  <b class="t02">// 「foo = 42」が「42」を返している</b>

---

// 文字列化、数値化

<CopyCode><b class="t02">// 加算演算子の別機能＜連結,数値の文字列化＞</b>
console.log('foo' + "bar");  <b class="t02">// foobar</b>
console.log('foo' + 42)  <b class="t02">// foo42</b>
console.log('84' + 42)  <b class="t02">// 8442(数値ではない)</b>

<b class="t02">// その他算術演算子の別機能＜文字列の数値化＞</b>
console.log('84' - 42)  <b class="t02">// 42</b>
console.log('84' * 42)  <b class="t02">// 3528</b>
console.log('84' / 42)  <b class="t02">// 2</b>
console.log('84' % 42)  <b class="t02">// 0</b>
</CopyCode>

---

<b class="t02">// 被演算子
// オペレータ(演算子)とオペランド(値)
// 左オペランド
// 右オペランド
// 単項演算子
// 二項演算子
// 三項演算子</b>

</pre>
    </SwitchBox>

    <SwitchBox title="論理演算">
      <pre>// 等価演算子

<CopyCode>console.log(42 <b class="t01">==</b> 42);  <b class="t02">// true</b>
console.log(42 == '42');  <b class="t02">// true  文字列の42が数値の42に変換されて比較されるため、true</b>
console.log(42 <b class="t01">===</b> '42');  <b class="t02">// false  データ型変換を行わず比較</b>
console.log(true == 1);  <b class="t02">// true</b>
console.log(true === 1);  <b class="t02">// false</b>
console.log(true === 0);  <b class="t02">// false</b>
console.log(true === 42);  <b class="t02">// false</b>
console.log(null == undefined);  <b class="t02">// true</b>
console.log(null === undefined);  <b class="t02">// false</b>
console.log(NaN === NaN);  <b class="t02">// false</b>

console.log(42 <b class="t01">!=</b> 42);  <b class="t02">// false</b>
console.log(42 != '42');  <b class="t02">// false</b>
console.log(42 <b class="t01">!==</b> '42');  <b class="t02">// true  データ型変換を行わず比較</b>

console.log(<b class="t01">!!</b>42);  <b class="t02">// true  Booleanに変換</b>
console.log(<b class="t01">!!</b>'42');  <b class="t02">// true  Booleanに変換</b>
console.log(<b class="t01">!!</b>[1, 2, 3]);  <b class="t02">// true  Booleanに変換</b>
</CopyCode>

---

// 比較演算子

<CopyCode>console.log(42 <b class="t01">&lt;</b> 84);  <b class="t02">// true</b>
console.log(42 <b class="t01">&gt;</b> '84');  <b class="t02">// false</b>
console.log(42 <b class="t01">&lt;=</b> 42);  <b class="t02">// true</b>
console.log(42 <b class="t01">&gt;=</b> '42');  <b class="t02">// true</b>
</CopyCode>

---

// 論理演算子


<b class="t02">// <b class="t01">&amp;&amp;</b>（論理積）・・・左オペランドが true・0以外の数値・文字列 なら、右オペランドを評価し、右オペランドも true・0以外の数値・文字列 なら右オペランドの値を返す。左オペランドが false・特殊な値・0だった場合、右オペランドの評価は行わず、左オペランドの値を返す。</b>

<CopyCode>console.log(1 &lt; 2 &amp;&amp; 3 &lt; 4);  <b class="t02">// true</b>
console.log(2 &lt; 1 &amp;&amp; 3 &lt; 4);  <b class="t02">// false</b>
console.log(1 &amp;&amp; 3 &lt; 4);  <b class="t02">// true</b>
console.log(0 &amp;&amp; 3 &lt; 4);  <b class="t02">// 0</b>
console.log(42 &amp;&amp; 3 &lt; 4);  <b class="t02">// true</b>
console.log('foo' &amp;&amp; 3 &lt; 4);  <b class="t02">// true</b>
console.log(1 &lt; 2 &amp;&amp; null);  <b class="t02">// null</b>
console.log(null &amp;&amp; 3 &lt; 4);  <b class="t02">// null</b>
console.log(null &amp;&amp; null);  <b class="t02">// null</b>
console.log(null &amp;&amp; undefined);  <b class="t02">// null</b>
console.log(undefined &amp;&amp; 3 &lt; 4);  <b class="t02">// undefined</b>
console.log(NaN &amp;&amp; 3 &lt; 4);  <b class="t02">// NaN</b>
console.log(1 &amp;&amp; 1);  <b class="t02">// 1</b>
console.log(0 &amp;&amp; 0);  <b class="t02">// 0</b>
console.log(-42 &amp;&amp; 42);  <b class="t02">// 42</b>
console.log(42 &amp;&amp; -42);  <b class="t02">// -42</b>
console.log(-4.2 &amp;&amp; 4.2);  <b class="t02">// 4.2</b>
</CopyCode>


<b class="t02">// <b class="t01">||</b>（論理和）・・・左オペランドが true・0以外の数値・文字列 なら、それをそのまま返す。左オペランドが false・特殊な値・0 なら、右オペランドを評価し、右オペランドの結果を返す。 </b>

<CopyCode>console.log(1 &lt; 2 || 3 &lt; 4);  <b class="t02">// true</b>
console.log(2 &lt; 1 || 3 &lt; 4);  <b class="t02">// true</b>
console.log(1 || 3 &lt; 4);  <b class="t02">// 1</b>
console.log(0 || 3 &lt; 4);  <b class="t02">// true</b>
console.log(42 || 3 &lt; 4);  <b class="t02">// 42</b>
console.log('foo' || 3 &lt; 4);  <b class="t02">// foo</b>
console.log(1 &lt; 2 || null);  <b class="t02">// true</b>
console.log(null || 3 &lt; 4);  <b class="t02">// true</b>
console.log(null || null);  <b class="t02">// null</b>
console.log(null || undefined);  <b class="t02">// undefined</b>
console.log(undefined || 3 &lt; 4);  <b class="t02">// true</b>
console.log(NaN || 3 &lt; 4);  <b class="t02">// true</b>
console.log(1 || 1);  <b class="t02">// 1</b>
console.log(0 || 0);  <b class="t02">// 0</b>
console.log(-42 || 42);  <b class="t02">// -42</b>
console.log(42 || -42);  <b class="t02">// 42</b>
console.log(-4.2 || 4.2);  <b class="t02">// -4.2</b>
</CopyCode>

---

// 条件演算子

<b class="t02">// foo <b class="t01">?</b> bar <b class="t01">:</b> baz ・・・ foo が真なら bar、偽なら baz を返す</b>
<b class="t02">// if (foo) { bar } else { baz } と同じ</b>

<CopyCode>console.log(42 ? 'true' : 'false');  <b class="t02">// true</b>
console.log(42 &lt; 0 ? 'true' : 'false');  <b class="t02">// false</b>
console.log(0 ? 'true' : 'false');  <b class="t02">// false</b>
console.log(1 ? 'true' : 'false');  <b class="t02">// true</b>
console.log(true ? 'true' : 'false');  <b class="t02">// true</b>
console.log(false ? 'true' : 'false');  <b class="t02">// false</b>
console.log(null ? 'true' : 'false');  <b class="t02">// false</b>
console.log(undefined ? 'true' : 'false');  <b class="t02">// false</b>
console.log(NaN ? 'true' : 'false');  <b class="t02">// false</b>
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="文字列処理">
      <pre>
<CopyCode>var foo = 'abcdef';

console.log(foo.<b class="t01">indexOf</b>('cd'));  <b class="t02">// 2</b>
console.log(foo.<b class="t01">lastIndexOf</b>('cd'));  <b class="t02">// 2</b>
console.log(foo.<b class="t01">search</b>('cd'));  <b class="t02">// 2</b>

console.log(foo.<b class="t01">includes</b>('cd'));  <b class="t02">// true</b>
console.log(foo.<b class="t01">startsWith</b>('cd'));  <b class="t02">// false</b>
console.log(foo.<b class="t01">endsWith</b>('cd'));  <b class="t02">// false</b>

console.log(foo.<b class="t01">charAt</b>(2));  <b class="t02">// c</b>
console.log(foo.<b class="t01">slice</b>(2));  <b class="t02">// cdef</b>
console.log(foo.<b class="t01">substring</b>(2));  <b class="t02">// cdef</b>
console.log(foo.<b class="t01">substr</b>(2));  <b class="t02">// cdef</b>

console.log(foo.<b class="t01">replace</b>('cd', ''));  <b class="t02">// abef</b>
console.log(foo.<b class="t01">split</b>('cd'));  <b class="t02">// ['ab', 'ef']</b>

console.log('ABCDEF'.<b class="t01">toLowerCase</b>());  <b class="t02">// abcdef</b>
console.log(foo.<b class="t01">toUpperCase</b>());  <b class="t02">// ABCDEF</b>

console.log('2'.<b class="t01">padStart</b>(2, '0'));  <b class="t02">// 02</b>
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="正規表現">
      <pre>// 判定する関数

<CopyCode>var foo = 'abcdef';

console.log(<b class="t01">/</b>cd<b class="t01">/</b>.<b class="t01">exec(</b>foo<b class="t01">)</b>);  <b class="t02">// ["cd", ...] // マッチすればその文字列、しなければnullを返す</b>
console.log(<b class="t01">/</b>cd<b class="t01">/</b>.<b class="t01">test(</b>foo<b class="t01">)</b>);  <b class="t02">// true // マッチすればtrue、しなければfalseを返す</b>

console.log(foo.<b class="t01">match(/</b>cd<b class="t01">/)</b>);  <b class="t02">// ["cd", ...] // マッチすればその文字列、しなければnullを返す</b>
console.log(foo.<b class="t01">search(/</b>cd<b class="t01">/)</b>);  <b class="t02">// 2 // マッチすればその箇所、しなければ-1を返す</b>
console.log(foo.<b class="t01">replace(/</b>cd<b class="t01">/,'</b>42<b class="t01">')</b>);  <b class="t02">// ab42ef // マッチすれば置換、しなければそのまま返す</b>
console.log(foo.<b class="t01">split(/</b>cd<b class="t01">/)</b>);  <b class="t02">// ["ab", "ef"] // マッチすれば分割し配列に入れる、しなければそのまま返す</b>
console.log((foo.split(/cd/))[0]);  <b class="t02">// ab</b>
console.log((foo.split(/cd/))[1]);  <b class="t02">// ef</b>
console.log((foo.split(/cd/))[2]);  <b class="t02">// undefined</b>
</CopyCode>

---

// 括弧をつけて配列に入れる

<CopyCode>var foo = 'abcdef';

console.log(/cd/.exec(foo));  <b class="t02">// ["cd", ...]</b>
console.log(/<b class="t01">(</b>c<b class="t01">)</b>d/.exec(foo));  <b class="t02">// ["cd", "c", ...]</b>
console.log(/<b class="t01">(</b>c<b class="t01">)(</b>d<b class="t01">)</b>/.exec(foo));  <b class="t02">// ["cd", "c", "d", ...]</b>
console.log(/<b class="t01">(</b>c<b class="t01">)(?:</b>d<b class="t01">)</b>/.exec(foo));  <b class="t02">// ["cd", "c", ...]</b>

console.log(foo.match(/cd/));  <b class="t02">// ["cd", ...]</b>
console.log(foo.match(/<b class="t01">(</b>c<b class="t01">)</b>d/));  <b class="t02">// ["cd", "c", ...]</b>
console.log(foo.match(/<b class="t01">(</b>c<b class="t01">)(</b>d<b class="t01">)</b>/));  <b class="t02">// ["cd", "c", "d", ...]</b>
console.log(foo.match(/<b class="t01">(</b>c<b class="t01">)(?:</b>d<b class="t01">)</b>/));  <b class="t02">// ["cd", "c", ...]</b>

console.log(foo.split(/cd/));  <b class="t02">// ["ab", "ef"]</b>
console.log(foo.split(/<b class="t01">(</b>c<b class="t01">)</b>d/));  <b class="t02">// ["ab", "c", "ef"]</b>
console.log(foo.split(/<b class="t01">(</b>c<b class="t01">)(</b>d<b class="t01">)</b>/));  <b class="t02">// ["ab", "c", "d", "ef"]</b>
console.log(foo.split(/<b class="t01">(</b>c<b class="t01">)(?:</b>d<b class="t01">)</b>/));  <b class="t02">// ["ab", "c", "ef"]</b>

<b class="t02">// (?: 〜 )は「配列に入れない」指定</b>
</CopyCode>

---

// オプション

<CopyCode>var foo = 'abCDef';
console.log(foo.match(/cd/<b class="t01">i</b>));  <b class="t02">// ["CD", ...] // 大文字小文字関係なく判定</b>

var foo = 'abcdef abcdef';
console.log(foo.match(/cd/<b class="t01">g</b>));  <b class="t02">// ["cd", "cd"] // 複数マッチし、配列に入れる</b>
</CopyCode>

---

// 正規表現いろいろ

---

// 書式１

<CopyCode>var foo = 'abcdeeef';

console.log(/a<b class="t01">.</b>c/.test(foo));  <b class="t02">// a(なんでも1個)c　を含むならtrue</b>
console.log(/de<b class="t01">+</b>f/.test(foo));  <b class="t02">// d(eが1個以上)f　を含むならtrue</b>
console.log(/de<b class="t01">*</b>f/.test(foo));  <b class="t02">// d(eが0個以上)f　を含むならtrue</b>
console.log(/de<b class="t01">.+</b>f/.test(foo));  <b class="t02">// de(なんでも1個以上)f　を含むならtrue</b>
console.log(/de<b class="t01">.*</b>f/.test(foo));  <b class="t02">// de(なんでも0個以上)f　を含むならtrue</b>
console.log(/de<b class="t01">?</b>f/.test(foo));  <b class="t02">// d(eが0個か1個)f　を含むならtrue</b>
</CopyCode>

---

// 書式２

<CopyCode>var foo = 'abcdef';

console.log(/a<b class="t01">[</b>acef<b class="t01">]</b>f/.test(foo));  <b class="t02">// a(a,c,e,fいずれか1個)f　を含むならtrue</b>
console.log(/a<b class="t01">[</b>bcde<b class="t01">]</b>f/.test(foo));  <b class="t02">// a(b,c,d,eいずれか1個)f　を含むならtrue</b>
console.log(/a<b class="t01">[</b>b<b class="t01">-</b>e<b class="t01">]</b>f/.test(foo));  <b class="t02">// 同上</b>
console.log(/a<b class="t01">[</b>a-z<b class="t01">]</b>f/.test(foo));  <b class="t02">// a(小文字アルファベットいずれか1個)f　を含むならtrue</b>
console.log(/a<b class="t01">[</b>a-zA-Z<b class="t01">]</b>f/.test(foo));  <b class="t02">// a(アルファベットいずれか1個)f　を含むならtrue</b>

console.log(/de<b class="t01">{</b>3<b class="t01">}</b>f/.test(foo));  <b class="t02">// d(eが3個)f　を含むならtrue</b>
console.log(/de<b class="t01">{</b>2<b class="t01">,</b>4<b class="t01">}</b>f/.test(foo));  <b class="t02">// d(eが2個以上、4個以下)f　を含むならtrue</b>
console.log(/de<b class="t01">{</b>2<b class="t01">,}</b>f/.test(foo));  <b class="t02">// d(eが2個以上)f　を含むならtrue</b>

console.log(/a<b class="t01">(</b>bc<b class="t01">)+</b>/.test(foo));  <b class="t02">// a(bcが1個以上)　を含むならtrue</b>
console.log(/ab<b class="t01">|</b>cd<b class="t01">|</b>ef/.test(foo));  <b class="t02">// (abかcdかef)　を含むならtrue</b>
console.log(/a(bc<b class="t01">|</b>de)f/.test(foo));  <b class="t02">// a(bcかde)f　を含むならtrue</b>
</CopyCode>

---

// 書式３

<CopyCode>var foo = 'abcdefabc';

console.log(/<b class="t01">^</b>abc/.test(foo));  <b class="t02">// abcがfooの文頭ならtrue</b>
console.log(/abc<b class="t01">$</b>/.test(foo));  <b class="t02">// abcがfooの文末ならtrue</b>
console.log(/<b class="t01">^</b>abc<b class="t01">$</b>/.test(foo));  <b class="t02">// 文字列がabcに完全一致するならtrue</b>
console.log(/a<b class="t01">[</b>a-zA-Z<b class="t01">]</b>f/.test(foo));  <b class="t02">// a(アルファベットいずれか1個)f　を含むならtrue</b>
console.log(/a<b class="t01">[^</b>a-zA-Z<b class="t01">]</b>f/.test(foo));  <b class="t02">// a(アルファベット以外のいずれか1個)f　を含むならtrue</b>

<b class="t02">// ^ は [ ] の中にあるか外にあるかで意味が違う</b>
</CopyCode>

---

// 書式４

<CopyCode>var foo = 'abcdef';

console.log(/abc<b class="t01">(?=</b>def<b class="t01">)</b>/.test(foo));  <b class="t02">// abcに続く文字列がdefの場合true</b>
console.log(/abc<b class="t01">(?!</b>def<b class="t01">)</b>/.test(foo));  <b class="t02">// abcに続く文字列がdefでない場合true</b>
</CopyCode>

---

// 書式５

<CopyCode>var foo = 'a b1c  d.e';

console.log(/<b class="t01">\s</b>/.test(foo));  <b class="t02">// 半角スペース,タブなどの空白文字　を含むならtrue</b>
console.log(/<b class="t01">\S</b>/.test(foo));  <b class="t02">// 半角スペース,タブなどの空白文字以外　を含むならtrue</b>
console.log(/<b class="t01">\d</b>/.test(foo));  <b class="t02">// 半角数字1つ　を含むならtrue</b>
console.log(/<b class="t01">\D</b>/.test(foo));  <b class="t02">// 半角数字以外　を含むならtrue</b>
console.log(/<b class="t01">\w</b>/.test(foo));  <b class="t02">// 半角英数字かアンダースコア　を含むならtrue</b>
console.log(/<b class="t01">\W</b>/.test(foo));  <b class="t02">// 半角英数字かアンダースコア以外　を含むならtrue</b>
console.log(/<b class="t01">\.</b>/.test(foo));  <b class="t02">//  . を含むならtrue　+*?[]-^{}()|$ なども同様</b>
console.log(/<b class="t01">\n</b>/.test(foo));  <b class="t02">// 改行　を含むならtrue</b>
console.log(/<b class="t01">\0</b>/.test(foo));  <b class="t02">// null　を含むならtrue</b>
</CopyCode>

---

// 書式６

<CopyCode>var foo = '';

console.log(/<b class="t01">\b</b>/.test(foo));  <b class="t02">// 単語の区切り　を含むならtrue</b>
console.log(/<b class="t01">\B</b>/.test(foo));  <b class="t02">// 単語の区切り以外　を含むならtrue</b>
console.log(/<b class="t01">[\b]</b>/.test(foo));  <b class="t02">// バックスペース (U+0008)　を含むならtrue</b>
console.log(/<b class="t01">\v</b>/.test(foo));  <b class="t02">// 垂直タブ (U+000B)　を含むならtrue</b>
console.log(/<b class="t01">\f</b>/.test(foo));  <b class="t02">// 改ページ (U+000C)　を含むならtrue</b>
console.log(/<b class="t01">\r</b>/.test(foo));  <b class="t02">// リターン (U+000D)　を含むならtrue</b>
console.log(/<b class="t01">\cX</b>/.test(foo));  <b class="t02">// XにはA-Zのうち1文字が入る。/\cM/の場合、control-M (U+000D)　を含むならtrue</b>
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="分岐(if)">
      <pre><b class="t01">if (</b>条件<b class="t01">) {</b>
  処理;
<b class="t01">} else if (</b>条件<b class="t01">) {</b>
  処理;
<b class="t01">} else {</b>
  処理;
<b class="t01">}</b>


<b class="t02">// 処理が一文の場合は、中括弧を省略可能
// if ( 条件 ) 処理;</b>

<b class="t02">// 1つのみの条件による2分岐は、下記でも書ける
// ( 条件 ) ? 真の時の処理 : 偽の時の処理;</b>

---

<CopyCode>var score = 70;

if (0 &lt;= score &amp;&amp; score &lt; 45) {
  console.log('bad');
} else if (45 &lt;= score &amp;&amp; score &lt; 85) {
  console.log('normal'); <b class="t02">// normal</b>
} else if (85 &lt;= score &amp;&amp; score &lt;= 100) {
  console.log('good');
} else {
  console.log('error');
}
</CopyCode>

---

<b class="t02">// 偽になる値
false, null, undefined, 空文字列'', 数値の0, 数値のNaN</b>
</pre>
    </SwitchBox>

    <SwitchBox title="分岐(switch)">
      <pre><b class="t01">switch (</b>条件の対象<b class="t01">) {
  case</b> 値 <b class="t01">:</b>
    処理;
    break;
  <b class="t01">case</b> 値 <b class="t01">:</b>
    処理;
    break;
  <b class="t01">default:</b>
    処理;
    break;
<b class="t01">}</b>

---

<CopyCode>var foo = 42;
switch (foo) {
  case 21 :
    console.log('foo = 21');
    break;
  case 42 :
    console.log('foo = 42'); <b class="t02">// foo=42</b>
    break;
  case 84 :
    console.log('foo = 84');
    break;
  default :
    break;
}
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="ループ(for)">
      <pre><b class="t01">for (</b>初期値<b class="t01">;</b> 条件<b class="t01">;</b> i++<b class="t01">) {</b>
  処理;
<b class="t01">}</b>

---

// for

<CopyCode>var arr = ['a', 'b', 'c'];

for (var i = 0; i &lt; arr.length; i++) {
  console.log(arr[i]);  <b class="t02">// a -> b -> c</b>
}
</CopyCode>

---

// for ~ in

<CopyCode>var arr = ['a', 'b', 'c'];

for (var i in arr) {
  console.log(arr[i]);  <b class="t02">// a -> b -> c</b>
}
</CopyCode>

---

// for ~ of

<CopyCode>var arr = ['a', 'b', 'c'];

for (var v of arr) {
  console.log(v);  <b class="t02">// a -> b -> c</b>
}
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="ループ(forEach)">
      <pre>// １）array

<CopyCode>var arr = ['a', 'b', 'c', 'd', 'e'];
<b class="t05">arr</b>.<b class="t01">forEach(function (</b>value<b class="t01">,</b> index<b class="t01">) {</b>
  console.log(value, index);
<b class="t01">});</b>
</CopyCode>

---

// ２）object

<CopyCode>var obj = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
};

<b class="t05">Object.keys</b>(obj).<b class="t01">forEach(function (</b>key<b class="t01">) {</b>
  console.log(key);
<b class="t01">});</b>

<b class="t05">Object.values</b>(obj).<b class="t01">forEach(function (</b>value<b class="t01">) {</b>
  console.log(value);
<b class="t01">});</b>

<b class="t05">Object.entries</b>(obj).<b class="t01">forEach(function (</b>entry<b class="t01">) {</b>
  console.log(entry);
<b class="t01">});</b>
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="ループ(while)">
      <pre>// １）while

<b class="t01">while (</b>条件<b class="t01">) {</b>
  処理;
<b class="t01">}</b>



<CopyCode>var i = 0;
while (i &lt; 3) {
  console.log(i);  <b class="t02">// 0 -> 1 -> 2</b>
  i++;
}
</CopyCode>

---

// ２）do while

<b class="t01">do {</b>
  処理;
<b class="t01">} while (</b>条件<b class="t01">)</b>;



<CopyCode>var i = 42;
do {
  console.log(i);  <b class="t02">// 42 // 必ず1回は実行する</b>
  i++;
} while (i &lt; 3);
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="continue, break">
      <pre>
<CopyCode>for (var i = 0; i &lt; 5; i++) {
  if (i === 1) {
    <b class="t01">continue</b>; <b class="t02">// その回をスキップ</b>
  }
  if (i === 3) {
    <b class="t01">break</b>; <b class="t02">// ループを終了</b>
  }
  console.log(i); <b class="t02">// 0 -> 2</b>
}
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="例外(try, catch, finally, throw)">
      <pre>
<b class="t01">try {
  </b>処理A;
<b class="t01">} catch (</b>e<b class="t01">) {
  <b class="t02">// 処理Aでエラーが起きた時実行</b>
  <b class="t02">// 'e'はエラーの内容が入る</b>
} finally {
  <b class="t02">// 処理Aでエラーが起きても起きなくても実行</b>
}</b>

---

// 例１）例外処理なし

<CopyCode>console.llog('foo'); <b class="t02">// スペルミス</b>
console.log('bar'); <b class="t02">// 次の処理は実行することができない</b>
</CopyCode>


// 例１）例外処理あり

<CopyCode>try {
  console.llog('foo'); <b class="t02">// スペルミス</b>
} catch (e) {
  console.log(e); <b class="t02">// エラー情報をアウトプットすることができる</b>
} finally {
  console.log('bar'); <b class="t02">// 次の処理も実行することができる</b>
}
</CopyCode>

---

// 例２）例外処理なし

<CopyCode><b class="t02">// var color = 'red'</b>
var color = ''; <b class="t02">// 誤ってcolorが空だった場合</b>
console.log('I like ' + color + '.'); <b class="t02">// I like . // 意味のない文章が表示されてしまう</b>
console.log('done.'); <b class="t02">// done</b>
</CopyCode>


// 例２）例外処理あり

<CopyCode><b class="t02">// var color = 'red'</b>
var color = ''; <b class="t02">// 誤ってcolorが空だった場合</b>

try {
  if (color === '') {
    <b class="t01">throw</b> 'error: no color'; <b class="t02">// 値やオブジェクトをcatch(e)に送る</b>
  }
  console.log('I like ' + color + '.'); <b class="t02">// この処理は実行しない</b>
} catch (e) {
  console.log(e); <b class="t02">// エラー情報をアウトプットできる</b>
} finally {
  console.log('done.'); <b class="t02">// done</b>
}
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="関数">
      <pre>
// 定義1 - 関数文のみ

<CopyCode>fnc1(); <b class="t02">// fnc1</b>
<b class="t01">function</b> <b class="t04">fnc1</b><b class="t01">() {</b>
  <b class="t02">console.log('fnc1');</b>
<b class="t01">}</b>
<b class="t02">// 変数 fnc1 が定義される</b>
<b class="t02">// 実行時に関数文の巻き上げが起こるためfnc1()で参照できる</b>
</CopyCode>

---

// 定義2 - 変数に無名関数を代入

<CopyCode>fnc2(); <b class="t02">// error</b>
<b class="t01">var</b> <b class="t04">fnc2</b> <b class="t01">= function() {</b>
  <b class="t02">console.log('fnc2');</b>
<b class="t01">}</b>
<b class="t02">// 変数 fnc2 が定義されるが、関数の前からは参照できない</b>
</CopyCode>

---

// 定義3 - 変数に関数文を代入

<CopyCode><b class="t01">var</b> <b class="t04">fnc3</b> <b class="t01">= function</b> fnc<b class="t01">() {</b>
  <b class="t02">console.log('fnc3');</b>
<b class="t01">}</b>
fnc3(); <b class="t02">// fnc3</b>
fnc(); <b class="t02">// error</b>
<b class="t02">// 変数 fnc3 が定義されるが、関数の前からは参照できない</b>
<b class="t02">// 変数 fnc は定義されないため、fnc() では動かない</b>
</CopyCode>

---

// 再帰呼び出し

<CopyCode>function fnc(v) {
  console.log(v);
  v--;
  if(v &gt;= 0) {
    <b class="t01">fnc(</b>v<b class="t01">);</b>  <b class="t02">// 関数の中から自身を呼び出す</b>
  }
}

fnc(5);  <b class="t02">// 5 -&gt; 4 -&gt; 3 -&gt; 2 -&gt; 1 -&gt; 0</b>
</CopyCode>

---

// 引数の初期値

<CopyCode>function fnc(v <b class="t01">= 42</b>) {
  console.log(v);
}

fnc(5);  <b class="t02">// 5</b>
fnc();  <b class="t02">// 42</b>
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="戻り値">
      <pre>
<CopyCode>function sum(foo, bar) {
  <b class="t01">return</b> foo + bar;  <b class="t02">// returnでその値を返して処理を終わる</b>
  console.log('baz');  <b class="t02">// これは実行されない</b>
}

console.log(sum(42,84));  <b class="t02">// 126</b>
</CopyCode>

---

<CopyCode>function sum(foo, bar) {  <b class="t02">// 関数内にreturnが無い場合はundefinedを返す</b>
  console.log('baz');  <b class="t02">// baz</b>
}

console.log(sum(42, 84));  <b class="t02">// undefined</b>
</CopyCode>

---

<CopyCode>function sum(foo, bar) {
  <b class="t01">return</b>;  <b class="t02">// 単にreturnした場合はundefinedを返す</b>
}

console.log(sum(42, 84));  <b class="t02">// undefined</b>
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="スコープ">
      <pre>
<CopyCode>function bar() {
  foo = 84;  <b class="t02">// グローバル変数(window.fooと同値)</b>
}

foo = 42;
bar();
console.log(foo);  <b class="t02">// 84</b>
</CopyCode>



<CopyCode>function bar() {
  <b class="t01">var</b> foo = 84;  <b class="t02">// ローカル変数(関数の中だけ有効)</b>
}

foo = 42;
bar();
console.log(foo);  <b class="t02">// 42</b>
</CopyCode>


---

// スコープチェーン


<CopyCode>var foo = 42;

function bar() {
  function baz() {
    console.log(foo);
  }
  baz();
}

bar(); <b class="t02">// 42</b>


<b class="t02">// 1-a）bar();
// 1-b）各ローカル関数ごとに変数を記憶する領域(bar用, baz用)が生成される(変数オブジェクトという)
// 1-c）スコープチェーンの関係(グローバル &lt;-- bar &lt;-- baz　参照の経路)が生成される
// 2）bar(); --&gt; baz(); --&gt; console.log(foo);
// 3）baz用変数オブジェクトでfooが定義されていないため、1つ外側を参照
// 4）bar用変数オブジェクトでfooが定義されていないため、1つ外側を参照
// 5）グローバル(&lt;script&gt;...&lt;/script&gt;)でfooが定義されている
// 6）値を返す</b>
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="即時関数,無名関数">
      <pre>
<CopyCode>function fnc1() {  <b class="t02">// 普通の関数定義</b>
  console.log('fnc1');
}
fnc1();  <b class="t02">// 呼び出し</b>


<b class="t01">(</b>function fnc2() {  <b class="t02">// 即時関数(呼び出し無しで定義から実行まで)</b>
  console.log('fnc2');
}<b class="t01">)()</b>;


<b class="t01">(</b>function() {  <b class="t02">// 関数名は省略可能 -> 無名関数</b>
  console.log('fnc3');
}<b class="t01">)()</b>;


<b class="t01">(</b>function(<b class="t03">v</b>) {  <b class="t02">// 引数を使う場合</b>
  console.log('fnc4 ' + <b class="t03">v</b>);  <b class="t02">// fnc4 value</b>
}<b class="t01">)(<b class="t03">'value'</b>)</b>;


<b class="t02">// ↓括弧でなく単項演算子などでも可</b>
<b class="t01">(</b>function() {console.log('a');}<b class="t01">)()</b>;
<b class="t01">!</b>function() {console.log('b');}<b class="t01">()</b>;
<b class="t01">+</b>function() {console.log('c');}<b class="t01">()</b>;
<b class="t01">void</b> function() {console.log('d');}<b class="t01">()</b>;


console.log(fnc1());  <b class="t02">// fnc1</b>
console.log(fnc2());  <b class="t02">// undefined</b>
<b class="t02">// 即時関数,無名関数は一度実行したら消え、その後呼び出せない</b>


<b class="t02">// 即時関数,無名関数は、関数名や関数内変数のグローバルへの割り当てを回避する</b>
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="setTimeout">
      <pre>
<CopyCode>console.log('1');
<b class="t01">setTimeout(() =&gt; {</b>
  console.log('2');
<b class="t01">},</b> 1000<b class="t01">);</b>
console.log('3');
</CopyCode>

---

<CopyCode><b class="t03">const timeCount = () =&gt; {</b>
  const date = new Date();
  console.log(date);
  <b class="t01">setTimeout(</b><b class="t03">timeCount</b><b class="t01">,</b> 1000<b class="t01">)</b>;
<b class="t03">}</b>

<b class="t03">timeCount()</b>;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="コールバック">
      <pre>// exsample1

<CopyCode>var fnc1 = function(<b class="t01">callback</b>) {
  for (var i = 0; i &lt; 5000; i++) {
    console.log('Running fnc1...');
  }
  <b class="t03">callback()</b>;
};

var fnc2 = function() {
  console.log('finished');
};

fnc1(<b class="t01">fnc2</b>);

<b class="t02">// 関数の引数として関数を渡し、内部で実行することをコールバックという</b>
</CopyCode>

---

// exsample2

<CopyCode>var fnc1 = function(<b class="t01">callback</b>) {
  console.log('Running fnc1...')
  setTimeout(function() {
    <b class="t03">callback()</b>;
  }, 2000);
};

var fnc2 = function() {
  console.log('Running fnc2...')
  setTimeout(function() {
    console.log('finished');
  }, 2000);
};

fnc1(<b class="t01">fnc2</b>);
</CopyCode>

---

// exsample3

<CopyCode>var fnc1 = function(<b class="t01">callback</b>) {
  console.log('Running fnc1...')
  setTimeout(function() {
    <b class="t03">callback(<b class="t04">fnc3</b>)</b>;
  }, 2000);
};

var fnc2 = function(<b class="t04">callback</b>) {
  console.log('Running fnc2...')
  setTimeout(function() {
    <b class="t05">callback()</b>;
  }, 2000);
};

var fnc3 = function() {
  console.log('Running fnc3...')
  setTimeout(function() {
    console.log('finished');
  }, 2000);
};

fnc1(<b class="t01">fnc2</b>);
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="非同期">
      <pre>
<CopyCode>console.log('a');
setTimeout(function() {console.log('b')}, 1000);
console.log('c');

<b class="t02">// a -> c -> b

// 1) キューにconsole.log('a');を登録
// 2) キューにsetTimeout(~~~);を登録
// 3) キューにconsole.log('c');を登録
// 4) console.log('a');の実行
// 5) setTimeout(~~~);の実行 -> タイマーにfunction() {console.log('b')}を登録
// 6) console.log('c');の実行
// 7) 5)から1000ミリ秒後に別のキューにconsole.log('b');を登録
// 8) console.log('b');の実行</b>
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="配列">
      <pre>// 一次元配列

<CopyCode>var arr = <b class="t01">new Array(</b>"foo"<b class="t01">,</b>42<b class="t01">,</b>true<b class="t01">)</b>;  <b class="t02">// 書式１</b>
var arr = <b class="t01">[</b>"foo"<b class="t01">,</b>42<b class="t01">,</b>true<b class="t01">]</b>;  <b class="t02">// 書式２</b>

console.log(arr<b class="t01">[0]</b>);  <b class="t02">// foo</b>
console.log(arr<b class="t01">[1]</b>);  <b class="t02">// 42</b>
console.log(arr<b class="t01">[2]</b>);  <b class="t02">// true</b>
console.log(arr<b class="t01">[3]</b>);  <b class="t02">// undefined</b>

console.log(arr.<b class="t01">length</b>);  <b class="t02">// 3</b>

console.log(arr);  <b class="t02">// ['foo', 42, true]</b>

arr.push(3,4);
console.log(arr);  <b class="t02">// ['foo', 42, true, 3, 4]</b>

arr.child = 5;
console.log(arr);  <b class="t02">// ['foo', 42, true, 3, 4, child: 5]</b>
console.log(arr[5]);  <b class="t02">// undefined</b>
console.log(arr.child);  <b class="t02">// 5</b>

arr.push(6);
console.log(arr);  <b class="t02">// ['foo', 42, true, 3, 4, 6, child: 5]</b>
console.log(arr[5]);  <b class="t02">// 6</b>

arr.reverse();
console.log(arr);  <b class="t02">// [6, 4, 3, true, 42, 'foo', child: 5]</b>
</CopyCode>

---

// 多次元配列

<CopyCode>var arr = <b class="t01">[</b>['foo', 42, true]<b class="t01">,</b> ['bar', 84, false]<b class="t01">]</b>;

console.log(arr<b class="t01">[1]</b>);  <b class="t02">// ['bar', 84, false]</b>
console.log(arr<b class="t01">[1][1]</b>);  <b class="t02">// 84</b>

console.log(arr.length);  <b class="t02">// 2</b>

console.log(arr);  <b class="t02">// [Array[3], Array[3]]</b>
</CopyCode>

---

// 配列のループ処理1 (for)

<CopyCode>var arr = ['foo', 42, true];

for (var i = 0, al = arr.length; i &lt; al; i++) {
  console.log(arr[i]);  <b class="t02">// foo -> 42 -> true</b>
}

<b class="t02">// for (var i = 0; i &lt; arr.length; i++) だと毎回lengthプロパティを参照するので非効率</b>
</CopyCode>

---

// 配列のループ処理2 (for〜in)

<CopyCode>var arr = ['foo', 42, true];

for (var i in arr) {
  console.log('arr[' + <b class="t01">i</b> + '] = ' + <b class="t01">arr[i]</b>);
}

<b class="t02">// arr[0] = foo
// arr[1] = 42
// arr[2] = true</b>
</CopyCode>

---

// 配列のループ処理3 (forEach)

<CopyCode>var arr = ['foo', 42, true];
function fnc(<b class="t01">value, index</b>) {
  console.log('arr[' + <b class="t01">index</b> + '] = ' + <b class="t01">value</b>);
}

arr.<b class="t01">forEach(</b>fnc<b class="t01">)</b>;

<b class="t02">// arr[0] = foo
// arr[1] = 42
// arr[2] = true</b>
</CopyCode>

---

// pop, shift

<CopyCode>var arr = [1, 2, 3,];

arr.<b class="t01">shift()</b>;
console.log(arr); <b class="t02">// [2, 3,]</b>
arr.<b class="t01">pop()</b>;
console.log(arr); <b class="t02">// [2,]</b>
</CopyCode>

---

// splice

<CopyCode>var arr = [1, 2, 3,];

arr.<b class="t01">splice(</b>1, 0, 1.5<b class="t01">)</b>;
console.log(arr); <b class="t02">// [1, 1.5, 2, 3,]</b>
arr.<b class="t01">splice(</b>1, 1, 1.6<b class="t01">)</b>;
console.log(arr); <b class="t02">// [1, 1.6, 2, 3,]</b>
</CopyCode>

---

// concat

<CopyCode>var arr1 = [1, 2, 3,];
var arr2 = [4, 5, 6,];

var arr3 = arr1.<b class="t01">concat(</b>arr2<b class="t01">)</b>;
console.log(arr3); <b class="t02">// [1, 2, 3, 4, 5, 6,]</b>
</CopyCode>

---

// join

<CopyCode>var arr = [1, 2, 3,];

console.log(arr.<b class="t01">join()</b>); <b class="t02">// 1,2,3</b>
</CopyCode>

---

// find

<CopyCode>var arr = ['a', 'b', 'c',];

console.log(arr.<b class="t01">find(</b>value =&gt; value === 'b'<b class="t01">)</b>); <b class="t02">// 'b'</b>
console.log(arr.<b class="t01">find(</b>value =&gt; {
  return value === 'b';
}<b class="t01">)</b>); <b class="t02">// 'b'</b>
</CopyCode>

---

// sort

<CopyCode>var arr = [6, 4, 5, 3, 1, 2,];

arr.<b class="t01">sort((</b>a, b<b class="t01">) =&gt; {
  if (</b>a &gt; b<b class="t01">) {
    return 1;
  }
  if (</b>a === b<b class="t01">) {
    return 0;
  }
  if (</b>a &lt; b<b class="t01">) {
    return -1;
  }
})</b>;

console.log(arr); <b class="t02">// [1, 2, 3, 4, 5, 6,]</b>
</CopyCode>

---

// localeCompare

<CopyCode>var arr = ['b', 'a', 'd', 'e', 'c',];

arr.<b class="t01">sort((a, b) =&gt; a.localeCompare(b))</b>;
console.log(arr); <b class="t02">// ['a', 'b', 'c', 'd', 'e',]</b>
</CopyCode>

---

// map

<CopyCode>var arr1 = [1, 2, 3,];

var arr2 = arr1.<b class="t01">map(</b>value =&gt; value * 2<b class="t01">)</b>;
console.log(arr2); <b class="t02">// [2, 4, 6,]</b>
</CopyCode>

---

// filter

<CopyCode>var arr1 = [1, 2, 3, 4, 5, 6,];

var arr2 = arr1.<b class="t01">filter(</b>value =&gt; value % 2 === 0<b class="t01">)</b>;
console.log(arr2); <b class="t02">// [2, 4, 6,]</b>
</CopyCode>

---

// Arraylike1

<CopyCode>var str = 'abcdef';
console.log(<b class="t01">[...</b>str<b class="t01">]</b>); <b class="t02">// ['a', 'b', 'c', 'd', 'e', 'f',]</b>
</CopyCode>

---

// Arraylike2

<CopyCode>&lt;div&gt;div&lt;/div&gt;
&lt;div class="on"&gt;div&lt;/div&gt;
&lt;div&gt;div&lt;/div&gt;

&lt;script&gt;
var divs = document.querySelectorAll('div');

<b class="t02">// var on_els = divs.filter((el) =&gt; {
//   el.classList.contains('on');
// }); // error [divs is not array]</b>

divs = <b class="t01">[...</b>divs<b class="t01">]</b>;

var on_els = divs.filter((el) =&gt; {
  return el.classList.contains('on');
});

console.log(on_els); <b class="t02">// [div.on]</b>
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="オブジェクト(定義)">
      <pre>// 書式１(ドット記法)


<CopyCode>var obj = <b class="t01">new Object()</b>;  <b class="t02">// var obj = {}; と同じ</b>
obj<b class="t01">.</b>val1 = 'foo';
obj<b class="t01">.</b>val2 = 42;
obj<b class="t01">.</b>mtd1 = function() {console.log(84)};

console.log(obj.val1);  <b class="t02">// foo</b>
console.log(obj.val2);  <b class="t02">// 42</b>
console.log(obj.mtd1);  <b class="t02">// function() {console.log(84)};</b>
obj.mtd1();  <b class="t02">// 84</b>
</CopyCode>


---

// 書式２(ブラケット記法)


<CopyCode>var obj = <b class="t01">new Object()</b>;
obj<b class="t01">['</b>val1<b class="t01">']</b> = 'foo';
obj<b class="t01">['</b>val2<b class="t01">']</b> = 42;
obj<b class="t01">['</b>mtd1<b class="t01">']</b> = function() {console.log(84)};

console.log(obj['val1']);  <b class="t02">// foo</b>
console.log(obj['val2']);  <b class="t02">// 42</b>
console.log(obj['mtd1']);  <b class="t02">// function() {console.log(84)}</b>
obj['mtd1']();  <b class="t02">// 84</b>

<b class="t02">// プロパティを演算で表記可能</b>
<b class="t02">console.log(obj['v' + 'a' + 'l' + '1']);  // foo</b>
<b class="t02">// 数字で始まるプロパティが使用可能</b>
<b class="t02">obj['123'] = 'bar';</b>
<b class="t02">console.log(obj['123']);  // bar</b>
</CopyCode>


---

// 書式３(オブジェクトリテラル)


<CopyCode>var obj = <b class="t01">{
  </b>val1<b class="t01">: </b>'foo'<b class="t01">,
  </b>val2<b class="t01">:</b> 42<b class="t01">,
  </b>val3<b class="t01">: {</b>
    val3_1<b class="t01">:</b> 84<b class="t01">,</b>
    val3_2<b class="t01">:</b> 126
  <b class="t01">},</b>
  mtd1<b class="t01">:</b> function() {
    console.log(168);
  <b class="t01">}
}</b>;

console.log(obj.val1);  <b class="t02">// foo</b>
console.log(obj.val2);  <b class="t02">// 42</b>
console.log(obj.val3.val3_2);  <b class="t02">// 126</b>
console.log(obj.val3.val3_3);  <b class="t02">// undefined</b>
console.log(obj.val3.val3_3 || 'known');  <b class="t02">// known // 初期値の設定が可能</b>
console.log(obj.val3.val3_2 || 'known');  <b class="t02">// 126</b>
console.log(obj.mtd1);  <b class="t02">// function() { console.log(168); }</b>
obj.mtd1();  <b class="t02">// 168</b>
console.log(obj);  <b class="t02">// Object {...}</b>
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="オブジェクト(this)">
      <pre>１) グローバル


<CopyCode>console.log(<b class="t03">this</b>);  <b class="t02">// Window { ... }</b>
<b class="t02">// この場合、thisが属するオブジェクト(すなわちグローバル)を参照する</b>
</CopyCode>


---

２) 即時関数


<CopyCode>(function() {
  console.log(<b class="t03">this</b>);  <b class="t02">// Window { ... }</b>
  <b class="t02">// この場合もグローバルを参照する</b>

})();
</CopyCode>


---

３) 関数呼び出し


<CopyCode>function fnc() {
  console.log(<b class="t03">this</b>);  <b class="t02">// Window { ... }</b>
  <b class="t02">// この場合もグローバルを参照する</b>

}
fnc(); <b class="t02">// 関数呼び出し</b>
</CopyCode>


---

４) オブジェクトのメソッド呼び出しと関数呼び出し


<CopyCode>var obj = {
  val: 'foo',
  mtd: function() {
    console.log(<b class="t01">this</b>); <b class="t02">// Object {val: 'foo'}</b>
    <b class="t02">// メソッド呼び出しの場合、thisはベースオブジェクト(自分の親となるオブジェクト)を参照する</b>

    function fnc() {
      console.log(<b class="t03">this</b>); <b class="t02">// Window { ... }</b>
      <b class="t02">// 関数呼び出しの場合、thisはグローバルを参照する</b>
    }
    fnc(); <b class="t02">// 関数呼び出し</b>
  }
};
obj.mtd(); <b class="t02">// メソッド呼び出し</b></CopyCode>



<b class="t02">// 関数呼び出しを有効にする方法</b>

<CopyCode>var obj = {
  val: 'foo',
  mtd: function() {
    console.log(<b class="t01">this</b>); <b class="t02">// Object {val: 'foo'}</b>

    <b class="t03">var <b class="t01">_this</b> = this;</b>
    function fnc() {
      console.log(<b class="t01">_this</b>); <b class="t02">// Object {val: 'foo'}</b>
    }
    fnc(); <b class="t02">// 関数呼び出し</b>
  }
};
obj.mtd(); <b class="t02">// メソッド呼び出し</b>
</CopyCode>


---

５) コンストラクタ


<CopyCode>function fnc() {
  <b class="t01">this</b>.val = 'foo';
  <b class="t01">this</b>.mtd = function() {
    console.log(<b class="t01">this</b>); <b class="t02">// fnc {val: 'foo'}</b>
  };
}

var obj = new fnc();
<b class="t02">// インスタンス生成(objをthisとしたオブジェクトを作る)</b>

obj.mtd(); <b class="t02">// メソッド呼び出し</b>
</CopyCode>


---

６) call


<CopyCode>var obj = {
  foo1: 'bar1',
  foo2: 'bar2',
};

function fnc(arg1, arg2) {
  console.log(<b class="t01">this</b>);
  <b class="t01">this</b>.param1 = arg1;
  <b class="t01">this</b>.param2 = arg2;
  console.log(<b class="t01">this</b>);
}

fnc.call(obj, 'var1', 'var2');
<b class="t02">// fncを呼び出し、任意のobjectをthisに設定できる</b>
</CopyCode>


---

７) apply


<CopyCode>var obj = {
  foo1: 'bar1',
  foo2: 'bar2',
};

function fnc(arg1, arg2) {
  console.log(<b class="t01">this</b>);
  <b class="t01">this</b>.param1 = arg1;
  <b class="t01">this</b>.param2 = arg2;
  console.log(<b class="t01">this</b>);
}

fnc.apply(obj, ['var1', 'var2']);
<b class="t02">// callとほぼ同じだが第二引数が配列</b>
</CopyCode>


---

８) bind


<CopyCode>var obj = {
  foo1: 'bar1',
  foo2: 'bar2',
};

function fnc(arg1, arg2) {
  <b class="t01">this</b>.param1 = arg1;
  <b class="t01">this</b>.param2 = arg2;
  console.log(<b class="t01">this</b>);
}

var fnc1 = fnc.bind(obj); <b class="t02">// thisにobjを設定した新しい関数fnc1を作成できる</b>
var fnc2 = fnc.bind(obj, 1); <b class="t02">// thisにobjを設定、引数に任意の値を一つ指定</b>
var fnc3 = fnc.bind(obj, 1, 2); <b class="t02">// thisにobjを設定、引数に任意の値を二つ指定</b>

<b class="t02">// 追加引数なし</b>
fnc1();
fnc2();
fnc3();

<b class="t02">// 追加引数あり</b>
fnc1(3); <b class="t02">// 第一引数(arg1)に3が入る</b>
fnc2(3); <b class="t02">// 第一引数は埋まっているため、第二引数(arg2)に3が入る</b>
fnc3(3); <b class="t02">// 両方埋まっているため、3は入らない</b>
</CopyCode>


// nullを設定

<CopyCode>function fnc(arg1, arg2, arg3) {
  console.log(this); <b class="t02">// nullの場合thisへのbindは無効</b>
  console.log(arg1); <b class="t02">// 1が固定される</b>
  console.log(arg2); <b class="t02">// 空き</b>
  console.log(arg3); <b class="t02">// 空き</b>
}

var fnc1 = fnc.bind(null, 1);
fnc1(2, 3);
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="オブジェクト(可変長引数)">
      <pre>// arguments


<CopyCode>function fnc () {
  console.log(<b class="t01">arguments</b>);  <b class="t02">// [4, 2]</b>
  console.log(typeof arguments);  <b class="t02">// object</b>
  console.log(arguments[0]);  <b class="t02">// 4</b>
  console.log(arguments[1]);  <b class="t02">// 2</b>
  console.log(arguments[2]);  <b class="t02">// undefined</b>
  return arguments[0] + arguments[1];
}

console.log(fnc(4, 2));  <b class="t02">// 6</b>

<b class="t02">// argumentsは引数を配列的に格納するオブジェクト(可変長引数)</b>
</CopyCode>


---

// 仮引数を置いた場合


<CopyCode>function fnc (<b class="t01">foo</b>) {
  console.log(<b class="t01">foo</b>);  <b class="t02">// 4</b>
  console.log(arguments[0]);  <b class="t02">// 4</b>
  console.log(arguments[1]);  <b class="t02">// 2</b>
  console.log(arguments[2]);  <b class="t02">// undefined</b>
  return arguments[0] + arguments[1];
}

console.log(fnc(4, 2));  <b class="t02">// 6</b>

<b class="t02">// 第1引数が仮引数に入り、argumentsも生成される</b>
<b class="t02">// 仮引数に入るのはオブジェクト(argument)では無い</b>
</CopyCode>


---

// arguments.callee


<CopyCode>function fnc () {
  return <b class="t01">arguments.callee</b>;
}

console.log(fnc);  <b class="t02">// functionの内容</b>
console.log(fnc());  <b class="t02">// functionの内容</b>

<b class="t02">// arguments.calleeは実行中の関数自身を参照する</b>
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="オブジェクト(名前付き引数)">
      <pre>
<CopyCode>function sum(args) {
  if (args.arg1 === undefined) { args.arg1 = 1; }
  if (args.arg2 === undefined) { args.arg2 = 1; }
  return args.arg1 + args.arg2;
}

console.log(sum(<b class="t01">{ </b>arg1<b class="t01">:</b> 42<b class="t01">,</b> arg2<b class="t01">:</b> 84 <b class="t01">}</b>));  <b class="t02">// 126</b>
console.log(sum(<b class="t01">{</b> arg1<b class="t01">:</b> 42 <b class="t01">}</b>));  <b class="t02">// 43</b>
console.log(sum(<b class="t01">{</b> arg2<b class="t01">:</b> 84 <b class="t01">}</b>));  <b class="t02">// 85</b>
console.log(sum(<b class="t01">{}</b>));  <b class="t02">// 2</b>
console.log(sum());  <b class="t02">// Uncaught TypeError: Cannot read property 'arg1' of undefined</b>
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="オブジェクト(連想配列)">
      <pre>// 連想配列(ハッシュ) と for 〜 in


<CopyCode>var obj = {
  val1 : 'foo',
  val2 : 'bar',
  val3 : 'baz',
}

<b class="t01">for (var i in</b> obj<b class="t01">) {</b>
  console.log('value of ' + i + ' is ' + obj[i]);
<b class="t01">}</b>

<b class="t02">// value of val1 is foo</b>
<b class="t02">// value of val2 is bar</b>
<b class="t02">// value of val3 is baz</b>
</CopyCode>


---

// 連想配列(ハッシュ) と if 〜 in


<CopyCode>var obj = {
  val1 : 'foo',
  val2 : 'bar',
  val3 : 'baz',
}

<b class="t01">if (</b>'val2' <b class="t01">in</b> obj<b class="t01">) {</b>
  console.log(obj['val2']);  <b class="t02">// bar</b>
<b class="t01">}</b>
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="オブジェクト(列挙)">
      <pre>
<CopyCode>var obj = {
  'key1': 'val1',
  'key2': 'val2',
  'key3': 'val3',
};

console.log(<b class="t01">Object.keys(</b>obj<b class="t01">)</b>);  <b class="t02">// ["key1", "key2", "key3"]</b>
console.log(<b class="t01">Object.values(</b>obj<b class="t01">)</b>);  <b class="t02">// ["val1", "val2", "val3"]</b>
console.log(<b class="t01">Object.entries(</b>obj<b class="t01">)</b>);  <b class="t02">// [["key1", "val1"], ["key2", "val2"], ["key3", "val3"]]</b>
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="実体と参照">
      <pre>実体：プリミティブ型。値そのもの。
参照：実体の場所を指す情報。オブジェクト名や配列名。



// １）配列の参照コピー

<CopyCode>var arr1 = ['foo','bar','baz'];
var arr2 = arr1;  <b class="t02">// 参照情報のコピーになる</b>

arr1[2] = 'qux';  <b class="t02">// arr1が参照する値を変える(実体値を変える)と、</b>

console.log(arr1[2]);  <b class="t02">// qux</b>
console.log(arr2[2]);  <b class="t02">// <b class="t01">qux</b>  arr2が参照する値も変わる(同じ実体値を参照している)</b>
</CopyCode>



// ２）配列の実体コピー

<CopyCode>function copyArray(inArr) {  <b class="t02">// 配列を実体コピーする関数</b>
  var outArr = [];  <b class="t02">// 新しい配列を作る</b>
  for (var i = 0; i &lt; inArr.length; i++) {
    if (inArr[i] <b class="t01">instanceof</b> Array) {  <b class="t02">// inArr[i] が Array(配列) なら true</b>
      outArr[i] = copyArray(inArr[i]);  <b class="t02">// trueならもう一度関数を呼ぶ</b>
    } else {
      outArr[i] = inArr[i];  <b class="t02">// trueでなければ実体の値を代入</b>
    }
  }
  return outArr;
}

var arr1 = [['foo0', 'bar0'], ['foo1','bar1']];
var arr2 = copyArray(arr1);  <b class="t02">// 実体の複製ができるため、</b>

arr1[1][1] = 'qux1';  <b class="t02">// arr1が参照する値を変えても、</b>

console.log(arr1[1][1]);  <b class="t02">// qux1</b>
console.log(arr2[1][1]);  <b class="t02">// <b class="t01">bar1</b>  arr2が参照する値は変化しない</b>
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="DOM参照(基礎)">
      <pre>// １）document参照


<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;script&gt;

console.log(document.parentNode);  <b class="t02">// null</b>
console.log(<b class="t01">document</b>);  <b class="t02">// #document // 最上層のオブジェクト</b>
console.log(document.<b class="t01">documentElement</b>);  <b class="t02">// &lt;html&gt;...&lt;/html&gt; </b>
console.log(document.documentElement.tagName);  <b class="t02">// HTML</b>
console.log(document.html);  <b class="t02">// undefined</b>
console.log(document.<b class="t01">body</b>);  <b class="t02">// &lt;body&gt;...&lt;/body&gt;</b>
console.log(document.body.tagName);  <b class="t02">// BODY</b>

&lt;/script&gt;
</CopyCode>

---

// ２）idで参照


<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;p <b class="t01">id="</b>bar<b class="t01">"</b> class="foobar" title="foobaz" name="fooqux"&gt;baz&lt;b&gt;qux&lt;/b&gt;quxx&lt;/p&gt;

&lt;script&gt;

var foo = document.<b class="t01">getElementById('</b>bar<b class="t01">')</b>;  <b class="t02">// document はオブジェクト。getElementById はメソッド。</b>

console.log(foo);  <b class="t02">// &lt;p ...&gt;...&lt;/p&gt;</b>
console.log(foo.<b class="t01">innerHTML</b>);  <b class="t02">// baz&lt;b&gt;qux&lt;/b&gt;quxx</b>
console.log(foo.<b class="t01">textContent</b>);  <b class="t02">// bazquxquxx</b>
console.log(foo.<b class="t01">parentNode</b>);  <b class="t02">// &lt;body&gt;...&lt;/body&gt;  親ノードは書き換え不可</b>
console.log(foo.<b class="t01">tagName</b>);  <b class="t02">// P</b>
console.log(foo.<b class="t01">childNodes</b>);  <b class="t02">// [text, b, text, item: function] // ノードリスト</b>
console.log(foo.childNodes.<b class="t01">length</b>);  <b class="t02">// 3</b>
console.log(foo.childNodes.<b class="t01">item(</b>0<b class="t01">)</b>);  <b class="t02">// "baz" // テキストノード</b>
console.log(foo.childNodes<b class="t01">[</b>0<b class="t01">]</b>);  <b class="t02">// "baz"</b>
console.log(foo.childNodes[0].<b class="t01">nodeType</b>);  <b class="t02">// 3 // テキストノードを示す番号</b>
console.log(foo.childNodes[0].<b class="t01">nodeName</b>);  <b class="t02">// #text</b>
console.log(foo.childNodes[0].<b class="t01">nodeValue</b>);  <b class="t02">// baz</b>
console.log(foo.childNodes[1].<b class="t01">previousSibling</b>.nodeValue);  <b class="t02">// baz</b>
console.log(foo.childNodes[1].<b class="t01">nextSibling</b>.nodeValue);  <b class="t02">// quxx</b>
console.log(foo.<b class="t01">firstChild</b>.nodeValue);  <b class="t02">// baz</b>
console.log(foo.<b class="t01">lastChild</b>.nodeValue);  <b class="t02">// quxx</b>
console.log(foo.<b class="t01">id</b>);  <b class="t02">// bar</b>
console.log(foo.<b class="t01">className</b>);  <b class="t02">// foobar</b>
console.log(foo.<b class="t01">title</b>);  <b class="t02">// foobaz</b>
console.log(foo.name);  <b class="t02">// undefined // nameは参照できる要素が限られている</b>

&lt;/script&gt;
</CopyCode>

---

// ２-２）titleタグ、scriptタグの textプロパティ


<CopyCode>&lt;!doctype html&gt;
&lt;title id="baz0"&gt;qux&lt;/title&gt;

&lt;script id="baz1"&gt;

var foo = document.getElementById('baz0');
var bar = document.getElementById('baz1');

console.log(foo.<b class="t01">text</b>);  <b class="t02">// qux</b>
console.log(bar.<b class="t01">text</b>);  <b class="t02">// (scriptの中身)</b>

&lt;/script&gt;
</CopyCode>

---

// ３）タグで参照


<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;p&gt;
bar
&lt;<b class="t01">b</b>&gt;qux0&lt;/b&gt;
&lt;<b class="t01">b</b>&gt;qux1&lt;/b&gt;
quxx
&lt;/p&gt;

&lt;script&gt;

var foo = document.<b class="t01">getElementsByTagName('</b>b<b class="t01">')</b>;

console.log(foo);  <b class="t02">// [b, b, item: function] // ノードリスト</b>
console.log(foo.length);  <b class="t02">// 2</b>
console.log(foo.item(0));  <b class="t02">// &lt;b&gt;qux0&lt;/b&gt;</b>
console.log(foo.item(0).innerHTML);  <b class="t02">// qux0</b>

&lt;/script&gt;
</CopyCode>

---

// ４）classで参照（ie8以前は無効）


<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;p&gt;
bar
&lt;b <b class="t01">class="</b>baz<b class="t01">"&gt;</b>qux0&lt;/b&gt;
&lt;b <b class="t01">class="</b>baz<b class="t01">"&gt;</b>qux1&lt;/b&gt;
quxx
&lt;/p&gt;

&lt;script&gt;

var foo = document.<b class="t01">getElementsByClassName('</b>baz<b class="t01">')</b>;

console.log(foo);  <b class="t02">// [b.baz, b.baz, item: function] // ノードリスト</b>
console.log(foo.length);  <b class="t02">// 2</b>
console.log(foo.item(0));  <b class="t02">// &lt;b ...&gt;qux0&lt;/b&gt;</b>
console.log(foo.item(0).innerHTML);  <b class="t02">// qux0</b>

&lt;/script&gt;
</CopyCode>

---

// ５）querySelector


<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;p&gt;
bar
&lt;b <b class="t01">class="</b>baz<b class="t01">"&gt;</b>qux0&lt;/b&gt;
&lt;b <b class="t01">class="</b>baz<b class="t01">"&gt;</b>qux1&lt;/b&gt;
quxx
&lt;/p&gt;

&lt;script&gt;

var foo1 = document.<b class="t01">querySelector('</b>.baz<b class="t01">')</b>;
var foo2 = document.<b class="t01">querySelectorAll('</b>.baz<b class="t01">')</b>;

console.log(foo1);  <b class="t02">// &lt;b class="baz"&gt;qux0&lt;/b&gt; // taking first element</b>
console.log(foo2);  <b class="t02">// NodeList(2) [b.baz, b.baz]</b>

&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="DOM操作(基礎)">
      <pre>
<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;h1&gt;&lt;/h1&gt;

&lt;input type="button" value="appendPeach" onclick="appendPeach();"&gt;
&lt;input type="button" value="appendFivePeaches" onclick="appendFivePeaches();"&gt;
&lt;input type="button" value="insertBlueberry" onclick="insertBlueberry();"&gt;
&lt;input type="button" value="removeBottom" onclick="removeBottom();"&gt;
&lt;input type="button" value="removeAll" onclick="removeAll();"&gt;
&lt;input type="button" value="cloneTop" onclick="cloneTop();"&gt;
&lt;input type="button" value="replaceAll" onclick="replaceAll();"&gt;
&lt;input type="button" value="reset" onclick="reset();"&gt;

&lt;ul id="fruit_list"&gt;
&lt;li&gt;apple&lt;/li&gt;
&lt;li&gt;orenge&lt;/li&gt;
&lt;li&gt;banana&lt;/li&gt;
&lt;li&gt;grape&lt;/li&gt;
&lt;/ul&gt;


&lt;script&gt;

function appendPeach() {
  var ul = document.getElementById('fruit_list');
  var li = document.<b class="t01">createElement('</b>li<b class="t01">')</b>;
  li.innerHTML = document.<b class="t01">createTextNode('</b>peach<b class="t01">')</b>.nodeValue;
  ul.<b class="t01">appendChild(</b>li<b class="t01">)</b>;

  <b class="t02">// liとTextNodeを生成し、liの中にTextNodeを入れる。ul内の一番最後にliを挿入する。</b>
}

function appendFivePeaches() {
  var ul = document.getElementById('fruit_list');
  var fgm = document.<b class="t01">createDocumentFragment()</b>;  <b class="t02">// 暫定的な木構造の枠を生成</b>
  for (i = 0; i &lt; 5; i++) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode('peach'));
    fgm.appendChild(li);
  }
  ul.appendChild(fgm);  <b class="t02">// 追加する要素は5つだがulにappendする処理は1回で済む</b>
}

function insertBlueberry() {
  var ul = document.getElementById('fruit_list');
  var li = document.createElement('li');
  li.appendChild(document.createTextNode('blueberry'));
  ul.<b class="t01">insertBefore(</b>li<b class="t01">,</b> ul.firstChild<b class="t01">)</b>;

  <b class="t02">// liとTextNodeを生成し、liの中にTextNodeを入れる。ul内の一番最初にliを挿入する。</b>
}

function removeBottom() {
  var ul = document.getElementById('fruit_list');
  if(ul.<b class="t01">hasChildNodes()</b>) {
    if (ul.lastChild.nodeValue === '\n') {
      ul.<b class="t01">removeChild</b>(ul.lastChild);
    }
    if (ul.hasChildNodes()) {
      ul.removeChild(ul.lastChild);
    }
  }

  <b class="t02">// ul内にノードが存在すれば、最後のノードを削除する。</b>
}

function removeAll() {
  var ul = document.getElementById('fruit_list');
  while(ul.hasChildNodes()) {
    ul.removeChild(ul.lastChild);
  }

  <b class="t02">// ul内に子ノードが存在すれば true、最後の子ノードを削除する。子ノードが無くなるまで処理を繰り返す。</b>
}

function cloneTop() {
  var ul = document.getElementById('fruit_list');
  for (i = 0; i &lt; ul.childNodes.length; i++) {
    if(ul.childNodes.item(i).tagName === 'LI') {
      ul.appendChild(ul.childNodes.item(i).<b class="t01">cloneNode(true)</b>); <b class="t02">// trueにすると子ノードも含む</b>
      break;
    }
  }

  <b class="t02">// ul内の最初のliを複製して最後に挿入する。</b>
}

function replaceAll() {
  var ul = document.getElementById('fruit_list');
  for (i = 0; i &lt; ul.childNodes.length; i++) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode('strawberry'));

    if (ul.childNodes.item(i).tagName === 'LI') {
      ul.<b class="t01">replaceChild(</b>li<b class="t01">,</b> ul.childNodes.item(i)<b class="t01">)</b>;
    }
  }

  <b class="t02">// ul内の全てのノードのうち、liに限り、新しく生成したliに置換する。</b>
}

function reset() {
  var ul = document.getElementById('fruit_list');
  while(ul.hasChildNodes()) {
    ul.removeChild(ul.firstChild);
  }
  var fruit = ['apple', 'orenge', 'banana', 'grape'];
  var fgm = document.createDocumentFragment();
  for (i = 0; i &lt; fruit.length; i++) {
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(fruit[i]));
    fgm.appendChild(li);
  }
  ul.appendChild(fgm);

  <b class="t02">// ul内の全てのノードを削除し、スタート時のノードを生成する。</b>
}

&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="DOM参照,操作(table)">
      <pre>
<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;table id="fruit_list"&gt;
&lt;tr&gt;
&lt;td&gt;apple&lt;/td&gt;&lt;td&gt;red&lt;/td&gt;&lt;td&gt;42&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;banana&lt;/td&gt;&lt;td&gt;yellow&lt;/td&gt;&lt;td&gt;84&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;


&lt;script&gt;

var table = document.getElementById('fruit_list');

console.log(table);  <b class="t02">// &lt;table ...&gt;...&lt;/table&gt;</b>
console.log(table.<b class="t01">rows</b>);  <b class="t02">// [tr, tr, ...] // HTMLCollection</b>
console.log(table.rows.length);  <b class="t02">// 2</b>
console.log(table.rows[0]);  <b class="t02">// &lt;tr&gt;...&lt;/tr&gt; // HTMLTableRowElement</b>
console.log(table.rows[0].<b class="t01">rowIndex</b>);  <b class="t02">// 0</b>
console.log(table.rows[0].innerHTML);  <b class="t02">// &lt;td&gt;apple&lt;/td&gt;&lt;td&gt;red&lt;/td&gt;&lt;td&gt;42&lt;/td&gt;</b>
console.log(table.rows[0].<b class="t01">cells</b>);  <b class="t02">// [td, td, td, ...] // HTMLCollection</b>
console.log(table.rows[0].cells.length);  <b class="t02">// 3</b>
console.log(table.rows[0].cells[0]);  <b class="t02">// &lt;td&gt;apple&lt;/td&gt; // HTMLTableCellElement</b>
console.log(table.rows[0].cells[0].<b class="t01">cellIndex</b>);  <b class="t02">// 0</b>
console.log(table.rows[0].cells[0].innerHTML);  <b class="t02">// apple</b>
console.log(table.<b class="t01">tBodies</b>);  <b class="t02">// [tbody, ...] // HTMLCollection</b>
console.log(table.tBodies.length);  <b class="t02">// 1</b>
console.log(table.tBodies[0]);  <b class="t02">// &lt;tbody&gt;...&lt;/tbody&gt; // HTMLTableSectionElement</b>
console.log(table.tBodies[0].innerHTML);  <b class="t02">// (tableタグ内の全てのノード)</b>

&lt;/script&gt;
</CopyCode>

---

<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;body onload="sum();"&gt;

&lt;input type="button" value="change_number" onclick="resetNumber();"&gt;
&lt;input type="button" value="insertPeach" onclick="insertPeach();"&gt;
&lt;input type="button" value="deleat_peach" onclick="deletePeach();"&gt;
&lt;input type="button" value="deleteCaption" onclick="deleteCaption();"&gt;
&lt;input type="button" value="reset" onclick="reset();"&gt;

&lt;table id="fruit_list" border="1"&gt;
&lt;caption&gt;fruit_list&lt;/caption&gt;
&lt;thead&gt;
&lt;tr&gt;
&lt;th&gt;name&lt;/th&gt;&lt;th&gt;color&lt;/th&gt;&lt;th&gt;number&lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;
&lt;tfoot&gt;
&lt;tr&gt;
&lt;td&gt;sum&lt;/td&gt;&lt;td&gt;&lt;/td&gt;&lt;td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;/tfoot&gt;
&lt;tbody&gt;
&lt;tr&gt;
&lt;td&gt;apple&lt;/td&gt;&lt;td&gt;red&lt;/td&gt;&lt;td&gt;42&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;banana&lt;/td&gt;&lt;td&gt;yellow&lt;/td&gt;&lt;td&gt;126&lt;/td&gt;
&lt;/tr&gt;
&lt;/tbody&gt;
&lt;/table&gt;


&lt;script&gt;

function resetNumber() {
  var table = document.getElementById('fruit_list');

  for (var i = 0; i &lt; table.rows.length; i++) {
    var target_row = table.rows[i];
    var target_cell = target_row.cells[0].innerHTML;
    if(target_cell !== 'name' &amp;&amp; target_cell !== 'foot') {
      target_row.<b class="t01">deleteCell(</b>2<b class="t01">)</b>;
      target_row.<b class="t01">insertCell(</b>2<b class="t01">)</b>.innerHTML = 0;
    }
  }
  sum();
}

function insertPeach() {
  var table = document.getElementById('fruit_list')
  var peach = ['peach','pink',84]

  var row = table.<b class="t01">insertRow(</b>2<b class="t01">)</b>;
  for (var i = 0; i &lt; peach.length; i++) {
    var cell = row.insertCell(i);
    cell.appendChild(document.createTextNode(peach[i]));
  }
  sum();
}

function deletePeach() {
  var table = document.getElementById('fruit_list');

  for (var i = 0; i &lt; table.rows.length; i++) {
    if(table.rows[i].cells[0].innerHTML === 'peach') {
      table.<b class="t01">deleteRow(</b>i<b class="t01">)</b>;
      i--;
    }
  }
  sum();
}

function reset() {
  var table = document.getElementById('fruit_list');
  while(table.hasChildNodes()) {
    table.removeChild(table.lastChild);
  }
  table.<b class="t01">createTHead()</b>.innerHTML = '&lt;tr&gt;&lt;th&gt;name&lt;/th&gt;&lt;th&gt;color&lt;/th&gt;&lt;th&gt;number&lt;/th&gt;&lt;/tr&gt;';
  table.<b class="t01">createTFoot()</b>.innerHTML = '&lt;tr&gt;&lt;td&gt;sum&lt;/td&gt;&lt;td&gt;&lt;/td&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;';
  table.<b class="t01">createTBody()</b>.innerHTML = '&lt;tr&gt;&lt;td&gt;apple&lt;/td&gt;&lt;td&gt;red&lt;/td&gt;&lt;td&gt;42&lt;/td&gt;&lt;/tr&gt;&lt;tr&gt;&lt;td&gt;banana&lt;/td&gt;&lt;td&gt;yellow&lt;/td&gt;&lt;td&gt;126&lt;/td&gt;&lt;/tr&gt;';
  table.<b class="t01">createCaption()</b>.innerHTML = 'fruit_list';
  sum();
}

function deleteCaption() {
  var table = document.getElementById('fruit_list');

  table.<b class="t01">deleteCaption()</b>;
}

function sum() {
  var table = document.getElementById('fruit_list');
  var sum = 0;
  for (var i = 0; i &lt; table.rows.length; i++) {
    var target_row = table.rows[i];
    var target_cell = target_row.cells[0].innerHTML;
    if(target_cell !== 'name' &amp;&amp; target_cell !== 'sum') {
      sum = sum + parseInt(target_row.cells[2].innerHTML, 10);
    }
  }
  for (var i=0;i&lt;table.rows.length;i++) {
    if(table.rows[i].cells[0].innerHTML === 'sum') {
      table.rows[i].cells[2].innerHTML = sum;
    }
  }
}

&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="DOM参照,操作(img)">
      <pre>
<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;img id="foo" src="bar.gif" alt="baz" name="qux"&gt;

&lt;script&gt;

var img = document.getElementById('foo');

console.log(img.<b class="t01">src</b>);  <b class="t02">// 〜/bar.gif</b>
console.log(img.<b class="t01">alt</b>);  <b class="t02">// baz</b>
console.log(img.<b class="t01">name</b>);  <b class="t02">// qux</b>

&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="DOM参照,操作(attribute)">
      <pre>
<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;img src="foo" alt="bar" width="42" height="42"&gt;

&lt;script&gt;

var img = document.getElementsByTagName('IMG');

console.log(img[0].<b class="t01">getAttribute('</b>src<b class="t01">')</b>);  <b class="t02">// foo</b>
console.log(img[0].getAttribute('alt'));  <b class="t02">// bar</b>
console.log(img[0].getAttribute('width'));  <b class="t02">// 42</b>
console.log(img[0].<b class="t01">getAttributeNode('</b>src<b class="t01">')</b>);  <b class="t02">// src="baz" // Attrオブジェクト(これより下でsetした値も上書きして反映される)</b>

img[0].<b class="t01">setAttribute('</b>src<b class="t01">', '</b>baz<b class="t01">')</b>;
img[0].setAttribute('alt', 'qux');
img[0].setAttribute('width', '84');

console.log(img[0].getAttribute('src'));  <b class="t02">// baz</b>
console.log(img[0].getAttribute('alt'));  <b class="t02">// qux</b>
console.log(img[0].getAttribute('width'));  <b class="t02">// 84</b>

console.log(img[0].<b class="t01">hasAttribute('</b>src<b class="t01">')</b>);  <b class="t02">// true</b>
console.log(img[0].hasAttribute('title'));  <b class="t02">// false</b>

console.log(img[0].getAttribute('title'));  <b class="t02">// null</b>

img[0].setAttribute('title', 'quxx');
console.log(img[0].getAttribute('title'));  <b class="t02">// quxx</b>

&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="DOM参照,操作(css)">
      <pre>
// １）インラインスタイル


<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;style&gt;
p {background-color: #f00;}
&lt;/style&gt;

&lt;p&gt;foo&lt;/p&gt;


&lt;script&gt;

var p = document.getElementsByTagName('p').item(0);

p.<b class="t01">style</b>.display = 'table-cell';  <b class="t02">// ↓以下、pのインラインに設定される</b>
p.style.width = '100px';
p.style.height = '100px';
p.style.margin = '10px';
p.style.padding = '10px';
p.style.border = '1px solid #000';
p.style.textAlign = 'center';  <b class="t02">// プロパティ名にハイフンは使わない</b>
p.style.verticalAlign = 'middle';  <b class="t02">// プロパティ名にハイフンは使わない</b>

console.log(p.style);  <b class="t02">// CSSStyleDeclaration {...}</b>
console.log(p.style.display);  <b class="t02">// table-cell</b>
console.log(p.style.backgroundColor);  <b class="t02">// 空（styleではインラインのみ取得可）</b>

&lt;/script&gt;
</CopyCode>

---

// ２）計算済みスタイル


<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;style&gt;
p {background-color: #f00;}
&lt;/style&gt;

&lt;p&gt;foo&lt;/p&gt;


&lt;script&gt;

var p = document.getElementsByTagName('p').item(0);

console.log(document);  <b class="t02">// #document // HTMLDocument</b>
console.log(document.<b class="t01">defaultView</b>);  <b class="t02">// Window {...}</b>
console.log(document.defaultView.<b class="t01">getComputedStyle(</b>p<b class="t01">, null)</b>);  <b class="t02">// CSSStyleDeclaration {...}</b>
console.log(document.defaultView.getComputedStyle(p, null).backgroundColor);  <b class="t02">// rgb(255, 0, 0)　書き換え不可</b>

<b class="t02">// null の部分には、":first-letter" など疑似要素を入れることが可能</b>
<b class="t02">// ":hover" などは疑似クラスなので利用不可</b>

&lt;/script&gt;
</CopyCode>

---

// ３）スタイルシートリスト


<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;link rel="stylesheet" href="http://3300.me/top/css/3300.css"&gt;
<b class="t02">// ↑ document.styleSheets[0]</b>

&lt;style&gt;
div {padding: 30px;}
p {padding: 30px;}
span {padding: 30px; display: block;}
&lt;/style&gt;
<b class="t02">// ↑ document.styleSheets[1]</b>

&lt;div&gt;
&lt;p&gt;
&lt;span&gt;foo&lt;/span&gt;
&lt;/p&gt;
&lt;/div&gt;

&lt;script&gt;

console.log(document.<b class="t01">styleSheets</b>);  <b class="t02">// StyleSheetList</b>
console.log(document.styleSheets.length);  <b class="t02">// 2 // 読み込みcssとstyleタグの合計数</b>
console.log(document.styleSheets[0]);  <b class="t02">// CSSStyleSheet</b>
console.log(document.styleSheets[0].<b class="t01">ownerNode</b>);  <b class="t02">// &lt;link ...&gt; // HTMLLinkElement</b>
console.log(document.styleSheets[1].ownerNode);  <b class="t02">// &lt;style&gt;...&lt;/style&gt; // HTMLStyleElement</b>
console.log(document.styleSheets[0].ownerNode.nodeName);  <b class="t02">// LINK</b>
console.log(document.styleSheets[1].ownerNode.nodeName);  <b class="t02">// STYLE</b>
console.log(document.styleSheets[0].<b class="t01">disabled</b>);  <b class="t02">// false // そのstyleSheetを無効化するかどうか</b>
console.log(document.styleSheets[1].<b class="t01">cssRules</b>);  <b class="t02">// CSSRuleList</b>
console.log(document.styleSheets[1].cssRules.length);  <b class="t02">// 3 // divとpとspanで3つ</b>
console.log(document.styleSheets[1].cssRules[0]);  <b class="t02">// CSSStyleRule</b>
console.log(document.styleSheets[1].cssRules[0].<b class="t01">cssText</b>);  <b class="t02">// div { padding: 30px; }</b>
console.log(document.styleSheets[1].cssRules[0].<b class="t01">selectorText</b>);  <b class="t02">// div</b>
console.log(document.styleSheets[1].cssRules[0].<b class="t01">style</b>);  <b class="t02">// CSSStyleDeclaration</b>
console.log(document.styleSheets[1].cssRules[0].style.padding);  <b class="t02">// 30px</b>

&lt;/script&gt;

<b class="t02">// jsfiddleなどでは別のstylesheetも取得するため、正しく動かない</b>
<b class="t02">// ローカルでhtmlに貼り付け、ブラウザで確認すれば正しく動く</b>
</CopyCode>

---

// ４）スタイルシート操作


<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;input type="button" value="red" onclick="red()"&gt;
&lt;input type="button" value="green" onclick="green()"&gt;
&lt;input type="button" value="blue" onclick="blue()"&gt;

&lt;style&gt;
body {background: #fff;}
&lt;/style&gt;

&lt;script&gt;

var css = document.styleSheets[0];

function red() {
  css.<b class="t01">insertRule(</b>'body {background: #f00;}'<b class="t01">,</b> css.cssRules.length<b class="t01">)</b>;
  <b class="t02">// 第2引数は数字で、この場合 '1' になり、1行目の body {〜}が '0' にあたるので、2行目に追加される</b>
  css.<b class="t01">deleteRule(</b>0<b class="t01">)</b>;
  <b class="t02">// 1行目の body {〜} を削除する</b>
}
function green() {
  css.insertRule('body {background: #0f0;}', css.cssRules.length);
  css.deleteRule(0);
}
function blue() {
  css.insertRule('body {background: #00f;}', css.cssRules.length);
  css.deleteRule(0);
}

&lt;/script&gt;

<b class="t02">// jsfiddleなどでは別のstylesheetも取得するため、正しく動かない</b>
<b class="t02">// ローカルでhtmlに貼り付け、ブラウザで確認すれば正しく動く</b>
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="DOM参照,操作(form)">
      <pre>
<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;form action="http://3300.me"&gt;
  &lt;input type="text" value="foo"&gt;
  &lt;input type="checkbox"&gt;
  &lt;select&gt;
    &lt;option&gt;bar&lt;/option&gt;
    &lt;optgroup&gt;
    &lt;option&gt;baz&lt;/option&gt;
    &lt;option&gt;qux&lt;/option&gt;
    &lt;/optgroup&gt;
  &lt;/select&gt;
&lt;/form&gt;


&lt;script&gt;

var form_list = document.<b class="t01">forms</b>;
console.log(form_list);  <b class="t02">// [form, ...] // HTMLCollection</b>
console.log(form_list.item(0));  <b class="t02">// &lt;form ...&gt;...&lt;/form&gt; // HTMLFormElement</b>
console.log(form_list.item(0).<b class="t01">elements</b>);  <b class="t02">// [input, input, select, ...] // HTMLFormControlsCollection</b>
console.log(form_list.item(0).elements.length);  <b class="t02">// 3 // FormElementの数</b>
console.log(form_list.item(0).elements.item(0));  <b class="t02">// &lt;input ...&gt;...&lt;/input&gt; // HTMLInputElement</b>

var input = form_list.item(0).elements.item(0);
console.log(input.<b class="t01">type</b>);  <b class="t02">// text</b>
console.log(input.<b class="t01">value</b>);  <b class="t02">// foo（書き換え可）</b>
console.log(input.<b class="t01">defaultValue</b>);  <b class="t02">// foo（書き換え不可）</b>
console.log(input.<b class="t01">disabled</b>);  <b class="t02">// false</b>
console.log(input.<b class="t01">readOnly</b>);  <b class="t02">// false</b>

var check = form_list.item(0).elements.item(1);
console.log(check.<b class="t01">checked</b>);  <b class="t02">// false（書き換え可）</b>
console.log(check.<b class="t01">defaultChecked</b>);  <b class="t02">// false（書き換え不可）</b>

var select = form_list.item(0).elements.item(2);
console.log(select.<b class="t01">options</b>);  <b class="t02">// [option, option, option, ...] // HTMLOptionsCollection</b>
console.log(select.options.length);  <b class="t02">// 3 // optionをいくつ含むか</b>
console.log(select.length);  <b class="t02">// 3 // 以降、optionsを省略しても同じ結果</b>
console.log(select.item(0));  <b class="t02">// &lt;option&gt;bar&lt;/option&gt;[object HTMLOptionElement]</b>
console.log(select.item(0).value);  <b class="t02">// bar</b>
console.log(select.item(3));  <b class="t02">// null</b>
console.log(select.<b class="t01">selectedIndex</b>);  <b class="t02">// 0 // 選択されている番号。何も選択されていない場合は -1</b>

&lt;/script&gt;
</CopyCode>

---

<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;form action="http://3300.me"&gt;
  &lt;input type="button" value="append_option" onclick="appendOption()"&gt;
  &lt;input type="button" value="remove_option" onclick="removeOption()"&gt;
  &lt;select&gt;
    &lt;option&gt;foo&lt;/option&gt;
  &lt;/select&gt;
&lt;/form&gt;


&lt;script&gt;

var select = document.forms.item(0).elements.item(2);

function appendOption() {
  var option = document.createElement('option');
  option.appendChild(document.createTextNode('foo'));
  select.<b class="t01">add(</b>option<b class="t01">,</b> select.options.item(0)<b class="t01">)</b>;
}

function removeOption() {
  if (0 &lt; select.length) {
    select.<b class="t01">remove(</b>0<b class="t01">)</b>;
  } else {
    console.log('no option');
  }
}

&lt;/script&gt;
</CopyCode></pre>
    </SwitchBox>

    <SwitchBox title="イベント">
      <pre>
<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;input type="button" value="push" <b class="t01">onclick="console.log('input')"</b>&gt;
</CopyCode>

---

onclick　　　<b class="t02">// クリック時</b>
ondblclick　　　<b class="t02">// ダブルクリック時</b>
onmouseup　　　<b class="t02">// マウスボタンを上げた時</b>
onmousedown　　　<b class="t02">// マウスボタンを押した時</b>
onmousemove　　　<b class="t02">// マウスを動かしている時</b>
onmouseout　　　<b class="t02">// マウスポインタが離れた時</b>
onmouseover　　　<b class="t02">// マウスポインタが乗った時</b>
onkeyup　　　<b class="t02">// キーを上げた時</b>
onkeydown　　　<b class="t02">// キーを押した時</b>
onkeypress　　　<b class="t02">// キーを押してる時</b>

onchange　　　<b class="t02">// フォーム要素の選択、変更時</b>
onselect　　　<b class="t02">// テキスト選択時</b>
onsubmit　　　<b class="t02">// 送信時</b>
onreset　　　<b class="t02">// リセット時</b>

onblur　　　<b class="t02">// フォーカスが外れた時</b>
onfocus　　　<b class="t02">// フォーカスが当たった時</b>

onload　　　<b class="t02">// 読み込み完了時</b>
onunload　　　<b class="t02">// ウィンドウ削除時、ウィンドウ切り替え時、リロード時</b>
onabort　　　<b class="t02">// 画像読み込み中断時</b>
onerror　　　<b class="t02">// 画像読み込みエラー時</b>

<b class="t02">// など</b></pre>
    </SwitchBox>

    <SwitchBox title="イベントリスナ">
      <pre>// １）特定のノードをイベントリスナに設定する場合


<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;p id="foo"&gt;click&lt;/p&gt;  <b class="t02">// 反応する</b>
&lt;p id="bar"&gt;click&lt;/p&gt;  <b class="t02">// 反応しない</b>


&lt;script&gt;

function elTest() {
  console.log('baz');
}

var foo = document.getElementById('foo');

if(addEventListener) {
  foo.<b class="t01">addEventListener('</b>click<b class="t01">',</b> elTest<b class="t01">,</b> false<b class="t01">)</b>;  <b class="t02">// foo(特定のpタグ) をイベントリスナに設定する</b>
} else if(attachEvent) {
  foo.<b class="t01">attachEvent('on</b>click<b class="t01">',</b> elTest<b class="t01">)</b>;  <b class="t02">// IE8以前は addEventListener に未対応</b>
}

&lt;/script&gt;
</CopyCode>

---

// １−２）無名関数で反応させる場合


<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;p id="foo"&gt;click&lt;/p&gt;

&lt;script&gt;

var foo = document.getElementById('foo');

foo.addEventListener('click', <b class="t01">function() {</b>
  console.log('bar');
<b class="t01">}</b>, false);

&lt;/script&gt;
</CopyCode>

---

// ２）document全体をイベントリスナに設定し、イベントが起きた箇所で反応させる場合


<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;p id="foo"&gt;click&lt;/p&gt;  <b class="t02">// 反応する</b>
&lt;p id="bar"&gt;click&lt;/p&gt;  <b class="t02">// 反応する</b>


&lt;script&gt;

function elTest(ev) {  <b class="t02">// 引数にはイベントオブジェクトが入ってくる</b>
  if(ev.target.tagName === 'P') {  <b class="t02">// pタグ以外の箇所をクリックした時に反応しないようにする</b>
    console.log(ev);  <b class="t02">// MouseEvent {...}</b>
    console.log(ev.<b class="t01">target</b>);  <b class="t02">// &lt;p ...&gt;click&lt;/p&gt; // HTMLParagraphElement // IE8以前は srcElement</b>
    console.log(ev.target.id);  <b class="t02">// (クリックしたpタグのid)</b>
    console.log(ev.<b class="t01">currentTarget</b>);  <b class="t02">// (イベントリスナに設定された要素)</b>
  }
}

if(addEventListener) {
  document.<b class="t01">addEventListener('</b>click<b class="t01">',</b> elTest<b class="t01">,</b> false<b class="t01">)</b>;  <b class="t02">// document をイベントリスナに設定する。</b>
} else if(attachEvent) {
  document.<b class="t01">attachEvent('on</b>click<b class="t01">',</b> elTest<b class="t01">)</b>;  <b class="t02">// IE8以前は addEventListener に未対応</b>
}

&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="イベントフローの性質">
      <pre>// １-１）イベントバブリング１


<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;div <b class="t01">onclick="console.log('div')"</b> style="background: #ddd; padding: 10px;"&gt;div
&lt;p <b class="t01">onclick="console.log('p')"</b> style="background: #eee;"&gt;p click&lt;/p&gt;
&lt;/div&gt;

<b class="t02">// p -&gt; div</b>
<b class="t02">// p部分をクリックすると、同時にdiv部分もクリックしていることになるが、子ノードから先にイベントを起こす性質がある</b>
</CopyCode>

---

// １-２）イベントバブリング２


<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;div id="foo" style="background: #ccc; padding: 10px;"&gt;div
&lt;p id="bar" style="background: #ddd; padding: 10px;"&gt;p
&lt;span id="baz" style="display: block; background: #eee;"&gt;span click&lt;/span&gt;
&lt;/p&gt;
&lt;/div&gt;

&lt;script&gt;
function elTest1() {console.log('div');}
function elTest2() {console.log('p');}
function elTest3() {console.log('span');}
document.getElementById('foo').addEventListener('click', elTest1, <b class="t01">false</b>);
document.getElementById('bar').addEventListener('click', elTest2, <b class="t01">false</b>);
document.getElementById('baz').addEventListener('click', elTest3, <b class="t01">false</b>);
&lt;/script&gt;

<b class="t02">// span -&gt; p -&gt; div</b>
<b class="t02">// イベントリスナの第3引数がfalseだとバブリング（子ノードから先にイベントを起こす）</b>
</CopyCode>

---

// ２）イベントキャプチャリング


<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;div id="foo" style="background: #ccc; padding: 10px;"&gt;div
&lt;p id="bar" style="background: #ddd; padding: 10px;"&gt;p
&lt;span id="baz" style="display: block; background: #eee;"&gt;span click&lt;/span&gt;
&lt;/p&gt;
&lt;/div&gt;

&lt;script&gt;
function elTest1() {console.log('div');}
function elTest2() {console.log('p');}
function elTest3() {console.log('span');}
document.getElementById('foo').addEventListener('click', elTest1, <b class="t01">true</b>);
document.getElementById('bar').addEventListener('click', elTest2, <b class="t01">true</b>);
document.getElementById('baz').addEventListener('click', elTest3, <b class="t01">true</b>);
&lt;/script&gt;

<b class="t02">// div -&gt; p -&gt; span</b>
<b class="t02">// イベントリスナの第3引数がtrueだとキャプチャリング（親ノードから先にイベントを起こす）</b>
</CopyCode>

---

// ３）デフォルトアクションの制限


<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;a href="http://3300.me/"&gt;click&lt;/a&gt;


&lt;script&gt;
function elTest(ev) {
  if(ev.target.tagName === 'A') {
    console.log('ev');
    ev.<b class="t01">preventDefault()</b>;
  }
}
document.addEventListener('click', elTest, false);
&lt;/script&gt;

<b class="t02">// ev</b>
<b class="t02">// aタグのリンクを反応させない</b>
</CopyCode>

---

// ４）イベントフローの中断


<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;p id="foo" style="background: #ddd; padding: 10px;"&gt;p
&lt;span id="bar" style="display: block; background: #eee;"&gt;span &lt;a href="http://3300.me/"&gt;click&lt;/a&gt;&lt;/span&gt;
&lt;/p&gt;

&lt;script&gt;
function elTest1(ev) {console.log('p');}
function elTest2(ev) {console.log('span');ev.<b class="t01">stopPropagation()</b>;}
document.getElementById('foo').addEventListener('click', elTest1, <b class="t01">false</b>);
document.getElementById('bar').addEventListener('click', elTest2, <b class="t01">false</b>);
&lt;/script&gt;

<b class="t02">// span</b>
<b class="t02">// spanのイベントのあとバブリングが止まるので、pでのイベントは起こらない</b>
<b class="t02">// aのリンクは反応する</b>
</CopyCode>

---

// ５）対になるターゲット


<CopyCode>&lt;!doctype html&gt;
&lt;html style="background: #fff; padding: 15px;"&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;body style="background: #ddd; padding: 10px;"&gt;body
&lt;p style="background: #eee; padding: 10px;"&gt;p
&lt;span style="display: block; background: #ccc;"&gt;span&lt;/span&gt;
&lt;/p&gt;

&lt;script&gt;
function elTest(ev) {
console.log('target : ' + ev.<b class="t01">target</b>.tagName + '\n' + 'relatedTarget : ' + ev.<b class="t01">relatedTarget</b>.tagName);
}

document.addEventListener('mouseover', elTest, false);
&lt;/script&gt;

<b class="t02">// mouseoverしたノードがtargetになる</b>
<b class="t02">// 同時に、mouseoutしたノードが、対のrelatedTargetになる</b>

&lt;/body&gt;
&lt;/html&gt;
</CopyCode></pre>
    </SwitchBox>

    <SwitchBox title="オブジェクト指向(コンストラクタとインスタンス)">
      <pre>
<CopyCode>function cns() {
  <b class="t01">this</b>.val = "foo";
};
<b class="t02">// コンストラクタ(オブジェクトの生成元)となる関数オブジェクトcnsを定義</b>
<b class="t02">// この場合のthisは、cnsを元に生成される新たなオブジェクト(インスタンス)を参照する</b>

var ins = <b class="t01">new</b> cns(); <b class="t02">// new演算子でcnsを呼ぶと、インスタンスが生成され、それが戻り値になる</b>

console.log(ins.val); <b class="t02">// foo // cnsをモデルとして、insのプロパティvalが定義された</b>


console.log(cns); <b class="t02">// function cns() // cns は関数</b>
console.log(cns.prototype); <b class="t02">// cns {} // cns.prototype は関数cnsの雛形オブジェクト</b>
console.log(ins); <b class="t02">// cns {val: 'foo'} // ins は生成されたインスタンスオブジェクト ins {val: 'foo'}</b>
console.log(ins.__proto__); <b class="t02">// cns {} // ins.__proto__ は関数cnsの雛形オブジェクト</b>
console.log(ins.constructor); <b class="t02">// function cns() // insのコンストラクタは関数cns</b>
console.log(ins instanceof cns); <b class="t02">// true // insはcnsのインスタンス</b>
console.log(Object.getPrototypeOf(ins) === cns.prototype); <b class="t02">// true // insはcnsのprototypeオブジェクトを参照可能</b>
</CopyCode>

---

<b class="t02">// オブジェクト指向とは

・システムを部品の組み合わせで構築する
・部品を再利用することで、同処理の開発重複を防ぐ
・開発や管理の効率化、合理化が目的</b>
</pre>
    </SwitchBox>

    <SwitchBox title="オブジェクト指向(プロトタイプとObject)">
      <pre>
<CopyCode>function cns() {
  this.val = "foo";
};
var ins = new cns();
<b class="t02">// コンストラクタを定義し、インスタンスを生成</b>


console.log(cns.<b class="t01">prototype</b>); <b class="t02">// Object {constructor: function} // prototypeは、cnsが持つ雛形(生成するオブジェクトの形)</b>
console.log(ins.<b class="t01">__proto__</b>); <b class="t02">// Object {constructor: function} // __proto__は、生成元(cns)の雛形</b>
console.log(cns.prototype === ins.__proto__); <b class="t02">// true // 上記の2つは同じもの</b>
console.log(ins.prototype); <b class="t02">// undefined // insは関数オブジェクトではないので雛形を持たない</b>
console.log(cns.prototype.isPrototypeOf(ins)); <b class="t02">// true // insのプロトタイプはcns.prototype</b>


console.log(<b class="t01">Object</b>); <b class="t02">// function Object() { [native code] } // 大元のObject関数</b>
console.log(Object.prototype); <b class="t02">// Object {...} // Object // Objectが持つ雛形</b>
console.log(Object.prototype.__proto__); <b class="t02">// null // 雛形に生成元は無い</b>

console.log(ins.__proto__.__proto__); <b class="t02">// Object {...} // Object // ins.__proto__ の生成元の雛形を参照</b>
console.log(ins.__proto__.__proto__ === Object.prototype); <b class="t02">// true // ins.__proto__のモデルはObjectが持つ雛形</b>
console.log(ins.__proto__.__proto__.__proto__); <b class="t02">// null // Objectに生成元は無い</b>


// var ins = new Object();
<b class="t02">// オブジェクト定義のこの式は、Object関数をコンストラクタとしてインスタンスins(オブジェクト)を生成する、という意味</b>
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="オブジェクト指向(Functionとconstructor)">
      <pre>
<CopyCode>function cns() {
  this.val = 'foo';
};
var ins = new cns();
<b class="t02">// コンストラクタを定義し、インスタンスを生成</b>


console.log(<b class="t01">Function</b>); <b class="t02">// function function() { [native code] } // 大元のFunction関数</b>
console.log(ins.<b class="t01">constructor</b>); <b class="t02">// function cns() {this.val = 'foo';} // constructorは、生成元(cns)そのものを参照</b>
console.log(ins.constructor === cns); <b class="t02">// true // insのコンストラクタはcns</b>
console.log(cns.constructor === Function); <b class="t02">// true // cnsのコンストラクタはFunction</b>
console.log(Function.constructor === Function); <b class="t02">// true // FunctionのコンストラクタもFunction</b>
console.log(Object.constructor === Function); <b class="t02">// true // ObjectのコンストラクタもFunction</b>
console.log(Function.prototype.__proto__ === Object.prototype); <b class="t02">// true // Functionが持つ雛形は、Objectが持つ雛形から生成されている</b>

<b class="t02">// つまり、関数の形としてはObjectがFunctionをモデルとしているが、オブジェクトの形としてはFunctionがObjectをモデルとしている</b>
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="オブジェクト指向(メソッドの定義)">
      <pre>
// １）コンストラクタの中に設定

<CopyCode>function fruit(c) {
  this.color = c;
  this.talk = <b class="t03">function() {
    console.log('My color is ' + this.color + '.');
  }</b>;
}

var apple = new fruit('red'); <b class="t02">// インスタンスを生成 -> インスタンスの中にメソッドA(function() {〜})ができる</b>
var banana = new fruit('yellow'); <b class="t02">// インスタンスを生成 -> インスタンスの中にメソッドB(function() {〜})ができる</b>
var grape = new fruit('violet'); <b class="t02">// インスタンスを生成 -> インスタンスの中にメソッドC(function() {〜})ができる</b>

apple.talk(); <b class="t02">// My color is red. // メソッドAが動く</b>
banana.talk(); <b class="t02">// My color is yellow. // メソッドBが動く</b>
grape.talk(); <b class="t02">// My color is violet. // メソッドCが動く</b>

<b class="t02">// コンストラクタの中にメソッドがあると、
// インスタンス1つにつき1つのメソッドが生成される
// それぞれのメソッドは内容が同じため、メモリの無駄</b>
</CopyCode>

---

// ２）コンストラクタのプロトタイプとして設定

<CopyCode>function fruit(c) {
  this.color = c;
}
fruit.<b class="t01">prototype</b>.talk = <b class="t03">function() {
  console.log('My color is ' + this.color + '.');
}</b>;

var apple = new fruit('red'); <b class="t02">// インスタンスを生成 -> インスタンスの中にメソッドは無い</b>
var banana = new fruit('yellow'); <b class="t02">// インスタンスを生成 -> インスタンスの中にメソッドは無い</b>
var grape = new fruit('violet'); <b class="t02">// インスタンスを生成 -> インスタンスの中にメソッドは無い</b>

apple.talk(); <b class="t02">// My color is red. // コンストラクタのプロトタイプのメソッドAが動く</b>
banana.talk(); <b class="t02">// My color is yellow. // コンストラクタのプロトタイプのメソッドAが動く</b>
grape.talk(); <b class="t02">// My color is violet. // コンストラクタのプロトタイプのメソッドAが動く</b>

<b class="t02">// 参照対象のメソッドがインスタンス内に無い場合、JSは生成元であるコンストラクタのプロトタイプを参照する</b>
<b class="t02">// 上記の3つはいずれも、プロトタイプとして設定された同じメソッドが動く</b>
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="オブジェクト指向(プロトタイプチェーン)">
      <pre>
<CopyCode>var obj1 = new Object();  <b class="t02">// オブジェクトを定義</b>
obj1.val = 42;  <b class="t02">// プロパティを定義</b>

function fnc1() {};  <b class="t02">// 関数オブジェクトを定義</b>
fnc1.prototype = obj1;  <b class="t02">// fnc1のprototypeに、オブジェクトobj1を定義</b>
var obj2 = new fnc1();  <b class="t02">// fnc1をコンストラクタとして、インスタンスobj2を生成する</b>

function fnc2() {};  <b class="t02">// 関数オブジェクトを定義</b>
fnc2.prototype = obj2;  <b class="t02">// fnc2のprototypeに、オブジェクトobj2を定義</b>
var obj3 = new fnc2();  <b class="t02">// fnc2をコンストラクタとして、インスタンスobj3を生成する</b>

console.log(obj3.val);  <b class="t02">// 42</b>

<b class="t02">// １）console.log(obj3.val); -> obj3.val を参照</b>
<b class="t02">// ２）obj3.valが定義されていないので、obj3のコンストラクタであるfnc2のプロトタイプを参照</b>
<b class="t02">// ３）fnc2のプロトタイプはobj2だから、obj2.valがあるかどうかを判定</b>
<b class="t02">// ４）obj2.valが定義されていないので、obj2のコンストラクタであるfnc1のプロトタイプを参照</b>
<b class="t02">// ５）fnc1のプロトタイプはobj1だから、obj1.valがあるかどうかを判定</b>
<b class="t02">// ６）obj1.valが定義されているので、obj1.val = 42 を返す</b>


console.log(obj3.hasOwnProperty('val')); <b class="t02">// false</b>
console.log(obj2.hasOwnProperty('val')); <b class="t02">// false</b>
console.log(obj1.hasOwnProperty('val')); <b class="t02">// true // オブジェクトがプロパティを直接持っていればtrue</b>

<b class="t02">// hasOwnPropertyは、そのオブジェクト自体の中のプロパティやメソッドの有無を参照</b>


console.log(obj3); <b class="t02">// fnc2 {...}</b>
console.log(obj3.__proto__ === fnc2.prototype); <b class="t02">// true</b>
console.log(obj2.__proto__ === fnc1.prototype); <b class="t02">// true</b>
console.log(obj1.__proto__ === Object.prototype); <b class="t02">// true</b>
console.log(obj3.__proto__.__proto__.__proto__ === Object.prototype); <b class="t02">// true</b>

console.log(obj3.constructor); <b class="t02">// function Object() { [native code] }</b>
console.log(obj3.constructor === fnc2); <b class="t02">// false</b>
console.log(obj3.constructor === fnc1); <b class="t02">// false</b>
console.log(obj3.constructor === Object); <b class="t02">// true</b>

<b class="t02">// 便宜上、「obj3のコンストラクタはfnc2」という言い回しをしているが、
// 厳密には「全てのインスタンスのconstructorはObject」</b>


console.log(Object.prototype); <b class="t02">// Object {...}</b>
console.log(Object.prototype.__proto__); <b class="t02">// null</b>

<b class="t02">// そして、Object.prototype がプロトタイプチェーンの終着点となる</b>
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="オブジェクト指向(継承)">
      <pre>
<CopyCode><b class="t02">// 継承元コンストラクタ cns1</b>
function cns1(t) {
  this.val = t;
}
cns1.prototype.mtd = function() {
  console.log(this.val);
};

<b class="t02">// 継承先コンストラクタ cns2</b>
function cns2() {
  cns1.<b class="t01">apply(this, arguments)</b>; <b class="t02">// 継承の定義(applyでcns2のthisをcns1のthisに設定することで、cns2~cns1間でのthisや引数の流用が可能になる)</b>
}
cns2.<b class="t01">prototype</b> = new cns1(); <b class="t02">// プロトタイプチェーンの定義(cns2のprototypeにcns1のインスタンスを設定することで、cns2にプロパティやメソッドがない場合cns1を参照するようになる)</b>


var ins1 = new cns1('ins1_text'); <b class="t02">// cns1のインスタンスins1を定義</b>
var ins2 = new cns2('ins2_text'); <b class="t02">// cns2のインスタンスins2を定義</b>

ins1.mtd(); <b class="t02">// ins1_text</b>
ins2.mtd(); <b class="t02">// ins2_text</b>
</CopyCode>

---

<CopyCode><b class="t02">// 継承元コンストラクタ</b>
function cns1(t) {
  this.val = t;
}
cns1.prototype.mtd = function() {
  console.log(this.val);
};

<b class="t02">// 継承先コンストラクタ</b>
function cns2() {
  <b class="t02">// cns1.apply(this, arguments); -> 継承の定義をはずすと、</b>
}
cns2.prototype = new cns1();


var ins1 = new cns1('ins1_text');
var ins2 = new cns2('ins2_text');

ins1.mtd(); <b class="t02">// ins1_text</b>
ins2.mtd(); <b class="t02">// undefined -> 引数を引き継げない</b>
</CopyCode>

---

<CopyCode><b class="t02">// 継承元コンストラクタ</b>
function cns1(t) {
  this.val = t;
}
cns1.prototype.mtd = function() {
  console.log(this.val);
};

<b class="t02">// 継承先コンストラクタ</b>
function cns2() {
  cns1.apply(this, arguments);
}
<b class="t02">// cns2.prototype = new cns1(); -> プロトタイプチェーンの定義をはずすと、</b>


var ins1 = new cns1('ins1_text');
var ins2 = new cns2('ins2_text');

ins1.mtd(); <b class="t02">// ins1_text</b>
ins2.mtd(); <b class="t02">// Uncaught TypeError: ins2.mtd is not a function -> メソッドを引き継げない</b>
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="オブジェクト指向(クロージャ)">
      <pre>
<CopyCode><b class="t02">// outer scope</b>
var closure = function() {
  var v = 0;
  <b class="t02">// inner scope</b>
  return function() {
    v++;
    return v;
  };
};

var run = closure();

console.log(run()); <b class="t02">// 1</b>
console.log(run()); <b class="t02">// 2</b>
console.log(run()); <b class="t02">// 3</b>
console.log(run()); <b class="t02">// 4</b>

<b class="t02">// a) run = closure(); // global =&gt; outer =&gt; inner のスコープチェーンが定義される
// b) console.log(run());
// c) innerに入る
// d) v++; // inner内にvが無いので1つ外のouterのv( = 0)を参照し、+1、 その参照経路がinner内で定義される
// e) return v; // inner
// f) return v &lt;= function(){v++;return v;}; // outer
// g) 1回目は1を出力
// h) run();
// i) innerに入る
// j) v++; // inner内にd)で定義されたvを参照し、+1
// k) 以降、e)~j)を繰り返す</b>
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="オブジェクト指向(ゲッタとセッタ)">
      <pre><CopyCode>var obj = {
  foo: 0,
  <b class="t01">get</b> mtd () { return this.foo; }, <b class="t03">// 参照されるとゲッタが動く</b>
  <b class="t01">set</b> mtd (v) { this.foo = v; }, <b class="t04">// 代入されるとセッタが動く</b>
};

console.log(<b class="t03">obj.mtd</b>); <b class="t02">// 0</b>
<b class="t04">obj.mtd = 1;</b>
console.log(<b class="t03">obj.mtd</b>); <b class="t02">// 1</b>

obj.foo = 'str';
console.log(<b class="t03">obj.mtd</b>); <b class="t02">// str // 直接fooにアクセスすると上書きできてしまう</b>
</CopyCode>

---

<CopyCode>function cns() { <b class="t02">// クロージャ構成にして外からfooへのアクセスを制限</b>
  var foo = 0;
  return {
    get mtd () { return foo; },
    set mtd (v) { foo = v; },
  };
};
var ins = new cns();

console.log(ins.mtd); <b class="t02">// 0</b>
ins.mtd = 1;
console.log(ins.mtd); <b class="t02">// 1</b>
</CopyCode>

---

<CopyCode>function cns() { <b class="t02">// クロージャ構成で外からfooへのアクセスを制限</b>
  var foo = false;
  return {
    get mtd () { return foo; },
    set mtd (v) {
      if (v === true || v === false) { <b class="t02">// さらにセット可能の条件を設定</b>
        foo = v;
      };
    },
  };
};
var ins = new cns();


console.log(ins.mtd); <b class="t02">// false // 初期値</b>

ins.mtd = true; <b class="t02">// 条件を満たし上書き可</b>
console.log(ins.mtd); <b class="t02">// true</b>

ins.mtd = 42; <b class="t02">// 条件を満たさず上書き不可</b>
console.log(ins.mtd); <b class="t02">// true</b>

foo = 42; <b class="t02">// fooへのアクセス制限により上書き不可</b>
console.log(ins.mtd); <b class="t02">// true</b>

ins.mtd = false; <b class="t02">// 条件を満たし上書き可</b>
console.log(ins.mtd); <b class="t02">// false</b>
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="オブジェクト指向(名前空間)">
      <pre>
// 書式1 - 直書き

<CopyCode><b class="t02">// 処理1</b>
var val1 = {
  'v1': 'foo',
  'v2': 'bar',
};
var fnc1 = function() {
  console.log(val1.v1); <b class="t02">// foo</b>
};
fnc1();

<b class="t02">// 処理2</b>
var val2 = {
  'v3': 'baz',
  'v4': 'qux',
};
var fnc2 = function() {
  console.log(val2.v4); <b class="t02">// qux</b>
};
fnc2();

<b class="t02">// グローバル変数が多く、他と競合が発生しやすい</b>
</CopyCode>



---

// 書式2 - 全体を関数化

<CopyCode><b class="t01">var fncAll = function() {</b>
  <b class="t02">// 処理1</b>
  var val1 = {
    'v1': 'foo',
    'v2': 'bar',
  };
  var fnc1 = function() {
    console.log(val1.v1); <b class="t02">// foo</b>
  };
  fnc1();

  <b class="t02">// 処理2</b>
  var val2 = {
    'v3': 'baz',
    'v4': 'qux',
  };
  var fnc2 = function() {
    console.log(val2.v4); <b class="t02">// qux</b>
  };
  fnc2();
<b class="t01">};</b>

<b class="t01">fncAll();</b>

<b class="t02">// fncAllのみがグローバル変数となる</b>
</CopyCode>



---

// 書式3 - 即時関数化

<CopyCode><b class="t01">(</b>function() {
  <b class="t02">// 処理1</b>
  var val1 = {
    'v1': 'foo',
    'v2': 'bar',
  };
  var fnc1 = function() {
    console.log(val1.v1); <b class="t02">// foo</b>
  };
  fnc1();

  <b class="t02">// 処理2</b>
  var val2 = {
    'v3': 'baz',
    'v4': 'qux',
  };
  var fnc2 = function() {
    console.log(val2.v4); <b class="t02">// qux</b>
  };
  fnc2();
}<b class="t01">)();</b>

<b class="t02">// グローバル変数を無くせる</b>
<b class="t02">// 処理ごとに分離されてなく、拡張時の影響範囲が把握しにくい</b>
</CopyCode>



---

// 書式4 - 処理のオブジェクト化

<CopyCode>(function() {
  <b class="t02">// 処理1</b>
  <b class="t01">var obj1 = {</b>
    v<b class="t01">:</b> {
      v1: 'foo',
      v2: 'bar',
    }<b class="t01">,</b>
    run<b class="t01">:</b> function() {
      console.log(<b class="t03">this</b>.v.v1); <b class="t02">// foo</b>
    }<b class="t01">,</b>
  <b class="t01">}</b>
  obj1.run();

  <b class="t02">// 処理2</b>
  <b class="t01">var obj2 = {</b>
    v<b class="t01">:</b> {
      v3: 'baz',
      v4: 'qux',
    }<b class="t01">,</b>
    run<b class="t01">:</b> function() {
      console.log(<b class="t03">this</b>.v.v4); <b class="t02">// qux</b>
    }<b class="t01">,</b>
  <b class="t01">}</b>
  obj2.run();
})();
</CopyCode>


<b class="t02">// 以上のように処理を分離することはできるが、</b>
<b class="t02">// 以下のように処理1と処理2を別のファイルなどに分ける場合、互いのデータはとれなくなる</b>
<b class="t02">// 複数のオブジェクトの間で変数の重複はなくなる</b>

<CopyCode><b class="t02">// 処理1</b>
(function() {
  var obj1 = {
    v: {
      v1: 'foo',
      v2: 'bar',
    },
    run: function() {
      console.log(this.v.v1 + obj1.v.v1); <b class="t02">// foofoo</b>
    },
  }
  obj1.run();
})();

<b class="t02">// 処理2</b>
(function() {
  var obj2 = {
    v: {
      v3: 'baz',
      v4: 'qux',
    },
    run: function() {
      console.log(this.v.v4 + <b class="t03">obj1.v.v1</b>); <b class="t02">// Uncaught ReferenceError: obj1 is not defined</b>
    }
  }
  obj2.run();
})();

<b class="t02">// 即時関数をやめれば互いのデータをとれるが、グローバル変数が2つできてしまう</b>
</CopyCode>



---

// 書式5 - 名前空間の設定

<CopyCode><b class="t02">// グローバル設定</b>
<b class="t01">var NAMESPACE = {};</b>

<b class="t02">// 処理1</b>
NAMESPACE.obj1 = {
  v: {
    v1: 'foo',
    v2: 'bar',
  },
  run: function() {
    console.log(this.v.v1);
  },
}

<b class="t02">// 処理2</b>
NAMESPACE.obj2 = {
  v: {
    v3: 'baz',
    v4: 'qux',
  },
  run: function() {
    console.log(this.v.v4 + <b class="t01">NAMESPACE.obj1.v.v1</b>);
  },
}

<b class="t02">// オブジェクト参照</b>
NAMESPACE.obj1.run(); <b class="t02">// foo</b>
NAMESPACE.obj2.run(); <b class="t02">// quxfoo</b>


<b class="t02">// 処理1と処理2が別ファイルであっても、シングルページで両方読み込めば、互いのデータをやり取りできる</b>
<b class="t02">// しかし、グローバル設定は全てのjsの先頭でないといけない</b>
<b class="t02">// 複数ファイルをconcatする場合、グローバル設定より処理が先に来てしまうという懸念がある</b>
</CopyCode>



---

// 書式6 - 名前空間の設定(より汎用性の高い構成)

<CopyCode><b class="t02">// 処理1</b>
<b class="t01">var NAMESPACE = NAMESPACE || {};</b> <b class="t02">// グローバル設定</b>
NAMESPACE.obj1 = {
  v: {
    v1: 'foo',
    v2: 'bar',
  },
  run: function() {
    console.log(this.v.v1);
  },
}

<b class="t02">// 処理2</b>
<b class="t01">var NAMESPACE = NAMESPACE || {};</b> <b class="t02">// グローバル設定</b>
NAMESPACE.obj2 = {
  v: {
    v3: 'baz',
    v4: 'qux',
  },
  run: function() {
    console.log(this.v.v4 + <b class="t01">NAMESPACE.obj1.v.v1</b>);
  },
}

<b class="t02">// オブジェクト参照</b>
NAMESPACE.obj1.run(); <b class="t02">// foo</b>
NAMESPACE.obj2.run(); <b class="t02">// quxfoo</b>


<b class="t02">// NAMESPACEがundefineなら新規オブジェクトを定義し、既存のNAMESPACEがあるならそれを代入する</b>
<b class="t02">// concatの際、グローバル設定より処理が先に来てしまうという懸念はない</b>
<b class="t02">// 処理1と処理2の順番が入れ変わったとしても正常に動く</b>
<b class="t02">// 処理ごとにファイルを分割できる</b>
</CopyCode>



---

// 書式7 - 名前空間のオブジェクトでまとめる

<CopyCode>
var NAMESPACE = <b class="t01">{</b>

  <b class="t05">init: function() {</b>
    this.obj1.run(); <b class="t02">// thisはNAMESPACE</b>
    this.obj2.run(); <b class="t02">// thisはNAMESPACE</b>
  <b class="t05">}</b>,

  <b class="t01">obj1: {</b>
    v: {
      v1: 'foo',
      v2: 'bar',
    },
    run: function() {
      console.log(this.v.v1); <b class="t02">// thisはobj1</b>
    },
  <b class="t01">}</b>,

  <b class="t01">obj2: {</b>
    v: {
      v3: 'baz',
      v4: 'qux'
    },
    run: function() {
      console.log(this.v.v4 + NAMESPACE.obj1.v.v1); <b class="t02">// thisはobj2</b>
    },
  <b class="t01">}</b>,
<b class="t01">}</b>

<b class="t02">// 実行</b>
NAMESPACE.<b class="t05">init()</b>; <b class="t02">// foo -&gt; quxfoo</b>


<b class="t02">// 実行の表記は固定で、NAMESPACEオブジェクトのinitメソッド内で各fncを制御できる</b>
<b class="t02">// ファイルを分けることは難しい</b>
</CopyCode>



---

// 書式8 - 書式6にinitを追加したタイプ

<CopyCode><b class="t01">var NAMESPACE = NAMESPACE || {};</b>
<b class="t05">NAMESPACE.init = function() {</b>
  this.obj1.run();
  this.obj2.run();
<b class="t05">}</b>

<b class="t01">var NAMESPACE = NAMESPACE || {};
NAMESPACE.</b>obj1 <b class="t01">= {</b>
  v: {
    v1: 'foo',
    v2: 'bar',
  }<b class="t01">,</b>
  run: function() {
    console.log(this.v.v1);
  }<b class="t01">,</b>
<b class="t01">}

var NAMESPACE = NAMESPACE || {};
NAMESPACE.</b>obj2 <b class="t01">= {</b>
  v: {
    v3: 'baz',
    v4: 'qux',
  }<b class="t01">,</b>
  run: function() {
    console.log(this.v.v4 + NAMESPACE.obj1.v.v1);
  }<b class="t01">,</b>
<b class="t01">}</b>

<b class="t02">// 実行</b>
NAMESPACE.<b class="t05">init()</b>; <b class="t02">// foo -&gt; quxfoo</b>


<b class="t02">// 実行表記を固定できる</b>
<b class="t02">// ファイルを分けても、initのファイルから各処理を制御できる</b>
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="JSON">
      <pre>
<CopyCode>var jsonStrings = `{ "key1": "var1", "key2": "var2", "key3": "var3" }`;
var jsonObj = JSON.parse(jsonStrings);
console.log(jsonObj);
console.log(JSON.stringify(jsonObj));
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="HTTP通信">
      <pre>
<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;request_a.html&lt;/title&gt;
&lt;meta charset="utf-8"&gt;

&lt;h1&gt;This page is request_a.html&lt;/h1&gt;
&lt;h2&gt;request: get.html&lt;/h2&gt;
&lt;button onclick="sendReq()"&gt;send request&lt;/button&gt;
&lt;h3&gt;↓Status&lt;/h3&gt;
&lt;pre&gt;&lt;/pre&gt;
&lt;pre&gt;&lt;/pre&gt;
&lt;h3&gt;↓Response Headers&lt;/h3&gt;
&lt;pre&gt;&lt;/pre&gt;
&lt;h3&gt;↓Response&lt;/h3&gt;
&lt;pre&gt;&lt;/pre&gt;

&lt;script&gt;

function sendReq() {
  var foo = new <b class="t01">XMLHttpRequest()</b>;  <b class="t02">// １）インスタンス生成</b>
  foo.<b class="t01">open(</b>'GET', 'get.html'<b class="t01">)</b>;  <b class="t02">// ２）リクエスト設定 // 第3引数はデフォルトでtrue(非同期)</b>
  foo.<b class="t01">send()</b>;  <b class="t02">// ３）リクエスト送信</b>

  <b class="t02">// ４）サーバにリクエストが届く</b>
  <b class="t02">// ５）サーバがリクエストを解釈する</b>
  <b class="t02">// ６）サーバがレスポンスを送信する</b>

  foo.addEventListener('<b class="t01">loadend</b>', function() {
    var pre = document.getElementsByTagName('pre');
    pre[0].textContent = foo.<b class="t01">status</b>;
    pre[1].textContent = foo.<b class="t01">statusText</b>;
    pre[2].textContent = foo.<b class="t01">getAllResponseHeaders()</b>;
    pre[3].textContent = foo.<b class="t01">response</b>;
  });

  <b class="t02">// ７）レスポンス受信完了のタイミングで値を取得し、preに格納</b>
}

&lt;/script&gt;
</CopyCode>


---

// XMLHttpRequest() のイベント

<b class="t01">loadend</b>   <b class="t02">リクエスト終了(成功・失敗に関わらず)</b>
<b class="t01">loadstart</b>   <b class="t02">リクエスト開始</b>
<b class="t01">load</b>  <b class="t02">リクエスト成功</b>
<b class="t01">progress</b>   <b class="t02">データ受信時(連続的に取得)</b>
<b class="t01">abort</b>  <b class="t02">リクエスト中断</b>
<b class="t01">error</b>  <b class="t02">リクエスト失敗</b>
<b class="t01">timeout</b>  <b class="t02">制限時間を超過</b>
</pre>
    </SwitchBox>

    <SwitchBox title="HTTP通信(JSON)">
      <pre>// JSONファイルのデータを出力

<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;get_json.html&lt;/title&gt;
&lt;meta charset="utf-8"&gt;

&lt;h1&gt;This page is get_json.html&lt;/h1&gt;
&lt;h2&gt;request: fruit_list.json&lt;/h2&gt;
&lt;button onclick="getJson()"&gt;get json&lt;/button&gt;

&lt;table border="1"&gt;
&lt;thead&gt;
&lt;tr&gt;
&lt;th&gt;name&lt;/th&gt;
&lt;th&gt;color&lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;
&lt;tbody&gt;
&lt;/tbody&gt;
&lt;/table&gt;

&lt;script&gt;

function getJson() {
  var foo = new <b class="t01">XMLHttpRequest()</b>;
  foo.<b class="t01">open(</b>'GET', 'fruit_list.json'<b class="t01">)</b>;
  foo.<b class="t01">send()</b>;

  foo.addEventListener('<b class="t01">loadend</b>', function() {
    var data = <b class="t01">JSON.parse(</b>foo<b class="t01">.responseText);</b>

    for (i = 0; data.fruit_list[i]; i++) {
      var tbody = document.getElementsByTagName('tbody')[0];
      var tr  = document.createElement('tr');
      var name  = document.createElement('td');
      var color = document.createElement('td');
      name.appendChild(document.createTextNode(data<b class="t01">.fruit_list[i].name</b>));
      color.appendChild(document.createTextNode(data<b class="t01">.fruit_list[i].color</b>));
      tr.appendChild(name);
      tr.appendChild(color);
      tbody.appendChild(tr);
    }
  });
}

&lt;/script&gt;
</CopyCode>


---

// クロージャを使って3つずつ出力

<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;get_json_closer.html&lt;/title&gt;
&lt;meta charset="utf-8"&gt;

&lt;h1&gt;This page is get_json_closer.html&lt;/h1&gt;
&lt;h2&gt;request: fruit_list.json&lt;/h2&gt;
&lt;button onclick="getJsonThreeFruits()"&gt;get json 3 fruits&lt;/button&gt;

&lt;table border="1"&gt;
&lt;thead&gt;
&lt;tr&gt;
&lt;th&gt;name&lt;/th&gt;
&lt;th&gt;color&lt;/th&gt;
&lt;/tr&gt;
&lt;/thead&gt;
&lt;tbody&gt;
&lt;/tbody&gt;
&lt;/table&gt;

&lt;script&gt;

<b class="t02">// requestのsendと、trのappend</b>
function sendReq(count) {
  var req = new <b class="t01">XMLHttpRequest()</b>;
  req.<b class="t01">open(</b>'GET', 'fruit_list.json'<b class="t01">)</b>;
  req.<b class="t01">send()</b>;

  req.addEventListener('<b class="t01">loadend</b>', function() {
    var data = <b class="t01">JSON.parse(</b>req<b class="t01">.responseText);</b>

    for (i = 0; i &lt; 3; i++) {
      var j = (count * 3) + i;  <b class="t02">// 参照するデータの番号調整</b>

      if(data.fruit_list[j]) {  <b class="t02">// データが存在すれば実行</b>
        var tbody = document.getElementsByTagName('tbody')[0];
        var tr  = document.createElement('tr');
        var name  = document.createElement('td');
        var color = document.createElement('td');
        name.appendChild(document.createTextNode(data<b class="t01">.fruit_list[j].name</b>));
        color.appendChild(document.createTextNode(data<b class="t01">.fruit_list[j].color</b>));
        tr.appendChild(name);
        tr.appendChild(color);
        tbody.appendChild(tr);
      }
    }
  });
}

<b class="t02">// クロージャ</b>
function getJson() {
  var count = 0;
  return function() {
    sendReq(count);
    count++;
  }
}

<b class="t02">// インスタンス生成</b>
var getJsonThreeFruits = new getJson();

&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <p>---------------------------------------------------------------</p>

    <SwitchBox title="let">
      <pre>// block level only

<CopyCode>if (true) {
  <b class="t03">var</b> foo = 42;
}
console.log(foo); <b class="t02">// 42</b>

if (true) {
  <b class="t01">let</b> bar = 42;
}
console.log(bar); <b class="t02">// bar is not defined</b>
</CopyCode>

---

// instead of IIFE

<CopyCode><b class="t01">{
  let</b> foo = 42;
<b class="t01">}</b>
console.log(foo); <b class="t02">// foo is not defined</b>
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="const">
      <pre>// value(cannot be assigned)

<CopyCode><b class="t01">const</b> foo = 42;
foo = 84; <b class="t02">// Assignment to constant variable.</b>
</CopyCode>

---

// array

<CopyCode><b class="t01">const</b> foo = [42, 84, 126];

foo[0] = 168;
console.log(foo); <b class="t02">// [168, 84, 126]</b>

foo = []; <b class="t02">// Assignment to constant variable.</b>
</CopyCode>

---

// object

<CopyCode><b class="t01">const</b> foo = {
  bar: 42,
  baz: 84,
  qux: 126,
};
foo.bar = 168;
console.log(foo.bar); <b class="t02">// 168</b>

foo = {}; <b class="t02">// Assignment to constant variable.</b>
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="template literal">
      <pre>
<CopyCode>let foo = <b class="t01">`</b>abc
def<b class="t01">`</b>;

console.log(foo);
<b class="t02">// abc
// def</b>
</CopyCode>

---

<CopyCode>let foo = '42';

console.log(<b class="t01">`</b>84<b class="t03">${</b>foo<b class="t03">}</b>126<b class="t01">`</b>); <b class="t02">// 8442126</b>
</CopyCode>

---

// tagged templates

<CopyCode>const var1 = 'var1';
const var2 = 'var2';
const <b class="t03">fnc</b> = (strings, ...values) =&gt; {
  console.log(strings); <b class="t02">// ["str1\", "str2", "str3", raw: Array(3)]</b>
  console.log(strings[0]); <b class="t02">// str1\</b>
  console.log(strings[1]); <b class="t02">// str2</b>
  console.log(strings[2]); <b class="t02">// str3</b>
  console.log(strings.raw); <b class="t02">// ["str1\\", "str2", "str3"]</b>
  console.log(strings.raw[0]); <b class="t02">// str1\\</b>
  console.log(strings.raw[1]); <b class="t02">// str2</b>
  console.log(strings.raw[2]); <b class="t02">// str3</b>
  console.log(values); <b class="t02">// ["var1", "var2"]</b>
  console.log(values[0]); <b class="t02">// var1</b>
  console.log(values[1]); <b class="t02">// var2</b>
}
<b class="t03">fnc</b><b class="t01">`</b><b class="t04">str1\\${var1}str2${var2}str3</b><b class="t01">`</b>;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="symbol">
      <pre>
<CopyCode>const foo = <b class="t01">Symbol(</b>'42'<b class="t01">)</b>;
const bar = <b class="t01">Symbol(</b>'42'<b class="t01">)</b>;
console.log(typeof foo); <b class="t02">// symbol</b>
console.log(foo === bar); <b class="t02">// false // unique value</b>
console.log(typeof !!foo); <b class="t02">// boolean // convert to boolean</b>
console.log(typeof new Object(bar)); <b class="t02">// object // convert to object</b>
</CopyCode>

---

<CopyCode>const foo = <b class="t01">Symbol(</b>'42'<b class="t01">)</b>;
const bar = <b class="t01">Symbol(</b>'42'<b class="t01">)</b>;
console.log(typeof foo.toString()); <b class="t02">// string // string型に変換可能</b>
console.log(typeof (bar + '')); <b class="t02">// Cannot convert a Symbol value to a string // 暗黙的な変換は不可</b>
</CopyCode>

---

<CopyCode>const foo = <b class="t01">Symbol(</b>'42'<b class="t01">)</b>;
console.log(typeof Number(foo)); <b class="t02">// Cannot convert a Symbol value to a number // number型に変換不可</b>
</CopyCode>

---

// 定数として利用

<CopyCode>const WINDOWS_OS = <b class="t01">Symbol()</b>;
const MAC_OS = <b class="t01">Symbol()</b>;
console.log(WINDOWS_OS === MAC_OS); <b class="t02">// false</b>
</CopyCode>

---

// added method

<CopyCode>
const addedMethod = <b class="t01">Symbol()</b>;

Array.prototype[addedMethod] = () =&gt; {
  console.log('run addedMethod');
};

const arr = [1, 2, 3];
arr[addedMethod]();
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="destructuring assignment">
      <pre>
<CopyCode>const <b class="t01">[foo, bar, baz]</b> = [42, 84];
console.log(foo); <b class="t02">// 42</b>
console.log(bar); <b class="t02">// 84</b>
console.log(baz); <b class="t02">// undefined</b>
</CopyCode>

---

<CopyCode>const [foo, bar, <b class="t01">...baz</b>] = [42, 84, 126, 168, 210];
console.log(foo); <b class="t02">// 42</b>
console.log(bar); <b class="t02">// 84</b>
console.log(baz); <b class="t02">// [126, 168, 210]</b>
console.log(baz[0]); <b class="t02">// 126</b>
console.log(typeof foo); <b class="t02">// number</b>
console.log(typeof baz); <b class="t02">// object</b>
</CopyCode>

---

<CopyCode>const <b class="t01">{foo, bar}</b> = {foo: '42', bar: '84'};
console.log(foo); <b class="t02">// 42</b>
</CopyCode>

---

<CopyCode>const {foo: <b class="t01">x</b>, bar} = {foo: '42', bar: '84'};
console.log(x); <b class="t02">// 42</b>
console.log(bar); <b class="t02">// 84</b>
console.log(foo); <b class="t02">// foo is not defined</b>
</CopyCode>

---

<CopyCode>const {foo = <b class="t01">'default'</b>, bar} = {bar: '84'};
console.log(foo); <b class="t02">// default</b>
console.log(bar); <b class="t02">// 84</b>
</CopyCode>

---

<CopyCode>function foo() {
  const bar = 'bar_r';
  const baz = 'baz_r';
  return <b class="t03">[bar, baz]</b>;
}
const [qux, quxx] = <b class="t01">foo()</b>;
console.log(qux); <b class="t02">// bar_r</b>
console.log(quxx); <b class="t02">// baz_r</b>
</CopyCode>

---

<CopyCode>let foo = '42';
let bar = '84';
<b class="t01">[foo, bar] = [bar, foo]</b>;
console.log(foo); <b class="t02">// 84</b>
console.log(bar); <b class="t02">// 42</b>
</CopyCode>

---

<CopyCode>const obj = {
  key1: 'val1',
  key2: 'val2',
  key3: 'val3',
};

const <b class="t01">{ key1, key2, key3, }</b> = <b class="t03">obj</b>;

console.log(key1);
console.log(key2);
console.log(key3);
</CopyCode>

---

<CopyCode>function foo(<b class="t03">{v1 = 0, v2 = 0, v3 = 0}</b>) {
  return v1 + v2 + v3;
}
console.log(foo(<b class="t01">{v1: 42, v2: 84}</b>)); <b class="t02">// 126</b>
</CopyCode>

---

<CopyCode>const data1 = {
  v1: 42,
  v2: 84,
};
const data2 = {
  v1: 126,
  v2: 168,
};

function getV1(<b class="t03">{v1}</b>) {
  console.log(v1);
}
function getV2(<b class="t03">{v2}</b>) {
  console.log(v2);
}

getV1(<b class="t01">data1</b>); <b class="t02">// 42</b>
getV1(<b class="t01">data2</b>); <b class="t02">// 126</b>
getV2(<b class="t01">data1</b>); <b class="t02">// 84</b>
getV2(<b class="t01">data2</b>); <b class="t02">// 168</b>
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="spread syntax">
      <pre>
<CopyCode>console.log(Math.max(42, 84, 126)); <b class="t02">// 126</b>
console.log(Math.max([42, 84, 126])); <b class="t02">// NaN</b>
console.log(Math.max.apply(null, [42, 84, 126])); <b class="t02">// 126 // es5</b>
console.log(Math.max(<b class="t01">...[42, 84, 126]</b>)); <b class="t02">// 126 // es6</b>
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="for...of">
      <pre>// array

<CopyCode>const data = [42, 84, 126];
Array.prototype.foo = function() {};
<b class="t01">for</b> (const v <b class="t01">of</b> data) {
  console.log(v); <b class="t02">// 42, 84, 126</b>
}
<b class="t03">for</b> (const v <b class="t03">in</b> data) {
  console.log(v); <b class="t02">// 0, 1, 2, foo</b>
}
</CopyCode>

---

// string

<CopyCode>const data = 'abcdef';
<b class="t01">for</b> (const v <b class="t01">of</b> data) {
  console.log(v); <b class="t02">// a, b, c, d, e, f</b>
}
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="function">
      <pre>// default value

<CopyCode>function foo(v <b class="t01">= 'default'</b>) {
  console.log(v);
}
foo('bar'); <b class="t02">// bar</b>
foo(); <b class="t02">// default</b>
</CopyCode>

---

// variable length argument

<CopyCode>function sum(<b class="t01">...args</b>) {
  let result = 0;
  for (const v of args) {
    result += v;
  }
  return result;
}
console.log(sum(42, 84, 126)); <b class="t02">// 252</b>
console.log(sum(42, 84, 126, 168)); <b class="t02">// 420</b>
console.log(sum(...[42, 84, 126, 168])); <b class="t02">// 420</b>
console.log(sum([42, 84, 126, 168])); <b class="t02">// 042, 84, 126, 168</b>
console.log(sum()); <b class="t02">// 0</b>
</CopyCode>

---

// Arrow Function 1

<CopyCode>const double1 = <b class="t03">function</b>(v) <b class="t03">{</b>
  <b class="t03">return</b> 2 * v;
<b class="t03">};</b>
console.log(double1(42)); <b class="t02">// 84</b>


const double2 = (v) <b class="t01">=&gt;</b> 2 * v;
console.log(double2(42)); <b class="t02">// 84</b>
</CopyCode>

---

// Arrow Function 2

<CopyCode>const sum1 = <b class="t03">function(...args)</b> {
  let result = 0;
  for (const v of args) {
    result += v;
  }
  return result;
};
console.log(sum1(42, 84)); <b class="t02">// 126</b>


const sum2 = <b class="t01">(...args) =&gt;</b> {
  let result = 0;
  for (const v of args) {
    result += v;
  }
  return result;
};
console.log(sum2(42, 84)); <b class="t02">// 126</b>
</CopyCode>

---

// Arrow Function 3 (fixed this)

<CopyCode>const obj1 = {
  val: 'foo',
  mtd: function() {
    console.log(this); <b class="t02">// Object {val: "foo"}</b>

    const <b class="t03">_this = this;</b>
    const fnc = <b class="t03">function() {</b>
      console.log(<b class="t03">_this</b>); <b class="t02">// Object {val: "foo"}</b>
    <b class="t03">};</b>
    fnc(); <b class="t02">// function execution</b>
  },
};
obj1.mtd(); <b class="t02">// method execution</b>


const obj2 = {
  val: 'foo',
  mtd() {
    console.log(this); <b class="t02">// Object {val: "foo"}</b>

    const fnc = <b class="t01">() =&gt;</b> {
      console.log(<b class="t01">this</b>); <b class="t02">// Object {val: "foo"}</b>
    };
    fnc(); <b class="t02">// function execution</b>
  },
};
obj2.mtd(); <b class="t02">// method execution</b>
</CopyCode>

---

// shortening method

<CopyCode>const obj = {
  mtd1: () =&gt; {
    return 'mtd1';
  },
  <b class="t01">mtd2 () {</b>
    return 'mtd2';
  <b class="t01">}</b>,
};
console.log(obj.mtd1()); // mtd1
console.log(obj.mtd2()); // mtd2
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="object">
      <pre>
// es6 value definition

<CopyCode>const foo1 = 'bar1';
const foo2 = 'bar2';
const foo3 = 'bar3';
const obj = {
  foo1,
  foo2,
  foo3,
};
console.log(obj);
</CopyCode>


// es5

<CopyCode>const obj = {};
obj.foo1 = 'bar1';
obj.foo2 = 'bar2';
obj.foo3 = 'bar3';
console.log(obj);
</CopyCode>

---

// es6 function definition

<CopyCode>const obj = {
  fnc1 () {},
  fnc2 () {},
};
console.log(obj);
</CopyCode>


// es5

<CopyCode>const obj = {
  fnc1: function () {},
  fnc2: function () {},
};
console.log(obj);
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="class">
      <pre>
<b class="t02">// es6</b>

<CopyCode><b class="t01">class</b> Player {
  <b class="t03">constructor</b>(name, gender, age) {
    <b class="t05">this</b>.v1 = name;
    <b class="t05">this</b>.v2 = gender;
    <b class="t05">this</b>.v3 = age;
  }
  talk() {
    return 'My name is ' + this.v1 + '.\nI\'m ' + this.v2 + ' and ' + this.v3 + ' years old.';
  }
  attack() {
    return this.v1 + ' attacked.';
  }
}

const player1 = <b class="t04">new</b> Player('Taro', 'male', 22);
const player2 = <b class="t04">new</b> Player('Hana', 'female', 27);

console.log(player1.talk());
console.log(player2.talk());
console.log(player1.attack());
console.log(player2.attack());

<b class="t02">// const Player = class {
//  ...
// }
//
// なども可</b>
</CopyCode>

---

<b class="t02">// es5</b>

<CopyCode>function Player(name, gender, age) {
  this.v1 = name;
  this.v2 = gender;
  this.v3 = age;
}
Player.prototype = {
  talk: function() {
    return 'My name is ' + this.v1 + '.\nI\'m ' + this.v2 + ' and ' + this.v3 + ' years old.';
  },
  attack: function() {
    return this.v1 + ' attacked.';
  }
}

var player1 = new Player('Taro', 'male', 22);
var player2 = new Player('Hana', 'female', 27);

console.log(player1.talk());
console.log(player2.talk());
console.log(player1.attack());
console.log(player2.attack());
</CopyCode>

---

<b class="t02">// constructorは初期化時に実行される
// constructorも関数、ゆえに引数も使える</b>

<CopyCode>
class Player {
  constructor() {
    console.log('test');
  }
}

new Player();
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="class(extends)">
      <pre><CopyCode><b class="t01">class</b> Parent {
  <b class="t03">constructor</b>(...arg) {
    console.log('in Parent ', ...arg);
  }
  mtd() {
    console.log('mtd');
  }
}

<b class="t01">class</b> Child <b class="t05">extends</b> Parent {
  <b class="t03">constructor</b>(...arg) {
    <b class="t06">super</b>(...arg);  <b class="t02">// super calls parent constructor</b>
    console.log('in Child ', ...arg);
  }
}

const ins = <b class="t04">new</b> Child('var1', 'var2');
ins.mtd();
</CopyCode>

---

<CopyCode>class Father {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`My name is ${this.name}. ${this.age} years old.`);
  }
}

class Child extends Father {
  constructor(name, age) {
    super(name, age);
  }
  talk() {
    console.log(`My father's name is ${this.name}.`);
  }
}

const far = new Father('Tom', '42');
const chi = new Child('Tom', '42');
far.talk();
chi.talk();
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="class(static method)">
      <pre>
<CopyCode>class Player {
  <b class="t01">static</b> talk(name, gender, age) {
    return 'My name is ' + name + '.\nI\'m ' + gender + ' and ' + age + ' years old.';
  }
}

console.log(Player.talk('Taro', 'male', 22));
console.log(Player.talk('Hana', 'female', 27));

<b class="t02">// Methods not reflected in the instance</b>

const ins = new Player();
console.log(ins);
console.log(ins.talk('Taro', 'male', 22));
<b class="t02">// ins.talk is not a function</b>
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="class(set, get)">
      <pre>
<CopyCode>class Player {
  <b class="t01">set</b> val(value) {
    this._val = value;
  }

  <b class="t01">get</b> val() {
    return this._val;
  }
}

const ins = new Player();

ins.val = 42;

console.log(ins.val);
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="iterator">
      <pre>
<CopyCode>const arr = [1, 2, 3];

const iterator = arr<b class="t01">[Symbol.iterator]()</b>;

const val1 = iterator.<b class="t03">next()</b>;
console.log(val1.<b class="t03">value</b>);
console.log(val1.<b class="t03">done</b>);

const val2 = iterator.<b class="t03">next()</b>;
console.log(val2.<b class="t03">value</b>);
console.log(val2.<b class="t03">done</b>);

const val3 = iterator.<b class="t03">next()</b>;
console.log(val3.<b class="t03">value</b>);
console.log(val3.<b class="t03">done</b>);

const val4 = iterator.<b class="t03">next()</b>;
console.log(val4.<b class="t03">value</b>);
console.log(val4.<b class="t03">done</b>);
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="generator">
      <pre>
<CopyCode><b class="t01">function*</b> generator<b class="t01">() {</b>
  <b class="t04">yield</b> 1;
  <b class="t04">yield</b> 2;
  <b class="t04">yield</b> 3;
<b class="t01">}</b>

const iterator = generator();

console.log(iterator.<b class="t03">next().value</b>);
console.log(iterator.<b class="t03">next().value</b>);
console.log(iterator.<b class="t03">next().value</b>);
console.log(iterator.<b class="t03">next().done</b>);
</CopyCode>

---

<CopyCode><b class="t01">function*</b> generator<b class="t01">() {</b>
  <b class="t04">yield</b> 1;
  <b class="t04">yield</b> 2;
  <b class="t04">yield</b> 3;
<b class="t01">}</b>

const iterator = generator();

for (let value of iterator) {
  console.log(value);
}
</CopyCode>

---

<CopyCode><b class="t01">function*</b> generator<b class="t01">() {</b>
  console.log('test1');
  <b class="t04">yield</b> 1;
  console.log('test2');
  <b class="t04">yield</b> 2;
  console.log('test3');
  <b class="t04">yield</b> 3;
<b class="t01">}</b>

const iterator = generator();

const id = setInterval(() =&gt; {
  const it = iterator.<b class="t03">next()</b>;
  console.log(it.<b class="t03">value</b>);

  if (it.<b class="t03">done</b> === true) {
    clearInterval(id);
  }
}, 1000);
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="modules">
      <pre><CopyCode>&lt;!doctype html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;script <b class="t01">type="module"</b>&gt;<b class="t04">console.log('2');</b>&lt;/script&gt;

&lt;/head&gt;
&lt;body&gt;

&lt;script&gt;<b class="t04">console.log('1');</b>&lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;</CopyCode>

---

// alerts.js

export function bringAlert(alt) {
  alert(alt);
}

// html

<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;script <b class="t01">type="module"</b>&gt;
  <b class="t03">import</b> {bringAlert} <b class="t03">from</b> './alerts.js';
  bringAlert('test');
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="module.exports">
      <pre>// fnc1.js

<b class="t01">module.exports = function</b> fnc1<b class="t01">() {
  </b>console.log('a');<b class="t01">
};</b>
<b class="t02">// or</b>
<b class="t01">module.exports = function() {
  </b>console.log('b');<b class="t01">
};</b>
<b class="t02">// or</b>
<b class="t01">module.exports = () => {
  </b>console.log('c');<b class="t01">
};</b>

---

// main.js

<b class="t03">const</b> fnc1 <b class="t03">= require('</b>./fnc/fnc1<b class="t03">');</b>
<b class="t02">// or</b>
<b class="t03">import</b> fnc1 <b class="t03">from '</b>./fnc/fnc1<b class="t03">';</b>

fnc1();
</pre>
    </SwitchBox>

    <SwitchBox title="export default">
      <pre>// typeFunction.js

<b class="t01">export default () => {
  </b>console.log('a');<b class="t01">
};</b>

---

// typeObject.js

<b class="t01">export default</b> <b class="t01">{
  </b>item1: 'a',<b class="t01">
  </b>item2: 'b',<b class="t01">
};</b>

---

// typeClass.js

<b class="t01">export default class {</b>
  constructor(name, gender, age) {
    this.v1 = name;
    this.v2 = gender;
    this.v3 = age;
  }
  talk() {
    return 'My name is ' + this.v1 + '.\nI\'m ' + this.v2 + ' and ' + this.v3 + ' years old.';
  }
  attack() {
    return this.v1 + ' attacked.';
  }
<b class="t01">}</b>

---

// main.js

<b class="t03">import </b>typeFunction<b class="t03"> from '</b>./fnc/typeFunction<b class="t03">';</b>
typeFunction();

<b class="t03">import </b>typeObject<b class="t03"> from '</b>./fnc/typeObject<b class="t03">';</b>
console.log(typeObject);

<b class="t03">import </b>TypeClass<b class="t03"> from '</b>./fnc/typeClass<b class="t03">';</b>
const ins = new TypeClass('Taro', 'male', 22);
console.log(ins.talk());
console.log(ins.attack());
</pre>
    </SwitchBox>

    <SwitchBox title="export const, class">
      <pre>
// typeFunction.js

<b class="t01">export const</b> fnc <b class="t01">= () =&gt; {</b>
  console.log('a')
<b class="t01">};</b>

---

// typeObject.js

<b class="t01">export const</b> obj <b class="t01">= {</b>
  item1: 'a',
  item2: 'b',
<b class="t01">};</b>

---

// typeClass.js

<b class="t01">export class</b> Cls <b class="t01">{</b>
  constructor(name, gender, age) {
    this.v1 = name;
    this.v2 = gender;
    this.v3 = age;
  }
  talk() {
    return 'My name is ' + this.v1 + '.\nI\'m ' + this.v2 + ' and ' + this.v3 + ' years old.';
  }
  attack() {
    return this.v1 + ' attacked.';
  }
<b class="t01">};</b>

---

// main.js

<b class="t03">import {</b>fnc<b class="t03">} from '</b>./fnc/typeFunction<b class="t03">';</b>
fnc();

<b class="t03">import {</b>obj<b class="t03">} from '</b>./fnc/typeObject<b class="t03">';</b>
console.log(obj);

<b class="t03">import {</b>Cls<b class="t03">} from '</b>./fnc/typeClass<b class="t03">';</b>
const ins = new Cls('Taro', 'male', 22);
console.log(ins.talk());
console.log(ins.attack());
</pre>
    </SwitchBox>

    <SwitchBox title="promise">
      <pre><CopyCode>const <b class="t03">promise</b> = <b class="t01">new Promise((<b class="t05">resolve</b>) =&gt; {</b>
  setTimeout(() =&gt; {
    <b class="t05">resolve()</b>;
  }, 2000);
});

<b class="t03">promise</b>.<b class="t01">then(() =&gt; {</b>
  console.log('then');
<b class="t01">});</b>

console.log('run');
</CopyCode>

---

<CopyCode>const foo = (point) =&gt; {
  return <b class="t01">new Promise((<b class="t05">resolve</b>, <b class="t04">reject</b>) =&gt; {</b>
    if (point &gt; 0) {
      <b class="t05">resolve(</b>point<b class="t05">)</b>;
    } else {
      <b class="t04">reject()</b>;
    }
  <b class="t01">})</b>;
};

<b class="t02">// foo().then(func()).catch(func()).finally(func()); の形</b>
foo(50).<b class="t01">then(</b><b class="t05">(point) =&gt; {
  console.log(point + ' points get. Great.')
}</b><b class="t01">)</b>.<b class="t01">catch(</b><b class="t04">() =&gt; {
  console.log('There is no score.')
}</b><b class="t01">)</b>.<b class="t01">finally(</b><b class="t06">() =&gt; {
  console.log('Done.')
}</b><b class="t06">)</b>;

<b class="t02">// foo().then(func(), func()).finally(func()); の形</b>
foo(50).<b class="t01">then(</b><b class="t05">(point) =&gt; {
  console.log(point + ' points get. Great.')
}</b><b class="t01">,</b><b class="t04"> () =&gt; {
  console.log('There is no score.')
}</b><b class="t01">)</b>.<b class="t01">finally(</b><b class="t06">() =&gt; {
  console.log('Done.')
}</b><b class="t06">)</b>;

<b class="t03">console.log('1');</b> <b class="t02">// sync</b>
</CopyCode>

---

// syntax suger (resolve)

<CopyCode>const foo = (point) =&gt; {
  return <b class="t05">Promise.resolve(</b>point<b class="t05">)</b>;
  <b class="t02">// same as below
  // return new Promise((resolve) => {
  //   resolve(point);
  // });</b>
};

foo(50).then((point) =&gt; {
  console.log(point + ' points get. Great.')
});
</CopyCode>

---

// syntax suger (reject)

<CopyCode>const foo = () =&gt; {
  return <b class="t04">Promise.reject(</b>new Error('err')<b class="t04">)</b>;
};

foo(50).catch((err) =&gt; {
  console.log(err)
});
</CopyCode>

---

// promises chain

<CopyCode>Promise.resolve(1)
  .then(v =&gt; {
    console.log(v);
    <b class="t01">return</b> v * 2;
  })
  .then(v =&gt; {
    console.log(v);
    <b class="t01">return</b> v * 2;
  })
  .then(v =&gt; {
    console.log(v);
  });

  <b class="t02">// can take over the value</b>
</CopyCode>

---

// all

<CopyCode>const arrFnc = [];
for (let i = 0; i &lt; 5; i++) {
  const fnc = (resolve) =&gt; {
    console.log(`fnc ${i} start`, new Date().toLocaleTimeString());
    setTimeout(() =&gt; {
      console.log(`fnc ${i} finish`, new Date().toLocaleTimeString());
      resolve();
    }, 2000 * Math.random());
  };
  arrFnc.push(fnc)
}

console.log(arrFnc);

const arrPromise = arrFnc.map((fnc) =&gt; <b class="t03">new Promise(</b>fnc<b class="t03">)</b>);

console.log(arrPromise);

<b class="t01">Promise.all(</b>arrPromise<b class="t01">).then(() =&gt; {</b>
  console.log('finish');
<b class="t01">})</b>;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="async">
      <pre>// resolve (form 1)

<CopyCode>const foo = <b class="t01">async</b> () =&gt; {
  <b class="t01">return</b> '2';
}

foo().<b class="t05">then(v =&gt; {</b>
  console.log(v);
<b class="t05">})</b>;

console.log('1'); <b class="t02">// sync</b>
</CopyCode>

---

// resolve (form 2)

<CopyCode><b class="t01">async function</b> foo () {
  <b class="t01">return</b> '2';
}

foo().<b class="t05">then(v =&gt; {</b>
  console.log(v);
<b class="t05">})</b>;

console.log('1'); <b class="t02">// sync</b>
</CopyCode>

---

// reject

<CopyCode>const foo = <b class="t01">async</b> () =&gt; {
  <b class="t01">return Promise.reject(new Error(</b>'err'<b class="t01">))</b>;
}

foo().<b class="t04">catch(err =&gt; {</b>
  console.log(err);
<b class="t04">})</b>;
</CopyCode>

---

// throw

<CopyCode>const foo = <b class="t01">async</b> () =&gt; {
  <b class="t01">throw new Error(</b>'err'<b class="t01">)</b>;
}

foo().<b class="t04">catch(err =&gt; {</b>
  console.log(err);
<b class="t04">})</b>;
</CopyCode>

---

// await

<CopyCode>const ins = () =&gt; {
  return new Promise((resolve) =&gt; {
    console.log('1');
    setTimeout(() =&gt; {
      resolve();
    }, 1000);
  });
}
const main = async () =&gt; {
  <b class="t01">await</b> ins().then(() =&gt; {
    console.log('2');
  });
  <b class="t02">// await stops the subsequent processing until the execution of the promise instance.</b>
  <b class="t02">// await can only be used inside an async function.</b>
  <b class="t02">// if await is removed, the execution order becomes 1=&gt;3=&gt;2.</b>
  console.log('3');
}
main();
</CopyCode>

---

// serial processing

<CopyCode>run();

async function run() {
  await new Promise((resolve) =&gt; {
    setTimeout(() =&gt; {
      console.log('1', new Date().toLocaleTimeString());
      resolve();
    }, 2000);
  });

  await new Promise((resolve) =&gt; {
    setTimeout(() =&gt; {
      console.log('2', new Date().toLocaleTimeString());
      resolve();
    }, 2000);
  });
}
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="fetch">
      <pre>// text

async function fnc() {
  const file = await <b class="t01">fetch(</b>'sample.txt'<b class="t01">)</b>;
  console.log(file);
  const text = await file.<b class="t03">text()</b>;
  console.log(text);
};

fnc();


---

// json

async function fnc() {
  const file = await <b class="t01">fetch(</b>'sample.json'<b class="t01">)</b>;
  console.log(file);
  const json = await file.<b class="t03">json()</b>;
  console.log(json);
};

fnc();


---

// xml

async function fnc() {
  const file = await <b class="t01">fetch(</b>'sample.xml'<b class="t01">)</b>;
  console.log(file);
  const text = await file.<b class="t03">text()</b>;
  console.log(text);
  const xml = <b class="t04">new DOMParser().parseFromString(text, 'application/xml')</b>;
  console.log(xml);
};

fnc();


---

// jpg

async function fnc() {
  const file = await <b class="t01">fetch(</b>'sample.jpg'<b class="t01">)</b>;
  console.log(file);
  const blob = await file.<b class="t03">blob()</b>;
  console.log(blob);
  const image = new Image();
  image.src = URL.createObjectURL(blob);
  document.querySelector('body').appendChild(image);
};

fnc();

</pre>
    </SwitchBox>

    <SwitchBox title="setInterval">
      <pre>
<CopyCode>let num = 0;

const count = () =&gt; {
  console.log(num++);
}

const <b class="t04">id</b> = <b class="t01">setInterval(() =&gt; {</b>
  count();
  if (num &gt;= 10) {
    <b class="t03">clearInterval(</b><b class="t04">id</b><b class="t03">)</b>;
  }
<b class="t01">},</b> 500<b class="t01">);</b>
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="cookie">
      <pre>
<CopyCode><b class="t02">// set</b>
<b class="t01">document.cookie</b> = 'data1=foo1';
<b class="t01">document.cookie</b> = 'data2=foo2';
<b class="t01">document.cookie</b> = 'data3=' + encodeURIComponent('foo3 foo3');
<b class="t01">document.cookie</b> = 'data4=foo4';
console.log(<b class="t01">document.cookie</b>);

<b class="t02">// parse</b>
const parse = function() {
  const r = document.cookie.split(';');
  let cookies = {};
  for (let i = 0; i &lt; r.length; i++) {
    cookies[r[i].split('=')[0].trim()] = r[i].split('=')[1];
  }
  console.log(cookies);
}
parse();

<b class="t02">// delete</b>
document.cookie = 'data4=foo4; max-age=2'; // Until 2 second
console.log(document.cookie);
window.setTimeout(function() {
  console.log(document.cookie);
  parse();
}, 2000);

<b class="t02">// expires</b>
let date = new Date('2068/7/31 14:14');
document.cookie = `data5=foo5; expires=${date.toUTCString()}`; // Until the date

<b class="t02">// search</b>
console.log(document.cookie.indexOf('data2'));
console.log(document.cookie.indexOf('foo3'));
console.log(document.cookie.indexOf('nothing'));
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="localStrage">
      <pre>
<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;localStorage&lt;/title&gt;

&lt;div id="output"&gt;&lt;/div&gt;
&lt;input type="button" value="reload" onclick="location.reload()"&gt;
&lt;input type="button" value="clear" onclick="clearCount()"&gt;

&lt;script&gt;
let view = <b class="t01">localStorage.getItem(</b>'view_count'<b class="t01">)</b>;
const output = document.querySelector('#output');

const writeCount = (times) =&gt; {
  output.innerHTML = document.createTextNode(times).nodeValue;
}

const clearCount = () =&gt; {
  <b class="t01">localStorage.clear()</b>;
  writeCount('view: ' + 0 + ' times.');
}

if ('localStorage' in window) {
  view = !view ? 0 : Number(view) + 1;
  <b class="t01">localStorage.setItem(</b>'view_count', view<b class="t01">)</b>;
  writeCount('view: ' + view + ' times.');
} else {
  writeCount('LocalStorage is not supported on this browser.');
}
&lt;/script&gt;

<b class="t02">// その他、length, key(n), removeItem など</b>
</CopyCode>

---

</pre>
    </SwitchBox>

    <SwitchBox title="random">
      <pre>
<CopyCode>console.log(<b class="t01">Math.random()</b>);

console.log(new Uint16Array(10));
console.log(crypto.getRandomValues(new Uint16Array(10)));
console.log(crypto.getRandomValues(new Uint16Array(10)).join(''));
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="trigonometric function">
      <pre>
<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1"&gt;
&lt;style&gt;
.point {
  content: '';
  width: 20px;
  height: 20px;
  position: absolute;
  background: #f00;
  border-radius: 10px;
}
&lt;/style&gt;

&lt;div class="point"&gt;&lt;/div&gt;

&lt;script&gt;
const point = document.querySelector('.point');
const radius = 100;
let degree = 0;

const draw = () =&gt; {
  const radian = (degree * <b class="t01">Math.PI</b>) / 180;
  const posX = window.innerWidth / 2 + radius * <b class="t01">Math.cos(</b>radian<b class="t01">)</b>;
  const posY = window.innerHeight / 2 + radius * <b class="t01">Math.sin(</b>radian<b class="t01">)</b>;
  point.style.left = `${posX}px`;
  point.style.top = `${posY}px`;
  degree += 1;
}

const id = setInterval(() =&gt; {
  draw();
}, 10);
&lt;/script&gt;
</CopyCode>

---

</pre>
    </SwitchBox>

    <SwitchBox title="converting url parameters">
      <pre>
<CopyCode>const url = 'http://3300.me?a=111&amp;b=222&amp;c=333';
const obj = {};

const arr = url.split(/&amp;|\?/).filter((value) =&gt; { return value.includes('='); });

arr.forEach((parameter) =&gt; {
  const parameterList = parameter.split('=');
  const key = parameterList[0];
  const value = decodeURIComponent(parameterList[1]);
  obj[key] = value;
});

console.log(arr);
console.log(obj);
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="padStart">
      <pre>
<CopyCode>console.log('1'.<b class="t01">padStart(</b>2, '0'<b class="t01">)</b>);
console.log('11'.<b class="t01">padStart(</b>2, '0'<b class="t01">)</b>);
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="encode/decode">
      <pre>
<CopyCode>console.log(<b class="t01">encodeURI(</b>'https://3300.me/日本語.html'<b class="t01">)</b>);
console.log(<b class="t01">encodeURIComponent(</b>'https://3300.me/日本語.html'<b class="t01">)</b>);

console.log(<b class="t01">decodeURI(</b>'https://3300.me/%E6%97%A5%E6%9C%AC%E8%AA%9E.html'<b class="t01">)</b>);
console.log(<b class="t01">decodeURIComponent(</b>'https%3A%2F%2F3300.me%2F%E6%97%A5%E6%9C%AC%E8%AA%9E.html'<b class="t01">)</b>);
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="reduce">
      <pre>
<CopyCode>const numbers = [1, 2, 3, 4, 5];

const result = numbers.<b class="t01">reduce((accumlate, num, i) =&gt; {
  console.log('accumlate: ' + accumlate);
  console.log('num: ' + num);
  console.log('i: ' + i);
  console.log('-----');
  return accumlate + num;
});</b>

console.log('result: ' + result);
</CopyCode>

---

<CopyCode>const makeHtml = (strings, ...values) =&gt; {
  return strings.<b class="t01">reduce((accumlate, str, i) =&gt; {</b>
    console.log('accumlate: ' + accumlate);
    console.log('values[i - 1]: ' + values[i - 1]);
    console.log('str: ' + str);
    console.log('i: ' + i);
    console.log('-----');
    return accumlate + values[i - 1] + str;
  <b class="t01">})</b>;
};

const val1 = 'val1';
const val2 = 'val2';
const result = makeHtml`&lt;ul&gt;
  &lt;li&gt;${val1}&lt;/li&gt;
  &lt;li&gt;${val2}&lt;/li&gt;
&lt;/ul&gt;`;

console.log('result: ' + result);
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="assign">
      <pre>
<CopyCode>const obj1 = {
  key1: 'val1',
  key2: 'val2',
  key3: 'val3',
}

const obj2 = obj1;
const obj3 = <b class="t01">Object.assign({},</b> obj1<b class="t01">)</b>; <b class="t02">// same 'const obj3 = {...obj1};'</b>

obj1['key1'] = 'rewrite';

console.log(obj2);
console.log(obj3);
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="split assignment">
      <pre>
<CopyCode>const obj1 = {
  key1: 'val1',
  key2: 'val2',
  key3: 'val3',
}

const <b class="t01">{</b> key1, key2, key3 <b class="t01">} =</b> obj1;

console.log(key1);
console.log(key2);
console.log(key3);
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="freeze">
      <pre>
<CopyCode>const obj1 = {
  key1: 'val1',
  key2: 'val2',
  key3: 'val3',
}

obj1.key1 = 'rewrite1';
console.log(obj1);
console.log(<b class="t03">Object.isFrozen(</b>obj1<b class="t03">)</b>);

<b class="t01">Object.freeze(</b>obj1<b class="t01">)</b>;

obj1.key1 = 'rewrite2';
console.log(obj1);
console.log(<b class="t03">Object.isFrozen(</b>obj1<b class="t03">)</b>);

<b class="t02">// Object.seal(obj1);
// Object.preventExtensions(obj1);</b>
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="date">
      <pre>
<CopyCode>const date = <b class="t01">new Date()</b>;

const hour = date.<b class="t03">getHours()</b>;
const minutes = date.<b class="t03">getMinutes()</b>;
const seconds = date.<b class="t03">getSeconds()</b>;
console.log(`${hour}時${minutes}分${seconds}秒`);

console.log(date.<b class="t03">toLocaleDateString()</b>);
console.log(date.<b class="t03">toLocaleTimeString()</b>);

console.log(Date.<b class="t04">parse(</b>'2010/01/01'<b class="t04">)</b>);
console.log(Date.<b class="t04">now(</b>'2010/01/01'<b class="t04">)</b>);
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="online">
      <pre>
<CopyCode>const isOnline = navigator.<b class="t01">onLine</b>;

if (isOnline) {
  console.log('online');
} else {
  console.log('offline');
}
</CopyCode>

---

<CopyCode>window.addEventListener('online', () =&gt; {
  console.log('onLine');
});

window.addEventListener('offline', () =&gt; {
  console.log('offLine');
});
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="dispatchEvent">
      <pre>
<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;button class="trigger"&gt;click&lt;/button&gt;

&lt;script&gt;
const btn = document.querySelector('.trigger');

btn.addEventListener('click', () =&gt; {
  console.log('clicked');
});

setTimeout(() =&gt; {
  btn.<b class="t01">dispatchEvent(<b class="t03">new Event('click')</b>)</b>;
}, 3000);
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="insertAdjacentHTML">
      <pre>
<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;style&gt;
.target {
  border: #000 1px solid;
}
&lt;/style&gt;

&lt;div class="target"&gt;target&lt;/div&gt;

&lt;script&gt;
const target = document.querySelector('.target');

target.<b class="t01">insertAdjacentHTML(<b class="t03">'beforebegin'</b></b>, `&lt;div&gt;beforebegin&lt;/div&gt;`<b class="t01">)</b>;
target.<b class="t01">insertAdjacentHTML(<b class="t03">'afterbegin'</b></b>, `&lt;div&gt;afterbegin&lt;/div&gt;`<b class="t01">)</b>;
target.<b class="t01">insertAdjacentHTML(<b class="t03">'beforeend'</b></b>, `&lt;div&gt;beforeend&lt;/div&gt;`<b class="t01">)</b>;
target.<b class="t01">insertAdjacentHTML(<b class="t03">'afterend'</b></b>, `&lt;div&gt;afterend&lt;/div&gt;`<b class="t01">)</b>;
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="FileReader">
      <pre>// text

<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;input type="file" class="file" accept=".txt"&gt;
&lt;p class="text"&gt;&lt;/p&gt;

&lt;script&gt;
const input = document.querySelector('.file');
const text = document.querySelector('.text');

input.addEventListener('input', (ev) =&gt; {
  const file = ev.target.files[0];
  const reader = <b class="t01">new FileReader()</b>;

  reader.addEventListener('load', () =&gt; {
    text.textContent = reader.result;
  });

  reader.readAsText(file);
});
&lt;/script&gt;
</CopyCode>

---

// img

<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;input type="file" class="file" accept=".png, .jpg"&gt;
&lt;p class="img"&gt;&lt;img style="width: 100%;"&gt;&lt;/p&gt;

&lt;script&gt;
const input = document.querySelector('.file');
const img = document.querySelector('.img img');

input.addEventListener('input', (ev) =&gt; {
  const file = ev.target.files[0];
  const reader = <b class="t01">new FileReader()</b>;

  reader.addEventListener('load', () =&gt; {
    img.src = reader.result;
  });

  reader.readAsDataURL(file);
});
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="slider">
      <pre><CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;input type="range" class="slider" min="0" max="100" value="50"&gt;
&lt;p class="value"&gt;50&lt;/p&gt;

&lt;script&gt;
const slider = document.querySelector('.slider');
const score = document.querySelector('.value');

slider.addEventListener('input', handleChange);

function handleChange(ev) {
  const value = ev.target.value;
  score.innerHTML = value;
};
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="transitionend">
      <pre><CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;div class="square"&gt;&lt;/div&gt;

&lt;style&gt;
.square {
  width: 100px;
  height: 100px;
  background: #f00;
  transition: all 2s;
}
.square:hover {
  width: 300px;
}
&lt;/style&gt;

&lt;script&gt;
const sq = document.querySelector('.square');

sq.addEventListener(<b class="t01">'transitionend'</b>, changeColor);

function changeColor(ev) {
  ev.target.style.backgroundColor = '#0f0';
};
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="animation events">
      <pre><CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;div class="square"&gt;&lt;/div&gt;

&lt;style&gt;
.square {
  width: 100px;
  height: 100px;
  background: #f00;
}
.square:hover {
  animation: infinite 1s rotate;
  <b class="t02">// animation: 1s rotate; // no iteration</b>
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
&lt;/style&gt;

&lt;script&gt;
const sq = document.querySelector('.square');

sq.addEventListener(<b class="t01">'animationstart'</b>, changeColor1);
sq.addEventListener(<b class="t01">'animationiteration'</b>, changeColor2);
sq.addEventListener(<b class="t01">'animationend'</b>, changeColor3);

function changeColor1(ev) {
  ev.target.style.backgroundColor = '#0f0';
};
function changeColor2(ev) {
  ev.target.style.backgroundColor = '#00f';
};
function changeColor3(ev) {
  ev.target.style.backgroundColor = '#000';
};
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="map">
      <pre>
<CopyCode>const map = <b class="t01">new Map()</b>;

map.<b class="t03">set(</b>'key1', 'val1'<b class="t03">)</b>;
map.<b class="t03">set(</b>'key2', 'val2'<b class="t03">)</b>;

console.log(map);
console.log(map.<b class="t03">size</b>);
console.log(map.<b class="t03">get(</b>'key1'<b class="t03">)</b>);
console.log(map.<b class="t03">has(</b>'key1'<b class="t03">)</b>);
console.log(map.<b class="t03">keys()</b>);
console.log(map.<b class="t03">values()</b>);
console.log(map.<b class="t03">entries()</b>);
map.forEach((value, key) =&gt; {
  console.log(value, key);
});
map.<b class="t03">delete(</b>'key1'<b class="t03">)</b>;
console.log(map);
map.<b class="t03">clear()</b>;
console.log(map);
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="set">
      <pre>
<CopyCode>const set = <b class="t01">new Set()</b>;

set.<b class="t03">add(</b>'val1'<b class="t03">)</b>;
set.<b class="t03">add(</b>'val2'<b class="t03">)</b>;
set.<b class="t03">add(</b>'val2'<b class="t03">)</b>;
set.<b class="t03">add(</b>'val2'<b class="t03">)</b>;
set.<b class="t03">add(</b>'val3'<b class="t03">)</b>;

console.log(set);
console.log(set.<b class="t03">size</b>);
console.log(set.<b class="t03">has(</b>'val1'<b class="t03">)</b>);
console.log(set.<b class="t03">values()</b>);
set.forEach((value) =&gt; {
  console.log(value);
});
set.<b class="t03">delete(</b>'val1'<b class="t03">)</b>;
console.log(set);
set.<b class="t03">clear()</b>;
console.log(set);
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="layerX/layerY">
      <pre><CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;div&gt;x: &lt;span class="x"&gt;&lt;/span&gt;&lt;/div&gt;
&lt;div&gt;y: &lt;span class="y"&gt;&lt;/span&gt;&lt;/div&gt;

&lt;script&gt;
const x = document.querySelector('.x');
const y = document.querySelector('.y');

window.addEventListener('mousemove', (ev) =&gt; {
  x.innerHTML = ev.<b class="t01">layerX</b>;
  y.innerHTML = ev.<b class="t01">layerY</b>;
});
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="blob">
      <pre>
<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;div class="result"&gt;&lt;/div&gt;

&lt;script&gt;
const blob = <b class="t01">new Blob(</b>['abcde', 'fghij'], { type: "text/plain" }<b class="t01">)</b>;
const a = document.createElement('a');
a.href = <b class="t03">URL.createObjectURL(</b>blob<b class="t03">)</b>;
a.download = 'textfile.txt';
a.innerText = 'download';
const result = document.querySelector('.result');
result.appendChild(a);
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="svg">
      <pre>// draw

<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;svg viewBox="0 0 200 200" width="200" height="200" class="mySvg"&gt;&lt;/svg&gt;

&lt;script&gt;
const myCircle = document.<b class="t01">createElementNS(</b>'http://www.w3.org/2000/svg', 'circle'<b class="t01">)</b>;

myCircle.setAttribute('cx', '100');
myCircle.setAttribute('cy', '100');
myCircle.setAttribute('r', '100');
myCircle.setAttribute('fill', '#ff0000');
myCircle.setAttribute('fill-opacity', '0.5');

const mySvg = document.querySelector('.mySvg');

mySvg.appendChild(myCircle);
&lt;/script&gt;
</CopyCode>

---

// animation

<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;

&lt;svg viewBox="0 0 200 200" width="200" height="200"&gt;
  &lt;circle class="myCircle" cx="100" cy="100" r="100" fill="#ff0000"&gt;&lt;/circle&gt;
&lt;/svg&gt;

&lt;script&gt;
const myCircle = document.querySelector('.myCircle');
let time = 0;

<b class="t01">const animate = () =&gt; {</b>
  time += 0.5;

  myCircle.style.fill = `hsl(0, 100%, ${time}%)`;

  if (time &lt; 50) {
    <b class="t03">requestAnimationFrame(<b class="t01">animate</b>)</b>;
  }
<b class="t01">}</b>;

animate();
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="scroll">
      <pre>
<CopyCode>&lt;div style="width:9999px;height:9999px;"&gt;&lt;span style="position:fixed;"&gt;&lt;/span&gt;&lt;/div&gt;

&lt;script&gt;
const span = document.querySelector('span');
window.addEventListener(<b class="t01">'scroll'</b>, () =&gt; {
  span.innerHTML = window.<b class="t03">scrollX</b> + '&lt;br&gt;' + window.<b class="t03">scrollY</b>;
});
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="selectstart">
      <pre>
<CopyCode>&lt;div class="foo"&gt;focus&lt;/div&gt;

&lt;script&gt;
document.querySelector('.foo').addEventListener(<b class="t01">'selectstart'</b>, () =&gt; {
  console.log('selected text');
});
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="touch">
      <pre>
<CopyCode>&lt;meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1"&gt;
&lt;div style="width:100%;height:100%;"&gt;&lt;/div&gt;

&lt;script&gt;
document.querySelector('div').addEventListener(<b class="t01">'touchstart'</b>, (ev) =&gt; {
  ev.target.innerHTML = 'touchstart';
});
document.querySelector('div').addEventListener(<b class="t01">'touchmove'</b>, (ev) =&gt; {
  ev.target.innerHTML = 'touchmove';
});
document.querySelector('div').addEventListener(<b class="t01">'touchend'</b>, (ev) =&gt; {
  ev.target.innerHTML = 'touchend';
});
&lt;/script&gt;
</CopyCode>

---

<CopyCode>&lt;meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1"&gt;
&lt;div style="width:100%;height:100%;"&gt;&lt;/div&gt;

&lt;script&gt;
document.querySelector('div').addEventListener(<b class="t01">'touchmove'</b>, (ev) =&gt; {
  let nodes;
  nodes += 'clientX: ' + ev.changedTouches[0].<b class="t03">clientX</b> + '\n'
  nodes += 'clientY: ' + ev.changedTouches[0].<b class="t03">clientY</b> + '\n'
  nodes += 'offsetX: ' + ev.changedTouches[0].<b class="t03">offsetX</b> + '\n'
  nodes += 'offsetY: ' + ev.changedTouches[0].<b class="t03">offsetY</b> + '\n'
  nodes += 'pageX  : ' + ev.changedTouches[0].<b class="t03">pageX</b> + '\n'
  nodes += 'pageY  : ' + ev.changedTouches[0].<b class="t03">pageY</b> + '\n'
  nodes += 'screenX: ' + ev.changedTouches[0].<b class="t03">screenX</b> + '\n'
  nodes += 'screenY: ' + ev.changedTouches[0].<b class="t03">screenY</b> + '\n'
  ev.target.innerHTML = nodes.replace(/\n/g, '<br>');
});
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="focus">
      <pre>
<CopyCode>&lt;meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1"&gt;
&lt;div style="width:100%;height:100%;"&gt;focus&lt;/div&gt;

&lt;script&gt;
const div = document.querySelector('div');
window.addEventListener(<b class="t01">'focus'</b>, () =&gt; {
  div.innerHTML = 'focus';
});
window.addEventListener(<b class="t01">'blur'</b>, () =&gt; {
  div.innerHTML = 'blur';
});
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="visibilitychange">
      <pre>
<CopyCode>&lt;meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1"&gt;

&lt;script&gt;
document.addEventListener(<b class="t01">'visibilitychange'</b>, () =&gt; {
  if (<b class="t03">document.visibilityState</b> === 'visible') {
    console.log('visible');
  } else if (<b class="t03">document.visibilityState</b> === 'hidden') {
    console.log('hidden');
  }
});
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="fullscreen">
      <pre>
<CopyCode>&lt;meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1"&gt;
&lt;style&gt;
div {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
}
.onBtn {
  padding: 10px;
  border: #000 1px solid;
}
.offBtn {
  display: none;
  padding: 10px;
  border: #000 1px solid;
}
.off .onBtn {
  display: inline-block;
}
.off .offBtn {
  display: none;
}
.on .onBtn {
  display: none;
}
.on .offBtn {
  display: inline-block;
}
&lt;/style&gt;

&lt;div class="off"&gt;
  &lt;p class="onBtn"&gt;On Full-Screen&lt;/p&gt;
  &lt;p class="offBtn"&gt;Off Full-Screen&lt;/p&gt;
&lt;/div&gt;

&lt;script&gt;
const div = document.querySelector('div');
const onBtn = document.querySelector('.onBtn');
const offBtn = document.querySelector('.offBtn');

onBtn.addEventListener('click', () =&gt; {
  onFullScreen(document.body);
  div.classList.add('on');
  div.classList.remove('off');
});

offBtn.addEventListener('click', () =&gt; {
  offFullScreen(document.body);
  div.classList.add('off');
  div.classList.remove('on');
});

const onFullScreen = (el) =&gt; {
  <b class="t01">if (el.requestFullScreen) {
    el.requestFullScreen();
  } else if (el.webkitRequestFullScreen) {
    el.webkitRequestFullScreen();
  } else if (el.mozRequestFullScreen) {
    el.mozRequestFullScreen();
  } else if (el.msRequestFullScreen) {
    el.msRequestFullScreen();
  }</b>
};

const offFullScreen = () =&gt; {
  <b class="t01">if (document.exitFullScreen) {
    document.exitFullScreen();
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msCancelFullScreen) {
    document.msCancelFullScreen();
  }</b>
};
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="loaded">
      <pre>
DOMContentLoaded - HTML loaded
load - All resource loaded
</pre
      >
    </SwitchBox>

    <SwitchBox title="resize">
      <pre>
<CopyCode>&lt;div&gt;&lt;/div&gt;

&lt;script&gt;
const div = document.querySelector('div');
window.addEventListener(<b class="t01">'resize'</b>, () =&gt; {
  div.innerHTML = window.innerWidth + '&lt;br&gt;' + window.innerHeight;
});
div.innerHTML = window.innerWidth + '&lt;br&gt;' + window.innerHeight;
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="matchMedia">
      <pre>
<CopyCode>&lt;meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, viewport-fit=cover"&gt;

&lt;div&gt;&lt;/div&gt;
&lt;div&gt;&lt;/div&gt;

&lt;script&gt;
const div = document.querySelectorAll('div');
const ori = window.<b class="t01">matchMedia(</b>'(orientation: landscape)'<b class="t01">)</b>;
const wid = window.<b class="t01">matchMedia(</b>'(max-width: 400px)'<b class="t01">)</b>;

const changeLayout = () =&gt; {
  if (ori.matches) {
    div[0].innerHTML = 'landscape';
  } else {
    div[0].innerHTML = 'portrate';
  }
  if (wid.matches) {
    div[1].innerHTML = 'width &lt;= 400px';
  } else {
    div[1].innerHTML = 'width &gt; 400px';
  }
};

ori.addListener(changeLayout);
wid.addListener(changeLayout);
changeLayout();
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="drag and drop">
      <pre>
<CopyCode>&lt;style&gt;
body {
  background: #f1f1f1;
}
.b {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30%;
  border: #000 1px solid;
  background: #fff;
}
.i {
  display: flex;
  flex-wrap: wrap;
}
.i img {
  height: 80px;
  margin: 6px 6px 0 0;
}
&lt;/style&gt;

&lt;div class="b"&gt;drop img files&lt;/div&gt;
&lt;div class="i"&gt;&lt;/div&gt;

&lt;script&gt;
const b = document.querySelector('.b');
const i = document.querySelector('.i');

b.addEventListener('dragover', (ev) =&gt; {
  ev.preventDefault();
});

b.addEventListener('drop', (ev) =&gt; {
  ev.preventDefault();
  const files = ev.dataTransfer.files;
  Object.values(files).forEach((file) =&gt; {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      i.appendChild(img);
    }
    reader.readAsDataURL(file);
  });
});
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="eval">
      <pre>
<CopyCode>const sum = 'function f(){ return 1 + 2; }; f();';
const ans = <b class="t01">eval(</b>sum<b class="t01">)</b>;
console.log(ans);
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="///">
      <pre>
<CopyCode>

</CopyCode>
</pre>
    </SwitchBox>
  </PreCodes>
</template>
