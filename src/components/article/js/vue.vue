<script lang="ts">
export const metadata = {
  updateDate: '2024/03/12',
}
</script>

<script setup lang="ts">
import SwitchBox from '@/components/SwitchBox.vue'
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader title="vue" :update-date="metadata.updateDate" />

  <PreCodes>
    <SwitchBox title="cli install">
      <pre><b class="t01">npm install -g @vue/cli
npm install -g @vue/cli-service-global</b>
</pre>
    </SwitchBox>

    <SwitchBox title="project">
      <pre><b class="t01">vue create [project name]
npm run serve
npm run build</b>

* change path (vue.config.js)
module.exports = {
  publicPath: './'
}
</pre>
    </SwitchBox>

    <SwitchBox title="mustache">
      <pre>
<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="<b class="t01">https://cdn.jsdelivr.net/npm/vue</b>"&gt;&lt;/script&gt;

&lt;div id="<b class="t03">target</b>"&gt;
  <b class="t04">&#123;&#123; foo &#125;&#125;</b>
&lt;/div&gt;

&lt;script&gt;
<b class="t01">new Vue({</b> <b class="t02">// const app = new Vue({ is same</b>
<b class="t01">  el: '</b><b class="t03">#target</b><b class="t01">',
  data: {
    <b class="t04">foo</b>: '</b>hello<b class="t01">',
  },
});</b>
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="$mount">
      <pre>
<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="<b class="t03">target</b>"&gt;&#123;&#123; foo &#125;&#125;&lt;/div&gt;

&lt;script&gt;
new Vue({
  data: {
    foo: 'hello',
  },
})<b class="t01">.$mount(</b><b class="t03">'#target'</b><b class="t01">)</b>;
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="template">
      <pre>
<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="<b class="t03">target</b>"&gt;&lt;/div&gt;

&lt;script&gt;
new Vue({
  el: '<b class="t03">#target</b>',
  <b class="t01">template</b>: '&lt;p&gt;&#123;&#123; foo &#125;&#125;&lt;/p&gt;',
  data: {
    foo: 'hello',
  },
});
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="reactive">
      <pre>// onClick

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="target"&gt;
  &#123;&#123; foo &#125;&#125;
&lt;/div&gt;

&lt;button <b class="t03">onclick="action();"</b>&gt;click &lt;/button&gt;

&lt;script&gt;
const data = {
  foo: 'hello',
};

new Vue({
  el: '#target',
  data: data,
});

<b class="t01">const action = () =&gt; {
  </b>data.foo = 'clicked';<b class="t01">
}</b>;

<b class="t02">// Reactive - Once bound to mustache, the variables set outside the vue object are also updated.</b>

&lt;/script&gt;
</CopyCode>

---

// onInput

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="target"&gt;
  &#123;&#123; foo &#125;&#125;
&lt;/div&gt;

&lt;input type="text" <b class="t03">onInput="action(<b class="t01">event</b>);"</b>&gt;
<b class="t02">&lt;!-- ok) event, ng) ev --&gt;</b>

&lt;script&gt;
const data = {
  foo: `let's type`,
};

new Vue({
  el: '#target',
  data: data,
});

<b class="t01">const action = (ev) =&gt; {
  </b>data.foo = ev.target.value;<b class="t01">
}</b>;
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="render">
      <pre><CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="target"&gt;
  &#123;&#123; foo &#125;&#125;
&lt;/div&gt;

&lt;button onclick="action();"&gt;click &lt;/button&gt;

&lt;script&gt;
const data = {
  foo: 'hello',
};

new Vue({
  el: '#target',
  data: data,
  <b class="t01">render: (<b class="t03">element</b>) =&gt; {</b> <b class="t02">// render(element) { is same</b>
    return <b class="t03">element</b>('p', data.foo);
    <b class="t02">// or
    // return element('p',
    // { 'style': 'font-size: 16px; color: #f00;' }, // option
    // data.foo);</b>
  <b class="t01">}</b>,
});

const action = () =&gt; {
  data.foo = 'clicked (Replaced div with p)';
};
&lt;/script&gt;
</CopyCode>

---

// Nested Virtual DOM

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="target"&gt;&lt;/div&gt;

&lt;script&gt;
const data = {
  text1: 'text1',
  text2: 'text2',
};

new Vue({
  el: '#target',
  data: data,
  <b class="t01">render(element) {
    <b class="t03">return element('<b class="t00">ul</b>',
      [
        <b class="t05">element('<b class="t00">li</b>', <b class="t00">this.text1</b>),
        element('<b class="t00">li</b>', <b class="t00">this.text2</b>),</b>
      ]
    );</b>
  }</b>,
});
&lt;/script&gt;
</CopyCode>

---

// Options of Virtual DOM

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="target"&gt;&lt;/div&gt;

&lt;script&gt;
const data = {
  text1: 'click1',
  text2: 'click2',
};

new Vue({
  el: '#target',
  data: data,
  render(element) {
    <b class="t03">return element('<b class="t00">ul</b>',
      <b class="t01">{
        class: '<b class="t00">cls</b>',
        style: '<b class="t00">color: #f00;</b>',
        on: {
          click(ev) {<b class="t00">
            alert(ev.target.innerHTML);
          </b>},
        },
      }</b>,
      [
        <b class="t00">element('li', this.text1),
        element('li', this.text2),</b>
      ]
    );</b>
  },
});
&lt;/script&gt;
</CopyCode>

---

// value status

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;

&lt;script&gt;</b>
const <b class="t01">foo</b> = {
  a: 1,
};

const <b class="t03">app</b> = new Vue({
  data: <b class="t01">foo</b>,
});

console.log(<b class="t03">app</b>.a === <b class="t01">foo</b>.a); <b class="t02">// true</b>

<b class="t03">app</b>.a = 2;
console.log(<b class="t01">foo</b>.a); <b class="t02">// 2</b>

<b class="t01">foo</b>.a = 3;
console.log(<b class="t03">app</b>.a); <b class="t02">// 3</b>
<b class="t02">&lt;/script&gt;</b>
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="v-html">
      <pre>
