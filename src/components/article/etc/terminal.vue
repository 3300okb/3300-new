<script lang="ts">
export const metadata = {
  updateDate: '2020/12/17',
}
</script>

<script setup lang="ts">
import SwitchBox from '@/components/SwitchBox.vue'
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader title="terminal" :update-date="metadata.updateDate" />

  <PreCodes>
    <SwitchBox title="ディレクトリ">
      <pre><code><b class="t01">pwd</b>  <b class="t02">// カレント表示</b>

<b class="t01">ls</b>  <b class="t02">// カレントのファイル・ディレクトリ表示</b>
<b class="t01">ls</b> [dir]  <b class="t02">// 配下のファイル・ディレクトリ表示</b>
<b class="t01">ls -a</b>  <b class="t02">// 隠しファイル表示</b>
<b class="t01">ls -l</b>  <b class="t02">// 詳細情報表示</b>

<b class="t01">cd /</b>  <b class="t02">// ルートへ移動</b>
<b class="t01">cd</b>  <b class="t02">// ホームへ移動</b>
<b class="t01">cd -</b>  <b class="t02">// 1つ前へ移動</b>
<b class="t01">cd ..</b>  <b class="t02">// 上階層へ移動</b>
<b class="t01">cd </b>[dir]  <b class="t02">// dirへ移動</b>

<b class="t01">mkdir</b> [dir]   <b class="t02">// 新規ディレクトリ作成</b>
<b class="t01">cp -r</b> [dir] [dir]  <b class="t02">// ディレクトリをコピー</b>
<b class="t01">mv</b> [dir] [dir]   <b class="t02">// ディレクトリ名変更</b>
<b class="t01">rmdir</b> [dir]   <b class="t02">// 空ディレクトリ削除</b>
<b class="t01">rm -r</b> [dir]   <b class="t02">// ファイルごとディレクトリ削除</b>

<b class="t01">ln -s</b> [path] [name]  <b class="t02">// エイリアス作成</b>

<b class="t01">pushd</b> [dir]  <b class="t02">// カレントをスタックに記録し、移動</b>
<b class="t01">popd</b>  <b class="t02">// 記録した位置へ移動し、スタックはリセット</b>
</code></pre>
    </SwitchBox>

    <SwitchBox title="ファイル">
      <pre><code><b class="t01">touch</b> [file]  <b class="t02">// 空ファイル作成</b>
<b class="t01">cp</b> [file] [file]  <b class="t02">// ファイルをコピー</b>
<b class="t01">rm</b> [file]  <b class="t02">// ファイルを削除</b>
<b class="t01">mv</b> [file] [file]  <b class="t02">// ファイル名変更</b>
<b class="t01">mv</b> [file] [dir/file]  <b class="t02">// ファイル移動</b>

<b class="t01">less</b> [file]  <b class="t02">// ファイル内容表示, f 次頁, b 前頁, G 文末 , /[char] 検索, q 終了</b>
<b class="t01">diff</b> [file] [file]  <b class="t02">// 差分表示</b>

<b class="t01">pbpaste > </b>[file]  <b class="t02">// コピーした内容を貼り付けたファイルを作成</b></code></pre>
    </SwitchBox>

    <SwitchBox title="検索,置換">
      <pre><code><b class="t01">mdfind</b> [string]  <b class="t02">// ファイル名で検索</b>
<b class="t01">mdfind -onlyin</b> [dir] [string]  <b class="t02">// dir内から検索</b>
<b class="t01">grep -rn</b> [string] [dir]  <b class="t02">// dir内全てのファイルの内容からstringとその行数を検索</b>

<b class="t01">grep -l</b> [from] [dir/files] <b class="t01">| xargs sed -i -e "s/</b>[from]<b class="t01">/</b>[to]<b class="t01">/g"</b>
<b class="t02">// [dir/files]で指定した複数のファイルに含まれる全ての[from]を[to]に一括置換</b>
<b class="t02">// 元ファイルのバックアップが作成される</b>
<b class="t01">find . -type f -name '</b>*.*<b class="t01">' -print0 | xargs -0 perl -i -pe 's/</b>[from]<b class="t01">/</b>[to]<b class="t01">/g'</b>
<b class="t02">// カレント以下の全ての「*.*」という名のファイルに含まれる全ての[from]を[to]に一括置換</b>
</code></pre>
    </SwitchBox>

    <SwitchBox title="オープン">
      <pre><code><b class="t01">open</b> [dir]  <b class="t02">// Finderオープン</b>
<b class="t01">open</b> [img]  <b class="t02">// プレビューオープン</b>
</code></pre>
    </SwitchBox>

    <SwitchBox title="圧縮,解凍">
      <pre><code><b class="t01">zip -r</b> [filename.zip] [dir]  <b class="t02">// zip圧縮</b>
<b class="t01">unzip</b> [filename.zip]  <b class="t02">// zip解凍</b>
</code></pre>
    </SwitchBox>

    <SwitchBox title="履歴">
      <pre><code><b class="t01">history</b>  <b class="t02">// コマンド履歴を表示</b>
