<script lang="ts">
export const metadata = {
  updateDate: '2013/02/01',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader
    title="php-control-method"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><code>// switch

---

<CopyCode><b class="t01">&lt;?php
switch(</b>$foo<b class="t01">) {

  case "</b>bar<b class="t01">":</b>

    $bar1 <b class="t01">=</b> 'qux1'<b class="t01">;</b>
    $bar2 <b class="t01">=</b> 'qux2'<b class="t01">;</b>
    <b class="t01">break;

  case "</b>baz<b class="t01">":</b>

    $baz1 <b class="t01">=</b> 'quxx1'<b class="t01">;</b>
    $baz2 <b class="t01">=</b> 'quxx2'<b class="t01">;</b>
    <b class="t01">break;
}
?&gt;</b>
</CopyCode>

---

<CopyCode><b class="t01">&lt;?php
switch(</b>$foo<b class="t01">) {

  case "</b>bar<b class="t01">":
?&gt;

&lt;?php
    break;

  case "</b>baz<b class="t01">":
?&gt;

&lt;?php
    break;
}
?&gt;</b>
</CopyCode>
</code></pre>

    <pre><code>// if

---

<CopyCode><b class="t01">&lt;?php
if (</b>$foo<b class="t01">) {

} elseif (</b>$bar<b class="t01">) {

} else {

}
?&gt;</b>
</CopyCode>

---

<CopyCode><b class="t01">&lt;?php
if (</b>$foo<b class="t01">) {
?&gt;

&lt;?php
} elseif (</b>$bar<b class="t01">) {
?&gt;

&lt;?php
} else {
?&gt;

&lt;?php
}
?&gt;</b>
</CopyCode>
</code></pre>

    <pre><code>// for

---

<CopyCode><b class="t01">&lt;?php
for($i = </b>1<b class="t01">; $i &lt;= </b>42<b class="t01">; $i</b>++<b class="t01">) {

}
?&gt;</b>
</CopyCode>

---

<CopyCode><b class="t01">&lt;?php
for($i = </b>1<b class="t01">; $i &lt;= </b>42<b class="t01">; $i</b>++<b class="t01">) {
?&gt;

&lt;?php
}
?&gt;</b>
</CopyCode>
</code></pre>

    <pre><code>// isset

---

<CopyCode><b class="t01">&lt;?php
if (isset($_GET["</b>param_01<b class="t01">"])) {

} else if (isset($_GET["</b>param_02<b class="t01">"])) {

} else if (isset($_GET["</b>param_03<b class="t01">"])) {

}
?&gt;</b>
</CopyCode>

---

<CopyCode><b class="t01">&lt;?php
if (isset($_GET["</b>param_01<b class="t01">"])) {
?&gt;

&lt;?php
} else if (isset($_GET["</b>param_02<b class="t01">"])) {
?&gt;

&lt;?php
} else if (isset($_GET["</b>param_03<b class="t01">"])) {
?&gt;

&lt;?php
}
?&gt;</b>
</CopyCode>
</code></pre>
  </PreCodes>
</template>
