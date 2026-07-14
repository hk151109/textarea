# [textarea.my](https://textarea.my)

A _minimalist_ text editor that lives entirely in your browser. Your content is compressed and stored in the URL hash — no account or database required. Just write and share. An optional server-side integration with [Short.io](https://short.io) is available for generating compact short URLs from long document links.

<p align="center">
  <a href="https://textarea.my">
    <img src=".github/app_screenshot.png" alt="Screenshot of textarea.my" width="550">
  </a>
</p>

## Features

- 🗜️ **Compression** – Text is compressed with deflate and stored in the URL hash
- 🔗 **Shareable URLs** – Share any document by copying its URL
- 📋 **Sidebar & Document History** – A collapsible sidebar on the right keeps a list of your recent documents (stored in `localStorage`). Click any entry to reopen it instantly, search by title, or remove entries you no longer need
- ✂️ **Short.io link shortening** – When sharing a document whose URL is very long, the app automatically calls a server-side proxy (`/api/links`) that uses [Short.io](https://short.io) to generate a compact short URL. The API key is stored securely on the server — you never need to configure anything in the browser
- 💕 **Style** – Customize the look with CSS via DevTools
- 📊 **Live stats** – Word count, character count, and cursor position (line/column) updated as you type
- 💾 **Auto-save** – Changes are saved to `localStorage` automatically and reflected in the URL

## Pro tips

- Start your document with `# Title` to set a custom page title
- Your data lives in `localStorage` **and** the URL — two ways to get back to your work
- Click the **sidebar toggle** (top-right chevron) to show or hide your document history panel
- Use the **search box** inside the sidebar to filter recent documents by title
- Each document in the sidebar has a **copy-link button** that generates a short URL via Short.io and copies it to your clipboard
- Add a `style` attribute to the `<article>` tag via DevTools — it will be saved in the URL too!
- Add [`/qr`](https://textarea.my/qr#c0_NSy1KLElVSFQIDFJIzk9JVUjLL1KozC8tUsjLL0ktVgQA) to get a QR code for the current page
- Press `Cmd+Shift+.` on macOS or `Ctrl+Shift+.` on Windows/Linux (or use the **New** button in the sidebar) to open a blank document in a new browser tab

## Examples

<!-- - [Crime and Punishment (by Fyodor Dostoevsky)](https://medv.io/goto/crime-and-punishment-by-fyodor-dostoevsky.html) -->
- [A Markdown Example](https://textarea.my/#Xc9NT8JAEAbg-_6KV7hAQyB86AFCjDdMiAej9y7dobuy7NTdqWKM_e2mhVOP88z3EDvSxoUSe_oij7lSw2HPFq31cdlhX1dX7fP9jfv-oNQLx7P2qHTUZdSVhdBFcKAjR4IL3gXCsa0RcaGcKvVmXULHBQfRLiRk2YG96TqzbILMifauuMYT6GDQNEmiO5HYyHV5XdI00N5DuCSxFKdKPYfbXEOgiz5XntbICw5JcMEWq8UmV-oJ7697JMu1NzgQDAkVQqZbJHUMZOCCMHR75mkNK1Kl9Wx2Gzkt-DyrtNjHz5riz3a-WA6tTlapPM8_kjrWoRDHAZa859EYvwrtr4k9TT2Xo8GuTUzwzdGbu8F4o_7a1n8=)
- [An Ode to Comic Sans](https://textarea.my/#TVM9j9w2EE3NX_FwaRJAtwe4SHGu7g5I4MII4HNgpByRI4lZiqPMjFbeVPsj0hiI_9z-koCyDV9FznA-33v8EQ8VvyeGC55kzhHPVC2E73eQaj6xYcs-yeogO-Y6duEBo-aKXOHnRUalZcoRg-jchedJuFBkw1o9c-pghblVUSmFE9alC09KNuU6widGT_XvlR0ywFjzAKoJVXQ-hPAoWlFlf5xJ-8KYqBSDKApt6DXzYF14XB1JJBW2DrYwxwn92ve7TZioptuktFUshakLb7xF0dH2JSbGSXLk1qUZsZCZisxYxJz1Plwv_z0yjrmm7nr5jGbSkWFU-JvjVQMAgzIfrpfPIbyf-Ds8rAaLMgwdKP21mrc-WXFkrTukT2X1OOE3UpqlJpR8ZCxMWgzkSLTVQ_iT_QVV2OjU1lsr9WQTpy48Tcw6rKWcsanUsYP52veitZwh9RDa4ptmZ0Of1adEZ0TSZDvoRcxvk4wYypnVWr1V44TKmxV2bz5YHqvBaeGEqCJHTk1CSUTt0OonYds526ZsCysWZfM8ciNtkY31evl3Z6CJyroG3jsu9PGAD3y9fDoxjLliE7WvWL6VeGxSmnluBztrpbZlX2jmFH4VRdQ8syE7Kp9YQUUqI8o8Z_cGzhtHz6S2U7xxHqddVtM6U4WTOYcP2ScQbM6F4RM5ItXr5VPLBKfsnA4hPNQE81xKa7awWjb_KrNlOYNizImrd-GPGkVKY6gXn1jb7GtVHnJtA73jOdf07RtsoiV1TY8qa03ceqgc2brwvk3SEKVSWlwyVP4C-8akIHjmww8BAHqKx3GvcI9Vy093dzOn0yHLHZmx2505qR3GPPz8ek8YpPrtQHMu53vcvJDX2-eb7qXjpkNc1fKJXyRa_ofv8eqX5eMXZ5Qiet-od34d_gc=)

## Related

- [numbr.dev](https://numbr.dev) – my another website, same as textarea, only support calculations like `1 USD in EUR =`.

---

*Made with ❤️ and JavaScript*

<p align="center">
  <a href="https://crow.watch/join/textarea">
    <img src="https://github.com/user-attachments/assets/37c84073-6533-4746-951d-d879f90a7fd2" alt="Join Crow Watch" width="900" hight="600">  
  </a>
</p>
