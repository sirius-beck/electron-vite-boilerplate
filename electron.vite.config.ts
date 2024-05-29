import { defineConfig, externalizeDepsPlugin } from 'electron-vite'
import tsconfigPathsPlugin from 'vite-tsconfig-paths'
import reactPlugin from '@vitejs/plugin-react'

export default defineConfig({
  main: {
    plugins: [tsconfigPathsPlugin(), externalizeDepsPlugin()]
  },
  preload: {
    plugins: [tsconfigPathsPlugin(), externalizeDepsPlugin()]
  },
  renderer: {
    plugins: [tsconfigPathsPlugin(), reactPlugin()]
  }
})
