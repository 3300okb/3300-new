<script lang="ts">
export const metadata = {
  updateDate: '2024/11/15',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader
    title="tooltip"
    sample-url="/sample/html/tooltip.html"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre>
&lt;style&gt;
  h1 &#123;
    margin: 0;
    padding: 0;
    font-size: 0.8125rem;
    line-height: 1;
  &#125;
  .title &#123;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 1.125rem;
    margin-top: 1.25rem;
  &#125;
  .title__inner &#123;
    display: flex;
    align-items: center;
  &#125;
  .title__label &#123;
    font-size: 0.875rem;
    font-weight: 700;
  &#125;
  .help &#123;
    display: inline-flex;
    position: relative;
    margin-left: 0.1875rem;
  &#125;
  .help__budge &#123;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.1875rem;
    height: 1.1875rem;
    font-size: 0.75rem;
    font-weight: 600;
    color: rgb(107, 114, 128);
    background: rgb(249, 250, 251);
    border: rgb(209, 213, 219) 0.0625rem solid;
    border-radius: 9999px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08);
    transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease,
      box-shadow 0.2s ease;
  &#125;
  .help:hover .help__budge &#123;
    color: rgb(55, 65, 81);
    border-color: rgb(156, 163, 175);
    background: rgb(255, 255, 255);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.12);
  &#125;
  .help__tooltip &#123;
    position: absolute;
    z-index: 10;
    top: 0.625rem;
    left: 1.6875rem;
    transform: translateY(-50%) translateX(4px);
    width: max-content;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity 0.2s ease, transform 0.2s ease;
  &#125;
  .help:hover .help__tooltip &#123;
    opacity: 1;
    visibility: visible;
    transform: translateY(-50%) translateX(0);
  &#125;
  .help__tooltipInner &#123;
    display: flex;
    align-items: center;
  &#125;
  .help__tooltipTriangle &#123;
    display: none;
  &#125;
  .help__tooltipText &#123;
    max-width: 25rem;
    color: rgb(255, 255, 255);
    font-size: 0.6875rem;
    font-weight: 400;
    line-height: calc(1.6);
    padding: 0.5rem 0.6875rem;
    border-radius: 0.3125rem;
    background: rgba(37, 99, 235, 0.9);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.18);
  &#125;
&lt;/style&gt;

&lt;div class="title"&gt;
  &lt;div class="title__inner"&gt;
    &lt;h1&gt;&lt;label class="title__label"&gt;aaaaa&lt;/label&gt;&lt;/h1&gt;

    &lt;div class="help"&gt;
      &lt;span class="help__budge"&gt;?&lt;/span&gt;
      &lt;div class="help__tooltip"&gt;
        &lt;div class="help__tooltipInner"&gt;
          &lt;p class="help__tooltipText"&gt;あああああ&lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;input id="aaaaaa" name="aaaaaa" placeholder="placeholder" value="" /&gt;
&lt;/div&gt;

&lt;div class="title"&gt;
  &lt;div class="title__inner"&gt;
    &lt;h1&gt;&lt;label class="title__label"&gt;aaaaaaaaaa&lt;/label&gt;&lt;/h1&gt;

    &lt;div class="help"&gt;
      &lt;span class="help__budge"&gt;?&lt;/span&gt;
      &lt;div class="help__tooltip"&gt;
        &lt;div class="help__tooltipInner"&gt;
          &lt;p class="help__tooltipText"&gt;
            あああああああああああああああああああああああああああああああああああああああああああああああああああ
          &lt;/p&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;div&gt;
  &lt;input
    id="aaaaaaaaaaa"
    name="aaaaaaaaaaa"
    placeholder="placeholder"
    value=""
  /&gt;
&lt;/div&gt;</pre
    >
  </PreCodes>
</template>
