---
name: brushup-setup-prompts
description: 新しい Claude / OpenAI モデルに合わせて、このリポジトリの AI セットアップ記事（global-setup-prompt・claude-setup-prompt・codex-setup-prompt）と hooks 記事（claude-hooks・codex-hooks）をブラッシュアップし、PR 作成 → マージ後の同期 → このPC のグローバル設定（~/.claude・~/.codex）への反映 → ブランチ削除までを一通り行う。「Opus X 向けにセットアップ記事を更新して」「GPT-X 対応でプロンプト記事をブラッシュアップ」「新モデルが出たので CLAUDE.md / AGENTS.md の記事を見直したい」「hooks 記事も新モデル向けに直して」など、モデル更新に伴って setup-prompt / hooks 記事やグローバル設定を見直す依頼では、記事名やスキル名が明示されていなくても使うこと。
---

# セットアップ記事・hooks の新モデル向けブラッシュアップ

新しいモデルが出たときに、次の流れを通しで行うスキルです。

1. 対象モデルを聞く（Step 0）
2. 新モデルの挙動の変化を一次情報で調べる（Phase 1）
3. セットアップ記事 3 本を校正して PR（Phase 2）
4. hooks 記事を見直し、不具合修正と新モデル向けの追加を別々の PR に（Phase 3）
5. マージ後にセットアップ記事と hooks 記事の食い違いを揃える（Phase 4）
6. このPC のグローバル設定に反映する（Phase 5）
7. 作業ブランチを削除する（Phase 6）

PR のマージはユーザーが行います。PR を出したら URL を伝えて待ち、「マージした」の連絡で次へ進んでください。
Phase 5（ホームディレクトリの書き換え）と Phase 6（ブランチ削除）は、着手前にユーザーの了承を取ってください。
どちらも作業リポジトリの外に影響し、元に戻す手間が大きいためです。

対象ファイル:

- `src/components/article/ai/global-setup-prompt.vue` — ~/.claude/CLAUDE.md（正本）と ~/.codex/AGENTS.md（symlink）を作るプロンプト
- `src/components/article/ai/claude-setup-prompt.vue` — リポジトリ単位の Claude Code 設定を作るプロンプト
- `src/components/article/ai/codex-setup-prompt.vue` — リポジトリ単位の Codex CLI 設定を作るプロンプト
- `src/components/article/ai/claude-hooks.vue` / `codex-hooks.vue` — グローバル hooks の設定とスクリプト

同梱スクリプト（`scripts/`）:

- `article_code.py` — 記事に埋め込んだコードの取り出し・差し替え（HTML エスケープと往復チェック込み）
- `run_hook_cases.sh` + `hook-cases.txt` — hooks スクリプトに代表的なコマンドを流して判定を一覧表示
- `stop_gate_test.sh` — Stop の完了ゲートを、ダミーの git リポジトリで 5 通り試す

## Step 0: 対象モデルを聞く

質問する前に、今の前提を把握します。

- 記事の現行前提: `grep -n "前提" src/components/article/ai/*-setup-prompt.vue | head`（冒頭の「〜で運用されることを前提」の行）
- 最新モデルの候補:
  - Claude は `claude-api` スキルのモデル表
  - OpenAI は Codex の公式モデル一覧（`https://learn.chatgpt.com/docs/models`）

AskUserQuestion で次をまとめて聞いてください。

1. **Claude Code 側の対象モデル**
   - 選択肢: 調べた最新モデル（Recommended）、「変更なし（現在: 〇〇）」
   - 自由入力は「Other」で受ける
2. **Codex CLI 側の対象モデル**（同じ形）
3. **今回の範囲**（multiSelect）
   - セットアップ記事、hooks 記事、このPC のグローバル設定への反映

両方「変更なし」なら、モデル校正はせず、選ばれた範囲の見直しだけを行います。

## Phase 1: 新モデルの挙動を一次情報で調べる

記事に書くのは、**公式情報で確認できた挙動だけ**にします。
記事は読者がそのまま自分の環境に流すプロンプトなので、誤った設定キーや挙動は読者の環境を壊すからです。

- **Claude:**
  - `claude-api` スキルを読み込み、`shared/model-migration.md` の該当モデル節（Behavioral shifts・effort・breaking changes）を読む
  - 公式の「Prompting Claude <model>」ページ（platform.claude.com）
  - Claude Code の `https://code.claude.com/docs/en/model-config`（既定の effort、`effortLevel` / `modelSettings` のどちらが効くか）
- **OpenAI:**
  - OpenAI 公式ブログの、そのモデル向けプロンプト・skills・AGENTS.md の記事
  - Codex の公式ドキュメント（`developers.openai.com/codex/*` は `learn.chatgpt.com/docs/*` にリダイレクトされる）
- **hooks の仕様:**
  - `https://code.claude.com/docs/en/hooks`
  - `https://learn.chatgpt.com/docs/hooks`
