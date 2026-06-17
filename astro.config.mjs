// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site:
    process.env.NODE_ENV === "development"
      ? "http://localhost:4321"
      : "https://www.bluelogicwater.com",
  output: "server",
  trailingSlash: "always",
  adapter: cloudflare(),
  integrations: [
    sitemap({
      // Exclude non-canonical pages: paid/campaign landing pages, noindex pages,
      // and the /salt-lake-city/ route (a 301 redirect to /locations/salt-lake-city/).
      filter: (page) => {
        const path = new URL(page).pathname;
        const excluded = [
          "/book/",
          "/thank-you/",
          "/whole-home-reverse-osmosis/",
          "/vsl/",
          "/privacy/",
          "/salt-lake-city/",
          "/water-test/",
          "/water-is-real/",
        ];
        return !excluded.includes(path);
      },
    }),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  prefetch: true,
});
