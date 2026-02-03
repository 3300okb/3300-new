import { promises as fs } from 'node:fs'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import os from 'node:os'
import crypto from 'node:crypto'

const ROOT = process.cwd()
const TEXT_PATH = path.join(ROOT, 'scripts/.font-subset.txt')
const CACHE_PATH = path.join(ROOT, 'scripts/.font-subset-cache.json')
const PROFILE = process.env.FONT_SUBSET_PROFILE === '1'

const nowMs = () => Number(process.hrtime.bigint()) / 1_000_000

const logTime = (label: string, startMs: number) => {
  if (!PROFILE) return
  const duration = nowMs() - startMs
  console.log(`Font subset: ${label} ${duration.toFixed(1)}ms`)
}

const FONT_SOURCES = [
  {
    src: 'public/sample/font/LINESeedJP_OTF_Rg.otf',
    dest: 'public/sample/font/LINESeedJP_OTF_Rg.woff2',
  },
  {
    src: 'public/sample/font/LINESeedJP_OTF_Bd.otf',
    dest: 'public/sample/font/LINESeedJP_OTF_Bd.woff2',
  },
]

const SCAN_DIRS = ['src', 'public']
const SCAN_EXTS = new Set(['.vue', '.html'])

const decodeEntities = (input: string): string => {
  return input
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) =>
      String.fromCodePoint(parseInt(hex, 16))
    )
    .replace(/&#([0-9]+);/g, (_, num) =>
      String.fromCodePoint(parseInt(num, 10))
    )
}

const stripScriptsAndStyles = (input: string): string => {
  return input
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
}

const stripTags = (input: string): string => {
  return input.replace(/<[^>]*>/g, ' ')
}

const normalizeFont = (src: string, dest: string) => {
  const code = [
    'import sys',
    'from fontTools.ttLib import TTFont',
    'src, dst = sys.argv[1], sys.argv[2]',
    'font = TTFont(src)',
    "os2 = font['OS/2']",
    "head = font['head']",
    'bold = bool(os2.fsSelection & (1 << 5)) or bool(head.macStyle & 1) or (getattr(os2, "usWeightClass", 0) >= 600)',
    'if bold:',
    '    os2.fsSelection |= (1 << 5)',
    '    head.macStyle |= 1',
    'else:',
    '    os2.fsSelection &= ~(1 << 5)',
    '    head.macStyle &= ~1',
    'font.save(dst)',
  ].join('\n')

  const result = spawnSync('python3', ['-c', code, src, dest], {
    stdio: 'inherit',
  })

  if (result.status !== 0) {
    throw new Error(`font metadata normalize failed for ${src}`)
  }
}

const walk = async (dir: string, files: string[]) => {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name)
      if (entry.isDirectory()) {
        await walk(fullPath, files)
        return
      }
      if (entry.isFile() && SCAN_EXTS.has(path.extname(entry.name))) {
        files.push(fullPath)
      }
    })
  )
}

const getScanFiles = async () => {
  const startMs = nowMs()
  const files: string[] = []
  for (const dir of SCAN_DIRS) {
    const fullDir = path.join(ROOT, dir)
    try {
      await walk(fullDir, files)
    } catch {
      // ignore missing dirs
    }
  }

  const hash = crypto.createHash('sha256')
  const stats = await Promise.all(
    files.map(async (file) => {
      const stat = await fs.stat(file)
      return { file, stat }
    })
  )
  stats
    .sort((a, b) => a.file.localeCompare(b.file))
    .forEach(({ file, stat }) => {
      hash.update(`${file}:${stat.mtimeMs}:${stat.size}\n`)
    })

  logTime('scan files', startMs)
  return { files, manifestHash: hash.digest('hex') }
}

const collectText = async (files: string[]) => {
  const startMs = nowMs()
  const collectedChars = new Set<string>()
  for (const file of files) {
    const raw = await fs.readFile(file, 'utf8')
    const cleaned = stripTags(stripScriptsAndStyles(raw))
    const decoded = decodeEntities(cleaned)
    for (const char of decoded) {
      collectedChars.add(char)
    }
  }

  const sortedChars = [...collectedChars].sort(
    (a, b) => (a.codePointAt(0) ?? 0) - (b.codePointAt(0) ?? 0)
  )
  const text = sortedChars.join('')

  logTime('collect text', startMs)
  return text
}

