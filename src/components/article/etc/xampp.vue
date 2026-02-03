<script lang="ts">
export const metadata = {
  updateDate: '2013/03/03',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader title="xampp" :update-date="metadata.updateDate" />

  <PreCodes>
    <h3>DocumentRoot変更</h3>

    <p>
      xamppを「/Applications」直下にインストール後、xampp起動時に、ブラウザで「http://localhost」にアクセスすると、「/Applications/XAMPP/xamppfiles/htdocs」を読みにいく。これを、自分で用意したワーキングディレクトリ「/Users/me/workspace」を読みにいくように変更。
    </p>

    <p>1）設定ファイル(httpd.conf)を開く</p>

    <pre><code>vi /Applications/XAMPP/etc/<b class="t01">httpd.conf</b>  <b class="t02">// バージョンによって場所が違うので注意</b>
</code></pre>

    <p>2）230行目あたり、以下の変更を行う</p>

    <pre><code>DocumentRoot "<b class='t01'>/Applications/XAMPP/xamppfiles/htdocs</b>"
&lt;Directory "<b class='t01'>/Applications/XAMPP/xamppfiles/htdocs</b>"&gt;
↓
DocumentRoot "<b class='t01'>/Users/me/workspace</b>"
&lt;Directory "<b class='t01'>/Users/me/workspace</b>"&gt;
</code></pre>

    <p>3）370行目あたり、以下の追加を行う</p>

    <pre><code><b class='t02'>// 「/Applications/XAMPP/xamppfiles」傘下のディレクトリ以外は参照させない設定</b>
&lt;Directory "/Applications/XAMPP/xamppfiles/cgi-bin"&gt;
  AllowOverride None
  Options None
  Require all granted
&lt;/Directory&gt;


<b class='t02'>// ここから追加</b>

<b class='t02'>// 「/Users/me/workspace」傘下のディレクトリへの参照を許可する設定</b>
<b class='t01'>&lt;Directory "/Users/me/workspace"&gt;
  Options Indexes FollowSymLinks Includes ExecCGI
  AllowOverride All
  Order allow,deny
  Allow from all
&lt;/Directory&gt;

<b class='t02'>// 「http://localhost/xampp/」でのAdmin画面参照を有効にするエイリアス設定</b>
Alias /xampp "/Applications/XAMPP/xamppfiles/htdocs/xampp"
&lt;Directory "/Applications/XAMPP/xamppfiles/htdocs/xampp"&gt;
  Options Indexes FollowSymLinks Includes ExecCGI
  AllowOverride All
  Order allow,deny
  Allow from all
&lt;/Directory&gt;</b>
</code></pre>

    <h3>php 設定</h3>

    <p>1）設定ファイル(php.ini)を開く</p>

    <pre><code>vi /Applications/XAMPP/etc/<b class="t01">php.ini</b>  <b class="t02">// バージョンによって場所が違うので注意</b>
</code></pre>

    <p>2）各パラメータを検索し、先頭の「;」を削除し、値を以下に修正。</p>

    <pre><code>default_charset = <b class="t01">"UTF-8"</b>
mbstring.language = <b class="t01">Japanese</b>
mbstring.internal_encoding = <b class="t01">UTF-8</b>
mbstring.http_input = <b class="t01">auto</b>
mbstring.detect_order = <b class="t01">SJIS,EUC-JP,UTF-8,ASCII</b>
date.timezone = <b class="t01">'Asia/Tokyo'</b>
</code></pre>

    <h3>セキュリティ設定</h3>

    <p>下記コマンドから、各パスワードを設定していく。</p>

    <pre><code><b class="t01">sudo /Applications/XAMPP/xamppfiles/xampp security</b>
</code></pre>
  </PreCodes>
</template>
