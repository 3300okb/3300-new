<script lang="ts">
export const metadata = {
  updateDate: '2026/02/01',
}
</script>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import ArticleHeader from '@/components/ArticleHeader.vue'

type SpeakMode = 'normal' | 'bpm'

const text = ref('Hello. Welcome to the Web Speech API voice generator.')
const pitch = ref(1)
const rate = ref(1)
const bpm = ref(90)
const mode = ref<SpeakMode>('normal')
const voices = ref<SpeechSynthesisVoice[]>([])
const selectedVoiceUri = ref('')
const isSpeaking = ref(false)
const isDownloading = ref(false)
const statusMessage = ref('')
const stopRequested = ref(false)

const isSpeechSupported =
  typeof window !== 'undefined' &&
  'speechSynthesis' in window &&
  'SpeechSynthesisUtterance' in window

const hasText = computed(() => text.value.trim().length > 0)
const selectedVoice = computed(
  () =>
    voices.value.find((voice) => voice.voiceURI === selectedVoiceUri.value) ??
    null
)

const selectDefaultVoice = (available: SpeechSynthesisVoice[]) => {
  if (selectedVoiceUri.value) return
  const preferred = available.find((voice) => /samantha/i.test(voice.name))
  const fallback = available[0]
  if (preferred) {
    selectedVoiceUri.value = preferred.voiceURI
  } else if (fallback) {
    selectedVoiceUri.value = fallback.voiceURI
  }
}

const updateVoices = () => {
  if (!isSpeechSupported) return
  voices.value = window.speechSynthesis.getVoices()
  selectDefaultVoice(voices.value)
}

const createUtterance = (value: string) => {
  const utterance = new SpeechSynthesisUtterance(value)
  const voice = selectedVoice.value
  if (voice) {
    utterance.voice = voice
    utterance.lang = voice.lang
  }
  utterance.rate = rate.value
  utterance.pitch = pitch.value
  return utterance
}

const speakOnce = (value: string) =>
  new Promise<void>((resolve) => {
    const utterance = createUtterance(value)
    utterance.onend = () => resolve()
    utterance.onerror = () => resolve()
    window.speechSynthesis.speak(utterance)
  })

const sleep = (ms: number) =>
  new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms)
  })

const speakWithRhythm = async (value: string) => {
  const tokens = value.replace(/\s+/g, ' ').trim().split(' ').filter(Boolean)
  if (tokens.length === 0) return

  const beatMs = 60000 / Math.max(30, Math.min(240, bpm.value))
  let nextBeat = performance.now()

  for (const token of tokens) {
    if (stopRequested.value) break
    const waitTime = Math.max(0, nextBeat - performance.now())
    if (waitTime > 0) {
      await sleep(waitTime)
    }
    if (stopRequested.value) break
    await speakOnce(token)
    nextBeat += beatMs
    if (nextBeat < performance.now()) {
      nextBeat = performance.now()
    }
  }
}

const speakText = async () => {
  if (!isSpeechSupported) {
    statusMessage.value = 'This browser does not support the Web Speech API.'
    return
  }
  if (!hasText.value) {
    statusMessage.value = 'Please enter some text.'
    return
  }

  statusMessage.value = ''
  window.speechSynthesis.cancel()

  if (mode.value === 'bpm') {
    await speakWithRhythm(text.value)
  } else {
    await speakOnce(text.value)
  }
}

const handlePlay = async () => {
  if (isSpeaking.value || isDownloading.value) return
  stopRequested.value = false
  isSpeaking.value = true
  statusMessage.value =
    mode.value === 'bpm' ? 'Playing with rhythm...' : 'Playing...'
  try {
    await speakText()
  } finally {
    isSpeaking.value = false
  }
}

const handleStop = () => {
  if (!isSpeaking.value) return
  stopRequested.value = true
  if (isSpeechSupported) {
    window.speechSynthesis.cancel()
  }
  statusMessage.value = 'Stopped.'
  isSpeaking.value = false
}

