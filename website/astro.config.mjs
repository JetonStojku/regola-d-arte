import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const site = process.env.SITE_URL || 'https://regola-darte.it';

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
