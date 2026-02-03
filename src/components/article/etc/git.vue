<script lang="ts">
export const metadata = {
  updateDate: '2025/11/17',
}
</script>

<script setup lang="ts">
import SwitchBox from '@/components/SwitchBox.vue'
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader title="git" :update-date="metadata.updateDate" />

  <PreCodes>
    <SwitchBox title="ステータス">
      <pre><code>git <b class="t01">--version</b>  <b class="t02">// バージョン確認</b>

git <b class="t01">config -l</b>  <b class="t02">// リモートURLやエイリアス内容など確認</b>
git <b class="t01">config --global color.ui auto</b>  <b class="t02">// gitコンソールの色付け</b>
git <b class="t01">config --global alias.</b>[string] <b class="t01">'</b>[command]<b class="t01">'</b>  <b class="t02">// "git "以降のコマンドをエイリアス化</b>
<b class="t02">// git config --global alias.a 'add -A'</b>
<b class="t02">// git config --global alias.c 'commit'</b>
<b class="t02">// git config --global alias.b 'branch'</b>
<b class="t02">// git config --global alias.co 'checkout'</b>
<b class="t02">// git config --global alias.s 'status -s -b -uall'</b>
<b class="t02">// git config --global alias.t 'log --graph --all --date=short --format="%C(green)[%ad] %C(cyan)%h %C(yellow)%an %C(red)%d %Creset%s"'</b>

git <b class="t01">remote -v</b>  <b class="t02">// リモートURL確認</b>
git <b class="t01">remote set-url origin</b> [remote url]  <b class="t02">// 現ローカルをリモートoriginに紐づける</b>
git <b class="t01">remote set-url</b> [remote repository name] [url(to)]  <b class="t02">// リモートのアドレスを変更</b>
git <b class="t01">remote rename</b> [remote repository name(from)] [remote repository name(to)]  <b class="t02">// リモートのリポジトリ名を変更</b>


git <b class="t01">status</b>  <b class="t02">// ファイルのステータス確認</b>
git <b class="t01">status -s -b -uall</b>  <b class="t02">// 簡易表示・ブランチ表示・非追跡ファイル表示</b>

git <b class="t01">log</b>  <b class="t02">// リポジトリの変更履歴確認</b>
git <b class="t01">log -</b>[n]  <b class="t02">// n個前まで表示</b>
git <b class="t01">log -p</b>  <b class="t02">// 差分も表示</b>
git <b class="t01">log --decorate</b>  <b class="t02">// headの位置やbranch,tag情報を含めて表示</b>
git <b class="t01">log --oneline</b>  <b class="t02">// 簡易履歴確認</b>
git <b class="t01">log --oneline --graph --decorate --all</b>  <b class="t02">// アスキーアートで表示</b>
git <b class="t01">log --graph --all --date=short --format="%C(green)[%ad] %C(cyan)%h %C(yellow)%an %C(red)%d %Creset%s"</b>  <b class="t02">// ログ表示の色付け</b>

git<b class="t01">k</b>  <b class="t02">// GUIツールで変更履歴確認</b>

git <b class="t01">show</b>  <b class="t02">// HEADとその前回コミットの差分を表示</b>
git <b class="t01">show</b> [commit id]  <b class="t02">// 指定コミットとその前回コミットの差分を表示</b>

git <b class="t01">diff</b>  <b class="t02">// HEADと作業フォルダの差分を表示</b>
git <b class="t01">diff --cached</b>  <b class="t02">// HEADとインデックスの差分を表示</b>
git <b class="t01">diff</b> [commit id(before)] [commit id(after)]  <b class="t02">// beforeとafterの差分を表示</b>
<b class="t02">// [commit id(after)]を省略すると、[commit id(before)]からHEADまでの差分を表示</b>
git <b class="t01">diff</b> [commit id(before)] [commit id(after)] <b class="t01">--name-only</b>  <b class="t02">// 差分のあるファイル名のみ表示</b>
git <b class="t01">diff</b> [commit id(before)] [commit id(after)] [file]  <b class="t02">// 指定したファイルの差分表示</b>
</code></pre>
    </SwitchBox>

    <SwitchBox title="クローン">
      <pre><code>git <b class="t01">clone</b> [remote url] [dir]  <b class="t02">// カレント内にdirという名でリポジトリを取得(dir指定無しだとremoteの名前が入る)</b>
