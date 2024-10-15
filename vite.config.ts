import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import { fileURLToPath, URL } from 'url'
import { VitePWA } from 'vite-plugin-pwa'
import cesium from 'vite-plugin-cesium';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(), cesium(), visualizer({ open: true }),
  AutoImport({
    imports: ['vue', 'vue-router', 'pinia', {
      'axios': [
        ['default', 'axios'], // import { default as axios } from 'axios',
      ],
    },],
    dts: "./auto-imports.d.ts"
  }),
  VitePWA({
    workbox: {
      cacheId: "ZM",//缓存名称
      maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
      runtimeCaching: [
        {
          urlPattern: /.*\.js.*/, //缓存文件
          handler: "StaleWhileRevalidate", //重新验证时失效
          options: {
            cacheName: "ZM-js", //缓存js，名称
            expiration: {
              maxEntries: 30, //缓存文件数量 LRU算法
              maxAgeSeconds: 30 * 24 * 60 * 60 //缓存有效期
            }
          }
        }
      ]
    },
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      crypto: "crypto-js",
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler", // or 'modern'
        additionalData: '@import "@/styles/scssConfig.scss";', // 添加公共样式
      }
    }
  },
  define: {
    'process': process
  },
  build: {
    chunkSizeWarningLimit: 2000,
    cssCodeSplit: true,
    sourcemap: false,
    minify: 'terser',
    assetsInlineLimit: 4000,
  },
  server: {
    proxy: {
      '/auth': {
        target: 'http://36.133.198.49:76/auth',
        // target: 'http://82.156.211.70:30234',
        // target: 'http://127.0.0.1:8034',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/auth/, '')
      },
      '/stream': {
        // target: 'http://113.31.119.232/stream/',
        target: 'http://14.29.140.231:31936/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/stream/, '')
      },
    }
  },
})
