<script lang="ts">
export const metadata = {
  updateDate: '2024/06/25',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader
    title="radio-checkbox-image-replacement"
    sample-url="/sample/html/radio-checkbox-image-replacement.html"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre>&lt;style&gt;
  li &#123;
    margin-top: 10px;
    list-style: none;
  &#125;

  .foo input[type='radio'] &#123;
    display: none;
  &#125;

  .foo input[type='radio'] + label &#123;
    position: relative;
    display: flex;
    font-size: 14px;
    font-weight: 300;
  &#125;

  .foo input[type='radio'] + label::before &#123;
    content: '';
    <b class="t01">background: url(../img/radio-off.svg), url(../img/radio-on.svg);
    background-size: 20px 20px, 0 0;</b>
    width: 20px;
    height: 20px;
    display: block;
    margin-right: 8px;
    position: relative;
    top: -1px;
  &#125;

  .foo input[type='radio']:checked + label::before &#123;
    background-size:
      0 0,
      20px 20px;
  &#125;
&lt;/style&gt;

&lt;ul&gt;
  &lt;li&gt;
    &lt;div class="foo"&gt;
      &lt;input type="radio" name="name1" id="check1" value="" checked="checked" /&gt;
      &lt;label for="check1"&gt;ああああああ&lt;/label&gt;
    &lt;/div&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;div class="foo"&gt;
      &lt;input type="radio" name="name1" id="check2" value="" /&gt;
      &lt;label for="check2"&gt;いいいいいい&lt;/label&gt;
    &lt;/div&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;div class="foo"&gt;
      &lt;input type="radio" name="name1" id="check3" value="" /&gt;
      &lt;label for="check3"&gt;うううううう&lt;/label&gt;
    &lt;/div&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;div class="foo"&gt;
      &lt;input type="radio" name="name1" id="check4" value="" /&gt;
      &lt;label for="check4"&gt;ええええええ&lt;/label&gt;
    &lt;/div&gt;
  &lt;/li&gt;
  &lt;li&gt;
    &lt;div class="foo"&gt;
      &lt;input type="radio" name="name1" id="check5" value="" /&gt;
      &lt;label for="check5"&gt;おおおおおお&lt;/label&gt;
    &lt;/div&gt;
  &lt;/li&gt;
&lt;/ul&gt;</pre>
  </PreCodes>
</template>
