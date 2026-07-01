// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Domaine prévisionnel (cf. email officiel contact@cpuemergenceplus.com) — à confirmer
  // avec le client une fois le nom de domaine effectivement réservé (voir plan de projet).
  site: 'https://www.cpuemergenceplus.com',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});