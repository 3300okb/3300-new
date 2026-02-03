<script lang="ts">
export const metadata = {
  updateDate: '2014/11/09',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader title="ricty-font" :update-date="metadata.updateDate" />

  <PreCodes>
    <pre><code><b class="t01">http://save.sys.t.u-tokyo.ac.jp/~yusa/fonts/ricty.html</b>

<b class="t01">sudo xcodebuild -license</b>  <b class="t02">// (Xcodeが必要)</b>
<b class="t01">ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/goe"</b>  <b class="t02">// Homebrew インストール</b>
<b class="t01">echo $PATH</b>  <b class="t02">// 表示される変数の値を確認し、/usr/bin より /usr/local/bin が右にあったら入れ替える</b>
<b class="t01">brew tap sanemat/font</b>
<b class="t01">brew install ricty</b>
<b class="t01">cd [Ricty生成に必要なファイル(Inconsolata.otf など)のある場所]</b>
<b class="t01">sh ricty_generator.sh Inconsolata.otf migu-1m-regular.ttf migu-1m-bold.ttf</b>
<b class="t01">cp -f Ricty*.ttf ~/Library/Fonts/</b>
</code></pre>
  </PreCodes>
</template>
