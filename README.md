# Jakarta History Museum visitor guide

Independent Indonesian and English visitor guide. Guide content and visible/schema FAQ share locale data; legal pages retain corresponding language alternates. Public source dates, hours conflicts and category limitations are documented in `research-notes.md`.

Use the package-manager version in `package.json`; run `pnpm check`, `pnpm build`, then `pnpm exec wrangler deploy --dry-run` for local validation. The Cloudflare project is `jakartahistory`. The ASSETS Worker normalizes HTTP/www requests to HTTPS apex while preserving path/query, and keeps unknown routes at 404 with noindex. Production deployment and visual verification are separate release steps.

Both JPEG images are local; credits and source links are visible in each guide. Do not place private analytics exports or credentials in this repository.