<b class="t02">// リモートリポジトリ </b>---|--&gt;<b class="t02"> ローカルリポジトリ </b>---<b class="t02"> インデックス </b>---&gt;<b class="t02"> 作業フォルダ</b>

git <b class="t01">clone</b> [remote url] [dir] <b class="t01">--recursive</b>   <b class="t02">// サブモジュールごと取得</b>
</code></pre>
    </SwitchBox>

    <SwitchBox title="ファイル更新">
      <pre><code>git <b class="t01">add</b> [file]  <b class="t02">// 編集内容をインデックスに登録(ステージング)</b>
git <b class="t01">add .</b>  <b class="t02">// カレント以下の全ての更新ファイル対象</b>
git <b class="t01">add -A</b>  <b class="t02">// 加えて、追加ファイルや削除ファイルも対象</b>
<b class="t02">// リモートリポジトリ ---|--- ローカルリポジトリ --- インデックス</b> &lt;--- <b class="t02">作業フォルダ(編集後) --- 作業フォルダ(編集前)</b>

git <b class="t01">commit -m "</b>comment<b class="t01">"</b>  <b class="t02">// インデックス内容をローカルリポジトリに送る</b>
git <b class="t01">commit -am "</b>comment<b class="t01">"</b>  <b class="t02">// addを兼ねる</b>
git <b class="t01">commit --amend</b>  <b class="t02">// 直前のコミットに上書き</b>
git <b class="t01">commit --amend -m '</b>[str]<b class="t01">'</b>  <b class="t02">// 直前のコミットのコメントを上書き</b>
<b class="t02">// リモートリポジトリ ---|--- ローカルリポジトリ </b>&lt;---<b class="t02"> インデックス --- 作業フォルダ(編集後) --- 作業フォルダ(編集前)</b>

git <b class="t01">reset</b>
git <b class="t01">reset</b> [file]
git <b class="t01">reset</b> [commit id]
<b class="t02">// コミットやステージングしたファイルをステージング前の状態に戻す(アンステージング)</b>
<b class="t02">// リモートリポジトリ ---|--- ローカルリポジトリ</b> --- <b class="t02">インデックス</b> ---&gt; <b class="t02">作業フォルダ(編集後) --- 作業フォルダ(編集前)</b>
<b class="t02">// リモートリポジトリ ---|--- ローカルリポジトリ --- インデックス</b> ---&gt; <b class="t02">作業フォルダ(編集後) --- 作業フォルダ(編集前)</b>

git <b class="t01">reset --hard</b>
git <b class="t01">reset --hard</b> [commit id]
<b class="t02">// コミットやステージングの有無にかかわらず全てのファイルを編集前の状態に戻す(追加してステージングしていないファイルはそのまま残る)</b>
<b class="t02">// リモートリポジトリ ---|--- ローカルリポジトリ </b>---<b class="t02"> インデックス </b>---<b class="t02"> 作業フォルダ(編集後)</b> ---&gt; <b class="t02">作業フォルダ(編集前)</b>
<b class="t02">// リモートリポジトリ ---|--- ローカルリポジトリ --- インデックス </b>---<b class="t02"> 作業フォルダ(編集後)</b> ---&gt; <b class="t02">作業フォルダ(編集前)</b>
<b class="t02">// リモートリポジトリ ---|--- ローカルリポジトリ --- インデックス --- 作業フォルダ(編集後)</b> ---&gt; <b class="t02">作業フォルダ(編集前)</b>

