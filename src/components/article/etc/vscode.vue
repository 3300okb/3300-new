<script lang="ts">
export const metadata = {
  updateDate: '2021/09/08',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader title="VS Code" :update-date="metadata.updateDate" />

  <PreCodes>
    <pre>
// ウィンドウ
<b class="t01">command + opt + p</b> <b class="t02">// プロジェクトを開く</b>
<b class="t01">command + shift + E</b> <b class="t02">// EXPLORERを開く</b>
<b class="t01">command + shift + F</b> <b class="t02">// SEARCHを開く</b>
<b class="t01">ctrl + shift + G</b> <b class="t02">// SOURCE CONTROLを開く</b>
<b class="t01">command + shift + X</b> <b class="t02">// EXTENSIONSを開く</b>
<b class="t01">command + b</b> <b class="t02">// サイドバー開閉</b>
<b class="t01">command + j</b> <b class="t02">// ボトムバー開閉</b>
<b class="t01">command + ,</b> <b class="t02">// 設定画面を開く</b>
<b class="t02">(ファイルにフォーカス当たっている状態で)</b> <b class="t01">ctrl + enter</b> <b class="t02">// 分割で開く</b>


// 検索
<b class="t01">command + p</b> <b class="t02">// ファイル名からファイル検索</b>
<b class="t01">command + shift + O</b> <b class="t02">// ファイル内のシンボルを検索</b>
<b class="t01">command + shift + p</b> <b class="t02">// コマンド検索</b>
<b class="t01">command + shift + F</b> <b class="t02">// プロジェクト内テキスト検索</b>
<b class="t01">(テキストを選択している状態で)command + shift + F</b> <b class="t02">// 選択範囲内のテキストのプロジェクト内検索</b>


// 移動
<b class="t01">ctrl + `</b> <b class="t02">// ターミナルに移る</b>
<b class="t01">ctrl + 1</b> <b class="t02">// アクティブなウィンドウのエディタにタブ指定で移る</b>
<b class="t01">command + 1</b> <b class="t02">// 分割されたエディタにウィンドウ指定で移る</b>


// エディタ
<b class="t01">command + \</b> <b class="t02">// ウィンドウ分割</b>
<b class="t01">command + 2</b> <b class="t02">// ウィンドウ分割 (3分割目は command + 3)</b>
<b class="t01">ctrl + tab</b> <b class="t02">// タブ移動</b>


// 編集
<b class="t01">command + /</b> <b class="t02">// 選択範囲をコメントに変換</b>
<b class="t01">option + shift + I</b> <b class="t02">// 選択範囲の末尾にカーソルを揃える</b>
<b class="t01">command + shift + L</b> <b class="t02">// カーソル上の単語を全て選択</b>


// ターミナル
<b class="t01">ctrl + `</b> <b class="t02">// ターミナルを開閉, ターミナルにカーソルを移動</b>
<b class="t01">ctrl + shift + 5</b> <b class="t02">// ターミナル分割 (3分割目も同様)</b>
<b class="t01">$ exit</b> <b class="t02">// カレントターミナル閉じる</b>
<b class="t01">command + option + -&gt;</b> <b class="t02">// 分割されたターミナル間移動</b>


// project manager
<b class="t01">Install "Project Manager / Alessandro Fragnani"</b>
<b class="t02">---</b>
<b class="t01">[File] > [Open...] > {folder}</b>
<b class="t01">[File] > [Save Workspace As...] > {name}</b>
<b class="t01">[View] > [Command Palette...] > View Project Manager</b>
<b class="t01">Click file icon side of "FAVORITES"</b>
</pre>
  </PreCodes>
</template>
