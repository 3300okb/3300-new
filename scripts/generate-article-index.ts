import { promises as fs } from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const ARTICLES_DIR = path.join(ROOT, 'src/components/article')
const OUT_INDEX = path.join(ROOT, 'public/article-index.json')
const OUT_SEARCH = path.join(ROOT, 'public/search-index.json')
const OUT_INDEX_PREFIX = path.join(ROOT, 'public/article-index-')
const OUT_SEARCH_PREFIX = path.join(ROOT, 'public/search-index-')

interface ArticleIndexEntry {
  articlePath: string
  articleName: string
  category: string
  updateDate: string
}

interface SearchIndexEntry {
  articlePath: string
  articleName: string
  category: string
  preBlocks: string[]
}

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

const stripTags = (input: string): string => {
  return input.replace(/<[^>]*>/g, '')
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
      if (entry.isFile() && entry.name.endsWith('.vue')) {
        files.push(fullPath)
      }
    })
  )
}

const getUpdateDate = (content: string) => {
  const match = content.match(/updateDate\s*:\s*['"]([^'"]+)['"]/)
  return match ? match[1] : '1970/01/01'
}

const getPreBlocks = (content: string) => {
  const matches = Array.from(content.matchAll(/<pre[^>]*>([\s\S]*?)<\/pre>/gi))
  return matches
    .map((match) => match[1] || '')
    .map((raw) => decodeEntities(stripTags(raw)))
    .map((text) => text.replace(/\r\n/g, '\n').trim())
    .filter((text) => text.length > 0)
}

const run = async () => {
  const files: string[] = []
  await walk(ARTICLES_DIR, files)
  files.sort((a, b) => a.localeCompare(b))

  const indexEntries: ArticleIndexEntry[] = []
  const searchEntries: SearchIndexEntry[] = []
  const categories = new Set<string>()

  for (const file of files) {
    const rel = path.relative(ARTICLES_DIR, file)
    const parts = rel.split(path.sep)
    if (parts.length < 2) continue
    const category = parts[0]
    const fileName = parts[parts.length - 1]?.replace(/\.vue$/, '')
    if (!category || !fileName) continue

    const content = await fs.readFile(file, 'utf8')
    const updateDate = getUpdateDate(content)
    const articlePath = `${category}/${fileName}`

    indexEntries.push({
      articlePath,
      articleName: fileName,
      category,
      updateDate,
    })
    categories.add(category)

    const preBlocks = getPreBlocks(content)
    searchEntries.push({
      articlePath,
      articleName: fileName,
      category,
      preBlocks,
    })
  }

  const categoryList = Array.from(categories).sort((a, b) => a.localeCompare(b))

  await fs.writeFile(
    OUT_INDEX,
    JSON.stringify({ categories: categoryList }, null, 2),
    'utf8'
  )
  await fs.writeFile(
    OUT_SEARCH,
    JSON.stringify({ categories: categoryList }, null, 2),
    'utf8'
  )

  const indexByCategory = new Map<string, ArticleIndexEntry[]>()
  const searchByCategory = new Map<string, SearchIndexEntry[]>()

  for (const entry of indexEntries) {
    const list = indexByCategory.get(entry.category) || []
    list.push(entry)
    indexByCategory.set(entry.category, list)
  }

  for (const entry of searchEntries) {
    const list = searchByCategory.get(entry.category) || []
    list.push(entry)
    searchByCategory.set(entry.category, list)
  }

  for (const category of categoryList) {
    const indexList = indexByCategory.get(category) || []
    const searchList = searchByCategory.get(category) || []
    await fs.writeFile(
      `${OUT_INDEX_PREFIX}${category}.json`,
      JSON.stringify(indexList, null, 2),
      'utf8'
    )
    await fs.writeFile(
      `${OUT_SEARCH_PREFIX}${category}.json`,
      JSON.stringify(searchList, null, 2),
      'utf8'
    )
  }
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
