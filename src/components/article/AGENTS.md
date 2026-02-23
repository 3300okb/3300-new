# src/components/article/ ディレクトリ固有の指示

ルートの AGENTS.md の指示に加え、このディレクトリでは以下の規則を守ること。

## ディレクトリ構成

`src/components/article/` はカテゴリ単位（`ai/`, `css/`, `etc/`, `html/`, `js/`, `photo/`）で記事 Vue ファイルを配置する。

## 固有の規則

- 新規記事は既存カテゴリへ追加し、カテゴリ新設時は検索・一覧の影響を確認する
- 各記事で `metadata.updateDate` をエクスポートし、`ArticleHeader` に渡す
- 記事IDは `category/filename` で固定されるため、既存ファイルのリネームは互換性影響を確認してから実施する
- `<pre>` ブロックは検索インデックス生成対象のため、検索性を意識して記述する
- 記事ディレクトリでは `vue/multi-word-component-names` は ESLint 上で緩和されているが、可読性を優先して命名する
