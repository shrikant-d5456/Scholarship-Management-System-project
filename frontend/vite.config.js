import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   build: {
    outDir: 'dist' // Vercel expects the output to be in a folder like 'dist'
  },
})
