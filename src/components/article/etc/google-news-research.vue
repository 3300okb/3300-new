<script lang="ts">
export const metadata = {
  updateDate: '2026/02/14',
}
</script>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import ArticleHeader from '@/components/ArticleHeader.vue'

const STORAGE_KEY = 'google-news-research-keywords'
const MAX_KEYWORDS = 20
const MAX_KEYWORD_LENGTH = 100

const keywordInput = ref('')
const oneTimeKeywordInput = ref('')
const keywords = ref<string[]>([])
const popupMessage = ref('')

const trimmedKeyword = computed(() => keywordInput.value.trim())
const trimmedOneTimeKeyword = computed(() => oneTimeKeywordInput.value.trim())

const buildSearchUrl = (word: string) =>
  `https://www.google.com/search?q=${encodeURIComponent(
    word
  )}&sca_esv=109ab09de071e349&hl=ja&tbs=sbd:1,qdr:y&tbm=nws&sxsrf=ANbL-n7dU-uQIt2m9NvnQEYMQPXxg17yJg:1770990980672&source=lnt&sa=X&ved=2ahUKEwiHtLbCz9aSAxVoklYBHSfGPLUQpwV6BAgDEAo&biw=1920&bih=934&dpr=1`

const normalizeKeyword = (value: string) =>
  value.trim().slice(0, MAX_KEYWORD_LENGTH)

const sanitizeKeywords = (items: string[]) => {
  const unique = new Set<string>()
  const sanitized: string[] = []

  for (const item of items) {
    const normalized = normalizeKeyword(item)
    if (!normalized || unique.has(normalized)) {
      continue
    }
    unique.add(normalized)
    sanitized.push(normalized)
    if (sanitized.length >= MAX_KEYWORDS) {
      break
    }
  }

  return sanitized
}

const addKeyword = () => {
  const value = normalizeKeyword(trimmedKeyword.value)
  if (!value) {
    return
  }
  if (keywords.value.length >= MAX_KEYWORDS) {
    popupMessage.value = `You can register up to ${MAX_KEYWORDS} words.`
    keywordInput.value = ''
    return
  }
  if (keywords.value.includes(value)) {
    keywordInput.value = ''
    return
  }

  keywords.value = [...keywords.value, value]
  keywordInput.value = ''
}

const onKeywordEnter = (event: KeyboardEvent) => {
  const composingEvent = event as KeyboardEvent & {
    isComposing?: boolean
    keyCode?: number
  }
  if (composingEvent.isComposing || composingEvent.keyCode === 229) {
    return
  }
  event.preventDefault()
  addKeyword()
}

const removeKeyword = (target: string) => {
  keywords.value = keywords.value.filter((word) => word !== target)
}

const openOneResearchTab = () => {
  const value = normalizeKeyword(trimmedOneTimeKeyword.value)
  if (!value) {
    return
  }
  const searchUrl = buildSearchUrl(value)
  window.open(searchUrl, '_blank', 'noopener,noreferrer')
  oneTimeKeywordInput.value = ''
  window.focus()
}

const onOneTimeKeywordEnter = (event: KeyboardEvent) => {
  const composingEvent = event as KeyboardEvent & {
    isComposing?: boolean
    keyCode?: number
  }
  if (composingEvent.isComposing || composingEvent.keyCode === 229) {
    return
  }
  event.preventDefault()
  openOneResearchTab()
}

const openAllResearchTabs = () => {
  if (keywords.value.length === 0) {
    return
  }

  popupMessage.value = ''
  const openedTabs: (Window | null)[] = keywords.value.map(() =>
    window.open('', '_blank')
  )

  let openedCount = 0
  keywords.value.forEach((word, index) => {
    const tab = openedTabs[index]
    if (!tab) {
      return
    }
    const searchUrl = buildSearchUrl(word)
    tab.opener = null
    tab.location.href = searchUrl
    openedCount += 1
  })

  if (openedCount < keywords.value.length) {
    popupMessage.value = `Only ${openedCount} out of ${keywords.value.length} tabs were opened. Please check your browser popup permission settings.`
  } else {
    popupMessage.value = `Opened ${openedCount} tabs.`
  }

  window.focus()
}

