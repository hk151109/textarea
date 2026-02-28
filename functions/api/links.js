export async function onRequestPost({ request, env }) {
    try {
        const { originalURL } = await request.json()

        const apiKey = env.SHORTIO_KEY
        const domain = env.SHORTIO_DOMAIN

        if (!apiKey || !domain) {
            return new Response(JSON.stringify({ error: "Short.io not configured on server" }), {
                status: 503,
                headers: { "Content-Type": "application/json" }
            })
        }

        if (!originalURL) {
            return new Response(JSON.stringify({ error: "Missing originalURL" }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            })
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
