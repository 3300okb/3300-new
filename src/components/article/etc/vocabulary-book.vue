<script lang="ts">
export const metadata = {
  updateDate: '2026/01/31',
}
</script>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import ArticleHeader from '@/components/ArticleHeader.vue'
import toeicCsv from '@/assets/csv/TOEIC-words.csv?raw'

type VocabItem = {
  id: string
  en: string
  ja: string
}

const parseCsv = (text: string) => {
  const rows: string[][] = []
  let row: string[] = []
  let current = ''
  let inQuotes = false

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i]
    const next = text[i + 1]

    if (char === '\"') {
      if (inQuotes && next === '\"') {
        current += '\"'
        i += 1
      } else {
        inQuotes = !inQuotes
      }
      continue
    }

    if (!inQuotes && (char === ',' || char === '\n' || char === '\r')) {
      row.push(current)
      current = ''

      if (char === '\r' && next === '\n') {
        i += 1
      }

      if (char === '\n' || char === '\r') {
        if (row.length > 1 || row[0] !== '') {
          rows.push(row)
        }
        row = []
      }
      continue
    }

    current += char
  }

  if (current.length > 0 || row.length > 0) {
    row.push(current)
    if (row.length > 1 || row[0] !== '') {
      rows.push(row)
    }
  }

  return rows
}

const rows = parseCsv(toeicCsv)
const headers = rows[0] ?? []
const indexOf = (name: string) => headers.indexOf(name)
const entryIndex = indexOf('entry')
const meaningIndex = indexOf('meaning_ja')
const meaningFallbackIndex = indexOf('meaning')
const wordIdIndex = indexOf('word_id')

const baseItems: VocabItem[] = rows
  .slice(1)
  .map((row, rowIndex) => {
    const entry = row[entryIndex] ?? ''
    const meaning = row[meaningIndex] || row[meaningFallbackIndex] || ''
    const wordId = row[wordIdIndex] || `row-${rowIndex + 1}`
    const trimmedEntry = entry.trim()
    const trimmedMeaning = meaning.trim()
    if (!trimmedEntry || !trimmedMeaning) {
      return null
    }
    return {
      id: `toeic-${wordId}`,
      en: trimmedEntry,
      ja: trimmedMeaning,
    } satisfies VocabItem
  })
  .filter((item): item is VocabItem => item !== null)
  .slice(0, 3000)

const isEnglishFront = ref(true)
const revealedMap = ref<Record<string, boolean>>({})
const checkedMap = ref<Record<string, boolean>>({})
const orderedItems = ref<VocabItem[]>([...baseItems])
const voices = ref<SpeechSynthesisVoice[]>([])

const STORAGE_KEY = 'vocabulary-book-checked'

const toggleReveal = (id: string) => {
  revealedMap.value = {
    ...revealedMap.value,
    [id]: !revealedMap.value[id],
  }
}

const shuffleAll = () => {
  const list = [...orderedItems.value]
  for (let i = list.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = list[i]!
    list[i] = list[j]!
    list[j] = temp
  }
  orderedItems.value = list
  revealedMap.value = {}
}

const toggleChecked = (id: string) => {
  checkedMap.value = {
    ...checkedMap.value,
    [id]: !checkedMap.value[id],
  }
}

const clearChecked = () => {
  checkedMap.value = {}
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(STORAGE_KEY)
  }
}

const getPreferredVoice = () => {
  const candidates = voices.value.filter((voice) =>
    voice.lang.toLowerCase().startsWith('en')
  )
  const femaleMatch = candidates.find((voice) =>
    /female|woman|girl/i.test(voice.name)
  )
  const samanthaMatch = candidates.find((voice) => /samantha/i.test(voice.name))
  return samanthaMatch ?? femaleMatch ?? candidates[0]
}

const speakWord = (text: string) => {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    return
  }
  const utterance = new SpeechSynthesisUtterance(text)
  const voice = getPreferredVoice()
  if (voice) {
    utterance.voice = voice
  }
  utterance.lang = 'en-US'
  window.speechSynthesis.cancel()
  window.speechSynthesis.speak(utterance)
}

const labelText = (item: VocabItem) =>
  isEnglishFront.value ? item.en : item.ja
const answerText = (item: VocabItem) =>
  isEnglishFront.value ? item.ja : item.en

const updateVoices = () => {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    return
  }
  voices.value = window.speechSynthesis.getVoices()
}

onMounted(() => {
  if (typeof window === 'undefined') {
    return
  }
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (!stored) {
    return
  }
  try {
    const parsed = JSON.parse(stored) as Record<string, boolean>
    checkedMap.value = parsed ?? {}
  } catch {
    checkedMap.value = {}
  }

  updateVoices()
  if (window.speechSynthesis) {
    window.speechSynthesis.addEventListener('voiceschanged', updateVoices)
  }
})

