// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // ⚠️ Update this to your production domain before deploying
  site: 'https://example.com',

  integrations: [
    react(),
    sitemap(),
  ],

  image: {
    // Uses sharp for image optimisation (already installed)
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },

  // Strict build output — no trailing slashes in URLs
  trailingSlash: 'never',
});