git <b class="t01">checkout</b> [commit id or branch]  <b class="t02">// 各ポイントのファイル状態を取得(ステージングや作業中のファイルがある場合はエラー)</b>
git <b class="t01">checkout -f</b> [commit id or branch]  <b class="t02">// 各ポイントのファイル状態を取得(ステージングや作業中のファイルがある場合でも強制実行し作業内容は削除)</b>
<b class="t02">// リモートリポジトリ ---|--- ローカルリポジトリ </b>---<b class="t02"> インデックス </b>---<b class="t02"> 作業フォルダ(編集後) </b>---&gt;<b class="t02"> 作業フォルダ(編集前)</b>
git <b class="t01">checkout </b> [commit id] [file]  <b class="t02">// ファイル個別に取得</b>


git <b class="t01">push</b>  <b class="t02">// 現ローカルブランチが既にリモートに存在する場合</b>
git <b class="t01">push origin</b> [remote branch]<b class="t01">:</b>[local branch]  <b class="t02">// pushしたいローカルブランチがまだリモートに無い場合</b>
<b class="t02">// リモートリポジトリ </b>&lt;--|---<b class="t02"> ローカルリポジトリ --- インデックス --- 作業フォルダ(編集後) --- 作業フォルダ(編集前)</b>

git <b class="t01">fetch</b>  <b class="t02">// リモートリポジトリの履歴を取得</b>
<b class="t02">// リモートリポジトリ </b>---|--&gt;<b class="t02"> ローカルリポジトリ --- インデックス --- 作業フォルダ(編集後) --- 作業フォルダ(編集前)</b>
<b class="t02">// 無名ブランチ FETCH_HEAD として取得</b>
<b class="t02">// git diff FETCH_HEAD で作業フォルダとの差分を表示</b>

git <b class="t01">pull</b>  <b class="t02">// fetch + merge(作業フォルダの内容と統合)</b>
git <b class="t01">pull</b> [remote url] [remote branch]  <b class="t02">// [remote branch] から現状ブランチにpull</b>
<b class="t02">// リモートリポジトリ </b>---|--&gt;<b class="t02"> ローカルリポジトリ </b>---<b class="t02"> インデックス </b>---<b class="t02"> 作業フォルダ(編集後) </b>---&gt;<b class="t02"> 作業フォルダ(編集前)</b>


git <b class="t01">clean -n</b>  <b class="t02">// まだ.git管理下に無い(一度もaddされたことのない)ファイルの確認</b>
git <b class="t01">clean -fdx</b>  <b class="t02">// まだ.git管理下に無い(一度もaddされたことのない)ファイルの削除</b>


// 競合の編集
<b class="t02">// pushして競合が起きたら、pull -&gt; ファイル編集 -&gt; add -&gt; commit -&gt; push</b>
git <b class="t01">ls-files -u</b>
<b class="t02">// コンフリクトしたファイル一覧</b>
git <b class="t01">mergetool -y</b> [file]
<b class="t02">// GUIでコンフリクト処理</b>


// behindの解消（developブランチの新しい更新を作業ブランチに取り込む）
<b class="t02">// 作業ブランチ上で</b>
git <b class="t01">pull</b>
git <b class="t01">merge origin/develop</b>
</code></pre>
    </SwitchBox>

    <SwitchBox title="ブランチ">
      <pre><code>git <b class="t01">branch</b>  <b class="t02">// ローカルブランチ一覧表示(HEADがあるブランチに*が付く)</b>
git <b class="t01">branch -r</b>  <b class="t02">// リモートブランチ一覧表示</b>
git <b class="t01">branch -a</b>  <b class="t02">// ローカルとリモート一覧表示</b>

git <b class="t01">branch</b> [local branch]  <b class="t02">// ブランチ作成</b>
git <b class="t01">branch -m</b> [local branch(from)] [local branch(to)]   <b class="t02">// ブランチ名修正</b>
git <b class="t01">branch -d</b> [local branch]  <b class="t02">// ブランチ削除(マージ済みのみ)</b>
git <b class="t01">branch -D</b> [local branch]  <b class="t02">// ブランチ削除(強制)</b>
git <b class="t01">branch --list "</b>dev/*<b class="t01">" | xargs git branch -D</b>  <b class="t02">// ブランチ削除(一括)</b>

