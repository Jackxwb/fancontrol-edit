import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],

  // github page
  base: process.env.IS_GITHUB_ACTION === '1' ? '/fancontrol-edit/' : '/'
})
