import type { ReactNode } from 'hono/jsx';
import type { Meta } from '../routes/types';

type LayoutProps = {
    children: ReactNode;
    frontmatter?: Meta;
};

/**
 * Layout component that wraps page content and optionally renders a header with date, title, and tags.
 *
 * @param children - The content to render inside the layout container.
 * @param frontmatter - Optional post metadata; when present, its `date`, `title`, and `tags` are used to render the header.
 * @returns The JSX layout element containing the provided `children` and, if available, a header showing the date, title, and tag list.
 */
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