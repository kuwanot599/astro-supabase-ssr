import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare'; // これが必要です

export default defineConfig({
  output: 'server', // SSRモードの指定
  adapter: cloudflare(), // Cloudflare用のアダプター
});