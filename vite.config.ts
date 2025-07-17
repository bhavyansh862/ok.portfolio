import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'], // ok to keep
  },
  build: {
    rollupOptions: {
      // ❌ remove this external block completely
      // external: ['react-icons/fa']
    },
  },
});
