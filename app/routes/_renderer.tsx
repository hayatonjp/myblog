import { jsxRenderer } from 'hono/jsx-renderer'
import { Link, Script } from 'honox/server'
import Header from '../components/Header'

export default jsxRenderer(({ children }) => {
  return (
    <html lang="ja">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.4/css/bulma.min.css"/>
        <Script src="/app/client.ts" async />
      </head>
      <body class="has-background-light">
        <Header />
        <main class="hero is-fullheight-with-navbar">
          {children}
        </main>
      </body>
    </html>
  )
})
