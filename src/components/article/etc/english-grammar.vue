<script lang="ts">
export const metadata = {
  updateDate: '2015/07/15',
}
</script>

<script setup lang="ts">
import SwitchBox from '@/components/SwitchBox.vue'
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader title="english-grammar" :update-date="metadata.updateDate" />

  <PreCodes>
    <SwitchBox title="be動詞">
      <pre>
// 現在形

I <b class="t01">am</b> 〜
<b class="t02">// 一人称</b>

He <b class="t01">is</b> 〜
She <b class="t01">is</b> 〜
It <b class="t01">is</b> 〜
<b class="t02">// 三人称単数</b>

You <b class="t01">are</b> 〜
We <b class="t01">are</b> 〜
They <b class="t01">are</b> 〜
<b class="t02">// 二人称・三人称複数</b>

---

// 否定の現在形

I <b class="t01">am <b class="t03">not</b></b> 〜
<b class="t02">// 一人称</b>

He <b class="t01">is <b class="t03">not</b></b> 〜
She <b class="t01">is <b class="t03">not</b></b> 〜
It <b class="t01">is <b class="t03">not</b></b> 〜
<b class="t02">// 三人称単数</b>
<b class="t02">// is not = isn't</b>

You <b class="t01">are <b class="t03">not</b></b> 〜
We <b class="t01">are <b class="t03">not</b></b> 〜
They <b class="t01">are <b class="t03">not</b></b> 〜
<b class="t02">// 二人称・三人称複数</b>
<b class="t02">// are not = aren't</b>

---

// 過去形

I <b class="t01">was</b> 〜
<b class="t02">// 一人称</b>

He <b class="t01">was</b> 〜
She <b class="t01">was</b> 〜
It <b class="t01">was</b> 〜
<b class="t02">// 三人称単数</b>

You <b class="t01">were</b> 〜
We <b class="t01">were</b> 〜
They <b class="t01">were</b> 〜
<b class="t02">// 二人称・三人称複数</b>

---

// 否定の過去形

I <b class="t01">was <b class="t03">not</b></b> 〜
<b class="t02">// 一人称</b>

He <b class="t01">was <b class="t03">not</b></b> 〜
She <b class="t01">was <b class="t03">not</b></b> 〜
It <b class="t01">was <b class="t03">not</b></b> 〜
<b class="t02">// 三人称単数</b>
<b class="t02">// was not = wasn't</b>

You <b class="t01">were <b class="t03">not</b></b> 〜
We <b class="t01">were <b class="t03">not</b></b> 〜
They <b class="t01">were <b class="t03">not</b></b> 〜
<b class="t02">// 二人称・三人称複数</b>
<b class="t02">// were not = weren't</b>

---

// 疑問形

主語の前にbe動詞(+not)がくる
</pre>
    </SwitchBox>

    <SwitchBox title="一般動詞">
      <pre>
// 現在形

I <b class="t01">like</b> 〜
You <b class="t01">like</b> 〜
We <b class="t01">like</b> 〜
They <b class="t01">like</b> 〜
<b class="t02">// 一人称・二人称・三人称複数</b>

He <b class="t01">like<b class="t03">s</b></b> 〜
She <b class="t01">like<b class="t03">s</b></b> 〜
It <b class="t01">like<b class="t03">s</b></b> 〜
<b class="t02">// 三人称単数</b>
<b class="t02">// likeの場合はこの形</b>

---

// 否定の現在形

I <b class="t03">do not</b> <b class="t01">like</b> 〜
You <b class="t03">do not</b> <b class="t01">like</b> 〜
We <b class="t03">do not</b> <b class="t01">like</b> 〜
They <b class="t03">do not</b> <b class="t01">like</b> 〜
<b class="t02">// 一人称・二人称・三人称複数</b>
<b class="t02">// do not = don't</b>

He <b class="t03">does not</b> <b class="t01">like</b> 〜
She <b class="t03">does not</b> <b class="t01">like</b> 〜
It <b class="t03">does not</b> <b class="t01">like</b> 〜
<b class="t02">// 三人称単数ではdoesになる代わりに動詞は原型</b>
<b class="t02">// does not = doesn't</b>

---

// 過去形

