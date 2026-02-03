<script lang="ts">
export const metadata = {
  updateDate: '2013/03/15',
}
</script>

<script setup lang="ts">
import SwitchBox from '@/components/SwitchBox.vue'
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader title="svn" :update-date="metadata.updateDate" />

  <PreCodes>
    <SwitchBox title="準備">
      <pre><code>// Xcode インストール
<b class="t01">https://developer.apple.com/xcode/</b>  <b class="t02">// AppleIDが必要</b>
<b class="t01">Xcode</b> &gt; <b class="t01">Open Developer Tool</b> &gt; <b class="t01">More Developer Tools...</b>
<b class="t01">Command Line Tools for Xcode インストール</b>  <b class="t02">// Homebrewに必要</b>

// Homebrew インストール
<b class="t01">ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go/install)"</b>  <b class="t02">// 下記コマンド使用に必要</b>

// Subversion インストール
<b class="t01">brew install svn</b>
</code></pre>
    </SwitchBox>

    <SwitchBox title="ステータス">
      <pre><code>svn <b class="t01">--version</b>  <b class="t02">// バージョン確認</b>

svn <b class="t01">info</b>  <b class="t02">// リポジトリ情報表示</b>

svn <b class="t01">status</b>  <b class="t02">// 変更内容表示</b>

svn <b class="t01">log</b>  <b class="t02">// コミットログ表示</b>
svn <b class="t01">log --verbose</b>  <b class="t02">// コメント表示</b>
svn <b class="t01">log --limit</b> [n]<b class="t02">// 最新n件表示(コミットした直後の最新は表示されない)</b>
svn <b class="t01">log --limit</b> [n] [repository]  <b class="t02">// 共有された最新n件表示(コミットした直後の最新も表示される)</b>

svn <b class="t01">diff -r </b>[commit id(before)]<b class="t01">:</b>[commit id(after)]  <b class="t02">// 差分全表示</b>
svn <b class="t01">diff -r </b>[commit id(before)]<b class="t01">:</b>[commit id(after)] <b class="t01">| awk '/^Index/ {print $NF}'</b>  <b class="t02">// 差分のあるファイル名のみ表示</b>
svn <b class="t01">diff -r </b>[commit id(before)]<b class="t01">:</b>[commit id(after)] [file]  <b class="t02">// 指定ファイルの差分表示</b>
</code></pre>
    </SwitchBox>

    <SwitchBox title="リポジトリ">
      <pre><code>svn <b class="t01">mkdir -m "</b>comment<b class="t01">"</b> [repository]/trunk/[dir]  <b class="t02">// trunkフォルダ作成</b>

svn <b class="t01">mkdir -m "</b>comment<b class="t01">"</b> [repository]/branches/[branch name]  <b class="t02">// branchフォルダ作成</b>
svn <b class="t01">cp -m "</b>comment<b class="t01">"</b> [repository]/trunk/[dir] [repository]/branches/[branch name]/[dir]
<b class="t02">// trunkからbranchを切る</b>

svn <b class="t01">rm -m "</b>comment<b class="t01">"</b> [repository]/branches/[branch name]  <b class="t02">//不要branch削除</b>
</code></pre>
    </SwitchBox>

    <SwitchBox title="チェックアウト">
      <pre><code>svn <b class="t01">co</b> [repository]/trunk/[dir] [local dir]  <b class="t02">// trunk チェックアウト</b>
svn <b class="t01">co</b> [repository]/branches/[branch name]/[dir] [local dir]  <b class="t02">// branch チェックアウト</b>

svn <b class="t01">co</b> [repository]/trunk/[dir]<b class="t01">@</b>[revision num] [local dir]
<b class="t02">// 特定 revision num チェックアウト(dirが消えた後に取得する場合、revision numはtrunk直下のlogから参照したものを入れる)</b>
</code></pre>
    </SwitchBox>

    <SwitchBox title="ファイル更新">
      <pre><code>svn <b class="t01">up</b>  <b class="t02">// アップデート</b>

svn <b class="t01">add</b> [file,dir]  <b class="t02">// 追加登録</b>
svn <b class="t01">add * --force</b>  <b class="t02">// カレント以下全て対象</b>

svn <b class="t01">delete</b> [file,dir]  <b class="t02">// 削除登録</b>
svn <b class="t01">status | grep '^!' | awk '{print $2}' | xargs svn delete</b>  <b class="t02">// カレント以下のステータス'!'のファイル対象</b>

svn <b class="t01">revert</b> [file]  <b class="t02">// ファイル変更の取り消し</b>

svn <b class="t01">ci -m "</b>comment<b class="t01">"</b>  <b class="t02">// コミット</b>
</code></pre>
    </SwitchBox>

    <SwitchBox title="マージ">
      <pre><code>svn <b class="t01">merge</b> [repository]/branches/[branch]/[remote dir]
<b class="t02">// branchからmerge([local dir]内の最上階層で実行,[remote dir]が[local dir]にmergeされる)</b>
svn <b class="t01">merge -r</b> <b class="t01">HEAD:</b>[revision num] [local dir]
<b class="t02">// revision num の内容に戻す(commitで反映)</b>

svn <b class="t01">resolved</b> [C file]
<b class="t02">// [C file]を編集した後、競合の中間ファイル[? file]が削除される</b>
</code></pre>
    </SwitchBox>

    <SwitchBox title="切断">
      <pre><code><b class="t01">find . -type d -name .svn</b>  <b class="t02">// カレント以下の.svn検索</b>
<b class="t01">find . -type d -name .svn -print0 | xargs -0 rm -rf</b>  <b class="t02">// カレント以下の.svn削除</b>
</code></pre>
    </SwitchBox>
  </PreCodes>
</template>
