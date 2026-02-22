# COMMANDS.md — npm scripts 詳細

package.json の `scripts` を網羅的に解説する。

## 開発

### `npm run dev`

```
predev: npm run index:generate
dev:    vite
```

- `predev` でインデックス JSON を自動生成してから Vite 開発サーバーを起動する
- ポートはデフォルト `http://localhost:5173`
- 新記事追加後に dev を再起動する必要はない（`npm run index:generate` だけ手動実行すれば OK）

### `npm run preview`

```
vite preview
```

- `dist/` をローカルサーブして本番ビルドを確認する
- `npm run build` の後に実行する

---

## ビルド

### `npm run build`

```
prebuild: npm run index:generate && npm run subset && npm run format
build:    npm run check && vue-tsc -b && vite build
```

prebuild フェーズ（順次）:

1. `index:generate` — 記事・検索インデックス JSON を `public/` へ出力
2. `subset` — LINESeed フォントを使用文字でサブセット化（→ `.woff2`）
3. `format` — Prettier で全ファイルを整形

build フェーズ（順次）:

1. `check` — lint + lint:markup + prettier:check（並列）
2. `vue-tsc -b` — TypeScript 型チェック
3. `vite build` — `dist/` へ出力

> **注意**: `npm run subset` は Python3 + fonttools (pyftsubset) が必要。
> インストール: `pip3 install fonttools brotli`
> CI 環境では fonttools 不在でもビルドが通る仕組みにはなっていないので、
> ローカルで `subset` が失敗する場合は `npm run index:generate && npm run format` のみ実行して
> `vite build` を直接呼ぶことも可。

---

## インデックス生成

### `npm run index:generate`

```
tsx scripts/generate-article-index.ts
```

- `src/components/article/**/*.vue` を走査してインデックスを生成
- 出力先: `public/article-index*.json` / `public/search-index*.json`
- `metadata.updateDate` を `<script lang="ts">` から抽出（なければ `1970/01/01`）
- 検索インデックスは `<pre>` タグ内のテキストを抽出（HTML タグ除去済み）
- **記事を追加・削除・ファイル名変更したら必ず実行**

---

## リント・フォーマット

### `npm run check`

```
npm-run-all --parallel lint lint:markup prettier:check
```

- CI の check コマンド。並列実行でエラーがあれば非ゼロ終了
- prebuild / build で自動実行される

### `npm run lint`

```
eslint .
```

- ESLint（TypeScript + Vue + Prettier + Accessibility ルール）

### `npm run lint:fix`

```
eslint . --fix
```

- ESLint で自動修正できるものを修正

### `npm run format`

```
prettier --write .
```

- Prettier で全ファイルを整形（Tailwind CSS クラスのソートも含む）

### `npm run prettier:check`

```
prettier --check .
```

- Prettier フォーマット確認のみ（書き込みなし）

### `npm run lint:markup`

```
tsx scripts/markuplint-changed.ts
```

- `git diff HEAD` で変更済みの `.vue` ファイルのみ markuplint を実行
- 変更なしなら即終了

### `npm run lint:markup:all`

```
markuplint "src/**/*.vue"
```

- `src/` 以下の全 `.vue` に markuplint を実行（通常 CI には不要）

### `npm run fix`

```
npm-run-all --parallel lint:fix format
```

- lint:fix + format を並列実行。コードを一括自動修正する

---

## フォントサブセット

### `npm run subset`

```
tsx scripts/font-subset.ts
```

- `src/` と `public/` の `.vue` / `.html` から使用文字を収集
- LINESeedJP (Rg/Bd) OTF を使用文字のみにサブセット → `.woff2` に変換
- キャッシュ: `scripts/.font-subset-cache.json`（内容が変わっていなければスキップ）
- 環境変数 `PYFTSUBSET` で pyftsubset のパスを上書き可能
- `FONT_SUBSET_PROFILE=1` でタイミングログを出力

---

## その他

### `npm run title`

```
npx tsx scripts/check-title-mismatch.ts
```

- `src/components/article/**/*.vue` の `<ArticleHeader title="...">` と
  ファイル名が一致しているか照合する
- 不一致があればファイルパス・ファイル名・タイトルを表示

---

## コマンド選択ガイド

| やりたいこと                     | コマンド                 |
| -------------------------------- | ------------------------ |
| 開発開始                         | `npm run dev`            |
| 記事追加後にインデックスを更新   | `npm run index:generate` |
| コードを修正してきれいにしたい   | `npm run fix`            |
| コミット前の静的解析             | `npm run check`          |
| 本番ビルド                       | `npm run build`          |
| ビルド確認                       | `npm run preview`        |
| ファイル名とタイトルの整合性確認 | `npm run title`          |
