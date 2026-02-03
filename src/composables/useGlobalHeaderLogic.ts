import {
  ref,
  onMounted,
  onBeforeUnmount,
  watch,
  defineAsyncComponent,
  shallowRef,
  markRaw,
  nextTick,
  type Component,
  type Ref,
} from 'vue'

interface Props {
  selectedCategory: string | null
  selectedArticle: string | null
}

type GlobalHeaderEmit = {
  (event: 'update:selectedCategory', value: string | null): void
  (event: 'update:selectedArticle', value: string | null): void
  (event: 'scrollToPreIndex', preIndex: number, searchQuery: string): void
  (event: 'resetScroll'): void
}

export const useGlobalHeaderLogic = (props: Props, emit: GlobalHeaderEmit) => {
  const categories = ref<string[]>([])
  let skipNextUrlUpdate = false as boolean // 手動でURL更新した直後はwatchをスキップ
  let isRestoringFromHistory = false // 履歴からの復元中かどうか

  const searchComponent = shallowRef<Component | null>(null)
  const searchBoxRef = ref<{ focusInput?: () => void } | null>(null)
  const isSearchLoaded = ref(false)
  const isSearchReady = ref(false)
  const shouldFocusSearch = ref(false)

  const focusSearchInput = () => {
    const tryFocus = (attemptsLeft = 8) => {
      searchBoxRef.value?.focusInput?.()
      const input = document.getElementById(
        'search-input'
      ) as HTMLInputElement | null
      input?.focus()
      if (attemptsLeft > 0 && document.activeElement !== input) {
        setTimeout(() => tryFocus(attemptsLeft - 1), 50)
      }
    }

    nextTick(() => {
      requestAnimationFrame(() => {
        tryFocus()
      })
    })
  }

  const ensureSearchLoaded = (focusInput = false) => {
    if (!isSearchLoaded.value) {
      isSearchLoaded.value = true
    }
    if (focusInput) {
      if (isSearchReady.value) {
        focusSearchInput()
      } else {
        shouldFocusSearch.value = true
      }
    }
  }

  const handleSearchScrollToPreIndex = (
    preIndex: number,
    searchQuery: string
  ) => {
    emit('scrollToPreIndex', preIndex, searchQuery)
  }

  const handleSkipNextUrlUpdate = () => {
    skipNextUrlUpdate = true
  }

  const handleSearchReady = () => {
    isSearchReady.value = true
    if (shouldFocusSearch.value) {
      focusSearchInput()
      shouldFocusSearch.value = false
    }
  }

  watch(searchBoxRef as Ref<{ focusInput?: () => void } | null>, (value) => {
    if (value && shouldFocusSearch.value) {
      focusSearchInput()
      shouldFocusSearch.value = false
    }
  })

  const handleGlobalSearchFocusKeydown = (event: KeyboardEvent) => {
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
    ensureSearchLoaded(true)
  }

  // URLパラメータを読み取る
  const readUrlParams = () => {
    const params = new URLSearchParams(window.location.search)
    const category = params.get('category')
    const article = params.get('article')
    const preIndex = params.get('preIndex')
    const query = params.get('query')

    if (article && category) {
      emit('update:selectedCategory', category)
      emit('update:selectedArticle', article)
      if (preIndex !== null && query) {
        const preIndexNum = parseInt(preIndex, 10)
        if (!isNaN(preIndexNum)) {
          emit('scrollToPreIndex', preIndexNum, query)
        }
      }
    } else if (category) {
      emit('update:selectedCategory', category)
      emit('update:selectedArticle', null)
    } else {
      emit('update:selectedCategory', null)
      emit('update:selectedArticle', null)
    }
  }

  // URLパラメータを更新
  const updateUrlParams = () => {
    const params = new URLSearchParams()

    if (props.selectedCategory) {
      params.set('category', props.selectedCategory)
    }

    if (props.selectedArticle) {
      params.set('article', props.selectedArticle)
    }

    const newUrl = params.toString()
      ? `${window.location.pathname}?${params.toString()}`
      : window.location.pathname

    window.history.pushState({}, '', newUrl)
  }

  const loadCategories = () => {
    // components/article/ の下のカテゴリフォルダを取得
    const articleModules = import.meta.glob('/src/components/article/**/*.vue')
    const categorySet = new Set<string>()

    Object.keys(articleModules).forEach((path) => {
      // パスから category を抽出
      // /src/components/article/css/grid-template-columns.vue -> category: css
      const match = path.match(
        /\/src\/components\/article\/([^/]+)\/([^/]+)\.vue$/
      )
      if (match && match[1]) {
        categorySet.add(match[1])
      }
    })

    // カテゴリの表示順を固定
    const categoryOrder = ['html', 'css', 'js', 'ai', 'photo', 'etc']
    const foundCategories = Array.from(categorySet)

    categories.value = categoryOrder.filter((cat) =>
      foundCategories.includes(cat)
    )
  }

  const cleanupReloadSearchParams = () => {
    // リロード時にクリーンアップ（readUrlParams()の前に実行）
    const params = new URLSearchParams(window.location.search)
    const preIndexParam = params.get('preIndex')
    const queryParam = params.get('query')

    if (preIndexParam || queryParam) {
      // 記事ページでスクロール関連パラメータがある場合、履歴をクリーンにしてリロード
      const category = params.get('category')
      const article = params.get('article')
      if (category && article) {
        // リロード後にバックした時に検索窓をクリアするためのフラグ
        sessionStorage.setItem('reloadedFromSearch', 'true')
        // location.replace()を使って履歴を置き換え（検索結果の履歴を削除）
        const cleanUrl = `${window.location.origin}/?category=${category}&article=${article}`
        window.location.replace(cleanUrl)
        return true
      }
    }

    return false
  }

  const handlePopState = () => {
    const params = new URLSearchParams(window.location.search)
    const categoryParam = params.get('category')
    const articleParam = params.get('article')
    const searchParam = params.get('search')

    // 履歴復元中はwatchをスキップするためフラグを設定
    isRestoringFromHistory = true

    if (searchParam) {
      // 検索はSearchBox側で処理
      isRestoringFromHistory = false
      return
    } else if (articleParam && categoryParam) {
      // 記事詳細ページに戻る
      emit('update:selectedCategory', categoryParam)
      emit('update:selectedArticle', articleParam)
    } else if (categoryParam) {
      // カテゴリでフィルタされた記事一覧に戻る
      emit('update:selectedCategory', categoryParam)
      emit('update:selectedArticle', null)
    } else {
      // トップページに戻る（カテゴリも記事も選択されていない状態）
      // emit実行（App.vueのwatchがsessionStorageを読み取る）
      emit('update:selectedCategory', null)
      emit('update:selectedArticle', null)

      // トップに戻る時はスクロール位置を最上部にリセット
      window.scrollTo(0, 0)

      // リロード後のバックの場合のみ検索窓をクリア
      if (sessionStorage.getItem('reloadedFromSearch')) {
        sessionStorage.removeItem('reloadedFromSearch')
      }
    }

    // フラグをリセット
    setTimeout(() => {
      isRestoringFromHistory = false
    }, 100)
  }

  onMounted(() => {
    const SearchBox = defineAsyncComponent(
      () => import('../components/SearchBox.vue')
    )
    searchComponent.value = markRaw(SearchBox)
    window.addEventListener('keydown', handleGlobalSearchFocusKeydown)

    loadCategories()

    // ブラウザのスクロール位置自動復元を無効化
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    if (cleanupReloadSearchParams()) return

    const params = new URLSearchParams(window.location.search)
    if (params.get('search')) {
      ensureSearchLoaded()
    }

    // リロード直後の場合、次のURL更新をスキップ
    if (sessionStorage.getItem('reloadedFromSearch')) {
      skipNextUrlUpdate = true
    }

    // 初期URLパラメータを読み取る（クリーンアップ後に実行）
    // watchがスキップされるようフラグを設定
    isRestoringFromHistory = true
    readUrlParams()

    // フラグをリセット
    setTimeout(() => {
      isRestoringFromHistory = false
    }, 100)

    // ブラウザの戻る/進むボタンに対応
    window.addEventListener('popstate', handlePopState)

    // タッチ端末は初回タップでフォーカスできるよう先読み
    if ('ontouchstart' in window) {
      ensureSearchLoaded()
    }
  })

  onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleGlobalSearchFocusKeydown)
    window.removeEventListener('popstate', handlePopState)
  })

  // 状態が変更されたらURLを更新
  watch([() => props.selectedCategory, () => props.selectedArticle], () => {
    // 手動でURL更新した直後、または履歴復元中はスキップ
    if (skipNextUrlUpdate) {
      skipNextUrlUpdate = false
      return
    }
    if (isRestoringFromHistory) {
      return
    }
    updateUrlParams()
  })

  const goToTop = () => {
    emit('update:selectedCategory', null)
    emit('update:selectedArticle', null)
    emit('resetScroll')
    // 保存されたスクロール位置をクリア
    sessionStorage.removeItem('articleListScrollPosition')
    // ページを最上部にスクロール
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleCategory = (categoryName: string) => {
    if (props.selectedCategory === categoryName) {
      // 選択中のカテゴリを再度クリックした場合、記事選択を解除してカテゴリリストに戻る
      emit('update:selectedArticle', null)
    } else {
      // カテゴリ切り替え時はスクロール位置をリセット（最上部に戻る）
      sessionStorage.removeItem('articleListScrollPosition')
      sessionStorage.removeItem('selectedCategory')

      emit('update:selectedCategory', categoryName)
      emit('update:selectedArticle', null)
    }
  }

  return {
    categories,
    searchComponent,
    searchBoxRef,
    isSearchLoaded,
    isSearchReady,
    ensureSearchLoaded,
    handleSearchScrollToPreIndex,
    handleSkipNextUrlUpdate,
    handleSearchReady,
    goToTop,
    toggleCategory,
  }
}
