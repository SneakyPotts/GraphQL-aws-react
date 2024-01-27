import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/': '/src',
      '@assets': '/src/assets',
      '@graphql': '/src/graphql',
      '@components': '/src/components',
      '@services': '/src/services',
    }
  }
})
