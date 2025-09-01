import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";

const SITE = "https://piggylux.vercel.app/";

export default defineConfig({
  site: SITE,
  integrations: [react(), image(), sitemap()],
  image: { service: { entrypoint: "astro/assets/services/sharp" } },
});
