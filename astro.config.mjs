import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || 'https://devinda.io',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
