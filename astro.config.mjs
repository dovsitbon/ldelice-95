// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// URL provisoire : la même que SITE.url dans src/data/site.ts
export default defineConfig({
  site: 'https://ldelice-95.vercel.app',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (p) => !p.includes('/404') })],
  vite: { plugins: [tailwindcss()] },
});
