<script lang="ts">
export const metadata = {
  updateDate: '2026/11/25',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'

const RANDOM_URL = 'https://ja.wikipedia.org/wiki/Special:Random'

const openRandomPage = () => {
  window.open(RANDOM_URL, '_blank', 'noopener,noreferrer')
}
</script>

<template>
  <ArticleHeader title="wikipedia-random" :update-date="metadata.updateDate" />

  <section class="mx-auto mt-24 pb-20">
    <div class="rounded-md border border-gray-300 p-20">
      <button
        type="button"
        class="text-14 w-full cursor-pointer rounded-md bg-black px-16 py-10 text-white transition-all duration-200 hover:opacity-80"
        @click="openRandomPage"
      >
        random
      </button>
    </div>
  </section>
</template>
