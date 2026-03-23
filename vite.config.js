import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: "/se_project_react/",
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})