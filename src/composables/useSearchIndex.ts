export interface SearchIndexEntry {
  articlePath: string
  articleName: string
  category: string
  preBlocks: string[]
}

export interface SearchIndexManifest {
  categories: string[]
}

let searchIndexCache: SearchIndexEntry[] | null = null
const searchIndexByCategory = new Map<string, SearchIndexEntry[]>()
let searchManifest: SearchIndexManifest | null = null
let searchManifestPromise: Promise<SearchIndexManifest> | null = null
let searchIndexPromise: Promise<SearchIndexEntry[]> | null = null

export const loadSearchIndexManifest = async () => {
  if (searchManifest) return searchManifest
  if (searchManifestPromise) return searchManifestPromise

  searchManifestPromise = fetch('/search-index.json')
    .then(async (res) => {
      if (!res.ok) throw new Error('Failed to load search index')
      return (await res.json()) as SearchIndexManifest
    })
    .then((data) => {
      searchManifest = data
      return data
    })
    .finally(() => {
      searchManifestPromise = null
    })

  return searchManifestPromise
}

export const loadSearchIndexByCategory = async (category: string) => {
  const cached = searchIndexByCategory.get(category)
  if (cached) return cached

  const data = await fetch(`/search-index-${category}.json`).then(
    async (res) => {
      if (!res.ok) throw new Error('Failed to load search index')
      return (await res.json()) as SearchIndexEntry[]
    }
  )

  searchIndexByCategory.set(category, data)
  return data
}

export const loadSearchIndexAll = async () => {
  if (searchIndexCache) return searchIndexCache
  if (searchIndexPromise) return searchIndexPromise

  searchIndexPromise = (async () => {
    const manifest = await loadSearchIndexManifest()
    const results = await Promise.allSettled(
      manifest.categories.map((category) => loadSearchIndexByCategory(category))
    )
    searchIndexCache = results
      .filter(
        (r): r is PromiseFulfilledResult<SearchIndexEntry[]> =>
          r.status === 'fulfilled'
      )
      .flatMap((r) => r.value)
    return searchIndexCache
  })().finally(() => {
    searchIndexPromise = null
  })

  return searchIndexPromise
}
