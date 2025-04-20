import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // Указывает относительный путь для загрузки ресурсов
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: '0.0.0.0', // Позволяет доступ с любого устройства в сети
    port: 5173,      // Укажите порт (можно изменить при необходимости)
    open: true       // Автоматически открывает браузер при запуске
  }
})
