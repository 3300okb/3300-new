---
description: 記事追加の定型フロー（category と name を指定）
---

引数: `$CATEGORY` `$NAME`

以下の手順で記事を追加してください。

1. `src/components/article/$CATEGORY/$NAME.vue` を作成
   - `<script setup>` で `export const metadata = { updateDate: 'YYYY/MM/DD' }` を含める
   - `<ArticleHeader :update-date="metadata.updateDate" />` をテンプレート先頭に配置
2. 既存の同カテゴリ記事を 1 件参照し、スタイル・構造を揃える
3. `npm run index:generate` で記事インデックスを更新
4. `npm run check` で lint / markuplint / prettier を通す
5. 失敗したら `npm run fix` を試してから再 check
6. `git status` で変更ファイルを確認し報告

カテゴリは `ai` / `css` / `etc` / `html` / `js` / `photo` のいずれか。
