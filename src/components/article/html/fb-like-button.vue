<script lang="ts">
export const metadata = {
  updateDate: '2013/03/21',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader title="fb-like-button" :update-date="metadata.updateDate" />

  <PreCodes>
    <p class="text-black">
      facebookのいいねボタンは、仕様がよく変わるので、実装する度に調べ直している気がする。以下は、<b>2013年3月21日時点</b>の内容。
    </p>

    <p class="text-black">
      ボタンとcount数のデザインタイプ（Layout Style =&gt;
      button_count）を利用。<a
        href="http://developers.facebook.com/tools/debug"
        target="_blank"
        class="underline"
        >デバッガー</a
      >でエラーが出ないように、かつ、自分のフィードだけではなく友だちのタイムラインにもアクションを表示させる、かつ、ボタンを押した時にコメントレイヤーが出てそこから投稿する「シェア」扱い（ユーザーの操作が増える）ではなく、あくまで「いいね」扱いを維持する例。コードを少しずつ変えたボタンを20パターンほど設置して検証した結果。
    </p>

    <p class="text-black">
      １）app_idを取得（<a
        href="http://c-brains.jp/blog/wsg/12/08/01-180044.php"
        target="_blank"
        class="underline"
        >参考</a
      >）。
    </p>

    <p class="text-black">
      ２）ボタンを設置するページのhtmlタグ内にprefix属性を入れる。
    </p>

    <pre><code>&lt;html <b class="t01">prefix="og: http://ogp.me/ns#"</b>&gt;</code></pre>

    <p class="text-black">
      ３）<a
        href="http://developers.facebook.com/docs/reference/plugins/like/"
        target="_blank"
        >公式ページ</a
      >でボタンのコードを生成。今は HTML5, XFBML, IFRAME のタイプがある。
      下記はIFRAMEの場合。ボタン設置箇所に以下のコードを記述（HTML5やXFBMLは記述するコードが他にもある）。
    </p>

    <pre><code>&lt;iframe src="//www.facebook.com/plugins/like.php?href=(ボタンを設置するページのURL)&amp;send=false&amp;layout=button_count&amp;width=450&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font&amp;height=21&amp;appId=(取得したapp_id)" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:300px; height:21px;" allowTransparency="true"&gt;&lt;/iframe&gt;</code></pre>

    <p class="text-black">
      ４）ogp meta を &lt;head&gt; 内に記述。fb:admins
      は複数人での管理の必要がなければ要らない。og:type
      はブログ記事などページ単位の場合は「article」にする（「blog」や「website」はサイトのトップ用の仕様で、記事ページで使用すると友だちのフィードに出ないケースがあった）。og:locale
      は必要無い。og:image
      は1辺が200px未満の画像だとデバッガーでエラーが出るが、ボタンアクションに影響は無い。
    </p>

    <pre><code>&lt;meta property="og:title" content="(ボタンを設置するページのタイトル)"&gt;
&lt;meta property="og:type" content="(ボタンを設置するページのタイプ)"&gt;
&lt;meta property="og:description" content="(ボタンを設置するページのディスクリプション)"&gt;
&lt;meta property="og:url" content="(ボタンを設置するページのURL)"&gt;
&lt;meta property="og:image" content="(フィードに表示させたいサムネイル画像)"&gt;
&lt;meta property="og:site_name" content="(サイトの名前)"&gt;
&lt;meta property="fb:app_id" content="(取得したapp_id)"&gt;</code></pre>

    <p class="text-black">↓</p>

    <iframe
      src="//www.facebook.com/plugins/like.php?href=http%3A%2F%2F3300.me%2F%3Fend%3Dfacebook_like_button.html&send=false&layout=button_count&width=300&show_faces=false&action=like&colorscheme=light&font&height=21&appId=376227549120754&locale=en_US"
      title="Facebook Like Button"
      loading="lazy"
      style="border: none; overflow: hidden; width: 300px; height: 21px"
    ></iframe>

    <p class="text-black">
      このボタンのテキストが「いいね」でなく「Like」なのは、上記ボタン設置コードに「&amp;locale=en_US」を追加したため。HTML5とXFBMLの場合は、body
      の開始タグ直後にも記述するコードが必要で、ボタンテキストを他言語にする場合はそのコードの
      ja_JP
      の部分を書き換える。XFBMLは、旧ie用にhtmlタグ内にxmlnsのコードが必要なので場合によって適用する。いずれも<a
        href="http://developers.facebook.com/docs/reference/plugins/like/"
        target="_blank"
        class="underline"
        >公式ページ</a
      >でボタン設置コード生成時に取得する。
    </p>

    <table aria-label="Facebook Like Button implementation comparison">
      <thead>
        <tr>
          <td></td>
          <td>HTML5</td>
          <td>XFBML</td>
          <td>IFRAME</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>app_idの取得</td>
          <td class="cnt">○</td>
          <td class="cnt">○</td>
          <td class="cnt">○</td>
        </tr>
        <tr>
          <td>htmlタグ内のxmlnsコード</td>
          <td class="cnt">不要</td>
          <td class="cnt">○</td>
          <td class="cnt">不要</td>
        </tr>
        <tr>
          <td>body開始タグ後のコード</td>
          <td class="cnt">○</td>
          <td class="cnt">○</td>
          <td class="cnt">不要</td>
        </tr>
        <tr>
          <td>ボタン設置コード</td>
          <td class="cnt">○</td>
          <td class="cnt">○</td>
          <td class="cnt">○</td>
        </tr>
      </tbody>
    </table>
  </PreCodes>
</template>

<style scoped>
table {
  border-collapse: collapse;
  margin-top: 16px;
}

td {
  border: 1px solid #ccc;
  padding: 8px 12px;
  color: #000;
}

.cnt {
  text-align: center;
}
</style>
