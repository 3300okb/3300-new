import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import { build } from 'vite'

const SCRIPT_FILE_PATH = fileURLToPath(import.meta.url)
const SCRIPT_DIR_PATH = path.dirname(SCRIPT_FILE_PATH)

const SAMPLE_TAILWIND_INPUT_PATH = path.resolve(
  SCRIPT_DIR_PATH,
  '../src/assets/sample-tailwind.css'
)
const SAMPLE_TAILWIND_OUTPUT_DIR_PATH = path.resolve(
  SCRIPT_DIR_PATH,
  '../public/sample/css'
)
const SAMPLE_TAILWIND_OUTPUT_PATH = path.resolve(
  SAMPLE_TAILWIND_OUTPUT_DIR_PATH,
  'tailwind.css'
)

const result = await build({
  plugins: [tailwindcss()],
  logLevel: 'error',
  build: {
    write: false,
    rollupOptions: {
      input: SAMPLE_TAILWIND_INPUT_PATH,
    },
  },
})

const outputs = Array.isArray(result) ? result : [result]
let compiledCss = ''

for (const output of outputs) {
  if (!('output' in output)) {
    continue
  }

  for (const chunk of output.output) {
    if (chunk.type !== 'asset') {
      continue
    }
    if (!chunk.fileName.endsWith('.css')) {
      continue
    }

    compiledCss = String(chunk.source)
    break
  }
}

if (!compiledCss) {
  throw new Error('Tailwind CSS build failed: no CSS asset was generated.')
}

await mkdir(SAMPLE_TAILWIND_OUTPUT_DIR_PATH, { recursive: true })
await writeFile(SAMPLE_TAILWIND_OUTPUT_PATH, compiledCss, 'utf-8')
