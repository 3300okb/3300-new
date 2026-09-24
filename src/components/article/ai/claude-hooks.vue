<script lang="ts">
export const metadata = {
  updateDate: '2026/09/24',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader title="Claude hooks" :update-date="metadata.updateDate" />

  <PreCodes>
    <pre><b class="t01">~/.claude/settings.json</b></pre>
    <pre><code><CopyCode top>{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          { "type": "command", "command": "bash ~/.claude/hooks/claude-hooks.sh" }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          { "type": "command", "command": "bash ~/.claude/hooks/claude-hooks.sh" }
        ]
      }
    ],
    "Stop": [
      {
        "hooks": [
          { "type": "command", "command": "bash ~/.claude/hooks/claude-hooks.sh" }
        ]
      }
    ]
  }
}</CopyCode></code></pre>

    <pre><b class="t01">~/.claude/hooks/claude-hooks.sh</b></pre>
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

# 自動承認してよいコマンド（先頭一致）。連結・置換・リダイレクトを含むものは対象外
SAFE=(
  "npm run check" "npm run lint" "npm run build" "npm run fix"
  "npm run typecheck" "npm test" "npm run test"
  "npm run index:generate" "npm run _stylelint"
  "npx stylelint" "npx prettier" "npx tsc"
  "git status" "git diff" "git log" "git worktree add"
)
is_safe() {
  case "$1" in *[\;\&amp;\|\`\$\&lt;\>]* | *$'\n'*) return 1 ;; esac
  for p in "${SAFE[@]}"; do
    case "$1" in "$p" | "$p "*) return 0 ;; esac
  done
  return 1
}

EVENT=$(json "d.get('hook_event_name','')")

case "$EVENT" in
  # ── ツール実行直前：危険コマンド拒否 / commit 前チェック / 安全コマンド自動承認 ──
  PreToolUse)
    COMMAND=$(json "d.get('tool_input',{}).get('command','')")
    [ -z "$COMMAND" ] &amp;&amp; exit 0

    # 自動ブロック（policies/security.md と対応）。それ以外の rm -r 等は通常の承認フローに任せる
    if printf '%s' "$COMMAND" | grep -qE 'git[[:space:]]+push([[:space:]].*)?[[:space:]](--force|--force-with-lease|-f)([[:space:]=]|$)'; then
      deny "force push は禁止です (policies/security.md)"
    fi
    if printf '%s' "$COMMAND" | grep -qE 'git[[:space:]]+push[[:space:]]+[^;&amp;|]*[[:space:]](main|master)([[:space:]]|$)'; then
      deny "main/master への直接 push は禁止です。PR を作成してください (policies/security.md)"
    fi
    # .env.example など共有用の雛形は対象外
    if printf '%s' "$COMMAND" | sed -E 's/\.env\.(example|sample|template)//g' | grep -qE '(git[[:space:]]+add|git[[:space:]]+commit)[^|;&amp;]*\.env([[:space:]]|$|\.)'; then
      deny ".env を stage / commit しないでください (policies/security.md)"
    fi
    if printf '%s' "$COMMAND" | grep -qE 'rm[[:space:]]+(-[a-zA-Z]*[rR][a-zA-Z]*|--recursive)([[:space:]]+-[a-zA-Z-]+)*[[:space:]]+(/|~|\$HOME)/?\*?([[:space:]]|$)'; then
      deny "/・~・\$HOME を対象にした再帰削除は禁止です (policies/security.md)"
    fi
    if printf '%s' "$COMMAND" | grep -qiE 'drop[[:space:]]+(table|database)'; then
      deny "DROP TABLE / DATABASE は禁止です (policies/security.md)"
    fi

    # git commit 前に品質チェック（check スクリプトを持つプロジェクトでのみ実行）
    # グローバルフックなので、package.json に check が無いリポジトリでは誤爆させない
    if echo "$COMMAND" | grep -q "^git commit"; then
      if [ -f package.json ] &amp;&amp; grep -qE '"check"[[:space:]]*:' package.json; then
        if ! npm run check >/dev/null 2>&amp;1; then
          deny "npm run check が失敗しています。修正してからコミットしてください。"
        fi
      fi
    fi

    if is_safe "$COMMAND"; then
      echo '{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"allow","permissionDecisionReason":"安全なコマンドを自動承認しました"}}'
    fi
    ;;

  # ── ファイル編集直後：JS/TS/Vue を Prettier で整形 ──
  PostToolUse)
    FILE=$(json "d.get('tool_input',{}).get('file_path','')")
    [ -z "$FILE" ] &amp;&amp; exit 0
    if echo "$FILE" | grep -qE '\.(ts|tsx|js|jsx|vue)$'; then
      npx prettier --write "$FILE" >/dev/null 2>&amp;1
      echo "✨ フォーマット完了: $FILE"
    fi
    ;;

  # ── 応答終了時：完了ゲート → Slack 通知 ──
  # 未コミットの変更があるのに check が落ちていたら、止めずに修正を続けさせる（exit 2 + stderr）。
  # 続行させるのは 1 回だけ（stop_hook_active が True の 2 回目は止める）。
  Stop)
    CWD=$(json "d.get('cwd','')")
    [ -n "$CWD" ] &amp;&amp; cd "$CWD"
    STATUS="✅"
    if [ -f package.json ] &amp;&amp; grep -qE '"check"[[:space:]]*:' package.json \
      &amp;&amp; [ -n "$(git status --porcelain 2>/dev/null)" ]; then
      if ! npm run check >/dev/null 2>&amp;1; then
        if [ "$(json "d.get('stop_hook_active', False)")" != "True" ]; then
          echo "npm run check が失敗しています。原因を直して再実行してから終えてください。直せない場合は、何が残っているかを報告して終えてください。" >&amp;2
          exit 2
        fi
        STATUS="⚠️ check 未通過のまま"
      fi
    fi

    WEBHOOK_FILE="$HOME/.claude/slack-webhook"
    [ -f "$WEBHOOK_FILE" ] || exit 0
    MESSAGE=$(json "str(d.get('last_assistant_message','') or '')[:100]")
    # 本文に " や改行が含まれても壊れないよう、JSON は python で組み立てる
    PAYLOAD=$(python3 -c "import json,sys; print(json.dumps({'text': sys.argv[1] + ' Claude 作業完了: ' + sys.argv[2]}, ensure_ascii=False))" "$STATUS" "$MESSAGE")
    curl -s -X POST "$(cat "$WEBHOOK_FILE")" \
      -H "Content-Type: application/json" \
      -d "$PAYLOAD" >/dev/null
    ;;
esac

exit 0</CopyCode></code></pre>
  </PreCodes>
</template>
