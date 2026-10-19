<script lang="ts">
export const metadata = {
  updateDate: '2026/10/19',
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

    <p>
      2. herdr 側: [command]+1〜9 でワークスペース、[control]+[option]+j / k
      でエージェントを切り替える
    </p>

    <pre><code><b class="t02">// ~/.config/herdr/config.toml</b>
<CopyCode top><b class="t01">onboarding</b> = <b class="t05">false</b>

<b class="t03">[keys]</b>
<b class="t01">switch_workspace</b> = <b class="t05">"cmd+1..9"</b>
<b class="t01">next_agent</b> = <b class="t05">"ctrl+alt+j"</b>
<b class="t01">previous_agent</b> = <b class="t05">"ctrl+alt+k"</b></CopyCode>
<b class="t02">// onboarding = false で初回の案内画面（使い方の紹介 → インテグレーション導入への誘導）を出さない</b>
<b class="t02">// 案内を終えると herdr が自動でこの行を書き込む</b>
<b class="t02">// switch_workspace は Ghostty の [command]+1〜9 から CSI u で送られる super+数字 を受け取る（5 で設定）</b>
<b class="t02">// next_agent / previous_agent でサイドバーの agents 枠内を次 / 前のエージェントへ切り替える</b>
<b class="t02">//   ctrl+j / k だとペイン内のシェルや Vim に届かなくなるので [option] を足す（5 で設定）</b>
<b class="t02">// 反映（herdr config check で設定を検証できる）</b>
<b class="t01">herdr server reload-config</b>
</code></pre>

    <p>3. herdr 側: 日本語入力（IME）に対応させる</p>

    <pre><code><b class="t02">// 2 と同じ config.toml に追記</b>
<CopyCode top><b class="t03">[experimental]</b>
<b class="t01">switch_ascii_input_source_in_prefix</b> = <b class="t05">true</b>
<b class="t01">reveal_hidden_cursor_for_cjk_ime</b> = <b class="t05">true</b>
<b class="t01">cjk_ime_agents</b> = [<b class="t05">"claude"</b>, <b class="t05">"codex"</b>]
<b class="t01">cjk_ime_cursor_shape</b> = <b class="t05">"steady_bar"</b></CopyCode>
<b class="t02">// switch_ascii_input_source_in_prefix で prefix モード中だけ入力ソースを ASCII に切り替え、抜けたら元に戻す</b>
<b class="t02">//   IME が ON のままだと prefix（[control]+b）に続けて押すキー（prefix+w / prefix+g / prefix+e など）が握り潰される</b>
<b class="t02">// reveal_hidden_cursor_for_cjk_ime でフォーカス中のペインのカーソルを外側の Ghostty に露出させる</b>
<b class="t02">//   Claude Code / Codex は自前でカーソルを描くので、そのままだと IME の変換候補ウィンドウが入力位置に追従しない</b>
<b class="t02">// cjk_ime_agents で上の対象にするエージェントを限定する</b>
<b class="t02">//   Vim の normal mode などで余分なカーソルが見える副作用を避けるため</b>
<b class="t02">// cjk_ime_cursor_shape は露出させるカーソルの形（steady_bar = 点滅しない縦棒）</b>
<b class="t02">// 反映</b>
<b class="t01">herdr server reload-config</b>
</code></pre>

    <p>4. herdr 側: 画面の表示を設定する</p>

    <pre><code><b class="t02">// 2 と同じ config.toml に追記</b>
<CopyCode top><b class="t03">[ui]</b>
<b class="t01">show_agent_labels_on_pane_borders</b> = <b class="t05">true</b>
<b class="t01">hide_tab_bar_when_single_tab</b> = <b class="t05">true</b>
<b class="t01">window_title</b> = <b class="t05">"herdr · {workspace} · {tab}"</b>

<b class="t03">[ui.sidebar.agents]</b>
<b class="t01">row_gap</b> = <b class="t05">0</b>
<b class="t01">rows</b> = [
  [<b class="t05">"state_icon"</b>, <b class="t05">"workspace"</b>, <b class="t05">"tab"</b>],
  [<b class="t05">"agent"</b>, <b class="t05">"state_text"</b>],
]

<b class="t03">[ui.sidebar.agents.rows_by_agent]</b>
<b class="t01">claude</b> = [
  [<b class="t05">"state_icon"</b>, <b class="t05">"workspace"</b>, <b class="t05">"tab"</b>],
  [{ <b class="t01">token</b> = <b class="t05">"agent"</b>, <b class="t01">fg</b> = <b class="t05">"#d77757"</b>, <b class="t01">bold</b> = <b class="t05">false</b> }, <b class="t05">"state_text"</b>],
]
<b class="t01">codex</b> = [
  [<b class="t05">"state_icon"</b>, <b class="t05">"workspace"</b>, <b class="t05">"tab"</b>],
  [{ <b class="t01">token</b> = <b class="t05">"agent"</b>, <b class="t01">fg</b> = <b class="t05">"#2b8fff"</b>, <b class="t01">bold</b> = <b class="t05">false</b> }, <b class="t05">"state_text"</b>],
]</CopyCode>
<b class="t02">// show_agent_labels_on_pane_borders で分割したペインの枠にエージェント名を出す（どのペインが何か分かる）</b>
<b class="t02">// hide_tab_bar_when_single_tab でタブが 1 枚のときはタブバーを隠す</b>
<b class="t02">// window_title は Ghostty のウィンドウタイトル。{workspace} / {tab} が現在の名前に置き換わる</b>
<b class="t02">// [ui.sidebar.agents] の rows はサイドバーの 1 エージェントを何行でどう並べるかの指定</b>
<b class="t02">//   上の例は 1 行目に 状態アイコン + ワークスペース名 + タブ名、2 行目に エージェント名 + 状態テキスト</b>
<b class="t02">//   row_gap = 0 で行間を詰める</b>
<b class="t02">// rows_by_agent でエージェントごとに上書きする。token 指定にすると fg / bold を付けられる</b>
<b class="t02">//   claude は #d77757、codex は #2b8fff で、どちらが動いているか色で見分ける</b>
<b class="t02">// 反映</b>
<b class="t01">herdr server reload-config</b>
</code></pre>

    <p>5. Ghostty 側: [command] 系キーを herdr の操作に変換する</p>

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
<b class="t01">keybind</b> = <b class="t04">super+digit_9</b>=<b class="t05">csi:57;9u</b>

<b class="t02"># エージェント</b>
<b class="t01">keybind</b> = <b class="t04">ctrl+alt+j</b>=<b class="t05">csi:106;7u</b>
<b class="t01">keybind</b> = <b class="t04">ctrl+alt+k</b>=<b class="t05">csi:107;7u</b></CopyCode>
<b class="t02">// text:\x02 は [control]+b（herdr の prefix）。続く文字が herdr のキーになる</b>
<b class="t02">// csi:49;9u は CSI u 形式の [command]+1（49 = "1" の文字コード、9 = command）</b>
<b class="t02">//   → herdr の switch_workspace = "cmd+1..9" が受け取る</b>
<b class="t02">// csi:106;7u は [control]+[option]+j（106 = "j"、7 = 1 + alt 2 + ctrl 4）</b>
<b class="t02">//   macOS の [option] は文字入力に使われ alt として届かないので、CSI u で直接送る</b>
<b class="t02">// [command]+1〜9 をワークスペースに使うので、タブの番号移動は [option]+1〜9 にする</b>
<b class="t02">// 反映は [command]+[shift]+,</b>
</code></pre>

    <p>6. Ghostty 側: 背景画像を設定する</p>

    <pre><code><b class="t02">// 5 と同じ config.ghostty に追記</b>
<CopyCode top><b class="t02"># 背景画像</b>
<b class="t01">background-image</b> = <b class="t05">/Users/xxx/Pictures/bg.png</b>
<b class="t01">background-image-opacity</b> = <b class="t05">0.3</b>
<b class="t01">background-image-fit</b> = <b class="t05">cover</b></CopyCode>
<b class="t02">// background-image は画像の絶対パス</b>
<b class="t02">// background-image-opacity は画像の不透明度（文字を読みやすくするため低めにする）</b>
<b class="t02">// background-image-fit = cover でウィンドウ全体を覆うように拡大・トリミング</b>
<b class="t02">// 反映は [command]+[shift]+,</b>
</code></pre>

    <p>7. 融合後のショートカット</p>

    <pre><code><b class="t03">ワークスペース</b>
<b class="t01">[command]+n</b>  <b class="t02">// 新規ワークスペース</b>
<b class="t01">[command]+1〜9</b>  <b class="t02">// ワークスペース 1〜9 へ移動</b>
<b class="t01">prefix+w</b>  <b class="t02">// ワークスペース一覧</b>
<b class="t01">prefix+g</b>  <b class="t02">// エージェントの状態で絞り込める移動ピッカー</b>
<b class="t01">prefix+[shift]+w</b>  <b class="t02">// ワークスペース名を変更</b>
<b class="t01">prefix+[shift]+d</b>  <b class="t02">// ワークスペースを閉じる</b>
<b class="t01">[control]+[option]+j / k</b>  <b class="t02">// 次 / 前のエージェントへ移動</b>

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
<b class="t01">prefix+e</b>  <b class="t02">// TTT Editor を上ペインに開く（8 の設定後）</b>

<b class="t03">Ghostty（そのまま）</b>
<b class="t01">[command]+c / v</b>  <b class="t02">// コピー / ペースト</b>
<b class="t01">[command]+= / - / 0</b>  <b class="t02">// 文字サイズ 拡大 / 縮小 / リセット</b>
<b class="t01">[command]+[Enter]</b>  <b class="t02">// フルスクリーン</b>
<b class="t01">[command]+, / [command]+[shift]+,</b>  <b class="t02">// 設定を開く / 再読み込み</b>
</code></pre>

    <p>8. TTT Editor をインストールする</p>

    <pre><code><CopyCode top><b class="t01">brew tap</b> <b class="t05">eugenioenko/ttt</b>
<b class="t01">brew trust</b> <b class="t05">eugenioenko/ttt</b>
<b class="t01">brew install</b> <b class="t05">ttt</b></CopyCode>
<b class="t02">// ターミナル上で動くエディタ。herdr のペイン内でそのまま使える</b>
<b class="t02">// Git（ソース管理）と ripgrep（ワークスペース検索）を使うので未導入なら入れておく</b>
<b class="t01">brew install</b> <b class="t05">ripgrep</b>

<b class="t02">// herdr から開けるように TTT の herdr プラグインを入れる</b>
<CopyCode top><b class="t01">herdr plugin install</b> <b class="t05">eugenioenko/ttt/herdr-plugin</b></CopyCode>

<b class="t02">// prefix+e で起動するようにキーを割り当てる（プラグインに既定のキーはない）</b>
<b class="t02">// プラグインの既定は新規タブで開くので、同じタブの上ペイン（縦 66%）に開くスクリプトを用意する</b>
<b class="t02">// ~/.config/herdr/open-ttt.sh を作成</b>
<CopyCode top>#!/bin/sh
<b class="t02"># フォーカス中のペインの Claude Code セッションが worktree で作業中なら、その worktree を開く</b>
cur=$(herdr pane current)
field() { printf '%s' "$cur" | grep -o "\"$1\":\"[^\"]*\"" | head -1 | cut -d\" -f4; }
dir=$(field cwd)

<b class="t02"># Claude Code はセッション中に cd してもペインの cwd が変わらないので、</b>
<b class="t02"># セッションログに出てくる worktree パスのうち最後の、まだ存在するものを使う</b>
session=$(field value)
log=$(ls "$HOME"/.claude/projects/*/"$session".jsonl 2>/dev/null | head -1)
if [ -n "$session" ] && [ -n "$log" ]; then
  wt=$(grep -oE '/[A-Za-z0-9/._-]*(\.worktrees|/\.claude/worktrees)/[A-Za-z0-9._-]+' "$log" \
    | tail -r | while read -r d; do [ -d "$d" ] && echo "$d" && break; done)
  [ -n "$wt" ] && dir=$wt
fi

<b class="t02"># split は right/down のみなので、下に開いてから上下を入れ替える。resize の amount は比率の増分（0.5 + 0.16）</b>
p=$(herdr plugin pane open --plugin ttt.editor --entrypoint editor --placement split --direction down --focus \
  --env "TTT_TARGET_DIR=$dir" | grep -o '"pane_id":"[^"]*"' | head -1 | cut -d\" -f4) &amp;&amp;
  herdr pane swap --pane "$p" --direction up &amp;&amp;
  herdr pane resize --pane "$p" --direction down --amount 0.16</CopyCode>

<b class="t02">// ~/.config/herdr/config.toml に追記</b>
<CopyCode top><b class="t03">[[keys.command]]</b>
<b class="t01">key</b> = <b class="t05">"prefix+e"</b>
<b class="t01">type</b> = <b class="t05">"shell"</b>
<b class="t01">command</b> = <b class="t05">'sh "$HOME/.config/herdr/open-ttt.sh"'</b>
<b class="t01">description</b> = <b class="t05">"open TTT editor"</b></CopyCode>
<b class="t02">// 反映</b>
<b class="t01">herdr server reload-config</b>

<b class="t02">// prefix+e で、フォーカス中のタブの上ペイン（縦 66%）に TTT を開く</b>
<b class="t02">// 開くディレクトリは、Claude Code が worktree で作業中ならその worktree、それ以外はペインのディレクトリ</b>
<b class="t02">// worktree はログに出てきたパスで判断するので、会話で名前を出しただけの worktree が選ばれることもある</b>
</code></pre>

    <p>9. TTT Editor に Vim mode をインストールし、表示を設定する</p>

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
  },
  <b class="t01">"appearance"</b>: {
    <b class="t01">"icons"</b>: <b class="t05">"nerd-font"</b>,
    <b class="t01">"scrollbarGlyphs"</b>: <b class="t05">"legacy"</b>
  },
  <b class="t01">"editor"</b>: {
    <b class="t01">"cursorStyle"</b>: <b class="t05">"steadyBlock"</b>,
    <b class="t01">"bracketPairColorization"</b>: <b class="t05">true</b>
  }
}</CopyCode>
<b class="t02">// enabled は起動時に Vim mode を有効にするか（既定 true）</b>
<b class="t02">// clipboard = true で無名レジスタ（y / p）をシステムのクリップボードと共有（既定 false）</b>
<b class="t02">// icons = "nerd-font" でエクスプローラなどにファイルアイコンを表示（Ghostty は Nerd Font 内蔵）</b>
<b class="t02">//   アイコンの色はテーマの terminal 色（red / blue など）から自動で付く</b>
<b class="t02">// scrollbarGlyphs = "legacy" でスクロールバーの git 変更マークを細かく描画（Ghostty は対応）</b>
<b class="t02">// cursorStyle = "steadyBlock" で点滅しない塗りつぶしの四角カーソル（既定は点滅する縦棒）</b>
<b class="t02">//   ttt 1.8.0 / ttt-vim ではモード別のカーソル形状は未対応なので、インサートモードでも四角</b>
<b class="t02">// bracketPairColorization = true で括弧をネストの深さごとに色分け</b>
<b class="t02">// 反映は [control]+p（コマンドパレット）で Reload Settings、または TTT を開き直す</b>
</code></pre>

    <p>10. TTT Editor に Catppuccin Mocha テーマを入れる</p>

    <pre><code><b class="t02">// TTT には Catppuccin が組み込まれていないので、Ghostty（Catppuccin Mocha）に合わせて自作する</b>
<b class="t02">// 組み込みの Dracula テーマを取得し、色を Catppuccin Mocha のパレットに置き換えて保存</b>
<CopyCode top><b class="t01">mkdir</b> <b class="t04">-p</b> <b class="t05">~/.config/ttt/themes</b>
<b class="t01">curl</b> <b class="t04">-fsSL</b> <b class="t05">https://raw.githubusercontent.com/eugenioenko/ttt/v1.8.0/internal/config/themes/dracula.json</b> \
| <b class="t01">sed</b> <b class="t04">-e</b> <b class="t05">'s/#f8f8f2/#cdd6f4/g; s/#ff79c6/#cba6f7/g; s/#f1fa8c/#a6e3a1/g; s/#e9f284/#a6e3a1/g'</b> \
      <b class="t04">-e</b> <b class="t05">'s/#8be9fd/#f9e2af/g; s/#8be9fe/#f9e2af/g; s/#bd93f9/#fab387/g; s/#50fa7b/#89b4fa/g'</b> \
      <b class="t04">-e</b> <b class="t05">'s/#6272a4/#9399b2/g; s/#ffb86c/#eba0ac/g; s/#ff5555/#f38ba8/g; s/#44475a/#45475a/g'</b> \
      <b class="t04">-e</b> <b class="t05">'s/#282a36/#1e1e2e/g; s/#333644/#2a2b3c/g; s/#555972/#585b70/g'</b> \
| <b class="t01">jq</b> <b class="t05">'
  .muted.fg = "#7f849c" | .border.fg = "#585b70"
| .success.fg = "#a6e3a1" | .warning.fg = "#f9e2af"
| .tabs.inactive.fg = "#7f849c" | .dialog.muted.fg = "#7f849c"
| .editor.lineNumber.fg = "#6c7086"
| .editor.searchMatch = {"fg": "#1e1e2e", "bg": "#f9e2af"}
| .editor.searchActive = {"fg": "#1e1e2e", "bg": "#fab387"}
| .editor.diagnostics.warning.fg = "#f9e2af"
| .editor.diagnostics.info.fg = "#89dceb"
| .editor.diagnostics.hint.fg = "#94e2d5"
| .editor.bracketColors = ["#f38ba8", "#fab387", "#f9e2af", "#a6e3a1", "#74c7ec", "#b4befe"]
| .hover.code.fg = "#a6e3a1"
| .diff = {"added": {"bg": "#364143"}, "deleted": {"bg": "#493446"}, "modified": {"bg": "#4a4548"}}
| .scrollbar = {"fg": "#585b70", "bg": "#313244"}
| .syntax.operator.fg = "#89dceb" | .syntax.punctuation.fg = "#9399b2"
| .syntax.property.fg = "#b4befe" | .syntax.link.fg = "#89b4fa"
| .syntax.heading.fg = "#f38ba8" | .syntax.attribute.fg = "#f9e2af"
| .syntax.tag.fg = "#89b4fa"
| .terminal = {
    "foreground": "#cdd6f4", "background": "#1e1e2e",
    "black": "#45475a", "red": "#f38ba8", "green": "#a6e3a1", "yellow": "#f9e2af",
    "blue": "#89b4fa", "magenta": "#f5c2e7", "cyan": "#94e2d5", "white": "#bac2de",
    "brightBlack": "#585b70", "brightRed": "#f38ba8", "brightGreen": "#a6e3a1",
    "brightYellow": "#f9e2af", "brightBlue": "#89b4fa", "brightMagenta": "#f5c2e7",
    "brightCyan": "#94e2d5", "brightWhite": "#a6adc8", "selection": "#585b70"
  }'</b> > <b class="t05">~/.config/ttt/themes/catppuccin-mocha.json</b></CopyCode>
<b class="t02">// Dracula は VS Code 版と同じ細かい色分けルール（tokenColors）を持つので、それを流用する</b>
<b class="t02">// 色の割り当て: キーワード mauve / 文字列 green / 関数・タグ blue / 型 yellow / 数値 peach</b>
<b class="t02">//   引数 maroon / 演算子 sky / プロパティ lavender / コメント overlay2</b>
<b class="t02">// terminal は Ghostty の Catppuccin Mocha と同じ 16 色（ファイルアイコンの色にも使われる）</b>

<b class="t02">// ~/.config/ttt/settings.json でテーマを指定（テーマ名 = ファイル名から .json を除いたもの）</b>
<CopyCode top>{
  <b class="t01">"theme"</b>: <b class="t05">"catppuccin-mocha"</b>
}</CopyCode>
<b class="t02">// TTT はライト / ダークの自動切り替えに未対応。Ghostty がライト（Latte）のときも Mocha のまま</b>
</code></pre>
  </PreCodes>
</template>
