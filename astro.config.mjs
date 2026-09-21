import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Batu & Sepeda: one configuration source for all absolute URLs; SITE_URL overrides the default in CI/deploy.
const site = process.env.SITE_URL?.trim() || "https://jakartahistory.com";

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
