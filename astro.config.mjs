import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.SITE_URL || 'https://rizmaprawira.github.io',
  base: process.env.BASE_PATH || '/portfolio-website',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
