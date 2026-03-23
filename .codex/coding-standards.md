# coding-standards.md — コーディング規約

## 命名規則

- Vue コンポーネントは PascalCase（例: `ArticleList.vue`）
- 記事コンポーネント（`src/components/article/**`）は kebab-case
- TypeScript ファイルは camelCase（例: `useSearchBoxLogic.ts`）
- composable は `use` プレフィックスで開始する
- 変数・関数は camelCase、イベントハンドラーは `handle` プレフィックスを優先する

## ファイル・フォルダ構成のルール

- 記事は `src/components/article/<category>/<name>.vue` に配置する
- 記事カテゴリは既存構成（`ai`, `css`, `etc`, `html`, `js`, `photo`）を前提に扱う
- 記事 ID は `category/filename` に依存するため、既存記事ファイルのリネームは互換性影響を確認してから実施する
- 記事では `metadata.updateDate` を export し、`ArticleHeader` に連携する

## 品質ルール（必須）

- TypeScript の型を明示する（`tsconfig.app.json` は `strict: true`）
- マジックナンバーは定数化する
- エラーハンドリングを省略しない
- `v-html` を使う場合は必ずサニタイズを行う（本リポジトリでは原則禁止）

## コメント・ドキュメントのルール

- コメントは「なぜそうするか（Why）」を書く。「何をするか（What）」はコードが語る
- 複雑なロジックのみ必要最小限のコメントを付与する

## セキュリティ

- API キーや認証情報をコードに直書きしない
- HTML を直接挿入する操作（innerHTML 相当）は XSS リスクに注意する

## 禁止事項

- `.env` ファイルをコミットしない
- `console.log` などのデバッグ出力を残したままコミットしない
- `dist/` をコミットしない
- `yarn.lock` をコミットしない（このリポジトリでは `npm` 運用）