git <b class="t01">branch</b> [local branch] <b class="t01">origin/</b>[remote branch]  <b class="t02">// リモートからブランチ取得</b>
git <b class="t01">push origin</b> [local branch]<b class="t01">:</b>[remote branch]  <b class="t02">// リモートにブランチをpush</b>
git <b class="t01">push origin --all</b>  <b class="t02">// すべてのブランチをリモートにpush</b>
git <b class="t01">push origin</b> <b class="t01">:</b>[remote branch]  <b class="t02">// リモートブランチ削除</b>

git <b class="t01">fetch origin pull/</b>[PRのID]<b class="t01">/head:</b>[remote branch]   <b class="t02">// メンバーのPR内容をローカルに取得</b>

git <b class="t01">checkout</b> [branch]  <b class="t02">// 指定ブランチにHEADを移動</b>
git <b class="t01">checkout</b> [commit id]  <b class="t02">// 指定コミットにHEADを移動</b>
<b class="t02">// ブランチがないコミットにHEADを移動して変更を加えてコミットした場合、そのポイントに孤立(detached)したブランチができる</b>
<b class="t02">// 孤立ブランチを残す場合はそのポイント上でブランチ名を付ける</b>
<b class="t02">// git checkout -b [new branch name]</b>

// PR作成後コンフリクトが起き、mergeやrebaseで修正してたらややこしくなり、一旦ローカルを無しにしてもう一回直したいとき
git <b class="t01">checkout</b> develop <b class="t02">// developに移動</b>
git <b class="t01">d -D</b> [local branch]  <b class="t02">// 作業していたブランチを一旦ローカルから削除</b>
git <b class="t01">checkout -b</b> [local branch] <b class="t01">origin/</b>[local branch] <b class="t02">// PR上のリモートブランチをローカルに落とし、そこに移動</b>
ファイルを修正し
git add
git commit
git push


<b class="t02">ブランチ = 履歴ツリー内における、ある参照コミットポイント</b>
<b class="t02">HEAD = 履歴ツリー内における、現在の参照コミットポイント</b>
<b class="t02">master = ローカルのデフォルトブランチ</b>
<b class="t02">origin = リモートリポジトリ</b>
<b class="t02">origin/master = リモートのデフォルトブランチ</b>
<b class="t02">origin/HEAD = リモートのカレントポイント</b>
</code></pre>
    </SwitchBox>

    <SwitchBox title="タグ">
      <pre><code>git <b class="t01">tag</b> [tag]  <b class="t02">// タグ作成</b>
git <b class="t01">tag</b> <b class="t01">-am</b> <b class="t01">"</b>comment<b class="t01">"</b> [tag]  <b class="t02">// comment付きタグ作成</b>
git <b class="t01">tag</b>  <b class="t02">// タグ一覧確認</b>
git <b class="t01">tag</b> <b class="t01">-n</b>  <b class="t02">// comment付きタグ一覧確認</b>

git <b class="t01">push origin</b> [tag]  <b class="t02">// リモートにタグをpush</b>
git <b class="t01">push origin --tags</b>  <b class="t02">// リモートに全てのタグをpush</b>
git <b class="t01">pull --tags</b>  <b class="t02">// リモートのタグを取得</b>

git <b class="t01">tag</b> <b class="t01">-d</b> [tag]  <b class="t02">// ローカルタグ削除</b>
git <b class="t01">push origin</b> <b class="t01">:</b>[tag]  <b class="t02">// リモートタグ削除(ローカルタグ削除した後)</b>
</code></pre>
    </SwitchBox>

    <SwitchBox title="履歴操作">
      <pre><code>git <b class="t01">merge</b> [commit id] or [branch]
<b class="t02">// 指定コミットの内容、又は指定ブランチが参照するコミットの内容をHEADに統合し、履歴を繋げる</b>
<b class="t02">// 指定コミットがHEADの先に繋がる場合は、HEADがそこへ移る(fast-forward)</b>
git <b class="t01">merge --no-ff</b> [commit id] or [branch]
<b class="t02">// 指定コミットがHEADの先に繋がる場合でも、指定コミットの先に新しいマージコミットを作る</b>
git <b class="t01">merge --squash</b> [commit id] or [branch]
<b class="t02">// 指定コミットの内容は統合するが、履歴は繋がない</b>