const getSupportedMimeType = () => {
  if (typeof MediaRecorder === 'undefined') return ''
  const candidates = ['audio/mp4', 'audio/webm;codecs=opus', 'audio/webm']
  return candidates.find((type) => MediaRecorder.isTypeSupported(type)) ?? ''
}

const downloadBlob = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
  URL.revokeObjectURL(url)
}

const handleDownload = async () => {
  if (isSpeaking.value || isDownloading.value) return
  if (!isSpeechSupported) {
    statusMessage.value = 'This browser does not support the Web Speech API.'
    return
  }
  if (!hasText.value) {
    statusMessage.value = 'Please enter some text.'
    return
  }
  if (
    typeof navigator === 'undefined' ||
    !navigator.mediaDevices?.getDisplayMedia ||
    typeof MediaRecorder === 'undefined'
  ) {
    statusMessage.value =
      'Download requires screen sharing and a MediaRecorder-capable browser.'
    return
  }

  isDownloading.value = true
  statusMessage.value = 'Please share the current tab and enable audio sharing.'

  let displayStream: MediaStream | null = null
  try {
    displayStream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: true,
    })

    const audioTracks = displayStream.getAudioTracks()
    if (audioTracks.length === 0) {
      throw new Error('audio track not found')
    }

    const audioStream = new MediaStream(audioTracks)
    const mimeType = getSupportedMimeType()
    const recorder = new MediaRecorder(
      audioStream,
      mimeType ? { mimeType } : undefined
    )
    const chunks: Blob[] = []

    const recordedBlob = new Promise<Blob>((resolve) => {
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data)
        }
      }
      recorder.onstop = () => {
        resolve(
          new Blob(chunks, {
            type: mimeType || 'audio/webm',
          })
        )
      }
    })

    recorder.start()
    statusMessage.value = 'Recording...'
    await speakText()
    recorder.stop()

    const blob = await recordedBlob
    const extension = mimeType.includes('mp4') ? 'm4a' : 'webm'
    downloadBlob(blob, `speech-${Date.now()}.${extension}`)
    statusMessage.value = 'Downloaded the audio file.'
  } catch (err) {
    statusMessage.value =
      'Recording failed. Make sure tab audio sharing is enabled.'
  } finally {
    isDownloading.value = false
    if (displayStream) {
      displayStream.getTracks().forEach((track) => track.stop())
    }
  }
}

onMounted(() => {
  updateVoices()
  if (isSpeechSupported) {
    window.speechSynthesis.addEventListener('voiceschanged', updateVoices)
  }
})

onBeforeUnmount(() => {
  if (isSpeechSupported) {
    window.speechSynthesis.removeEventListener('voiceschanged', updateVoices)
    window.speechSynthesis.cancel()
  }
})
</script>