I <b class="t01">lik<b class="t03">ed</b></b> 〜
You <b class="t01">lik<b class="t03">ed</b></b> 〜
We <b class="t01">lik<b class="t03">ed</b></b> 〜
They <b class="t01">lik<b class="t03">ed</b></b> 〜
<b class="t02">// 一人称・二人称・三人称複数</b>

He <b class="t01">lik<b class="t03">ed</b></b> 〜
She <b class="t01">lik<b class="t03">ed</b></b> 〜
It <b class="t01">lik<b class="t03">ed</b></b> 〜
<b class="t02">// 三人称単数</b>

<b class="t02">// likeの場合はこの形</b>

---

// 否定の過去系

I <b class="t03">did not</b> <b class="t01">like</b> 〜
You <b class="t03">did not</b> <b class="t01">like</b> 〜
We <b class="t03">did not</b> <b class="t01">like</b> 〜
They <b class="t03">did not</b> <b class="t01">like</b> 〜

He <b class="t03">did not</b> <b class="t01">like</b> 〜
She <b class="t03">did not</b> <b class="t01">like</b> 〜
It <b class="t03">did not</b> <b class="t01">like</b> 〜

<b class="t02">// didになる代わりに動詞は原型</b>

<b class="t02">// did not = didn't</b>

---

// 疑問形

主語の前に do/does/did(+not) がくる
</pre>
    </SwitchBox>

    <SwitchBox title="助動詞(be goint to, will)">
      <pre>
// be going to 〜
<b class="t02">// 決定された予定(〜します)</b>

He <b class="t01">is going to</b> come tomorrow.
He <b class="t01">is <b class="t03">not</b> going to</b> come tomorrow.
<b class="t01">Is</b> he <b class="t01">going to</b> come tomorrow?
<b class="t01">Is</b> <b class="t03">not</b> he <b class="t01">going to</b> come tomorrow?

---

// will 〜
<b class="t02">// 推量・予測(〜するでしょう)</b>

He <b class="t01">will</b> come tomorrow.
He <b class="t01">will</b> <b class="t03">not</b> come tomorrow.
<b class="t01">Will</b> he come tomorrow?
<b class="t01">Will</b> <b class="t03">not</b> he come tomorrow?
</pre>
    </SwitchBox>

    <SwitchBox title="助動詞(shall, may)">
      <pre>
// shall
<b class="t02">// 提案(〜しましょうか？)</b>

<b class="t01">Shall</b> we go?

---

// should
<b class="t02">// 助言(〜すべき)</b>

We <b class="t01">should</b> go.
We <b class="t01">should</b> <b class="t03">not</b> go.
<b class="t01">Should</b> we go?
<b class="t01">Should</b> <b class="t03">not</b> we go?

---

// may, might
<b class="t02">// 推量(〜かもしれない)</b>

We <b class="t01">may</b> go.
We <b class="t01">may</b> <b class="t03">not</b> go.

We <b class="t01">might</b> go.
We <b class="t01">might</b> <b class="t03">not</b> go.
<b class="t02">// might は may より可能性が低い</b>

// mayの疑問形
<b class="t02">// 確認(〜してもいいですか？)</b>

<b class="t01">May</b> we go?
<b class="t01">May</b> <b class="t03">not</b> we go?

<b class="t02">// Can we go? のほうが使うかも</b>
</pre>
    </SwitchBox>

    <SwitchBox title="助動詞(can)">
      <pre>
<b class="t02">// 能力(〜することができる)</b>
He <b class="t01">can</b> speak English.
He <b class="t01">can</b> <b class="t03">not</b> speak English.
He <b class="t01">could</b> speak English. <b class="t02">// 過去形</b>
He <b class="t01">could</b> <b class="t03">not</b> speak English.
<b class="t01">Can</b> he speak English?
<b class="t01">Can</b> <b class="t03">not</b> he speak English?

<b class="t02">// 許可(〜してもよいですか？)</b>
<b class="t01">Can</b> I speak English?

<b class="t02">// 依頼(〜してくれますか？)</b>
<b class="t01">Can</b> you speak English?
<b class="t01">Could</b> you speak English? <b class="t02">// より丁寧</b>
</pre>
    </SwitchBox>

    <SwitchBox title="助動詞(have to, must)">
      <pre>