git <b class="t01">revert</b> [commit id]
<b class="t02">// [commit id] の内容を打ち消すコミットを1つ先に作る</b>
<b class="t02">// その後pushすることでリモートの状態を戻せる(打ち消した履歴は残す)</b>
git <b class="t01">revert --abort</b>
<b class="t02">// revert中止</b>

git <b class="t01">rebase</b> [parent branch]
<b class="t02">// 親ブランチの更新分を作業ブランチ(current)に取り込む</b>
git <b class="t01">stash</b>
<b class="t02">// rebaseでconflictが起きたとき、問題箇所を確認する</b>
git <b class="t01">rebase --continue</b>
<b class="t02">// rebaseでconflictが起きたとき、conflictを解消してからこのコマンドを打って続行する</b>
git <b class="t01">rebase --abort</b>
<b class="t02">// rebaseで問題が起きたとき、中止する</b>

git <b class="t01">rebase -i HEAD~~~</b>
git <b class="t01">rebase -i HEAD~</b>3
<b class="t02">// 同軸の履歴で、過去複数コミットを一覧表示、削除(行そのものを消す)、編集(edit)、前のコミットと統合(squash)、維持(pick)など設定し、その結果を纏めたコミットを別軸に作る</b>
git <b class="t01">reset --hard ORIG_HEAD</b>
<b class="t02">// rebaseが成功した後、取り消す</b>

git <b class="t01">cherry-pick</b> [commit id]
<b class="t02">// 指定コミットの内容をHEADに統合した新たなコミットを作る</b>
<b class="t02">// 統合元の履歴は繋がない</b>


// localで巻き戻したい時(remoteにまだコミットしていない内容に限る)

1) git <b class="t01">reflog</b>
<b class="t02">// 操作の履歴を全て表示して戻し先の[commit id]を確認(コミットを削除した履歴も表示される)</b>
2) git <b class="t01">reset --hard</b> [commit id]
<b class="t02">// カレントブランチとHEADを[commit id]の状態に戻す</b>


// localとremoteで<b class="t03">A</b>から<b class="t01">D</b>まで巻き戻したい時(A,B,Cを打ち消すコミットを作る)

1) git <b class="t01">revert</b> [commit id <b class="t03">A</b>]<b class="t01">...</b>[commit id <b class="t01">D</b>]
<b class="t02">// 最新コミットから<b class="t03">A,B,C,<b class="t01">D,</b></b>E,F,...と並ぶ履歴の時、上記コマンドで<b class="t03">A,B,C</b>の打ち消しコミット</b>-A,-B,-C<b class="t02">が順に生成される(<b class="t01">D</b>の打ち消しコミットは生成されない)</b>
<b class="t02">// revert後の履歴は、</b>-C,-B,-A,<b class="t03">A,B,C,</b><b class="t01">D,</b><b class="t02">E,F,...となる</b>
2) git <b class="t01">push</b>
<b class="t02">// revert内容をpushしてremoteの巻き戻しが完了</b>


// localとremoteで<b class="t03">A</b>から<b class="t01">D</b>まで巻き戻したい時(A,B,Cを打ち消すコミットを作るが、その中にmergeコミットが含まれる場合)

1) git <b class="t01">revert -m 1</b> [commit id <b class="t03">A</b>]<b class="t01">...</b>[commit id <b class="t01">D</b>]
<b class="t02">// 最新コミットから<b class="t03">A,B,C,<b class="t01">D,</b></b>E,F,...と並ぶ履歴の時、上記コマンドで<b class="t03">A,B,C</b>の打ち消しコミット</b>-A,-B,-C<b class="t02">が順に生成される(<b class="t01">D</b>の打ち消しコミットは生成されない)</b>
<b class="t02">// revert後の履歴は、</b>-C,-B,-A,<b class="t03">A,B,C,</b><b class="t01">D,</b><b class="t02">E,F,...となる</b>
2) git <b class="t01">push</b>
<b class="t02">// revert内容をpushしてremoteの巻き戻しが完了</b>


