<script lang="ts">
export const metadata = {
  updateDate: '2026/03/23',
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

## Phase 0: リポジトリ調査 &amp; モデル調査

まず以下を調べ、結果を内部メモとして保持してください（出力不要）。

### 0-A: リポジトリ調査

1. ルートの全ファイル・フォルダ構成を把握する
2. package.json / pyproject.toml / Cargo.toml / go.mod / pom.xml など、パッケージ定義ファイルを探し、存在すれば scripts / dependencies / devDependencies を読み込む
3. README.md が存在すれば読む
4. .env.example / docker-compose.yml / Makefile / Dockerfile が存在すれば読む
5. src/ / app/ / lib/ などのメインディレクトリ構成を把握する
6. テストファイルのパターン（__tests__/ / spec/ / tests/ など）を確認する
7. CI 設定（.github/workflows/ / .circleci/ / .gitlab-ci.yml など）を確認する

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

調査結果を以下の形式で内部メモにまとめてください（Phase 3, 5 で使用）：

```
モデル選定結果:
- coder: {モデル名} (reasoning_effort: {low/medium/high})
- researcher: {モデル名} (reasoning_effort: {low/medium/high})
- planner: {モデル名} (reasoning_effort: {low/medium/high})
- reviewer: {モデル名} (reasoning_effort: {low/medium/high})
- デフォルト: {モデル名} (reasoning_effort: {low/medium/high})
- 選定理由: {なぜこのモデルを選んだか}
```

## Phase 1: ルート AGENTS.md の作成（スリム版）

リポジトリルートに `AGENTS.md` を生成してください。
このファイルは**エントリーポイント**として機能し、詳細ルールは `.codex/` 配下の個別ファイルに委譲します。
**Phase 0 の調査結果を必ず反映し、プロジェクト名・技術スタック・コマンドは実際のものを記載してください。**

Codex CLI は以下の順序で AGENTS.md を自動的に読み込みます：
1. `~/.codex/AGENTS.md`（グローバル）
2. `&lt;リポジトリルート&gt;/AGENTS.md`（プロジェクト共通）
3. `&lt;カレントディレクトリ&gt;/AGENTS.md`（作業ディレクトリ）

```markdown
# AGENTS.md

このファイルは Codex CLI がこのリポジトリで作業する際のエントリーポイントです。

## プロジェクト概要

（Phase 0 の調査から読み取ったプロジェクトの目的・概要を記載）

技術スタック: （実際のスタックを記載）

---

## ドキュメント参照

タスクに応じて以下のファイルを参照してください。**必要なときだけ読み込んでください**（常に全部読む必要はありません）：

| ファイル | 読むタイミング |
| --- | --- |
| `.codex/project-baseline.md` | 共通品質・セキュリティ基準を確認するとき |
| `.codex/workflow.md` | 作業開始時・タスクの進め方を確認するとき |
| `.codex/coding-standards.md` | コードを書く・修正する前 |
| `.codex/testing.md` | テストを書く・実行するとき |
| `.codex/git.md` | コミット・ブランチ操作を行う前 |
| `.codex/environment.md` | 環境セットアップ・環境変数を扱うとき |
| `.codex/agents/*.toml` | サブエージェントの設定を変更・追加するとき |

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
```

## Phase 2: .codex/ ディレクトリと個別ルールファイルの作成

`.codex/` ディレクトリを作成し、以下の個別ルールファイルを生成してください。
**各ファイルには Phase 0 の調査結果を反映した実際の情報を記載してください。**
**`~/.codex/AGENTS.md` が存在しない環境でも品質基準が欠落しないよう、プロジェクト内ファイルだけで自己完結する構成にしてください。**

### .codex/project-baseline.md

このファイルは「グローバル指示が無くても必ず守る最低基準」を固定するために作成します。
以下の項目は必須で記載し、`workflow.md` / `coding-standards.md` / `testing.md` と矛盾しないようにしてください。

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

## 報告フォーマット
作業完了時は以下の形式で報告する：

### 変更ファイル
- `path/to/file`: （変更内容の要約）

### 実行結果
- ビルド: ✅ / ❌
- テスト: ✅ X件通過 / ❌ X件失敗（未導入ならその旨を明記）
- lint: ✅ / ❌（未導入ならその旨を明記）
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
- テスト: ✅ X件通過 / ❌ X件失敗
- lint: ✅ / ❌
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

## Phase 3: .codex/agents/ カスタムサブエージェントの作成

Codex CLI はサブエージェント機能をサポートしています。
タスクの性質に応じて専門化されたサブエージェントにタスクを委譲することで、
精度と効率を向上させることができます。

`.codex/agents/` ディレクトリを作成し、以下の TOML ファイルを配置してください。
**Phase 0 の調査結果を反映し、プロジェクトに適した指示を記載してください。**
**各エージェントの `model` と `model_reasoning_effort` は、Phase 0-B のモデル調査結果を使用してください。**

### ビルトインサブエージェント

Codex CLI には以下の3つのデフォルトサブエージェントが組み込まれています：

- **default**: 汎用エージェント（フォールバック）
- **worker**: 実装・修正に特化した実行エージェント
- **explorer**: 読み取り専用のコードベース探索エージェント

これらに加え、プロジェクト固有のカスタムサブエージェントを定義できます。

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
researcher で原因を特定し、planner で修正方針を立て、
coder で最小限の修正を実装してください。
```

## Phase 4: サブディレクトリ AGENTS.md の作成（任意）

主要なサブディレクトリに固有の指示がある場合、それぞれに AGENTS.md を配置してください。
Codex CLI はリポジトリルートから作業ディレクトリまでのパス上にあるすべての AGENTS.md を読み込むため、
ディレクトリ固有の補足指示を記述できます。

対象ディレクトリの例（実際の構成に応じて判断する）：
- `src/` 以下に特定の規則がある場合
- テストディレクトリに固有の注意点がある場合
- 独立したモジュール・パッケージがある場合

サブディレクトリ AGENTS.md のフォーマット（例: `src/AGENTS.md`）：

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

## Phase 5: ~/.codex/config.toml のセットアップ案の提示

`~/.codex/config.toml` はユーザーのグローバル設定ファイルです（全プロジェクト共通）。
このファイルは直接生成せず、以下の推奨設定を **提示するにとどめてください**。
実際の書き込みはユーザーが行います。

Phase 0 の調査結果（言語・フレームワーク・テスト有無など）を踏まえ、
このプロジェクトに適した設定値を推奨してください。

提示フォーマット：

```toml
# ~/.codex/config.toml
# Codex CLI グローバル設定

# 使用モデル（Phase 0-B の調査結果を反映）
model = "{Phase 0-B で選定したデフォルトモデル}"
model_reasoning_effort = "{Phase 0-B で選定した reasoning_effort}"

# 承認モード
# "untrusted"  : 信頼されたコマンド（ls, cat 等）のみ自動実行。それ以外はユーザー承認が必要
# "on-request" : モデルが必要と判断した時のみ承認を求める
# "never"      : 承認なしですべて自動実行（非インタラクティブ向け）
ask_for_approval = "on-request"

# サンドボックスモード
# "read-only"           : 読み取り専用
# "workspace-write"     : ワークスペース内の書き込みのみ許可
# "danger-full-access"  : 全アクセス許可（注意）
sandbox = "workspace-write"

# 長い stdout をすべて表示する
full_stdout = false

# 通知を有効化する
notify = false

# サブエージェント設定
[agents]
max_threads = 6        # 同時実行エージェント数の上限（デフォルト: 6）
max_depth = 1          # エージェントのネスト深度（デフォルト: 1）

# 会話履歴の設定
[history]
persistence = "save_all"  # "save_all" または "none"
# max_bytes = 104857600   # 最大サイズ（省略時は無制限）

# プロファイル例（用途別の設定切替）
# codex --profile quick で使用
# [profiles.quick]
# model = "codex-mini-latest"
# model_reasoning_effort = "medium"
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

## Phase 6: AGENTS.md と .codex/ ディレクトリをバージョン管理に追加

`AGENTS.md` と `.codex/` 配下のファイルはチームで共有するプロジェクト指示ファイルです。
openai/codex 公式リポジトリ自身も AGENTS.md を git 管理しており、
**コミットして共有することが標準的な使い方**です。

git 管理下になければ以下を実行してください：

```bash
git add AGENTS.md .codex/
```

> **補足**: 個人の作業スタイルや機密情報を含む場合など、
> バージョン管理に含めたくないケースでは `.gitignore` に追記してください。

## Phase 7: 完了報告

すべての作業が完了したら、以下の形式で報告してください：

```
## セットアップ完了

### 生成・更新ファイル一覧
- AGENTS.md（プロジェクトルート、git 管理に追加済み）
- .codex/project-baseline.md
- .codex/workflow.md
- .codex/coding-standards.md
- .codex/testing.md
- .codex/git.md
- .codex/environment.md
- .codex/agents/researcher.toml
- .codex/agents/planner.toml
- .codex/agents/coder.toml
- .codex/agents/reviewer.toml
- （作成したサブディレクトリ AGENTS.md のリスト、またはなし）

### ~/.codex/ 設定（ユーザーが手動で作成を推奨）
- ~/.codex/config.toml（上記の推奨設定を参照）
- ~/.codex/AGENTS.md（上記の推奨設定を参照）

### プロジェクト調査サマリー
（Phase 0 で把握した主要情報の要約）

### 具体化できた箇所
（実際のコード・設定から情報を埋められた箇所）

### 要確認・要補完の箇所
（「未確認 - 要記入」と記載した箇所の一覧）
```

以上をすべて実行してください。
```
</CopyCode>
</code></pre>
  </PreCodes>
</template>
