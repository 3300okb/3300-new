<script lang="ts">
export const metadata = {
  updateDate: '2012/04/12',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader title="server-path" :update-date="metadata.updateDate" />

  <PreCodes>
    <p>
      branch や tag
      にプロジェクトごとコピーしてフォルダの階層が変わるとき、html内に記述する
      img や css,
      htmlモジュールのパス指定を調整しなくて済むように、htmlフォルダ直前までのパスを自動取得するプログラムを書いた。
    </p>

    <p>
      explode関数を使うのがミソ。$req_uri[0] の値が /html/
      の直前までのパスとなる。
    </p>

    <pre><code>&lt;?php
$req_uri = explode("/html/", $_SERVER['REQUEST_URI']);
if($_SERVER["SERVER_NAME"]==='3300.me'){
  include('サーバー側のconf.htmlのパス');
}else{
  include($_SERVER['DOCUMENT_ROOT'].$req_uri[0].'/html/conf.html');
}
?&gt;</code></pre>

    <p>以下は、conf.html の中身のパス設定例。</p>

    <pre><code>if($_SERVER["SERVER_NAME"]==='(サーバーの種類を判断する文字列)'){
  $inc_path = '(サーバーのルート)';
  $src_path = '(サーバーのルート)';
  $lnk_path = '/';
}else{
  $inc_path = $_SERVER['DOCUMENT_ROOT'].$req_uri[0].'/';
  $src_path = $req_uri[0].'/';
  $lnk_path = $src_path.'html/index.php';
}</code></pre>
  </PreCodes>
</template>
