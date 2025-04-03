// @ts-check
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import partytown from "@astrojs/partytown";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://iamhayoung.dev/",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), mdx(), partytown(), sitemap()],
  i18n: {
    locales: ["ko", "ja"],
    defaultLocale: "ko",
  },
});