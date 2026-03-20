# coding-standards.md — コーディング規約

## 命名規則

- TypeScript の変数・関数は `camelCase` を使う
- `src/components/` の再利用コンポーネントは `PascalCase.vue` を使う
- `src/composables/` は `useXxx.ts` 形式で命名する
- `src/components/article/` の記事ファイル名は既存どおり `kebab-case.vue` を使う
- 定数は用途が明確な名前をつけ、必要に応じて `UPPER_SNAKE_CASE` を使う

## ファイル・フォルダ構成のルール

- 記事は `src/components/article/<category>/<filename>.vue` に配置する
- 記事IDは `category/filename` で固定されるため、既存記事のリネームは互換性影響を確認してから行う
- 各記事は `metadata.updateDate` をエクスポートし、`ArticleHeader` に渡す
- 検索インデックスは `<pre>` ブロックを元に生成されるため、`<pre>` の内容は検索される前提で記述する
- パス解決は既存設定に合わせて `@/` エイリアス（`src/*`）を優先する

## コメント・ドキュメントのルール

- コメントは「なぜそうするか（Why）」を書く。「何をするか（What）」はコードが語る
- 複雑な処理には短く意図を添える
- README と生成スクリプトの前提がずれないよう、仕様変更時は関連ドキュメントも更新する

## 禁止事項

- `.env` ファイルをコミットしない
- `console.log` などのデバッグ出力を残したままコミットしない
- API キーや認証情報をコードに直書きしない
- `v-html` や `innerHTML` 相当を無検証で使わない（必要時は DOMPurify などでサニタイズ）
