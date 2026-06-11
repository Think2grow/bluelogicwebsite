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
  adapter: cloudflare(),
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes("/book/") &&
        !page.includes("/thank-you/") &&
        !page.includes("/whole-home-reverse-osmosis/") &&
        !page.includes("/vsl/") &&
        !page.includes("/privacy/"),
    }),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  prefetch: true,
});
