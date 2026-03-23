# testing.md — テスト・品質チェック

## テストフレームワーク

- 未導入（`package.json` に `test` スクリプトなし）

## テストファイルの配置

- 未導入（`__tests__/` / `tests/` / `*.test.*` / `*.spec.*` なし）

## テストの実行方法

```bash
# 未導入（test コマンドなし）
```

## Lint / フォーマット

```bash
npm run check
npm run lint
npm run lint:markup
npm run prettier:check
```

## 未導入項目の扱い

- lint やテストが未導入の場合は「未導入」と明記し、代替の検証コマンド（例: ビルド、型チェック）を記載する
- このリポジトリでは以下を代替検証として必ず実行する

```bash
npm run build
```

## テストを書く際の注意点

- 実装変更時は対応するテストも必ず追加・修正する
- 記事インデックス生成（`scripts/generate-article-index.ts`）に関わる変更は、生成結果 JSON の整合性確認を必ず行う
- 検索ロジック変更時は、ファイル名一致・本文一致・更新日ソートの振る舞いを確認する