<template>
  <ArticleHeader title="Web Speech API" :update-date="metadata.updateDate" />

  <section class="mt-20">
    <div class="grid gap-20 lg:grid-cols-[1.2fr_0.8fr]">
      <div class="rounded-lg border border-gray-200 bg-[#f6f7f8] p-20">
        <label for="speech-text" class="sr-only">speech-text</label>
        <textarea
          id="speech-text"
          v-model="text"
          rows="4"
          class="text-14 w-full resize-y rounded-md border border-gray-300 bg-white p-12 leading-relaxed text-gray-800 focus:border-blue-400 focus:outline-none"
          placeholder="Type the text you want to speak"
        ></textarea>

        <div class="mt-14 flex flex-wrap gap-10">
          <button
            type="button"
            :disabled="!hasText || isSpeaking || isDownloading"
            class="text-14 rounded-md bg-black px-18 py-8 text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
            @click="handlePlay"
          >
            play
          </button>
          <button
            type="button"
            :disabled="!isSpeaking || isDownloading"
            class="text-14 rounded-md border border-gray-400 px-18 py-8 text-gray-700 transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
            @click="handleStop"
          >
            stop
          </button>
          <button
            type="button"
            :disabled="!hasText || isSpeaking || isDownloading"
            class="text-14 rounded-md border border-gray-400 px-18 py-8 text-gray-700 transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
            @click="handleDownload"
          >
            download
          </button>
          <span
            v-if="isSpeaking || isDownloading"
            class="text-12 flex items-center text-gray-500"
          >
            Working...
          </span>
        </div>

        <p class="text-12 mt-12 text-gray-500">
          Download records via “current tab audio sharing”. If unsupported, use
          playback only.
        </p>
        <p v-if="statusMessage" class="text-12 mt-10 text-blue-600">
          {{ statusMessage }}
        </p>
      </div>

      <div class="rounded-lg border border-gray-200 bg-white p-20">
        <h3 class="text-14 font-bold text-gray-700">Voice Settings</h3>

        <div class="mt-16">
          <label
            for="base-voice-select"
            class="text-12 font-bold text-gray-600"
          >
            Base Voice
          </label>
          <div class="relative mt-6">
            <select
              id="base-voice-select"
              v-model="selectedVoiceUri"
              class="text-13 w-full appearance-none rounded-md border border-gray-300 bg-white p-8 pr-30"
            >
              <option
                v-for="voice in voices"
                :key="voice.voiceURI"
                :value="voice.voiceURI"
              >
                {{ voice.name }} ({{ voice.lang }})
              </option>
            </select>
            <svg
              class="pointer-events-none absolute top-1/2 right-10 h-20 w-20 -translate-y-1/2 text-gray-500"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.94l3.71-3.71a.75.75 0 1 1 1.06 1.06l-4.24 4.24a.75.75 0 0 1-1.06 0L5.21 8.29a.75.75 0 0 1 .02-1.08z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <p class="text-11 mt-6 text-gray-400">
            Choose from voices installed in your browser.
          </p>
        </div>

        <div class="mt-18">
          <div class="text-12 flex items-center justify-between text-gray-600">
            <label for="pitch-range" class="font-bold">Pitch</label>
            <span>{{ pitch.toFixed(2) }}</span>
          </div>
          <input
            id="pitch-range"
            v-model.number="pitch"
            type="range"
            min="0.5"
            max="2"
            step="0.05"
            class="mt-6 w-full"
          />
        </div>

        <div class="mt-18">
          <div class="text-12 flex items-center justify-between text-gray-600">
            <label for="speed-range" class="font-bold">Speed</label>
            <span>{{ rate.toFixed(2) }}</span>
          </div>
          <input
            id="speed-range"
            v-model.number="rate"
            type="range"
            min="0.5"
            max="2"
            step="0.05"
            class="mt-6 w-full"
          />
        </div>

        <div class="mt-18">
          <p class="text-12 font-bold text-gray-600">Playback Mode</p>
          <div class="mt-8 flex flex-wrap gap-8">
            <button
              type="button"
              class="text-12 rounded-full border px-14 py-6 transition-colors"
              :class="
                mode === 'normal'
                  ? 'border-black bg-black text-white'
                  : 'border-gray-300 text-gray-600'
              "
              @click="mode = 'normal'"
            >
              Normal
            </button>
            <button
              type="button"
              class="text-12 rounded-full border px-14 py-6 transition-colors"
              :class="
                mode === 'bpm'
                  ? 'border-black bg-black text-white'
                  : 'border-gray-300 text-gray-600'
              "
              @click="mode = 'bpm'"
            >
              BPM
            </button>
          </div>
          <div v-if="mode === 'bpm'" class="mt-12">
            <div
              class="text-12 flex items-center justify-between text-gray-600"
            >
              <label for="bpm-range" class="font-bold">BPM</label>
              <span>{{ bpm }}</span>
            </div>
            <input
              id="bpm-range"
              v-model.number="bpm"
              type="range"
              min="40"
              max="200"
              step="1"
              class="mt-6 w-full"
            />
            <p class="text-11 mt-6 text-gray-400">
              Plays word-by-word on the BPM grid. Long words may drift past the
              next beat.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mt-20 rounded-lg border border-gray-200 bg-white p-16">
    <p class="text-12 text-gray-500">
      For commercial use, please verify the licensing status of the voices
      provided by your browser’s Web Speech API.
    </p>
  </section>
</template>
