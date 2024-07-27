import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
    site: 'https://Hackerokuz.github.io',
    base: 'AltoClef-site',
    integrations: [
      tailwind({
        applyBaseStyles: true,
      }),
      mdx(),
    ],
    output: "static",
    // adapter: node({
    //   mode: "standalone",
    // }),
  });
