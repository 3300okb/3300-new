# testing.md — テスト・品質チェック

## テストフレームワーク

- 未導入（`package.json` に Vitest/Jest などのテスト依存・`test` スクリプトなし）

## テストファイルの配置

- 専用テストディレクトリ（`tests/`, `__tests__/`, `*.test.*`, `*.spec.*`）は未配置

## テストの実行方法

```bash
# 現状 test スクリプトは未定義
npm run test
```

## Lint / フォーマット

```bash
npm run lint
npm run lint:markup
npm run prettier:check
npm run check
npm run format
```

## テストを書く際の注意点

- 実装変更時は対応するテストも必ず追加・修正する
- テスト導入時は `tests/` または `src/**/__tests__/` へ集約し、`npm run test` を追加する
- 型エラー検出は `npm run typecheck`、統合チェックは `npm run check` を基準にする