// have to
<b class="t02">// 義務(〜しなければならない(外的要因))</b>

We <b class="t01">have to</b> go.
We <b class="t03">do not</b> <b class="t01">have to</b> go.
He <b class="t01">ha<b class="t03">s</b> to</b> go. <b class="t02">// 三人称単数</b>
He <b class="t03">does not</b> <b class="t01">have to</b> go. <b class="t02">// 三人称単数</b>
We <b class="t01">ha<b class="t03">d</b> to</b> go. <b class="t02">// 過去形</b>
We <b class="t03">did not</b> <b class="t01">have to</b> go. <b class="t02">// 過去形</b>
<b class="t03">Do</b> we <b class="t01">have to</b> go? <b class="t02">// 疑問形</b>
<b class="t03">Does</b> he <b class="t01">have to</b> go? <b class="t02">// 疑問形</b>

---

// must
<b class="t02">// 義務(〜しなければならない(自分の意思))</b>

We <b class="t01">must</b> go.
We <b class="t01">must</b> <b class="t03">not</b> go.
He <b class="t01">must</b> go.
He <b class="t01">must</b> <b class="t03">not</b> go.
<b class="t01">Must</b> we go?
<b class="t01">Must</b> he go?

<b class="t02">// mustは元々過去形の語で、原型のmusは使わなくなったらしい</b>

---

// must
<b class="t02">// 推量(〜にちがいない)</b>

She <b class="t01">must</b> be sleepy.
</pre>
    </SwitchBox>

    <SwitchBox title="疑問詞(who)">
      <pre>
// 主語の場合

<b class="t03">He</b> is here.
↓
<b class="t01">Who</b> is here?

<b class="t03">She</b> liked that.
↓
<b class="t01">Who</b> liked that?

<b class="t02">// 主語の位置にWhoがくる</b>

---

// 目的語の場合

He called to <b class="t03">his friend</b>.
↓
Did he call to <b class="t03">his friend</b>?
↓
<b class="t01">Who</b> did he call to?

<b class="t02">// まず疑問文にしてその後 his friend を who に変えて文頭に移動</b>
<b class="t02">// 目的語は whom になるはずだがそれだと文語調になるので who にするらしい</b>
</pre>
    </SwitchBox>

    <SwitchBox title="疑問詞(what)">
      <pre>
// 主語の場合

<b class="t03">It</b> happened.
↓
<b class="t01">What</b> happened?

<b class="t02">// 主語の位置にWhatがくる</b>

---

// 目的語の場合

This is <b class="t03">a pen</b>.
↓
Is this <b class="t03">a pen</b>?
↓
<b class="t01">What</b> is this?

<b class="t02">// まず疑問文にしてその後 a pen を what に変えて文頭に移動</b>

---

// what + (名詞)
<b class="t02">// 何の〜</b>

<b class="t01">What</b> <b class="t03">time</b> is it?
<b class="t01">What</b> <b class="t03">kind of color</b> do you like?

---

// what about + (名詞かing形の動詞)
<b class="t02">// 質問・提案(〜はどう思いますか、〜するのはどうですか) </b>

<b class="t01">What about</b> <b class="t03">you</b>?
<b class="t01">What about</b> <b class="t03">going</b> to lunch?
</pre>
    </SwitchBox>

    <SwitchBox title="疑問詞(when, where)">
      <pre>
// when

She will come <b class="t03">tomorrow</b>.
↓
Will she come <b class="t03">tomorrow</b>?
↓
<b class="t01">When</b> will she come?

<b class="t02">// まず疑問文にしてその後 tomorrow を when に変えて文頭に移動</b>

---

// where

The restaurant is <b class="t03">behind this building</b>.
↓
Is the restaurant <b class="t03">behind this building</b>?
↓
<b class="t01">Where</b> is the restaurant?

<b class="t02">// まず疑問文にしてその後 behind this building を where に変えて文頭に移動</b>
</pre>
    </SwitchBox>

    <SwitchBox title="疑問詞(how)">
      <pre>
// how

He came <b class="t03">by a bicycle</b>.
↓
Did he come <b class="t03">by a bicycle</b>?
↓
<b class="t01">How</b> did he come?

