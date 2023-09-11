import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'

import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl()],
  define: {'process.argv': process.argv}, 
  server: {
    https: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    reporter: [ "dot", "html"],
    setupFiles: './setup.js',
  }
});
