<script lang="ts">
export const metadata = {
  updateDate: '2026/06/07',
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
        echo "{\"decision\":\"block\",\"reason\":\"危険なコマンドをブロックしました: $p\"}"
        exit 0
      fi
    done

    # git commit 前に品質チェック（このプロジェクトは test 無し → npm run check）
    if echo "$COMMAND" | grep -q "^git commit"; then
      if ! npm run check >/dev/null 2>&amp;1; then
        echo '{"decision":"block","reason":"npm run check が失敗しています。修正してからコミットしてください。"}'
        exit 0
      fi
    fi

    SAFE=(
      "npm run check" "npm run lint" "npm run build" "npm run fix"
      "npm run index:generate" "npx prettier" "npx tsc"
      "git status" "git diff" "git log"
    )
    for p in "${SAFE[@]}"; do
      if echo "$COMMAND" | grep -q "$p"; then
        echo '{"decision":"approve"}'
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
    MESSAGE=$(echo "$INPUT" | python3 -c "
import json,sys
d = json.load(sys.stdin)
for m in reversed(d.get('messages',[])):
    if m.get('role') == 'assistant':
        c = m.get('content','')
        if isinstance(c, list):
            for part in c:
                if part.get('type') == 'text':
                    print(part['text'][:100]); break
        else:
            print(str(c)[:100])
        break
" 2>/dev/null)
    curl -s -X POST "$(cat "$WEBHOOK_FILE")" \
      -H "Content-Type: application/json" \
      -d "{\"text\": \"✅ Claude 作業完了: $MESSAGE\"}" >/dev/null
    ;;
esac

exit 0</CopyCode></code></pre>
  </PreCodes>
</template>