<b class="t02">// まず疑問文にしてその後 by bicycle を how に変えて文頭に移動</b>

---

// how + 形容詞

She has <b class="t03">three dolls</b>.
↓
Does she have <b class="t03">three dolls</b>?
↓
<b class="t01">How many</b> <b class="t03">dolls</b> does she have?

<b class="t02">// まず疑問文にしてその後、数を how many に変えて文頭に移動</b>

<b class="t02">// その他</b>
<b class="t02">// How much</b>
<b class="t02">// How long</b>
<b class="t02">// How old</b>
<b class="t02">// How often</b>
<b class="t02">// How far</b>
<b class="t02">// How tall</b>
<b class="t02">// How high</b>
<b class="t02">// How wide</b>
<b class="t02">// など</b>

---

// how about + (名詞かing形の動詞)
<b class="t02">// 質問・提案(〜はどう思いますか、〜するのはどうですか) </b>

<b class="t01">How about</b> <b class="t03">that coffee shop</b>?
<b class="t01">How about</b> <b class="t03">going</b> to lunch?
</pre>
    </SwitchBox>

    <SwitchBox title="疑問詞(why)">
      <pre>
// why
<b class="t02">// 質問(なぜ〜ですか？)</b>

He goes to a station.
↓
Does he go to a station?
↓
<b class="t01">Why</b> does he go to a station?

<b class="t02">// まず疑問文にしてその後、文頭にwhyをつける</b>

---

// why don't you 〜
<b class="t02">// 提案(なぜ〜しないか？ -> 〜したらどうですか？)</b>

You have lunch.
↓
You <b class="t03">do not</b> have lunch.
↓
<b class="t03">Do not</b> you have lunch?
↓
<b class="t01">Why</b> <b class="t03">do not</b> you have lunch?

<b class="t02">// あなたはなぜ昼食をとらないのですか？</b>
<b class="t02">// ↓</b>
<b class="t02">// あなたは昼食をとったらどうですか？</b>
</pre>
    </SwitchBox>

    <SwitchBox title="形容詞">
      <pre>
// 形容詞 + 名詞

Can I drink <b class="t03">water</b>?
↓
Can I drink <b class="t01">cold</b> <b class="t03">water</b>?

This is <b class="t03">a book</b>.
↓
This is <b class="t03">a <b class="t01">new</b> book</b>.

---

// 動詞 + 形容詞

I <b class="t03">am</b> <b class="t01">busy</b>.
You <b class="t03">look</b> <b class="t01">busy</b>.

---

// many, much
<b class="t02">// たくさんの〜</b>

I have <b class="t01">many</b> pens.
I have <b class="t01">much</b> power.
<b class="t02">// many + 可算名詞</b>
<b class="t02">// much + 不可算名詞</b>

---

// some, any
<b class="t02">// いくつか〜、いくらか〜</b>

I have <b class="t01">some</b> pens.
I have <b class="t01">any</b> pens.

<b class="t02">// some: 数が主(いくつかのペンを持っている)</b>
<b class="t02">// any: 種類が主(どのようなペンでも持っている)</b>
</pre>
    </SwitchBox>

    <SwitchBox title="副詞">
      <pre>
// 動詞 + 副詞

I <b class="t03">walked</b>.
I <b class="t03">walked</b> <b class="t01">slowly</b>.
I <b class="t01">slowly</b> <b class="t03">walked</b>.
<b class="t01">Slowly</b> I <b class="t03">walked</b>.

---

// 頻度の副詞

He <b class="t03">sleeps</b>.
He <b class="t03">sleeps</b> <b class="t01">always</b>.
He <b class="t01">always</b> <b class="t03">sleeps</b>.
<b class="t01">Always</b> he <b class="t03">sleeps</b>.

<b class="t02">// 他に usually,often,sometimes,never など</b>

---

// 程度の副詞

He <b class="t03">is</b>n't late <b class="t01">almost</b>.
He <b class="t03">is</b>n't <b class="t01">almost</b> late.
He <b class="t01">almost</b> <b class="t03">is</b>n't late.
<b class="t01">Almost</b> he <b class="t03">is</b>n't late.

<b class="t02">// 他に so,too,very,hardly など</b>

---

// so, very, too
<b class="t02">// 形容詞や前につく</b>

