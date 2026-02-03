<script lang="ts">
export const metadata = {
  updateDate: '2020/12/19',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader
    title="accordion"
    sample-url="/sample/html/accordion.html"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><CopyCode>&lt;!doctype html&gt;
&lt;title&gt;accordion&lt;/title&gt;
&lt;meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, viewport-fit=cover"&gt;

&lt;style&gt;
html, body, ul {
  margin: 0;
  padding: 0;
}
body {
  margin: 0 auto;
  padding: 10px;
  max-width: 500px;
}
.listSet {
  position: relative;
}
.itemList {
  margin-bottom: 80px;
  overflow: hidden;
  <b class="t03">transition: height 0.3s;</b>
}
.itemList li {
  list-style: none;
  float: left;
  width: calc((100% - 20px) / 3);
  height: 30vw;
  margin-left: 10px;
  margin-bottom: 10px;
  background: #f1f1f1;
  border: #ddd 1px solid;
  box-sizing: border-box;
}
.itemList li:nth-child(3n+1) {
  margin-left: 0;
}
.listSet.setB li {
  height: 40vw;
}
@media screen and (min-width: 500px) {
  .itemList li {
    height: 158px;
  }
  .listSet.setB li {
    height: 200px;
  }
}
.toggle {
  position: absolute;
  bottom: -30px;
  left: calc(50% - 4px);
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  border-right: #000 2px solid;
  border-bottom: #000 2px solid;
  transform: rotate(225deg);
  cursor: pointer;
}
.close .toggle {
  transform: rotate(45deg);
}
&lt;/style&gt;

&lt;div class="listSet setA close"&gt;
&lt;ul class="itemList"&gt;
&lt;li&gt;1&lt;/li&gt;
&lt;li&gt;2&lt;/li&gt;
&lt;li&gt;3&lt;/li&gt;
&lt;li&gt;4&lt;/li&gt;
&lt;li&gt;5&lt;/li&gt;
&lt;li&gt;6&lt;/li&gt;
&lt;li&gt;7&lt;/li&gt;
&lt;li&gt;8&lt;/li&gt;
&lt;li&gt;9&lt;/li&gt;
&lt;li&gt;10&lt;/li&gt;
&lt;li&gt;11&lt;/li&gt;
&lt;li&gt;12&lt;/li&gt;
&lt;li&gt;13&lt;/li&gt;
&lt;li&gt;14&lt;/li&gt;
&lt;li&gt;15&lt;/li&gt;
&lt;li&gt;16&lt;/li&gt;
&lt;li&gt;17&lt;/li&gt;
&lt;li&gt;18&lt;/li&gt;
&lt;/ul&gt;
&lt;div class="toggle"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;div class="listSet setB close"&gt;
&lt;ul class="itemList"&gt;
&lt;li&gt;1&lt;/li&gt;
&lt;li&gt;2&lt;/li&gt;
&lt;li&gt;3&lt;/li&gt;
&lt;li&gt;4&lt;/li&gt;
&lt;li&gt;5&lt;/li&gt;
&lt;li&gt;6&lt;/li&gt;
&lt;li&gt;7&lt;/li&gt;
&lt;li&gt;8&lt;/li&gt;
&lt;li&gt;9&lt;/li&gt;
&lt;li&gt;10&lt;/li&gt;
&lt;li&gt;11&lt;/li&gt;
&lt;li&gt;12&lt;/li&gt;
&lt;li&gt;13&lt;/li&gt;
&lt;li&gt;14&lt;/li&gt;
&lt;li&gt;15&lt;/li&gt;
&lt;li&gt;16&lt;/li&gt;
&lt;li&gt;17&lt;/li&gt;
&lt;li&gt;18&lt;/li&gt;
&lt;/ul&gt;
&lt;div class="toggle"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
<b class="t01">const setAccordionEvent = () =&gt; {
  const getHeight = (area, param) => parseInt((area.currentStyle || document.defaultView.getComputedStyle(area, ''))[param], 10);
  const itemLists = document.querySelectorAll('.listSet');
  const flag = 'close';
  const minimum = 2;
  Object.values(itemLists).forEach((list) =&gt; {
    const frame = list.querySelector('.itemList');
    const topItem = list.querySelectorAll('li')[0];
    const toggle = list.querySelector('.toggle');
    const minHeight = (getHeight(topItem, 'height') + getHeight(topItem, 'margin-bottom') + getHeight(topItem, 'margin-top')) * minimum;
    const maxHeight = getHeight(list, 'height');
    const setHeight = (h) =&gt; frame.style.height = h + 'px';
    toggle.addEventListener('click', () => {
      if (list.classList.contains(flag)) {
        list.classList.remove(flag);
        setHeight(maxHeight);
      } else {
        list.classList.add(flag);
        setHeight(minHeight);
      }
    });
    setHeight(minHeight);
  });
};

window.onload = () =&gt; {
  setAccordionEvent();
};</b>
&lt;/script&gt;
</CopyCode>
</pre>
  </PreCodes>
</template>
