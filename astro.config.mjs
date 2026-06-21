import 'dotenv/config';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  site: 'https://devashish-portfolio.vercel.app', // Update with your actual domain
  integrations: [
    mdx(),
    sitemap(),
    icon(),
    react(),
  ],
  adapter: vercel(),
  output: 'server',
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Improve build performance
      cssCodeSplit: true,
      minify: 'terser',
      rollupOptions: {
        output: {
          manualChunks: {
            react: ['react', 'react-dom'],
            framer: ['framer-motion'],
          },
        },
      },
    },
  },
  compressHTML: true,
});