<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
  &lt;p <b class="t01">v-html="</b><b class="t03">inner</b><b class="t01">"</b>&gt;&lt;/p&gt;
&lt;/div&gt;

&lt;script&gt;
const data = {
  <b class="t03">inner</b>: `&lt;span style="color: #f00;"&gt;span&lt;/span&gt;`,
};

new Vue({
  el: '#app',
  data: data,
});
&lt;/script&gt;
</CopyCode>

---

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
  &lt;ol v-html="list"&gt;&lt;/ol&gt;
&lt;/div&gt;

&lt;input type="text" onInput="input(event)"&gt;

&lt;button onClick="action()"&gt;add&lt;/button&gt;

&lt;script&gt;
const data = {
  list: `&lt;li&gt;text&lt;/li&gt;`,
};

new Vue({
  el: '#app',
  data: data,
});

const input = (ev) =&gt; {
  data.item = ev.target.value;
}

const action = () =&gt; {
  data.list += '&lt;li&gt;' + data.item + '&lt;/li&gt;';
}
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="v-bind">
      <pre>
<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app" <b class="t01">v-bind:</b><b class="t03">style="<b class="t04">bg</b>"</b>&gt;
  &#123;&#123; foo &#125;&#125;
&lt;/div&gt;

&lt;script&gt;
new Vue({
  el: '#app',
  data: {
    foo: 'hello',
    <b class="t04">bg</b><b class="t03">: 'background: #f00;'</b>,
  },
});

<b class="t02">// v-bind:***="***"
// :***="***" // 省略表記</b>
&lt;/script&gt;
</CopyCode>

---

// error exsample

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app" <b class="t03">style="<b class="t04">&#123;&#123; bg &#125;&#125;</b>"</b>&gt;
  &#123;&#123; foo &#125;&#125;
&lt;/div&gt;

&lt;script&gt;
new Vue({
  el: '#app',
  data: {
    foo: 'hello',
    <b class="t04">bg</b><b class="t03">: 'background: #f00;'</b>,
  },
});

<b class="t02">// mustache cannot be set to a value</b>
&lt;/script&gt;
</CopyCode>

---

