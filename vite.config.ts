import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'

import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), mkcert()],
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
//    options: {
//      key: fs.readFileSync("/home/robert/src/typescript/ts-REST-api-for-mongodb/certs/localhost.key"),
//      crt: fs.readFileSync("/home/robert/src/typescript/ts-REST-api-for-mongodb/certs/localhost.crt")
//    },
//    environment: 'happy-dom',
//    reporter: [ "json", "html"],
//    reporter: [ "default", "dot"],
//    reporter: [ "dot"],
