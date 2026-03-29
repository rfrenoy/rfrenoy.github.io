import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default defineConfig({
  site: "https://rfrenoy.github.io",
  integrations: [mdx()],
  markdown: {
    smartypants: false,
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      theme: "github-light",
    },
  },
});
