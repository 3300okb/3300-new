<script lang="ts">
export const metadata = {
  updateDate: '2026/02/26',
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

## Phase 0: リポジトリ調査

まず以下を調べ、結果を内部メモとして保持してください（出力不要）。

1. ルートの全ファイル・フォルダ構成を把握する
2. package.json / pyproject.toml / Cargo.toml / go.mod / pom.xml など、パッケージ定義ファイルを探し、存在すれば scripts / dependencies / devDependencies を読み込む
3. README.md が存在すれば読む
4. .env.example / docker-compose.yml / Makefile / Dockerfile が存在すれば読む
5. src/ / app/ / lib/ などのメインディレクトリ構成を把握する
6. テストファイルのパターン（__tests__/ / spec/ / tests/ など）を確認する
7. CI 設定（.github/workflows/ / .circleci/ / .gitlab-ci.yml など）を確認する

## Phase 1: ルート AGENTS.md の作成（スリム版）

リポジトリルートに `AGENTS.md` を生成してください。
このファイルは**エントリーポイント**として機能し、詳細ルールは `.codex/` 配下の個別ファイルに委譲します。
**Phase 0 の調査結果を必ず反映し、プロジェクト名・技術スタック・コマンドは実際のものを記載してください。**

Codex CLI は以下の順序で AGENTS.md を自動的に読み込みます：
1. `~/.codex/AGENTS.md`（グローバル）
2. `<リポジトリルート>/AGENTS.md`（プロジェクト共通）
3. `<カレントディレクトリ>/AGENTS.md`（作業ディレクトリ）

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
```

## Phase 2: .codex/ ディレクトリと個別ルールファイルの作成

`.codex/` ディレクトリを作成し、以下の個別ルールファイルを生成してください。
**各ファイルには Phase 0 の調査結果を反映した実際の情報を記載してください。**

### .codex/workflow.md

作業フロー・手順・報告フォーマットを記載します。

```markdown
# workflow.md — 作業フロー

## 作業手順

タスクに取り組む際は以下の手順を守ってください：

1. **調査**: 対象ファイルをすべて読み、影響範囲を把握してから変更に入る
2. **実装**: 既存コードのスタイル・命名規則・ファイル構成に合わせて実装する
3. **検証**: 実装後はビルド・lint・テストを実行し、すべてパスすることを確認する
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

## コメント・ドキュメントのルール
- コメントは「なぜそうするか（Why）」を書く。「何をするか（What）」はコードが語る
- （その他のルールを記載）

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

## Phase 3: サブディレクトリ AGENTS.md の作成（任意）

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

## Phase 4: ~/.codex/config.yaml のセットアップ案の提示

`~/.codex/config.yaml` はユーザーのグローバル設定ファイルです（全プロジェクト共通）。
このファイルは直接生成せず、以下の推奨設定を **提示するにとどめてください**。
実際の書き込みはユーザーが行います。

Phase 0 の調査結果（言語・フレームワーク・テスト有無など）を踏まえ、
このプロジェクトに適した設定値を推奨してください。

提示フォーマット：

```yaml
# ~/.codex/config.yaml
# Codex CLI グローバル設定

# 使用モデル
# codex-mini-latest : Codex CLI 専用モデル（デフォルト、コーディングタスク向け）
# o4-mini           : 汎用推論モデル（複雑な論理・設計タスクに強いがコスト高）
model: codex-mini-latest

# 承認モード（デフォルト: suggest）
# suggest    : 変更提案のみ。最も安全で、すべての変更を確認できる
# auto-edit  : ファイル編集は自動、シェルコマンドのみ承認が必要
# full-auto  : すべて自動（macOS: Seatbelt / Linux: Docker でサンドボックス化）
approval_mode: suggest

# 長い stdout をすべて表示する
full_stdout: false

# 通知を有効化する
notify: false

# 会話履歴の設定
history:
  persistence: save_all  # save_all または disabled
  # max_size: 100        # 最大履歴数（省略時は無制限）

# 推論設定（o4-mini など reasoning モデルに切り替えた場合のみ有効）
# reasoning:
#   effort: medium       # low / medium / high
#   summary: auto        # auto / concise / detailed
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

## Phase 5: AGENTS.md と .codex/ ディレクトリをバージョン管理に追加

`AGENTS.md` と `.codex/` 配下のファイルはチームで共有するプロジェクト指示ファイルです。
openai/codex 公式リポジトリ自身も AGENTS.md を git 管理しており、
**コミットして共有することが標準的な使い方**です。

git 管理下になければ以下を実行してください：

```bash
git add AGENTS.md .codex/
```

> **補足**: 個人の作業スタイルや機密情報を含む場合など、
> バージョン管理に含めたくないケースでは `.gitignore` に追記してください。

## Phase 6: 完了報告

すべての作業が完了したら、以下の形式で報告してください：

```
## セットアップ完了

### 生成・更新ファイル一覧
- AGENTS.md（プロジェクトルート、git 管理に追加済み）
- .codex/workflow.md
- .codex/coding-standards.md
- .codex/testing.md
- .codex/git.md
- .codex/environment.md
- （作成したサブディレクトリ AGENTS.md のリスト、またはなし）

### ~/.codex/ 設定（ユーザーが手動で作成を推奨）
- ~/.codex/config.yaml（上記の推奨設定を参照）
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
