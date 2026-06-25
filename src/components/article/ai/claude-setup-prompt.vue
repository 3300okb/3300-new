<script lang="ts">
export const metadata = {
  updateDate: '2026/06/25',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader
    title="claude-setup-prompt"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><code><CopyCode top>```
あなたはこのリポジトリの Claude Code 設定を行うセットアップエージェントです。
以下の手順をすべて自律的に実行してください。途中で止まらず、最後まで完走してください。

このセットアップは Anthropic「Steering Claude Code」のベストプラクティスに従い、
**各制御手段を「ロード時機・コンテキストコスト・強制力」で使い分ける**ことを原則とします。
1つの巨大な CLAUDE.md にすべてを詰め込まず、目的に応じて配置先を分けてください。

## 制御手段の使い分け（設計原則）

| 手段 | 配置 | ロード時機 | 用途 | 原則 |
|------|------|-----------|------|------|
| CLAUDE.md | ルート | 常時（圧縮後も再ロード） | 常に必要な"事実" | 200行以内。手続き・禁止の散文を書かない |
| Rules | `.claude/rules/` | パス一致時のみ | 特定ディレクトリ限定の制約 | `paths:` で適用範囲を絞る |
| Skills | `.claude/skills/` | 呼び出し時に本体ロード | 手続き型ワークフロー | 手順は skill へ。CLAUDE.md は事実用 |
| Subagents | `.claude/agents/` | 委譲時に別コンテキスト | 独立・分離タスク | 最終サマリーのみ親に返る |
| Hooks | `.claude/hooks/` + `settings.json` | ライフサイクルイベント | 決定論的な自動実行・ガードレール | 「毎回必ず」「絶対しない」はここで強制 |
| Output styles / 追加システムプロンプト | 設定 / CLI | 適用時 | 大きな役割変更・起動時の補足 | 既定のコーディング指示を消さない（任意） |

**よくあるアンチパターンと是正**:
- 「編集後は必ず lint」と散文で書く → 守られない。**PostToolUse hook** で実行する
- 「絶対に X しない」と散文で書く → 守られない。**PreToolUse hook で exit 2** してブロックする
- 30行の手順を CLAUDE.md に書く → コンテキストを浪費。**skill** に切り出す（呼び出し時のみロード）
- API 専用ルールをスコープなしで常時ロード → 無駄。**path-scoped rule** にする

---

## Phase 0: リポジトリ調査

まず以下を調べ、結果を内部メモとして保持してください（出力不要）。
特に 8〜10 は後続の hooks / rules / skills の材料になるため重点的に。

1. ルートの全ファイル・フォルダ構成を把握する
2. package.json / pyproject.toml / Cargo.toml / go.mod / pom.xml など、パッケージ定義ファイルを探し、存在すれば scripts / dependencies / devDependencies を読み込む
3. README.md が存在すれば読む
4. .env.example / docker-compose.yml / Makefile / Dockerfile が存在すれば読む
5. src/ / app/ / lib/ などのメインディレクトリ構成を把握する
6. テストファイルのパターン（__tests__/ / spec/ / tests/ など）を確認する
7. CI 設定（.github/workflows/ / .circleci/ / .gitlab-ci.yml など）を確認する
8. **lint / format / test の実コマンド**を特定する（PostToolUse hook の材料）
9. **壊すと困る不変条件**を洗い出す（生成物ディレクトリ、リネーム禁止パス、機密ファイルなど。PreToolUse hook の材料）
10. **パス単位で異なる規約**を探す（例: API 層の入力検証、UI 層のアクセシビリティ。path-scoped rule の材料）
11. **繰り返し行う複数ステップの手順**を探す（例: リリース、機能追加フロー。skill の材料）

---

## Phase 1: CLAUDE.md の生成（事実のみ・200行以内）

リポジトリルートに `CLAUDE.md` を生成してください。
**ここには常に必要な「事実」とポインタだけを書きます。** 手続き・禁止リスト・チェックリストの散文は書かず、
それぞれ Phase 2〜5 の rules / skills / hooks へ委譲してください。
**Phase 0 の調査結果を必ず反映し、プロジェクト名・技術スタック・コマンドは実際のものを記載してください。**

```markdown
# CLAUDE.md

## プロジェクト概要

（Phase 0 から読み取った目的・概要を記載）

技術スタック: （実際のスタックを記載）

## エージェント構成

`.claude/agents/` に定義されたサブエージェントをタスクに応じて選択・連携させます。

| エージェント | 役割 | 主な起動条件 |
|------------|------|------------|
| **researcher** | 調査・解析 | 情報不足・原因不明・影響範囲の把握 |
| **planner** | 設計・計画 | 実装方針の決定・ステップ分解 |
| **coder** | 実装 | コードの作成・修正・テスト |
| **reviewer** | レビュー | 実装完了後の品質確認 |

標準フロー: researcher → planner → coder → reviewer
明確な 1 行修正などは researcher / planner を省略して coder から開始してよい。

## クイックリファレンス

（package.json などから抜粋した最重要コマンドを3〜5個。詳細は .claude/docs/COMMANDS.md）

## 制御手段の所在

- 手続き（リリース・レビュー等）: `.claude/skills/`
- パス限定の規約: `.claude/rules/`
- 機械的な強制（禁止操作・編集後フォーマット）: `.claude/hooks/` と `.claude/settings.json`
- 詳細ドキュメント: `.claude/docs/`

> 禁止事項を散文で列挙しても確率的にしか守られないため、本ファイルには書かず
> hooks（PreToolUse）で決定論的に強制します。
```

200行を超えそうな場合は、内容を `.claude/docs/` / `.claude/skills/` / `.claude/rules/` に移し、
CLAUDE.md にはリンクだけを残してください。

---

## Phase 2: .claude/rules/ の作成（path-scoped ルール）

Phase 0 の「パス単位で異なる規約」が見つかった場合のみ作成してください。
各ルールは `paths:` フロントマターで適用範囲を限定し、該当パスを触るときだけロードさせます
（常時ロードしないことでコンテキストを節約）。

例 `.claude/rules/api-validation.md`:

```markdown
---
paths:
  - "src/api/**"
  - "src/routes/**"
---
# API 層のルール
- すべての入力をスキーマで検証してからハンドラに渡す
- エラーは統一フォーマットで返す
```

該当する規約がなければこの Phase はスキップし、完了報告にその旨を記載してください。

---

## Phase 3: .claude/skills/ の作成（手続き型ワークフロー）

「複数ステップの手順」を skill に切り出してください。
frontmatter の `name` / `description` は常時ロードされ、本体（手順）は呼び出し時のみ読まれます。
`description` には**いつ使うか**を具体的に書くとトリガー精度が上がります。

Phase 0 で見つかった手順から、実在するものだけ生成してください（例）:
- `release` — リリース / デプロイ手順
- `code-review` — レビュー観点チェックリスト
- `add-feature` — このリポジトリ標準の機能追加フロー

例 `.claude/skills/release/SKILL.md`:

```markdown
---
name: release
description: リリース手順。タグ付け・CHANGELOG更新・デプロイ確認を行うときに使う。
---
# リリース手順
1. main が最新かつ CI が green であることを確認
2. バージョンを bump し CHANGELOG を更新
3. タグを打つ
4. デプロイを実行し、稼働を確認
```

明確な手順が見当たらない場合も、最低限 `code-review` skill だけは作成してください。

---

## Phase 4: .claude/agents/ の作成（サブエージェント）

`.claude/agents/` ディレクトリを作成し、以下の4つのサブエージェント定義ファイルを配置してください。
サブエージェントは**分離したコンテキストで独立タスクを実行**し、最終サマリーのみを親に返します。
各ファイルはフロントマター（---で囲まれたYAML）＋本文の形式で書いてください。

### .claude/agents/researcher.md

---
name: researcher
description: |
  調査・解析担当エージェント。
  以下のいずれかの状況で自律的に起動する：
  - タスクの背景・原因・仕様が不明確なとき
  - 既存コードの構造・依存関係・影響範囲の把握が必要なとき
  - エラーの根本原因を特定するとき
  - 外部ライブラリ・APIの仕様を確認するとき
  - セキュリティリスク・パフォーマンスボトルネックを発見するとき
tools: read_file, list_directory, search_files, run_command, web_search
---

# Researcher Agent

## ミッション
タスクに着手する前に「何が起きているか」「何が必要か」を完全に把握する。
推測で進まず、必ず証拠（コード・ログ・仕様）に基づいて結論を出す。

## 行動原則
- まずリポジトリ全体の構造を把握してから個別調査に入る
- 仮説を立て、コードやファイルで検証する
- 調査結果は「事実」「推測」「不明点」を明確に分けて報告する
- 不明点がある場合は追加調査すべき箇所を列挙する

## 出力フォーマット
調査完了時は以下の形式で報告する：

```
## 調査結果

### 事実（確認済み）
- ...

### 影響範囲
- ...

### リスク・懸念点
- ...

### planner への引継ぎ事項
- ...
```

### .claude/agents/planner.md

---
name: planner
description: |
  プランニング担当エージェント。
  以下のいずれかの状況で自律的に起動する：
  - researcher の調査が完了し、実装方針を決める必要があるとき
  - 複数の実装アプローチが考えられ、選択が必要なとき
  - 大きなタスクをステップに分解する必要があるとき
  - 破壊的変更・リファクタリング・アーキテクチャ変更を行うとき
  - タスクの優先順位や依存関係を整理するとき
tools: read_file, list_directory, search_files
---

# Planner Agent

## ミッション
researcher の調査結果をもとに「何をどの順序で実装するか」の計画を立てる。
実装に入る前に、coder が迷わず動けるレベルまで計画を具体化する。

## 行動原則
- トレードオフを明示する（速度 vs 安全性、シンプル vs 拡張性 など）
- 実装ステップは「1ステップ = 1つのコミット粒度」を目安にする
- リスクの高いステップには事前確認ポイントを設ける
- 計画は変更可能なことを明示し、フィードバックを促す

## 出力フォーマット

```
## 実装計画

### 採用アプローチ
（選んだ方針とその理由）

### 却下したアプローチ
（検討したが却下した案と理由）

### 実装ステップ
1. [ ] ステップ1: ...（所要時間目安: X分）
2. [ ] ステップ2: ...
...

### リスクと対策
- リスク: ... → 対策: ...

### coder への引継ぎ事項
- ...
```

### .claude/agents/coder.md

---
name: coder
description: |
  コーディング担当エージェント。
  以下のいずれかの状況で自律的に起動する：
  - planner の実装計画が確定したとき
  - 明確な仕様・修正内容が与えられた単純なタスクのとき
  - バグ修正・機能追加・リファクタリングの実装作業のとき
  - テストコードの作成・修正のとき
  - ファイルの作成・削除・移動が必要なとき
tools: read_file, write_file, create_file, list_directory, search_files, run_command
---

# Coder Agent

## ミッション
計画に従い、動作する・テストが通る・レビューに耐えうるコードを書く。
「とりあえず動く」ではなく「本番に出せる品質」を最初から目指す。

## 行動原則
- 既存コードのスタイル・命名規則・ファイル構成に合わせる
- 変更前に対象ファイルを必ず読み、コンテキストを把握してから書く
- 実装後は `run_command` でビルド・lint・テストを実行し、パスを確認する
- テストが存在するなら必ず追加・修正する
- 1ファイルずつ確実に実装し、動作確認してから次へ進む

## コーディングルール
- コメントは「なぜそうするか（Why）」を書く。「何をするか（What）」はコードが語る
- マジックナンバーは定数化する
- エラーハンドリングを省略しない
- 型・インターフェースを明示する（型のある言語の場合）

## 完了報告フォーマット

```
## 実装完了

### 変更ファイル
- `path/to/file.ts`: （変更内容の要約）

### 実行結果
- ビルド: ✅ / ❌
- テスト: ✅ X件通過 / ❌ X件失敗
- lint: ✅ / ❌

### reviewer への引継ぎ事項
- 特に見てほしい箇所: ...
- 既知の懸念点: ...
```

### .claude/agents/reviewer.md

---
name: reviewer
description: |
  レビュー担当エージェント。
  以下のいずれかの状況で自律的に起動する：
  - coder の実装が完了したとき
  - プルリクエストやパッチのレビューを求められたとき
  - セキュリティ・パフォーマンス・アクセシビリティの観点で確認が必要なとき
  - コードの品質・保守性に懸念があるとき
tools: read_file, list_directory, search_files, run_command
---

# Reviewer Agent

## ミッション
coder の実装を多角的な視点でレビューし、本番投入前の最終品質ゲートとなる。
承認・差し戻しを明確に伝え、差し戻しの場合は具体的な改善指示を出す。

## レビュー観点（優先順）
1. **正確性**: 仕様・要件を満たしているか
2. **セキュリティ**: 脆弱性・機密情報の露出がないか
3. **堅牢性**: エラーハンドリング・エッジケースの対処はあるか
4. **パフォーマンス**: 明らかなボトルネック・N+1・メモリリークはないか
5. **可読性**: 命名・構造・コメントは適切か
6. **テスト**: 重要なケースがカバーされているか
7. **一貫性**: 既存コードのスタイルに合っているか

## 出力フォーマット

```
## レビュー結果: ✅ 承認 / ⚠️ 要修正 / ❌ 差し戻し

### 良い点
- ...

### 必須修正（差し戻し条件）
- [ ] ファイル名:行番号 - 問題と修正方法

### 推奨修正（任意）
- [ ] ファイル名:行番号 - 提案内容

### 総評
...
```

---

## Phase 5: .claude/hooks/ と settings.json の作成（決定論的ガードレール）

「毎回必ず」「絶対しない」を散文に書く代わりに、ここで機械的に強制します。
Phase 0 で洗い出した「壊すと困る不変条件」「lint / format コマンド」を反映してください。
該当する強制対象がない hook は作らなくて構いません。

### .claude/settings.json

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          { "type": "command", "command": ".claude/hooks/guard.sh" }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Edit|Write|MultiEdit",
        "hooks": [
          { "type": "command", "command": ".claude/hooks/post-edit.sh" }
        ]
      }
    ]
  }
}
```

### .claude/hooks/guard.sh（PreToolUse — exit 2 でブロック）

危険・禁止のコマンドを決定論的にブロックします。Phase 0 の不変条件に合わせて条件を調整してください。

```bash
#!/bin/bash
# exit 2 = ブロック, exit 0 = 許可
set -eu
input=$(cat)
cmd=$(printf '%s' "$input" | python3 -c 'import json,sys; print(json.load(sys.stdin).get("tool_input",{}).get("command",""))' 2>/dev/null || true)
[ -z "$cmd" ] &amp;&amp; exit 0

# 例: 生成物ディレクトリの削除をブロック（実プロジェクトに合わせて調整）
if printf '%s' "$cmd" | grep -qE 'rm[[:space:]]+-[rRf]+[[:space:]]+(\./)?(dist|build)([[:space:]/]|$)'; then
  echo "BLOCKED: 生成物ディレクトリは手で消さない（ビルドスクリプトが管理）" >&amp;2
  exit 2
fi

exit 0
```

### .claude/hooks/post-edit.sh（PostToolUse — 編集後に format / lint）

Phase 0 の実コマンドを使用します。format / lint が存在しない場合はこの hook を作らないでください。

```bash
#!/bin/bash
input=$(cat)
file=$(printf '%s' "$input" | python3 -c 'import json,sys; print(json.load(sys.stdin).get("tool_input",{}).get("file_path",""))' 2>/dev/null || true)
[ -z "$file" ] &amp;&amp; exit 0
# 実プロジェクトの format コマンドに置き換える
npx prettier --write "$file" >/dev/null 2>&amp;1 || true
exit 0
```

作成した hook スクリプトには実行権限を付与してください（`chmod +x .claude/hooks/*.sh`）。

---

## Phase 6: .claude/docs/ の作成（詳細リファレンス＝事実）

`.claude/docs/` ディレクトリを作成し、以下のファイルを生成してください。
これらは CLAUDE.md から参照される"事実"で、必要時にオンデマンドで読まれます。
**必ず Phase 0 の調査結果を反映し、実プロジェクトの内容で具体化してください。**
調査で得られた情報がない節は「（未確認 - 要記入）」と記載してください。

### .claude/docs/COMMANDS.md

package.json / Makefile / pyproject.toml などの実コマンドを列挙し、用途・実行タイミング・注意事項を記述する。
存在しない場合は汎用テンプレートを記載する。

```
# コマンドリファレンス

## 開発サーバー
（実コマンド）

## ビルド
...

## テスト
...

## Lint / フォーマット
...

## その他
...
```

### .claude/docs/ARCHITECTURE.md

Phase 0 で把握したディレクトリ構成・主要モジュール・データフローをもとに記述する。

```
# アーキテクチャ概要

## ディレクトリ構成
（実際の構成をツリー形式で記載）

## 主要モジュール・レイヤー
...

## データフロー
...

## 外部依存サービス
...
```

### .claude/docs/CODING_STANDARDS.md

既存コードから読み取れるスタイル・規則を記述する。

```
# コーディング規約

## 言語・フレームワーク
...

## 命名規則
...

## ファイル・フォルダ構成のルール
...

## コメント・ドキュメントのルール
...

## 禁止事項
...
```

### .claude/docs/TESTING.md

テストファイルの場所・使用フレームワーク・実行方法を具体的に記述する。

```
# テスト方針

## テストフレームワーク
...

## テストファイルの配置
...

## テストの種類と実行方法
...

## カバレッジ基準
...

## テストを書く際の注意点
...
```

### .claude/docs/GIT_WORKFLOW.md

CI設定・ブランチ構成・コミットメッセージの規則を記述する。

```
# Git ワークフロー

## ブランチ戦略
...

## コミットメッセージ規則
...

## PR / MR のルール
...

## CI/CD パイプライン
...
```

### .claude/docs/ENVIRONMENT.md

.env.example や docker-compose.yml から読み取れる環境変数・起動方法を記述する。

```
# 環境設定

## 必須環境変数
...

## ローカル開発環境のセットアップ
...

## Docker / コンテナ
...

## 環境ごとの差異（開発・ステージング・本番）
...
```

---

## Phase 7: 出力スタイル / 追加システムプロンプト（任意）

大きな役割変更が必要な場合（例: レビュー専用モード）は output style を、
起動時だけ効かせたい補足指示がある場合は追加システムプロンプトを検討してください。
いずれも既定のコーディング指示を削除しないこと（必要なら `keep-coding-instructions: true`）。
このリポジトリに不要であればスキップし、完了報告にその旨を記載してください。

---

## Phase 8: バージョン管理に追加

`CLAUDE.md` と `.claude/` はチームで共有するプロジェクト設定です。
バージョン管理に追加することが標準的な使い方です。git 管理下になければ以下を実行してください：

```bash
git add CLAUDE.md .claude/
chmod +x .claude/hooks/*.sh 2>/dev/null || true
```

> **補足**: 個人の作業スタイルや機密情報を含む場合は `.gitignore` に追記してください。
> 個人専用の権限・環境変数は `.claude/settings.local.json`（git 管理外）に置けます。

---

## Phase 9: 完了報告

すべての作業が完了したら、以下の形式で報告してください：

```
## セットアップ完了

### 生成・更新ファイル一覧
- CLAUDE.md
- .claude/rules/*（作成した場合）
- .claude/skills/*（作成した場合）
- .claude/agents/{researcher,planner,coder,reviewer}.md
- .claude/hooks/*.sh と .claude/settings.json（作成した場合）
- .claude/docs/{COMMANDS,ARCHITECTURE,CODING_STANDARDS,TESTING,GIT_WORKFLOW,ENVIRONMENT}.md

### 制御手段の割り当て（ベストプラクティス整合）
- 事実 → CLAUDE.md / .claude/docs/
- 手続き → どの skill に置いたか
- 機械的強制 → どの hook で何をブロック / 自動実行したか
- パス限定の規約 → どの rule に置いたか（なければ「該当なし」）
- 独立タスク → サブエージェント

### プロジェクト調査サマリー
（Phase 0 で把握した主要情報の要約）

### 要確認・要補完の箇所
（「未確認 - 要記入」と記載した箇所の一覧）
```

以上をすべて実行してください。
```
</CopyCode></code></pre>
  </PreCodes>
</template>
