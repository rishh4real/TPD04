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
        svety: 'svety.html',
        why: 'why.html',
        cook: 'cook.html',
        menu: 'menu.html',
        proteinDropMenu: 'protein-drop-menu.html',
        chatkaaraBihariMenu: 'chatkaara-bihari-menu.html',
        bowl: 'bowl.html',
        buildBowl: 'build-bowl.html',
        buildYourBowl: 'build-your-bowl/index.html',
        cart: 'cart.html',
        invoice: 'invoice.html',
        order: 'order.html',
      },
    },
  },
});
