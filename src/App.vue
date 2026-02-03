<script setup lang="ts">
import { ref, nextTick, watch, defineAsyncComponent } from 'vue'
import GlobalHeader from './components/GlobalHeader.vue'
import { scrollToPreElement } from './utils/scrollToPreElement'

const ArticleList = defineAsyncComponent(
  () => import('./components/ArticleList.vue')
)
const ArticleContent = defineAsyncComponent(
  () => import('./components/ArticleContent.vue')
)

const selectedCategory = ref<string | null>(null)
const selectedArticle = ref<string | null>(null)
const targetPreIndex = ref<number | null>(null)
const restoreScrollPosition = ref<boolean>(false)

const handleResetScroll = () => {
  // 3300.cloudクリック時はスクロール位置を復元しない
  restoreScrollPosition.value = false
  sessionStorage.removeItem('articleListScrollPosition')
  sessionStorage.removeItem('selectedCategory')
}

const handleArticleSelect = (articlePath: string) => {
  // articlePath は "category/filename" の形式
  const parts = articlePath.split('/')
  if (parts.length === 2 && parts[0] && parts[1]) {
    // ページ全体のスクロール位置とカテゴリを保存
    sessionStorage.setItem(
      'articleListScrollPosition',
      window.scrollY.toString()
    )
    sessionStorage.setItem('selectedCategory', selectedCategory.value || '')

    selectedCategory.value = parts[0]
    selectedArticle.value = parts[1]
    targetPreIndex.value = null

    // 記事ページに遷移する際、ページトップにスクロール
    window.scrollTo(0, 0)
  }
}

// 記事が選択解除された時（記事一覧に戻った時）にスクロール位置とカテゴリを復元
watch(selectedArticle, (newValue, oldValue) => {
  if (oldValue !== null && newValue === null) {
    // 記事詳細から記事一覧に戻った時

    // 保存されていたカテゴリを復元
    const savedCategory = sessionStorage.getItem('selectedCategory')
    if (savedCategory !== null) {
      // 空文字列の場合はnull、それ以外はそのまま設定
      selectedCategory.value = savedCategory === '' ? null : savedCategory
      sessionStorage.removeItem('selectedCategory')
      restoreScrollPosition.value = true
    }
  }
})

const handleScrollToPreIndex = async (
  preIndex: number,
  searchQuery: string
) => {
  targetPreIndex.value = preIndex

  // リロード後の最初のスクロールの場合、URL更新をスキップ
  const shouldSkipUrlUpdate = sessionStorage.getItem('reloadedFromSearch')
  if (!shouldSkipUrlUpdate) {
    // スクロール先の情報をURLに追加（履歴を増やさないためreplaceStateを使用）
    const params = new URLSearchParams(window.location.search)
    params.set('preIndex', preIndex.toString())
    params.set('query', searchQuery)
    const newUrl = `${window.location.pathname}?${params.toString()}`
    window.history.replaceState({}, '', newUrl)
  }

  await nextTick()
  // ArticleContentが読み込まれるのを待つ
  setTimeout(() => {
    scrollToPreElement(preIndex, searchQuery)
  }, 500)
}
</script>

<template>
  <div class="flex min-h-screen flex-col bg-[#f1f2f3] p-20">
    <GlobalHeader
      v-model:selected-category="selectedCategory"
      v-model:selected-article="selectedArticle"
      @scroll-to-pre-index="handleScrollToPreIndex"
      @reset-scroll="handleResetScroll"
    />

    <ArticleList
      v-if="!selectedArticle"
      :category="selectedCategory"
      :restore-scroll="restoreScrollPosition"
      @select-article="handleArticleSelect"
      @scroll-restored="restoreScrollPosition = false"
    />

    <ArticleContent
      v-if="selectedArticle"
      :category="selectedCategory"
      :article-name="selectedArticle"
    />
  </div>
</template>
