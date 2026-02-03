<script lang="ts">
export const metadata = {
  updateDate: '2016/06/06',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader title="charles" :update-date="metadata.updateDate" />

  <PreCodes>
    <pre><code><b class="t01">https://www.charlesproxy.com/</b>   <b class="t02">// Download</b>

// charles側
<b class="t01">[command]+[shift]+L</b>  <b class="t02">// Map Local Settings (Protocol, Host, Path, Local Path を設定してローカルファイルと紐付け)</b>
<b class="t01">Proxy</b> &gt; <b class="t01">Proxying Setting</b> &gt; <b class="t01">Mac OS X</b> &gt; <b class="t01">Enable Mac OS X Proxy にチェック(Macの場合)</b>
<b class="t02">// SSLの場合は、HELP > SSL Proxying > Install Charles Root Certificate からキーチェーンリストの中のCharles証明書を信頼設定する</b>
<b class="t02">// SSLの場合は、Proxy > SSL Proxying Setting > Enable SSL Proxying にチェック > Locationsにアスタリスク(*)を設定</b>

// 端末側(iOS)
<b class="t01">設定</b> &gt; <b class="t01">Wi-Fi</b> &gt; <b class="t01">iマーク</b> &gt; <b class="t01">HTTPプロキシ[手動]</b> &gt; <b class="t01">サーバ(PCのIP)とポート(8888)を入力</b>  <b class="t02">// 8888はcharles側初期ポート</b>
<b class="t02">// SSLの場合は、↓端末に証明書をインストール(iOS: charlesにプロキシした状態で、safariで、以下にアクセス)</b>
<b class="t02">// <a href="http://www.charlesproxy.com/getssl">http://www.charlesproxy.com/getssl</a></b>
</code></pre>
  </PreCodes>
</template>
