import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        home: 'index.html',
        why: 'why.html',
        menu: 'menu.html',
        order: 'order.html',
      },
    },
  },
});
