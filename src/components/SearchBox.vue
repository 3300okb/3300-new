<script setup lang="ts">
import {
  useSearchBoxLogic,
  type SearchBoxEmit,
} from '../composables/useSearchBoxLogic'

const emit = defineEmits<{
  'update:selectedCategory': [value: string | null]
  'update:selectedArticle': [value: string | null]
  scrollToPreIndex: [preIndex: number, searchQuery: string]
  skipNextUrlUpdate: []
  ready: []
}>()

const {
  searchQuery,
  searchResults,
  isSearching,
  activeResultIndex,
  getHighlightedSegments,
  performSearch,
  prefetchSearchIndex,
  selectSearchResult,
  handleInputKeydown,
  handleResultKeydown,
  focusInput,
} = useSearchBoxLogic(emit as SearchBoxEmit)

defineExpose({
  focusInput,
})
</script>

<template>
  <div class="relative mb-16">
    <!-- 検索アイコン -->
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
    <label for="search-input" class="sr-only">Search</label>
    <input
      id="search-input"
      ref="inputRef"
      v-model="searchQuery"
      @input="performSearch"
      @focus="prefetchSearchIndex"
      @keydown="handleInputKeydown"
      type="text"
      placeholder=""
      autocomplete="off"
      class="w-full rounded-md border border-gray-300 py-8 pr-16 pl-40 focus:border-blue-500 focus:outline-none"
    />
    <span v-if="isSearching" class="absolute top-8 right-16 text-gray-400">
      Searching...
    </span>

    <!-- 検索結果 -->
    <div
      v-if="searchResults.length > 0"
      class="absolute z-10 mt-4 max-h-[calc(100vh-160px)] w-full overflow-y-auto rounded-md border border-gray-300 bg-white shadow-lg"
    >
      <div
        class="sticky top-0 z-10 border-b border-gray-300 bg-gray-100 px-16 py-8 text-sm text-gray-600"
      >
        {{ searchResults.length }} results found
      </div>
      <div
        v-for="(result, index) in searchResults"
        :key="index"
        :data-result-index="index"
        role="button"
        tabindex="0"
        @keydown="(event) => handleResultKeydown(event, index)"
        @click="
          () => {
            const original = searchResults[index]
            if (original) selectSearchResult(original, index)
          }
        "
        :class="[
          'cursor-pointer border-b border-gray-200 p-16 hover:bg-gray-50 focus:outline-none',
          activeResultIndex === index ? 'bg-gray-100' : '',
        ]"
      >
        <div class="flex items-center gap-8">
          <span class="text-12 rounded bg-blue-500 px-8 py-2 text-white">{{
            result.category
          }}</span>
          <span
            v-if="searchResults[index]?.isFileNameMatch"
            class="text-12 rounded bg-green-500 px-8 py-2 text-white"
          >
            page
          </span>
          <span class="font-bold">{{ result.articleName }}</span>
        </div>
        <pre
          v-if="!searchResults[index]?.isFileNameMatch"
          class="text-12 mt-8 overflow-x-auto rounded bg-[#112233] p-8 break-all whitespace-pre-wrap text-white"
        ><code><!-- prettier-ignore --><span v-for="(segment, segmentIndex) in getHighlightedSegments(result.snippet, searchQuery)" :key="segmentIndex" :class="segment.mark ? 'rounded-sm bg-yellow-200 px-2 font-bold text-black' : ''" v-text="segment.text"></span></code></pre>
      </div>
    </div>

    <div
      v-if="searchQuery && !isSearching && searchResults.length === 0"
      class="absolute z-10 mt-4 w-full rounded-md border border-gray-300 bg-white p-16 shadow-lg"
    >
      <p class="text-gray-500">No results found</p>
    </div>
  </div>
</template>
