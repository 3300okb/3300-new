// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    chunkSizeWarningLimit: 1500, // 遅延読み込みを使っているため警告を緩和
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        manualChunks(id) {
          // node_modulesは別チャンクにする（キャッシュ効率向上）
          if (id.includes('node_modules')) {
            // 大きなライブラリは個別に分割
            if (id.includes('vue-router')) {
              return 'vendor-router'
            }
            if (id.includes('@tanstack/vue-query')) {
              return 'vendor-query'
            }
            if (id.includes('swiper')) {
              return 'vendor-swiper'
            }
            // その他のvendorはまとめる（ホスティング問題対策）
            return 'vendor'
          }

          // 記事コンポーネントは大きいので分割
          // ただし、カテゴリごとにまとめて分割数を抑える（ホスティングの同時接続制限対策）
          if (id.includes('src/components/article/')) {
            if (id.includes('/js/')) {
              return 'articles-js'
            }
            if (id.includes('/css/')) {
              return 'articles-css'
            }
            if (id.includes('/etc/')) {
              return 'articles-etc'
            }
            // その他の記事
            return 'articles-other'
          }

          // 共通コンポーネントは記事と依存関係があるため、デフォルトチャンクに含める
          // （循環依存を避けるため、個別チャンク化しない）
        },
      },
    },
    // ソースマップを本番でも生成（デバッグ用、必要なければfalse）
    sourcemap: false,
    // minifyオプションを明示的に設定
    minify: 'esbuild',
    // assetsInlineLimit: デフォルト4096（4kb）未満はインライン化
    assetsInlineLimit: 4096,
  },
  // ベースパスの設定（必要に応じて）
  // base: './', // 相対パスでビルドする場合
})