// array binding

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;style&gt;
.isRed { color: #f00; }
.isBlue { color: #00f; }
.isRed.isBlue { color: #f0f; }
&lt;/style&gt;

&lt;div id="app" <b class="t01">v-bind:</b>class="<b class="t03">[ paintRed, paintBlue ]</b>"&gt;
  &#123;&#123; foo &#125;&#125;
&lt;/div&gt;

&lt;script&gt;
new Vue({
  el: '#app',
  data: {
    foo: 'hello',
    <b class="t03">paintRed: <b class="t04">'isRed'</b></b>,
    <b class="t03">paintBlue: <b class="t04">null</b></b>,
  },
});
&lt;/script&gt;
</CopyCode>

---

// object binding 1

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;style&gt;
.isRed { color: #f00; }
.isBlue { color: #00f; }
.isRed.isBlue { color: #f0f; }
&lt;/style&gt;

&lt;div id="app" <b class="t01">v-bind:</b>class="<b class="t03">{ isRed: paintRed, isBlue: paintBlue }</b>"&gt;
  &#123;&#123; foo &#125;&#125;
&lt;/div&gt;

&lt;script&gt;
new Vue({
  el: '#app',
  data: {
    foo: 'hello',
    <b class="t03">paintRed: <b class="t04">true</b></b>,
    <b class="t03">paintBlue: <b class="t04">false</b></b>,
  },
});
&lt;/script&gt;
</CopyCode>

---

// object binding 2

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app" <b class="t01">v-bind:</b>style="<b class="t03">styles</b>"&gt;
  &#123;&#123; foo &#125;&#125;
&lt;/div&gt;

&lt;script&gt;
new Vue({
  el: '#app',
  data: {
    foo: 'hello',
    <b class="t03">styles: {
      margin: '5px',
      padding: '5px',
      fontSize: '18px',
      fontWeight: 'bold',
      backgroundColor: '#f1f1f1',
    }</b>,
  },
});
&lt;/script&gt;
</CopyCode>

---

// disabled

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;button id="buy" <b class="t01">v-bind:</b>disabled="<b class="t03">!canBuy</b>"&gt;Buy&lt;/button&gt;

&lt;script&gt;
new Vue({
  el: '#buy',
  data: {
    <b class="t03">canBuy: <b class="t04">false</b></b>,
  },
});
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="v-if">
      <pre>
<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app" <b class="t01">v-if="<b class="t04">view</b>"</b>&gt;
  &#123;&#123; foo &#125;&#125;
&lt;/div&gt;

&lt;script&gt;
new Vue({
  el: '#app',
  data: {
    foo: 'hello',
    <b class="t04">view: <b class="t03">true</b></b>, <b class="t02">// false no rendering div</b>
  },
});
&lt;/script&gt;
</CopyCode>

---

// else

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
&lt;p <b class="t01">v-if="<b class="t04">view</b>"</b>&gt;&#123;&#123; foo &#125;&#125; if&lt;/p&gt;
&lt;p <b class="t01">v-else</b>&gt;&#123;&#123; foo &#125;&#125; else&lt;/p&gt;
&lt;/div&gt;

&lt;script&gt;
new Vue({
  el: '#app',
  data: {
    foo: 'hello',
    <b class="t04">view: <b class="t03">true</b></b>,
  },
});
&lt;/script&gt;
</CopyCode>

---

// else if

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
&lt;p <b class="t01">v-if="<b class="t04">view === 1</b>"</b>&gt;&#123;&#123; foo &#125;&#125; if&lt;/p&gt;
&lt;p <b class="t01">v-else-if="<b class="t04">view === 2</b>"</b>&gt;&#123;&#123; foo &#125;&#125; else if&lt;/p&gt;
&lt;p <b class="t01">v-else</b>&gt;&#123;&#123; foo &#125;&#125; else&lt;/p&gt;
&lt;/div&gt;

&lt;script&gt;
new Vue({
  el: '#app',
  data: {
    foo: 'hello',
    <b class="t04">view: <b class="t03">1</b></b>,
  },
});
&lt;/script&gt;
</CopyCode>

---

// show

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app" <b class="t01">v-show="<b class="t04">view</b>"</b>&gt;
  &#123;&#123; foo &#125;&#125;
&lt;/div&gt;

&lt;script&gt;
new Vue({
  el: '#app',
  data: {
    foo: 'hello',
    <b class="t04">view: <b class="t03">true</b></b>, <b class="t02">// false hide div</b>
  },
});
&lt;/script&gt;

<b class="t02">// falseの場合、if は no rendering、show は hide</b>
</CopyCode>

---

// template tag

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
  &lt;ul&gt;
    <b class="t01">&lt;template v-if="flag"&gt;</b>
        &lt;li&gt;1&lt;/li&gt;
        &lt;li&gt;2&lt;/li&gt;
    <b class="t01">&lt;/template&gt;</b>
    <b class="t01">&lt;template v-else&gt;</b>
        &lt;li&gt;3&lt;/li&gt;
        &lt;li&gt;4&lt;/li&gt;
    <b class="t01">&lt;/template&gt;</b>
  &lt;/ul&gt;
&lt;/div&gt;

&lt;button onClick="action()"&gt;toggle&lt;/button&gt;

&lt;script&gt;
const data = {
  flag: true,
};

new Vue({
  el: '#app',
  data: data,
});

const action = () =&gt; {
  data.flag = !data.flag;
}
&lt;/script&gt;

<b class="t02">// ulの外側や内側にタグを増やせない場合templateタグを使うことで対応できる</b>
<b class="t02">// templateタグはそのものは残らない</b>
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="v-for">
      <pre>
<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
  &lt;span <b class="t01">v-for="</b>n <b class="t01">in</b> <b class="t03">loop</b><b class="t01">"</b>&gt; &#123;&#123; n &#125;&#125; &lt;/span&gt;
&lt;/div&gt;

&lt;script&gt;
new Vue({
  el: '#app',
  data: {
    <b class="t03">loop</b>: 10,
  },
});
&lt;/script&gt;
</CopyCode>

---

// array

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
  &lt;ul&gt;
    &lt;li <b class="t01">v-for="<b class="t05">item</b> in <b class="t04">arr</b>"</b> <b class="t02">v-bind:key="item.text"</b>&gt;
      &#123;&#123; <b class="t05">item</b>.<b class="t03">text</b> &#125;&#125;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;

&lt;script&gt;
new Vue({
  el: '#app',
  data: {
    <b class="t04">arr:</b> [
      { <b class="t03">text:</b> 'foo' },
      { <b class="t03">text:</b> 'bar' },
      { <b class="t03">text:</b> 'baz' },
    ],
  },
});
&lt;/script&gt;
</CopyCode>

---

// array (index)

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
  &lt;ul&gt;
    &lt;li <b class="t01">v-for="<b class="t05">(item, index)</b> in <b class="t04">arr</b>"</b> <b class="t02">v-bind:key="item.text"</b>&gt;
      &#123;&#123; <b class="t05">item</b>.<b class="t03">text</b> &#125;&#125; - &#123;&#123; <b class="t05">index</b> &#125;&#125;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;

&lt;script&gt;
new Vue({
  el: '#app',
  data: {
    <b class="t04">arr:</b> [
      { <b class="t03">text:</b> 'foo' },
      { <b class="t03">text:</b> 'bar' },
      { <b class="t03">text:</b> 'baz' },
    ],
  },
});
&lt;/script&gt;
</CopyCode>

---

// object

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
  &lt;ul&gt;
    &lt;li <b class="t01">v-for="<b class="t05">value</b> in <b class="t04">obj</b>"</b> <b class="t02">v-bind:key="value"</b>&gt;
      &#123;&#123; <b class="t05">value</b> &#125;&#125;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;

&lt;script&gt;
new Vue({
  el: '#app',
  data: {
    <b class="t04">obj:</b> {
      <b class="t03">property1:</b> 'value1',
      <b class="t03">property2:</b> 'value2',
      <b class="t03">property3:</b> 'value3',
    },
  },
});
&lt;/script&gt;
</CopyCode>

---

// object (key, index)

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
  &lt;ul&gt;
    &lt;li <b class="t01">v-for="<b class="t05">(value, key, index)</b> in <b class="t04">obj</b>"</b> <b class="t02">v-bind:key="key"</b>&gt;
      &#123;&#123; <b class="t05">value</b> &#125;&#125; - &#123;&#123; <b class="t05">key</b> &#125;&#125; - &#123;&#123; <b class="t05">index</b> &#125;&#125;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;

&lt;script&gt;
new Vue({
  el: '#app',
  data: {
    <b class="t04">obj:</b> {
      <b class="t03">property1:</b> 'value1',
      <b class="t03">property2:</b> 'value2',
      <b class="t03">property3:</b> 'value3',
    },
  },
});
&lt;/script&gt;
</CopyCode>

---

// nested object

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
  &lt;ul&gt;
    &lt;li <b class="t01">v-for="<b class="t05">(value, key, index)</b> in <b class="t04">obj</b>"</b> <b class="t02">v-bind:key="key"</b>&gt;
      &#123;&#123; <b class="t05">value.key</b> &#125;&#125; - &#123;&#123; <b class="t05">key</b> &#125;&#125; - &#123;&#123; <b class="t05">index</b> &#125;&#125;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;

&lt;script&gt;
new Vue({
  el: '#app',
  data: {
    <b class="t04">obj:</b> {
      <b class="t03">property1:</b> { key: 'value1' },
      <b class="t03">property2:</b> { key: 'value2' },
      <b class="t03">property3:</b> { key: 'value3' },
    },
  },
});
&lt;/script&gt;
</CopyCode>

---

// string (char, index)

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
  &lt;ul&gt;
    &lt;li <b class="t01">v-for="<b class="t05">(char, index)</b> in <b class="t04">string</b>"</b> <b class="t02">v-bind:key="char"</b>&gt;
      &#123;&#123; <b class="t05">char</b> &#125;&#125; - &#123;&#123; <b class="t05">index</b> &#125;&#125;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;

&lt;script&gt;
new Vue({
  el: '#app',
  data: {
    <b class="t04">string:</b> 'hello',
  },
});
&lt;/script&gt;
</CopyCode>

---

// number (num, index)

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
  &lt;ul&gt;
    &lt;li <b class="t01">v-for="<b class="t05">(num, index)</b> in <b class="t04">number</b>"</b> <b class="t02">v-bind:key="num"</b>&gt;
      &#123;&#123; <b class="t05">num</b> &#125;&#125; - &#123;&#123; <b class="t05">index</b> &#125;&#125;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;

&lt;script&gt;
new Vue({
  el: '#app',
  data: {
    <b class="t04">number:</b> 10,
  },
});
&lt;/script&gt;
</CopyCode>

---

// method of change item

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
  &lt;ul&gt;
    &lt;li v-for="item in arr" <b class="t02">v-bind:key="item.text"</b>&gt;
      &#123;&#123; item.text &#125;&#125;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;

&lt;script&gt;
const <b class="t03">app</b> = new Vue({
  el: '#app',
  data: {
    arr: [
      { text: 'foo' },
      { text: 'bar' },
      { text: 'baz' },
    ],
  },
});

<b class="t03">app</b>.arr.<b class="t01">push(</b>{ text: 'qux' }<b class="t01">)</b>;
<b class="t02">// push, pop, shift, unshift, splice, sort, reverse</b>
&lt;/script&gt;
</CopyCode>

---

// extraction of item

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
  &lt;ul&gt;
    &lt;li v-for="item in <b class="t06">arr</b>" <b class="t02">v-bind:key="item.text"</b>&gt;
      &#123;&#123; item.<b class="t05">text</b> &#125;&#125;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;

&lt;script&gt;
const <b class="t03">app</b> = new Vue({
  el: '#app',
  data: {
    <b class="t06">arr</b>: [
      { <b class="t05">text</b>: 'foo' },
      { <b class="t05">text</b>: 'bar' },
      { <b class="t05">text</b>: 'baz' },
    ],
  },
});

<b class="t03">app</b>.<b class="t06">arr</b> = <b class="t03">app</b>.<b class="t06">arr</b>.<b class="t01">filter((</b>item<b class="t01">) => {</b>
  <b class="t04">return</b> item.<b class="t05">text</b>.<b class="t01">match(/</b>ba<b class="t01">/)
});</b>
&lt;/script&gt;
</CopyCode>

---

// with v-if

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
  &lt;ul&gt;
    &lt;li <b class="t03">v-for</b>="(item, index) in arr" <b class="t01">v-if</b>="index !== 1"&gt;
      &#123;&#123; item.text &#125;&#125;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/div&gt;

&lt;script&gt;
new Vue({
  el: '#app',
  data: {
    arr: [
      { text: 'foo' },
      { text: 'bar' },
      { text: 'baz' },
    ],
  },
});
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="v-on">
      <pre>
<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
  &lt;p&gt;<b class="t05">&#123;&#123; foo &#125;&#125;</b>&lt;/p&gt;
  &lt;button <b class="t01">v-on:click="<b class="t03">reverse</b>"</b>&gt;reverse&lt;/button&gt;
&lt;/div&gt;

&lt;script&gt;
<b class="t02">new Vue({
  el: '#app',
  data: {
    <b class="t05">foo</b>: 'hello'
  },
  <b class="t01">methods: {</b>
    <b class="t03">reverse() {</b>
      <b class="t04">this</b>.<b class="t05">foo</b> = <b class="t04">this</b>.<b class="t05">foo</b>.split('').reverse().join('');
    <b class="t03">}</b>,
  <b class="t01">}</b>,
});</b>

<b class="t02">// v-click="***"
// @click="***" // 省略表記</b>
&lt;/script&gt;
</CopyCode>

---

// preventDefault

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
  &lt;p&gt;&#123;&#123; foo &#125;&#125;&lt;/p&gt;
  &lt;a href="https://google.com" v-on:click<b class="t01">.prevent</b>="reverse"&gt;reverse&lt;/a&gt;
&lt;/div&gt;

&lt;script&gt;
new Vue({
  el: '#app',
  data: {
    foo: 'hello',
  },
  methods: {
    reverse() {
      this.foo = this.foo.split('').reverse().join('');
    },
  },
});

<b class="t02">// other event modifiers</b>
<b class="t02">// .stop, .capture, .self, .native, .once, .passive,</b>
&lt;/script&gt;
</CopyCode>

---

// keyup

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
  &lt;p&gt;&#123;&#123; foo &#125;&#125;&lt;/p&gt;
  &lt;input type="button" v-on:<b class="t03">keyup</b><b class="t01">.enter</b>="reverse" value="onkeyup enter reverse"&gt;
&lt;/div&gt;

&lt;script&gt;
new Vue({
  el: '#app',
  data: {
    foo: 'hello',
  },
  methods: {
    reverse() {
      this.foo = this.foo.split('').reverse().join('');
    },
  },
});

<b class="t02">// other event modifiers</b>
<b class="t02">// .tab, .delete, .esc, .space, .up, .down, .left, .middle, .right</b>
<b class="t02">// .shift, .control, .alt, .meta, .exact</b>
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="v-model">
      <pre>// text

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
  &lt;input type="text" <b class="t01">v-model="<b class="t03">foo</b>"</b>&gt;
  &lt;p&gt;<b class="t05">&#123;&#123; foo &#125;&#125;</b>&lt;/p&gt;
&lt;/div&gt;

&lt;script&gt;
<b class="t02">new Vue({
  el: '#app',
  data: {
    <b class="t05">foo</b>: 'hello',
  },
});</b>
&lt;/script&gt;
</CopyCode>

---

// checkbox

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
  &lt;input type="checkbox" <b class="t01">v-model="<b class="t03">foo</b>"</b>&gt;
  &lt;p&gt;<b class="t05">&#123;&#123; foo &#125;&#125;</b>&lt;/p&gt;
&lt;/div&gt;

&lt;script&gt;
<b class="t02">new Vue({
  el: '#app',
  data: {
    <b class="t05">foo</b>: false,
  },
});</b>
&lt;/script&gt;
</CopyCode>

---

// checkbox array

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
  &lt;input type="checkbox" value="a" <b class="t01">v-model="<b class="t03">foo</b>"</b>&gt;
  &lt;input type="checkbox" value="b" <b class="t01">v-model="<b class="t03">foo</b>"</b>&gt;
  &lt;input type="checkbox" value="c" <b class="t01">v-model="<b class="t03">foo</b>"</b>&gt;
  &lt;p&gt;<b class="t05">&#123;&#123; foo &#125;&#125;</b>&lt;/p&gt;
&lt;/div&gt;

&lt;script&gt;
<b class="t02">new Vue({
  el: '#app',
  data: {
    <b class="t05">foo</b>: [],
  },
});</b>
&lt;/script&gt;
</CopyCode>

---

// radio

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
  &lt;input type="radio" value="a" <b class="t01">v-model="<b class="t03">foo</b>"</b>&gt;
  &lt;input type="radio" value="b" <b class="t01">v-model="<b class="t03">foo</b>"</b>&gt;
  &lt;input type="radio" value="c" <b class="t01">v-model="<b class="t03">foo</b>"</b>&gt;
  &lt;p&gt;<b class="t05">&#123;&#123; foo &#125;&#125;</b>&lt;/p&gt;
&lt;/div&gt;

&lt;script&gt;
<b class="t02">new Vue({
  el: '#app',
  data: {
    <b class="t05">foo</b>: '',
  },
});</b>
&lt;/script&gt;
</CopyCode>

---

// select

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
  &lt;select <b class="t01">v-model="<b class="t03">foo</b>"</b>&gt;
    &lt;option disabled value=""&gt;select&lt;/option&gt;
    &lt;option value="a"&gt;a&lt;/option&gt;
    &lt;option value="b"&gt;b&lt;/option&gt;
    &lt;option value="c"&gt;c&lt;/option&gt;
  &lt;/select&gt;
  &lt;p&gt;<b class="t05">&#123;&#123; foo &#125;&#125;</b>&lt;/p&gt;
&lt;/div&gt;

&lt;script&gt;
<b class="t02">new Vue({
  el: '#app',
  data: {
    <b class="t05">foo</b>: '',
  },
});</b>
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="v-once">
      <pre><CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app" <b class="t01">v-once</b>&gt;
  <b class="t03">&#123;&#123; foo &#125;&#125;</b>
&lt;/div&gt;

&lt;script&gt;
new Vue({
  el: '#app',
  data: {
    <b class="t03">foo</b>: '1',
  },
});
app.<b class="t04">foo</b> = '2'; <b class="t02">// can not overwrite</b>
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="computed">
      <pre><CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
&lt;p&gt;<b class="t03">&#123;&#123; foo &#125;&#125;</b>&lt;/p&gt;
&lt;p&gt;<b class="t04">&#123;&#123; bar &#125;&#125;</b>&lt;/p&gt;
&lt;/div&gt;

&lt;script&gt;
new Vue({
  el: '#app',
  data: {
    <b class="t03">foo</b>: 'Hello',
  },
  <b class="t01">computed: {</b>
    <b class="t02">// getter</b>
    <b class="t04">bar</b>: function () {
      return <b class="t05">this</b>.<b class="t03">foo</b>.split('').reverse().join('');
    },
  <b class="t01">}</b>,
});
&lt;/script&gt;
</CopyCode>

---

// cache

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
&lt;p&gt;&#123;&#123; foo &#125;&#125;&lt;/p&gt;
&lt;/div&gt;

&lt;script&gt;
new Vue({
  el: '#app',
  <b class="t01">computed: {</b>
    foo: function () {
      return <b class="t03">Date.now()</b>;
    },
  <b class="t01">}</b>,
});

console.log(<b class="t04">app.foo</b>); <b class="t02">// *1</b>

window.setTimeout(() =&gt; {
  console.log(<b class="t04">app.foo</b>); <b class="t02">// same *1</b>
}, 1000);
&lt;/script&gt;
</CopyCode>

---

// setter

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
&lt;p&gt;&#123;&#123; foo &#125;&#125;&lt;/p&gt;
&lt;p&gt;&#123;&#123; bar &#125;&#125;&lt;/p&gt;
&lt;/div&gt;

&lt;script&gt;
new Vue({
  el: '#app',
  data: {
    foo: 'Hello',
  },
  <b class="t01">computed: {</b>
    bar: {
      <b class="t05">get() {</b>
        return this.foo.split('').reverse().join('');
      <b class="t05">}</b>,
      <b class="t05">set(<b class="t00">v</b>) {</b>
        return this.foo = v;
      <b class="t05">}</b>,
    },
  <b class="t01">}</b>,
});

console.log(<b class="t03">app.bar</b>); <b class="t02">// getting</b>
<b class="t04">app.bar</b> = 'setting'; <b class="t02">// setting</b>
console.log(<b class="t03">app.bar</b>); <b class="t02">// getting</b>

&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="[todo p212] watch">
      <pre><CopyCode>

</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="filters">
      <pre>
<CopyCode>&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;

&lt;div id="app"&gt;
  <b class="t04">&#123;&#123; foo <b class="t03">| undefinedFoo</b> &#125;&#125;</b>
&lt;/div&gt;

&lt;script&gt;
new Vue({
  el: '#app',
  data: {
    <b class="t04">foo:</b> '',
  },
  <b class="t01">filters:</b> {
    <b class="t03">undefinedFoo:</b> function (v) {
      if (!v) {
        return 'Undefined "foo"';
      }
      return v;
    },
  },
});
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="component (global)">
      <pre>
<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="<b class="t03">app</b>"&gt;
  <b class="t04">&lt;cpn&gt;&lt;/cpn&gt;</b>
&lt;/div&gt;

&lt;script&gt;
<b class="t02">// global setting</b>
<b class="t01">Vue.component('</b><b class="t04">cpn</b><b class="t01">', {
  template: '</b>&lt;p&gt;hello&lt;/p&gt;<b class="t01">',
});</b>

<b class="t02">// root instance</b>
<b class="t01">new Vue({
  el: '</b><b class="t03">#app</b><b class="t01">',
});</b>
&lt;/script&gt;
</CopyCode>

---

// usage data in component

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
  &lt;cpn&gt;&lt;/cpn&gt;
&lt;/div&gt;

&lt;script&gt;
<b class="t02">// global setting</b>
Vue.component('cpn', {
  template: '&lt;p&gt;&#123;&#123; text &#125;&#125;&lt;/p&gt;',
  <b class="t02">// Use a function type to prevent objects from being shared between instances.</b>
  <b class="t01">data() {
    return {
      <b class="t00">text: 'hello',</b>
    };
  },</b>
});

<b class="t02">// root instance</b>
new Vue({
  el: '#app',
});
&lt;/script&gt;
</CopyCode>

---

// with v-on

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
  &lt;cpn&gt;&lt;/cpn&gt;
&lt;/div&gt;

&lt;script&gt;
Vue.component('cpn', {
  template: '&lt;p <b class="t01">v-on</b>:<b class="t03">click</b>="counter++"&gt;&#123;&#123; counter &#125;&#125; click&lt;/p&gt;',
  data() {
    return {
      counter: 0,
    };
  },
});

new Vue({
  el: '#app',
});
&lt;/script&gt;
</CopyCode>

---

// with v-on and methods

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
  &lt;cpn&gt;&lt;/cpn&gt;
&lt;/div&gt;

&lt;script&gt;
Vue.component('cpn', {
  template: '&lt;p v-on:click="<b class="t03">action</b>"&gt;&#123;&#123; counter &#125;&#125; click&lt;/p&gt;',
  <b class="t01">methods: {</b>
    <b class="t03">action</b>() {
      <b class="t04">this</b>.counter++;
    },
  <b class="t01">}</b>,
  data() {
    return {
      counter: 0,
    };
  },
});

new Vue({
  el: '#app',
});
&lt;/script&gt;
</CopyCode>

---

// with v-on and methods (char_counter)

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
  &lt;cpn&gt;&lt;/cpn&gt;
&lt;/div&gt;

&lt;script&gt;
Vue.component('cpn', {
  template: '&lt;div&gt;&lt;input type="text" v-on:keyup="<b class="t03">action</b>"&gt;&lt;p&gt;&#123;&#123; counter &#125;&#125;&lt;/p&gt;&lt;/div&gt;',
  <b class="t01">methods: {</b>
    <b class="t03">action</b>() {
      this.counter = this.$vnode.elm.childNodes[0].value.length;
    },
  <b class="t01">}</b>,
  data() {
    return {
      counter: 0,
    };
  },
});

new Vue({
  el: '#app',
});
&lt;/script&gt;
</CopyCode>

---

// with computed

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
  &lt;cpn&gt;&lt;/cpn&gt;
&lt;/div&gt;

&lt;script&gt;
Vue.component('cpn', {
  template: '&lt;div&gt;&lt;input type="number" v-model="<b class="t03">num</b>"&gt;&lt;p&gt;&#123;&#123; action &#125;&#125;&lt;/p&gt;&lt;/div&gt;',
  <b class="t01">computed: {</b>
    <b class="t03">action</b>() {
      let total = 0;
      for (let i = 1; i &lt;=this.num; i++) {
        total += i;
      }
      return "total: " + total;
    },
  <b class="t01">}</b>,
  data() {
    return {
      num: 0,
    };
  },
});

new Vue({
  el: '#app',
});
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="props">
      <pre>
<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="<b class="t05">app</b>"&gt;
  &lt;<b class="t06">cpn</b> <b class="t03">foo</b>="text1"&gt;&lt;/cpn&gt;
  &lt;<b class="t06">cpn</b> <b class="t03">foo</b>="text2"&gt;&lt;/cpn&gt;
&lt;/div&gt;

&lt;script&gt;
<b class="t02">// global setting</b>
Vue.component('<b class="t06">cpn</b>', {
  template: '&lt;p&gt;&#123;&#123; <b class="t03">foo</b> &#125;&#125;&lt;/p&gt;',
  <b class="t01">props: [<b class="t03">'foo'</b>]</b>,
});

<b class="t02">// root instance</b>
new Vue({
  el: '<b class="t05">#app</b>',
});
&lt;/script&gt;
</CopyCode>

---

// with v-bind

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="<b class="t05">app</b>"&gt;
  &lt;<b class="t06">cpn</b> v-for="text in data" v-bind:<b class="t03">foo-bar</b>="<b class="t04">text</b>"&gt;&lt;/cpn&gt; <b class="t02">&lt;!-- kebab case --&gt;</b>
&lt;/div&gt;

&lt;script&gt;
<b class="t02">// child scope</b>
Vue.component('<b class="t06">cpn</b>', {
  template: '&lt;p&gt;&#123;&#123; <b class="t03">fooBar</b> &#125;&#125;&lt;/p&gt;', <b class="t02">// camel case</b>
  <b class="t01">props: [</b><b class="t03">'fooBar'</b>], <b class="t02">// camel case</b>
});

<b class="t02">// parent scope</b>
new Vue({
  el: '<b class="t05">#app</b>',
  data: {
    data: ['text1', 'text2', 'text3', 'text4', ],
  },
});

<b class="t02">// Bind data in parent scope from within child scope</b>
&lt;/script&gt;
</CopyCode>

---

// with v-model

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="<b class="t05">app</b>"&gt;
  &lt;<b class="t06">cpn</b> v-bind:<b class="t03">foo</b>="<b class="t03">foo</b>"&gt;&lt;/cpn&gt;
  &lt;input type="text" v-model="<b class="t03">foo</b>"&gt;
&lt;/div&gt;

&lt;script&gt;
Vue.component('<b class="t06">cpn</b>', {
  template: '&lt;p&gt;&#123;&#123; <b class="t03">foo</b> &#125;&#125;&lt;/p&gt;',
  <b class="t01">props: [<b class="t03">'foo'</b>]</b>,
});

new Vue({
  el: '<b class="t05">#app</b>',
  data: {
    <b class="t03">foo</b>: 'test',
  },
});
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="component (local)">
      <pre>
<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="<b class="t03">app</b>"&gt;
  <b class="t04">&lt;cpn&gt;&lt;/cpn&gt;</b>
&lt;/div&gt;

&lt;script&gt;
<b class="t02">// root instance</b>
<b class="t01">new Vue({
  el: '</b><b class="t03">#app</b><b class="t01">',
  <b class="t02">// local setting</b>
  components: {
    '<b class="t04">cpn</b>': {
      template: '</b>&lt;p&gt;hello&lt;/p&gt;<b class="t01">',
    },
  },
});</b>
&lt;/script&gt;
</CopyCode>

---

// usage data in component

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
  &lt;cpn&gt;&lt;/cpn&gt;
&lt;/div&gt;

&lt;script&gt;
<b class="t02">// root instance
new Vue({
  el: '#app',
  // local setting
  components: {
    'cpn': {
      template: '</b>&lt;p&gt;&#123;&#123; text &#125;&#125;&lt;/p&gt;<b class="t02">',
      // Use a function type to prevent objects from being shared between instances.
      <b class="t01">data() {
        return {
          <b class="t00">text: 'hello',</b>
        };
      },</b>
    },
  },
});</b>
&lt;/script&gt;
</CopyCode>

---

// with v-on

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
  &lt;cpn&gt;&lt;/cpn&gt;
  &lt;cpn&gt;&lt;/cpn&gt;
  &lt;cpn&gt;&lt;/cpn&gt;
&lt;/div&gt;

&lt;script&gt;
new Vue({
  el: '#app',
  components: {
    cpn: {
      template: '&lt;p <b class="t01">v-on</b>:<b class="t03">click</b>="counter++"&gt;&#123;&#123; counter &#125;&#125; click&lt;/p&gt;',
      data() {
        return {
          counter: 0,
        };
      },
    },
  },
});
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="lifecycle hooks">
      <pre><CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;

&lt;script&gt;</b>
<b class="t01">new Vue({</b>
  data: {
    foo: 'hello',
  },
  <b class="t01">created()</b> {
    console.log(this.foo); <b class="t02">// hello</b>
  <b class="t01">}</b>,
});

<b class="t02">// beforeCreate - (before create a instance)
// created - (created a instance)
// beforeMount - (before mount on DOM)
// mounted - (mounted on DOM)
// beforeUpdate - (updated a data and before update DOM)
// updated - (updated a data and DOM)
// beforeDestroy - (before delete the instance)
// destroyed - (deleted the instance)</b>
<b class="t02">&lt;/script&gt;</b>
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="x-template">
      <pre>
<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
  <b class="t04">&lt;cpn&gt;&lt;/cpn&gt;</b>
&lt;/div&gt;

<b class="t01">&lt;script type="text/x-template" <b class="t03">id="foo"</b>&gt;
	<b class="t00">&lt;p&gt;hello&lt;/p&gt;</b>
&lt;/script&gt;</b>

&lt;script&gt;
Vue.component('<b class="t04">cpn</b>', {
  template: '<b class="t03">#foo</b>',
});

new Vue({
  el: '#app',
});
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="slot content">
      <pre><CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
  &lt;cpn&gt;
    &lt;p <b class="t01">slot</b>="<b class="t03">text</b>"&gt;title A&lt;/p&gt;
    <b class="t02">// When there is no p, display slot of template
    // Use when you want to have some patterns in cpn</b>
  &lt;/cpn&gt;
&lt;/div&gt;

&lt;script&gt;
Vue.component('cpn', {
  template: '&lt;<b class="t01">slot</b> name="<b class="t03">text</b>"&gt;&lt;p&gt;no title&lt;/p&gt;&lt;/slot&gt;',
});

new Vue({
  el: '#app',
});
&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="vue-router">
      <pre><CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>
<b class="t01">&lt;script src="https://cdn.jsdelivr.net/npm/vue-router"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
  <b class="t01">&lt;router-link to="<b class="t00">/a</b>"&gt;<b class="t00">Page A</b>&lt;/router-link&gt;
  &lt;router-link to="<b class="t00">/b</b>"&gt;<b class="t00">Page B</b>&lt;/router-link&gt;
  &lt;router-view&gt;&lt;/router-view&gt;</b>
&lt;/div&gt;

&lt;script&gt;
const <b class="t03">router</b> = <b class="t01">new VueRouter({
  routes: [
    {
      path: '<b class="t00">/a</b>',
      component: {
        template: '<b class="t04">&lt;div&gt;Page A&lt;/div&gt;</b>',
      },
    },
    {
      path: '<b class="t00">/b</b>',
      component: {
        template: '<b class="t04">&lt;div&gt;Page B&lt;/div&gt;</b>',
      },
    },
  ],
})</b>;

new Vue({
  el: '#app',
  <b class="t03">router</b>,
});
&lt;/script&gt;
</CopyCode>

---

// params

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue-router"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
  &lt;router-link <b class="t05">:to="{ <b class="t03">name: '<b class="t00">user</b>'</b>, <b class="t04">params: { userId: <b class="t00">'foo'</b> }</b>}"</b>&gt;Page A&lt;/router-link&gt;
  &lt;router-link to="/b"&gt;Page B&lt;/router-link&gt;
  &lt;router-view&gt;&lt;/router-view&gt;
&lt;/div&gt;

&lt;script&gt;
const router = new VueRouter({
  routes: [
    {
      path: '/a/<b class="t04">:userId</b>',
      <b class="t03">name: '<b class="t00">user</b>'</b>,
      component: {
        template: '&lt;div&gt;Page A (<b class="t01">&#123;&#123; $route.<b class="t04">params.userId</b> &#125;&#125;</b>)&lt;/div&gt;',
      },
    },
    {
      path: '/b',
      component: {
        template: '&lt;div&gt;Page B&lt;/div&gt;',
      },
    },
  ],
});

new Vue({
  el: '#app',
  router,
});
&lt;/script&gt;
</CopyCode>

---

// params (router.push)

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue-router"&gt;&lt;/script&gt;</b>

&lt;div id="app"&gt;
  &lt;router-link to="/a"&gt;Page A&lt;/router-link&gt;
  &lt;router-link to="/b"&gt;Page B&lt;/router-link&gt;
  &lt;router-view&gt;&lt;/router-view&gt;
&lt;/div&gt;

&lt;script&gt;
const router = new VueRouter({
  routes: [
    {
      path: '/a',
      name: 'user',
      component: {
        template: '&lt;div&gt;Page A (&#123;&#123; $route.params.userId &#125;&#125;)&lt;/div&gt;',
      },
    },
    {
      path: '/b',
      component: {
        template: '&lt;div&gt;Page B&lt;/div&gt;',
      },
    },
  ],
});

new Vue({
  el: '#app',
  router,
});

<b class="t01">router.push(<b class="t04">{ name: 'user', params: { userId: 'foo' }}</b>)</b>;
<b class="t02">//router.push({ path: 'register', query: { plan: 'private' } });</b>
&lt;/script&gt;
</CopyCode>

</pre>
    </SwitchBox>

    <SwitchBox title="[todo modify] single file component">
      <pre>project/
│
├ html/
   └ index.html
├ webpack.config.js
├ package.json
└ js/
   ├ <b class="t01">main.js</b>
   └ components/
     ├ <b class="t03">header.vue</b>
     ├ <b class="t03">content.vue</b>
     └ <b class="t03">footer.vue</b>

---

// index.html

<CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="../js/main.js"&gt;&lt;/script&gt;</b>

&lt;div <b class="t01">id="app"</b>&gt;
  <b class="t03">&lt;sample-header&gt;&lt;/sample-header&gt;
  &lt;sample-content&gt;&lt;/sample-content&gt;
  &lt;sample-footer&gt;&lt;/sample-footer&gt;</b>
&lt;/div&gt;
</CopyCode>

---

// main.js

<CopyCode>import Vue from 'vue';
import SampleHeader from './component/header.vue';
import SampleContent from './component/content.vue';
import SampleFooter from './component/footer.vue';

Vue.config.productionTip = false;

new Vue({
  components: {
    <b class="t03">SampleHeader</b>,
    <b class="t03">SampleContent</b>,
    <b class="t03">SampleFooter</b>,
  },
}).$mount('<b class="t01">#app</b>');
</CopyCode>

---

// header.vue

<CopyCode>&lt;template&gt;
  &lt;div class="title"&gt;
    &lt;h1&gt;&#123;&#123; text &#125;&#125;&lt;/h1&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      text: 'header',
    };
  }
};
&lt;/script&gt;

&lt;style lang="scss" scoped&gt;
.title {
  height: 60px;
  background: #f1f1f1;
}
&lt;/style&gt;
</CopyCode>

---

// content.vue

<CopyCode>&lt;template&gt;
  &lt;div class="content"&gt;
    &lt;p&gt;&#123;&#123; text &#125;&#125;&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      text: 'content',
    };
  },
};
&lt;/script&gt;

