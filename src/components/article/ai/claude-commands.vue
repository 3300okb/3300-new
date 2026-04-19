<script lang="ts">
export const metadata = {
  updateDate: '2026/04/07',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader title="claude commands" :update-date="metadata.updateDate" />
  <PreCodes>
    <pre><b class="t01">claude</b>  <b class="t02">// セッション開始</b>
<b class="t01">claude -c</b>  <b class="t02">// 最近のセッションを再開</b>
<b class="t01">claude -r</b>  <b class="t02">// 特定のセッションを再開</b>

<b class="t02">// CLI リファレンス</b>
<a href="https://code.claude.com/docs/ja/cli-reference" target="_blank" rel="noopener noreferrer" class="t05 font-bold">https://code.claude.com/docs/ja/cli-reference</a></pre>

    <pre><b class="t01">shift + tab</b>  <b class="t02">// セッション中にモードを切替</b>
<b class="t01">esc</b>  <b class="t02">// 思考を中断</b>

<b class="t02">// インタラクティブモード リファレンス</b>
<a href="https://code.claude.com/docs/ja/interactive-mode" target="_blank" rel="noopener noreferrer" class="t05 font-bold">https://code.claude.com/docs/ja/interactive-mode</a></pre>

    <pre><b class="t01">/help</b>  <b class="t02">// 利用可能なコマンドを表示</b>
<b class="t01">/init</b>  <b class="t02">// CLAUDE.md を対話形式で生成</b>
<b class="t01">/clear</b>  <b class="t02">// 会話履歴をクリア</b>
<b class="t01">/compact</b>  <b class="t02">// コンテキストを圧縮して継続</b>
<b class="t01">/cost</b>  <b class="t02">// セッションのトークン使用量を表示</b>
<b class="t01">/model</b>  <b class="t02">// AI モデルを切替</b>
<b class="t01">/memory</b>  <b class="t02">// CLAUDE.md メモリファイルを編集</b>
<b class="t01">/permissions</b>  <b class="t02">// ツール権限を表示・変更</b>
<b class="t01">/config</b>  <b class="t02">// 設定を表示・変更</b>
<b class="t01">/status</b>  <b class="t02">// アカウントとシステム状態を表示</b>
<b class="t01">/doctor</b>  <b class="t02">// Claude Code の設定を診断</b>
<b class="t01">/review</b>  <b class="t02">// コードレビューを実行</b>
<b class="t01">/pr-review</b>  <b class="t02">// PR レビューを実行</b>
<b class="t01">/terminal-setup</b>  <b class="t02">// Shift+Enter キーバインドを設定</b>
<b class="t01">/vim</b>  <b class="t02">// Vim モードを切替</b>
<b class="t01">/login</b>  <b class="t02">// Anthropic アカウントに切替</b>
<b class="t01">/logout</b>  <b class="t02">// ログアウト</b>
<b class="t01">/bug</b>  <b class="t02">// GitHub にバグレポートを送信</b></pre>

    <pre><b class="t01">/btw</b>  <b class="t02">// 会話履歴を汚さずにサイドクエスチョンを尋ねる</b>
<b class="t01">/rewind</b>  <b class="t02">// コードと会話を個別に巻き戻す</b>
<b class="t01">/insights</b>  <b class="t02">// 過去1ヶ月の使用状況レポートを生成</b>
<b class="t01">/model opusplan</b>  <b class="t02">// 推論は Opus、コーディングは Sonnet に自動切替</b>
<b class="t01">/simplify</b>  <b class="t02">// 3つの並列エージェントでコード品質をレビュー</b>
<b class="t01">/branch</b>  <b class="t02">// 現在の会話を新しいセッションにフォーク</b>
<b class="t01">/loop</b>  <b class="t02">// 定期的にタスクを繰り返す</b>
<b class="t01">/remote-control</b>  <b class="t02">// スマートフォンからローカル実行をリモート操作</b>
<b class="t01">/export</b>  <b class="t02">// 会話全体を Markdown ファイルにエクスポート</b></pre>
  </PreCodes>
</template>
