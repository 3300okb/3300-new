<script lang="ts">
export const metadata = {
  updateDate: '2026/10/15',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader
    title="Ghostty + herdr ショートカット"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><code><b class="t02">// Ghostty 1.3 の既定（macOS）。一覧は ghostty +list-keybinds --default</b>

<b class="t01">[command]+n</b>  <b class="t02">// 新規ウィンドウ</b>
<b class="t01">[command]+t</b>  <b class="t02">// 新規タブ</b>
<b class="t01">[command]+[shift]+[ / ]</b>  <b class="t02">// 前 / 次のタブ</b>
<b class="t01">[command]+1〜8</b>  <b class="t02">// タブ 1〜8 へ移動（9 は最後のタブ）</b>
<b class="t01">[command]+w</b>  <b class="t02">// 今いるペインを閉じる</b>

<b class="t01">[command]+d</b>  <b class="t02">// 右に分割</b>
<b class="t01">[command]+[shift]+d</b>  <b class="t02">// 下に分割</b>
<b class="t01">[command]+[ / ]</b>  <b class="t02">// 前 / 次のペインへ移動</b>
<b class="t01">[command]+[option]+[arrow]</b>  <b class="t02">// 矢印方向のペインへ移動</b>
<b class="t01">[command]+[control]+[arrow]</b>  <b class="t02">// ペインのサイズ変更</b>
<b class="t01">[command]+[control]+=</b>  <b class="t02">// ペインのサイズを均等に</b>
<b class="t01">[command]+[shift]+[Enter]</b>  <b class="t02">// ペインをズーム</b>

<b class="t01">[command]+f</b>  <b class="t02">// 検索</b>
<b class="t01">[command]+g</b>  <b class="t02">// 次の候補に移動</b>
<b class="t01">[command]+[shift]+g</b>  <b class="t02">// 前の候補に移動</b>
<b class="t01">[command]+[arrow-up/down]</b>  <b class="t02">// 前 / 次のプロンプトへジャンプ</b>
<b class="t01">[command]+k</b>  <b class="t02">// 画面クリア</b>

<b class="t01">[command]+[Enter]</b>  <b class="t02">// フルスクリーン</b>
<b class="t01">[command]+[shift]+p</b>  <b class="t02">// コマンドパレット</b>
<b class="t01">[command]+, / [command]+[shift]+,</b>  <b class="t02">// 設定を開く / 再読み込み</b>
</code></pre>
  </PreCodes>

  <PreCodes>
    <pre><code><b class="t02">// herdr 0.9 の既定。prefix は [control]+b（押して離してから次のキー）</b>
<b class="t02">// prefix+? で現在有効なキー一覧を表示</b>

<b class="t01">prefix+[shift]+n</b>  <b class="t02">// 新規ワークスペース</b>
<b class="t01">prefix+w</b>  <b class="t02">// ワークスペース一覧</b>
<b class="t01">prefix+[shift]+w</b>  <b class="t02">// ワークスペース名を変更</b>
<b class="t01">prefix+[shift]+d</b>  <b class="t02">// ワークスペースを閉じる</b>
<b class="t01">prefix+g</b>  <b class="t02">// エージェントの状態で絞り込める移動ピッカー</b>
<b class="t01">prefix+b</b>  <b class="t02">// サイドバー表示切り替え</b>

<b class="t01">prefix+c</b>  <b class="t02">// 新規タブ</b>
<b class="t01">prefix+n / p</b>  <b class="t02">// 次 / 前のタブ</b>
<b class="t01">prefix+1〜9</b>  <b class="t02">// タブ 1〜9 へ移動</b>
<b class="t01">prefix+[shift]+t</b>  <b class="t02">// タブ名を変更</b>
<b class="t01">prefix+[shift]+x</b>  <b class="t02">// タブを閉じる</b>

<b class="t01">prefix+v</b>  <b class="t02">// 右に分割</b>
<b class="t01">prefix+-</b>  <b class="t02">// 下に分割</b>
<b class="t01">prefix+h / j / k / l</b>  <b class="t02">// 左 / 下 / 上 / 右のペインへ移動</b>
<b class="t01">prefix+[shift]+h / j / k / l</b>  <b class="t02">// ペインを入れ替え</b>
<b class="t01">prefix+r</b>  <b class="t02">// リサイズモード</b>
<b class="t01">prefix+z</b>  <b class="t02">// ペインをズーム</b>
<b class="t01">prefix+x</b>  <b class="t02">// ペインを閉じる</b>

<b class="t01">prefix+[</b>  <b class="t02">// コピーモード（vi 風に移動、/ で検索、v で選択、y でコピー、q で終了）</b>
<b class="t01">prefix+q</b>  <b class="t02">// デタッチ（セッションは残る。herdr で再接続）</b>
</code></pre>
  </PreCodes>

  <PreCodes>
    <pre><code><b class="t02">// Ghostty の [command] 系キーを herdr の prefix 操作に変換する設定</b>
<b class="t02">// ~/Library/Application Support/com.mitchellh.ghostty/config.ghostty</b>
<CopyCode top><b class="t01">keybind</b> = <b class="t04">super+t</b>=<b class="t05">text:\x02c</b>
<b class="t01">keybind</b> = <b class="t04">super+shift+left_bracket</b>=<b class="t05">text:\x02p</b>
<b class="t01">keybind</b> = <b class="t04">super+shift+right_bracket</b>=<b class="t05">text:\x02n</b>
<b class="t01">keybind</b> = <b class="t04">super+d</b>=<b class="t05">text:\x02v</b>
<b class="t01">keybind</b> = <b class="t04">super+shift+d</b>=<b class="t05">text:\x02-</b>
<b class="t01">keybind</b> = <b class="t04">super+w</b>=<b class="t05">text:\x02x</b>
<b class="t01">keybind</b> = <b class="t04">super+shift+enter</b>=<b class="t05">text:\x02z</b>
<b class="t01">keybind</b> = <b class="t04">super+alt+arrow_left</b>=<b class="t05">text:\x02h</b>
<b class="t01">keybind</b> = <b class="t04">super+alt+arrow_down</b>=<b class="t05">text:\x02j</b>
<b class="t01">keybind</b> = <b class="t04">super+alt+arrow_up</b>=<b class="t05">text:\x02k</b>
<b class="t01">keybind</b> = <b class="t04">super+alt+arrow_right</b>=<b class="t05">text:\x02l</b>
<b class="t01">keybind</b> = <b class="t04">super+n</b>=<b class="t05">text:\x02N</b></CopyCode>
<b class="t02">// \x02 は [control]+b。設定後は [command]+[shift]+, で再読み込み</b>
<b class="t02">// herdr 側の設定変更は herdr server reload-config で反映</b>
</code></pre>
  </PreCodes>
</template>