&lt;style lang="scss" scoped&gt;
.content {
  height: 600px;
  background: #fff;
}
&lt;/style&gt;
</CopyCode>

---

// footer.vue

<CopyCode>&lt;template&gt;
  &lt;div class="footer"&gt;
    &lt;p&gt;&#123;&#123; text &#125;&#125;&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      text: 'footer',
    };
  }
};
&lt;/script&gt;

&lt;style lang="scss" scoped&gt;
.footer {
  height: 60px;
  background: #f1f1f1;
}
&lt;/style&gt;
</CopyCode>

---

// webpack.config.js

const path = require('path');
const LicenseInfoWebpackPlugin = require('license-info-webpack-plugin').default;
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {

  entry: {
    'project_name': './js/src/main.js',
  },

  output: {
    path: path.join(__dirname, 'dest'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /\/node_modules\//,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                ],
              ],
            },
          },
        ],
      },
      {
        loader: 'eslint-loader',
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        options: {
        configFile: '.eslintrc.js',
        },
      },
      {
      test: /\.vue$/,
      loader: 'vue-loader'
      },
      {
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader',
        },
        {
          loader: 'css-loader',
        },
        {
          loader: 'sass-loader',
        },
      ],
      },
    ],
  },

  devtool: !process.argv.includes('production') ? 'eval-source-map' : false,

  plugins: [
    new LicenseInfoWebpackPlugin({
      glob: '{LICENSE,license,License}*',
    }),
    new VueLoaderPlugin(),
  ],

  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },

};

