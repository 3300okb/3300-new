<script lang="ts">
export const metadata = {
  updateDate: '2026/10/16',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader title="Ghostty + herdr" :update-date="metadata.updateDate" />

  <PreCodes>
    <p>
      ターミナルは Ghostty、ワークスペース・タブ・ペインの管理は herdr
      に任せる構成。herdr の操作は prefix（[control]+b）経由なので、Ghostty の
      [command] 系キーを herdr の操作に割り当て直して、Ghostty
      単体と同じ感覚で使えるようにする。確認バージョン: Ghostty 1.3.1 / herdr
      0.9.5（macOS）
    </p>

    <p>1. インストールと起動</p>

    <pre><code><CopyCode top><b class="t01">brew install</b> <b class="t04">--cask</b> <b class="t05">ghostty</b>
<b class="t01">brew install</b> <b class="t05">herdr</b></CopyCode>
<b class="t02">// Ghostty を開いて herdr を起動（既存セッションがあれば再接続）</b>
<b class="t01">herdr</b>

<b class="t02">// prefix+? でキー一覧、prefix+q でデタッチ（セッションは残る）</b>
</code></pre>

    <p>2. herdr 側: [command]+1〜9 でワークスペースを切り替える</p>

    <pre><code><b class="t02">// ~/.config/herdr/config.toml</b>
<CopyCode top><b class="t03">[keys]</b>
<b class="t01">switch_workspace</b> = <b class="t05">"cmd+1..9"</b></CopyCode>
<b class="t02">// 反映（herdr config check で設定を検証できる）</b>
<b class="t01">herdr server reload-config</b>
</code></pre>

    <p>3. Ghostty 側: [command] 系キーを herdr の操作に変換する</p>

    <pre><code><b class="t02">// ~/Library/Application Support/com.mitchellh.ghostty/config.ghostty</b>
<b class="t02">// （Ghostty で [command]+, を押すと開く）</b>
<CopyCode top><b class="t02"># タブ</b>
<b class="t01">keybind</b> = <b class="t04">super+t</b>=<b class="t05">text:\x02c</b>
<b class="t01">keybind</b> = <b class="t04">super+shift+left_bracket</b>=<b class="t05">text:\x02p</b>
<b class="t01">keybind</b> = <b class="t04">super+shift+right_bracket</b>=<b class="t05">text:\x02n</b>
<b class="t01">keybind</b> = <b class="t04">alt+digit_1</b>=<b class="t05">text:\x021</b>
<b class="t01">keybind</b> = <b class="t04">alt+digit_2</b>=<b class="t05">text:\x022</b>
<b class="t01">keybind</b> = <b class="t04">alt+digit_3</b>=<b class="t05">text:\x023</b>
<b class="t01">keybind</b> = <b class="t04">alt+digit_4</b>=<b class="t05">text:\x024</b>
<b class="t01">keybind</b> = <b class="t04">alt+digit_5</b>=<b class="t05">text:\x025</b>
<b class="t01">keybind</b> = <b class="t04">alt+digit_6</b>=<b class="t05">text:\x026</b>
<b class="t01">keybind</b> = <b class="t04">alt+digit_7</b>=<b class="t05">text:\x027</b>
<b class="t01">keybind</b> = <b class="t04">alt+digit_8</b>=<b class="t05">text:\x028</b>
<b class="t01">keybind</b> = <b class="t04">alt+digit_9</b>=<b class="t05">text:\x029</b>

<b class="t02"># ペイン</b>
<b class="t01">keybind</b> = <b class="t04">super+d</b>=<b class="t05">text:\x02v</b>
<b class="t01">keybind</b> = <b class="t04">super+shift+d</b>=<b class="t05">text:\x02-</b>
<b class="t01">keybind</b> = <b class="t04">super+w</b>=<b class="t05">text:\x02x</b>
<b class="t01">keybind</b> = <b class="t04">super+shift+enter</b>=<b class="t05">text:\x02z</b>
<b class="t01">keybind</b> = <b class="t04">super+alt+arrow_left</b>=<b class="t05">text:\x02h</b>
<b class="t01">keybind</b> = <b class="t04">super+alt+arrow_down</b>=<b class="t05">text:\x02j</b>
<b class="t01">keybind</b> = <b class="t04">super+alt+arrow_up</b>=<b class="t05">text:\x02k</b>
<b class="t01">keybind</b> = <b class="t04">super+alt+arrow_right</b>=<b class="t05">text:\x02l</b>

<b class="t02"># ワークスペース</b>
<b class="t01">keybind</b> = <b class="t04">super+n</b>=<b class="t05">text:\x02N</b>
<b class="t01">keybind</b> = <b class="t04">super+digit_1</b>=<b class="t05">csi:49;9u</b>
<b class="t01">keybind</b> = <b class="t04">super+digit_2</b>=<b class="t05">csi:50;9u</b>
<b class="t01">keybind</b> = <b class="t04">super+digit_3</b>=<b class="t05">csi:51;9u</b>
<b class="t01">keybind</b> = <b class="t04">super+digit_4</b>=<b class="t05">csi:52;9u</b>
<b class="t01">keybind</b> = <b class="t04">super+digit_5</b>=<b class="t05">csi:53;9u</b>
<b class="t01">keybind</b> = <b class="t04">super+digit_6</b>=<b class="t05">csi:54;9u</b>
<b class="t01">keybind</b> = <b class="t04">super+digit_7</b>=<b class="t05">csi:55;9u</b>
<b class="t01">keybind</b> = <b class="t04">super+digit_8</b>=<b class="t05">csi:56;9u</b>
<b class="t01">keybind</b> = <b class="t04">super+digit_9</b>=<b class="t05">csi:57;9u</b></CopyCode>
<b class="t02">// text:\x02 は [control]+b（herdr の prefix）。続く文字が herdr のキーになる</b>
<b class="t02">// csi:49;9u は CSI u 形式の [command]+1（49 = "1" の文字コード、9 = command）</b>
<b class="t02">//   → herdr の switch_workspace = "cmd+1..9" が受け取る</b>
<b class="t02">// [command]+1〜9 をワークスペースに使うので、タブの番号移動は [option]+1〜9 にする</b>
<b class="t02">// 反映は [command]+[shift]+,</b>
</code></pre>

    <p>4. Ghostty 側: 背景画像を設定する</p>

    <pre><code><b class="t02">// 3 と同じ config.ghostty に追記</b>
<CopyCode top><b class="t02"># 背景画像</b>
<b class="t01">background-image</b> = <b class="t05">/Users/xxx/Pictures/bg.png</b>
<b class="t01">background-image-opacity</b> = <b class="t05">0.3</b>
<b class="t01">background-image-fit</b> = <b class="t05">cover</b></CopyCode>
<b class="t02">// background-image は画像の絶対パス</b>
<b class="t02">// background-image-opacity は画像の不透明度（文字を読みやすくするため低めにする）</b>
<b class="t02">// background-image-fit = cover でウィンドウ全体を覆うように拡大・トリミング</b>
<b class="t02">// 反映は [command]+[shift]+,</b>
</code></pre>

    <p>5. 融合後のショートカット</p>

    <pre><code><b class="t03">ワークスペース</b>
<b class="t01">[command]+n</b>  <b class="t02">// 新規ワークスペース</b>
<b class="t01">[command]+1〜9</b>  <b class="t02">// ワークスペース 1〜9 へ移動</b>
<b class="t01">prefix+w</b>  <b class="t02">// ワークスペース一覧</b>
<b class="t01">prefix+g</b>  <b class="t02">// エージェントの状態で絞り込める移動ピッカー</b>
<b class="t01">prefix+[shift]+w</b>  <b class="t02">// ワークスペース名を変更</b>
<b class="t01">prefix+[shift]+d</b>  <b class="t02">// ワークスペースを閉じる</b>

<b class="t03">タブ</b>
<b class="t01">[command]+t</b>  <b class="t02">// 新規タブ</b>
<b class="t01">[command]+[shift]+「[」 / 「]」</b>  <b class="t02">// 前 / 次のタブ</b>
<b class="t01">[option]+1〜9</b>  <b class="t02">// タブ 1〜9 へ移動</b>
<b class="t01">prefix+[shift]+t</b>  <b class="t02">// タブ名を変更</b>
<b class="t01">prefix+[shift]+x</b>  <b class="t02">// タブを閉じる</b>

<b class="t03">ペイン</b>
<b class="t01">[command]+d</b>  <b class="t02">// 右に分割</b>
<b class="t01">[command]+[shift]+d</b>  <b class="t02">// 下に分割</b>
<b class="t01">[command]+[option]+[arrow]</b>  <b class="t02">// 矢印方向のペインへ移動</b>
<b class="t01">[command]+[shift]+[Enter]</b>  <b class="t02">// ペインをズーム</b>
<b class="t01">[command]+w</b>  <b class="t02">// ペインを閉じる</b>
<b class="t01">prefix+[shift]+h / j / k / l</b>  <b class="t02">// ペインを入れ替え</b>
<b class="t01">prefix+r</b>  <b class="t02">// リサイズモード</b>

<b class="t03">herdr（prefix = [control]+b）</b>
<b class="t01">prefix+[</b>  <b class="t02">// コピーモード（vi 風に移動、/ で検索、v で選択、y でコピー、q で終了）</b>
<b class="t01">prefix+b</b>  <b class="t02">// サイドバー表示切り替え</b>
<b class="t01">prefix+q</b>  <b class="t02">// デタッチ（herdr で再接続）</b>
<b class="t01">prefix+?</b>  <b class="t02">// 有効なキー一覧</b>
<b class="t01">prefix+e</b>  <b class="t02">// TTT Editor を開く（6 の設定後）</b>

<b class="t03">Ghostty（そのまま）</b>
<b class="t01">[command]+c / v</b>  <b class="t02">// コピー / ペースト</b>
<b class="t01">[command]+= / - / 0</b>  <b class="t02">// 文字サイズ 拡大 / 縮小 / リセット</b>
<b class="t01">[command]+[Enter]</b>  <b class="t02">// フルスクリーン</b>
<b class="t01">[command]+, / [command]+[shift]+,</b>  <b class="t02">// 設定を開く / 再読み込み</b>
</code></pre>

    <p>6. TTT Editor をインストールする</p>

    <pre><code><CopyCode top><b class="t01">brew tap</b> <b class="t05">eugenioenko/ttt</b>
<b class="t01">brew trust</b> <b class="t05">eugenioenko/ttt</b>
<b class="t01">brew install</b> <b class="t05">ttt</b></CopyCode>
<b class="t02">// ターミナル上で動くエディタ。herdr のペイン内でそのまま使える</b>
<b class="t02">// Git（ソース管理）と ripgrep（ワークスペース検索）を使うので未導入なら入れておく</b>
<b class="t01">brew install</b> <b class="t05">ripgrep</b>

<b class="t02">// herdr から開けるように TTT の herdr プラグインを入れる</b>
<CopyCode top><b class="t01">herdr plugin install</b> <b class="t05">eugenioenko/ttt/herdr-plugin</b></CopyCode>

<b class="t02">// prefix+e で起動するようにキーを割り当てる（プラグインに既定のキーはない）</b>
<b class="t02">// ~/.config/herdr/config.toml に追記</b>
<CopyCode top><b class="t03">[[keys.command]]</b>
<b class="t01">key</b> = <b class="t05">"prefix+e"</b>
<b class="t01">type</b> = <b class="t05">"shell"</b>
<b class="t01">command</b> = <b class="t05">"herdr plugin pane open --plugin ttt.editor --entrypoint editor"</b>
<b class="t01">description</b> = <b class="t05">"open TTT editor"</b></CopyCode>
<b class="t02">// 反映</b>
<b class="t01">herdr server reload-config</b>

<b class="t02">// prefix+e で、アクティブなワークスペースのディレクトリを TTT で新規タブに開く</b>
</code></pre>

    <p>7. TTT Editor に Vim mode をインストールする</p>

    <pre><code><b class="t02">// サイドバーの Plugins タブを開き、Vim Mode を選んでインストール（ttt 1.1.0 以上）</b>
<b class="t02">// 初回起動時にプラグインの権限を確認されるので許可する</b>

<b class="t02">// レジストリから入れられない場合は [control]+p（コマンドパレット）で</b>
<b class="t02">// Plugins: Install from URL を実行し、次の URL を指定</b>
<CopyCode top><b class="t05">https://github.com/eugenioenko/ttt-vim</b></CopyCode>

<b class="t02">// 設定: ~/.config/ttt/settings.json</b>
<CopyCode top>{
  <b class="t01">"vim"</b>: {
    <b class="t01">"enabled"</b>: <b class="t05">true</b>,
    <b class="t01">"clipboard"</b>: <b class="t05">true</b>
  }
}</CopyCode>
<b class="t02">// enabled は起動時に Vim mode を有効にするか（既定 true）</b>
<b class="t02">// clipboard = true で無名レジスタ（y / p）をシステムのクリップボードと共有（既定 false）</b>
</code></pre>
  </PreCodes>
</template>
