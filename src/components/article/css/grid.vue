<script lang="ts">
export const metadata = {
  updateDate: '2022/07/29',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader title="grid" :update-date="metadata.updateDate" />

  <PreCodes>
    <pre><code><CopyCode><b class="t01">display: grid;
grid-template-columns: 1fr 1fr;
grid-auto-rows: 50px;</b>
</CopyCode>
</code></pre>

    <div class="sample ex01">
      <p>a</p>
      <p>b</p>
    </div>

    <pre><code><CopyCode><b class="t01">display: grid;
grid-template-columns: 72px 1fr;
word-break: break-all;</b>
</CopyCode>
</code></pre>

    <div class="sample ex02">
      <p>a</p>
      <p>bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</p>
      <p>c</p>
      <p>d</p>
      <p>e</p>
      <p>
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      </p>
      <p>g</p>
      <p>h</p>
    </div>

    <pre><code><CopyCode><b class="t01">display: grid;
grid-template-columns: repeat(3, 1fr);
grid-auto-rows: minmax(100px, auto);
row-gap: 20px;
column-gap: 10px;</b>
</CopyCode>
</code></pre>

    <div class="sample ex03">
      <p>a</p>
      <p>b</p>
      <p>c</p>
      <p>d</p>
      <p>e</p>
      <p>f</p>
      <p>g</p>
      <p>h</p>
      <p>i</p>
    </div>

    <pre><code><CopyCode><b class="t01">.ex04 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.ex04 p {
  position: relative;
  padding-bottom: 50px;
  word-break: break-all;
}
.ex04 i {
  width: 100%;
  height: 50px;
  border: #d22 3px solid;
  position: absolute;
  left: 0;
  bottom: 0;
}</b>
</CopyCode>
</code></pre>

    <div class="sample ex04">
      <p>aaaaaaaaaaaaaaaaaaa<i></i></p>
      <p>b<i></i></p>
      <p>c<i></i></p>
      <p>d<i></i></p>
      <p>e<i></i></p>
      <p>f<i></i></p>
      <p>g<i></i></p>
      <p>h<i></i></p>
      <p>i<i></i></p>
    </div>
  </PreCodes>
</template>

<style scoped>
.sample {
  width: 330px;
  margin-bottom: 50px;
  border: #012 3px solid;
}
.sample p {
  border: #678 3px solid;
  color: #000;
}

.ex01 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 50px;
}

.ex02 {
  display: grid;
  grid-template-columns: 72px 1fr;
  word-break: break-all;
}

.ex03 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  row-gap: 20px;
  column-gap: 10px;
}

.ex04 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.ex04 p {
  position: relative;
  padding-bottom: 50px;
  word-break: break-all;
}
.ex04 i {
  width: 100%;
  height: 50px;
  border: #d22 3px solid;
  position: absolute;
  left: 0;
  bottom: 0;
}
</style>
