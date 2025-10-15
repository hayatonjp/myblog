import mdx from '@mdx-js/rollup';
import adapter from "@hono/vite-dev-server/node";
import build from "@hono/vite-build/node";
import honox from 'honox/vite';
import pages from '@hono/vite-cloudflare-pages'
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
    return {
      build: {
        emptyOutDir: false,
      },
      plugins: [
        honox({
          devServer: { adapter },
          client: { input: ["./app/style.css"] },
        }),
        pages(),
        mdx({
          jsxImportSource: 'hono/jsx',
          remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
        }),
        build(),
      ],
    };
});