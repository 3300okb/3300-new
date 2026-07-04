<script lang="ts">
export const metadata = {
  updateDate: '2026/07/05',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader
    title="global-setup-prompt"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><code><CopyCode top>```
あなたはユーザーのグローバル AI エージェント設定（Claude Code / Codex CLI 共通の md ファイル群）を
何もない状態からセットアップするエージェントです。
以下の手順をすべて自律的に実行してください。途中で止まらず、最後まで完走してください。
対象はリポジトリではなくホームディレクトリ（~/.claude / ~/.codex）です。

## 設計原則

- **正本は 1 つ**: 行動原則の実体は `~/.claude/CLAUDE.md` に置き、`~/.codex/AGENTS.md` は
  symlink にする。同内容の二重管理は必ず片方が腐る
- **常時ロードされる場所に置く**: どれだけ良い文書も、ロードされない場所（独自フォルダ等）に
  置いたら不発。Claude Code が常時読むのは `~/.claude/CLAUDE.md`、Codex CLI は `~/.codex/AGENTS.md`
- **二層構成**: 破壊的操作の方針は「文書（出典）」と「機械的強制（permissions / rules / hooks）」の
  二層で持つ。散文だけでは確率的にしか守られない
- **グローバルにはツール非依存・プロジェクト非依存の内容だけ**: 特定リポジトリのエージェント構成や
  コマンドはプロジェクト側の CLAUDE.md / AGENTS.md に置く

---

## Phase 0: 現状確認とバックアップ

1. `~/.claude/CLAUDE.md` / `~/.codex/AGENTS.md` / `~/.claude/policies/` の有無と内容を確認する
2. 既存ファイルがあれば `~/.claude/backups/global-mds-{YYYYMMDD}/` に退避してから進める
   （黙って上書きしない。退避一覧は完了報告に記載する）
3. 機械的強制の導入状況を確認する（Phase 3 の「強制の実体」の記載材料）：
   - `~/.claude/settings.json` の permissions / hooks
   - `~/.claude/hooks/` のスクリプト
   - `~/.codex/config.toml` の `[[hooks.*]]` と `~/.codex/rules/*.rules`

---

## Phase 1: 正本 ~/.claude/CLAUDE.md の作成

以下の内容で作成してください。セクション 1〜4 は汎用の行動原則（karpathy ガイドライン）、
5 は security.md（Phase 3）の要点ダイジェストです。

```markdown
# Agent Guidelines

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.
（正本はこのファイル。`~/.codex/AGENTS.md` は symlink で同内容を共有）

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

## 5. 破壊的操作・セキュリティ（要点）

- 実行前に確認: `rm -rf`、`git reset --hard` / `push --force` / `branch -D` / `checkout .` / `restore`、DB の DROP / TRUNCATE、本番・ステージングへの変更
- コミット禁止: `.env` 等の機密ファイル、API キー・トークン、ビルド成果物
- 詳細は `~/.claude/policies/security.md`（permissions / hooks / rules による機械的強制の出典）

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.
```

---

## Phase 2: ~/.codex/AGENTS.md の symlink 化

```bash
ln -sf ~/.claude/CLAUDE.md ~/.codex/AGENTS.md
```

- 既存の AGENTS.md が実ファイルだった場合は、Phase 0 で退避済みであることを確認してから実行する
- symlink が使えない環境では、CLAUDE.md の内容をコピーして同期する運用に切り替え、
  完了報告にその旨を記載する

---

## Phase 3: ~/.claude/policies/security.md の作成（強制の出典）

破壊的操作の詳細方針です。CLAUDE.md セクション 5 の要点から参照される「出典」ファイルで、
hooks がブロック時のメッセージで引用する先でもあります。
**冒頭の「強制の実体」は Phase 0 で確認した実態に合わせて記載し、未導入のものは「未導入」と明記してください。**

```markdown
# セキュリティ・破壊的操作

> 本ファイルは方針の出典。強制の実体は以下:
> - Claude Code: `~/.claude/settings.json`（permissions allow / ask / deny + hooks）と `~/.claude/hooks/guard.sh`
> - Codex CLI: `~/.codex/rules/default.rules` と `~/.codex/hooks/codex-hooks.sh`

## コミット禁止物
- `.env` `*.pem` `credentials.json` 等の機密ファイル
- API キー・トークン・パスワードを含むコード
- `dist/` `out/` `node_modules/` などビルド成果物

## 破壊的操作（実行前に必ず確認）
- `rm -rf` を伴うコマンド
- `git reset --hard` / `git push --force`
- `git branch -D` / `git checkout .` / `git restore`
- データベースの DROP / TRUNCATE
- 共有環境（本番・ステージング）への変更

> rm -rf（/ ・~）・force push・main 直接 push・.env の add / commit は hooks が自動ブロック。
> `git checkout .` / `git checkout --` / `git branch -D` は permissions の ask で確認必須、
> `git restore` は自動承認対象から除外（毎回確認）。パターンは代表形のみで完全網羅ではない。

## 自動承認しないもの
- `git push`（特に main / master）
- PR / Issue の作成・クローズ
- Slack / メール送信
- 外部サービスへのアップロード（pastebin・gist 等）

## 自動承認を許容しているもの（意図的なトレードオフ）
- `npm run *` / `npx *` / `node *`（開発時の利便性を優先。信頼できないリポジトリで作業するときは注意）

## コード安全性
- `v-html` などのアンセーフ挿入は DOMPurify 等のサニタイズ必須
- SQL は parameterized query を使用、文字列結合禁止
- ユーザー入力はバウンダリで検証
```

---

## Phase 4: permissions の整合（強制レイヤーの連動）

`~/.claude/settings.json` に以下の permissions をマージしてください。
**既存の settings.json がある場合は permissions キーのみをマージし、他のキー（hooks / env 等）に触らないこと。**
ask は allow より優先されるため、`git checkout:*` を許可したままブランチ切替は自動・破壊形だけ確認にできます。

```json
{
  "permissions": {
    "allow": [
      "Bash(git status:*)",
      "Bash(git diff:*)",
      "Bash(git log:*)",
      "Bash(git branch:*)",
      "Bash(git checkout:*)",
      "Bash(git worktree:*)",
      "Bash(git add:*)",
      "Bash(git commit:*)",
      "Bash(git fetch:*)",
      "Bash(git stash:*)",
      "Bash(ls:*)",
      "Bash(cat:*)",
      "Bash(rg:*)",
      "Bash(grep:*)",
      "Bash(find:*)",
      "Bash(mkdir:*)",
      "Bash(npm run *)",
      "Bash(npx *)",
      "Bash(node *)"
    ],
    "ask": [
      "Bash(git checkout .)",
      "Bash(git checkout .:*)",
      "Bash(git checkout --:*)",
      "Bash(git branch -D:*)"
    ],
    "deny": [
      "Bash(rm -rf /:*)",
      "Bash(rm -rf ~:*)",
      "Bash(rm -rf $HOME:*)",
      "Bash(git push --force origin main:*)",
      "Bash(git push --force origin master:*)",
      "Bash(git push -f origin main:*)",
      "Bash(git push -f origin master:*)"
    ]
  }
}
```

- `git restore` は意図的に allow に入れない（未コミット変更を破壊するため毎回確認にする）
- Codex 側: `~/.codex/rules/*.rules` に `git restore` / `git checkout` の allow を置かない
  （security.md と矛盾する）。既存 rules に矛盾する allow があれば削除する
- 危険コマンドの自動ブロック（force push・.env コミット等の hooks）は別セットアップ。
  未導入の場合は security.md の「強制の実体」を「未導入」とし、導入を推奨する

---

## Phase 5: 動作確認

```bash
# settings.json が妥当な JSON か
python3 -m json.tool ~/.claude/settings.json > /dev/null &amp;&amp; echo "settings.json: OK"

# symlink が同一実体を指しているか
[ ~/.codex/AGENTS.md -ef ~/.claude/CLAUDE.md ] &amp;&amp; echo "AGENTS.md -> CLAUDE.md: OK"

# 両ツールのパスから同じ内容が読めるか
head -1 ~/.claude/CLAUDE.md
head -1 ~/.codex/AGENTS.md
```

失敗した場合は該当 Phase に戻って修正し、再度確認してください。

---

## Phase 6: 完了報告

すべての作業が完了したら、以下の形式で報告してください：

```
## セットアップ完了

### 作成・変更ファイル
- ~/.claude/CLAUDE.md（正本）
- ~/.codex/AGENTS.md（symlink → CLAUDE.md）
- ~/.claude/policies/security.md
- ~/.claude/settings.json（permissions のみマージ）
- ~/.codex/rules/*（矛盾 allow を削除した場合）

### 退避したファイル
- ~/.claude/backups/global-mds-{YYYYMMDD}/ の一覧（なければ「なし」）

### 機械的強制の状態
- 導入済み: （permissions / hooks / rules の実態）
- 未導入: （あれば列挙し、導入を推奨）

### 反映タイミング
- 新しい CLAUDE.md / AGENTS.md は次のセッションから有効（起動中のセッションには反映されない）
```

以上をすべて実行してください。
```
</CopyCode>
</code></pre>
  </PreCodes>
</template>
