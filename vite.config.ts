import mdx from '@mdx-js/rollup';
import honox from 'honox/vite';
import pages from '@hono/vite-cloudflare-pages'
import remarkFrontmatter from 'remark-frontmatter';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
    return {
      plugins: [
        honox(),
        pages(),
        mdx({
          jsxImportSource: 'hono/jsx',
          remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
        }),
      ],
    };
});