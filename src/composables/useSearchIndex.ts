export interface SearchIndexEntry {
  articlePath: string
  articleName: string
  category: string
  preBlocks: string[]
}

// 検索のたびに split / toLowerCase しないよう、読み込み時に1回だけ行分割と小文字化をしておく
export interface SearchablePreBlock {
  lines: string[]
  lowerLines: string[]
}

export interface SearchableEntry {
  articlePath: string
  articleName: string
  category: string
  preBlocks: SearchablePreBlock[]
}

let searchIndexCache: SearchableEntry[] | null = null
let searchIndexPromise: Promise<SearchableEntry[]> | null = null

export const loadSearchIndexAll = async () => {
  if (searchIndexCache) return searchIndexCache
  if (searchIndexPromise) return searchIndexPromise

  searchIndexPromise = fetch('/search-index.json')
    .then(async (res) => {
      if (!res.ok) throw new Error('Failed to load search index')
      return (await res.json()) as SearchIndexEntry[]
    })
    .then((data) => {
      searchIndexCache = data.map((entry) => ({
        ...entry,
        preBlocks: entry.preBlocks.map((preContent) => {
          const lines = preContent.split('\n')
          return { lines, lowerLines: lines.map((line) => line.toLowerCase()) }
        }),
      }))
      return searchIndexCache
    })
    .finally(() => {
      searchIndexPromise = null
    })

  return searchIndexPromise
}
