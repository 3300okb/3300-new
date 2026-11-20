<script lang="ts">
export const metadata = {
  updateDate: '2026/11/21',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader
    title="harness-brushup-skill-prompt"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <p>
      Claude Code と Codex CLI のハーネス（グローバルの ~/.claude・~/.codex
      と、各リポジトリの
      CLAUDE.md・AGENTS.md・.claude/・.codex/）を、指定したモデル向けに新規作成・ブラッシュアップするスキル
      harness-brushup をセットアップするプロンプト。Claude Code と Codex CLI
      のどちらに貼ってもよい。
    </p>
    <p>
      セットアップ後は、Claude Code なら /harness-brushup、Codex CLI なら
      $harness-brushup
      と入力するか、「新しいモデルが出たのでハーネスを見直して」のように頼むと起動する。Claude
      Code / Codex
      の対象モデルと、対象（グローバル・リポジトリ）を選択式で聞かれる。
      モデルごとの調査メモは ~/.agents/harness-brushup/notes/、変更前の退避は
      ~/.agents/harness-brushup/backups/ に作られ、Claude Code と Codex
      で共用する。
    </p>
    <p>
      必要なもの: python3、node / npm（TOML の構文チェックで smol-toml
      を一時的に入れる）、gh（PR を作る場合）。Claude Code
      ではモデル候補の取得に同梱の claude-api スキルを使う。
    </p>

    <pre><code><CopyCode top>以下の内容で、Claude Code と Codex CLI の両方で使えるスキル harness-brushup を作ってください。
- 実体の保存先: ~/.agents/skills/harness-brushup/（Codex CLI が読む場所。フォルダが無ければ作る）
- Claude Code 用: ~/.claude/skills/harness-brushup を、上の実体フォルダへのシンボリックリンクにする（ln -s ../../.agents/skills/harness-brushup ~/.claude/skills/harness-brushup）
- 既に同名のファイル・フォルダ・リンクがあれば、上書きや置き換えの前に中身や差分を見せて確認する
- 下の「===== &lt;パス&gt;」の行から次の「=====」の行の手前まで（最後のファイルは末尾まで）を、実体フォルダからの相対パス &lt;パス&gt; に一字一句そのまま保存する（区切りの行は含めない。要約・整形・翻訳はしない）
- scripts/ の .sh には実行権限を付ける
- scripts/hook-cases.txt には危険なコマンドの文字列が並ぶ。シェルの heredoc や echo で書くと guard 系の hooks に止められるので、ファイル書き込みツールで保存する
- 保存後、各ファイルを読み返して内容が一致していることを確認し、bash ~/.agents/skills/harness-brushup/scripts/check_configs.sh ~/.agents/skills/harness-brushup/scripts/*.sh で構文を確かめる

===== SKILL.md
---
name: harness-brushup
description: Claude Code と Codex CLI のハーネス（グローバルの ~/.claude・~/.codex と、各リポジトリの CLAUDE.md・AGENTS.md・.claude/・.codex/ にある md・settings・hooks・rules・agents・skills）を、指定したモデル向けに一気通貫で新規作成・ブラッシュアップする。起動時に Claude Code / Codex それぞれの対象モデルと、対象（グローバル・リポジトリ）を選択式で質問する。「新しいモデルが出たのでハーネスを見直して」「CLAUDE.md / AGENTS.md を新モデル向けに更新」「hooks や設定を Opus / GPT の新バージョンに合わせたい」「このリポジトリに Claude Code と Codex の設定を用意して」など、モデル更新やエージェント設定の整備に関する依頼では、スキル名が明示されていなくても使うこと。
user_invocable: true
---

# ハーネスのモデル別ブラッシュアップ

流れ:

1. 現状を把握し、対象モデルと対象を選択式で聞く（Step 0）
2. 対象モデルの挙動を一次情報で調べ、`$N` に残す（Phase 1）
3. グローバルのハーネスを更新する（Phase 2）
4. 選んだリポジトリのハーネスを作成・更新する（Phase 3）
5. 結果を報告する（Phase 4）

`S=&lt;この SKILL.md のあるディレクトリ&gt;`（`~/.claude/skills/harness-brushup` または `~/.agents/skills/harness-brushup`）、`N=~/.agents/harness-brushup/notes` とします。
notes は Claude Code と Codex で共用するユーザーごとのグローバル（`~/.agents`）に置き、スキルのリポジトリには含めません（無ければ `mkdir -p $N`）。

Codex CLI で実行するときは、Claude Code 固有のツールを次のように読み替えます。

- AskUserQuestion → 同じ質問と選択肢を文章で 1 回にまとめて示し、回答を待つ
- `claude-api` スキル → Anthropic 公式のモデル一覧（docs.claude.com の Models overview）
- Explore エージェント → 使わずに 1 つずつ処理する

## Step 0: 現状把握と質問

質問の前に、次を集めます（並列でよい）。

- **今の前提モデル:**
  - `~/.claude/CLAUDE.md` 冒頭の「前提で校正」行、`~/.claude/settings.json` の `model` / `effortLevel`
  - `~/.codex/config.toml` の `model` / `model_reasoning_effort`
- **Claude の候補:** `claude-api` スキルのモデル表（現行の最新モデル）
- **Codex の候補:** `~/.codex/models_cache.json` の `visibility == "list"` を `priority` 昇順で

  ```bash
  python3 -c "import json;m=json.load(open('$HOME/.codex/models_cache.json'))['models'];[print(x['slug'],x['default_reasoning_level']) for x in sorted(m,key=lambda x:x['priority']) if x.get('visibility')=='list']"
  ```

- **リポジトリの候補:** `bash $S/scripts/find_repos.sh`（最終コミットの新しい順。カレントがリポジトリなら先頭に置く）

AskUserQuestion で、次を **1 回の呼び出しにまとめて** 聞きます。

1. **Claude Code の対象モデル**（単一選択）
   - 最新モデル（Recommended）/ 1 つ前の世代 / 「変更なし（現在: 〇〇）」
2. **Codex CLI の対象モデル**（単一選択。同じ形）
3. **対象**（multiSelect）
   - 「グローバル（~/.claude・~/.codex）」＋ リポジトリ候補の上位 3 件
   - 各 option の description に、最終コミット日と既存ハーネス（例: `CLAUDE.md .claude`／`なし`）を書く
4. **対象（続き）**（multiSelect。候補が 4 件以上あるときだけ）
   - 残りの候補を最大 4 件
   - question 文に「一覧にないリポジトリは Other にパスを入力」と書く

扱い:

- 両方「変更なし」なら、モデル校正はせず、選んだ対象の不具合修正・整理だけを行う
- 対象が何も選ばれなければ、そこで終える

## Phase 1: 対象モデルの挙動を調べる

`$N/claude-&lt;model&gt;.md` / `codex-&lt;model&gt;.md` が既にあれば読み、確認日以降の公式の更新だけを確かめて追記します。
無ければ調べて作ります。

notes の書式:

- ファイル名: `claude-&lt;model&gt;.md` / `codex-&lt;model&gt;.md`（例: `claude-opus-5-5.md`, `codex-gpt-6-astra.md`）
- 構成: 確認日 / 消す / 残す / 足す / 設定キー（model ID・effort のキーと既定値）/ 出典 URL
- `harness-layout.md` の構成: 確認日 / グローバル / リポジトリ（それぞれ Claude・Codex）/ 出典 URL
- 書くのは一次情報で確認できたことだけ。推測は「未確認」と明記する

一次情報:

- **Claude:**
  - `claude-api` スキルの `shared/model-migration.md` の該当モデル節（挙動の変化・effort・breaking changes）
  - 公式の「Prompting Claude &lt;model&gt;」等のプロンプトガイド（platform.claude.com）
  - Claude Code ドキュメント: `https://code.claude.com/docs/en/model-config`（effort のキーと既定値）、`/settings`、`/hooks`、`/memory`、`/skills`、`/sub-agents`
  - 公式情報の当たりが付かないときは `claude-code-guide` エージェントに聞いてよい
- **OpenAI / Codex:**
  - OpenAI 公式の、そのモデル向けプロンプトガイド・AGENTS.md の記事
  - Codex ドキュメント（`developers.openai.com/codex/*` は `learn.chatgpt.com/docs/*` にリダイレクトされる）: config・AGENTS.md・hooks・rules・skills・subagents
- **ハーネスの構成（モデルに依存しない）:** 公式が推奨する構成を、選ばれた対象（グローバル / リポジトリ）について `$N/harness-layout.md` に残す（あれば確認日以降の更新だけ確かめる）
  - Claude: `https://code.claude.com/docs/en/best-practices`、`/features-overview`、`/memory`、`/settings`（置くべきファイル・設定、CLAUDE.md に書く/書かないもの、agents・skills・hooks・docs をどんな条件で作るか）
  - Codex: config・AGENTS.md・rules・hooks・skills・subagents のドキュメント（同じ観点）
- サードパーティのブログは参考程度。config キーや hooks の書式が公式と食い違うことがある。
  WebFetch の要約は JSON の形を取り違えることがあるので、スキーマに依存する部分は原文を確かめる

メモは次の 3 つに分けます。

- **消す:** 新モデルでは不要・逆効果な指示（例: 過剰な強調、「よく考えてから」、検証の強制、毎回ドキュメントを読ませる指示）
- **残す:** 前世代向けに入れたが今も効く指示
- **足す:** 新モデルで必要になった指示（例: 完了条件、承認なしで回してよい操作、途中報告で止まらない）

## 校正の原則（Phase 2・3 共通）

- **足すより消す。** 常時ロードされる散文に置くのは、モデルの既定挙動とずれる数行だけ
- **「必ず / 絶対」は散文で守られない。** hooks / permissions / rules に寄せ、散文には方針と出典だけを書く
- **層を分ける。**
  - グローバル: どのリポジトリでも同じ作業の進め方・安全方針
  - リポジトリ: そのプロジェクト固有の事実（コマンド、構成、変更境界、検証ゲート）
  - 同じ内容を両方に書かない
- **ツール固有の指示は見出しで対象を明示する。** `~/.codex/AGENTS.md` は `~/.claude/CLAUDE.md` への symlink なので、無印の Claude 固有指示は Codex にも届いてしまう
- **ユーザーが書いた独自の内容は消さない。** 統合・移動したものは報告に書く。古い指示を消すときは理由を言えるものだけ
- **書くのは notes で確認できた設定キー・挙動だけ。** 未確認のものは書かずに報告に回す

## Phase 2: グローバル

対象ファイル（存在しないものは、必要なら作る）:

- `~/.claude/CLAUDE.md`（正本）と `~/.codex/AGENTS.md`（symlink。実体ではなく正本を編集する）
- `~/.claude/settings.json`（`model`・effort・permissions・hooks）、`~/.claude/hooks/*.sh`、`~/.claude/policies/*.md`
- `~/.codex/config.toml`（`model`・`model_reasoning_effort`・hooks）、`~/.codex/rules/*.rules`、`~/.codex/hooks/*.sh`
- 上記以外でも、`$N/harness-layout.md` で公式が推奨しているグローバルのファイル・設定があれば対象に加える

`~/.claude/CLAUDE.md` が無く新しく作る場合は、[andrej-karpathy-skills の CLAUDE.md](https://github.com/multica-ai/andrej-karpathy-skills/blob/main/CLAUDE.md) の原文を実行時に取得し（`curl -fsSL https://raw.githubusercontent.com/multica-ai/andrej-karpathy-skills/main/CLAUDE.md`。WebFetch の要約は使わない。ライセンス表記が無いため写しは同梱しない）、その内容を盛り込む。

- notes の公式推奨と食い違う箇所は、公式に寄せて書き換えてから盛り込む（例: 「不明なら必ず聞く」が新モデルの推奨と合わなければ、聞く条件を絞る）
- 書き換えた箇所と理由は報告に書く
- `~/.codex/AGENTS.md` は正本への symlink として作る

手順:

1. **退避:** 上記を `~/.agents/harness-brushup/backups/harness-brushup-{YYYYMMDDHHMM}/` にコピーする（symlink は `cp -P`）
2. **下書き:** scratchpad に写しを作って編集する。主な更新箇所:
   - CLAUDE.md 冒頭の前提モデル行、各セクションの指示（notes の消す/残す/足す）、effort の記述
   - settings.json / config.toml のモデルと effort（Step 0 で選ばれたモデルに合わせる）
   - hooks: notes の新しいイベント・書式への追従と、既存の不具合（部分一致のすり抜け、JSON エスケープ漏れなど）
   - policies/security.md の「強制の実体」を hooks・permissions・rules の実態と一致させる
3. **hooks を変えたら、変更前後で同じテストを流して比べる:**

   ```bash
   bash $S/scripts/run_hook_cases.sh &lt;hook.sh&gt; PreToolUse          # Codex は PermissionRequest も
   bash $S/scripts/stop_gate_test.sh &lt;hook.sh&gt;                     # Stop に手を入れたとき
   ```

   ケースを足すときは `hook-cases.txt` に追記する（コマンドラインに危険コマンドを直接書くと、実行中の guard hook がブロックする）
4. **構文チェック:** `bash $S/scripts/check_configs.sh &lt;下書きの .json/.toml/.sh&gt;`
5. **適用の確認:** ファイルごとの差分の要約を示し、AskUserQuestion（multiSelect）で適用するファイルを選んでもらう。ホームディレクトリの設定は全セッションに効くため
6. **適用後:** 本物に対して 3・4 をもう一度流し、`readlink ~/.codex/AGENTS.md` で symlink が保たれていることを確かめる

Claude / Codex の hooks の違い（notes で最新を確かめること）:

- PreToolUse の deny は同じ JSON（`hookSpecificOutput.permissionDecision: "deny"`）で書ける
- 自動承認は、Claude が PreToolUse の `permissionDecision: "allow"`、Codex が PermissionRequest の `decision.behavior: "allow"`
- Codex の Stop は、exit 0 のとき stdout に JSON（`{}`）が必要
- どちらも Stop を exit 2 + stderr で終えると作業を続けさせられる。`stop_hook_active` を見て続行は 1 回までにする

## Phase 3: リポジトリ

選ばれたリポジトリを 1 つずつ処理します（3 件以上なら、各リポジトリの現状把握だけを Explore エージェントに並列で任せてよい）。

1. **準備:**
   - 未コミットの変更があれば、そのリポジトリはスキップするか聞く
   - 既定ブランチから `dev/{YYYYMMDDHHMM}-harness-brushup` を切る（`git pull` に失敗したら警告して手元の既定ブランチから）
2. **現状把握:**
   - 既存ハーネス: `CLAUDE.md`、`AGENTS.md`、`.claude/`（settings.json・rules・agents・skills・commands・hooks・docs）、`.codex/`（config.toml・agents/*.toml・*.md）
   - 事実の出典: `package.json` の scripts、Makefile、CI 設定、README、ディレクトリ構成
3. **作成・更新:**
   - **無い場合:** `$N/harness-layout.md` の公式推奨に沿って作る
     - `CLAUDE.md` と `AGENTS.md`: 推奨の「書くもの」に当たる事実だけ（主要コマンド、検証ゲート、変更境界、コードから読み取れない規約など）
     - agents・skills・hooks・docs: 推奨の作成条件にこのリポジトリが当てはまるものだけ作る。作った・見送ったものは理由を報告に書く
   - **ある場合:** 校正の原則に沿って直す。グローバルと重複する記述は消す
   - agents（`.claude/agents/*.md` の `model` / `effort`、`.codex/agents/*.toml` の `model` / `model_reasoning_effort`）を notes に合わせる
   - 共有する設定は `.claude/settings.json`、個人用は `settings.local.json`。`.codex/config.toml` はプロジェクトが trusted のときだけ読まれる点に注意
   - hooks を変えたら Phase 2 の 3 と同じテストを流す
4. **検証:** `check_configs.sh` で構文、プロジェクトのゲート（lint / test / typecheck / build など、あるもの）を実行する
5. 全リポジトリの処理後、変更の要約を示し、AskUserQuestion（multiSelect）で「コミット &amp; PR を作るリポジトリ」を選んでもらう
   - コミットメッセージは英語の命令形 1 行、PR 本文は日本語（概要・変更点・確認結果・出典 URL）
   - PR 本文は `gh pr create --body-file` で渡す（本文中の危険コマンド文字列で guard hook が誤反応するため）
   - 選ばれなかったリポジトリは、ブランチと未コミットの変更を残したままにして報告する

## Phase 4: 完了報告

対象ごとに簡潔に:

- **変更点:** 消した / 足した / 直した指示と設定、統合・移動したユーザー独自の内容
- **確認結果:** hooks テスト・構文チェック・ゲートの出力をそのまま（失敗は失敗として）
- **PR:** URL（作ったもの）
- **確実でない点:** 一次情報で確かめられなかった記述
- **反映のタイミング:** hooks・settings は次のツール呼び出しから、CLAUDE.md / AGENTS.md は次のセッションから有効
- **退避先:** `~/.agents/harness-brushup/backups/harness-brushup-{YYYYMMDDHHMM}/`
===== scripts/find_repos.sh
#!/usr/bin/env bash
# ホーム配下の git リポジトリを最終コミットの新しい順に列挙し、既存ハーネスの有無を添える。
# usage: find_repos.sh [search root ...]   （既定: ~ を深さ 3 まで）
# 出力: &lt;最終コミット日&gt; &lt;パス&gt; [CLAUDE.md AGENTS.md .claude .codex のうち存在するもの]
ROOTS=("$@")
[ ${#ROOTS[@]} -eq 0 ] &amp;&amp; ROOTS=("$HOME")

for root in "${ROOTS[@]}"; do
  find "$root" -maxdepth 3 -name .git -type d \
    -not -path "$HOME/Library/*" -not -path "$HOME/.*/*" -not -path '*/node_modules/*' 2&gt;/dev/null
done | while read -r g; do
  r=${g%/.git}
  d=$(git -C "$r" log -1 --format=%cs 2&gt;/dev/null || echo "----------")
  h=""
  for f in CLAUDE.md AGENTS.md .claude .codex; do [ -e "$r/$f" ] &amp;&amp; h="$h $f"; done
  printf '%s %s [%s]\n' "${d:-----------}" "$r" "${h# }"
done | sort -r
===== scripts/check_configs.sh
#!/usr/bin/env bash
# 設定ファイルの構文を確かめる。拡張子で判定: .json → JSON、.toml → TOML、.sh → bash -n
# usage: check_configs.sh &lt;file&gt; ...
# macOS 標準の python3 (3.9) には tomllib が無いので、TOML は smol-toml を一時領域に入れて node で読む。
TOMLDIR=""
rc=0
for f in "$@"; do
  case "$f" in
    *.json) python3 -m json.tool "$f" &gt;/dev/null 2&gt;&amp;1 ;;
    *.sh) bash -n "$f" 2&gt;/dev/null ;;
    *.toml)
      if [ -z "$TOMLDIR" ]; then
        TOMLDIR=$(mktemp -d)
        npm install --silent --prefix "$TOMLDIR" smol-toml &gt;/dev/null 2&gt;&amp;1
      fi
      node -e 'require(process.argv[1]).parse(require("fs").readFileSync(process.argv[2],"utf8"))' \
        "$TOMLDIR/node_modules/smol-toml" "$f" 2&gt;/dev/null ;;
    *) echo "skip  $f"; continue ;;
  esac
  if [ $? -eq 0 ]; then echo "ok    $f"; else echo "FAIL  $f"; rc=1; fi
