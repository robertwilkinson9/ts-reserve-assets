import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {'process.argv': process.argv}, 
  test: {
    globals: true,
    environment: 'jsdom',
    reporter: [ "dot", "html"],
    setupFiles: './setup.js',
  }
});
//    environment: 'happy-dom',
//    reporter: [ "json", "html"],
//    reporter: [ "default", "dot"],
//    reporter: [ "dot"],
