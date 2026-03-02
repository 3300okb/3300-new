# testing.md — テスト・品質チェック

## テストフレームワーク

**現時点でユニットテスト・E2Eテストのフレームワークは導入されていない。**

`package.json` に `test` スクリプトなし。`__tests__/`、`spec/`、`tests/` ディレクトリも存在しない。

将来導入する場合の推奨候補:

- ユニットテスト: **Vitest**（Vite と統合しやすい）
- E2Eテスト: **Playwright** または **Cypress**（`e2e/` ディレクトリに配置）

---

## 代替品質チェック手段

### 静的解析（必須）

```bash
npm run check
# 並列実行: lint + markuplint + prettier:check
```

内訳：

1. **ESLint** (`npm run lint`): TypeScript・Vue の静的解析
2. **markuplint** (`npm run lint:markup`): HTML/Vue マークアップの妥当性チェック
3. **Prettier** (`npm run prettier:check`): フォーマットチェック

### 型チェック

```bash
vue-tsc -b
# npm run build の一部として実行される
```

### 自動修正

```bash
npm run fix
# lint:fix + format を並列実行
```

---

## Lint / フォーマット

```bash
npm run lint           # ESLint のみ
npm run lint:fix       # ESLint 自動修正
npm run format         # Prettier で全ファイルフォーマット
npm run prettier:check # フォーマットのチェックのみ（修正なし）
npm run lint:markup    # 変更ファイルのみ markuplint
npm run lint:markup:all  # 全 .vue ファイルに markuplint
```

---

## 現在の品質保証プロセス

1. `npm run check` で静的解析を必ずパスさせる
2. `npm run build` で TypeScript 型チェック＋ビルドが通ることを確認する
3. `npm run preview` で実際の動作を目視確認する
4. PR マージ後、GitHub Actions `deploy.yml` が自動でビルド＋rsync デプロイを実行する
5. PR コメントに `@codex review` を投稿すると OpenAI Codex が自動レビューを行う

---

## テストを書く際の注意点（将来導入時）

- 記事インデックス生成ロジック（`scripts/generate-article-index.ts`）は副作用があるためモック必要
- composable（`src/composables/`）は Vue Test Utils での単体テストが有効
- 検索ロジック（`useSearchBoxLogic.ts`）はロジックが複雑なため、ユニットテストの優先度が高い
- 実装変更時は対応するテストも必ず追加・修正する
