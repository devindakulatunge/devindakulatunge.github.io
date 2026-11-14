import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || 'https://devindakulatunge.github.io',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