// localとremoteで強制的に巻き戻したい時(履歴が消えるので注意)

1) git <b class="t01">reset</b> [commit id]
2) git <b class="t01">push</b>
</code></pre>
    </SwitchBox>

    <SwitchBox title="検索,置換">
      <pre><code>git <b class="t01">grep</b> [string]  <b class="t02">// git管理の範囲内でstringをカレント傘下のファイル内から検索</b>
git <b class="t01">grep -n</b> [string]  <b class="t02">// 行番号付き</b>
git <b class="t01">grep -l</b> [string]  <b class="t02">// ファイル名のみ表示</b>
git <b class="t01">grep</b> [string] [dir]  <b class="t02">// dir傘下のファイル内から検索</b>

git <b class="t01">grep -l</b> [from] <b class="t01">| xargs sed -i '' -e 's/</b>[from]<b class='t01'>/</b>[to]<b class='t01'>/g'</b>  <b class="t02">// カレント傘下のファイル内を対象に置換</b>
</code></pre>
    </SwitchBox>

    <SwitchBox title="ローカルリポジトリ作成">
      <pre><code>1）リモートリポジトリに新規プロジェクト追加
2）ローカルにプロジェクト用の作業フォルダ作成
3）作業フォルダに入る
4）git <b class="t01">init</b>  <b class="t02">// フォルダ内をGitの管理下にする</b>
5）ファイル等作成
6）git <b class="t01">add .</b>  <b class="t02">// フォルダ内の全てのファイルを更新対象にする</b>
7）git <b class="t01">commit -m "</b>new project<b class="t01">"</b>  <b class="t02">// ローカルリポジトリにコミット</b>
8）git <b class="t01">remote add origin</b> [remote url]  <b class="t02">// リモートリポジトリのURLをoriginとして登録</b>
9）git <b class="t01">push -u origin master</b>  <b class="t02">// ファイルをリモートリポジトリに送信</b>
</code></pre>
    </SwitchBox>

    <SwitchBox title="リモートbareリポジトリ作成">
      <pre><code>1) サーバのサイトにログイン
2) sshアカウントを有効にする  <b class="t02">// user name, host domain, port number, password を確認</b>

3) ターミナル起動
4) <b class="t01">ssh</b> [user name]<b class="t01">@</b>[host domain] <b class="t01">-p</b> [port number]  <b class="t02">// サーバに入る</b>
5) (password input)

6) <b class="t01">pwd</b>  <b class="t02">// user dir を確認</b>
7) <b class="t01">mkdir</b> [user dir]<b class="t01">/repos</b>  <b class="t02">// ユーザに割り当てられた場所の直下にbareリポジトリを格納するフォルダ"repos"を作成</b>
8) <b class="t01">cd</b> [user dir]<b class="t01">/repos</b>  <b class="t02">// そこに移動</b>
9) <b class="t01">mkdir</b> [project name]<b class="t01">.git</b>  <b class="t02">// 新規projectのbareリポジトリ用フォルダ作成</b>
10) <b class="t01">cd</b> [project name]<b class="t01">.git</b>  <b class="t02">// そこに移動</b>
11) git <b class="t01">init --bare --shared</b>  <b class="t02">// bareリポジトリ作成</b>
12) <b class="t01">cd</b> [user dir]<b class="t01">/web</b>  <b class="t02">// 公開projectを格納する場所に移動</b>
13) git <b class="t01">clone</b> [user dir]<b class="t01">/repos/</b>[project name]<b class="t01">.git</b> [project name]  <b class="t02">// bareリポジトリからクローンして公開用フォルダを作成</b>
14) <b class="t01">cd</b> [user dir]<b class="t01">/repos/</b>[project name]<b class="t01">.git/hooks</b>  <b class="t02">// bareリポジトリのhooksフォルダに移動</b>

15) <b class="t01">vi post-receive</b>  <b class="t02">// post-receiveファイルを作成し、以下のシェルスクリプト3行を記入し保存</b>
<b class="t01">#!/bin/sh
cd</b> [user dir]<b class="t01">/web/</b>[project name]<b class="t01">;
git --git-dir=.git pull</b>

