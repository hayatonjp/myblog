import type { ReactNode } from 'hono/jsx';
import type { Meta } from '../routes/types';

type LayoutProps = {
    children: ReactNode;
    frontmatter?: Meta;
};

export default function Layout({ children, frontmatter }: LayoutProps) {
    const hasTags = frontmatter?.tags && frontmatter.tags.length > 0;

    return (
        <section class="mx-5 my-6">
            <div class="blog-detail container is-max-desktop fixed-grid is-rounded box is-shadowless">
                {(frontmatter?.title || frontmatter?.date || hasTags) && (
                    <header class="post-header">
                        {frontmatter?.date && <p class="post-date m-0">{frontmatter.date}</p>}
                        {frontmatter?.title && <h2 class="post-title">{frontmatter.title}</h2>}
                        {hasTags && (
                            <div class="tag-list tag-list-detail">
                                {frontmatter!.tags!.map((tag, index) => (
                                    <span class="tag-pill" data-tag={tag} key={`${tag}-${index}`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </header>
                )}
                {children}
            </div>
        </section>
    );
}