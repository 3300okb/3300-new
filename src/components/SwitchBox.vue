<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ title: string }>()

let switchBoxId = 0

const isOpen = ref(false)
const boxId = `switchbox-${switchBoxId++}`

const toggle = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div data-switch-box>
    <h3>
      <button
        type="button"
        class="w-full cursor-pointer text-left text-black underline"
        :aria-expanded="isOpen"
        :aria-controls="boxId"
        data-switch-toggle
        @click="toggle"
      >
        {{ title }}
      </button>
    </h3>
    <div :id="boxId" v-show="isOpen" data-switch-content>
      <slot />
    </div>
  </div>
</template>
