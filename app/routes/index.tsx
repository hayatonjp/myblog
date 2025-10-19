import { createRoute } from 'honox/factory'
import { Meta } from './types';

export default createRoute((c) => {
  const posts = import.meta.glob<{ frontmatter: Meta }>('./posts/*.mdx', { eager: true })
  
  // 投稿を日付の降順でソート
  const sortedPosts = Object.entries(posts)
    .filter(([_, module]) => module.frontmatter)
    .sort(([_, a], [__, b]) => {
      const dateA = new Date(a.frontmatter!.date)
      const dateB = new Date(b.frontmatter!.date)
      return dateB.getTime() - dateA.getTime() // 降順
    })
  
  return c.render(
    <div class="container is-max-desktop mt-6 px-5 fixed-grid">
      <h1 class="is-size-3 mb-2">記事一覧</h1>
      <div>
        {sortedPosts.map(([id, module]) => {
          return (
            <div class="has-background-white p-4 is-rounded box is-shadowless">
              <a href={`${id.replace(/\.mdx$/, '')}`} class="is-flex is-align-items-center">
                <div>
                  <p class="is-size-4 has-text-black">{module.frontmatter!.title}</p>
                  <p class="has-text-black">{module.frontmatter!.date}</p>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  )
})
