// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://kunalhalder.site',
  output: 'server',
  adapter: vercel(),
  integrations: [
    react(),
    tailwind(),
    sitemap(),
  ],
});