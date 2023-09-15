import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {'process.argv': process.argv}, 
  server: {
    https: {
      key: fs.readFileSync(process.env.SSL_KEY),
      cert: fs.readFileSync(process.env.SSL_CERT)
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    reporter: [ "dot", "html"],
    setupFiles: './setup.js',
  }
});
