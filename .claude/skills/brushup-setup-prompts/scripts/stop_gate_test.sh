#!/usr/bin/env bash
# Stop の完了ゲートを、ダミーの git リポジトリで 5 通り試す。
# usage: stop_gate_test.sh <hook script>
#
# 期待値:
#   pass / dirty          → exit 0（検証が通れば止めてよい）
#   fail / clean          → exit 0（変更がなければ検証しない）
#   fail / dirty          → exit 2（止めずに続けさせる）
#   fail / dirty / 2nd    → exit 0（stop_hook_active=true の 2 回目は止める）
#   fail / dirty / subdir → exit 2（サブディレクトリから起動しても git ルートで判定）
#                           ※ hooks 記事のグローバル版は入力の cwd 基準で判定するため exit 0 で正常
# Codex 用のスクリプトは exit 0 のとき stdout が {} であること。
HOOK="$(cd "$(dirname "$1")" && pwd)/$(basename "$1")"
WORK=$(mktemp -d)
P="$WORK/proj"
mkdir -p "$P/sub" "$WORK/home"
cd "$P" && git init -q && git commit -q --allow-empty -m init

run() { # label check_exit dirty|clean active(true|false) cwd
  rm -f "$P/d.txt"
  printf '{"name":"p","scripts":{"check":"exit %s"}}' "$2" > "$P/package.json"
  git -C "$P" add -A && git -C "$P" commit -qm x >/dev/null 2>&1
  [ "$3" = dirty ] && echo x > "$P/d.txt"
  out=$(printf '{"hook_event_name":"Stop","cwd":"%s","stop_hook_active":%s,"last_assistant_message":"done"}' "$5" "$4" \
    | (cd "$5" && HOME="$WORK/home" CLAUDE_PROJECT_DIR="$P" bash "$HOOK" 2>/dev/null))
  printf '%-24s exit=%s stdout=%s\n' "$1" "$?" "${out:--}"
}
run "pass / dirty"          0 dirty false "$P"
run "fail / clean"          1 clean false "$P"
run "fail / dirty"          1 dirty false "$P"
run "fail / dirty / 2nd"    1 dirty true  "$P"
run "fail / dirty / subdir" 1 dirty false "$P/sub"
rm -rf "$WORK"
