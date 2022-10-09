import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path' // @types/node
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()]
    }),
    VitePWA({
      includeAssets: ['favicon.ico'],
      manifest: {
        name: 'music',
        short_name: 'music',
        description: 'music app',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // 设置 `@` 指向 `src` 目录
      images: resolve(__dirname, 'src/assets/images')
    }
  },
  base: '/', // 设置打包路径
  server: {
    port: 4000, // 设置服务启动端口号
    host: '0.0.0.0',
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域

    // 设置代理
    proxy: {
      '/api': {
        target: 'https://netease-cloud-music-api-ochre-pi.vercel.app/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          '@import "@/style/general.scss";@import "@/style/mixin.scss";@import "@/style/variables.scss";'
      }
    }
  },
  build: {}
})
