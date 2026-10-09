#!/usr/bin/env python3
"""記事 .vue に埋め込まれたコードを取り出す / 差し替える。

記事のコードは <CopyCode> の中に HTML エスケープ（&amp; &lt;）された状態で入っている。
手で編集するとエスケープ漏れや、テストした版とのずれが起きるため、このスクリプトを経由する。

使い方:
  # hooks 記事: 見出し <b>…</b> 直後の CopyCode ブロック全体
  article_code.py extract FILE.vue --after 'claude-hooks.sh</b>' > out.sh
  article_code.py embed   FILE.vue --after 'claude-hooks.sh</b>' new.sh

  # セットアップ記事: CopyCode 内の見出し直後にある ``` フェンスの中身
  article_code.py extract FILE.vue --heading '### .claude/hooks/stop-gate.sh' > out.sh
  article_code.py embed   FILE.vue --heading '### .claude/hooks/stop-gate.sh' new.sh

  # 中に ``` を含む入れ子のブロック（global-setup-prompt の CLAUDE.md テンプレート等）: 開始行〜終了行を含む範囲
  article_code.py extract FILE.vue --between '# Agent Guidelines' 'actually change the work.' > CLAUDE.md

embed は書き込み後に extract し直し、入力と一致することを確認する（不一致なら exit 1）。
"""
from __future__ import annotations  # macOS 標準の python3（3.9）でも型注釈を通す

import argparse
import html
import re
import sys


def esc(text: str) -> str:
    return text.replace("&", "&amp;").replace("<", "&lt;")


def locate(src: str, after: str | None, heading: str | None, between: list[str] | None = None) -> tuple[int, int]:
    """置き換え対象（エスケープ済みの本文）の [start, end) を返す。"""
    if between is not None:
        first, last = (esc(x) for x in between)
        i = src.find(first)
        if i < 0 or src.find(first, i + 1) >= 0:
            sys.exit(f"--between の開始が 1 か所に特定できません: {between[0]!r}")
        j = src.find(last, i)
        if j < 0:
            sys.exit(f"--between の終了が見つかりません: {between[1]!r}")
        return i, j + len(last)
    if after is not None:
        i = src.find(after)
        if i < 0 or src.find(after, i + 1) >= 0:
            sys.exit(f"--after が 1 か所に特定できません: {after!r}")
        m = re.compile(r"<CopyCode top>").search(src, i)
        if not m:
            sys.exit("CopyCode ブロックが見つかりません")
        end = src.find("</CopyCode>", m.end())
        return m.end(), end
    # heading: 見出しはエスケープ後の表記で探す
    h = esc(heading)
    i = src.find(h)
    if i < 0 or src.find(h, i + 1) >= 0:
        sys.exit(f"--heading が 1 か所に特定できません: {heading!r}")
    m = re.compile(r"```[a-z]*\n").search(src, i)
    if not m:
        sys.exit("見出しの後にコードフェンスがありません")
    end = src.find("\n```", m.end())
    return m.end(), end


def main() -> None:
    p = argparse.ArgumentParser()
    p.add_argument("cmd", choices=["extract", "embed"])
    p.add_argument("file")
    g = p.add_mutually_exclusive_group(required=True)
    g.add_argument("--after")
    g.add_argument("--heading")
    g.add_argument("--between", nargs=2, metavar=("START", "END"))
    p.add_argument("source", nargs="?", help="embed するファイル")
    a = p.parse_intermixed_args()

    src = open(a.file, encoding="utf-8").read()
    start, end = locate(src, a.after, a.heading, a.between)

    if a.cmd == "extract":
        sys.stdout.write(html.unescape(src[start:end]) + "\n")
        return

    if not a.source:
        sys.exit("embed には差し替えるファイルを指定してください")
    new = open(a.source, encoding="utf-8").read().rstrip("\n")
    out = src[:start] + esc(new) + src[end:]
    open(a.file, "w", encoding="utf-8").write(out)

    s2, e2 = locate(out, a.after, a.heading, a.between)
    if html.unescape(out[s2:e2]) != new:
        sys.exit("往復チェック失敗: 埋め込んだ内容を取り出すと元と一致しません")
    print(f"embedded OK: {a.file}")


if __name__ == "__main__":
    main()
