import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Batu & Sepeda: one configuration source for all absolute URLs; local development remains valid without it.
const site = process.env.SITE_URL?.trim() || undefined;

export default defineConfig({
  site,
  output: "static",
  vite: {
    server: {
      allowedHosts: true,
    },
  },
  integrations: site ? [sitemap()] : [],
});
