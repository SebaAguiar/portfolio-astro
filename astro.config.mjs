import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel/serverless';
import db from '@astrojs/db';
import auth from "auth-astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es']
  },
  integrations: [tailwind(), sitemap(), db(), auth(), react()],
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true
    }
  })
});
