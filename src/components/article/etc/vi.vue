<script lang="ts">
export const metadata = {
  updateDate: '2023/01/23',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
import SwitchBox from '@/components/SwitchBox.vue'
</script>

<template>
  <ArticleHeader title="vi" :update-date="metadata.updateDate" />

  <PreCodes>
    <SwitchBox title="ファイルオープン">
      <pre>
<b class="t01">vi</b> [file] <b class="t02">新規、又は既存ファイル</b>  <b class="t01">view</b> [file] <b class="t02">readonly</b>
<b class="t01">vi</b> [file] +[n]  <b class="t02">n行目から</b>
<b class="t01">vi</b> [file] +/[string] <b class="t02">最初の[string]から</b>
<b class="t01">vi -r</b> [file] <b class="t02">file復元</b>
</pre>
    </SwitchBox>

    <SwitchBox title="モード">
      <pre>
<b class="t01">i</b> <b class="t02">カーソル前に入力</b>  <b class="t01">a</b> <b class="t02">カーソル後に入力</b>  <b class="t01">I</b> <b class="t02">行頭に入力</b>  <b class="t01">A</b> <b class="t02">行末に入力</b>  <b class="t01">o</b> <b class="t02">下行に入力</b>  <b class="t01">O</b> <b class="t02">上行に入力</b>
<b class="t01">v</b> <b class="t02">選択</b>  <b class="t01">V</b> <b class="t02">行選択</b>  <b class="t01">[control]+v</b> <b class="t02">矩形選択</b>  <b class="t01">(選択モードで)o</b> <b class="t02">選択範囲の始点終点にカーソル移動</b>
<b class="t01">:</b> <b class="t02">コマンド</b>
<b class="t01">[esc]</b> or <b class="t01">[control]+c</b> <b class="t02">ノーマル</b>


[control]+v <b class="t02">></b> 縦に範囲選択 <b class="t02">></b> I <b class="t02">></b> 文字入力 <b class="t02">></b> [esc]  <b class="t02">// 複数行頭に同時入力</b>
[control]+v <b class="t02">></b> 縦に範囲選択 <b class="t02">></b> A <b class="t02">></b> 文字入力 <b class="t02">></b> [esc]  <b class="t02">// 複数行末に同時入力</b>
</pre>
    </SwitchBox>

    <SwitchBox title="移動">
      <pre>
<b class="t01">gg</b> <b class="t02">文頭</b>

<b class="t01">%</b> <b class="t02">対応する括弧</b>


<b class="t01">{</b> <b class="t02">上の段落</b>

<b class="t01">-</b> <b class="t02">上行頭文字</b>
<b class="t01">k</b> <b class="t02">上</b>
<b class="t01">gk</b> <b class="t02">表示行上</b>
<b class="t01">0</b> <b class="t02">行頭</b>  <b class="t01">^</b> <b class="t02">行頭文字</b>    <b class="t01">b</b> <b class="t02">前単語頭</b>  <b class="t01">ge</b> <b class="t02">前単語末</b>  <b class="t01">h</b> <b class="t02">左</b>  <b class="t01">l</b> <b class="t02">右</b>  <b class="t01">w</b> <b class="t02">次単語頭</b>  <b class="t01">e</b> <b class="t02">次単語末</b>    <b class="t01">$</b> <b class="t02">行末</b>
<b class="t01">gj</b> <b class="t02">表示行下</b>
<b class="t01">j</b> <b class="t02">下</b>
<b class="t01">[enter]</b> <b class="t02">下行頭文字</b>

<b class="t01">F</b>[char] <b class="t02">行の任意文字(前)</b>  <b class="t01">f</b>[char] <b class="t02">行の任意文字(次)</b>  <b class="t01">;</b> <b class="t02">次の候補</b>  <b class="t01">,</b> <b class="t02">前の候補</b>

<b class="t01">}</b> <b class="t02">下の段落</b>


<b class="t01">H</b> <b class="t02">画面上</b>
<b class="t01">M</b> <b class="t02">画面中央</b>
<b class="t01">L</b> <b class="t02">画面下</b>

<b class="t01">''</b><b class="t02">(シングル2個) 直前の場所</b>

[n]<b class="t01">G</b> <b class="t02">指定行</b>

<b class="t01">G</b> <b class="t02">文末</b>
</pre>
    </SwitchBox>

    <SwitchBox title="マーク">
      <pre>
<b class="t01">m</b>[a~z] <b class="t02">カーソル位置を記録</b>
<b class="t01">'</b>[a~z] <b class="t02">記録位置の行頭文字に移動</b>

<b class="t01">:marks</b> <b class="t02">マーク一覧</b>
</pre>
    </SwitchBox>

    <SwitchBox title="編集">
      <pre>
<b class="t01">y</b> <b class="t02">選択範囲コピー</b>  <b class="t01">yy</b> <b class="t02">行コピー</b>  <b class="t01">"</b>[a~z]<b class="t01">y</b> <b class="t02">特定バッファにコピー</b>

<b class="t01">x</b> <b class="t02">文字カット</b>  <b class="t01">X</b> <b class="t02">バックスペース</b>
<b class="t01">dw</b> <b class="t02">単語カット</b>  <b class="t01">dd</b> <b class="t02">行カット</b>  <b class="t01">d</b>[move] <b class="t02">移動分カット</b>  <b class="t01">D</b> <b class="t02">行末までカット</b>
<b class="t01">s</b> <b class="t02">文字カットし入力</b>  <b class="t01">S</b> <b class="t02">行カットし入力</b>
<b class="t01">cw</b> <b class="t02">単語カットし入力</b>  <b class="t01">cc</b> <b class="t02">行カットし入力</b>  <b class="t01">c</b>[move] <b class="t02">移動分カットし入力</b>  <b class="t01">C</b> <b class="t02">行末までカットし入力</b>

<b class="t01">P</b> <b class="t02">文字は左、行は上にペースト</b>  <b class="t01">p</b> <b class="t02">文字は右、行は下にペースト</b>  <b class="t01">"</b>[a~z]<b class="t01">p</b> <b class="t02">特定バッファをペースト</b>

[v,y,d,c]<b class="t01">at</b> <b class="t02">タグごと編集</b>  [v,y,d,c]<b class="t01">it</b> <b class="t02">タグ内編集</b>  [v,y,d,c]<b class="t01">a"</b> <b class="t02">"ごと編集</b>  [v,y,d,c]<b class="t01">i"</b> <b class="t02">"内編集</b>

<b class="t01">r</b>[char] <b class="t02">上書き</b>
<b class="t01">~</b> <b class="t02">大文字小文字変換</b>
<b class="t02">文字選択をして</b> <b class="t01">u</b> <b class="t02">小文字に変換</b>
<b class="t01">[control]+a</b> <b class="t02">インクリメント</b>
<b class="t01">[control]+x</b> <b class="t02">デクリメント</b>

<b class="t01">J</b> <b class="t02">次行を連結</b>

[n]<b class="t01">&lt;&lt;</b> <b class="t02">n行シフト</b>  [n]<b class="t01">&gt;&gt;</b> <b class="t02">n行シフト</b>
<b class="t01">&lt;</b> <b class="t02">選択範囲左シフト</b>  <b class="t01">&gt;</b> <b class="t02">選択範囲右シフト</b>

<b class="t01">u</b> <b class="t02">undo</b>  <b class="t01">[control]+r</b> <b class="t02">redo</b>

<b class="t01">.</b> <b class="t02">直前動作の繰り返し</b>

[n1]<b class="t01">=</b>[n2] <b class="t02">n1行からn2行までインデントを整形</b>

<b class="t01">[control]+p, [control]+n</b> <b class="t02">入力補完</b>
<b class="t01">[control]+[shift]+v</b> <b class="t01">[control]+[shift]+m</b> <b class="t02">改行コード入力</b>
</pre>
    </SwitchBox>

    <SwitchBox title="マクロ">
      <pre>
<b class="t01">q</b>[a〜z] <b class="t02">記録開始</b>
<b class="t01">q</b> <b class="t02">記録終了</b>

[n]<b class="t01">@</b>[a〜z] <b class="t02">記録したマクロをn回実行</b>
</pre>
    </SwitchBox>

    <SwitchBox title="スクロール">
      <pre>
<b class="t01">[control]+b</b> <b class="t02">1頁上、カーソルは下</b>
<b class="t01">[control]+u</b> <b class="t02">半頁上、カーソルは同位置の行頭</b>
<b class="t01">[control]+y</b> <b class="t02">1行上</b>

<b class="t01">z[enter]</b> <b class="t02">カーソル行を画面上へ</b>
<b class="t01">zz</b> <b class="t02">カーソル行を中央へ</b>
<b class="t01">z-</b> <b class="t02">カーソル行を画面下へ</b>

<b class="t01">[control]+e</b> <b class="t02">1行下</b>
<b class="t01">[control]+d</b> <b class="t02">半頁下、カーソルは同位置の行頭</b>
<b class="t01">[control]+f</b> <b class="t02">1頁下、カーソルは上</b>
</pre>
    </SwitchBox>

    <SwitchBox title="検索,置換">
      <pre>
<b class="t01">?</b>[string] <b class="t02">前を検索(nで次候補,Nで前候補)</b>
<b class="t01">/</b>[string] <b class="t02">後を検索(nで次候補,Nで前候補)</b>
<b class="t01">*</b> <b class="t02">選択範囲と同じ文字を検索</b>

<b class="t01">:%s/</b>[from]<b class="t01">/</b>[to]<b class="t01">/g</b> <b class="t02">一括置換</b>
<b class="t01">:%s/</b>[from]<b class="t01">/</b>[to]<b class="t01">/gc</b> <b class="t02">1つずつ置換</b>
<b class="t01">:</b>[n]<b class="t01">,</b>[m]<b class="t01">s/</b>[from]<b class="t01">/</b>[to]<b class="t01">/g</b> <b class="t02">n行からm行まで一括置換</b>
</pre>
    </SwitchBox>

    <SwitchBox title="ファイル抽出">
      <pre>
<b class="t01">:args</b> [dir/files] <b class="t02">複数ファイル抽出</b>
<b class="t01">:args</b> <b class="t02">抽出ファイル確認</b>
<b class="t01">:argadd</b> [dir/files] <b class="t02">抽出ファイル追加</b>
<b class="t01">:argdelete</b> [dir/files] <b class="t02">抽出ファイル削除</b>
<b class="t01">:argdo /</b>[string] <b class="t02">抽出ファイルに対して一括検索</b>
<b class="t01">:argdo %s/</b>[from]<b class="t01">/</b>[to]<b class="t01">/g | update</b> <b class="t02">抽出ファイルに対して一括置換</b>
</pre>
    </SwitchBox>

    <SwitchBox title="履歴">
      <pre>
<b class="t01">q:</b> <b class="t02">コマンド履歴</b>
<b class="t01">q/</b> <b class="t02">検索履歴</b>

<b class="t01">[control]+c</b> <b class="t02">選択中のテキストをコマンドラインに送る</b>
</pre>
    </SwitchBox>

    <SwitchBox title="シェル">
      <pre>
<b class="t01">:!</b>[command] <b class="t02">vi内からコマンド実行</b>
</pre>
    </SwitchBox>

    <SwitchBox title="保存,終了">
      <pre>
<b class="t01">:w</b> <b class="t02">保存</b>
<b class="t01">:q</b> <b class="t02">終了</b>
<b class="t01">:wq</b> <b class="t02">保存して終了</b>
<b class="t01">:q!</b> <b class="t02">保存せず終了</b>
<b class="t01">:e!</b> <b class="t02">編集分をリセット</b>
</pre>
    </SwitchBox>

    <SwitchBox title="ウィンドウ">
      <pre>
<b class="t01">:sp</b> [file] <b class="t02">縦に分割</b>
<b class="t01">:vs</b> [file] <b class="t02">横に分割</b>
<b class="t01">:new</b> <b class="t02">縦に分割新規</b>
<b class="t01">:vnew</b> <b class="t02">横に分割新規</b>

<b class="t01">[control]+ww</b> <b class="t02">ウィンドウ移動</b>
<b class="t01">[control]+w c</b> <b class="t02">今いるウィンドウを閉じる</b>
<b class="t01">[control]+w o</b> <b class="t02">今いるウィンドウのみ残す</b>

<b class="t01">[control]+wg</b> <b class="t02">ファイル名表示</b>
</pre>
    </SwitchBox>

    <SwitchBox title="エンコード,改行">
      <pre>
<b class="t01">:e ++enc=utf8</b> <b class="t02">utf-8に変更</b>
<b class="t01">:e ++enc=sjis</b> <b class="t02">shift_jisに変更</b>
<b class="t01">:e ++enc=euc-jp</b> <b class="t02">euc-jpに変更</b>

<b class="t01">:set ff=mac</b> <b class="t02">mac形式の改行コードに変更</b>
<b class="t01">:set ff=dos</b> <b class="t02">win形式の改行コードに変更</b>
<b class="t01">:set ff=unix</b> <b class="t02">unix形式の改行コードに変更</b>
</pre>
    </SwitchBox>

    <SwitchBox title=".vimrc">
      <pre>
<b class="t01">vi ~/.vimrc</b> <b class="t02">open file</b>

<CopyCode>set encoding=utf-8 <b class="t02">" reading</b>
set fileencoding=utf-8 <b class="t02">" saving</b>
set fileencodings=ucs-boms,utf-8,euc-jp,cp932 <b class="t02">" reading character mode</b>
set fileformats=unix,mac,dos <b class="t02">" reading new line mode</b>
set ambiwidth=double <b class="t02">" cure multibyte</b>
scriptencoding utf-8 <b class="t02">" for use multibyte</b>

set paste <b class="t02">" no autoindent (when paste)</b>

set tabstop=2 <b class="t02">" width tab</b>
set shiftwidth=2 <b class="t02">" width shift</b>
set softtabstop=2 <b class="t02">" width shift when delete</b>
set expandtab <b class="t02">" tab -> a few spaces</b>

set incsearch <b class="t02">" search suggestion</b>
set ignorecase <b class="t02">" case insensitive</b>
set smartcase <b class="t02">" sensitive when include upper-case</b>
set hlsearch <b class="t02">" highlight</b>

syntax on <b class="t02">" color</b>
set number <b class="t02">" line number</b>
let g:user_emmet_expandabbr_key = '&lt;c-y&gt;'

set statusline=%F <b class="t02">" filename</b>
set statusline+=%m <b class="t02">" change status</b>
set statusline+=%r <b class="t02">" readonly</b>
set statusline+=%h <b class="t02">" help</b>
set statusline+=%w <b class="t02">" preview</b>
set statusline+=%= <b class="t02">" pos right</b>
set statusline+=[ENC=%{&amp;fileencoding}] <b class="t02">" encode</b>
set statusline+=[LOW=%l/%L] <b class="t02">" line number</b>
set laststatus=2 <b class="t02">" display status</b>

<b class="t02">""" vundle</b>
set nocompatible
filetype off
set rtp+=~/.vim/bundle/vundle/
call vundle#rc()
<b class="t02">" vundle basic</b>
Bundle 'gmarik/vundle'
<b class="t02">" syntax es6</b>
Bundle 'othree/yajs.vim'
<b class="t02">" activation editorconfig</b>
Bundle 'editorconfig/editorconfig-vim'
<b class="t02">" tree navigation (&lt;C&gt; - move current to root, &lt;I&gt; - find hide files)</b>
Bundle 'scrooloose/nerdtree'
nnoremap &lt;silent&gt;&lt;Ctrl-e&gt; :NERDTreeToggle&lt;CR&gt;
<b class="t02">" operation git (:Ggrep [str] - search)</b>
Bundle 'tpope/vim-fugitive'
autocmd QuickFixCmdPost *grep* cwindow
set statusline+=%{fugitive#statusline()}
<b class="t02">" extensive comment (&lt;Ctrl&gt; + 2 hyphens)</b>
Bundle 'tomtom/tcomment_vim'
<b class="t02">" syntax of vue</b>
Bundle 'posva/vim-vue'
<b class="t02">" another syntax</b>
Bundle 'lepture/vim-jinja'
<b class="t02">" file type</b>
filetype plugin indent on
</CopyCode>

<b class="t01">:BundleInstall</b> <b class="t02">plugin install</b>
</pre>
    </SwitchBox>
  </PreCodes>
</template>
