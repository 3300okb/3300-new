<script setup lang="ts">
interface Props {
  title: string
  sampleUrl?: string
  updateDate?: string
}

const props = defineProps<Props>()

const openSample = () => {
  if (props.sampleUrl) {
    window.open(props.sampleUrl, '_blank')
  }
}
</script>

<template>
  <header class="relative mb-20">
    <div class="flex items-start justify-between gap-10">
      <h2 class="text-20 font-bold break-all">{{ title }}</h2>
      <div class="text-11 pt-9 pr-3 text-gray-400" v-if="updateDate">
        {{ updateDate }}
      </div>
    </div>
    <button v-if="sampleUrl" @click="openSample" class="underline">
      sample
    </button>
  </header>
</template>
