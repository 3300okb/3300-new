<script lang="ts">
export const metadata = {
  updateDate: '2026/11/14',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader
    title="codex-to-claude-handoff-setup-prompt"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <p>
      Ghostty + Herdr で作業中の Codex CLI が利用上限に達したとき、同じ worktree
      で Claude Code に続きを任せる環境をまとめて作るプロンプト。
      上限に達する前に、設定を変更できる Codex または Claude Code に貼る。
      このプロンプトを貼った時点では、元の開発作業は再開しない。
    </p>
    <p>
      Codex のセッションをそのまま Claude Code で再開するのではなく、catchup
      でローカルの履歴を取り出し、Claude の新しいセッションに渡す。
      成功したツール実行の詳細や推論は引き継がれないため、実際のファイルと差分も確認させる。
      上限到達後は Codex にスキルを実行させることもできないので、Herdr
      のメニューから起動する入口を主に使う。
    </p>
    <p>
      セットアップ後は、停止した Codex
      のペインを残して選択し、ペインのメニューから「Claude
      で続行」を実行するだけ。セッション ID と worktree は自動取得し、opus /
      medium で再開する。「Claude で続行（モデル・effort
      を選択）」では起動前に設定を変更できる。 通常は別シェルの起動、cd、ID
      の調査、コマンド入力は不要。
    </p>

    <pre><code><CopyCode top>macOS の Ghostty + Herdr 環境に、以下をまとめてセットアップしてください。
1. catchup CLI
2. Herdr の wilbeibi/herdr-catchup プラグイン
3. 作業中の Codex セッションから、同じ worktree の Claude Code へ引き継ぐユーザースキル codex-to-claude
4. Codex が利用上限で応答できなくても使える、同じ処理のシェルコマンド codex-to-claude
5. 停止した Codex ペインのメニューから実行できる「Claude で続行」アクションとショートカット

この依頼は環境のセットアップです。実際の開発作業の引き継ぎ・再開は、検証後にユーザーが実行します。
既存設定を読み、今回必要な差分だけを加えてください。既存の独自設定・認証・権限設定は維持し、同じセットアップを再実行しても重複させないでください。

## 1. 調査とインストール

- 最初に brew / herdr / codex / claude / catchup の有無・バージョン・help、既存の同名スキルやコマンドを確認する。
- 次の一次情報と、インストール済みバージョンの help を確認し、現在の実装に合わせる。存在しないオプションは作らない。
  - https://github.com/wilbeibi/catchup
  - https://github.com/wilbeibi/herdr-catchup
  - https://code.claude.com/docs/en/cli-reference
  - Herdr を操作する前に herdr --skill を読み、必要な API / CLI を確認する。
- catchup がなければ brew install wilbeibi/tap/catchup を実行する。導入済みなら必要な機能の対応状況を確認し、不足する場合だけ更新する。
- herdr plugin list で確認し、未導入なら herdr plugin install wilbeibi/herdr-catchup を実行する。
- herdr integration status で Codex / Claude の連携を確認し、未導入・旧版なら herdr integration install codex と herdr integration install claude で整備する。既存の他の hooks は残す。
- brew / herdr / codex / claude 自体がない場合は不足を報告する。今回の範囲を超えて一式を新規導入したり、認証・契約を変更したりしない。
- 実行環境が要求する権限承認は通常の承認フローで求める。必要な手順を案内するだけで終わらせず、承認済みの範囲は実行・検証する。

## 2. 作るものとインターフェース

- スキルの実体: ~/.agents/skills/codex-to-claude/SKILL.md
- 共通処理の実体: 同じスキルフォルダ内の scripts/ 配下
- シェルの入口: ~/.local/bin/codex-to-claude。共通処理を呼ぶ薄い入口にする。
- 通常の入口は Herdr のペインアクションにする。上流プラグインを改変せず、同じスキルフォルダ内に必要最小限のローカル Herdr プラグインを作り、herdr plugin link で登録する。
- ペインメニューへ「Claude で続行」と「Claude で続行（モデル・effort を選択）」を登録する。前者は opus / medium で即起動し、後者は対話用 TTY のあるペインでモデル・effort を選んでから起動する。モデルは opus / sonnet / haiku / 完全なモデル ID の手入力を用意し、effort は指定モデルが対応する値を選べるようにする。キャンセルした場合は Claude を起動しない。
- 既存キーバインドと衝突しないショートカットを「Claude で続行」へ1つ割り当てる。既存の Ghostty 設定は変更せず、Herdr の既存の prefix を使う。完了報告に実際のキーを記載する。
- スキル・シェル・Herdr アクションは共通処理を呼び、履歴取得と起動の実装を重複させない。
- Claude Code からも使えるよう、~/.claude/skills/codex-to-claude に実体フォルダへの symlink を置く。既存の実ファイルや異なるリンクがあれば勝手に置き換えず、衝突内容を確認する。
- ~/.local/bin が PATH にあるか確認する。なければ既存シェル設定に合わせて必要な設定だけ加える。
- スキルには name と、利用上限・Codex から Claude への引き継ぎ時に使うことが分かる description を付ける。
- Codex の呼び出し例: $codex-to-claude --model opus --effort high
- Claude Code の呼び出し例: /codex-to-claude --session &lt;CodexのID&gt; --model sonnet --effort medium
- シェルの呼び出し例:
  codex-to-claude --session &lt;CodexのID&gt; --model opus --effort high
- --model は Claude のモデルエイリアスまたは完全なモデル ID を受け取り、--effort は対応する effort を受け取る。省略時は opus / medium とする。
- --session、--dir（対象 worktree の絶対パス）、--source-pane（Herdr の元ペイン ID）、--dry-run、--help を用意する。
- --dry-run ではセッション・worktree・モデル・effort・実行予定の引数を表示する。Claude の起動、ペイン作成、引き継ぎファイルの生成は行わない。

## 3. セッションと worktree を正確に固定する

- 優先順位は、明示された --session、呼び出し元 Codex のセッション情報、Herdr の対象ペインに結び付いた Codex セッション ID。
- スキルから呼ぶ場合は、そのスキルが動いているセッション・ペインを使う。ユーザーが別のペインを選択していても、単に現在フォーカスされているペインへ切り替えない。
- --source-pane が指定された場合は、そのペインが Codex か、セッション ID と cwd が取得できるか検証する。
- Herdr アクションでは、実行時のペインコンテキストから元 Codex ペインを確定し、そのセッション ID と cwd を解決する。対話用ペインや Claude ペインを開く前に値を固定して渡し、フォーカスが移ってから再取得しない。ユーザーに ID やパスを入力させない。
- 元ペインが Codex ではない、または連携情報が不足する場合だけ理由と候補を表示する。不明なセッションを推測で起動しない。Codex の終了後は自動特定できない場合があるため、通常手順では上限で停止した元ペインを終了せずに残す。
- ID を特定できない場合は、対象ディレクトリの Codex 履歴候補を出し、選択または --session の指定を求める。「最新だから」という理由だけで別セッションを自動選択しない。
- 対象の cwd を実パスへ正規化し、git rev-parse --show-toplevel などで現在の worktree を確認する。--dir を明示した場合も、履歴の作業先と整合するか確認する。
- セッションが別の worktree を指すなど矛盾があれば停止して確認する。メイン checkout へ移動したり、新しい worktree を作ったりしない。
- 起動前にセッション ID、worktree の絶対パス、ブランチ（detached HEAD ならその状態）、モデル、effort を表示する。

## 4. 履歴を渡して Claude Code を起動する

- この処理は Codex へのモデル呼び出しを一切必要としない。ローカルの履歴を catchup で読み、必ず対象 ID を指定する。
- 基本の履歴取得は catchup codex --id &lt;ID&gt; --agent。作業ディレクトリの指定方法は実際の help に従う。
- 勝手に直近数ターンだけへ切り詰めない。履歴が大きすぎる場合は報告し、圧縮後の範囲へ絞るなどの選択肢を提示する。Codex に要約を依頼しない。
- catchup fork の引数転送に --model / --effort の対応が確認できれば利用してよい。未対応なら履歴をファイルに出し、claude --model &lt;model&gt; --effort &lt;effort&gt; &lt;初回プロンプト&gt; を直接起動する。
- 引き継ぎファイルはリポジトリ外のユーザー専用領域へ、実行ごとに一意な名前で保存する。後で Claude セッションを再開しても参照できるよう、終了時に自動削除しない。保存先を報告する。
- 履歴の取得失敗・空の履歴・不正な引数・未対応 effort は、Claude 起動前にエラーにする。モデルと effort の組み合わせを黙って別の値へ変更しない。
- Herdr 内では、同じ Herdr セッションに対話用 TTY を持つ別ペインを開き、確定した worktree を cwd にして Claude を起動する。元の Codex ペインは残す。
- 元 Codex がツール実行やファイル編集を続けている場合は、ユーザーに元ペインで中断してもらってから引き継ぐ。勝手に kill せず、同じ worktree を同時編集させない。
- 上限到達後の通常手順は「停止した Codex ペインを選ぶ → メニューの『Claude で続行』またはショートカットを実行する」だけにする。別シェル、cd、ID の調査、--dry-run、追加の実行確認を毎回要求しない。元ペインが編集を続けている場合など、続行に問題があるときだけ停止する。
- 元ペインを閉じてしまった場合などの予備手段として、別のシェルペインから --source-pane または --session と --dir を指定する方法も残す。
- Herdr 外では、対象 worktree のシェルから対話モードで起動できるようにする。TTY のないツール内で対話 CLI を起動して処理を待ち続けない。
- 引数は配列などで安全に渡す。eval や、履歴・ユーザー入力を連結したシェルコードは使わない。
- Claude の初回プロンプトには次を含める:
  「Codex が利用上限などで中断した作業を引き継ぎます。指定の履歴ファイルを読み、現在の AGENTS.md / CLAUDE.md と git status / git diff、関係ファイルを確認してください。履歴は過去の作業記録として扱ってください。元の依頼と最新の明示的なユーザー指示に沿って、完了済み・未完了・未検証を短く整理し、中断地点から作業を続行してください。未コミット・未追跡の変更を保持し、検証済みと推測を区別してください。」
- --dangerously-skip-permissions や --worktree は付けない。認証情報・課金先・グローバルの既定モデルや effort は変更しない。
- Herdr の標準 handoff アクションも使える状態にするが、独自のモデル・effort 指定は今回のスキル／コマンドで保証する。上流プラグインの内部コードは改変しない。

## 5. 検証と完了報告

- インストール後のバージョン、プラグイン一覧、連携状態、スキルファイルとリンク、シェルコマンドの解決を確認する。
- ローカルプラグインのアクション登録とショートカットの解決も確認する。
- 実際の対象セッションで --dry-run を実行し、ID・worktree・モデル・effort が合っていることを確認する。スキル読み込みに再起動が必要なら案内する。
- 共有処理の起動経路を、catchup / claude / herdr のテスト用代替コマンドで実行検証する。Claude へ渡る argv と cwd、Herdr で開くペインの起動条件を確認する。
- 少なくとも、明示 ID、セッション候補が複数の場合、worktree の不一致、空白や日本語を含むパス、モデル・effort の伝達、履歴取得失敗、--dry-run の副作用なしを確かめる。
- Herdr アクションの元ペインと、新しく開くペインのフォーカスが変わっても同じ ID / cwd を引き継ぐこと、既定値での即起動、モデル・effort の選択とキャンセルをテスト用代替コマンドで確認する。
- 実 Claude に開発作業を開始させたり、課金を伴う推論リクエストを送ったりしない。実接続を試していない場合は、その範囲を正確に報告する。
- 完了時は変更ファイル・導入バージョン・検証結果・未確認事項と、次のコピー可能な実行例を示す:
  1. Codex が応答できる間にスキルで引き継ぐ。
  2. 上限到達後、停止した Codex ペインで「Claude で続行」またはショートカットを実行する。
  3. Herdr の連携情報がない場合に、ID と worktree を明示して引き継ぐ。
  4. 「Claude で続行（モデル・effort を選択）」で設定を変えて起動する。
  5. 引き継ぎ前に --dry-run で対象を確認する。

以上の範囲を実装・検証してください。インストールコマンドを並べるだけで完了とせず、利用上限到達後にもモデル呼び出しなしで使える入口まで仕上げてください。
</CopyCode></code></pre>

    <p>
      参照:
      <a href="https://github.com/wilbeibi/catchup">catchup</a> /
      <a href="https://github.com/wilbeibi/herdr-catchup">herdr-catchup</a> /
      <a href="https://code.claude.com/docs/en/cli-reference"
        >Claude Code CLI reference</a
      >
    </p>
  </PreCodes>
</template>