const ensurePyftsubset = () => {
  const envCmd = process.env.PYFTSUBSET
  if (envCmd) {
    const check = spawnSync(envCmd, ['--help'], { stdio: 'ignore' })
    if (check.status === 0) {
      return { cmd: envCmd, baseArgs: [] as string[] }
    }
  }

  const pathCmd = 'pyftsubset'
  const pathCheck = spawnSync(pathCmd, ['--help'], { stdio: 'ignore' })
  if (pathCheck.status === 0) {
    return { cmd: pathCmd, baseArgs: [] as string[] }
  }

  const pythonCmd = 'python3'
  const pythonCheck = spawnSync(
    pythonCmd,
    ['-m', 'fontTools.subset', '--help'],
    { stdio: 'ignore' }
  )
  if (pythonCheck.status === 0) {
    return { cmd: pythonCmd, baseArgs: ['-m', 'fontTools.subset'] }
  }

  throw new Error(
    'pyftsubset が見つかりません。PYFTSUBSET でパスを指定するか、fonttools をインストールしてください。'
  )
}

const run = async () => {
  const totalStartMs = nowMs()
  const { files, manifestHash } = await getScanFiles()
  let cache: {
    textHash?: string
    contentHash?: string
    fonts?: Record<string, number>
  } = {}
  try {
    const raw = await fs.readFile(CACHE_PATH, 'utf8')
    cache = JSON.parse(raw) as {
      textHash?: string
      contentHash?: string
      fonts?: Record<string, number>
    }
  } catch {
    cache = {}
  }

  const fontStats = await Promise.all(
    FONT_SOURCES.map(async (font) => {
      const src = path.join(ROOT, font.src)
      const dest = path.join(ROOT, font.dest)
      const [srcStat, destStat] = await Promise.allSettled([
        fs.stat(src),
        fs.stat(dest),
      ])
      return {
        srcPath: font.src,
        destPath: font.dest,
        srcMtime: srcStat.status === 'fulfilled' ? srcStat.value.mtimeMs : 0,
        destMtime: destStat.status === 'fulfilled' ? destStat.value.mtimeMs : 0,
      }
    })
  )

  const allOutputsExist = fontStats.every((item) => item.destMtime > 0)
  const sourcesNewerThanOutputs = fontStats.some(
    (item) => item.srcMtime > item.destMtime
  )
  const shouldSubsetByFont = !allOutputsExist || sourcesNewerThanOutputs

  const text = await collectText(files)
  if (text.length < 50) {
    throw new Error(
      '抽出テキストが少なすぎます。対象ファイルを確認してください。'
    )
  }

  const textHash = crypto.createHash('sha256').update(text).digest('hex')

  if (!shouldSubsetByFont && cache.contentHash === textHash) {
    const nextCache = {
      textHash: manifestHash,
      contentHash: textHash,
      fonts: Object.fromEntries(
        fontStats.map((item) => [item.srcPath, item.srcMtime])
      ),
    }
    await fs.writeFile(CACHE_PATH, JSON.stringify(nextCache, null, 2), 'utf8')
    console.log('Font subset: content unchanged, skipping.')
    logTime('total', totalStartMs)
    return
  }

  await fs.writeFile(TEXT_PATH, text, 'utf8')
  const { cmd, baseArgs } = ensurePyftsubset()
  const tempDir = await fs.mkdtemp(path.join(os.tmpdir(), 'font-normalize-'))

  const subsetStartMs = nowMs()
  for (const font of FONT_SOURCES) {
    const src = path.join(ROOT, font.src)
    const dest = path.join(ROOT, font.dest)
    const normalized = path.join(
      tempDir,
      `${path.basename(font.src)}.normalized`
    )

    normalizeFont(src, normalized)

    const result = spawnSync(
      cmd,
      [
        ...baseArgs,
        normalized,
        '--flavor=woff2',
        `--text-file=${TEXT_PATH}`,
        `--output-file=${dest}`,
      ],
      { stdio: 'inherit' }
    )

    if (result.status !== 0) {
      throw new Error(`pyftsubset failed for ${font.src}`)
    }
  }
  logTime('subset', subsetStartMs)

  await fs.unlink(TEXT_PATH)
  await fs.rm(tempDir, { recursive: true, force: true })

  const nextCache = {
    textHash: manifestHash,
    contentHash: textHash,
    fonts: Object.fromEntries(
      fontStats.map((item) => [item.srcPath, item.srcMtime])
    ),
  }
  await fs.writeFile(CACHE_PATH, JSON.stringify(nextCache, null, 2), 'utf8')
  logTime('total', totalStartMs)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
