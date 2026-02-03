<script lang="ts">
export const metadata = {
  updateDate: '2026/01/22',
}
</script>

<script setup lang="ts">
import ArticleHeader from '@/components/ArticleHeader.vue'
import PreCodes from '@/components/PreCodes.vue'
</script>

<template>
  <ArticleHeader
    title="vite+vue+typescript+tailwind"
    :update-date="metadata.updateDate"
  />

  <PreCodes>
    <pre><b class="t02">// at workspace</b>
<b class="t01">npm create vite@latest</b> &#123;project name&#125;

<b class="t02">// - TypeScript: Yes -  </b></pre>

    <pre><b class="t01">cd</b> &#123;project name&#125;
<b class="t01">npm install</b></pre>

    <pre><b class="t01">npm install tailwindcss @tailwindcss/vite</b></pre>

    <pre><b class="t02">// vite.config.ts</b>

import &#123; defineConfig &#125; from 'vite'
import vue from '@vitejs/plugin-vue'
<b class="t04">import tailwindcss from '@tailwindcss/vite'</b>

export default defineConfig(&#123;
  plugins: [
    vue(),
    <b class="t04">tailwindcss(),</b>
  ],
&#125;)</pre>
    <pre><b class="t02">// src/assets/main.css</b>

<b class="t04">@import "tailwindcss";</b></pre>

    <pre><b class="t02">// src/main.ts</b>

import &#123; createApp &#125; from 'vue'
import App from './App.vue'
<b class="t04">import './assets/main.css'</b>

createApp(App).mount('#app')</pre>

    <pre><b class="t02">// exsample</b>

&lt;template&gt;
  &lt;div class="<b class="t05">p-6</b>"&gt;
    &lt;h1 class="<b class="t05">text-3xl font-bold underline</b>"&gt;Hello Tailwind&lt;/h1&gt;
  &lt;/div&gt;
&lt;/template&gt;</pre>
  </PreCodes>
</template>
