<script setup lang="ts">
import {
  ref,
  onMounted,
  watch,
  defineAsyncComponent,
  shallowRef,
  markRaw,
} from 'vue'

const props = defineProps<{
  category: string | null
  articleName: string
}>()

const ArticleComponent = shallowRef<any>(null)
const loading = ref(true)
const error = ref<string | null>(null)

const loadArticle = async () => {
  loading.value = true
  error.value = null

  try {
    const component = defineAsyncComponent(() =>
      import(`./article/${props.category}/${props.articleName}.vue`).catch(
        (err) => {
          console.error('Failed to load article:', err)
          throw err
        }
      )
    )
    ArticleComponent.value = markRaw(component)
  } catch (err) {
    error.value = '記事の読み込みに失敗しました'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadArticle()
})

watch(
  () => [props.category, props.articleName],
  () => {
    loadArticle()
  }
)
</script>

<template>
  <div class="rounded-lg border border-gray-200 bg-white p-16">
    <div v-if="loading" class="p-32 text-center text-gray-500">
      読み込み中...
    </div>
    <div v-else-if="error" class="p-32 text-center text-red-500">
      {{ error }}
    </div>
    <component v-else-if="ArticleComponent" :is="ArticleComponent" />
  </div>
</template>
