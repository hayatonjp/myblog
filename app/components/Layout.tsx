export default function Layout({ children }: { children: any } ) {
    return (
        <section class="mx-5 my-6">
            <div class="blog-detail container is-max-desktop fixed-grid is-rounded box is-shadowless">
                {children}
            </div>
        </section>
    );
}