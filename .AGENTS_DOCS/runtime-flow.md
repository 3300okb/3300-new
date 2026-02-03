# Runtime data flow

- `scripts/generate-article-index.ts` scans article SFCs, builds:
  - `public/article-index.json` (category manifest)
  - `public/article-index-<category>.json` (article list per category)
  - `public/search-index.json` + `public/search-index-<category>.json` (search data)
- `src/components/ArticleList.vue` fetches article indexes.
- `src/components/SearchBox.vue` fetches search indexes and highlights matches.
- `src/components/ArticleContent.vue` dynamically imports article SFCs.
