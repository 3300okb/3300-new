# コマンドリファレンス

## 開発サーバー

```bash
npm run dev
```

- Vite 開発サーバーを起動する
- 事前に `npm run index:generate` が自動実行される（`predev` フック）
- デフォルトポート: 5173

## ビルド

```bash
npm run build
```

- 事前に `npm run check`（lint + markuplint + prettier check）と `npm run index:generate` と `npm run subset`（フォントサブセット）が自動実行される（`prebuild` フック）
- `vue-tsc -b` で TypeScript 型チェックを実施
- Vite でプロダクションビルドを実行し、`dist/` に出力する

```bash
npm run preview
```

- `dist/` の成果物をローカルプレビューする（本番相当の動作確認）

## インデックス生成

```bash
npm run index:generate
```

- `src/components/article/` 配下の `.vue` ファイルを走査して記事インデックスを生成する
- 出力先: `public/article-index.json`, `public/article-index-<category>.json`, `public/search-index.json`, `public/search-index-<category>.json`
- **記事ファイルを追加・削除・移動したら必ず実行すること**

## Lint / フォーマット

```bash
npm run lint          # ESLint チェック
npm run lint:fix      # ESLint 自動修正
npm run format        # Prettier 自動整形
npm run lint:markup   # 変更ファイルのみ markuplint
npm run lint:markup:all  # 全 .vue ファイルに markuplint
npm run prettier:check   # Prettier フォーマットチェック（修正なし）
```

```bash
npm run check
```

- `lint` + `lint:markup` + `prettier:check` を並列実行する総合チェック
- CI / ビルド前に自動実行される
- **コミット前に必ずパスさせること**

```bash
npm run fix
```

- `lint:fix` + `format` を並列実行する自動修正

## その他

```bash
npm run subset
```

- フォントサブセット処理（`scripts/font-subset.ts`）
- ビルド前に自動実行される

```bash
npm run title
```

- 記事タイトルの不一致チェック（`scripts/check-title-mismatch.ts`）
- 記事名とコンポーネント内のタイトルが合っているか確認する