- **サードパーティのブログは参考程度にとどめる。** config のキーや hooks の書式が公式と食い違うことがあった。
  WebFetch の要約モデルが JSON の形を取り違えることもあるので、スキーマに依存する実装は両ツール共通で確実な形を選ぶ（例: Stop の続行は exit 2 + stderr）。

調べた結果を、次の 3 つに分けてメモします。

- **消す:** 新モデルでは不要・逆効果になった指示。例: 検証の強制、「よく考えてから答える」、毎回ドキュメントを読ませる指示
- **残す:** 前世代向けに入れたが、今も効く指示
- **足す:** 新モデルで新たに必要になった指示。例: 完了条件、承認なしで回してよい操作、途中報告で止まらない

校正の原則は「足すより、旧世代向けの指示を消す」です。
常時ロードされる散文に置く価値があるのは、モデルの既定挙動とずれる数行だけです。
「必ず / 絶対」の類は散文では守られないので、hooks / permissions / rules に寄せます。

## Phase 2: セットアップ記事 3 本を校正する

開発ブランチを切ってから作業します（`dev/{YYYYMMDDHHMM}-{name}`。`main` への直接 push は禁止）。
旧モデル名で grep すると、更新箇所の取りこぼしを防げます。

```bash
grep -n "旧モデル名\|旧モデルID" src/components/article/ai/*-setup-prompt.vue
```

記事ごとの主な更新箇所:

- **global-setup-prompt:**
  - 冒頭の前提モデルと「このセットアップ作業自体の進め方」の effort
  - 「〇〇 向けの校正」の表
  - Phase 0 の 3（旧世代向けの指示）の洗い出しリスト
  - Phase 1 の CLAUDE.md テンプレート（ヘッダーの前提行、セクション 1〜6）と、その直後の注記
  - Phase 4 の effort 設定キーの注記
  - Phase 6 の完了報告の「前提モデル」
- **claude-setup-prompt:**
  - 冒頭の前提モデルと進め方
  - 制御手段の表（Effort 行）、アンチパターン、校正の表
  - Phase 1 の「作業の進め方」
  - Phase 2〜5（rules / skills・agents の effort / settings.json）
  - Phase 10 の完了報告
- **codex-setup-prompt:**
  - 冒頭の前提モデルと進め方、アンチパターン、校正の表
  - Phase 0-B（モデルの利用可否確認）
  - Phase 1 の AGENTS.md（作業の進め方・文書の読むタイミング）
  - Phase 2 の各文書、Phase 3 の agents の model / effort
  - Phase 5 の skill の書き方、Phase 6 の rules の allow、Phase 8 の個人設定の提案
  - Phase 11 の完了報告

注意点:

- global の CLAUDE.md は symlink で Codex も同じ本文を読みます。ツール固有の指示は見出しで対象を明示してください（無印だと Codex 側に無効な指示が混ざる）。
- 記事内の `&` `<` は HTML エスケープが必要です。コードを丸ごと差し替えるときは `scripts/article_code.py` を使ってください。
- 各記事の `updateDate` を今日の日付にします。

ゲート（このリポジトリの手順）:

```bash
npm run fix
npm run check
npm run typecheck
npm run index:generate
npx prettier --write public/*.json
```

`index:generate` は末尾の改行を付けずに出力するため、prettier を通さないと全カテゴリのインデックスに差分が出ます。
コミットするのは、変更した記事と `public/*-ai.json` の差分だけです。

コミットメッセージは英語の命令形で件名 1 行（例: `brush up setup-prompt articles for <models>`）。
PR 本文は日本語で、概要・変更点・確認・参考（出典 URL）を書きます。

## Phase 3: hooks 記事を見直す

hooks 記事は、読者の環境で実際に動くスクリプトです。見直しは次の 2 つに分け、**別々の PR** にします。

- **既存の不具合**（モデルと無関係）を先に出す。例: 自動承認が部分一致でコマンドの連結をすり抜ける、JSON のエスケープ漏れ、security.md の説明と実装の食い違い
- **新モデル向けの追加**（例: 途中停止への対策としての Stop の完了ゲート、承認待ちを減らす自動承認の追加）は、1 つ目の PR のブランチの上に積む

修正の手順:

1. 記事から今のスクリプトを取り出し、修正前の判定を記録する

   ```bash
   S=.claude/skills/brushup-setup-prompts/scripts
   python3 $S/article_code.py extract src/components/article/ai/claude-hooks.vue --after 'claude-hooks.sh</b>' > "$SCRATCH/claude-hooks.sh"   # $SCRATCH はセッションの scratchpad
   bash $S/run_hook_cases.sh "$SCRATCH/claude-hooks.sh" PreToolUse        # Codex は PermissionRequest も
   ```

2. scratchpad 上で修正し、`bash -n` と同じテストで修正前と比べる。Stop に手を入れたら `stop_gate_test.sh` も流す。
   `hook-cases.txt` にないケースを足したら、ファイル側に追記する（下の「落とし穴」参照）。
3. `article_code.py embed` で記事に戻す（往復チェックで、テストした版と一致することを確かめる）
4. Phase 2 と同じゲートを通して PR を出す

