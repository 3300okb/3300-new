import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { loadArticleIndexAll } from './useArticleIndex'
import { loadSearchIndexAll } from './useSearchIndex'

export interface SearchResult {
  articlePath: string
  articleName: string
  category: string
  snippet: string
  lineNumber: number
  preIndex: number
  searchQuery: string
  isFileNameMatch?: boolean
}

export type SearchBoxEmit = {
  (event: 'update:selectedCategory', value: string | null): void
  (event: 'update:selectedArticle', value: string | null): void
  (event: 'scrollToPreIndex', preIndex: number, searchQuery: string): void
  (event: 'skipNextUrlUpdate'): void
  (event: 'ready'): void
}

export const useSearchBoxLogic = (emit: SearchBoxEmit) => {
  const searchQuery = ref('')
  const searchResults = ref<SearchResult[]>([])
  const isSearching = ref(false)
  const inputRef = ref<HTMLInputElement | null>(null)
  const activeResultIndex = ref<number | null>(null)
  let prefetchStarted = false
  let searchId = 0 // 検索のユニークIDを管理
  let searchTimeoutId: number | null = null // デバウンス用
  let pendingScrollToIndex: number | null = null // 検索結果復元後にスクロールするインデックス
  let isRestoringFromHistory = false // 履歴からの復元中かどうか
  let isInSearchMode = false // 現在検索モード中かどうか

  const prefetchSearchIndex = () => {
    if (prefetchStarted) return
    prefetchStarted = true
    void loadArticleIndexAll()
    void loadSearchIndexAll()
  }

  const resetSearchState = () => {
    searchResults.value = []
    isSearching.value = false
    activeResultIndex.value = null
  }

  const getHighlightedSegments = (text: string, query: string) => {
    const trimmed = query.trim()
    if (!trimmed) {
      return [{ text, mark: false }]
    }

    const lowerText = text.toLowerCase()
    const lowerQuery = trimmed.toLowerCase()
    const segments: { text: string; mark: boolean }[] = []

    let start = 0
    let index = lowerText.indexOf(lowerQuery, start)
    while (index !== -1) {
      if (index > start) {
        segments.push({ text: text.slice(start, index), mark: false })
      }
      segments.push({
        text: text.slice(index, index + trimmed.length),
        mark: true,
      })
      start = index + trimmed.length
      index = lowerText.indexOf(lowerQuery, start)
    }

    if (start < text.length) {
      segments.push({ text: text.slice(start), mark: false })
    }

    return segments
  }

  const updateSearchUrl = (capturedQuery: string) => {
    if (!capturedQuery || isRestoringFromHistory) return

    const params = new URLSearchParams()
    params.set('search', capturedQuery)
    const newUrl = `?${params.toString()}`

    if (!isInSearchMode) {
      isInSearchMode = true
      window.history.pushState({}, '', newUrl)
    } else {
      window.history.replaceState({}, '', newUrl)
    }
  }

  const buildFileNameResults = async (
    query: string,
    capturedQuery: string
  ): Promise<SearchResult[]> => {
    const articleIndex = await loadArticleIndexAll()
    const fileNameResults: SearchResult[] = []
    for (const entry of articleIndex) {
      if (entry.articleName.toLowerCase().includes(query)) {
        fileNameResults.push({
          articlePath: entry.articlePath,
          articleName: entry.articleName,
          category: entry.category,
          snippet: `ファイル名: ${entry.articleName}`,
          lineNumber: 0,
          preIndex: 0,
          searchQuery: capturedQuery,
          isFileNameMatch: true,
        })
      }
    }
    return fileNameResults
  }

  const buildContentResults = async (
    query: string,
    capturedQuery: string,
    fileNameResults: SearchResult[]
  ): Promise<SearchResult[]> => {
    const results: SearchResult[] = [...fileNameResults]
    const searchIndex = await loadSearchIndexAll()

    // 次にコンテンツマッチを検索
    for (const entry of searchIndex) {
      entry.preBlocks.forEach((preContent, preIndex) => {
        const preLines = preContent.split('\n')
        preLines.forEach((line: string, lineIndex: number) => {
          if (line.toLowerCase().includes(query)) {
            // 前後5行を取得
            const startLine = Math.max(0, lineIndex - 5)
            const endLine = Math.min(preLines.length, lineIndex + 6)
            const snippetLines = preLines.slice(startLine, endLine)

            // 空行でない行のみをフィルタリング
            const nonEmptyLines = snippetLines.filter(
              (l: string) => l.trim() !== ''
            )

            if (nonEmptyLines.length === 0) return

            // 各行をtrimしてから結合し、前後の空白は削除
            const snippet = nonEmptyLines
              .map((l) => l.trim())
              .join('\n')
              .trim()

            results.push({
              articlePath: entry.articlePath,
              articleName: entry.articleName,
              category: entry.category,
              snippet: snippet,
              lineNumber: lineIndex + 1,
              preIndex: preIndex,
              searchQuery: capturedQuery,
              isFileNameMatch: false,
            })
          }
        })
      })
    }

    return results
  }

  const updateIntermediateResults = (
    currentSearchId: number,
    capturedQuery: string,
    results: SearchResult[]
  ) => {
    if (currentSearchId !== searchId) return false

    searchResults.value = results
    isSearching.value = true
    activeResultIndex.value = null
    updateSearchUrl(capturedQuery)
    return true
  }

  const updateFinalResults = (
    currentSearchId: number,
    results: SearchResult[]
  ) => {
    if (currentSearchId !== searchId) return false

    searchResults.value = results
    isSearching.value = false
    activeResultIndex.value = null
    return true
  }

  // 検索処理
  const performSearch = () => {
    // デバウンス: 300ms待機
    if (searchTimeoutId !== null) {
      clearTimeout(searchTimeoutId)
    }

    if (!searchQuery.value.trim()) {
      resetSearchState()
      return
    }

    isSearching.value = true
    activeResultIndex.value = null

    searchTimeoutId = window.setTimeout(() => {
      executeSearch()
    }, 300)
  }

  // 実際の検索実行
  const executeSearch = async () => {
    // 検索クエリをキャプチャ（非同期処理中に変更されないように）
    const capturedQuery = searchQuery.value.trim()

    if (!capturedQuery) {
      resetSearchState()
      return
    }

    // 現在の検索に一意のIDを割り当て
    const currentSearchId = ++searchId
    searchResults.value = []

    try {
      const query = capturedQuery.toLowerCase()

      // まずファイル名マッチを即時表示
      const fileNameResults = await buildFileNameResults(query, capturedQuery)
      updateIntermediateResults(currentSearchId, capturedQuery, fileNameResults)

      const results = await buildContentResults(
        query,
        capturedQuery,
        fileNameResults
      )

      // この検索がまだ最新のものか確認（より新しい検索が開始されていないか）
      updateFinalResults(currentSearchId, results)
    } catch (error) {
      console.error('Search error:', error)
      if (currentSearchId === searchId) {
        isSearching.value = false
      }
    }
  }

  const selectSearchResult = (result: SearchResult, resultIndex?: number) => {
    // まず現在の検索URLにresultIndexを追加（ブラウザバック時にスクロール位置を復元するため）
    if (resultIndex !== undefined && searchQuery.value) {
      const searchParams = new URLSearchParams()
      searchParams.set('search', searchQuery.value)
      searchParams.set('resultIndex', resultIndex.toString())
      const searchUrl = `?${searchParams.toString()}`
      window.history.replaceState({}, '', searchUrl)
    }

    // 検索モードを終了
    isInSearchMode = false

    // 次に記事ページのURLをpush
    const params = new URLSearchParams()
    params.set('category', result.category)
    params.set('article', result.articleName)

    // ファイル名マッチの場合はpreIndexとqueryを設定しない
    if (!result.isFileNameMatch) {
      params.set('preIndex', result.preIndex.toString())
      params.set('query', result.searchQuery)
    }

    const newUrl = `?${params.toString()}`
    window.history.pushState({}, '', newUrl)

    emit('skipNextUrlUpdate')
    emit('update:selectedCategory', result.category)
    emit('update:selectedArticle', result.articleName)

    // ファイル名マッチの場合はスクロールしない
    if (!result.isFileNameMatch) {
      emit('scrollToPreIndex', result.preIndex, result.searchQuery)
    }

    searchQuery.value = ''
    searchResults.value = []
    activeResultIndex.value = null
  }

  const ensureResultVisible = (
    targetElement: HTMLElement,
    container: HTMLElement
  ) => {
    const containerRect = container.getBoundingClientRect()
    const elementRect = targetElement.getBoundingClientRect()
    const isAbove = elementRect.top < containerRect.top
    const isBelow = elementRect.bottom > containerRect.bottom

    if (isAbove) {
      container.scrollTop -= containerRect.top - elementRect.top
    } else if (isBelow) {
      container.scrollTop += elementRect.bottom - containerRect.bottom
    }
  }

  const focusResultByIndex = async (index: number) => {
    if (index < 0 || index >= searchResults.value.length) {
      return
    }
    activeResultIndex.value = index
    await nextTick()
    const targetElement = document.querySelector(
      `[data-result-index="${index}"]`
    ) as HTMLElement | null
    if (!targetElement) return
    const container = targetElement.closest(
      '.overflow-y-auto'
    ) as HTMLElement | null
    if (container) {
      ensureResultVisible(targetElement, container)
    }
    targetElement.focus()
  }

  const selectResultByIndex = (index: number) => {
    const result = searchResults.value[index]
    if (result) {
      selectSearchResult(result, index)
    }
  }

  const clearActiveResult = () => {
    activeResultIndex.value = null
    inputRef.value?.focus()
  }

  const handleInputKeydown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowDown' && searchResults.value.length > 0) {
      event.preventDefault()
      void focusResultByIndex(0)
    } else if (event.key === 'Enter' && searchResults.value.length > 0) {
      event.preventDefault()
      selectResultByIndex(0)
    }
  }

  const handleResultKeydown = (event: KeyboardEvent, index: number) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      void focusResultByIndex(
        Math.min(index + 1, searchResults.value.length - 1)
      )
      return
    }
    if (event.key === 'ArrowUp') {
      event.preventDefault()
      const nextIndex = index - 1
      if (nextIndex < 0) {
        clearActiveResult()
      } else {
        void focusResultByIndex(nextIndex)
      }
      return
    }
    if (event.key === 'Enter') {
      event.preventDefault()
      selectResultByIndex(index)
      return
    }
    if (event.key === 'Escape') {
      event.preventDefault()
      clearActiveResult()
    }
  }

  const restoreSearchFromHistory = (searchParam: string) => {
    emit('skipNextUrlUpdate')
    emit('update:selectedCategory', null)
    emit('update:selectedArticle', null)
    searchQuery.value = searchParam

    // 検索結果表示時は必ずページトップにスクロール（iPhone対応）
    window.scrollTo(0, 0)

    performSearch()
  }

  const savePendingScrollIndex = (resultIndexParam: string | null) => {
    if (!resultIndexParam) return
    const resultIndex = parseInt(resultIndexParam, 10)
    if (!isNaN(resultIndex)) {
      pendingScrollToIndex = resultIndex
    }
  }

  const clearSearchOnTop = () => {
    // トップページに戻る
    // リロード後のバックの場合のみ検索窓をクリア
    if (sessionStorage.getItem('reloadedFromSearch')) {
      sessionStorage.removeItem('reloadedFromSearch')
      searchQuery.value = ''
      searchResults.value = []
    }
  }

  const handlePopState = () => {
    const params = new URLSearchParams(window.location.search)
    const searchParam = params.get('search')
    const categoryParam = params.get('category')
    const articleParam = params.get('article')
    const resultIndexParam = params.get('resultIndex')

    // 履歴復元中は検索URLの更新をスキップするためフラグを設定
    isRestoringFromHistory = true

    if (searchParam) {
      // 検索結果が表示された後にスクロールするインデックスを保存
      savePendingScrollIndex(resultIndexParam)
      restoreSearchFromHistory(searchParam)
    } else if (!categoryParam && !articleParam) {
      clearSearchOnTop()
    }

    setTimeout(() => {
      isRestoringFromHistory = false
    }, 100)
  }

  const focusInput = () => {
    inputRef.value?.focus()
  }

  const handleGlobalKeydown = (event: KeyboardEvent) => {
    if (event.defaultPrevented) return
    if (event.key !== 'f' && event.key !== 'F') return
    if (event.metaKey || event.ctrlKey || event.altKey) return

    const target = event.target as HTMLElement | null
    if (target) {
      const tagName = target.tagName?.toLowerCase()
      if (
        tagName === 'input' ||
        tagName === 'textarea' ||
        (target as HTMLElement).isContentEditable
      ) {
        return
      }
    }

    event.preventDefault()
    focusInput()
  }

  onMounted(() => {
    const params = new URLSearchParams(window.location.search)
    const searchParam = params.get('search')

    if (searchParam) {
      // 初期ロード時は検索パラメータをクリアしてトップに戻る
      window.history.replaceState({}, '', '/')
      searchQuery.value = ''
      searchResults.value = []
      nextTick(() => {
        window.scrollTo(0, 0)
      })
    }

    emit('ready')
    window.addEventListener('popstate', handlePopState)
    window.addEventListener('keydown', handleGlobalKeydown)

    if ('requestIdleCallback' in window) {
      ;(
        window as Window & { requestIdleCallback?: (cb: () => void) => number }
      ).requestIdleCallback?.(() => {
        prefetchSearchIndex()
      })
    } else {
      setTimeout(() => {
        prefetchSearchIndex()
      }, 500)
    }
  })

  onBeforeUnmount(() => {
    window.removeEventListener('popstate', handlePopState)
    window.removeEventListener('keydown', handleGlobalKeydown)
  })

  // 検索結果が更新されたら、待機中のスクロールを実行
  watch(searchResults, async () => {
    // 検索結果が表示された時、ページを最上部にスクロール（iPhone Safari対応）
    if (searchResults.value.length > 0) {
      window.scrollTo(0, 0)
    }

    if (pendingScrollToIndex !== null && searchResults.value.length > 0) {
      const targetIndex = pendingScrollToIndex
      pendingScrollToIndex = null

      // DOM更新を待つ
      await nextTick()
      setTimeout(() => {
        const resultElements = document.querySelectorAll('[data-result-index]')
        const targetElement = Array.from(resultElements).find(
          (el) => el.getAttribute('data-result-index') === String(targetIndex)
        ) as HTMLElement

        if (targetElement) {
          // 検索結果コンテナを取得
          const container = targetElement.closest(
            '.overflow-y-auto'
          ) as HTMLElement
          if (container) {
            // コンテナ内でのスクロール位置を計算（ページ全体はスクロールしない）
            const containerRect = container.getBoundingClientRect()
            const elementRect = targetElement.getBoundingClientRect()
            const scrollTop =
              elementRect.top -
              containerRect.top +
              container.scrollTop -
              container.clientHeight / 2 +
              elementRect.height / 2

            // コンテナのみをスクロール
            container.scrollTop = scrollTop
          }
        }

        // フラグをリセット
        isRestoringFromHistory = false
      }, 100)
    }
  })

  return {
    searchQuery,
    searchResults,
    isSearching,
    inputRef,
    activeResultIndex,
    getHighlightedSegments,
    performSearch,
    prefetchSearchIndex,
    selectSearchResult,
    handleInputKeydown,
    handleResultKeydown,
    focusInput,
  }
}
