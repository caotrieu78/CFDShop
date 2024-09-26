import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import jsconfigPath from 'vite-jsconfig-paths'
import path from 'path'

export default defineConfig({
  plugins: [react(), jsconfigPath()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./src")
    },
  }
});