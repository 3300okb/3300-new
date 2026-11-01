<script lang="ts">
export const metadata = {
  updateDate: '2026/11/01',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader
    title="argocd-sync-log-skill-prompt"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><code><CopyCode top>以下の内容で、Claude Code と Codex CLI の両方で使えるスキル argocd-sync-log を作ってください。
- 実体の保存先: ~/.agents/skills/argocd-sync-log/SKILL.md（Codex CLI が読む場所。フォルダが無ければ作る）
- Claude Code 用: ~/.claude/skills/argocd-sync-log を、上の実体フォルダへのシンボリックリンクにする（ln -s ../../.agents/skills/argocd-sync-log ~/.claude/skills/argocd-sync-log）
- 既に同名のファイル・フォルダ・リンクがあれば、上書きや置き換えの前に中身や差分を見せて確認する
- 中身は「---」の行から最後まで、一字一句そのまま保存する（要約・整形・翻訳はしない）
- 保存後、ファイルを読み返して内容が一致していることを確認する

---
name: argocd-sync-log
description: Argo CD の UI にある LAST SYNC と SYNC STATUS のリビジョン(ハッシュ)を2つ受け取り、その間の git log と diff を出して、Sync で一緒に公開される意図しないコミット(他の人のコミットなど)がないか確認する。「Sync の前に確認したい」「LAST SYNC と SYNC STATUS のハッシュを渡すので log を見て」「OutOfSync の中身を調べたい」などで使う。読み取りのみで、Sync・commit・push・revert はしない。
---

# argocd-sync-log

Argo CD の OutOfSync で、`LAST SYNC`(今の公開版)から `SYNC STATUS`(Sync で公開される Git の HEAD)までに、何が入るかを Git で確認する。
Argo CD の APP DIFF はマニフェストの差分(`image:` のタグなど)しか出さないので、間のコミットは Git で見る。

## 入力

- `LAST SYNC` のハッシュ(= `&lt;last&gt;`)
- `SYNC STATUS` のハッシュ(= `&lt;target&gt;`)
- 任意: 絞り込みのパス(例: `src/shop apps/shop`)

ユーザーの発言や引数から2つのハッシュを取り出す。UI の画面にある値でよい。
ハッシュが無い(または足りない)ときは、聞く前に `kubectl` で取る。
```
kubectl get application -n argocd -o jsonpath='{range .items[*]}{.metadata.name}{"\t"}{.status.sync.status}{"\t"}{.status.history[-1:].revision}{"\t"}{.status.sync.revision}{"\n"}{end}'
```
列は、Application 名、Sync 状態、最後に deploy した版(= `&lt;last&gt;`)、比較対象の HEAD(= `&lt;target&gt;`)。
OutOfSync のもの、または `&lt;last&gt;` と `&lt;target&gt;` が違うものを対象に手順を進める。対象が複数ある、または1つも決められないときだけ聞く。
全部 Synced で `&lt;last&gt;` と `&lt;target&gt;` も同じなら、「確認する範囲が無い」と伝えて終わる。

## 手順

**前提**: このスキルは、セッションを起動したフォルダ(カレントディレクトリ)の Git リポジトリを調べる。Argo CD が見ている構成リポジトリで起動すること。
最初に `git rev-parse --show-toplevel` で確かめ、Git リポジトリでない、または別のリポジトリ(例: アプリ側)に見えるときは、構成リポジトリのパスを聞く(教えられたら `git -C &lt;パス&gt;` で実行する)。
`kubectl` で取るハッシュはクラスタ全体のものなので、起動したフォルダとは無関係。

1. ハッシュの検証
   - `git cat-file -e &lt;last&gt;^{commit}` と `git cat-file -e &lt;target&gt;^{commit}` で存在を確かめる。無ければ、そこで止まって次を伝える(`pwd` と `git rev-parse --show-toplevel` の値も添える)。
     &gt; `&lt;hash&gt;` が今のリポジトリに存在しません。構成リポジトリ以外のフォルダで起動している可能性があります。構成リポジトリのパスを教えるか、そのフォルダで起動し直してください。リモートに新しいコミットがある場合は `git fetch` が必要です。
   - `git merge-base --is-ancestor &lt;last&gt; &lt;target&gt;` が失敗する場合は、次のどちらか。どちらも `git log --left-right --format='%m %h %an %s' &lt;last&gt;...&lt;target&gt;` で両側を出し、その旨を伝える。
     - `git merge-base --is-ancestor &lt;target&gt; &lt;last&gt;` が成功する: `&lt;target&gt;` が古い側。引数の順序が逆か、古い版への巻き戻し。勝手に入れ替えず、巻き戻しの向き(`&lt;last&gt;` 側にだけあるものが外れる)として読み、入れ替えた場合の通常の向きも一言添える。
     - 成功しない: ロールバック後などで枝が分かれている。
2. コミット一覧(`&lt;last&gt;` を含まず `&lt;target&gt;` を含む範囲)
   ```
   git log --format='%h %an %ad %s' --date=short &lt;last&gt;..&lt;target&gt; [-- &lt;paths&gt;]
   ```
   パス指定が無いときは、パス有りと無しの両方を出してもよい(マニフェストの deploy 記録も含めて見るため)。
3. 差分
   ```
   git diff --stat &lt;last&gt; &lt;target&gt; [-- &lt;paths&gt;]
   git diff &lt;last&gt; &lt;target&gt; -- &lt;paths or 全体&gt;
   ```
   `image:` の行の変更(旧タグ → 新タグ)があれば、必ず指摘する。
4. イメージの中身(`image:` のタグが変わっている場合)
   - タグがこのリポジトリのコミット SHA として存在する(`git cat-file -e &lt;tag&gt;^{commit}`)なら、`git log --format='%h %an %ad %s' &lt;oldtag&gt;..&lt;newtag&gt; -- &lt;ソースのパス&gt;` も出す。
   - 存在しなければ、「イメージの中身は別のリポジトリのコミット。そちらで `&lt;oldtag&gt;..&lt;newtag&gt;` を見る必要がある」と伝える。

## 報告

- 範囲のコミット数と一覧を、新しい順に簡潔に示す。
- 次のものを「要確認」として目立たせる: `git config user.name` と作者が違うコミット、メッセージが作業内容と合わないコミット、`password` / `secret` / `token` / `debug` を含む差分。
- 「結果として何が変わるか」(diff の要点)を数行でまとめる。
- 意図しない可能性があるものが見つかったら、Sync を勧めず、作者への確認を促す。問題なさそうでも、「確認した範囲」を明記する(見ていないものを問題なしと言わない)。

## 守ること

- 読み取り専用。`git commit` / `push` / `revert` / `reset`、`kubectl` による Sync や変更は、頼まれていない限りしない。
- revert など次の作業を頼まれたら、このスキルとは別の作業として扱う。
</CopyCode></code></pre>
  </PreCodes>
</template>
