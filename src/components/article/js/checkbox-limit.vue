<script lang="ts">
export const metadata = {
  updateDate: '2016/08/08',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader
    title="checkbox-limit"
    sample-url="/sample/html/checkbox-limit.html"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><code><CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;html <b class="t04">lang="ja"</b>&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1"&gt;</b>

&lt;div <b class="t05">data-max="3"</b>&gt;
&lt;label&gt;&lt;input type="checkbox" name="name1" value="1"&gt;1&lt;/label&gt;
&lt;label&gt;&lt;input type="checkbox" name="name1" value="2"&gt;2&lt;/label&gt;
&lt;label&gt;&lt;input type="checkbox" name="name1" value="3"&gt;3&lt;/label&gt;
&lt;label&gt;&lt;input type="checkbox" name="name1" value="4"&gt;4&lt;/label&gt;
&lt;label&gt;&lt;input type="checkbox" name="name1" value="5"&gt;5&lt;/label&gt;
&lt;label&gt;&lt;input type="checkbox" name="name1" value="6"&gt;6&lt;/label&gt;
&lt;label&gt;&lt;input type="checkbox" name="name1" value="7"&gt;7&lt;/label&gt;
&lt;/div&gt;

&lt;div <b class="t05">data-max="3"</b>&gt;
&lt;label&gt;&lt;input type="checkbox" name="name2" value="1"&gt;1&lt;/label&gt;
&lt;label&gt;&lt;input type="checkbox" name="name2" value="2"&gt;2&lt;/label&gt;
&lt;label&gt;&lt;input type="checkbox" name="name2" value="3"&gt;3&lt;/label&gt;
&lt;label&gt;&lt;input type="checkbox" name="name2" value="4"&gt;4&lt;/label&gt;
&lt;label&gt;&lt;input type="checkbox" name="name2" value="5"&gt;5&lt;/label&gt;
&lt;label&gt;&lt;input type="checkbox" name="name2" value="6"&gt;6&lt;/label&gt;
&lt;label&gt;&lt;input type="checkbox" name="name2" value="7"&gt;7&lt;/label&gt;
&lt;/div&gt;

<b class="t01">&lt;script&gt;
(function(doc) {
  var lang = doc.querySelector('html').getAttribute('lang');
  var isJa = !!(lang === 'ja' || lang === 'ja-JP');
  var checkboxSet = doc.querySelectorAll('[data-max]');

  if (checkboxSet.length === 0) {
    return;
  }

  function setUpperLimit(el, name, max) {
    el.addEventListener('click', function(ev) {
      if (doc.querySelectorAll('input[name="' + name + '"]:checked').length > max) {
        if (isJa) {
          alert('最大' + max + 'つまで選択可能です。');
        } else {
          alert('The upper limit is ' + max + '.');
        }
        ev.preventDefault();
      }
    });
  }

  Object.values(checkboxSet).forEach(function(value) {
    var max = value.dataset.max;
    if (isNaN(max)) {
      return;
    };

    var inputs = value.querySelectorAll('input');
    if (inputs.length === 0) {
      return;
    };

    var name = value.querySelector('input').getAttribute('name');
    Object.values(inputs).forEach(function (value) {
      setUpperLimit(value, name, max);
    });
  });
})(document);
&lt;/script&gt;</b>
</CopyCode>
</code></pre>
  </PreCodes>
</template>
