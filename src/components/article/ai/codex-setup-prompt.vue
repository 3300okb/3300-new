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
  <ArticleHeader
    title="codex-setup-prompt"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><code><CopyCode top>```
あなたはこのリポジトリの Codex CLI 設定を行うセットアップエージェントです。
以下の手順をすべて自律的に実行してください。途中で止まらず、最後まで完走してください。
既存の AGENTS.md / .codex/ / .agents/ がある場合は黙って上書きせず、既存内容を読み込んで本構成にマージし、
置き換え・移動した箇所を完了報告に列挙してください。

このセットアップは**各制御手段を「ロード時機・コンテキストコスト・強制力」で使い分ける**ことを原則とします。
1つの巨大な AGENTS.md にすべてを詰め込まず、目的に応じて配置先を分けてください。
生成物は **GPT-6 Astra（`gpt-6-astra`）で運用されることを前提**に校正します（後述の「GPT-6 Astra 向けの校正」）。

### このセットアップ作業自体の進め方

- 上記が完全な仕様です。要求されていない設定を推測で足さず、この範囲を最後まで仕上げてください。
- 完了条件は「Phase 9 の動作確認がすべて通り、Phase 11 の完了報告を出したこと」です。それまで途中報告で止まらないでください。
- リポジトリ内のファイル読み取り、`AGENTS.md` / `.codex/` / `.agents/` 配下の作成・編集、Phase 9 の検証コマンドは
  本番環境に触れないため、各ステップで承認を求めずに実行してください。
  止まって確認するのは、既存ファイルの削除と `~/.codex/` 配下（個人設定）への書き込みだけです（Phase 8 は提案にとどめる）。
- サブエージェントへは委譲せず、このセッションで直接実行してください（数十回のツール呼び出しで終わる作業です）。
- reasoning effort は `high` で流すと安定します（Codex CLI の既定は `medium`）。

## 制御手段の使い分け（設計原則）

| 手段 | 配置 | ロード時機 | 用途 | 原則 |
|------|------|-----------|------|------|
| AGENTS.md（ルート） | リポジトリルート | 常時 | 常に必要な"事実"とポインタ | スリムに保つ。手続き・禁止の散文を書かない |
| ネスト AGENTS.md | サブディレクトリ | ルート〜作業ディレクトリのパス上のみ | ディレクトリ固有の規約 | 該当ディレクトリにだけ置く |
| Skills | `.agents/skills/`（プロジェクト） | 起動時は description のみ。本体は呼び出し時 | 手続き型ワークフロー | 手順は skill へ。description に「いつ使うか」を書く |
| Subagents | `.codex/agents/*.toml` | 委譲時に別コンテキスト | 独立・分離タスク | 組み込み default / worker / explorer と重複させない |
| Rules | `.codex/rules/*.rules` | コマンド承認の判定時 | コマンド単位の許可 / 拒否 | 決定論的な第一選択。Starlark 形式 |
| Hooks | `.codex/config.toml` の `[[hooks.*]]` | ライフサイクルイベント | 決定論的な自動実行・ガードレール | 「毎回必ず」「絶対しない」はここで強制 |
| config.toml | `.codex/config.toml`（プロジェクト）/ `~/.codex/config.toml`（個人） | 起動時 | hooks・承認ポリシー・モデル等 | チーム共有分はプロジェクト側へ |

**trust に関する重要な前提**: プロジェクト側の `.codex/config.toml`・hooks・rules は、
ユーザーがこのプロジェクトを **trust して初めてロードされます**（untrusted の間は無視される）。
生成しただけでは有効にならないため、完了報告で必ず trust 手順を案内してください（Phase 11）。

**よくあるアンチパターンと是正**:
- 「編集後は必ず format」と散文で書く → 守られない。**PostToolUse hook** で実行する
- 「絶対に X しない」と散文で書く → 守られない。**rules の `decision = "forbidden"`** か **PreToolUse hook** でブロックする
- 30行の手順を AGENTS.md に書く → コンテキストを浪費。**skill** に切り出す（呼び出し時のみロード）
- ディレクトリ限定の規約をルート AGENTS.md に書く → 無駄。**ネスト AGENTS.md** に置く
- 「編集前に必ず architecture.md を読む」と書く → 毎回の読み込みで浪費。**どの作業のときにどの文書を読むか**をトリガーで示す
- 「実装後は必ずテストを実行」を複数の文書に書く → GPT-6 Astra は自分でテストを回す。
  **確認なしで回してよいゲートと完了条件**を 1 か所に書く

---

## GPT-6 Astra 向けの校正（前提とするモデル挙動）

GPT-6 Astra は前世代より自律的で、足場（scaffolding）が少ないほど良く動きます。
**旧世代向けの手取り足取りの指示を消し、「完了条件」と「確認なしで進めてよい範囲」だけを明示する**のが要点です。

| GPT-6 Astra の挙動 | 旧世代向けによく書かれた指示 | 本セットアップでの扱い |
|-------------------|------------------------|--------------------|
| 指示なしでテストを実行し、自分で検証する | 「実装後は必ずビルド・lint・テスト」を各文書で繰り返す | 繰り返さない。確認なしで回してよいゲートとして workflow.md に 1 回だけ書く（Phase 2） |
| 足場がなくても動く | 「編集前に毎回ドキュメントを読む」「小さな変更でもリポジトリ全体を確認」 | 書かない。文書は読むタイミング（トリガー）付きで示す（Phase 1） |
| 完了条件が曖昧だと早めに止まる | （なし） | 完了条件を明記（Phase 1・2・3） |
| 安全と明示されない操作は許可待ちで止まる | （なし） | 確認なしで進めてよい操作を明記（Phase 1・2） |
| 意図を汲んで自分で判断できる | 「不明点は必ず確認」 | 「成果物が変わるときだけ確認し、それ以外は意図を推測して進む」 |
| 細かいレシピがなくても手順を組める。広い description の skill は関係の薄い話題でも発動する | 広い description、細かい手順のレシピ | description は具体的な操作をトリガーにし、要件と制約だけ残してレシピは削る（Phase 5） |

---

## Phase 0: リポジトリ調査 &amp; モデル確認

まず以下を調べ、結果を内部メモとして保持してください（出力不要）。

### 0-A: リポジトリ調査

特に 9〜12 は後続の rules / hooks / skills / ネスト AGENTS.md の材料になるため重点的に。

1. 既存の AGENTS.md / .codex/ / .agents/ の有無を確認し、あれば内容を読み込む（後続 Phase でマージするため）
2. ルートの全ファイル・フォルダ構成を把握する
3. package.json / pyproject.toml / Cargo.toml / go.mod / pom.xml など、パッケージ定義ファイルを探し、存在すれば scripts / dependencies / devDependencies を読み込む
4. README.md が存在すれば読む
5. .env.example / docker-compose.yml / Makefile / Dockerfile が存在すれば読む
6. src/ / app/ / lib/ などのメインディレクトリ構成を把握する
7. テストファイルのパターン（__tests__/ / spec/ / tests/ など）を確認する
8. CI 設定（.github/workflows/ / .circleci/ / .gitlab-ci.yml など）を確認する
9. **lint / format / test の実コマンド**を特定する（PostToolUse hook の材料）
10. **機密ファイルと壊すと困る不変条件**を洗い出す（.env などの機密、生成物ディレクトリ、危険コマンドなど。rules / PreToolUse hook の材料）
11. **ディレクトリ単位で異なる規約**を探す（例: API 層の入力検証、UI 層のアクセシビリティ。ネスト AGENTS.md の材料）
12. **繰り返し行う複数ステップの手順**を探す（例: リリース、機能追加フロー。skill の材料）

### 0-B: モデルの利用可否確認

前提モデルは **GPT-6 Astra（`gpt-6-astra`）**です。アカウントで使えるかを確認し、
サブエージェントと config.toml に設定するモデルと reasoning effort を決めて内部メモに保持してください。

1. `~/.codex/config.toml` を読み、現在設定されているモデルと reasoning effort を確認する
2. `gpt-6-astra` が利用可能か確認する（`/model` の一覧に出るか、`codex exec -m gpt-6-astra` が通るか）。
   Astra は段階的に提供されているため、使えない場合は一覧にある最上位モデルに置き換え、完了報告に記載する
3. 以下の観点でモデルと reasoning effort（`low` / `medium` / `high` / `xhigh` / `max`。Codex CLI の既定は `medium`）を決める：
   - **coder / デフォルト (config.toml)**: `gpt-6-astra`、`medium`（重い実装が中心なら `high`）
   - **reviewer / planner**: `gpt-6-astra`、`high`（読み取り専用で判断の質を重視）
   - **researcher**: 軽量モデル（例: `gpt-6-luna`）を `low` 〜 `medium` で。2 で確認した一覧にない場合は Astra の `low`
   - `xhigh` / `max` は、効果を確かめた難しい設計判断やデバッグに限る

結果を以下の形式で内部メモにまとめてください（Phase 3, 8 で使用）：

```
モデル選定結果:
- coder: {モデル名} (reasoning_effort: {low〜max})
- researcher: {モデル名} (reasoning_effort: {low〜max})
- planner: {モデル名} (reasoning_effort: {low〜max})
- reviewer: {モデル名} (reasoning_effort: {low〜max})
- デフォルト: {モデル名} (reasoning_effort: {low〜max})
- 選定理由: {なぜこのモデル・effort にしたか。Astra を使えなかった場合はその旨}
```

---

## Phase 1: ルート AGENTS.md の作成（スリム版）

リポジトリルートに `AGENTS.md` を生成してください。
このファイルは**エントリーポイント**として機能し、詳細は `.codex/` / `.agents/` 配下の個別ファイルに委譲します。
**Phase 0 の調査結果を必ず反映し、プロジェクト名・技術スタック・コマンドは実際のものを記載してください。**

Codex CLI は以下の順序で AGENTS.md を自動的に読み込みます：
1. `~/.codex/AGENTS.md`（グローバル）
2. `&lt;リポジトリルート&gt;/AGENTS.md`（プロジェクト共通）
3. ルートから作業ディレクトリまでのパス上にあるネスト AGENTS.md

```markdown
# AGENTS.md

このファイルは Codex CLI がこのリポジトリで作業する際のエントリーポイントです。

## プロジェクト概要

（Phase 0 の調査から読み取ったプロジェクトの目的・概要を記載）

技術スタック: （実際のスタックを記載）

---

## ドキュメント参照

以下のファイルは、表のタイミングに当てはまるときだけ読んでください。
毎回の編集前に読む必要はありません（Phase 2 で実際に作成した文書だけを表に載せる）：

| ファイル | 読むタイミング |
| --- | --- |
| `.codex/project-baseline.md` | 認証・入力値・機密情報を扱うコードを変更するとき |
| `.codex/workflow.md` | 開発サーバー・ビルドのコマンドや報告フォーマットを確認するとき |
| `.codex/coding-standards.md` | 新しいファイル・モジュールを追加する、または命名・配置を決めるとき |
| `.codex/testing.md` | テストを追加する、またはテスト・lint の実行方法を確認するとき |
| `.codex/git.md` | コミット・ブランチ・PR を作成するとき |
| `.codex/environment.md` | 環境セットアップ・環境変数を扱うとき |

---

## 作業の進め方

- 依頼の意図を文脈から推測して進める。確認するのは、解釈によって成果物が変わるときだけ。
- 頼まれていない改善・リファクタを足さない。気づいた別の問題は報告に書く。
- 完了条件: 依頼された変更がすべて入り、関連するテスト・lint・ビルドが通っていること。
  満たすまで途中報告で止まらない。一部がブロックされたら残りを仕上げ、何が足りないかを書く。
- ローカルのテスト・lint・ビルド・型チェックは本番環境に触れない。
  実行し、自分の変更で落ちたものは直して再実行する。各ステップで承認を求めない。

---

## クイックリファレンス

よく使うコマンド（詳細は `.codex/workflow.md` 参照）：

```bash
（package.json などから抜粋した最重要コマンドを3〜5個記載）
```

---

## ディレクトリ構成

```
（実際の構成をツリー形式で記載）
```

### 主要ディレクトリ
- `（ディレクトリ）`: （役割）

---

## 制御手段の所在

- 手続き（リリース・レビュー等）: `.agents/skills/`
- コマンド単位の許可 / 禁止: `.codex/rules/`
- 機械的な強制（編集後フォーマット等）: `.codex/config.toml` の hooks
- サブエージェント: `.codex/agents/`

## 禁止事項

（Phase 0 で洗い出した不変条件を短い箇条書きで。例: .env をコミットしない・dist/ を手で消さない）

> 散文の禁止は確率的にしか守られないため、一覧はここに残しつつ、
> 強制そのものは rules / hooks（Phase 6・7）で決定論的に行います。
```

---

## Phase 2: .codex/ 個別ドキュメントの作成（材料がある文書だけ）

`.codex/` ディレクトリを作成し、以下の候補のうち **Phase 0 の調査で実質的な内容を書ける文書だけ**を
生成してください（書くことがない文書を雛形だけで作らない）。
**`~/.codex/AGENTS.md` が存在しない環境でも品質基準が欠落しないよう、プロジェクト内ファイルだけで自己完結する構成にしてください。**
生成する文書の中で一部の節だけ情報が足りない場合は「（未確認 - 要記入）」と記載し、
文書ごとスキップした場合は完了報告にその旨を記載してください。

### .codex/project-baseline.md

このファイルは「グローバル指示が無くても必ず守る最低基準」を固定するために作成します。
他の文書と矛盾しないようにしてください。
**報告フォーマットは workflow.md にのみ置き、ここには書かない**（重複させると片方だけ更新される）。

```markdown
# project-baseline.md — 共通品質・セキュリティ基準

## 目的
- `~/.codex/AGENTS.md` が存在しない環境でも、プロジェクト内のルールだけで運用できるようにする

## 基本方針
- 既存スタイルに合わせる
- lint やテストが未導入の場合は「未導入」と明記し、代替の検証（例: ビルド、型チェック）が通ることを完了条件にする
- 型・インターフェースを明示する（型のある言語の場合）
- マジックナンバーは定数化する
- エラーハンドリングを省略しない

## セキュリティ
- `.env` ファイルをコミットしない
- API キーや認証情報をコードに直書きしない
- HTML を直接挿入する操作（innerHTML 相当）は XSS リスクに注意する

> 上記のうち機械的に強制できるもの（.env のコミット禁止など）は
> rules / hooks（Phase 6・7）でも強制する。

## 報告フォーマット
- `workflow.md` の報告フォーマットに従う
```

### .codex/workflow.md

開発コマンドと報告フォーマットを記載します。
進め方と完了条件はルート AGENTS.md の「作業の進め方」にだけ置き、ここに「調査 → 実装 → 検証」のような
固定の手順は書きません（GPT-6 Astra は手順を自分で組み立て、テストも自分で回すため）。

```markdown
# workflow.md — 開発コマンドと報告

## 開発サーバー
```bash
（実コマンドを記載）
```

## ビルド
```bash
（実コマンドを記載）
```

## 報告フォーマット

作業完了時は以下の形式で報告する：

### 変更ファイル
- `path/to/file`: （変更内容の要約）

### 実行結果
- ビルド: ✅ / ❌
- テスト: ✅ X件通過 / ❌ X件失敗（未導入ならその旨を明記）
- lint: ✅ / ❌（未導入ならその旨を明記）
```

### .codex/coding-standards.md

命名規則・ファイル構成・禁止事項を記載します。

```markdown
# coding-standards.md — コーディング規約

## 命名規則
- （実際のコードから読み取ったルールを記載）

## ファイル・フォルダ構成のルール
- （実際の規則を記載）

## 品質ルール（必須）
- 型・インターフェースを明示する（型のある言語の場合）
- マジックナンバーは定数化する
- エラーハンドリングを省略しない

## コメント・ドキュメントのルール
- コメントは「なぜそうするか（Why）」を書く。「何をするか（What）」はコードが語る
- （その他のルールを記載）

## セキュリティ
- API キーや認証情報をコードに直書きしない
- HTML を直接挿入する操作（innerHTML 相当）は XSS リスクに注意する

## 禁止事項
- `.env` ファイルをコミットしない
- `console.log` などのデバッグ出力を残したままコミットしない
- （その他の禁止事項を記載）

> 機械的に強制できる禁止事項は rules / hooks（Phase 6・7）でも強制する。
```

### .codex/testing.md

テスト方針・実行方法・lint を記載します。

```markdown
# testing.md — テスト・品質チェック

## テストフレームワーク
- （実際のフレームワークを記載、または「未確認 - 要記入」）

## テストファイルの配置
- （実際のパターンを記載）

## テストの実行方法
```bash
（実コマンドを記載）
```

## Lint / フォーマット
```bash
（実コマンドを記載）
```

## 未導入項目の扱い
- lint やテストが未導入の場合は「未導入」と明記し、代替の検証コマンド（例: ビルド、型チェック）を記載する

## テストを書く際の注意点
- 実装変更時は対応するテストも必ず追加・修正する
- （その他の注意点を記載）
```

### .codex/git.md

ブランチ戦略・コミット規則・PR ルールを記載します。

```markdown
# git.md — Git ワークフロー

## ブランチ戦略
- （CI 設定や既存ブランチから読み取ったルールを記載）

## コミットメッセージ規則
- （既存コミット履歴のスタイルに合わせて記載）

## PR / MR のルール
- （ルールがあれば記載、なければ「未確認 - 要記入」）
```

### .codex/environment.md

環境変数・ローカルセットアップ手順を記載します。

```markdown
# environment.md — 環境設定

## 必須環境変数
- （.env.example から読み取った変数を列挙、または「未確認 - 要記入」）

## ローカル開発環境のセットアップ
```bash
（セットアップ手順を記載）
```
```

---

## Phase 3: .codex/agents/ カスタムサブエージェントの作成（取捨選択制）

Codex CLI には以下の3つのサブエージェントが組み込まれています：

- **default**: 汎用エージェント（フォールバック）
- **worker**: 実装・修正に特化した実行エージェント
- **explorer**: 読み取り専用のコードベース探索エージェント

カスタムエージェントの価値は、コンテキスト分離と developer_instructions / sandbox 制限による専門化です。
**researcher は explorer と、coder は worker とほぼ重複**するため、プロジェクト固有の観点を
足したい場合だけ作成してください（組み込みと同名で定義すると上書きできます）。
迷ったら、組み込みに存在しない reviewer（と必要に応じて planner）だけでもよい。

以下の4定義から必要なものだけを `.codex/agents/` に配置してください。
**Phase 0 の調査結果を反映し、プロジェクトに適した指示を記載してください。**
**各エージェントの `model` と `model_reasoning_effort` は、Phase 0-B のモデル確認結果を使用してください。**
`description` には起動条件だけでなく**委譲に値する規模の下限**を、`developer_instructions` には**完了条件**を含めてください
（GPT-6 Astra は完了条件が曖昧だと早めに止まるため）。

### .codex/agents/researcher.toml

```toml
name = "researcher"
description = "Read-only codebase researcher. Use only for investigations that span many files; do not delegate lookups that take a few tool calls."
model = "{Phase 0-B で選定したモデル}"
model_reasoning_effort = "{Phase 0-B で選定した reasoning_effort}"
sandbox_mode = "read-only"
developer_instructions = """
You are a research-only agent. Never modify files.

## Responsibilities
- Trace execution paths, cite files and line numbers
- Analyze dependencies and impact scope
- Investigate root causes of errors
- Check external library/API specifications

## Output format
Report findings as structured markdown with:
- File paths and relevant line numbers
- Dependency graph (if applicable)
- Risk assessment and recommendations for the implementation agent
"""
```

### .codex/agents/planner.toml

```toml
name = "planner"
description = "Architecture and planning agent. Use only for tasks that will span multiple commits or need a choice between approaches."
model = "{Phase 0-B で選定したモデル}"
model_reasoning_effort = "{Phase 0-B で選定した reasoning_effort}"
sandbox_mode = "read-only"
developer_instructions = """
You are a planning agent. Never modify files directly.

## Responsibilities
- Design implementation plans based on researcher findings
- Break large tasks into ordered steps with dependencies
- Evaluate multiple approaches and recommend the best one
- Consider backward compatibility and migration paths

## Output format
Produce a numbered implementation plan with:
- Step description and target files
- Dependencies between steps
- Risk level per step (low/medium/high)
- Estimated complexity
"""
```

### .codex/agents/coder.toml

```toml
name = "coder"
description = "Implementation agent. Use only for specified changes that span multiple files; implement small fixes directly."
model = "{Phase 0-B で選定したモデル}"
model_reasoning_effort = "{Phase 0-B で選定した reasoning_effort}"
developer_instructions = """
You are an implementation agent.

## Responsibilities
- Implement code changes following the plan from the planner agent
- Match existing code style, naming conventions, and file structure
- Write or update tests for all changes

## Done means
- Every step of the plan is implemented, with no stubs or TODOs left behind
- The related tests, lint, and build pass. They have no production access:
  run them, fix failures your change caused, and rerun without asking at each step
- Improvements outside the plan are listed in the report, not implemented

## Rules
- Never leave debug output (console.log, print, etc.) in committed code
- Never commit .env files or secrets
- Follow the coding standards in .codex/coding-standards.md
"""
```

### .codex/agents/reviewer.toml

```toml
name = "reviewer"
description = "Code review agent. Use when a review is requested or for a PR-sized diff, not to double-check your own small edits."
model = "{Phase 0-B で選定したモデル}"
model_reasoning_effort = "{Phase 0-B で選定した reasoning_effort}"
sandbox_mode = "read-only"
developer_instructions = """
You are a code review agent. Never modify files directly.

## Review checklist
- Correctness: Does the code do what it should?
- Security: OWASP top 10, XSS, injection, auth issues
- Performance: N+1 queries, unnecessary re-renders, memory leaks
- Maintainability: Naming, complexity, duplication
- Test coverage: Are edge cases covered?

Report every issue you find with its severity label. Don't filter down to critical ones only;
the human decides what to fix.

## Output format
Use this structure:
- 🔴 Critical: Must fix before merge
- 🟡 Warning: Should fix, but not blocking
- 🟢 Suggestion: Nice to have improvements
- ✅ Approved: No issues found
"""
```

### サブエージェントの活用例

エージェントはプロンプト内で名前を指定して呼び出せます：

```
設定モーダルの保存が失敗する原因を調査してほしい。
explorer で原因を特定し、planner で修正方針を立て、
worker で最小限の修正を実装し、reviewer でレビューしてください。
```

---

## Phase 4: ネスト AGENTS.md の作成（ディレクトリ固有の規約・任意）

主要なサブディレクトリに固有の指示がある場合、それぞれに AGENTS.md を配置してください。
Codex CLI はリポジトリルートから作業ディレクトリまでのパス上にあるすべての AGENTS.md を読み込むため、
これが Codex における「ディレクトリ限定の規約」の置き場所になります。

対象ディレクトリの例（実際の構成に応じて判断する）：
- `src/` 以下に特定の規則がある場合
- テストディレクトリに固有の注意点がある場合
- 独立したモジュール・パッケージがある場合

ネスト AGENTS.md のフォーマット（例: `src/AGENTS.md`）：

```markdown
# src/ ディレクトリ固有の指示

ルートの AGENTS.md の指示に加え、このディレクトリでは以下の規則を守ること。
詳細なルールは `.codex/` 配下の該当ファイルを参照すること。

## ディレクトリ構成
（このディレクトリ内の構成を記載）

## 固有の規則
（このディレクトリ固有のコーディング規約・注意点を記載）
```

**調査で固有の指示が必要なサブディレクトリが見つからない場合は、このフェーズをスキップしてよい。**

---

## Phase 5: .agents/skills/ の作成（手続き型ワークフロー）

「複数ステップの手順」を skill に切り出してください。
skill は `SKILL.md` を持つディレクトリで、プロジェクト用は `.agents/skills/` に置きます
（Codex は作業ディレクトリからリポジトリルートまで `.agents/skills` をスキャンする。個人用は `~/.codex/skills/`）。
frontmatter の `name` / `description` は起動時にロードされ、本体（手順）は呼び出し時のみ読まれます。
`description` には**いつ使うか**を具体的に書くとトリガー精度が上がります
（明示呼び出しは `/skills` または `$` メンション、暗黙呼び出しは description とのマッチで発動）。

GPT-6 Astra 向けには、skill を次の方針で書いてください：
- **description は具体的な操作をトリガーにする**（「タグを打つ・CHANGELOG を更新するとき」など）。
  「リリースに関すること全般」のような広い description は、関係の薄い話題でも発動する
- **本体は要件と制約を残し、固定のレシピは削る**。Astra は手順を自分で組み立てられるため、
  守るべき条件（順序が意味を持つ箇所・触ってはいけないもの・完了条件）だけを書く
- 詳細が長くなる場合は本体を短く保ち、補足ファイルに分けて必要なときだけ読ませる

Phase 0 で見つかった手順から、実在するものだけ生成してください（例）:
- `release` — リリース / デプロイ手順
- `code-review` — レビュー観点チェックリスト
- `add-feature` — このリポジトリ標準の機能追加フロー

例 `.agents/skills/release/SKILL.md`:

```markdown
---
name: release
description: バージョンタグを打つ・CHANGELOG を更新する・本番デプロイを行うときに使う。ユーザーが明示的にリリースを指示したときのみ実行する。
---
# リリース

## 前提条件
- main が最新で CI が green であること。満たさなければ中断して報告する

## 制約
- バージョン bump と CHANGELOG 更新は、タグより前に同じコミットで行う
- タグは main 上のコミットにだけ打つ

## 完了条件
- デプロイ後の稼働確認まで済んでいること
```

リリース・デプロイのような**勝手に実行されると困る手順**は、description に
「ユーザーが明示的に指示したときのみ実行する」と明記してください。

明確な手順が見当たらない場合も、最低限 `code-review` skill だけは作成してください。

---

## Phase 6: .codex/rules/ の作成（コマンドの許可 / 拒否）

`.codex/rules/*.rules`（Starlark 形式）は、コマンドのプレフィックスパターンに対して
allow / prompt / forbidden を決定論的に判定する仕組みです。
Phase 0 で洗い出した「危険コマンド・不変条件」の禁止と、安全な検証コマンドの自動許可をここで行います
（安全コマンドの許可リストは、hook スクリプトを書くより宣言的でロード時検証も付きます）。

例 `.codex/rules/project.rules`:

```python
# 安全な読み取り・検証コマンドは承認なしで許可
prefix_rule(
    pattern = ["git", ["status", "diff", "log"]],
    decision = "allow",
    match = ["git status", "git diff --stat"],
    not_match = ["git push"],
)

# 禁止コマンド（実プロジェクトの不変条件に合わせて調整）
prefix_rule(
    pattern = ["rm", "-rf", "dist"],
    decision = "forbidden",
    justification = "生成物ディレクトリはビルドスクリプトが管理する",
    match = ["rm -rf dist"],
)
```

- `pattern` はコマンドのプレフィックス一致（要素は文字列、または `["a", "b"]` 形式の選択肢）
- `match` / `not_match` はロード時に検証されるテストケース。必ず書く
- Phase 0 で特定した test / lint / build コマンドも `allow` にする。GPT-6 Astra は安全と明示されない操作で
  承認待ちになりやすいため、確認なしで回してよいゲートを rules でも宣言しておく（AGENTS.md「作業の進め方」と揃える）
- プレフィックス一致で拾えない表記ゆれ（`rm -fr` / `rm -r -f` など）は Phase 7 の PreToolUse hook で補完する

該当する不変条件がなければこの Phase はスキップし、完了報告にその旨を記載してください。

---

## Phase 7: hooks の作成（決定論的ガードレール）

Codex CLI は PreToolUse / PermissionRequest / PostToolUse / SessionStart / Stop などの
ライフサイクル hooks をサポートします（command 型）。
rules で表現できない**コマンド内容を見た動的な判定**と、**編集後の自動実行**（format 等）をここで行います。
Phase 0 の lint / format 実コマンドを反映し、該当する強制対象がない hook は作らないでください。

### .codex/config.toml（プロジェクト設定）

```toml
# プロジェクト設定 — ユーザーがこのプロジェクトを trust したときのみロードされる

[[hooks.PreToolUse]]
matcher = "Bash"

[[hooks.PreToolUse.hooks]]
type = "command"
command = 'bash "$(git rev-parse --show-toplevel)/.codex/hooks/guard.sh"'
statusMessage = "コマンドを検査中"

[[hooks.PostToolUse]]
matcher = "apply_patch|Edit|Write"

[[hooks.PostToolUse.hooks]]
type = "command"
command = 'bash "$(git rev-parse --show-toplevel)/.codex/hooks/post-edit.sh"'
statusMessage = "フォーマット中"
```

- hook のパスは **git root 基準**で解決する（Codex がサブディレクトリから起動されても壊れない、公式推奨の書き方）

### .codex/hooks/guard.sh（PreToolUse — JSON で deny）

```bash
#!/usr/bin/env bash
INPUT=$(cat)
cmd=$(printf '%s' "$INPUT" | python3 -c 'import json,sys; print(json.load(sys.stdin).get("tool_input",{}).get("command",""))' 2>/dev/null || true)
[ -z "$cmd" ] &amp;&amp; exit 0

deny() {
  python3 -c "import json,sys; print(json.dumps({'hookSpecificOutput':{'hookEventName':'PreToolUse','permissionDecision':'deny','permissionDecisionReason':sys.argv[1]}}, ensure_ascii=False))" "$1"
  exit 0
}

# 例: rules のプレフィックス一致で拾えない表記ゆれを補完（実プロジェクトに合わせて調整）
if printf '%s' "$cmd" | grep -qE 'rm[[:space:]]+-[rRf]+[[:space:]]+(\./)?(dist|build)([[:space:]/]|$)'; then
  deny "生成物ディレクトリは手で消さない（ビルドスクリプトが管理）"
fi

exit 0
```

### .codex/hooks/post-edit.sh（PostToolUse — 編集後に format）

Phase 0 の実コマンドを使用します。format が存在しない場合はこの hook を作らないでください。

```bash
#!/usr/bin/env bash
INPUT=$(cat)
# Edit/Write 系は tool_input.file_path、apply_patch はパッチ本文から対象パスを抽出する
FILES=$(printf '%s' "$INPUT" | python3 -c "
import json,re,sys
d = json.load(sys.stdin)
ti = d.get('tool_input',{})
files = []
if ti.get('file_path'):
    files.append(ti['file_path'])
for m in re.finditer(r'^\*\*\* (?:Add|Update) File: (.+)$', ti.get('command',''), re.M):
    files.append(m.group(1).strip())
print('\n'.join(files))
" 2>/dev/null)
[ -z "$FILES" ] &amp;&amp; exit 0
CWD=$(printf '%s' "$INPUT" | python3 -c 'import json,sys; print(json.load(sys.stdin).get("cwd",""))' 2>/dev/null)
while IFS= read -r f; do
  case "$f" in /*) ;; *) f="$CWD/$f" ;; esac
  # 実プロジェクトの format コマンドに置き換える
  npx prettier --write "$f" >/dev/null 2>&amp;1 || true
done &lt;&lt;&lt; "$FILES"
exit 0
```

---

## Phase 8: 個人設定の提案（~/.codex/config.toml と ~/.codex/AGENTS.md）

`~/.codex/config.toml` はユーザー個人のグローバル設定です（モデル・承認ポリシー・通知など）。
チーム共有すべき設定は Phase 7 のプロジェクト側 `.codex/config.toml` に置き、
個人設定は直接書き込まず、以下の推奨を **提示するにとどめてください**。実際の反映はユーザーが行います。

```toml
# ~/.codex/config.toml（提案 — ユーザーが手動で反映）

# 使用モデル（Phase 0-B の確認結果を反映。通常は gpt-6-astra）
model = "{Phase 0-B で選定したデフォルトモデル}"
# low / medium（既定）/ high / xhigh / max。xhigh・max は効果を確かめた難しい作業に限る
model_reasoning_effort = "{Phase 0-B で選定した reasoning_effort}"

# 承認ポリシー
# "untrusted"  : 信頼済みコマンドのみ自動実行。それ以外はユーザー承認が必要
# "on-request" : モデルが必要と判断した時のみ承認を求める
# "never"      : 承認なしですべて自動実行（非インタラクティブ向け）
# このほか granular 形式（approval_policy = { granular = { ... } }）でカテゴリ単位の制御も可能
approval_policy = "on-request"

# サンドボックスモード
# "read-only" / "workspace-write" / "danger-full-access"
sandbox_mode = "workspace-write"

# 通知: イベント時に起動する外部コマンド（JSON ペイロードを受け取る）
# notify = ["notify-send", "Codex"]

# サブエージェント設定
[agents]
max_threads = 6   # 同時実行エージェント数の上限（デフォルト: 6）
max_depth = 1     # エージェントのネスト深度（デフォルト: 1）

# 会話履歴の設定
[history]
persistence = "save-all"  # "save-all" または "none"

# プロファイル例（codex --profile quick で使用）
# [profiles.quick]
# model = "{軽量モデル}"
# approval_policy = "never"
```

グローバル指示ファイル `~/.codex/AGENTS.md` には触れず、状態だけを確認して案内してください：

- `~/.claude/CLAUDE.md` への symlink になっている → global-setup-prompt で管理済み。案内不要
- 実ファイルがある → 「毎回テストを実行」「編集前に必ずドキュメントを読む」「不明点は必ず確認」のような
  旧世代向けの指示が含まれていれば、該当行を完了報告で指摘する（削除はユーザーが判断）
- 存在しない → global-setup-prompt での作成を案内する
  （本セットアップのプロジェクト内ファイルだけでも品質基準は自己完結している）

---

## Phase 9: 動作確認（生成物の検証）

生成しただけで終わらせず、設定が実際に機能することを確認してください。
失敗した場合は該当 Phase に戻って修正し、再度確認します。

```bash
# TOML の構文チェック（python 3.11+ の tomllib を使用）
for f in .codex/config.toml .codex/agents/*.toml; do
  [ -f "$f" ] &amp;&amp; python3 -c "import tomllib; tomllib.load(open('$f','rb')); print('$f: OK')"
done

# rules の単体テスト（forbidden にしたコマンドがブロックされることを確認）
codex execpolicy check --pretty --rules .codex/rules/project.rules -- rm -rf dist

# hook の発火テスト（ブロック対象は guard.sh に実際に設定したコマンドに置き換える）
echo '{"tool_input":{"command":"rm -rf dist"}}' | bash .codex/hooks/guard.sh
echo '{"tool_input":{"command":"ls"}}' | bash .codex/hooks/guard.sh
```

- guard.sh は deny 時に `permissionDecision: "deny"` を含む JSON を出力すること（2つ目は何も出力せず exit 0）
- rules は `match` / `not_match` がロード時にも自動検証される
- SKILL.md / AGENTS.md の frontmatter（YAML）に構文エラーがないかも読み直して確認する
- 作成していないファイルの確認はスキップして構わない

---

## Phase 10: バージョン管理に追加

`AGENTS.md` / `.codex/` / `.agents/` はチームで共有するプロジェクト設定です。
バージョン管理に追加することが標準的な使い方です。git 管理下になければ以下を実行してください：

```bash
git add AGENTS.md .codex/ .agents/
```

> **補足**: 個人の作業スタイルや機密情報を含む場合など、
> バージョン管理に含めたくないケースでは `.gitignore` に追記してください。

---

## Phase 11: trust の案内と完了報告

**重要**: プロジェクト側の `.codex/config.toml`・hooks・rules は、
ユーザーがこのプロジェクトを trust するまで**一切ロードされません**。
完了報告には必ず以下の trust 手順を含めてください：

- 初回 `codex` 起動時のプロンプトでこのプロジェクトを信頼する、または
- `~/.codex/config.toml` に以下を追記する：

```toml
[projects."/絶対/パス/このリポジトリ"]
trust_level = "trusted"
```

すべての作業が完了したら、以下の形式で報告してください：

```
## セットアップ完了

### 生成・更新ファイル一覧
- AGENTS.md（ルート）
- .codex/config.toml（hooks — trust 後に有効化）
- .codex/rules/*（作成した場合）
- .codex/hooks/*（作成した場合）
- .codex/agents/*（採用したもの）
- .agents/skills/*（作成した場合）
- .codex/*.md（作成したドキュメント）
- ネスト AGENTS.md（作成した場合）

### 制御手段の割り当て（設計原則との整合）
- 事実 → AGENTS.md / .codex/*.md
- 手続き → どの skill に置いたか
- コマンド単位の許可 / 禁止 → どの rule で何を forbidden / allow にしたか
- 機械的強制 → どの hook で何をブロック / 自動実行したか
- ディレクトリ限定の規約 → どのネスト AGENTS.md に置いたか（なければ「該当なし」）
- 独立タスク → どのサブエージェントを採用したか・見送った理由（組み込みで代替した場合はその旨）

### trust の手順（ユーザーが実施）
（上記の trust 方法を記載。trust するまでプロジェクト設定・hooks・rules は無効であることを明記）

### ~/.codex/ 個人設定の提案（ユーザーが手動で反映）
- ~/.codex/config.toml（Phase 8 の内容を再掲）
- ~/.codex/AGENTS.md の状態と、指摘した旧世代向けの行（なければ「なし」）

### GPT-6 Astra 向けの校正
- 使用モデルと reasoning effort（Astra を使えなかった場合はその旨と代替モデル）
- AGENTS.md「作業の進め方」に書いた完了条件と、確認なしで回してよいゲート（rules の allow と対応）
- 既存設定から削除した旧世代向けの指示（毎回のテスト指示・毎回のドキュメント読み込み・固定レシピなど。なければ「該当なし」）

### 動作確認結果（Phase 9）
- TOML / rules / hooks の検証結果

### プロジェクト調査サマリー
（Phase 0 で把握した主要情報の要約）

### 要確認・要補完の箇所
（「未確認 - 要記入」と記載した箇所、既存設定とのマージで置き換えた箇所の一覧）
```

以上をすべて実行してください。
```
</CopyCode>
</code></pre>
  </PreCodes>
</template>
