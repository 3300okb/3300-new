<script lang="ts">
export const metadata = {
  updateDate: '2026/11/27',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader
    title="repository-setup-prompt"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><code><CopyCode top>```
あなたはこのリポジトリの Claude Code と Codex CLI の設定を行うセットアップエージェントです。
以下の手順をすべて自律的に実行してください。途中で止まらず、最後まで完走してください。
既存の CLAUDE.md / AGENTS.md / .claude/ / .codex/ / .agents/ がある場合は黙って上書きせず、既存内容を読み込んで本構成にマージし、
置き換え・移動した箇所を完了報告に列挙してください。

このセットアップは Anthropic「Steering Claude Code」のベストプラクティスに従い、
**各制御手段を「ロード時機・コンテキストコスト・強制力」で使い分ける**ことを原則とします。
1つの巨大な指示ファイルにすべてを詰め込まず、目的に応じて配置先を分けてください。
もう1つの原則は**「事実は両ツールで共有し、強制の仕組みはツールごとに置く」**ことです。
プロジェクトの事実は `AGENTS.md` と `.agents/docs/` に 1 回だけ書き、`CLAUDE.md` は `@AGENTS.md` で取り込んで Claude Code 固有の内容だけを足します。
同じ内容を 2 か所に書くと、片方だけが更新されて必ず食い違います。
生成物は **Claude Code は Claude Opus 5.5（`claude-opus-5-5`）、Codex CLI は GPT-6.2 Sol（`gpt-6.2-sol`）で運用されることを前提**に校正します
（後述の「Opus 5.5 / GPT-6.2 Sol 向けの校正」）。
片方のツールしか使わないリポジトリでは、もう片方の専用 Phase（見出しに【Claude Code】【Codex CLI】と付けたもの）と、
共通 Phase のうち使わないツールのファイルを作る部分を飛ばしてください（AGENTS.md と `.agents/docs/` はどちらの場合も作る）。

### このセットアップ作業自体の進め方

- 上記が完全な仕様です。要求されていない設定を推測で足さず、この範囲を最後まで仕上げてください。
- 完了条件は「Phase 11 の受け入れテストがすべて通り、Phase 13 の完了報告を出したこと」です。それまで途中報告で止まらないでください。
- リポジトリ内のファイル読み取り、本手順で作る設定ファイルの作成・編集、Phase 11 の検証コマンドは本番環境に触れないため、
  各ステップで承認を求めずに実行してください。
  止まって確認するのは、既存ファイルの削除とホームディレクトリ（`~/.claude/` / `~/.codex/`）への書き込みだけです（個人設定は Phase 10 で提案にとどめる）。
- サブエージェントへは委譲せず、調査からファイル生成までこのセッションで直接実行してください
  （数十回のツール呼び出しで終わる作業で、分離コンテキストの利点がありません）。
- 実況は着手時に1文、方針が変わったときだけ追加。詳細は Phase 13 の完了報告にまとめてください。
- 複数ファイルを生成する重めの作業なので、effort は `high` で流すと安定します
  （Claude Code は `/effort high`。Opus 5.5 の既定は `medium`。Codex CLI は `/model` で `high` を選ぶ。Codex での GPT-6.2 Sol の既定は `low`）。

## 制御手段の使い分け（設計原則）

| 手段 | Claude Code | Codex CLI | ロード時機 | 原則 |
|------|-------------|-----------|-----------|------|
| 共有の事実 | `CLAUDE.md`（先頭の `@AGENTS.md` で取り込む） | `AGENTS.md`（ルート） | 常時 | 事実とポインタだけ。手続き・禁止の散文を書かない。CLAUDE.md は取り込み分と合わせて 200 行以内 |
| 詳細ドキュメント | `.agents/docs/`（共有） | 同左 | 必要なときだけ | AGENTS.md から「いつ読むか」付きで参照する |
| ディレクトリ限定の規約 | ネスト `CLAUDE.md`（`@AGENTS.md` の 1 行だけ） | ネスト `AGENTS.md` | そのディレクトリを扱うとき | 本文はネスト AGENTS.md に 1 回だけ書く |
| Skills | `.claude/skills/` | `.agents/skills/` | 起動時は description のみ。本体は呼び出し時 | 手続きは skill へ。description に「いつ使うか」を書く |
| Subagents | `.claude/agents/*.md` | `.codex/agents/*.toml` | 委譲時に別コンテキスト | 組み込み（Explore・Plan / default・worker・explorer）と重複させない |
| 許可 / 禁止 | `.claude/settings.json` の permissions | `.codex/rules/*.rules` | ツール・コマンドの実行時 | 静的に決まるものはここで。決定論的な第一選択 |
| Hooks | `.claude/settings.json` の hooks | `.codex/config.toml` の `[[hooks.*]]` | ライフサイクルイベント | スクリプトは `.agents/hooks/` に置いて共有。「毎回必ず」「絶対しない」はここで強制 |
| Effort | `settings.json` の `modelSettings` / skill・subagent の `effort` | `config.toml`・agents の `model_reasoning_effort` | リクエストごと | 思考量を散文で指示しない。重い作業だけ上げる |
| Output styles / 追加システムプロンプト | 設定 / CLI | — | 適用時 | 大きな役割変更・起動時の補足（任意） |

**Claude Code と AGENTS.md の関係**: Claude Code は AGENTS.md だけのリポジトリなら AGENTS.md を読みますが、
同じ階層か上位に CLAUDE.md があると **CLAUDE.md だけを読みます**（既定の `claude-md-or-agents-md`）。
両方を置くこの構成では、CLAUDE.md の先頭に `@AGENTS.md` を書いて取り込みます（公式が示す共有の仕方。相対パスは CLAUDE.md の位置から解決される）。

**trust に関する重要な前提（Codex CLI）**: プロジェクト側の `.codex/config.toml`・hooks・rules は、
ユーザーがこのプロジェクトを **trust して初めてロードされます**（untrusted の間は無視される）。
生成しただけでは有効にならないため、完了報告で必ず trust 手順を案内してください（Phase 13）。

**よくあるアンチパターンと是正**:
- 同じ事実を CLAUDE.md と AGENTS.md の両方に書く → 片方だけ更新されて食い違う。**AGENTS.md に 1 回だけ書き、CLAUDE.md は `@AGENTS.md` で取り込む**
- 「編集後は必ず lint / format」と散文で書く → 守られない。**PostToolUse hook** で実行する
- 「絶対に X しない」と散文で書く → 守られない。**PreToolUse hook** か、Codex なら **rules の `decision = "forbidden"`** でブロックする
- 「.env は読まない」と散文で書く → 守られない。Claude Code なら **permissions の deny**（`Read(./.env)`）で拒否する
- 30行の手順を CLAUDE.md / AGENTS.md に書く → コンテキストを浪費。**skill** に切り出す（呼び出し時のみロード）
- ディレクトリ限定の規約をルートに書く → 無駄。**ネスト AGENTS.md** に置く
- 「編集前に必ず architecture.md を読む」と書く → 毎回の読み込みで浪費。**どの作業のときにどの文書を読むか**をトリガーで示す
- 「最後に必ず検証」「実装後は必ずテスト」を複数の文書に書く、「サブエージェントに検証させる」と書く →
  どちらのモデルも指示なしで自己検証する。**確認なしで回してよいゲートと完了条件を 1 か所に書き**、確実に走らせたいなら Stop hook にする
- 「よく考えてから答える」「推論を応答に書き出す」と書く → Opus 5.5 の思考は常時オンで、量は effort で決まる。
  **指示ごと削除**する（後者は `reasoning_extraction` として拒否されることもある）
- 思考を減らそうと「考えすぎない」と書く → 散文より **effort を下げる**ほうが確実に効く
- 冗長な応答を effort を下げて抑えようとする → effort が制御するのは思考量。**長さは明示的に指示**する
- レビュー指示に「重大な問題だけ報告」と書く → 文字通り守って報告が減る。**全件報告させ、絞り込みは別パス**で行う
- UI 生成で「AI っぽい見た目を避ける」と書く → 別の定番スタイルに置き換わるだけ。**避けるパターンを具体名で列挙**する
- 数ファイルの調査までサブエージェントに投げる → **委譲の下限と上限を明示**する

---

## Opus 5.5 / GPT-6.2 Sol 向けの校正（前提とするモデル挙動）

どちらのモデルも「足場（scaffolding）」を減らしたほうが良く動きます。
**旧世代向けの指示を消し、「完了条件」「確認なしで進めてよい範囲」と、各モデルで変わった点だけを足す**のが要点です。
Opus 5.5 では Opus 5 向けのプロンプトがそのまま機能するため、Opus 5 向けに入れた冗長さ・過剰検証・スコープの指示は出発点として残します。
GPT-6.2 Sol の行は、GPT-6.2 ファミリー（Sol を含む）向けの公式プロンプトガイドと Codex のモデル一覧にもとづきます。
ただし「許可待ちで止まる」「skill との食い違い」「広い description」は GPT-6 系の公式ガイド（主に Astra 向け）、
「既定で簡潔」は公式ガイドが Astra での観察として書いたもの、「軽い制限」は GPT-6.1 Sol の system card の数値です。

| モデル | 挙動 | 旧世代向けによく書かれた指示 | 本セットアップでの扱い |
|-------|------|------------------------|--------------------|
| 両方 | 指示なしで自己検証し、テストも自分で回す | 「最後に検証ステップを入れる」「実装後は必ずビルド・lint・テスト」を各文書で繰り返す | 書かない。確認なしで回してよいゲートと完了条件を AGENTS.md に 1 回だけ書き（Phase 1）、検証が落ちたままの停止は Stop hook で止める（Phase 7） |
| 両方 | 意図を汲んで自分で判断できる | 「不明点は必ず確認」 | 「成果物が変わるときだけ確認し、それ以外は仮定を書いて進む」（Phase 1） |
| 両方 | タスクの範囲を自分で広げがち | （なし） | スコープ固定を明記（Phase 1） |
| Opus 5.5 | 思考は常時オン（無効化不可）。量は effort で決まる | 「よく考えてから答える」「推論を書き出す」 | 書かない。思考量は effort で配分（Phase 5・6・8） |
| Opus 5.5 | effort の既定が `medium`。`medium` で Opus 5 の `high` 相当以上。同じ段階なら Opus 5 より多く考える | `effortLevel: xhigh` の固定運用 | `medium` を基準に、重い作業だけ `high`。`xhigh` / `max` は効果を確かめた作業に限る |
| Opus 5.5 | トップレベルの `effortLevel` が効かない | `settings.json` の `"effortLevel"` | 変えるなら `modelSettings."claude-opus-5-5".effortLevel`（Phase 8） |
| Opus 5.5 | 作業報告が明快。長い作業では途中報告だけで手を止めることがある | 実況の細かい指定 | 頻度の指定は短く残し（Phase 2）、「要約だけ書いて止まらない」を明記（Phase 1） |
| Opus 5.5 | 並列サブエージェントでの長時間作業が得意 | 「積極的に委譲する」 | 小さな作業まで投げないよう、委譲の下限・上限は維持（Phase 2・6） |
| Opus 5.5 | コードレビューで見つけるバグが増え、誤検知が減った | 「重大な問題だけ」「保守的に指摘」 | 全件を深刻度付きで報告させる（Phase 5・6） |
| Opus 5.5 | 指示のない UI 生成は定番スタイルに寄る | 「AI っぽさを避ける」 | 避けるパターンを具体名で列挙する（Phase 4） |
| GPT-6.2 Sol | 何をもって完了かを伝えると最後まで進む。安全と明示されない操作は許可待ちで止まる | （なし） | 完了条件と確認なしで進めてよい操作を明記（Phase 1）し、rules の allow でも宣言する（Phase 9） |
| GPT-6.2 Sol | 進め方の細かい判断は任せてよい。公式ガイドは AGENTS.md を「コード・テスト・文書から推測できない要件と規約」と、プロジェクトが依存するワークフローに絞るよう勧める | 「編集前に毎回ドキュメントを読む」「小さな変更でもリポジトリ全体を確認」、固定の「調査 → 実装 → 検証」手順 | 書かない。文書は読むタイミング（トリガー）付きで示す（Phase 1・3） |
| GPT-6.2 Sol | 公式ガイドは、独立して進められる部分がある作業では「必要に応じてサブエージェントを使う」と伝え、終えるときに起動したバックグラウンドジョブと一時ファイルを片付けさせるよう勧める | （なし） | AGENTS.md に 1 行ずつ書く（Phase 1） |
| GPT-6.2 Sol | 既定で簡潔・直接的 | 「簡潔に」を繰り返す | 応答の長さの指示は CLAUDE.md 側（Opus 5.5 向け）にだけ置き、AGENTS.md には書かない（Phase 1・2） |
| GPT-6.2 Sol | 軽い制限は越えて続行することがある（GPT-6.1 Sol の system card: Sol 23.5% / Astra 17.4%。6.2 の数値は未確認） | 「絶対に X しない」を散文で繰り返す | 散文の禁止は一覧にとどめ、rules の forbidden / PreToolUse hook で強制する（Phase 7・9） |
| GPT-6.2 Sol | skill と他の指示が食い違うと、作業を止めて判断を仰ぐことがある | （なし） | 「ユーザーの指示が skill の記述より優先」と AGENTS.md に 1 行書く（Phase 1） |
| GPT-6.2 Sol | 細かいレシピがなくても手順を組める。広い description の skill は関係の薄い話題でも発動する | 広い description、細かい手順のレシピ | description は具体的な操作をトリガーにし、要件と制約だけ残してレシピは削る（Phase 5） |
| GPT-6.2 Sol | reasoning effort は `low` / `medium` / `high` / `xhigh` / `max` / `ultra`。Codex での既定は `low`。`none` / `minimal` は使えない | （なし） | 散文に書かず、agents と config.toml の `model_reasoning_effort` で決める（Phase 0-B・6・10） |

コンテキストは Opus 5.5 が 1M トークン、GPT-6.2 Sol は Codex の既定で 500K トークンです。
どちらでも常時ロードのコストと注意の希釈は残るため、**CLAUDE.md は 200 行以内、AGENTS.md はスリムに**の原則は維持してください。

---

## Phase 0: 調査

まず以下を調べ、結果を内部メモとして保持してください（出力不要）。

### 0-A: リポジトリ調査

特に 9〜13 は後続の permissions / rules / hooks / skills / ネスト AGENTS.md / effort の材料になるため重点的に。

1. 既存の CLAUDE.md / AGENTS.md / .claude/ / .codex/ / .agents/ の有無を確認し、あれば内容を読み込む（後続 Phase でマージするため）
2. ルートの全ファイル・フォルダ構成を把握する
3. package.json / pyproject.toml / Cargo.toml / go.mod / pom.xml など、パッケージ定義ファイルを探し、存在すれば scripts / dependencies / devDependencies を読み込む
4. README.md が存在すれば読む
5. .env.example / docker-compose.yml / Makefile / Dockerfile が存在すれば読む
6. src/ / app/ / lib/ などのメインディレクトリ構成を把握する
7. テストファイルのパターン（__tests__/ / spec/ / tests/ など）を確認する
8. CI 設定（.github/workflows/ / .circleci/ / .gitlab-ci.yml など）を確認する
9. **lint / format / test の実コマンド**を特定する（PostToolUse hook と Stop の完了ゲートの材料）
10. **機密ファイルと壊すと困る不変条件**を洗い出す（.env などの機密、生成物ディレクトリ、リネーム禁止パス、危険コマンドなど。permissions / rules / PreToolUse hook の材料）
11. **ディレクトリ単位で異なる規約**を探す（例: API 層の入力検証、UI 層のアクセシビリティやデザイン。ネスト AGENTS.md の材料）
12. **繰り返し行う複数ステップの手順**を探す（例: リリース、機能追加フロー。skill の材料）
13. **作業の重さの偏り**を把握する（例: 定型で軽い生成作業と、横断的で重いリファクタ。skill / subagent の effort を振り分ける材料）

### 0-B: モデルと effort の確認

- **Claude Code**: 前提モデルは `claude-opus-5-5` です。agents の `model` は固定せず（既定の `inherit`）、effort だけを配分します（Phase 5・6・8）。
- **Codex CLI**: 前提モデルは `gpt-6.2-sol` です。アカウントで使えるかを確認し、サブエージェントと config.toml に設定するモデルと reasoning effort を決めてください。

1. `~/.codex/config.toml` を読み、現在設定されているモデルと reasoning effort を確認する（読むだけ。変更は Phase 10 で提案にとどめる）
2. `gpt-6.2-sol` が利用可能か確認する（`/model` の一覧に出るか、`codex exec -m gpt-6.2-sol` が通るか）。
   一覧にない場合は、まず Codex CLI を最新版に更新する（モデル一覧に入ったのは 0.171.0）。
   対応するプランとクライアントでだけ使えるため、それでも使えない場合は一覧にある最上位モデルに置き換え、完了報告に記載する
3. 以下の観点でモデルと reasoning effort（`low` / `medium` / `high` / `xhigh` / `max` / `ultra`。Codex での既定は `low`）を決める：
   - **デフォルト (config.toml)**: `gpt-6.2-sol`。既定の `low` から始め、計画が要る作業が多ければ `medium`、重い実装が中心なら `high`
   - **coder**: `gpt-6.2-sol`、`medium`（重い実装が中心なら `high`）
   - **reviewer / planner**: `gpt-6.2-sol`、`high`（読み取り専用で判断の質を重視）。
     最も難しい設計判断が多く、2 の一覧に `gpt-6.2-astra` があれば Astra を選んでもよい（Sol よりクレジット単価が高い）
   - **researcher**: 軽量モデル（例: `gpt-6-luna`）を `low` 〜 `medium` で。2 で確認した一覧にない場合は Sol の `low`。
     公式ガイドの目安は、概観の調査が `medium`、複数システムにまたがる原因の追跡が `high`、複数の原因が絡む調査が `xhigh`
   - `xhigh` / `max` は、効果を確かめた難しい設計判断やデバッグに限る。`ultra`（最大の推論に自動のタスク委譲が付く）は既定にしない
   - Sol は `none` / `minimal` を受け付けない。プロジェクト側の既存設定にあれば `low` に置き換える

結果を以下の形式で内部メモにまとめてください（Phase 6, 10 で使用）：

```
モデル選定結果（Codex CLI）:
- coder: {モデル名} (reasoning_effort: {low〜max})
- researcher: {モデル名} (reasoning_effort: {low〜max})
- planner: {モデル名} (reasoning_effort: {low〜max})
- reviewer: {モデル名} (reasoning_effort: {low〜max})
- デフォルト: {モデル名} (reasoning_effort: {low〜max})
- 選定理由: {なぜこのモデル・effort にしたか。Sol を使えなかった場合はその旨}
```

---

## Phase 1: AGENTS.md の作成（両ツール共通の事実）

リポジトリルートに `AGENTS.md` を生成してください。Codex CLI のエントリーポイントで、Claude Code も CLAUDE.md の `@AGENTS.md` 経由で同じ本文を読みます。
**両ツールが読むため、ツール固有の指示は見出しで対象を明示してください**（無印だと、片方のツールに合わない指示が混ざる）。
**Phase 0 の調査結果を必ず反映し、プロジェクト名・技術スタック・コマンドは実際のものを記載してください。**

Codex CLI は以下の順序で AGENTS.md を自動的に読み込みます（全階層の合計の上限は既定 32 KiB の `project_doc_max_bytes`）：
1. `~/.codex/AGENTS.md`（グローバル）
2. `&lt;リポジトリルート>/AGENTS.md`（プロジェクト共通）
3. ルートから作業ディレクトリまでのパス上にあるネスト AGENTS.md

```markdown
# AGENTS.md

このリポジトリで作業するエージェント（Codex CLI / Claude Code）共通の指示です。
Claude Code は `CLAUDE.md` の `@AGENTS.md` から読み込みます。

## プロジェクト概要

（Phase 0 の調査から読み取ったプロジェクトの目的・概要を記載）

技術スタック: （実際のスタックを記載）

## ドキュメント参照

以下のファイルは、表のタイミングに当てはまるときだけ読んでください。
毎回の編集前に読む必要はありません（Phase 3 で実際に作成した文書だけを表に載せる）：

| ファイル | 読むタイミング |
| --- | --- |
| `.agents/docs/COMMANDS.md` | 開発サーバー・ビルド・テスト・lint のコマンドや、完了時の報告の形を確認するとき |
| `.agents/docs/ARCHITECTURE.md` | 複数のモジュールにまたがる変更をする、またはデータの流れを追うとき |
| `.agents/docs/CODING_STANDARDS.md` | 新しいファイル・モジュールを追加する、命名・配置を決める、認証・入力値・機密情報を扱うとき |
| `.agents/docs/TESTING.md` | テストを追加する、またはテストの書き方を確認するとき |
| `.agents/docs/GIT_WORKFLOW.md` | コミット・ブランチ・PR を作成するとき |
| `.agents/docs/ENVIRONMENT.md` | 環境セットアップ・環境変数を扱うとき |

## 作業の進め方

- 依頼の意図を文脈から汲んで進める。確認するのは、解釈によって成果物が変わるときだけ。それ以外は仮定を書いて進める。
- 要求された範囲を、要求された粒度で仕上げる。頼まれていない改善・リファクタを足さない。気づいた別の問題は報告に書く。
- 完了条件: 依頼された変更がすべて入り、関連するテスト・lint・ビルドが通っていること。
  満たすまで途中報告で止まらない（次の手順を予告する要約だけでターンを終えない）。
  一部がブロックされたら残りを仕上げ、何が足りないかを書く。
- ローカルのテスト・lint・ビルド・型チェックは本番環境に触れない。いつ実行してもよく、
  自分の変更で落ちたものは直して再実行する。各ステップで承認を求めない。
- 終えるときは、自分が起動したバックグラウンドジョブ（dev サーバー・watcher など）を止め、作った一時ファイルを消す。

### Codex CLI 固有

- ユーザーの指示は skill の記述より優先する。食い違っても止まらず、ユーザーの指示に従って進める。
- 独立して進められる部分が複数ある作業では、必要に応じてサブエージェントを使う。
  並列で動かすときは、同時に走らせるビルド・テストの数を抑える。

## クイックリファレンス

よく使うコマンド（詳細は `.agents/docs/COMMANDS.md`）：

```bash
（package.json などから抜粋した最重要コマンドを3〜5個記載）
```

## ディレクトリ構成

```
（主要ディレクトリと役割だけをツリー形式で記載。ファイルごとの説明は書かない）
```

## 制御手段の所在

- 手続き（リリース・レビュー等）: `.claude/skills/`（Claude Code）・`.agents/skills/`（Codex CLI）
- 許可 / 禁止: `.claude/settings.json` の permissions・`.codex/rules/`
- 機械的な強制（禁止操作のブロック・編集後フォーマット・完了ゲート）: `.agents/hooks/`（`.claude/settings.json` と `.codex/config.toml` から呼ぶ）
- サブエージェント: `.claude/agents/`・`.codex/agents/`

## 禁止事項

（Phase 0 で洗い出した不変条件を短い箇条書きで。例: .env をコミットしない・dist/ を手で消さない）

> 散文の禁止は確率的にしか守られないため、一覧はここに残しつつ、
> 強制そのものは permissions / rules / hooks（Phase 7〜9）で決定論的に行います。
```

「作業の進め方」は両モデルの既定挙動（広がるスコープ・途中での停止・許可待ち）に合わせた校正です。
散文であっても常時ロードされる価値があるのはこの数行だけ、と考えてください。
「Codex CLI 固有」の 2 行は GPT-6 系 / GPT-6.2 の公式ガイドにもとづく指示です。
Claude Code の委譲の方針は CLAUDE.md 側に書きます（Opus 5.5 は委譲が活発なため、方針が逆向きになる）。

> **ここに書いてはいけないこと**: 「最後に必ず検証する」「ダブルチェックしてから答える」「サブエージェントに検証させる」といった
> 検証・再確認の指示と、「よく考えてから答える」「推論を書き出す」といった思考の指示。
> どちらのモデルも検証は指示なしで行い、思考量は effort で決まるため、書くと二重になり過剰検証でトークンを浪費します。
> 検証を確実に走らせたいなら散文ではなく Stop hook（Phase 7）で決定論的に実行してください。

---

## Phase 2: 【Claude Code】CLAUDE.md の作成（取り込み + Claude Code 固有）

リポジトリルートに `CLAUDE.md` を生成してください。先頭の `@AGENTS.md` で Phase 1 の本文を取り込み、
その下には **Claude Code にだけ効く内容**を書きます。AGENTS.md と同じ事実を書き写さないでください。

```markdown
@AGENTS.md

## Claude Code

### エージェント構成

`.claude/agents/` に定義されたサブエージェントをタスクに応じて選択・連携させます。

| エージェント | 役割 | 主な起動条件 |
|------------|------|------------|
| **researcher** | 調査・解析 | 多ファイルにまたがる原因調査・影響範囲の把握 |
| **planner** | 設計・計画 | 複数コミットに分かれる規模の方針決定 |
| **coder** | 実装 | 仕様確定済みの多ファイル実装 |
| **reviewer** | レビュー | PR / まとまった差分のレビュー依頼時 |

標準フロー（**大きく独立した作業のみ**）: researcher → planner → coder → reviewer
数ファイルで完結する変更は委譲せず、メインスレッドでそのまま実装する。
（表とフローは Phase 6 で実際に採用したエージェントに合わせて調整する）

### 作業の進め方（Claude Code 固有）

- サブエージェントへの委譲は、独立していて規模の大きい作業（広範囲の多ファイル調査など）に限る。
  数回のツール呼び出しで終わる作業や、自分の作業を検証する目的では使わない。1つで足りるなら1つ。
- 依頼に問題があると思ったら一言添えたうえで、依頼どおり最後まで完遂する。
- 応答は簡潔に。前置きと注意書きは短くし、本題に文量を割く。
  作業中の報告は着手時に1文、重要な発見や方針転換があったときだけ追加し、完了時は結論から書く。
- ディスクに書き出す文書（レポート・要約）は必要な内容を満たす長さに留め、水増しの節を足さない。
- 以前の発言の訂正は、ユーザーの判断が変わるときだけ行う。変わらない誤りは黙って直して進む。
```

「作業の進め方（Claude Code 固有）」は Opus 5.5 の既定挙動（活発な委譲・長さ）を抑えるための校正です。
応答の長さの指示をここにだけ置くのは、GPT-6.2 Sol が既定で簡潔なためです。

- 取り込む AGENTS.md と合わせて 200 行を超えそうなら、内容を `.agents/docs/` / skills / ネスト AGENTS.md に移し、ここにはポインタだけを残す
- 既存の CLAUDE.md にプロジェクトの事実（概要・コマンド・構成）があれば AGENTS.md へ移し、Claude Code 固有の内容だけを残す
- 大きな役割変更（例: レビュー専用モード）が必要なら output style を、起動時だけ効かせたい補足があれば追加システムプロンプトを検討する。
  いずれも既定のコーディング指示を消さないこと（必要なら `keep-coding-instructions: true`）。不要ならスキップし、完了報告に記載する

---

## Phase 3: .agents/docs/ の作成（共有の詳細リファレンス＝事実）

`.agents/docs/` ディレクトリを作成し、以下の候補のうち **Phase 0 の調査で実質的な内容を書けるものだけ**を
生成してください（書くことがない文書を雛形だけで作らない）。
両ツールが AGENTS.md の「ドキュメント参照」の表から、必要なときだけ読みます。
**グローバル設定（`~/.claude/CLAUDE.md` / `~/.codex/AGENTS.md`）が無い環境でも品質基準が欠落しないよう、
プロジェクト内のファイルだけで自己完結させてください**（CODING_STANDARDS.md の品質ルール・セキュリティ）。
既存の `.claude/docs/*.md` や `.codex/*.md` があれば内容をここへ統合し、参照元を書き換えてください（元ファイルの削除は確認してから）。
一部の節だけ情報が足りない場合は「（未確認 - 要記入）」と記載し、文書ごとスキップした場合は完了報告にその旨を記載してください。

### .agents/docs/COMMANDS.md

package.json / Makefile / pyproject.toml などの実コマンドを列挙し、用途・実行タイミング・注意事項を記述する。

```markdown
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

## 作業完了時の報告
- 変更ファイル: `path/to/file`（変更内容の要約）
- 実行結果: ビルド ✅ / ❌、テスト ✅ X件通過 / ❌ X件失敗、lint ✅ / ❌（未導入ならその旨を明記）
```

### .agents/docs/ARCHITECTURE.md

Phase 0 で把握したディレクトリ構成・主要モジュール・データフローをもとに記述する。

```markdown
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

### .agents/docs/CODING_STANDARDS.md

既存コードから読み取れるスタイル・規則と、グローバル設定が無くても守る最低基準を記述する。

```markdown
# コーディング規約

## 言語・フレームワーク
...

## 命名規則
- （実際のコードから読み取ったルールを記載）

## ファイル・フォルダ構成のルール
- （実際の規則を記載）

## 品質ルール
- 既存スタイルに合わせる
- 型・インターフェースを明示する（型のある言語の場合）
- マジックナンバーは定数化する
- エラーハンドリングを省略しない

## コメント・ドキュメントのルール
- コメントは「なぜそうするか（Why）」を書く。「何をするか（What）」はコードが語る
- （その他のルールを記載）

## セキュリティ
- `.env` ファイルをコミットしない
- API キーや認証情報をコードに直書きしない
- HTML を直接挿入する操作（innerHTML 相当）は XSS リスクに注意する

## 禁止事項
- `console.log` などのデバッグ出力を残したままコミットしない
- （その他の禁止事項を記載）

> 機械的に強制できるもの（.env のコミット禁止など）は permissions / rules / hooks（Phase 7〜9）でも強制する。
```

### .agents/docs/TESTING.md

テストファイルの場所・使用フレームワーク・テストの種類を具体的に記述する（実行コマンドは COMMANDS.md に置く）。

```markdown
# テスト方針

## テストフレームワーク
- （実際のフレームワークを記載、または「未確認 - 要記入」）

## テストファイルの配置
- （実際のパターンを記載）

## テストの種類と使い分け
...

## カバレッジ基準
...

## 未導入項目の扱い
- lint やテストが未導入なら「未導入」と明記し、代替の検証（ビルド・型チェックなど）が通ることを完了条件にする

## テストを書く際の注意点
- （このリポジトリ固有の注意点を記載）
```

### .agents/docs/GIT_WORKFLOW.md

CI 設定・既存ブランチ・コミット履歴から読み取れる規則を記述する。

```markdown
# Git ワークフロー

## ブランチ戦略
- （CI 設定や既存ブランチから読み取ったルールを記載）

## コミットメッセージ規則
- （既存コミット履歴のスタイルに合わせて記載）

## PR / MR のルール
- （ルールがあれば記載、なければ「未確認 - 要記入」）

## CI/CD パイプライン
...
```

### .agents/docs/ENVIRONMENT.md

.env.example や docker-compose.yml から読み取れる環境変数・起動方法を記述する。

```markdown
# 環境設定

## 必須環境変数
- （.env.example から読み取った変数を列挙、または「未確認 - 要記入」）

## ローカル開発環境のセットアップ
...

## Docker / コンテナ
...

## 環境ごとの差異（開発・ステージング・本番）
...
```

---

## Phase 4: ネスト AGENTS.md の作成（ディレクトリ固有の規約・任意）

Phase 0 の「ディレクトリ単位で異なる規約」が見つかった場合のみ作成してください。
該当ディレクトリを扱うときだけ読まれるので、常時ロードのコンテキストを節約できます。

- **本文は `&lt;ディレクトリ>/AGENTS.md` に書く**（Codex CLI はルートから作業ディレクトリまでのパス上の AGENTS.md を読む）
- **Claude Code 向けに、同じディレクトリに `@AGENTS.md` の 1 行だけの `CLAUDE.md` を置く**。
  Claude Code はそのディレクトリのファイルを読み書きしたときにネストの CLAUDE.md を読み込み、import で同じ本文を共有する
  （CLAUDE.md があるディレクトリの AGENTS.md は自動では読まれないため、二重には読まれない）

例 `src/api/AGENTS.md`:

```markdown
# src/api/ 固有の規約

ルートの AGENTS.md に加えて、このディレクトリでは以下を守る。

- すべての入力をスキーマで検証してからハンドラに渡す
- エラーは統一フォーマットで返す
```

UI 層を持つリポジトリでは、UI ディレクトリのネスト AGENTS.md にデザイン指定を置くと効きます。
Opus 5.5 は指定のない UI 生成で定番スタイルに寄り、「AI っぽい見た目を避ける」のような一般論では別の定番に置き換わるだけです。
既存 UI から読み取れる方針と、**避けるパターンの具体名**（例: オフホワイト背景、見出しの斜体アクセント、
「01/02/03」の番号付きセクション、等幅ラベル、ピル型ボタン）を列挙してください。

ディレクトリで切れない規約（例: `**/*.test.ts` だけに効く規約）は、Claude Code では `.claude/rules/*.md` の `paths:` で範囲を絞れます
（Codex CLI には同等の仕組みがないので、AGENTS.md 本体に 1 行で要点を書く）。

```markdown
---
paths:
  - "**/*.test.ts"
---
# テストファイルの規約
- （規約を記載）
```

該当する規約がなければこの Phase はスキップし、完了報告にその旨を記載してください。

---

## Phase 5: skills の作成（手続き型ワークフロー）

「複数ステップの手順」を skill に切り出してください。
どちらのツールも `SKILL.md`（frontmatter の `name` / `description` + 本文）を持つディレクトリ形式で、
`description` は起動時にロードされ、本体（手順）は呼び出し時のみ読まれます。

| | Claude Code | Codex CLI |
|---|---|---|
| 置き場所 | `.claude/skills/&lt;name>/SKILL.md` | `.agents/skills/&lt;name>/SKILL.md`（作業ディレクトリからリポジトリルートまでスキャン。個人用は `~/.agents/skills/`） |
| 明示呼び出し | `/&lt;name>` | `/skills` または `$` メンション |
| 勝手に実行されると困る手順 | frontmatter に `disable-model-invocation: true` | description に「ユーザーが明示的に指示したときのみ実行する」と明記 |

**本文は両ツールで同じにし、Claude Code 固有の frontmatter（`disable-model-invocation` / `effort`）は `.claude/skills/` 側にだけ書いてください**。

書き方（両モデル共通）：
- **description は具体的な操作をトリガーにする**（「タグを打つ・CHANGELOG を更新するとき」など）。
  「リリースに関すること全般」のような広い description は、関係の薄い話題でも発動する
- **本体は要件と制約を残し、固定のレシピは削る**。どちらのモデルも手順を自分で組み立てられるため、
  守るべき条件（順序が意味を持つ箇所・触ってはいけないもの・完了条件）だけを書く
- 詳細が長くなる場合は本体を短く保ち、補足ファイルに分けて必要なときだけ読ませる

Phase 0 で見つかった手順から、実在するものだけ生成してください（例）:
- `release` — リリース / デプロイ手順
- `code-review` — レビュー観点チェックリスト
- `add-feature` — このリポジトリ標準の機能追加フロー

例 `.claude/skills/release/SKILL.md`（`.agents/skills/release/SKILL.md` は同じ本文で、frontmatter を `name` と `description` だけにする）:

```markdown
---
name: release
description: バージョンタグを打つ・CHANGELOG を更新する・本番デプロイを行うときに使う。ユーザーが明示的にリリースを指示したときのみ実行する。
disable-model-invocation: true
effort: low
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

Claude Code の frontmatter の `effort`（`low` / `medium` / `high` / `xhigh` / `max`）は、その skill が動いている間だけ
セッションの effort を上書きします。Opus 5.5 は `medium`（既定）で Opus 5 の `high` 相当以上の品質が出るため、
手順が決まっている定型作業は `low` に落とすとトークンと待ち時間が減り、横断的な実装フローは `high` に上げられます。
`xhigh` / `max` は効果を確かめた作業に限ってください。指定しなければセッションの設定を引き継ぎます。

明確な手順が見当たらない場合も、最低限 `code-review` skill だけは作成してください。
その本文に「重大な問題だけ報告」「保守的に指摘」といった絞り込みを書かないこと。
Opus 5.5 は見つけるバグが多く誤検知も少ない一方、この種の指示を文字通り守って報告を減らします。
**全件を深刻度付きで報告させ、取捨選択は人間または別パス**で行ってください。

---

## Phase 6: サブエージェントの作成（取捨選択制）

サブエージェントは**分離したコンテキストで独立タスクを実行**し、最終サマリーのみを親に返します。
価値の源泉はコンテキスト分離とツール・sandbox の制限であり、役割分担そのものではありません。

- 組み込みとの重なり: Claude Code には Explore / Plan、Codex CLI には default / worker / explorer があります。
  **researcher は Explore / explorer と、planner は Plan と、coder は worker とほぼ重複**します
  （Codex では組み込みと同名で定義すると上書きできます）
- **Opus 5.5 は並列サブエージェントでの長時間作業が得意**なぶん、定義を増やすほど小さな作業まで投げられてコストと時間が膨らみます
- coder への委譲は、メインスレッドが実装コンテキストを失うトレードオフがあります

以下の 4 役から**このリポジトリに必要なものだけ**を選んでください
（迷ったら、組み込みに存在せず read-only でリスクのない reviewer だけでもよい）。
**Phase 0 の調査結果を反映し、プロジェクトに適した指示を記載してください。**

### ツールごとの形式

| | Claude Code | Codex CLI |
|---|---|---|
| ファイル | `.claude/agents/&lt;name>.md`（frontmatter + 本文） | `.codex/agents/&lt;name>.toml` |
| 本文 | frontmatter の後の Markdown | `developer_instructions = """..."""` |
| 権限 | `tools:`（下の各役に記載） | 読み取り専用の役は `sandbox_mode = "read-only"` |
| モデル | `model` は書かず既定の `inherit` | `model` と `model_reasoning_effort` は Phase 0-B の結果（`model` だけ書くと effort は親の値を継承する） |
| effort | `effort:`（下の各役に記載。Opus 5.5 の既定は `medium`） | 同上 |

`description` は両ツールで同じ文面にし、起動条件だけでなく**委譲に値する規模の下限**を必ず含めてください
（「数回のツール呼び出しで終わるものは委譲しない」の一文が効きます）。
本文も両ツールで同じでよく、**完了条件**を含めてください（完了条件が明確なほど、途中報告で止まらず最後まで進むため）。

形式の例（reviewer）:

`.claude/agents/reviewer.md`
```markdown
---
name: reviewer
description: |
  レビュー担当エージェント。（下の reviewer の description）
tools: Read, Glob, Grep, Bash
effort: high
---

（下の reviewer の本文）
```

`.codex/agents/reviewer.toml`
```toml
name = "reviewer"
description = "レビュー担当エージェント。（下の reviewer の description）"
model = "{Phase 0-B で選定したモデル}"
model_reasoning_effort = "{Phase 0-B で選定した reasoning_effort}"
sandbox_mode = "read-only"
developer_instructions = """
（下の reviewer の本文）
"""
```

### researcher

- Claude Code: `tools: Read, Glob, Grep, Bash, WebSearch`、`effort: low` / Codex CLI: `sandbox_mode = "read-only"`
- description:
  多数のファイルにまたがり、数回のツール呼び出しでは終わらない調査のときだけ起動する
  （既存コードの構造・依存関係・影響範囲の横断的な把握、特定できていないエラーの根本原因、セキュリティリスク・性能ボトルネックの洗い出し）。
  1〜2ファイルを読めば分かる調査、外部仕様の単発確認には使わない。

本文:

# Researcher Agent

ファイルは変更しない。

## ミッション
タスクに着手する前に「何が起きているか」「何が必要か」を把握する。
推測で進まず、証拠（コード・ログ・仕様）に基づいて結論を出す。

## 行動原則
- 仮説を立て、コードやファイルで確かめる
- 調査結果は「事実」「推測」「不明点」を分けて報告する
- 不明点がある場合は追加調査すべき箇所を列挙する

## 完了条件
- 依頼された問いに、ファイルパスと行番号付きの根拠で答えている

## 出力フォーマット

```
## 調査結果

### 事実（確認済み。ファイルパス:行番号）
- ...

### 影響範囲
- ...

### リスク・懸念点
- ...

### planner / 実装への引継ぎ事項
- ...
```

### planner

- Claude Code: `tools: Read, Glob, Grep`、`effort: medium` / Codex CLI: `sandbox_mode = "read-only"`
- description:
  複数コミットに分かれる規模のタスクで、着手前に方針を決める必要があるときだけ起動する
  （調査が済んで実装方針を決めるとき、複数のアプローチから選ぶとき、破壊的変更・リファクタリング・アーキテクチャ変更のとき）。
  1コミットで終わる修正や、手順が自明なタスクには使わない。

本文:

# Planner Agent

ファイルは直接変更しない。

## ミッション
調査結果をもとに「何をどの順序で実装するか」の計画を立てる。
実装に入る前に、実装担当が迷わず動けるレベルまで計画を具体化する。

## 行動原則
- トレードオフを明示する（速度 vs 安全性、シンプル vs 拡張性 など）
- 実装ステップは「1ステップ = 1つのコミット粒度」を目安にする
- リスクの高いステップには事前確認ポイントを設ける
- 後方互換性と移行手順を考慮する

## 出力フォーマット

```
## 実装計画

### 採用アプローチ
（選んだ方針とその理由）

### 却下したアプローチ
（検討したが却下した案と理由）

### 実装ステップ
1. [ ] ステップ1: ...（対象ファイル・依存するステップ・リスク low / medium / high）
2. [ ] ステップ2: ...

### リスクと対策
- リスク: ... → 対策: ...

### 実装への引継ぎ事項
- ...
```

### coder

- Claude Code: `tools: Read, Write, Edit, Glob, Grep, Bash`、`effort: high` / Codex CLI: sandbox の指定なし（親の設定を継承）
- description:
  仕様が確定していて、かつ複数ファイルにまたがる規模の実装のときだけ起動する
  （計画が確定したとき、複数ファイルの機能追加・リファクタリングを一括で行うとき）。
  1〜数ファイルの修正やテストの追記は委譲せず、メインスレッドで実装する（委譲するとメインスレッドが実装コンテキストを失う）。

本文:

# Coder Agent

## ミッション
計画に従い、動作する・テストが通る・レビューに耐えうるコードを書く。

## 行動原則
- 既存コードのスタイル・命名規則・ファイル構成に合わせる（`.agents/docs/CODING_STANDARDS.md`）
- 変更前に対象ファイルを読み、コンテキストを把握してから書く
- テストがある領域の変更では、対応するテストを追加・修正する
- 与えられた計画の範囲を実装する。気づいた別の改善点は実装せず、完了報告に挙げる

## 完了条件
- 計画のすべてのステップが実装され、スタブ・TODO・「後で実装」が残っていない
- 関連するテスト・lint・ビルドが通っている。どれも本番環境に触れないので、
  実行し、自分の変更で落ちたものは直して再実行する。各ステップで承認を求めない
- デバッグ出力（console.log / print など）と `.env`・機密情報をコミットに含めていない

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

### reviewer

- Claude Code: `tools: Read, Glob, Grep, Bash`、`effort: high` / Codex CLI: `sandbox_mode = "read-only"`
- description:
  レビューを明示的に求められたとき、または PR / ブランチ単位の差分をまとめて見るときに起動する。
  自分が書いたコードの確認目的では起動しない（実装時に自己検証済みのため二重になる）。

本文:

# Reviewer Agent

ファイルは直接変更しない。

## ミッション
差分を多角的な視点でレビューし、本番投入前の最終品質ゲートとなる。
承認・差し戻しを明確に伝え、差し戻しの場合は具体的な改善指示を出す。

## 報告の方針
見つけた問題は**深刻度で絞らずすべて報告**し、深刻度のラベルを付ける。
「重大なものだけ」に自分で絞ると、必要な指摘まで落ちる。取捨選択は人間が行う。

## レビュー観点（優先順）
1. **正確性**: 仕様・要件を満たしているか
2. **セキュリティ**: 脆弱性（XSS・インジェクション・認証）・機密情報の露出がないか
3. **堅牢性**: エラーハンドリング・エッジケースの対処はあるか
4. **パフォーマンス**: 明らかなボトルネック・N+1・不要な再レンダー・メモリリークはないか
5. **可読性**: 命名・構造・重複は適切か
6. **テスト**: 重要なケースがカバーされているか
7. **一貫性**: 既存コードのスタイルに合っているか

## 出力フォーマット

```
## レビュー結果: ✅ 承認 / ⚠️ 要修正 / ❌ 差し戻し

### 良い点
- ...

### 🔴 必須修正（マージ前に直す）
- [ ] ファイル名:行番号 - 問題と修正方法

### 🟡 推奨修正（ブロックしない）
- [ ] ファイル名:行番号 - 提案内容

### 🟢 提案（任意）
- [ ] ファイル名:行番号 - 提案内容

### 総評
...
```

> reviewer を採用する場合も、「実装が終わったら必ず reviewer を回す」というルールは
> CLAUDE.md / AGENTS.md に書かないでください。どちらのモデルも実装時に自分で検証するため二重になります。
> 人間がレビューを求めたとき、または PR 単位でまとめて回すのが費用対効果に見合います。

### サブエージェントの活用例

エージェントはプロンプト内で名前を指定して呼び出せます（Codex CLI の例。Claude Code では explorer を researcher、worker を coder に読み替える）：

```
設定モーダルの保存が失敗する原因を調査してほしい。
explorer で原因を特定し、planner で修正方針を立て、
worker で最小限の修正を実装し、reviewer でレビューしてください。
```

---

## Phase 7: hook スクリプトの作成（両ツール共通の決定論的ガードレール）

「毎回必ず」「絶対しない」を散文に書く代わりに、ここで機械的に強制します。
使い分け: **ファイル・コマンド単位の静的な許可 / 禁止は permissions（Claude Code）・rules（Codex CLI）**、
**コマンド内容を見た動的な判定や編集後の自動実行、止める前の検証は hooks** です。

hook スクリプトは、両ツールに共通する入出力だけを使って `.agents/hooks/` に 1 本ずつ置き、
Phase 8（Claude Code）と Phase 9（Codex CLI）の設定から同じファイルを呼びます：

- 入力は stdin の JSON（`tool_input.command`・`tool_input.file_path`・`stop_hook_active` など）
- PreToolUse のブロックは `permissionDecision: "deny"` を含む JSON を stdout に出して exit 0
- Stop で作業を続けさせるときは exit 2 + stderr に理由。止めてよいときは stdout に `{}` を出して exit 0（Codex CLI は exit 0 のとき JSON が必須）

Phase 0 で洗い出した「壊すと困る不変条件」「lint / format / test コマンド」を反映してください。
該当する強制対象がない hook は作らなくて構いません（作らなかったものは Phase 8・9 の登録からも外す）。

### .agents/hooks/guard.sh（PreToolUse — JSON で deny）

危険・禁止のコマンドを決定論的にブロックします。Phase 0 の不変条件に合わせて条件を調整してください。

```bash
#!/usr/bin/env bash
# deny の JSON を出して exit 0 = ブロック、何も出さず exit 0 = 許可（Claude Code / Codex CLI 共通）
INPUT=$(cat)
cmd=$(printf '%s' "$INPUT" | python3 -c 'import json,sys; print(json.load(sys.stdin).get("tool_input",{}).get("command",""))' 2>/dev/null || true)
[ -z "$cmd" ] &amp;&amp; exit 0

deny() {
  python3 -c "import json,sys; print(json.dumps({'hookSpecificOutput':{'hookEventName':'PreToolUse','permissionDecision':'deny','permissionDecisionReason':sys.argv[1]}}, ensure_ascii=False))" "$1"
  exit 0
}

# 例: 生成物ディレクトリの削除をブロック（rm -fr / rm -r -f の表記ゆれも拾う。実プロジェクトに合わせて調整）
if printf '%s' "$cmd" | grep -qE 'rm[[:space:]]+(-[a-zA-Z]+[[:space:]]+){1,3}(\./)?(dist|build)([[:space:]/]|$)'; then
  deny "生成物ディレクトリは手で消さない（ビルドスクリプトが管理）"
fi

exit 0
```

### .agents/hooks/post-edit.sh（PostToolUse — 編集後に format）

Phase 0 の実コマンドを使用します。format が存在しない場合はこの hook を作らないでください。

```bash
#!/usr/bin/env bash
INPUT=$(cat)
# Edit / Write は tool_input.file_path、Codex の apply_patch はパッチ本文から対象パスを取り出す
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
  case "$f" in /*) ;; *) f="${CWD:-.}/$f" ;; esac
  # 実プロジェクトの format コマンドに置き換える
  npx prettier --write "$f" >/dev/null 2>&amp;1 || true
done &lt;&lt;&lt; "$FILES"
exit 0
```

### .agents/hooks/stop-gate.sh（Stop — 完了ゲート）

「最後に必ず検証する」を散文で書く代わりに、止まる直前に検証を決定論的に走らせます。
Opus 5.5 は長い作業の途中で報告だけ書いてターンを終えることがあり、散文の完了条件だけでは
検証が落ちたまま終えることを防げないため、ここで止めます（exit 2 と stderr の理由で作業を続けさせる）。
変更がないときは何もせず、続行させるのは 1 回だけです（`stop_hook_active` で無限ループを防ぐ）。
検証コマンドは Phase 0 の lint / 型チェックなど**数十秒以内で終わるもの**にしてください（止まるたびに走るため、
時間のかかる全テストは入れない）。該当するコマンドがなければこの hook は作らないでください。

```bash
#!/usr/bin/env bash
# exit 2 + stderr = 止めずに続けさせる。止めてよいときは {} を出して exit 0（Codex CLI は JSON が必須）
INPUT=$(cat)
cd "$(git rev-parse --show-toplevel 2>/dev/null || echo .)" || { echo '{}'; exit 0; }
# 変更がなければ検証しない（質問への回答だけのターンなどで毎回走らせない）
[ -z "$(git status --porcelain 2>/dev/null)" ] &amp;&amp; { echo '{}'; exit 0; }
# 実プロジェクトの検証コマンドに置き換える（lint / 型チェックなど、数十秒以内で終わるもの）
npm run check >/dev/null 2>&amp;1 &amp;&amp; { echo '{}'; exit 0; }
# 続行させるのは 1 回だけ。2 回目の Stop（stop_hook_active が true）は止める
ACTIVE=$(printf '%s' "$INPUT" | python3 -c 'import json,sys; print(json.load(sys.stdin).get("stop_hook_active", False))' 2>/dev/null)
[ "$ACTIVE" = "True" ] &amp;&amp; { echo '{}'; exit 0; }
echo "npm run check が失敗しています。原因を直して再実行してから終えてください。直せない場合は、何が残っているかを報告して終えてください。" >&amp;2
exit 2
```

作成した hook スクリプトには実行権限を付与してください（`chmod +x .agents/hooks/*.sh`）。

---

## Phase 8: 【Claude Code】permissions と hooks の登録（.claude/settings.json）

```json
{
  "permissions": {
    "deny": [
      "Read(./.env)",
      "Read(./.env.local)",
      "Read(./secrets/**)"
    ]
  },
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Bash",
        "hooks": [
          { "type": "command", "command": "\"$CLAUDE_PROJECT_DIR\"/.agents/hooks/guard.sh" }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          { "type": "command", "command": "\"$CLAUDE_PROJECT_DIR\"/.agents/hooks/post-edit.sh" }
        ]
      }
    ],
    "Stop": [
      {
        "hooks": [
          { "type": "command", "command": "\"$CLAUDE_PROJECT_DIR\"/.agents/hooks/stop-gate.sh" }
        ]
      }
    ]
  }
}
```

- `permissions.deny` は Phase 0 の機密ファイルに合わせて調整する（`.env.example` のような共有用の雛形まで塞がない）
- hook のパスは cwd の移動に耐えるよう `$CLAUDE_PROJECT_DIR` 経由で指定する
- 重い実装が中心のリポジトリなら、チーム共通の既定として effort を上げてよい。
  Opus 5.5 には**トップレベルの `"effortLevel"` が効かない**ため、モデル単位で指定する：
  `"modelSettings": { "claude-opus-5-5": { "effortLevel": "high" } }`（`low` / `medium` / `high` / `xhigh` / `max`）。
  既定は `medium` なので、変える理由がなければこのキーは書かない
- 個人差のある設定は git 管理外の `.claude/settings.local.json` に置く

---

## Phase 9: 【Codex CLI】rules と hooks の登録（.codex/rules/・.codex/config.toml）

### .codex/rules/（コマンドの許可 / 拒否）

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
- Phase 0 で特定した test / lint / build コマンドも `allow` にする。GPT-6.2 Sol は安全と明示されない操作で
  承認待ちになりやすいため、確認なしで回してよいゲートを rules でも宣言しておく（AGENTS.md「作業の進め方」と揃える）
- プレフィックス一致で拾えない表記ゆれ（`rm -fr` / `rm -r -f` など）は Phase 7 の guard.sh で補完する

該当する不変条件がなければ rules はスキップし、完了報告にその旨を記載してください。

### .codex/config.toml（hooks の登録）

Codex CLI は PreToolUse / PermissionRequest / PostToolUse / SessionStart / Stop などの
ライフサイクル hooks をサポートします（command 型）。Phase 7 のスクリプトをここから呼びます。

```toml
# プロジェクト設定 — ユーザーがこのプロジェクトを trust したときのみロードされる

[[hooks.PreToolUse]]
matcher = "Bash"

[[hooks.PreToolUse.hooks]]
type = "command"
command = 'bash "$(git rev-parse --show-toplevel)/.agents/hooks/guard.sh"'
statusMessage = "コマンドを検査中"

[[hooks.PostToolUse]]
matcher = "apply_patch|Edit|Write"

[[hooks.PostToolUse.hooks]]
type = "command"
command = 'bash "$(git rev-parse --show-toplevel)/.agents/hooks/post-edit.sh"'
statusMessage = "フォーマット中"

[[hooks.Stop]]

[[hooks.Stop.hooks]]
type = "command"
command = 'bash "$(git rev-parse --show-toplevel)/.agents/hooks/stop-gate.sh"'
statusMessage = "完了前の検証中"
```

- hook のパスは **git root 基準**で解決する（Codex がサブディレクトリから起動されても壊れない、公式推奨の書き方）

---

## Phase 10: 個人設定の提案（ホームディレクトリには書き込まない）

ホームディレクトリの設定はユーザー個人のものです。チーム共有すべき設定は Phase 8・9 のプロジェクト側に置き、
個人設定は直接書き込まず、以下を **提示するにとどめてください**。実際の反映はユーザーが行います。

### 【Codex CLI】~/.codex/config.toml

```toml
# ~/.codex/config.toml（提案 — ユーザーが手動で反映）

# 使用モデル（Phase 0-B の確認結果を反映。通常は gpt-6.2-sol。未設定時の既定に任せず明示する）
model = "{Phase 0-B で選定したデフォルトモデル}"
# low（Codex での既定）/ medium / high / xhigh / max / ultra。xhigh 以上は効果を確かめた難しい作業に限る
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

### 【Claude Code】個人の上書き

個人の権限・環境変数・effort は `.claude/settings.local.json`（git 管理外）か `~/.claude/settings.json` に置けることを案内してください。

### グローバル指示ファイルの状態確認

`~/.claude/CLAUDE.md` と `~/.codex/AGENTS.md` には触れず、状態だけを確認して案内してください：

- `~/.codex/AGENTS.md` が `~/.claude/CLAUDE.md` への symlink になっている → global-setup-prompt で管理済み。案内不要
- 実ファイルがある → 「毎回テストを実行」「編集前に必ずドキュメントを読む」「不明点は必ず確認」「よく考えてから答える」のような
  旧世代向けの指示が含まれていれば、該当行を完了報告で指摘する（削除はユーザーが判断）
- 存在しない → global-setup-prompt での作成を案内する
  （本セットアップのプロジェクト内ファイルだけでも品質基準は自己完結している）

---

## Phase 11: 生成物の受け入れテスト

以下は「自分の回答を再確認する」ためのステップではなく、**生成した設定が実際に機能するかを
外部コマンドで確かめる受け入れテスト**です。コマンドを実行し、出力を根拠に判定してください。
失敗した場合は該当 Phase に戻って修正し、再度実行します。作成していないファイルの確認はスキップして構いません。

```bash
# CLAUDE.md が AGENTS.md を取り込んでいるか（1 行目が @AGENTS.md なら成功）
head -1 CLAUDE.md

# settings.json が妥当な JSON か
python3 -m json.tool .claude/settings.json > /dev/null &amp;&amp; echo "settings.json: OK"

# TOML の構文チェック（python 3.11+ の tomllib を使用。macOS 標準の python3 にはないので python3.12 などを使う）
for f in .codex/config.toml .codex/agents/*.toml; do
  [ -f "$f" ] &amp;&amp; python3 -c "import tomllib; tomllib.load(open('$f','rb')); print('$f: OK')"
done

# hook スクリプトの構文チェック
for f in .agents/hooks/*.sh; do bash -n "$f" &amp;&amp; echo "$f: OK"; done

# PreToolUse hook の発火テスト（ブロック対象は guard.sh に実際に設定したコマンドに置き換える）
echo '{"tool_input":{"command":"rm -rf dist"}}' | bash .agents/hooks/guard.sh   # deny の JSON が出れば成功
echo '{"tool_input":{"command":"ls"}}' | bash .agents/hooks/guard.sh            # 何も出なければ成功

# Stop hook のループ防止（2 回目の Stop は常に止めてよい。{} と exit=0 なら成功）
echo '{"stop_hook_active":true}' | bash .agents/hooks/stop-gate.sh; echo " exit=$?"

# rules の単体テスト（forbidden にしたコマンドがブロックされることを確認）
codex execpolicy check --pretty --rules .codex/rules/project.rules -- rm -rf dist
```

- rules は `match` / `not_match` がロード時にも自動検証される
- agents / skills / rules / ネスト AGENTS.md のフロントマター（YAML）に構文エラーがないかも読み直して確認する

---

## Phase 12: バージョン管理に追加

`CLAUDE.md` / `AGENTS.md` / `.claude/` / `.codex/` / `.agents/` はチームで共有するプロジェクト設定です。
バージョン管理に追加することが標準的な使い方です。git 管理下になければ以下を実行してください：

```bash
# 実行ビットを index に記録させるため、chmod → git add の順で行う
chmod +x .agents/hooks/*.sh 2>/dev/null || true
# 個人設定はコミット対象から除外しておく
grep -qxF '.claude/settings.local.json' .gitignore 2>/dev/null || echo '.claude/settings.local.json' >> .gitignore
git add CLAUDE.md AGENTS.md .claude/ .codex/ .agents/ .gitignore
# ネスト AGENTS.md / CLAUDE.md を作った場合はそれも add する
```

> **補足**: 個人の作業スタイルや機密情報を含むファイルは `.gitignore` に追記してください。

---

## Phase 13: trust の案内と完了報告

**重要（Codex CLI）**: プロジェクト側の `.codex/config.toml`・hooks・rules は、
ユーザーがこのプロジェクトを trust するまで**一切ロードされません**（`codex exec` などの非対話実行でも同じ）。
完了報告には必ず以下の trust 手順を含めてください：

- 初回 `codex` 起動時のプロンプトでこのプロジェクトを信頼する、または
- `~/.codex/config.toml` に以下を追記する：

```toml
[projects."/絶対/パス/このリポジトリ"]
trust_level = "trusted"
```

すべての作業が完了したら、以下の形式で報告してください。
各項目は箇条書きで簡潔に。設定内容をここで再説明せず、どこに何を置いたかが分かれば十分です。

```
## セットアップ完了

### 生成・更新ファイル一覧
- AGENTS.md（共有の事実）/ CLAUDE.md（@AGENTS.md + Claude Code 固有）
- .agents/docs/*（作成したもの）
- ネスト AGENTS.md / CLAUDE.md、.claude/rules/*（作成した場合）
- .claude/skills/* / .agents/skills/*（作成した場合）
- .claude/agents/* / .codex/agents/*（採用したもの）
- .agents/hooks/*.sh（作成した場合）
- .claude/settings.json（permissions / hooks）
- .codex/config.toml（hooks — trust 後に有効化）/ .codex/rules/*（作成した場合）

### 制御手段の割り当て（設計原則との整合）
- 事実 → AGENTS.md / .agents/docs/（CLAUDE.md は取り込みと Claude Code 固有の内容だけ）
- 手続き → どの skill に置いたか
- 許可 / 禁止 → permissions で何を deny し、rules で何を forbidden / allow にしたか
- 機械的強制 → どの hook で何をブロック / 自動実行したか
- ディレクトリ限定の規約 → どのネスト AGENTS.md・rule に置いたか（なければ「該当なし」）
- 独立タスク → どのサブエージェントを採用したか・見送った理由（組み込みで代替した場合はその旨）

### trust の手順（Codex CLI。ユーザーが実施）
（上記の trust 方法を記載。trust するまでプロジェクト設定・hooks・rules は無効であることを明記）

### 個人設定の提案（ユーザーが手動で反映）
- ~/.codex/config.toml（Phase 10 の内容を再掲）
- ~/.claude/CLAUDE.md / ~/.codex/AGENTS.md の状態と、指摘した旧世代向けの行（なければ「なし」）

### Opus 5.5 / GPT-6.2 Sol 向けの校正
- AGENTS.md「作業の進め方」に書いた完了条件と、確認なしで回してよいゲート（rules の allow と対応）
- CLAUDE.md に書いた Claude Code 固有の項目
- 既存設定から削除した旧世代向けの指示（検証・再確認・思考の指示、毎回のテスト指示・毎回のドキュメント読み込み・固定レシピなど。なければ「該当なし」）
- effort の配分（Claude Code: `modelSettings` / skill・subagent の `effort`。トップレベル `effortLevel` を移した場合はその旨）
- Codex CLI の使用モデルと reasoning effort（Sol を使えなかった場合はその旨と代替モデル。`none` / `minimal` を置き換えた箇所）

### 受け入れテスト結果（Phase 11）
- CLAUDE.md の取り込み / settings.json / TOML / hooks / rules / フロントマターの検証結果

### プロジェクト調査サマリー
（Phase 0 で把握した主要情報の要約）

### 要確認・要補完の箇所
（「未確認 - 要記入」と記載した箇所、既存設定とのマージで置き換え・移動した箇所の一覧）
```

以上をすべて実行してください。
```
</CopyCode>
</code></pre>
  </PreCodes>
</template>
