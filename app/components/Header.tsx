export default function Header() {
    return (
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="container">
                <div class="navbar-start">
                    <a class="navbar-item has-text-weight-semibold	" href="/">Hayaton engineer blog</a>
                </div>
                <div class="navbar-end">
                    <a class="navbar-item" href="https://github.com/hayatonjp" target="_blank" rel="noopener noreferrer">
                        <img src="/github-mark.svg" alt="github"/>
                    </a>
                </div>
            </div>
        </nav>
    )
}