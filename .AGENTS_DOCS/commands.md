# Commands

- Dev server: `npm run dev` (auto-runs `npm run index:generate`)
- Build: `npm run build` (runs `npm run check` + `vue-tsc` + `vite build`)
- Lint: `npm run lint`
- Format: `npm run format`
- Checks (lint + markuplint + prettier): `npm run check`
- Regenerate indexes: `npm run index:generate`
- Font subset (manual): `npm run subset` (uses `scripts/font-subset.ts`)