done
[ -n "$TOMLDIR" ] &amp;&amp; rm -rf "$TOMLDIR"
exit $rc
===== scripts/run_hook_cases.sh
#!/usr/bin/env bash
# hooks スクリプトに hook-cases.txt の各コマンドを流し、判定を一覧表示する。
# usage: run_hook_cases.sh &lt;hook script&gt; &lt;PreToolUse|PermissionRequest&gt; [cases file]
#
# 出力の判定欄: allow / deny / -（判定なし＝通常の承認フロー）
# exit 2 でブロックする型の hook（guard.sh 等）は "exit2" と表示する。
#
# テストケースをファイルに置いているのは、危険コマンドの文字列を
# コマンドラインに直接書くと、実行中セッションの guard hook がそれ自体をブロックするため。
HOOK="$1"
EVENT="${2:-PreToolUse}"
CASES="${3:-$(dirname "$0")/hook-cases.txt}"

while IFS= read -r c; do
  [ -z "$c" ] &amp;&amp; continue
  out=$(python3 -c 'import json,sys;print(json.dumps({"hook_event_name":sys.argv[2],"tool_input":{"command":sys.argv[1]}}))' "$c" "$EVENT" \
    | bash "$HOOK" 2&gt;/dev/null)
  code=$?
  if [ "$code" = 2 ]; then
    d=exit2
  else
    d=$(printf '%s' "$out" | python3 -c '
import json,sys
s=sys.stdin.read()
if not s.strip(): print("-")
else:
    h=json.loads(s).get("hookSpecificOutput",{})
    print(h.get("permissionDecision") or (h.get("decision") or {}).get("behavior") or "?")')
  fi
  printf '%-6s %s\n' "$d" "$c"
done &lt; "$CASES"
===== scripts/stop_gate_test.sh
#!/usr/bin/env bash
# Stop の完了ゲートを、ダミーの git リポジトリで 5 通り試す。
# usage: stop_gate_test.sh &lt;hook script&gt;
#
# 期待値:
#   pass / dirty          → exit 0（検証が通れば止めてよい）
#   fail / clean          → exit 0（変更がなければ検証しない）
#   fail / dirty          → exit 2（止めずに続けさせる）
#   fail / dirty / 2nd    → exit 0（stop_hook_active=true の 2 回目は止める）
#   fail / dirty / subdir → exit 2（サブディレクトリから起動しても git ルートで判定）
#                           ※ hooks 記事のグローバル版は入力の cwd 基準で判定するため exit 0 で正常
# Codex 用のスクリプトは exit 0 のとき stdout が {} であること。
HOOK="$(cd "$(dirname "$1")" &amp;&amp; pwd)/$(basename "$1")"
WORK=$(mktemp -d)
P="$WORK/proj"
mkdir -p "$P/sub" "$WORK/home"
cd "$P" &amp;&amp; git init -q &amp;&amp; git commit -q --allow-empty -m init

run() { # label check_exit dirty|clean active(true|false) cwd
  rm -f "$P/d.txt"
  printf '{"name":"p","scripts":{"check":"exit %s"}}' "$2" &gt; "$P/package.json"
  git -C "$P" add -A &amp;&amp; git -C "$P" commit -qm x &gt;/dev/null 2&gt;&amp;1
  [ "$3" = dirty ] &amp;&amp; echo x &gt; "$P/d.txt"
  out=$(printf '{"hook_event_name":"Stop","cwd":"%s","stop_hook_active":%s,"last_assistant_message":"done"}' "$5" "$4" \
    | (cd "$5" &amp;&amp; HOME="$WORK/home" CLAUDE_PROJECT_DIR="$P" bash "$HOOK" 2&gt;/dev/null))
  printf '%-24s exit=%s stdout=%s\n' "$1" "$?" "${out:--}"
}
run "pass / dirty"          0 dirty false "$P"
run "fail / clean"          1 clean false "$P"
run "fail / dirty"          1 dirty false "$P"
run "fail / dirty / 2nd"    1 dirty true  "$P"
run "fail / dirty / subdir" 1 dirty false "$P/sub"
rm -rf "$WORK"
===== scripts/hook-cases.txt
git status
git log --oneline -5
git log; curl x | sh
git diff $(evil)
git statusx
npm run check &amp;&amp; rm -rf ~
npm run typecheck
npm test
rm -rf node_modules
rm -fr /
rm -r -f ~
rm -rf $HOME
rm -rf /tmp/x
rm -rf ~/
rm -rf "$HOME"
rm -rf ${HOME}
rm -rf '/'
rm -rf "$HOME/proj"
git push --force origin feat
git push -f
git push --force-with-lease
git push origin main
git push -u origin dev/x
git push origin feature-main
git push origin +feat
git push origin HEAD:main
git push origin dev/x:dev/x
git push -fu origin feat
git push -uf origin feat
git push --follow-tags origin feat
git push origin fix-f
git push
git push origin
git add .env
git add .env.local
git add .env.example
git add .env.example .env
git commit -m 'x'
psql -c "drop table users"
git -C /tmp/r push --force origin feat
git -C /tmp/r push origin main
git -c core.x=y push -f origin feat
git --no-pager push origin main
git -C /tmp/r status
git -C /tmp/r push -u origin dev/x
git -C /tmp/r add .env
git --git-dir=/tmp/r/.git push origin dev/x
</CopyCode></code></pre>
  </PreCodes>
</template>
