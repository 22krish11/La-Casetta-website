import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/La-Casetta-website/',
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0'
  }
})