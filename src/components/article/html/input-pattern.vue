<script lang="ts">
export const metadata = {
  updateDate: '2016/10/01',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader
    title="input-pattern"
    sample-url="/sample/html/input-pattern.html"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><code><CopyCode><b class="t02">&lt;!doctype html&gt;
&lt;title&gt;title&lt;/title&gt;
&lt;meta charset="utf-8"&gt;
&lt;meta name="viewport" content="width=device-width"&gt;

&lt;style&gt;
input {
padding: 6px;
border: #ddd 1px solid;
}
&lt;/style&gt;</b>

&lt;form action="#" method="post"&gt;

電話番号(ハイフンあり、半角数字、桁指定):
&lt;input type="text" <b class="t05">pattern="<b class="t04">\d{1,5}-\d{1,4}-\d{4,5}</b>"</b> title="市外局番からハイフン(-)あり"&gt;&lt;br&gt;

電話番号(ハイフンなし、半角数字、桁指定):
&lt;input type="text" <b class="t05">pattern="<b class="t04">\d{6,14}</b>"</b> title="市外局番からハイフン(-)なし"&gt;&lt;br&gt;

電話番号(ハイフン不問、半角数字、桁指定なし):
&lt;input type="text" <b class="t05">pattern="<b class="t04">^[\d-]+$</b>"</b> title="市外局番から"&gt;&lt;br&gt;

メールアドレス(半角英数字、@._-):
&lt;input type="text" <b class="t05">pattern="<b class="t04">^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$</b>"</b>&gt;&lt;br&gt;

URL:
&lt;input type="text" <b class="t05">pattern="<b class="t04">https?://.+</b>"</b>&gt;&lt;br&gt;

口座番号(半角数字、全角数字、7桁):
&lt;input type="text" <b class="t05">pattern="<b class="t04">[0-9０-９]{7}</b>"</b>&gt;&lt;br&gt;

半角英数字のみ:
&lt;input type="text" <b class="t05">pattern="<b class="t04">^[0-9A-Za-z]+$</b>"</b>&gt;&lt;br&gt;

半角英字のみ:
&lt;input type="text" <b class="t05">pattern="<b class="t04">^[A-Za-z]+$</b>"</b>&gt;&lt;br&gt;

半角数字のみ:
&lt;input type="text" <b class="t05">pattern="<b class="t04">^\d+$</b>"</b>&gt;&lt;br&gt;

全角ひらがなのみ:
&lt;input type="text" <b class="t05">pattern="<b class="t04">^[\sぁ-んゔ゛゜ー「」、]+$</b>"</b>&gt;&lt;br&gt;

全角カタカナのみ:
&lt;input type="text" <b class="t05">pattern="<b class="t04">^[\sァ-ンヴ゛゜ー「」、]+$</b>"</b>&gt;&lt;br&gt;

半角ｶﾀｶﾅのみ:
&lt;input type="text" <b class="t05">pattern="<b class="t04">^[\sｧ-ﾝﾞﾟｰ｡｢｣､]+$</b>"</b>&gt;&lt;br&gt;

カタカナの氏名など
&lt;input type="text" <b class="t05">pattern="<b class="t04">^[\sァ-ンヴ゛゜ー「」、ｧ-ﾝﾞﾟｰ｡｢｣､]+$</b>"</b>&gt;&lt;br&gt;

&lt;br&gt;
&lt;input type="reset" value="リセット"&gt; &lt;input type="submit" value="送信"&gt;

&lt;/form&gt;
</CopyCode>
</code></pre>
  </PreCodes>
</template>