onMounted(() => {
  if (typeof window === 'undefined') {
    return
  }

  const raw = window.localStorage.getItem(STORAGE_KEY)
  if (!raw) {
    return
  }

  try {
    const parsed = JSON.parse(raw) as unknown
    if (Array.isArray(parsed)) {
      const stringItems = parsed.filter(
        (item): item is string => typeof item === 'string'
      )
      keywords.value = sanitizeKeywords(stringItems)
    }
  } catch {
    keywords.value = []
  }
})

watch(
  keywords,
  (value) => {
    if (typeof window === 'undefined') {
      return
    }
    const sanitized = sanitizeKeywords(value)
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(sanitized))
  },
  { deep: true }
)
</script>

<template>
  <ArticleHeader
    title="google-news-research"
    :update-date="metadata.updateDate"
  />

  <section class="mx-auto mt-24 pb-20">
    <div class="rounded-md border border-gray-300 p-20">
      <label class="text-14 block">
        <h3 class="mb-8 block font-bold">One word</h3>
        <div class="flex gap-10">
          <input
            v-model="oneTimeKeywordInput"
            type="text"
            placeholder="Input a word"
            class="w-full rounded-md border border-gray-300 px-12 placeholder:text-gray-300"
            @keydown.enter="onOneTimeKeywordEnter"
          />
          <button
            type="button"
            class="text-14 cursor-pointer rounded-md bg-black px-16 py-10 text-white transition-all duration-200 hover:opacity-80 disabled:cursor-not-allowed"
            :disabled="!trimmedOneTimeKeyword"
            @click="openOneResearchTab"
          >
            research
          </button>
        </div>
      </label>
    </div>
  </section>

  <section class="mx-auto">
    <div class="rounded-md border border-gray-300 p-20">
      <h3 class="text-14 block font-bold">Registered words</h3>
      <div class="flex items-center gap-12">
        <button
          type="button"
          class="text-14 mt-12 w-full cursor-pointer rounded-md bg-black px-16 py-10 text-white transition-all duration-200 hover:opacity-80 disabled:cursor-not-allowed"
          :disabled="keywords.length === 0"
          @click="openAllResearchTabs"
        >
          research
        </button>
      </div>

      <label class="text-14 mt-20 block">
        <div class="flex gap-10">
          <input
            v-model="keywordInput"
            type="text"
            placeholder="Register a word"
            class="w-full rounded-md border border-gray-300 px-12 py-10 placeholder:text-gray-300"
            @keydown.enter="onKeywordEnter"
          />
          <button
            type="button"
            class="text-14 cursor-pointer rounded-md border border-gray-300 px-16 py-10 transition-all duration-200 hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
            :disabled="!trimmedKeyword"
            @click="addKeyword"
          >
            add
          </button>
        </div>
      </label>

      <div class="mt-16">
        <ul v-if="keywords.length > 0" class="mt-10 space-y-8">
          <li
            v-for="word in keywords"
            :key="word"
            class="flex items-center justify-between rounded-md border border-gray-200 px-12 py-10"
          >
            <span class="text-14">{{ word }}</span>
            <button
              type="button"
              class="text-12 cursor-pointer rounded-md border border-gray-300 px-10 py-6 transition-all duration-200 hover:bg-gray-100"
              @click="removeKeyword(word)"
            >
              remove
            </button>
          </li>
        </ul>
        <p v-else class="text-13 mt-10 text-gray-500">
          There are no registered words yet.
        </p>
      </div>
    </div>

    <p class="text-12 mt-16 text-gray-400">
      If your browser's popup blocker is enabled, multiple tabs may not open.
      Please allow popups for this site.
    </p>
  </section>
</template>