She comes <b class="t03">early</b>.
She comes <b class="t01">so</b> <b class="t03">early</b>.
She comes <b class="t01">very</b> <b class="t03">early</b>.
She comes <b class="t01">too</b> <b class="t03">early</b>.

<b class="t02">// so = そのように〜</b>
<b class="t02">// very = 非常に〜</b>
<b class="t02">// too = 過剰に〜</b>

---

// much
<b class="t02">// 動詞につく</b>

I <b class="t03">walked</b> <b class="t01">much</b>.
I <b class="t01">much</b> <b class="t03">walked</b>.
</pre>
    </SwitchBox>

    <SwitchBox title="受動態">
      <pre>
// 主語＋be動詞＋過去分詞

He called to <b class="t03">her</b>.
↓
<b class="t03">She</b> <b class="t01">was</b> call<b class="t01">ed</b> to by him.

<b class="t02">// He called to her. -> 彼は彼女を呼んだ</b>
<b class="t02">// She was called to by him. -> 彼女は彼に呼ばれた</b>
</pre>
    </SwitchBox>

    <SwitchBox title="前置詞">
      <pre>
// 時の前置詞

I was born <b class="t01">in</b> 1976.
I was born <b class="t01">in</b> September.
I was born <b class="t01">in</b> the morning.
I was born <b class="t01">on</b> Thursday.
I was born <b class="t01">at</b> 8:00.

---

// 位置の前置詞

I am <b class="t01">in</b> the room.
I am <b class="t01">on</b> the 2nd floor.
I am <b class="t01">at</b> a bus stop.

<b class="t02">// 他に、next to, in front of, in back of, around, across など</b>
</pre>
    </SwitchBox>

    <SwitchBox title="代名詞">
      <pre>
// 主語 - 所有 - 目的語

I - my - me
we - our - us
you - your - you
he - his - him
she - her - her
they - their - them
it - its - it

---

// 単数 - 複数

this - these
that - those
</pre
      >
    </SwitchBox>

    <SwitchBox title="存在文">
      <pre>
// There + be動詞 + 主語
<b class="t02">// 〜があります</b>

<b class="t01">There</b> <b class="t03">is</b> a cup of coffee.
↓
<b class="t03">Is</b> <b class="t01">there</b> a cup of coffee?
</pre>
    </SwitchBox>

    <SwitchBox title="接続詞">
      <pre>
I had coffee <b class="t01">and</b> I slept.  <b class="t02">// そして〜</b>

<b class="t01">but</b>  <b class="t02">// しかし〜</b>
<b class="t01">because</b>  <b class="t02">// なぜならば〜</b>
<b class="t01">before</b>  <b class="t02">// 〜の前に</b>
<b class="t01">after</b>  <b class="t02">// 〜の後に</b>
<b class="t01">so</b>  <b class="t02">// それで〜</b>
<b class="t01">when</b>  <b class="t02">// 〜をしたとき</b>
<b class="t01">if</b>  <b class="t02">// もし〜</b>
</pre>
    </SwitchBox>

    <SwitchBox title="比較級,最上級">
      <pre>
// 比較級
<b class="t02">// 〜よりも</b>
He is tall<b class="t01">er</b> <b class="t03">than</b> me.


// 最上級
<b class="t02">// 〜の中で一番</b>
He is tall<b class="t01">est</b> <b class="t03">in</b> the class.
</pre>
    </SwitchBox>

    <SwitchBox title="挿入語句">
      <pre>
I like food <b class="t01">for example</b> egg.  <b class="t02">// たとえば</b>

<b class="t01">after all</b>  <b class="t02">// 結局は</b>
<b class="t01">as a result</b>  <b class="t02">// 結果として</b>
<b class="t01">in general</b>  <b class="t02">// 一般的に</b>
<b class="t01">in fact</b>  <b class="t02">// 実は</b>
<b class="t01">in short</b>  <b class="t02">// つまり</b>
<b class="t01">so to speak</b>  <b class="t02">// いわば</b>
<b class="t01">to tell the truth</b>  <b class="t02">// 実を言うと</b>
</pre>
    </SwitchBox>

    <SwitchBox title="///">
      <pre></pre>
    </SwitchBox>
  </PreCodes>
</template>
