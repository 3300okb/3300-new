<script lang="ts">
export const metadata = {
  updateDate: '2026/10/13',
}
</script>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import type * as TS from 'typescript'
import ArticleHeader from '@/components/ArticleHeader.vue'

type TargetName = 'ES5' | 'ES2015' | 'ES2020' | 'ES2022' | 'ESNext'
type ModuleName = 'ESNext' | 'CommonJS'
type OutputTab = 'js' | 'dts'

type DiagnosticItem = {
  key: string
  category: 'error' | 'warning' | 'suggestion' | 'message'
  code: number
  message: string
  line: number | null
  column: number | null
  start: number | null
  length: number
}

const INPUT_FILE = '/input.ts'
const DEBOUNCE_MS = 300

const sampleCode = `type User = {
  id: number
  name: string
  email?: string
}

const greet = (user: User): string => {
  return \`Hello, \${user.name}!\`
}

const users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
]

users.forEach((user) => console.log(greet(user)))

// 型エラーの例: id は number
const broken: User = { id: '3', name: 'Carol' }
`

const source = ref(sampleCode)
const target = ref<TargetName>('ES2022')
const moduleKind = ref<ModuleName>('ESNext')
const strict = ref(true)
const declaration = ref(false)
const outputTab = ref<OutputTab>('js')

const jsOutput = ref('')
const dtsOutput = ref('')
const diagnostics = ref<DiagnosticItem[]>([])
const status = ref<'loading' | 'compiling' | 'done' | 'failed'>('loading')
const statusMessage = ref('Loading the TypeScript compiler...')
const elapsedMs = ref(0)
const textareaRef = ref<HTMLTextAreaElement | null>(null)

const errorCount = computed(
  () => diagnostics.value.filter((d) => d.category === 'error').length
)
const warningCount = computed(
  () => diagnostics.value.filter((d) => d.category === 'warning').length
)
const currentOutput = computed(() =>
  outputTab.value === 'js' ? jsOutput.value : dtsOutput.value
)

// ---- compiler & lib loading ----

let ts: typeof TS | null = null

// 標準ライブラリ定義（lib.*.d.ts）は必要なものだけ遅延ロード
const libLoaders = import.meta.glob<string>(
  '/node_modules/typescript/lib/lib*.d.ts',
  { query: '?raw', import: 'default' }
)
const libTexts = new Map<string, string>()
const libPromises = new Map<string, Promise<void>>()
const libSourceFiles = new Map<string, TS.SourceFile>()

const loadLib = (fileName: string): Promise<void> => {
  const cached = libPromises.get(fileName)
  if (cached) return cached
  const loader = libLoaders[`/node_modules/typescript/lib/${fileName}`]
  const promise = loader
    ? loader().then(async (text) => {
        libTexts.set(fileName, text)
        const refs = Array.from(
          text.matchAll(/\/\/\/\s*<reference\s+lib="([^"]+)"/g),
          (m) => `lib.${(m[1] ?? '').toLowerCase()}.d.ts`
        )
        await Promise.all(refs.map(loadLib))
      })
    : Promise.resolve()
  libPromises.set(fileName, promise)
  return promise
}

