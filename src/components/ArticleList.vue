<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'
import {
  loadArticleIndexAll,
  loadArticleIndexByCategory,
} from '../composables/useArticleIndex'

interface ArticleFile {
  name: string
  path: string
  updateDate: string
}

const props = defineProps<{
  category: string | null
  restoreScroll?: boolean
}>()

const emit = defineEmits<{
  selectArticle: [articleName: string]
  scrollRestored: []
}>()

const articles = ref<ArticleFile[]>([])
let loadId = 0 // 読み込みIDを管理

const loadArticles = async () => {
  const currentLoadId = ++loadId // 現在の読み込みに一意のIDを割り当て

  const articleList: ArticleFile[] = []

  try {
    const index =
      props.category === null
        ? await loadArticleIndexAll()
        : await loadArticleIndexByCategory(props.category)
    index.forEach((item) => {
      articleList.push({
        name: item.articlePath,
        path: item.articlePath,
        updateDate: item.updateDate,
      })
    })
  } catch (err) {
    console.error('Failed to load article index:', err)
  }

  // 古い読み込みの結果は破棄
  if (currentLoadId !== loadId) {
    return
  }

  // 更新日時順にソート（新しい順）
  articleList.sort((a, b) => {
    const dateA = new Date(a.updateDate).getTime()
    const dateB = new Date(b.updateDate).getTime()
    return dateB - dateA
  })

  articles.value = articleList
}

// watchをloadArticlesの定義の後に移動
watch(
  () => props.category,
  () => {
    loadArticles()
  },
  { immediate: true } // 初回マウント時にも実行
)

const restoreScrollPosition = async () => {
  if (props.restoreScroll) {
    await nextTick()
    // 少し待ってからスクロール位置を復元（DOMが完全にレンダリングされるのを待つ）
    setTimeout(() => {
      const savedPosition = sessionStorage.getItem('articleListScrollPosition')
      if (savedPosition) {
        window.scrollTo({
          top: parseFloat(savedPosition),
          behavior: 'instant',
        })
        sessionStorage.removeItem('articleListScrollPosition')
      }
      emit('scrollRestored')
    }, 100)
  }
}

// onMountedは削除（watchのimmediate: trueで初回実行される）

watch(
  () => articles.value,
  () => {
    restoreScrollPosition()
  }
)
</script>

<template>
  <ul class="article-list-container flex list-none flex-col gap-4">
    <li v-for="article in articles" :key="article.path">
      <button
        @click="emit('selectArticle', article.path)"
        class="flex w-full cursor-pointer items-center justify-between rounded border-none bg-transparent px-8 py-4 text-left text-blue-500 transition-colors duration-200 hover:bg-blue-50"
      >
        <span>{{ article.name.split('/').pop() }}</span>
        <span class="text-11 ml-16 whitespace-nowrap text-gray-400">{{
          article.updateDate
        }}</span>
      </button>
    </li>
  </ul>
</template>
