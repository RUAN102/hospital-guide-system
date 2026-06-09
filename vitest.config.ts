import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'dist/', 'src/main.ts', 'src/App.vue'],
    },
    resolveSnapshotPath: (testPath, snapExtension) => {
      return resolve(
        resolve(testPath, '..', '__snapshots__'),
        `${testPath.split('/').pop()}${snapExtension}`
      )
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})
