# workflow.md — 作業フロー

## 作業手順

タスクに取り組む際は以下の手順を守ってください：

1. **調査**: 対象ファイルをすべて読み、影響範囲を把握してから変更に入る
2. **実装**: 既存コードのスタイル・命名規則・ファイル構成に合わせて実装する
3. **検証**: 実装後はビルド・lint を実行し、すべてパスすることを確認する
4. **報告**: 変更ファイルと実行結果を明示して報告する

シンプルな1行修正などは調査フェーズを省略して直接実装してよい。

---

## 開発サーバー

```bash
npm run dev
# → http://localhost:5173
# predev フックで npm run index:generate が自動実行される
```

## ビルド

```bash
npm run build
# 内部: npm run check && vue-tsc -b && vite build
# prebuild フックで index:generate + font-subset + format が自動実行される
```

## 品質チェック（必須）

```bash
npm run check          # lint + markuplint + prettier:check を並列実行
npm run fix            # lint:fix + format を並列実行（自動修正）
```

## 記事インデックス再生成

```bash
npm run index:generate
# 記事の追加・削除・タイトル変更後は必ず実行する
```

## プレビュー（本番相当）

```bash
npm run build && npm run preview
```

---

## 記事追加時の手順

1. `src/components/article/<category>/<name>.vue` を作成
2. `export const metadata = { updateDate: 'YYYY/MM/DD' }` を含める
3. `<ArticleHeader :update-date="metadata.updateDate" />` を使用
4. `npm run index:generate` でインデックスを更新
5. `npm run check` で品質チェック

---

## 報告フォーマット

作業完了時は以下の形式で報告する：

### 変更ファイル

- `path/to/file`: （変更内容の要約）

### 実行結果

- ビルド: ✅ / ❌
- lint: ✅ / ❌
- prettier: ✅ / ❌
