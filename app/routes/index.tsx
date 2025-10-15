import { createRoute } from 'honox/factory'
import { Meta } from './types';

export default createRoute((c) => {
  const posts = import.meta.glob<{ frontmatter: Meta }>('./posts/*.mdx', { eager: true })
  return c.render(
    <div class="container is-max-desktop mt-6 px-5 fixed-grid">
      <h1 class="is-size-2">記事一覧</h1>
      <div>
        {Object.entries(posts).map(([id, module]) => {
          if (module.frontmatter) {
            return (
              <div class="has-background-white p-4 is-rounded box is-shadowless">
                <a href={`${id.replace(/\.mdx$/, '')}`} class="is-flex is-align-items-center">
                  <div class="ml-4">
                    <p class="is-size-4 has-text-black">{module.frontmatter.title}</p>
                    <p class="has-text-black">{module.frontmatter.date}</p>
                  </div>
                </a>
              </div>
            );
          }
        })}
      </div>
    </div>
  )
})
