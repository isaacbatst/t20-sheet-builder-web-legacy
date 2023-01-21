
import { defineConfig, configDefaults } from 'vitest/config'
import react from '@vitejs/plugin-react'

const coverageExclude = configDefaults.coverage.exclude || [];
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './setupTest.ts',
    coverage: {
      all: true,
      src: ['src'],
      exclude: ['setupTest.ts', ...coverageExclude],
    }
  },
})