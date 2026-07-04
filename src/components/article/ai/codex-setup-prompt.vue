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

---

## Phase 0: リポジトリ調査 &amp; モデル調査

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

### 0-B: 最新モデルの調査

Codex CLI のサブエージェントおよび config.toml に設定する**最新の推奨モデル**を特定してください。
以下の手順で調査し、結果を内部メモとして保持してください。

1. `~/.codex/config.toml` を読み、現在設定されているモデルとマイグレーション履歴を確認する
2. `codex --help` の出力からデフォルトモデルや対応モデルのヒントを得る
3. Web 検索で「OpenAI Codex CLI recommended models」「codex CLI best model」等を調べ、現時点の最新モデルを把握する
4. 以下の観点でモデルを選定する：
   - **coder**: ソフトウェアエンジニアリングに最も特化した最新モデル（コード生成・修正の精度を重視）
   - **researcher / planner / reviewer**: 推論・分析能力が高いモデル（読み取り専用タスク）
   - **デフォルト (config.toml)**: coder と同じモデルを推奨

調査結果を以下の形式で内部メモにまとめてください（Phase 3, 8 で使用）：

```
モデル選定結果:
- coder: {モデル名} (reasoning_effort: {low/medium/high})
- researcher: {モデル名} (reasoning_effort: {low/medium/high})
- planner: {モデル名} (reasoning_effort: {low/medium/high})
- reviewer: {モデル名} (reasoning_effort: {low/medium/high})
- デフォルト: {モデル名} (reasoning_effort: {low/medium/high})
- 選定理由: {なぜこのモデルを選んだか}
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

タスクに応じて以下のファイルを参照してください。**必要なときだけ読み込んでください**
（Phase 2 で実際に作成した文書だけを表に載せる）：

| ファイル | 読むタイミング |
| --- | --- |
| `.codex/project-baseline.md` | 共通品質・セキュリティ基準を確認するとき |
| `.codex/workflow.md` | 作業開始時・タスクの進め方を確認するとき |
| `.codex/coding-standards.md` | コードを書く・修正する前 |
| `.codex/testing.md` | テストを書く・実行するとき |
| `.codex/git.md` | コミット・ブランチ操作を行う前 |
| `.codex/environment.md` | 環境セットアップ・環境変数を扱うとき |

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
- 変更前に対象ファイルを必ず読み、既存スタイルに合わせる
- 実装後はビルド・lint・テストを実行して動作を確認する
- lint やテストが未導入の場合は「未導入」と明記し、代替の検証コマンド（例: ビルド、型チェック）を必ず実行する
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

作業フロー・手順・報告フォーマットを記載します。

```markdown
# workflow.md — 作業フロー

## 作業手順

タスクに取り組む際は以下の手順を守ってください：

1. **調査**: 対象ファイルをすべて読み、影響範囲を把握してから変更に入る
2. **実装**: 既存コードのスタイル・命名規則・ファイル構成に合わせて実装する
3. **検証**: 実装後はビルド・lint・テストを実行し、すべてパスすることを確認する（未導入の項目は「未導入」と明記し、代替検証を実施）
4. **報告**: 変更ファイルと実行結果を明示して報告する

シンプルな1行修正などは調査フェーズを省略して直接実装してよい。

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
**各エージェントの `model` と `model_reasoning_effort` は、Phase 0-B のモデル調査結果を使用してください。**

### .codex/agents/researcher.toml

```toml
name = "researcher"
description = "Read-only codebase researcher. Investigates code structure, dependencies, and impact before changes."
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
description = "Architecture and planning agent. Designs implementation strategies and breaks down complex tasks."
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
description = "Implementation agent. Writes, modifies, and tests code following project conventions."
model = "{Phase 0-B で選定したモデル}"
model_reasoning_effort = "{Phase 0-B で選定した reasoning_effort}"
developer_instructions = """
You are an implementation agent.

## Responsibilities
- Implement code changes following the plan from the planner agent
- Match existing code style, naming conventions, and file structure
- Write or update tests for all changes
- Run build, lint, and tests after implementation

## Rules
- Read target files before modifying them
- Never leave debug output (console.log, print, etc.) in committed code
- Never commit .env files or secrets
- Follow the coding standards in .codex/coding-standards.md
"""
```

### .codex/agents/reviewer.toml

```toml
name = "reviewer"
description = "Code review agent. Checks implementation quality, security, performance, and accessibility."
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

Phase 0 で見つかった手順から、実在するものだけ生成してください（例）:
- `release` — リリース / デプロイ手順
- `code-review` — レビュー観点チェックリスト
- `add-feature` — このリポジトリ標準の機能追加フロー

例 `.agents/skills/release/SKILL.md`:

```markdown
---
name: release
description: リリース手順。タグ付け・CHANGELOG更新・デプロイ確認を行うときに使う。ユーザーが明示的にリリースを指示したときのみ実行する。
---
# リリース手順
1. main が最新かつ CI が green であることを確認
2. バージョンを bump し CHANGELOG を更新
3. タグを打つ
4. デプロイを実行し、稼働を確認
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

# 使用モデル（Phase 0-B の調査結果を反映）
model = "{Phase 0-B で選定したデフォルトモデル}"
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

また、グローバル指示ファイル `~/.codex/AGENTS.md` についても以下の作成を推奨してください：

```markdown
# ~/.codex/AGENTS.md
# 全プロジェクト共通のグローバル指示

## 基本方針
- 変更前に対象ファイルを必ず読み、既存スタイルに合わせる
- 実装後はビルド・lint・テストを実行して動作を確認する
- 型・インターフェースを明示する（型のある言語の場合）
- マジックナンバーは定数化する
- エラーハンドリングを省略しない

## セキュリティ
- `.env` ファイルをコミットしない
- API キーや認証情報をコードに直書きしない
- HTML を直接挿入する操作（innerHTML 相当）は XSS リスクに注意する
```

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
- ~/.codex/config.toml / ~/.codex/AGENTS.md（Phase 8 の内容を再掲）

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
