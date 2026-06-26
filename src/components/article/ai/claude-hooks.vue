<script lang="ts">
export const metadata = {
  updateDate: '2026/06/25',
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

EVENT=$(json "d.get('hook_event_name','')")

case "$EVENT" in
  # ── ツール実行直前：危険コマンド拒否 / commit 前チェック / 安全コマンド自動承認 ──
  PreToolUse)
    COMMAND=$(json "d.get('tool_input',{}).get('command','')")

    DANGEROUS=("rm -rf" "DROP TABLE" "git push --force" "git push -f")
    for p in "${DANGEROUS[@]}"; do
      if echo "$COMMAND" | grep -qi "$p"; then
        echo "{\"hookSpecificOutput\":{\"hookEventName\":\"PreToolUse\",\"permissionDecision\":\"deny\",\"permissionDecisionReason\":\"危険なコマンドをブロックしました: $p\"}}"
        exit 0
      fi
    done

    # git commit 前に品質チェック（check スクリプトを持つプロジェクトでのみ実行）
    # グローバルフックなので、package.json に check が無いリポジトリでは誤爆させない
    if echo "$COMMAND" | grep -q "^git commit"; then
      if [ -f package.json ] &amp;&amp; grep -qE '"check"[[:space:]]*:' package.json; then
        if ! npm run check >/dev/null 2>&amp;1; then
          echo '{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"deny","permissionDecisionReason":"npm run check が失敗しています。修正してからコミットしてください。"}}'
          exit 0
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
        echo '{"hookSpecificOutput":{"hookEventName":"PreToolUse","permissionDecision":"allow","permissionDecisionReason":"安全なコマンドを自動承認しました"}}'
        exit 0
      fi
    done
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

  # ── 応答終了時：Slack 通知（webhook 未設定なら何もしない） ──
  Stop)
    WEBHOOK_FILE="$HOME/.claude/slack-webhook"
    [ -f "$WEBHOOK_FILE" ] || exit 0
    # Stop の入力に messages は無い。会話は transcript_path（JSONL）から読む
    TRANSCRIPT=$(json "d.get('transcript_path','')")
    [ -f "$TRANSCRIPT" ] || exit 0
    MESSAGE=$(python3 -c "
import json, sys
text = ''
try:
    with open(sys.argv[1]) as f:
        lines = f.readlines()
    for line in reversed(lines):
        try:
            d = json.loads(line)
        except Exception:
            continue
        msg = d.get('message') or {}
        if d.get('type') == 'assistant' or msg.get('role') == 'assistant':
            c = msg.get('content', '')
            if isinstance(c, list):
                for part in c:
                    if isinstance(part, dict) and part.get('type') == 'text':
                        text = part.get('text', ''); break
            elif isinstance(c, str):
                text = c
            if text:
                break
except Exception:
    pass
print(text[:100])
" "$TRANSCRIPT" 2>/dev/null)
    curl -s -X POST "$(cat "$WEBHOOK_FILE")" \
      -H "Content-Type: application/json" \
      -d "{\"text\": \"✅ Claude 作業完了: $MESSAGE\"}" >/dev/null
    ;;
esac

exit 0</CopyCode></code></pre>
  </PreCodes>
</template>
