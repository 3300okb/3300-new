# Article authoring conventions

- Each article should export `metadata.updateDate` in the SFC, e.g.
  - `export const metadata = { updateDate: 'YYYY/MM/DD' }`
- Use `<ArticleHeader ... :update-date="metadata.updateDate" />` so list sorting works.
- Search index is built from `<pre>` blocks (HTML is stripped; entities decoded).
- Keep file paths stable: list/search use `category/filename` as IDs.
