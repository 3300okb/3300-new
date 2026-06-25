<script lang="ts">
export const metadata = {
  updateDate: '2026/06/26',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader title="Codex hooks" :update-date="metadata.updateDate" />

  <PreCodes>
    <pre><b class="t01">~/.codex/config.toml</b></pre>
    <pre><code><CopyCode top>[[hooks.PreToolUse]]
matcher = "Bash"

[[hooks.PreToolUse.hooks]]
type = "command"
command = "bash /Users/tomokazuokubo/.codex/hooks/codex-hooks.sh"
statusMessage = "Bash コマンドを検査中"

[[hooks.PostToolUse]]
matcher = "apply_patch|Edit|Write"

[[hooks.PostToolUse.hooks]]
type = "command"
command = "bash /Users/tomokazuokubo/.codex/hooks/codex-hooks.sh"
statusMessage = "Prettier で整形中"

[[hooks.Stop]]

[[hooks.Stop.hooks]]
type = "command"
command = "bash /Users/tomokazuokubo/.codex/hooks/codex-hooks.sh"</CopyCode></code></pre>

    <pre><b class="t01">~/.codex/hooks/codex-hooks.sh</b></pre>
    <pre><code><CopyCode top>#!/usr/bin/env bash

INPUT=$(cat)

# JSON から値を取り出す共通ヘルパー（python3 で安全にパース）
json() {
  echo "$INPUT" | python3 -c "import json,sys; d=json.load(sys.stdin); print($1)" 2>/dev/null
}

deny() {
  python3 -c "import json,sys; print(json.dumps({'hookSpecificOutput':{'hookEventName':'PreToolUse','permissionDecision':'deny','permissionDecisionReason':sys.argv[1]}}, ensure_ascii=False))" "$1"
  exit 0
}

EVENT=$(json "d.get('hook_event_name','')")

case "$EVENT" in
  # ── ツール実行直前：危険コマンド拒否 / commit 前チェック / 安全コマンド自動承認 ──
  PreToolUse)
    COMMAND=$(json "d.get('tool_input',{}).get('command','')")
    [ -z "$COMMAND" ] &amp;&amp; exit 0

    if printf '%s' "$COMMAND" | grep -qE 'git[[:space:]]+push.*(--force|[[:space:]]-f([[:space:]]|$)).*(main|master)|git[[:space:]]+push.*(main|master).*(--force|[[:space:]]-f([[:space:]]|$))'; then
      deny "force push to main/master is prohibited (policies/security.md)"
    fi
    if printf '%s' "$COMMAND" | grep -qE '(git[[:space:]]+add|git[[:space:]]+commit)[^|;&]*(\.env([[:space:]]|$|\.))'; then
      deny "do not stage or commit .env files (policies/security.md)"
    fi
    if printf '%s' "$COMMAND" | grep -qE 'rm[[:space:]]+-[rRf]*[rR][rRf]*[[:space:]]+(/|~|\$HOME)([[:space:]]|$)'; then
      deny "dangerous rm -rf target (policies/security.md)"
    fi
    if printf '%s' "$COMMAND" | grep -qE 'git[[:space:]]+push[[:space:]]+origin[[:space:]]+(main|master)([[:space:]]|$)'; then
      deny "direct push to main/master is prohibited — open a PR (policies/security.md)"
    fi

    DANGEROUS=("rm -rf" "DROP TABLE" "git push --force" "git push -f")
    for p in "${DANGEROUS[@]}"; do
      if echo "$COMMAND" | grep -qi "$p"; then
        deny "危険なコマンドをブロックしました: $p"
      fi
    done

    # git commit 前に品質チェック（check スクリプトを持つプロジェクトでのみ実行）
    # グローバルフックなので、package.json に check が無いリポジトリでは誤爆させない
    if echo "$COMMAND" | grep -q "^git commit"; then
      if [ -f package.json ] &amp;&amp; grep -qE '"check"[[:space:]]*:' package.json; then
        if ! npm run check >/dev/null 2>&amp;1; then
          deny "npm run check が失敗しています。修正してからコミットしてください。"
        fi
      fi
    fi

    SAFE=(
      "npm run check" "npm run lint" "npm run build" "npm run fix"
      "npm run index:generate" "npm run _stylelint"
      "npx stylelint" "npx prettier" "npx tsc"
      "git status" "git diff" "git log" "git worktree add"
    )
    for p in "${SAFE[@]}"; do
      if echo "$COMMAND" | grep -q "$p"; then
        echo '{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"allow"}}'
        exit 0
      fi
    done
    ;;

  # ── ファイル編集直後：JS/TS/Vue を Prettier で整形 ──
  PostToolUse)
    # apply_patch は tool_input.command にパッチ全体が入るので対象パスを抽出。
    # file_path を持つツール（MCP 等）にも対応。
    FILES=$(echo "$INPUT" | python3 -c "
import json,re,sys
d = json.load(sys.stdin)
ti = d.get('tool_input',{})
files = []
if ti.get('file_path'):
    files.append(ti['file_path'])
for m in re.finditer(r'^\*\*\* (?:Add|Update) File: (.+)$', ti.get('command',''), re.M):
    files.append(m.group(1).strip())
for f in files:
    print(f)
" 2>/dev/null)
    [ -z "$FILES" ] &amp;&amp; exit 0
    CWD=$(json "d.get('cwd','')")
    while IFS= read -r FILE; do
      if echo "$FILE" | grep -qE '\.(ts|tsx|js|jsx|vue)$'; then
        case "$FILE" in
          /*) ;;
          *) FILE="$CWD/$FILE" ;;
        esac
        npx prettier --write "$FILE" >/dev/null 2>&amp;1
        echo "✨ フォーマット完了: $FILE"
      fi
    done &lt;&lt;&lt; "$FILES"
    ;;

  # ── 応答終了時：Slack 通知（webhook 未設定なら何もしない） ──
  # Stop は exit 0 時に stdout へ JSON が必須（プレーンテキスト・空出力は不可）
  Stop)
    WEBHOOK_FILE="$HOME/.codex/slack-webhook"
    [ -f "$WEBHOOK_FILE" ] || WEBHOOK_FILE="$HOME/.claude/slack-webhook"
    if [ -f "$WEBHOOK_FILE" ]; then
      MESSAGE=$(json "str(d.get('last_assistant_message','') or '')[:100]")
      PAYLOAD=$(python3 -c "import json,sys; print(json.dumps({'text': '✅ Codex 作業完了: ' + sys.argv[1]}, ensure_ascii=False))" "$MESSAGE")
      curl -s -X POST "$(cat "$WEBHOOK_FILE")" \
        -H "Content-Type: application/json" \
        -d "$PAYLOAD" >/dev/null
    fi
    echo '{}'
    exit 0
    ;;
esac

exit 0</CopyCode></code></pre>
  </PreCodes>
</template>
