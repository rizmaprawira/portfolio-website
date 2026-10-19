import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { unified } from "@astrojs/markdown-remark";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default defineConfig({
  site: process.env.SITE_URL || "https://rizmaprawira.github.io",
  base: process.env.BASE_PATH || "/portfolio-website",
  trailingSlash: "always",
  integrations: [sitemap()],
  markdown: {
    processor: unified({
      remarkPlugins: [remarkMath],
      rehypePlugins: [[rehypeKatex, { trust: false, strict: "warn" }]],
    }),
  },
  devToolbar: { enabled: false },
});