const toBaseName = (fileName: string) => fileName.replace(/^.*\//, '')

const createCompilerOptions = (tsApi: typeof TS): TS.CompilerOptions => {
  const isEsModule = moduleKind.value === 'ESNext'
  return {
    target: tsApi.ScriptTarget[target.value],
    module: tsApi.ModuleKind[moduleKind.value],
    moduleResolution: isEsModule
      ? tsApi.ModuleResolutionKind.Bundler
      : tsApi.ModuleResolutionKind.Node10,
    strict: strict.value,
    declaration: declaration.value,
    esModuleInterop: true,
    skipLibCheck: true,
    types: [],
    newLine: tsApi.NewLineKind.LineFeed,
  }
}

const createHost = (
  tsApi: typeof TS,
  options: TS.CompilerOptions,
  code: string,
  outputs: Map<string, string>
): TS.CompilerHost => {
  const inputFile = tsApi.createSourceFile(
    INPUT_FILE,
    code,
    options.target ?? tsApi.ScriptTarget.ES2022,
    true
  )
  return {
    getSourceFile: (fileName) => {
      if (fileName === INPUT_FILE) return inputFile
      const baseName = toBaseName(fileName)
      const text = libTexts.get(baseName)
      if (text === undefined) return undefined
      // lib のパースは重いので target ごとにキャッシュ
      const cacheKey = `${options.target}:${baseName}`
      let sourceFile = libSourceFiles.get(cacheKey)
      if (!sourceFile) {
        sourceFile = tsApi.createSourceFile(
          fileName,
          text,
          options.target ?? tsApi.ScriptTarget.ES2022
        )
        libSourceFiles.set(cacheKey, sourceFile)
      }
      return sourceFile
    },
    getDefaultLibFileName: (opts) => `/${tsApi.getDefaultLibFileName(opts)}`,
    getDefaultLibLocation: () => '/',
    writeFile: (fileName, text) => outputs.set(fileName, text),
    getCurrentDirectory: () => '/',
    getDirectories: () => [],
    getCanonicalFileName: (fileName) => fileName,
    useCaseSensitiveFileNames: () => true,
    getNewLine: () => '\n',
    fileExists: (fileName) =>
      fileName === INPUT_FILE || libTexts.has(toBaseName(fileName)),
    readFile: (fileName) =>
      fileName === INPUT_FILE ? code : libTexts.get(toBaseName(fileName)),
  }
}

const toCategory = (
  tsApi: typeof TS,
  category: TS.DiagnosticCategory
): DiagnosticItem['category'] => {
  switch (category) {
    case tsApi.DiagnosticCategory.Error:
      return 'error'
    case tsApi.DiagnosticCategory.Warning:
      return 'warning'
    case tsApi.DiagnosticCategory.Suggestion:
      return 'suggestion'
    default:
      return 'message'
  }
}

const toDiagnosticItem = (
  tsApi: typeof TS,
  diagnostic: TS.Diagnostic,
  index: number
): DiagnosticItem => {
  const hasPosition =
    diagnostic.file?.fileName === INPUT_FILE && diagnostic.start !== undefined
  const position = hasPosition
    ? diagnostic.file!.getLineAndCharacterOfPosition(diagnostic.start!)
    : null
  return {
    key: `${index}-${diagnostic.code}-${diagnostic.start ?? ''}`,
    category: toCategory(tsApi, diagnostic.category),
    code: diagnostic.code,
    message: tsApi.flattenDiagnosticMessageText(diagnostic.messageText, '\n'),
    line: position ? position.line + 1 : null,
    column: position ? position.character + 1 : null,
    start: hasPosition ? diagnostic.start! : null,
    length: diagnostic.length ?? 0,
  }
}

let compileId = 0

const compile = async () => {
  const currentId = ++compileId
  try {
    if (!ts) {
      status.value = 'loading'
      statusMessage.value = 'Loading the TypeScript compiler...'
      ts = (await import('typescript')).default
    }
    const tsApi = ts
    const options = createCompilerOptions(tsApi)
    await loadLib(tsApi.getDefaultLibFileName(options))
    if (currentId !== compileId) return

    status.value = 'compiling'
    statusMessage.value = 'Compiling...'
    const startedAt = performance.now()

    const outputs = new Map<string, string>()
    const host = createHost(tsApi, options, source.value, outputs)
    const program = tsApi.createProgram([INPUT_FILE], options, host)
    program.emit()
    const result = tsApi.getPreEmitDiagnostics(program)

    jsOutput.value = outputs.get('/input.js') ?? ''
    dtsOutput.value = outputs.get('/input.d.ts') ?? ''
    diagnostics.value = result.map((d, i) => toDiagnosticItem(tsApi, d, i))
    elapsedMs.value = Math.round(performance.now() - startedAt)
    status.value = 'done'
    statusMessage.value = `TypeScript ${tsApi.version}`
  } catch (error) {
    if (currentId !== compileId) return
    status.value = 'failed'
    statusMessage.value =
      error instanceof Error ? error.message : 'Failed to compile.'
  }
}

let debounceTimer: number | undefined

const scheduleCompile = () => {
  window.clearTimeout(debounceTimer)
  debounceTimer = window.setTimeout(compile, DEBOUNCE_MS)
}

watch([source, target, moduleKind, strict, declaration], scheduleCompile)

watch(declaration, (enabled) => {
  if (!enabled) outputTab.value = 'js'
})

onMounted(compile)

onBeforeUnmount(() => {
  window.clearTimeout(debounceTimer)
  compileId++
})

// ---- UI handlers ----

const handleJump = (item: DiagnosticItem) => {
  const textarea = textareaRef.value
  if (!textarea || item.start === null) return
  textarea.focus()
  textarea.setSelectionRange(item.start, item.start + Math.max(item.length, 1))
}

const handleReset = () => {
  source.value = sampleCode
}

const handleClear = () => {
  source.value = ''
}

const copyLabel = ref('copy')

const handleCopyOutput = async () => {
  try {
    await navigator.clipboard.writeText(currentOutput.value)
    copyLabel.value = 'copied!'
  } catch {
    copyLabel.value = 'failed'
  }
  window.setTimeout(() => {
    copyLabel.value = 'copy'
  }, 1500)
}

const categoryClass: Record<DiagnosticItem['category'], string> = {
  error: 'bg-red-100 text-red-700',
  warning: 'bg-yellow-100 text-yellow-800',
  suggestion: 'bg-blue-100 text-blue-700',
  message: 'bg-gray-100 text-gray-600',
}
</script>

<template>
  <ArticleHeader
    title="TypeScript Playground"
    :update-date="metadata.updateDate"
  />

  <section class="mt-20">
    <p class="text-14 leading-relaxed text-gray-700">
      TypeScript を入力・編集すると、ブラウザ内の TypeScript
      コンパイラでリアルタイムに型チェックとトランスパイルを行います。
      コードはサーバーに送信されません。
    </p>

    <div
      class="text-13 mt-16 flex flex-wrap items-center gap-x-20 gap-y-10 rounded-lg border border-gray-200 bg-[#f6f7f8] p-14 text-gray-700"
    >
      <label class="flex items-center gap-6">
        <span class="font-bold">target</span>
        <select
          v-model="target"
          class="rounded-md border border-gray-300 bg-white px-8 py-4"
        >
          <option value="ES5">ES5</option>
          <option value="ES2015">ES2015</option>
          <option value="ES2020">ES2020</option>
          <option value="ES2022">ES2022</option>
          <option value="ESNext">ESNext</option>
        </select>
      </label>
      <label class="flex items-center gap-6">
        <span class="font-bold">module</span>
        <select
          v-model="moduleKind"
          class="rounded-md border border-gray-300 bg-white px-8 py-4"
        >
          <option value="ESNext">ESNext</option>
          <option value="CommonJS">CommonJS</option>
        </select>
      </label>
      <label class="flex items-center gap-6">
        <input v-model="strict" type="checkbox" />
        <span>strict</span>
      </label>
      <label class="flex items-center gap-6">
        <input v-model="declaration" type="checkbox" />
        <span>declaration (.d.ts)</span>
      </label>
    </div>

    <div class="mt-16 grid gap-16 lg:grid-cols-2">
      <div class="flex min-w-0 flex-col">
        <div class="flex items-center justify-between">
          <label for="ts-source" class="text-13 font-bold text-gray-700">
            TypeScript
          </label>
          <div class="flex gap-8">
            <button
              type="button"
              class="text-12 rounded-md border border-gray-400 px-10 py-2 text-gray-700"
              @click="handleReset"
            >
              sample
            </button>
            <button
              type="button"
              class="text-12 rounded-md border border-gray-400 px-10 py-2 text-gray-700"
              @click="handleClear"
            >
              clear
            </button>
          </div>
        </div>
        <textarea
          id="ts-source"
          ref="textareaRef"
          v-model="source"
          rows="22"
          spellcheck="false"
          autocapitalize="off"
          autocomplete="off"
          class="text-13 mt-8 w-full flex-1 resize-y rounded-md border border-gray-300 bg-white p-12 font-mono leading-relaxed whitespace-pre text-gray-800 focus:border-blue-400 focus:outline-none"
          placeholder="Paste or type TypeScript here"
        ></textarea>
      </div>

      <div class="flex min-w-0 flex-col">
        <div class="flex items-center justify-between">
          <div class="flex gap-4" role="tablist" aria-label="output">
            <button
              type="button"
              role="tab"
              :aria-selected="outputTab === 'js'"
              class="text-13 rounded-md px-10 py-2 font-bold"
              :class="
                outputTab === 'js' ? 'bg-black text-white' : 'text-gray-600'
              "
              @click="outputTab = 'js'"
            >
              JavaScript
            </button>
            <button
              v-if="declaration"
              type="button"
              role="tab"
              :aria-selected="outputTab === 'dts'"
              class="text-13 rounded-md px-10 py-2 font-bold"
              :class="
                outputTab === 'dts' ? 'bg-black text-white' : 'text-gray-600'
              "
              @click="outputTab = 'dts'"
            >
              .d.ts
            </button>
          </div>
          <button
            type="button"
            :disabled="!currentOutput"
            class="text-12 rounded-md border border-gray-400 px-10 py-2 text-gray-700 disabled:cursor-not-allowed disabled:opacity-50"
            @click="handleCopyOutput"
          >
            {{ copyLabel }}
          </button>
        </div>
        <div
          role="region"
          aria-label="compiled output"
          tabindex="0"
          class="text-13 mt-8 block min-h-[20rem] flex-1 overflow-auto rounded-md border border-gray-200 bg-[#1e1e1e] p-12 font-mono leading-relaxed whitespace-pre text-[#d4d4d4]"
        >
          {{ currentOutput }}
        </div>
      </div>
    </div>

    <div class="mt-16 rounded-lg border border-gray-200 bg-white p-14">
      <div class="flex flex-wrap items-center gap-x-14 gap-y-6">
        <h3 class="text-14 font-bold text-gray-700">Diagnostics</h3>
        <span
          class="text-12 rounded-full px-8 py-2 font-bold"
          :class="
            errorCount > 0
              ? 'bg-red-100 text-red-700'
              : 'bg-green-100 text-green-700'
          "
        >
          {{ errorCount }} {{ errorCount === 1 ? 'error' : 'errors' }}
        </span>
        <span
          v-if="warningCount > 0"
          class="text-12 rounded-full bg-yellow-100 px-8 py-2 font-bold text-yellow-800"
        >
          {{ warningCount }} {{ warningCount === 1 ? 'warning' : 'warnings' }}
        </span>
        <span class="text-12 ml-auto text-gray-500" aria-live="polite">
          <template v-if="status === 'done'">
            {{ statusMessage }} / {{ elapsedMs }}ms
          </template>
          <template v-else>{{ statusMessage }}</template>
        </span>
      </div>

      <p
        v-if="status === 'done' && diagnostics.length === 0"
        class="text-13 mt-10 text-green-700"
      >
        No problems found.
      </p>
      <ul v-else class="mt-10 space-y-6">
        <li v-for="item in diagnostics" :key="item.key">
          <button
            type="button"
            class="text-13 flex w-full items-start gap-10 rounded-md p-6 text-left hover:bg-gray-50 disabled:cursor-default"
            :disabled="item.start === null"
            @click="handleJump(item)"
          >
            <span
              class="text-11 shrink-0 rounded px-6 py-1 font-bold uppercase"
              :class="categoryClass[item.category]"
            >
              {{ item.category }}
            </span>
            <span class="shrink-0 font-mono text-gray-500">
              <template v-if="item.line !== null">
                {{ item.line }}:{{ item.column }}
              </template>
              <template v-else>-</template>
            </span>
            <span class="min-w-0 whitespace-pre-wrap text-gray-800">
              {{ item.message }}
              <span class="text-gray-400">TS{{ item.code }}</span>
            </span>
          </button>
        </li>
      </ul>
    </div>
  </section>
</template>
