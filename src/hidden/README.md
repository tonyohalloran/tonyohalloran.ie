# Hidden page

- `content.html` — the private page body (plain HTML fragment). Edit freely.
- `password.txt` — the password (single line). Override with `HIDDEN_PAGE_PASSWORD` env at build.
- The route file is `src/pages/q/<slug>.astro` — rename the file to move the URL.

The content is AES-GCM encrypted at build time; only ciphertext ships in `dist/`.
The page is `noindex`, unlinked, and not in the sitemap. Not bank-grade — good
enough to keep it off search engines and away from casual snooping.
