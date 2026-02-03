# AGENTS.md

## Progressive disclosure index

Read only the file(s) that match the task:

- Project overview: `.AGENTS_DOCS/overview.md`
- Key paths: `.AGENTS_DOCS/paths.md`
- Runtime data flow: `.AGENTS_DOCS/runtime-flow.md`
- Article authoring conventions: `.AGENTS_DOCS/authoring.md`
- Commands: `.AGENTS_DOCS/commands.md`
- Notes / caveats: `.AGENTS_DOCS/notes.md`

## Usage guidance

- Start with the smallest relevant doc; only open more if needed.
- Keep references stable; update the source doc rather than duplicating notes.
- Conversations should be in Japanese.
- Write CSS using Tailwind.
- For spacing and font-size values, refer to tailwind.config.js.
- Do not reference `node_modules`.

## Decision table

Use this to pick the smallest doc first:

- App boot or UI entry question -> `.AGENTS_DOCS/overview.md` + `.AGENTS_DOCS/paths.md`
- "Where is X?" or file location -> `.AGENTS_DOCS/paths.md`
- "How does list/search work?" -> `.AGENTS_DOCS/runtime-flow.md`
- "How to write/update articles?" -> `.AGENTS_DOCS/authoring.md`
- "How to run/build/check?" -> `.AGENTS_DOCS/commands.md`
- "Anything to be careful about?" -> `.AGENTS_DOCS/notes.md`