Claude / Codex で書式が違う点:

- PreToolUse の deny は同じ JSON で書ける
- 自動承認は、Claude が PreToolUse の `permissionDecision: allow`、Codex が PermissionRequest の `decision.behavior: allow`
- Codex の Stop は、exit 0 のとき stdout に JSON（`{}`）が必須
- 両方とも Stop を exit 2 + stderr で終了すると作業を続けさせられる。`stop_hook_active` を見て、続行は 1 回までにする（無限ループ防止）

## Phase 4: マージ後の整合

- **積んだ PR がコンフリクトしたら:**
  - 原因は、土台の PR が squash マージされたことです
  - 「線形で」と言われたら、自分のコミットだけを main に載せ替える

    ```bash
    git fetch origin
    git rebase --onto origin/main <土台PRのブランチ>
    git push --force-with-lease origin <このブランチ>
    ```

  - rebase 後はインデックスを作り直し、差分が出ないことを確かめる

- **セットアップ記事と hooks 記事を揃える:**
  - hooks 記事に入れた仕組み（例: Stop の完了ゲート）がセットアップ記事の hooks の Phase に反映されていなければ、追記して PR を出す
  - 追加する設定例（settings.json / config.toml）が正しく読めることも確かめる
  - macOS 標準の python3 には `tomllib` がないので、TOML は `uv run --no-project --python 3.12` などで確認する

## Phase 5: このPC のグローバル設定に反映する（着手前に了承を取る）

global-setup-prompt の手順に沿って進めます。

1. **退避:** `~/.claude/backups/global-mds-{YYYYMMDD}/` に次をコピーする
   - `~/.claude/CLAUDE.md`、`~/.claude/policies/security.md`、`~/.claude/settings.json`
   - `~/.claude/hooks/*.sh`、`~/.codex/hooks/*.sh`、`~/.codex/config.toml`、`~/.codex/rules/*.rules`
2. **独自の変更の検出:**
   - インストール済みのファイルを、**更新前の記事の版**と比べる（`git show <更新前のコミット>:<記事パス>` から `article_code.py extract`）
   - 一致すればそのまま置き換えてよい
   - 差分があればユーザーが手を入れている。消えるものを把握し、新しい版が包含しているかを確かめてから置き換え、報告に書く
3. **反映:**
   - CLAUDE.md は記事の正本テンプレートで置き換える（`~/.codex/AGENTS.md` は symlink なので自動で揃う）。
     テンプレートは中に ``` を含むので、`article_code.py extract src/components/article/ai/global-setup-prompt.vue --between '# Agent Guidelines' 'actually change the work.'` で取り出す
   - hooks は記事から取り出したスクリプトで置き換える
   - security.md は「強制の実体」を実態に合わせて直す
4. **確認:**
   - settings.json が正しい JSON であること、symlink が同じ実体を指すこと、`bash -n`
   - インストールしたスクリプトで `run_hook_cases.sh` と `stop_gate_test.sh` を流す
5. **触らないもの:**
   - `~/.codex/config.toml` のモデル・effort、`~/.claude/settings.json` のモデル・effort は個人設定
   - 記事の推奨とずれていれば、報告で指摘するだけにする

hooks の反映はこのセッションからすぐ効き、CLAUDE.md / AGENTS.md は次のセッションから有効になります。

## Phase 6: 作業ブランチを削除する（着手前に了承を取る）

- 削除前に、各ブランチの PR がマージ済みであることを確かめる

  ```bash
  gh pr list --head <branch> --state all
  ```

- squash マージだと git は「未マージ」と判定するので、手元は `git branch -D` で削除する
- リモートは GitHub がマージ時に自動で消していることが多い。`git ls-remote --heads origin <branch>` で残っているものだけ削除する
- zsh は変数を単語に分割しない。複数のブランチ名は変数にまとめず、個別に書く

## 落とし穴（前回の実施で実際に起きたこと）

- **guard hook の誤反応:** 実行中のセッションの guard hook は、コマンド文字列に `.env` の add や `DROP TABLE` などが含まれるだけでブロックする。
  テストケースはファイルに書き（`hook-cases.txt`）、PR 本文は `gh pr create --body-file` で渡す。
- **テストの作りの誤り:** ダミーリポジトリのテストで、前のケースのファイル削除が未コミットの変更として残り、誤判定になったことがある。
  結果が想定外なら、hook より先にテストの作りを疑う。
- **埋め込み直後の確認:** `npm run fix`（prettier）の後も、記事内のスクリプトがテストした版と一致するかを `article_code.py extract` + `cmp` で確かめる。

## 完了報告

各 Phase の終わりに、次を簡潔に報告します。

- **PR を出したとき:** URL と、変更点の要約
- **確認の結果:** ゲートと hooks テストの結果をそのまま（失敗があれば失敗として）
- **確実でない点:** 一次情報で確かめられなかった記述。例: 公式の要約だけが根拠のもの、推測で選んだモデル
- **未対応のもの:** 次に何をすればよいか
