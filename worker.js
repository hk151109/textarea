export default {
  async fetch(request, env) {
    const url = new URL(request.url)

    // Handle POST /api/links — proxy to short.io using server-side env vars
    if (url.pathname === '/api/links' && request.method === 'POST') {
      try {
        const { originalURL } = await request.json()

        const apiKey = env.SHORTIO_KEY
        const domain = env.SHORTIO_DOMAIN

        if (!apiKey || !domain) {
          return Response.json({ error: 'Short.io not configured on server' }, { status: 503 })
        }

        if (!originalURL) {
          return Response.json({ error: 'Missing originalURL' }, { status: 400 })
        }

        const res = await fetch('https://api.short.io/links', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': apiKey
          },
          body: JSON.stringify({ domain, originalURL })
        })

        const data = await res.json()
        return Response.json(data, { status: res.status })
      } catch (err) {
        return Response.json({ error: err.message }, { status: 500 })
      }
    }

    // All other requests — serve static assets
    return env.ASSETS.fetch(request)
  }
}
