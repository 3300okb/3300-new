#!/usr/bin/env bash
# hooks スクリプトに hook-cases.txt の各コマンドを流し、判定を一覧表示する。
# usage: run_hook_cases.sh <hook script> <PreToolUse|PermissionRequest> [cases file]
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
  [ -z "$c" ] && continue
  out=$(python3 -c 'import json,sys;print(json.dumps({"hook_event_name":sys.argv[2],"tool_input":{"command":sys.argv[1]}}))' "$c" "$EVENT" \
    | bash "$HOOK" 2>/dev/null)
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
done < "$CASES"