16) <b class="t01">chmod +x post-receive</b>  <b class="t02">// hookに実行属性を与える</b>
17) <b class="t01">exit</b>  <b class="t02">// サーバを抜ける</b>

18) <b class="t01">mkdir</b> [work space]<b class="t01">/</b>[project name]  <b class="t02">// ローカルにproject作成</b>
19) <b class="t01">cd</b> [work space]<b class="t01">/</b>[project name]  <b class="t02">// そこに移動</b>
20) git <b class="t01">init</b>  <b class="t02">// ローカルリポジトリ作成</b>
21) git <b class="t01">remote add origin ssh://</b>[host domain]<b class="t01">:</b>[port number][user dir]<b class="t01">/repos/</b>[project name]<b class="t01">.git</b>  <b class="t02">// bareリポジトリに紐づける</b>
22) ファイル作成/編集
23) git <b class="t01">add .</b>
24) git <b class="t01">commit -m '</b>comment<b class="t01">'</b>
25) git <b class="t01">push origin master</b>  <b class="t02">// 以降は git push</b>
26) (password input)

<b class="t02">push 完了
bareリポジトリにpushされたファイルが、post-receiveによって自動的に公開用リポジトリにpullされる</b>

26) git <b class="t01">branch --set-upstream-to=origin/master master</b>  <b class="t02">// 最初のpull設定</b>
27) git <b class="t01">pull</b>
28) (password input)

<b class="t02">pull 完了</b></code></pre>
    </SwitchBox>

    <SwitchBox title="サブモジュール">
      <pre><code>git <b class="t01">submodule</b>  <b class="t02">// サブモジュールのステータス表示</b>

git <b class="t01">submodule add</b> [submodule remote url] [dir]  <b class="t02">// サブモジュールのリポジトリurlと格納するdirを登録</b>
<b class="t02">// 下記の内容を持った .gitmodules が生成される</b>
<b class="t02">//</b>
<b class="t02">// [submodule "[dir]"]</b>
<b class="t02">//   path = [dir]</b>
<b class="t02">//   url = [submodule remote url]</b>

git <b class="t01">submodule init</b>  <b class="t02">// .gitmodules の内容を、親リポジトリの .git/config に登録</b>
git <b class="t01">submodule update</b>  <b class="t02">// サブモジュールの更新分をダウンロード</b>
git <b class="t01">submodule update --init</b>  <b class="t02">// init + update</b>

<b class="t02">// 上記は親リポジトリのルートで実行</b>
<b class="t02">// サブモジュールとその親リポジトリのコミットは連動しない</b>

git <b class="t01">clone</b> [remote url] [dir] <b class="t01">--recursive</b>  <b class="t02">// サブモジュールごとクローン</b>
</code></pre>
    </SwitchBox>

    <SwitchBox title=".gitignore">
      <pre><code><b class="t02">// global</b>
<b class="t01">git config --global core.excludesfile</b> {workspace}<b class="t01">/.gitignore</b>

<b class="t02">// local</b>
<b class="t01">vi</b> {project}<b class="t01">/.gitignore</b>


<b class="t02">// exsample</b>
<CopyCode>Thumbs.db
ehthumbs.db

Desktop.ini

.DS_Store
.AppleDouble
.AppleSingle
.LSOverride
Icon
._*

.sass-cache
*.css.map
*.sass.map
*.scss.map
.stylelintcache

.Trashes

node_modules/
npm-debug.log
bower_components/

*.swp

.idea

.vscode/*
!.vscode/settings.json
!.vscode/tasks.json
!.vscode/launch.json
!.vscode/extensions.json
</CopyCode>
</code></pre>
    </SwitchBox>

    <SwitchBox title="切断">
      <pre><code><b class="t01">rm -rf .git</b>  <b class="t02"><b class="t02">// 切断するプロジェクトのルートで実行、傘下の.gitフォルダを削除</b></b>
</code></pre>
    </SwitchBox>
  </PreCodes>
</template>
