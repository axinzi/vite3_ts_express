import { resolve } from 'path';
import { defineConfig } from 'vite';
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  build: {
    // target: false,
    rollupOptions: {
      input: {
        app: 'app.ts'
      },
      output: {
        name: 'dist',
        format: 'cjs',
        entryFileNames: '[name].js'
      }
    },
    chunkSizeWarningLimit: 1500
  }
});
