import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
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