watch(
  checkedMap,
  (value) => {
    if (typeof window === 'undefined') {
      return
    }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
  },
  { deep: true }
)

onBeforeUnmount(() => {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    return
  }
  window.speechSynthesis.removeEventListener('voiceschanged', updateVoices)
})
</script>

<template>
  <ArticleHeader title="vocabulary book" :update-date="metadata.updateDate" />

  <section class="text-10 -mt-10 text-gray-300">
    <h2>Data Source &amp; License</h2>
    <p>
      This vocabulary data is based on the
      <a
        href="https://www.newgeneralservicelist.com/toeic-service-list"
        target="_blank"
        rel="noopener"
        class="underline"
      >
        TOEIC Service List (NGSL Project)
      </a>
      .
    </p>
    <p>
      Japanese translations are provided by
      <a
        href="https://www.diqt.net/ja/word_tags/3/download"
        target="_blank"
        rel="noopener"
        class="underline"
      >
        diqt.net
      </a>
      (CC BY-SA 4.0). Licensed under
      <a
        href="https://creativecommons.org/licenses/by-sa/4.0/"
        target="_blank"
        rel="noopener"
        class="underline"
      >
        CC BY-SA 4.0 </a
      >.
    </p>
    <p class="mt-6">Restructured and republished by 3300.cloud.</p>
  </section>

  <section class="mx-auto mt-20 max-w-5xl px-4 pb-12">
    <div class="flex flex-wrap items-center justify-center gap-6">
      <button
        type="button"
        class="text-14 cursor-pointer rounded-md bg-black px-16 py-8 text-center text-white transition-all duration-200"
        @click="shuffleAll"
      >
        Reshuffle
      </button>

      <button
        type="button"
        class="text-14 cursor-pointer rounded-md bg-black px-16 py-8 text-center text-white transition-all duration-200"
        @click="isEnglishFront = !isEnglishFront"
      >
        {{ isEnglishFront ? 'English → Japanese' : 'Japanese → English' }}
      </button>
    </div>

    <div class="mt-20 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="item in orderedItems"
        :key="item.id"
        class="flex h-full rounded-md border border-gray-300 text-left transition-all duration-200 hover:bg-gray-100"
      >
        <div class="flex h-full w-full flex-col items-start">
          <div class="flex w-full items-start justify-between gap-6">
            <button
              type="button"
              class="text-14 w-full p-10 text-left"
              :aria-expanded="revealedMap[item.id] ? 'true' : 'false'"
              @click="toggleReveal(item.id)"
            >
              <span class="block w-full">
                {{ labelText(item) }}
              </span>
              <transition name="expand">
                <div v-if="revealedMap[item.id]" class="answer">
                  <p class="text-12 mt-10">
                    {{ answerText(item) }}
                  </p>
                </div>
              </transition>
            </button>
            <div class="flex items-center gap-6 pt-10 pr-10">
              <button
                type="button"
                class="flex h-22 w-22 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition hover:bg-gray-100"
                aria-label="Speak word"
                @click.stop="speakWord(item.en)"
              >
                <svg
                  viewBox="0 0 24 24"
                  class="h-14 w-14"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  aria-hidden="true"
                >
                  <rect x="9" y="3" width="6" height="10" rx="3" />
                  <path d="M5 11v1a7 7 0 0 0 14 0v-1" />
                  <path d="M12 19v3" />
                </svg>
              </button>
              <label class="text-12 flex items-center gap-2" @click.stop>
                <input
                  type="checkbox"
                  class="h-22 w-22 appearance-none rounded-full bg-gray-100 transition duration-150 checked:bg-gray-900 checked:bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2020%2020%22%20fill=%22none%22%3E%3Cpath%20d=%22M4.5%2010.5l3.4%203.4L15.8%206.6%22%20stroke=%22%23ffffff%22%20stroke-width=%222%22%20stroke-linecap=%22round%22%20stroke-linejoin=%22round%22/%3E%3C/svg%3E')] checked:bg-size-[18px_18px] checked:bg-center checked:bg-no-repeat focus-visible:ring-2 focus-visible:ring-gray-900/20 focus-visible:outline-none"
                  :checked="checkedMap[item.id] || false"
                  @change="toggleChecked(item.id)"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-20 flex justify-center">
      <button
        type="button"
        class="text-14 cursor-pointer rounded-md bg-black px-16 py-8 text-center text-white transition-all duration-200"
        @click="clearChecked"
      >
        Clear checks
      </button>
    </div>
  </section>
</template>

<style scoped>
.answer {
  overflow: hidden;
}

.expand-enter-active,
.expand-leave-active {
  transition:
    max-height 240ms ease,
    opacity 200ms ease;
}
.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}
.expand-enter-to,
.expand-leave-from {
  max-height: 200px;
  opacity: 1;
}
</style>
