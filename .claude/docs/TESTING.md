# テスト方針

## テストフレームワーク

**現時点でユニットテスト・E2Eテストのフレームワークは導入されていない。**

`package.json` に `test` スクリプトなし。`__tests__/`、`spec/`、`tests/` ディレクトリも存在しない。

## 代替品質チェック手段

以下のコマンドが品質チェックとして機能している:

```bash
npm run check
```

並列実行される内容:

1. **ESLint** (`npm run lint`): TypeScript・Vue の静的解析
2. **markuplint** (`npm run lint:markup`): HTML/Vue マークアップの妥当性チェック
3. **Prettier** (`npm run prettier:check`): コードフォーマットチェック

```bash
vue-tsc -b
```

TypeScript 型チェック（`npm run build` の一部として実行）。

## テストファイルの配置

（未導入）

## テストの種類と実行方法

（未導入）

将来テストを追加する場合の推奨構成:

- ユニットテスト: `src/` と同階層に `__tests__/` または各ファイルの隣に `.spec.ts`
- E2Eテスト: `e2e/` ディレクトリ（Playwright や Cypress）
- フレームワーク候補: Vitest（Vite と統合しやすい）

## カバレッジ基準

（未設定）

## 現在の品質保証プロセス

1. `npm run check` で静的解析を必ずパスさせる
2. `npm run build` で TypeScript 型チェック＋ビルドが通ることを確認する
3. `npm run preview` で実際の動作を目視確認する
4. PR マージ後、GitHub Actions `deploy.yml` が自動でビルド＋rsync デプロイを実行する
5. `codex-review.yml` により、PR コメントに `@codex review` を投稿すると OpenAI Codex がコードレビューを行う

## テストを書く際の注意点（将来導入時）

- 記事インデックス生成ロジック（`scripts/generate-article-index.ts`）は副作用があるためモック必要
- composable（`src/composables/`）は Vue Test Utils での単体テストが有効
- 検索ロジック（`useSearchBoxLogic.ts`）はロジックが複雑なため、ユニットテストの優先度が高い