<b class="t01">!</b>[num]  <b class="t02">// 指定のコマンドを再実行</b>
<b class="t01">!!</b>  <b class="t02">// 直前のコマンドを再実行</b>
</code></pre>
    </SwitchBox>

    <SwitchBox title="ローカル">
      <pre><code><b class="t01">hostname</b>  <b class="t02">// ホスト名(コンピュータ名)表示</b>
<b class="t01">tty</b>  <b class="t02">// 端末名表示</b>
<b class="t01">id</b>  <b class="t02">// ID表示</b>
<b class="t01">uname -a</b>  <b class="t02">// システム情報表示</b>
<b class="t01">ifconfig</b>  <b class="t02">// IPアドレスなどネットワーク環境表示</b>
<b class="t01">groups</b>  <b class="t02">// 所属グループ表示</b>

<b class="t01">du</b> [file]  <b class="t02">// ファイル容量表示</b>
<b class="t01">du -s</b> [dir]  <b class="t02">// ディレクトリ容量表示</b>
<b class="t01">df</b>  <b class="t02">// ディスク容量表示</b>

<b class="t01">set</b>  <b class="t02">// 変数と値を表示</b>
<b class="t01">printenv</b>  <b class="t02">// 諸情報表示</b>

<b class="t01">echo $PATH</b>  <b class="t02">// 環境変数の値の確認</b>
<b class="t01">export PATH=</b>[パス]<b class="t01">:</b>[パス]<b class="t01">:</b>[パス]  <b class="t02">// PATHの値を変更</b>
<b class="t02">例) export PATH=/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/git/bin</b>

<b class="t01">uptime</b>  <b class="t02">// Mac起動からの累計時間確認</b>
<b class="t01">sw_vers</b>  <b class="t02">// MacのOSバージョン表示</b>
<b class="t01">last</b>  <b class="t02">// Macの使用履歴表示</b>
<b class="t01">ac</b>  <b class="t02">// ログインしている時間表示</b>

<b class="t01">cal</b>  <b class="t02">// カレンダー表示</b>
<b class="t01">date</b>  <b class="t02">// 現在日時表示</b>
</code></pre>
    </SwitchBox>

    <SwitchBox title="リモート">
      <pre><code><b class="t01">ssh-keygen</b> <b class="t02">公開鍵(id_rsa.pub)と秘密鍵(id_rsa)を生成</b>
<b class="t02">// 公開鍵をサーバ側に設定すると秘密鍵を持つ端末からアクセス可能になる</b>
<b class="t02">// それでもアクセスできない場合は、他端末やwebコンソールでサーバ側の ~/.ssh/authorized_keys に公開鍵が入っているか確認</b>
<b class="t01">ssh-keygen -p</b> <b class="t02">パスフレーズ変更</b>
<b class="t01">ssh</b> [user]@[host]  <b class="t02">// リモートホストにログイン</b>
<b class="t02">// サーバ側で /etc/ssh/sshd_config を編集してパス入力解除</b>
<b class="t03">ChallengeResponseAuthentication</b> no
<b class="t03">PasswordAuthentication</b> no

<b class="t01">who</b>  <b class="t02">// ログインしているユーザ表示</b>
<b class="t01">whoami</b>  <b class="t02">// ログイン名表示</b>
<b class="t01">passwd</b> [user]  <b class="t02">// ユーザのパスワード変更</b>
<b class="t01">last</b>  <b class="t02">// ログイン履歴の表示</b>

<b class="t01">whois</b> [domain]  <b class="t02">// ドメインの所有者表示</b>
<b class="t01">dig</b> [domain]  <b class="t02">// ドメインのIPアドレスなど表示</b>
</code></pre>
    </SwitchBox>

    <SwitchBox title="プロセス">
      <pre><code><b class="t01">top</b>   <b class="t02">// プロセス一覧</b>
<b class="t01">jobs</b>  <b class="t02">// ジョブ(バックグラウンドで実行されてるプロセス)表示</b>

<b class="t01">kill</b> [PID]   <b class="t02">// プロセスやジョブを強制終了</b>
</code></pre>
    </SwitchBox>

    <SwitchBox title="データ転送">
      <pre><code><b class="t01">curl</b> [URL]  <b class="t02">// ファイル内容表示</b>
<b class="t01">curl -o</b>[name] [URL]  <b class="t02">// ファイル内容保存</b>

<b class="t01">curl -I</b> [URL]  <b class="t02">// HTTPヘッダ情報表示</b>
</code></pre>
    </SwitchBox>

    <SwitchBox title="クリア">
      <pre><code><b class="t01">clear</b>  <b class="t02">// 端末画面クリア</b>
</code></pre>
    </SwitchBox>

    <SwitchBox title="マニュアル">
      <pre><code><b class="t01">man</b> [cmd]  <b class="t02">// コマンドマニュアル表示</b>
</code></pre>
    </SwitchBox>

    <SwitchBox title="終了">
      <pre><code><b class="t01">exit</b>  <b class="t02">// シェルを終了(リモートホストからログアウト)</b>
</code></pre>
    </SwitchBox>
  </PreCodes>
</template>
