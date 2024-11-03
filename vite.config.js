/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createHash } from 'crypto'
import path from 'node:path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, '/src/assets'),
      '@components': path.resolve(__dirname, '/src/components'),
    },
  },
  css: {
    modules: {
      generateScopedName: (className, fileName, css) => {
        const componentName = fileName
          .split('/')
          .pop()
          .replace(/\.module\.(css|scss)$/, '')

        const hash = createHash('sha1').update(css).digest('hex').substring(0, 5)

        return `${componentName}_${className}_${hash}`
      },
    },
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
})
