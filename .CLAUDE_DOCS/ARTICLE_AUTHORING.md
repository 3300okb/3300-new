# ARTICLE_AUTHORING.md — 記事作成・更新ガイド

## 記事ファイルの場所

```
src/components/article/<category>/<name>.vue
```

### カテゴリ一覧（順序固定）

| カテゴリ | 意味            |
| -------- | --------------- |
| `html`   | HTML 関連       |
| `css`    | CSS 関連        |
| `js`     | JavaScript 関連 |
| `ai`     | AI / LLM 関連   |
| `photo`  | 写真・画像関連  |
| `etc`    | その他          |

新カテゴリを追加する場合は `useGlobalHeaderLogic.ts` の `categoryOrder` 配列にも追加する。

---

## 記事 .vue の最小テンプレート

```vue
<script lang="ts">
export const metadata = {
  updateDate: 'YYYY/MM/DD',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
import CopyCode from '@/components/CopyCode.vue'
</script>

<template>
  <ArticleHeader
    title="<ファイル名と同じ値>"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><code><CopyCode>ここにコード</CopyCode>
</code></pre>
  </PreCodes>
</template>
```

---

## 必須ルール

### ファイル名 = ArticleHeader の title

```
src/components/article/css/grid.vue
                              ↓
<ArticleHeader title="grid" .../>
```

`npm run title` で不一致をチェックできる。

### updateDate のフォーマット

```ts
export const metadata = {
  updateDate: '2026/02/22', // YYYY/MM/DD
}
```

インデックスに反映され、記事一覧の並び順（新しい順）に使われる。
フォーマットが不正な場合はソートが乱れる（デフォルト値 `1970/01/01` となり最古扱い）。

### `<script lang="ts">` と `<script setup lang="ts">` の両立

- `metadata` は `<script lang="ts">` で `export const` する（Options API ブロック）
- コンポーネントのロジックは `<script setup lang="ts">` で書く
- この 2 ブロック構造は Vue 3 で正式サポートされている

---

## 使えるコンポーネント

### ArticleHeader

```vue
<ArticleHeader
  title="grid"
  :update-date="metadata.updateDate"
  sample-url="/sample/html/grid.html"   <!-- 省略可 -->
/>
```

- `sampleUrl` を渡すと「sample」リンクが表示され、新タブで開く

### PreCodes

```vue
<PreCodes>
  <pre><code>コードブロック</code></pre>
  <h3>見出し（クリック可能・下線付き）</h3>
  <p>説明テキスト</p>
  <pre><code>別のコードブロック</code></pre>
</PreCodes>
```

- 複数の `<pre>` を含められる
- `<h3>` と `<p>` も混在可能
- `<pre>` の内容が検索インデックスの対象になる

### CopyCode

```vue
<pre><code><CopyCode>コピーしたいコード</CopyCode>
</code></pre>
```

- スロット内のテキストをコピーするボタンを表示する
- `</CopyCode>` の直後に改行を入れると `\n` がコピーテキストに含まれるため注意

### SwitchBox

```vue
<SwitchBox v-model="someRef" />
```

- トグルスイッチ。デモ用途で使う

---

## 検索インデックスの仕組み

`<pre>` タグ内のテキスト（HTML タグ除去後）が検索インデックスに格納される。

- `<pre>` が複数あれば `preBlocks[0]`, `preBlocks[1]` ... として別々に保存
- 検索ヒット時は前後 5 行のスニペットを表示
- 空行は除外してスニペット表示される

---

## 記事追加後の手順

```bash
# 1. インデックスを再生成（dev 実行中ならサーバーを再起動するだけでも可）
npm run index:generate

# 2. ファイル名とタイトルの整合性確認
npm run title

# 3. 静的解析
npm run check
```

開発サーバー起動時 (`npm run dev`) は predev で自動実行されるため、
**サーバーを再起動するだけでインデックスが更新される**。

---

## 記事更新時

- `updateDate` を新しい日付に変更するだけで記事一覧の並び順が更新される
- `npm run index:generate` を再実行（または dev サーバー再起動）でインデックス反映

---

## エイリアス

`@` が `src/` に解決される (`vite.config.ts` の `resolve.alias`)。

```ts
import ArticleHeader from '@/components/ArticleHeader.vue'
```
