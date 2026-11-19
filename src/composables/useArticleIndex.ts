export interface ArticleIndexEntry {
  articlePath: string
  articleName: string
  category: string
  updateDate: string
}

let indexCache: ArticleIndexEntry[] | null = null
let indexPromise: Promise<ArticleIndexEntry[]> | null = null

// index.html で先読みしている /article-index-all.json を使う
export const loadArticleIndexAll = async () => {
  if (indexCache) return indexCache
  if (indexPromise) return indexPromise

  indexPromise = fetch('/article-index-all.json')
    .then(async (res) => {
      if (!res.ok) throw new Error('Failed to load article index')
      return (await res.json()) as ArticleIndexEntry[]
    })
    .then((data) => {
      indexCache = data
      return data
    })
    .finally(() => {
      indexPromise = null
    })

  return indexPromise
}

export const loadArticleIndexByCategory = async (category: string) => {
  const index = await loadArticleIndexAll()
  return index.filter((entry) => entry.category === category)
}
