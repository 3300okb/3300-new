<script setup lang="ts">
import { onBeforeUnmount, ref } from 'vue'

const areaRef = ref<HTMLElement | null>(null)
const copyButtonText = ref('コピー')
let resetTimer: number | null = null

const handleClick = async () => {
  if (!areaRef.value) {
    return
  }

  const content = areaRef.value.textContent || ''
  try {
    await navigator.clipboard.writeText(content)
    copyButtonText.value = 'コピーしました！'
    if (resetTimer) {
      window.clearTimeout(resetTimer)
    }
    resetTimer = window.setTimeout(() => {
      copyButtonText.value = 'コピー'
      resetTimer = null
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

onBeforeUnmount(() => {
  if (resetTimer) {
    window.clearTimeout(resetTimer)
  }
})
</script>

<template>
  <div ref="areaRef">
    <slot />
  </div>
  <button
    type="button"
    class="mt-20 inline-flex h-44 w-44 cursor-pointer items-center justify-center rounded border-none bg-blue-500 text-white hover:bg-blue-600"
    @click="handleClick"
    :title="copyButtonText"
    :aria-label="copyButtonText"
  >
    <svg
      v-if="copyButtonText === 'コピー'"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
    <svg
      v-else
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  </button>
</template>
