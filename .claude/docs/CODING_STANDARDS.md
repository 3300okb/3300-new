# コーディング規約

## 言語・フレームワーク

- **TypeScript** ~5.9.3（strict モード）
- **Vue 3** ^3.5.24（Composition API + `<script setup>` 形式）
- **Tailwind CSS** ^4.0.0（`@tailwindcss/vite` プラグイン）
- **Vite** ^7.2.4（ビルドツール）
- Node.js 22.15.0（`.nvmrc` 参照）

## 命名規則

### ファイル名

- Vue コンポーネント: **PascalCase**（例: `ArticleList.vue`, `SearchBox.vue`）
- 記事コンポーネント: **kebab-case**（例: `flex-basics.vue`, `array-methods.vue`）
  - `vue/multi-word-component-names` ルールは記事コンポーネントで除外済み
- TypeScript ファイル: **camelCase**（例: `useArticleIndex.ts`, `scrollToPreElement.ts`）
- composable: `use` プレフィックス（例: `useSearchBoxLogic.ts`）

### 変数・関数

- camelCase（例: `selectedCategory`, `handleArticleSelect`）
- イベントハンドラー: `handle` プレフィックス（例: `handleResetScroll`）
- 未使用変数: `_` プレフィックスで抑制可能（例: `_unused`）

### コンポーネント props・emits

- props: camelCase 定義、テンプレートでは kebab-case（Vue 規則に従う）

## フォーマット規則（Prettier）

- **シングルクォート**使用（ダブルクォート禁止）
- **セミコロンなし**
- インデント: **2スペース**
- 最大行長: **80文字**
- trailing comma: **es5**（オブジェクト・配列の末尾カンマあり）
- Tailwind クラスは `prettier-plugin-tailwindcss` が自動整列

## TypeScript ルール

- `any` は原則禁止（使う場合は警告が出る、`.d.ts` ファイルでは除外）
- 未使用変数はエラー（`_` プレフィックスで抑制可）
- `explicit-function-return-type` は強制しない（型推論を活用）
- import は single quote

## Vue コンポーネント規則

- `<script setup lang="ts">` 形式を使用
- `v-html` は使用禁止（`GlobalHeader.vue` のみ例外 - DOMPurify使用済み）
- コンポーネント名は multi-word（例: `ArticleHeader`, `GlobalHeader`）
  - 記事コンポーネント（`article/` 配下）は除外
- Props 型と default 値の明示が必要（`vue/require-default-prop`, `vue/require-prop-types`）

## アクセシビリティ

以下のルールが ESLint で強制されている:

- `alt-text`: img タグに alt 属性必須（エラー）
- `anchor-has-content`: a タグにコンテンツ必須（エラー）
- `heading-has-content`: 見出しにコンテンツ必須（エラー）
- `click-events-have-key-events`: クリックイベントにキーイベント対応（警告）
- `form-control-has-label`: フォームコントロールにラベル（警告）
- `mouse-events-have-key-events`: マウスイベントにキーイベント対応（警告）

## インポートエイリアス

- `@` → `src/` ディレクトリ（例: `import { foo } from '@/utils/foo'`）

## コメント規則

- 「**Why（なぜそうするか）**」を書く
- 「What（何をするか）」はコードが語るので書かない
- 日本語コメント可（既存コードで多用されている）

## 禁止事項

- `.env` ファイルをコミットしない
- `console.log` / `print` などのデバッグ出力を残したままコミットしない
- `v-html` を DOMPurify なしで使用しない
- `any` 型の濫用（警告を無視しない）
- `dist/` ディレクトリをコミットしない（gitignore 済み）
- `yarn.lock` をコミットしない（gitignore 済み）
- 記事 ID（`category/filename` パス）の変更（検索インデックスが壊れる）
