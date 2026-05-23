import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    // Cloudflare Pagesの最新の規格に強制適合させます
    platformProxy: {
      enabled: true
    }
  })
});