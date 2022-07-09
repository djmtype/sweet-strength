// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference
// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.
import { defineConfig } from "astro/config";
import { astroImageTools } from "astro-imagetools";
import vue from "@astrojs/vue";
import astro from "astro-compress";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.sweetstrength.com",
  //  sitemap: true,
  // srcDir:'./src',
  // outDir: './dist',
  // publicDir: './public',
  // Enable the Vue renderer to support Vue components.
  // renderers: ["@astrojs/renderer-vue"],
  integrations: [
    astroImageTools, 
    vue(), 
    sitemap(),
    astro({
			// css: true,
			// html: true,
			// js: true,
		})
  ],
  vite: {
    // plugins: [astroImagePlugin],
    ssr: {
      external: ["svgo"]
    }
  },
  experimental: {
    integrations: true
  }
});