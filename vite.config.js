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
        cook: 'cook.html',
        menu: 'menu.html',
        bowl: 'bowl.html',
        buildBowl: 'build-bowl.html',
        cart: 'cart.html',
        invoice: 'invoice.html',
        order: 'order.html',
      },
    },
  },
});
