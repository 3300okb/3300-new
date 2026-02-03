<script setup lang="ts">
import { useGlobalHeaderLogic } from '../composables/useGlobalHeaderLogic'

interface Props {
  selectedCategory: string | null
  selectedArticle: string | null
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:selectedCategory': [value: string | null]
  'update:selectedArticle': [value: string | null]
  scrollToPreIndex: [preIndex: number, searchQuery: string]
  resetScroll: []
}>()

const {
  categories,
  searchComponent,
  isSearchLoaded,
  isSearchReady,
  ensureSearchLoaded,
  handleSearchScrollToPreIndex,
  handleSkipNextUrlUpdate,
  handleSearchReady,
  goToTop,
  toggleCategory,
} = useGlobalHeaderLogic(props, emit)
</script>

<template>
  <header class="mb-40">
    <h1
      @click="goToTop"
      @keypress.enter="goToTop"
      tabindex="0"
      class="text-24 mb-16 cursor-pointer font-bold hover:opacity-80"
    >
      3300.cloud
    </h1>

    <!-- 検索窓 -->
    <div class="relative mb-16">
      <div class="relative">
        <svg
          class="absolute top-12 left-12 h-20 w-20 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        <label for="search-input-placeholder" class="sr-only">Search</label>
        <input
          id="search-input-placeholder"
          type="text"
          placeholder=""
          autocomplete="off"
          readonly
          tabindex="-1"
          class="w-full rounded-md border border-gray-300 py-8 pr-16 pl-40 focus:border-gray-300 focus:outline-none"
          @mousedown.prevent
          @click="ensureSearchLoaded(true)"
        />
      </div>
      <div
        v-if="isSearchLoaded && searchComponent"
        class="absolute inset-0 transition-opacity duration-150"
        :class="isSearchReady ? 'opacity-100' : 'opacity-0'"
      >
        <component
          :is="searchComponent"
          ref="searchBoxRef"
          @update:selectedCategory="emit('update:selectedCategory', $event)"
          @update:selectedArticle="emit('update:selectedArticle', $event)"
          @scroll-to-pre-index="handleSearchScrollToPreIndex"
          @skip-next-url-update="handleSkipNextUrlUpdate"
          @ready="handleSearchReady"
        />
      </div>
    </div>

    <nav class="flex flex-col gap-16">
      <div class="flex flex-wrap gap-8">
        <button
          v-for="category in categories"
          :key="category"
          @click="toggleCategory(category)"
          class="cursor-pointer rounded-md border px-16 py-8 text-left transition-all duration-200"
          :class="
            selectedCategory === category
              ? 'border-blue-500 bg-blue-500 text-white'
              : 'border-gray-300 bg-gray-100 hover:bg-gray-200'
          "
        >
          {{ category }}
        </button>
      </div>
    </nav>
  </header>
</template>