---

// package.json

  "devDependencies": {
  "@babel/core": "^7.9.0",
  "@babel/preset-env": "^7.9.0",
  "babel-loader": "^8.1.0",
  "css-loader": "^3.5.1",
  "eslint": "^4.19.1",
  "eslint-loader": "^2.2.1",
  "json-minify": "^1.0.0",
  "license-info-webpack-plugin": "^1.0.0",
  "node-sass": "^4.13.1",
  "sass-loader": "^8.0.2",
  "spritesmith": "^3.4.0",
  "style-loader": "^1.1.3",
  "vue": "^2.6.11",
  "vue-loader": "^15.9.1",
  "vue-template-compiler": "^2.6.11",
  "webpack": "^4.42.0",
  "webpack-cli": "^3.3.11"
  }
</pre>
    </SwitchBox>

    <SwitchBox title="[todo p235] slot">
      <pre><CopyCode>

</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="[todo p244, p245(JSX)] render in component">
      <pre><CopyCode>

</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="[todo p251] transition">
      <pre><CopyCode>

</CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="[todo] nuxt.js">
      <pre><CopyCode><b class="t01">
npx create-nuxt-app </b>[project name]<b class="t01">
npm run dev
</b></CopyCode>
</pre>
    </SwitchBox>

    <SwitchBox title="///">
      <pre><CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;script src="https://cdn.jsdelivr.net/npm/vue"&gt;&lt;/script&gt;</b>

&lt;script&gt;

&lt;/script&gt;
</CopyCode>
</pre>
    </SwitchBox>
  </PreCodes>
</template>
