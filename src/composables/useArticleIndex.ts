export interface ArticleIndexEntry {
  articlePath: string
  articleName: string
  category: string
  updateDate: string
}

export interface ArticleIndexManifest {
  categories: string[]
}

let indexCacheAll: ArticleIndexEntry[] | null = null
const indexCacheByCategory = new Map<string, ArticleIndexEntry[]>()
let indexManifest: ArticleIndexManifest | null = null
let indexManifestPromise: Promise<ArticleIndexManifest> | null = null
let indexAllPromise: Promise<ArticleIndexEntry[]> | null = null

export const loadArticleIndexManifest = async () => {
  if (indexManifest) return indexManifest
  if (indexManifestPromise) return indexManifestPromise

  indexManifestPromise = fetch('/article-index.json')
    .then(async (res) => {
      if (!res.ok) throw new Error('Failed to load article index')
      return (await res.json()) as ArticleIndexManifest
    })
    .then((data) => {
      indexManifest = data
      return data
    })
    .finally(() => {
      indexManifestPromise = null
    })

  return indexManifestPromise
}

export const loadArticleIndexByCategory = async (category: string) => {
  const cached = indexCacheByCategory.get(category)
  if (cached) return cached

  const data = await fetch(`/article-index-${category}.json`).then(
    async (res) => {
      if (!res.ok) throw new Error('Failed to load article index')
      return (await res.json()) as ArticleIndexEntry[]
    }
  )

  indexCacheByCategory.set(category, data)
  return data
}

export const loadArticleIndexAll = async () => {
  if (indexCacheAll) return indexCacheAll
  if (indexAllPromise) return indexAllPromise

  indexAllPromise = (async () => {
    const manifest = await loadArticleIndexManifest()
    const lists = await Promise.all(
      manifest.categories.map((category) =>
        loadArticleIndexByCategory(category)
      )
    )
    indexCacheAll = lists.flat()
    return indexCacheAll
  })().finally(() => {
    indexAllPromise = null
  })

  return indexAllPromise
}
