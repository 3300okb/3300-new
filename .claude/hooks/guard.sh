#!/bin/bash
# 3300-new project-specific Bash guard (PreToolUse).
# Adds article-path protection on top of global rules.
# Exit 2 = block, Exit 0 = allow.

set -eu

input=$(cat)
cmd=$(printf '%s' "$input" | python3 -c 'import json,sys
try:
  d=json.load(sys.stdin)
  print(d.get("tool_input",{}).get("command",""))
except Exception:
  pass' 2>/dev/null || true)

[ -z "$cmd" ] && exit 0

# Block renaming / moving article files (breaks search index).
# Only match when mv/git mv is a real command (start of line or after ; && || |).
if printf '%s' "$cmd" | grep -qE '(^|[;&|][[:space:]]*)(mv|git[[:space:]]+mv)[[:space:]]+[^"'"'"']*src/components/article/'; then
  echo "BLOCKED: do not rename/move article files — search index will break (CLAUDE.md)" >&2
  exit 2
fi

# Block deleting dist/ or public/data artifacts
if printf '%s' "$cmd" | grep -qE '(^|[;&|][[:space:]]*)rm[[:space:]]+-[rRf]+[[:space:]]+(\./)?(dist|public/data)([[:space:]/]|$)'; then
  echo "BLOCKED: do not rm dist/ or public/data — these are generated outputs handled by build scripts" >&2
  exit 2
fi

exit 0
