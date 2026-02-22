export async function onRequestPost({ request, env }) {
    try {
        const { domain, originalURL } = await request.json()

        // Use env vars if set in Cloudflare dashboard, otherwise expect client to pass it
        const authHeader = env.SHORTIO_KEY || request.headers.get('Authorization')
        const finalDomain = env.SHORTIO_DOMAIN || domain

        if (!authHeader || !finalDomain || !originalURL) {
            return new Response(JSON.stringify({ error: "Missing required parameters" }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            })
        }

        const res = await fetch('https://api.short.io/links', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': authHeader
            },
            body: JSON.stringify({
                domain: finalDomain,
                originalURL
            })
        })

        const data = await res.json()

        return new Response(JSON.stringify(data), {
            status: res.status,
            headers: { "Content-Type": "application/json" }
        })
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        })
    }
}
