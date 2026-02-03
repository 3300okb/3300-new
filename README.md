# 3300-new

Personal notes for how I work on this repo. No extra guidance for other contributors.

## Overview

- Vue 3 + Vite + TypeScript + Tailwind CSS.
- UI entry is `src/App.vue`; app bootstraps in `src/main.ts`.
- Articles live in `src/components/article/<category>/<name>.vue`.
- List/search indexes are generated into `public/` and fetched at runtime.

## Common commands

- Dev: `npm run dev` (auto-runs `npm run index:generate`)
- Build: `npm run build`
- Lint: `npm run lint`
- Format: `npm run format`
- Checks: `npm run check`
- Regenerate indexes: `npm run index:generate`
- Font subset: `npm run subset`

## Article notes

- Each article exports `metadata.updateDate`.
- Example: `export const metadata = { updateDate: 'YYYY/MM/DD' }`
- Use `<ArticleHeader ... :update-date="metadata.updateDate" />`.
- Search index is built from `<pre>` blocks (HTML stripped).
- Article IDs are fixed to `category/filename`, so keep paths stable.
- test
