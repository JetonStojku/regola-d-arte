# InterServer deployment notes

## Goal

Deploy the Astro site as static files to InterServer Windows shared hosting.

## Build output

- Build command from `website/`: `npm run build`
- If PowerShell blocks `npm.ps1`, run `npm.cmd run build` instead.
- Production output directory: `website/dist/`
- Astro is configured for static output in `website/astro.config.mjs`
- The site uses `trailingSlash: 'always'`, so routes are emitted as folder-based `index.html` files

## Production URL configuration

- Set `SITE_URL` to the final public origin before running a production build.
- `website/astro.config.mjs` reads `process.env.SITE_URL` and uses it as the Astro `site` value.
- That value feeds canonical URLs, sitemap URLs, and `robots.txt`, so it must exactly match the live domain.
- Do not ship a production build with the localhost fallback.

Examples:

```sh
# PowerShell
$env:SITE_URL = 'https://regola-darte.it'
npm.cmd run build

# cmd.exe
set SITE_URL=https://regola-darte.it && npm run build
```

Use the real live origin for the actual deployment. If the domain changes, rebuild with the new `SITE_URL`.

## What to upload

Upload the complete contents of `website/dist/` to the InterServer web root.

Include:

- `index.html`
- `404.html`
- `robots.txt`
- `sitemap.xml`
- The generated route folders for `/it/`, `/en/`, and nested service pages
- The `assets/` directory and any other emitted static asset folders

Do not upload source files, `src/`, `public/`, or the Astro project itself. The host only needs the built static output.

## Hosting notes for InterServer Windows shared hosting

- Assume no SSH, Node.js, or application runtime is available on the host.
- The site must work as plain static files after upload.
- Keep the directory structure intact so each folder route resolves to its `index.html`.
- Make sure `robots.txt` and `sitemap.xml` remain at the web root.
- Use the host control panel or file manager to map the web root to the uploaded static files.

## Static routing and 404 handling

- The site is generated as static folder routes, so `/it/` and `/en/` must both resolve to their corresponding `index.html` files.
- The custom `404.html` from `website/dist/` should be present at the web root.
- If InterServer exposes a custom error-page setting, point the 404 handler to `/404.html`.
- Verify that unknown URLs fall back to the deployed 404 page rather than a generic server error.

## Assets and MIME-sensitive files

- Preserve all file extensions exactly as emitted by Astro and Vite.
- Check that `.css`, `.js`, `.svg`, `.webp`, `.avif`, `.ico`, `.xml`, `.txt`, `.json`, and `.woff2` files are served correctly.
- Keep hashed asset filenames unchanged; they are part of the generated build output.
- If InterServer requires MIME-type mapping for any asset class, add it in the host control panel rather than changing the build output.

## Deployment checklist

1. Set `SITE_URL` to the final live domain.
2. Run `npm run build` in `website/`.
3. Confirm `website/dist/` was regenerated successfully.
4. Upload the full contents of `website/dist/` to the InterServer web root.
5. Verify the homepage loads over HTTPS.
6. Verify `/it/` and `/en/` open correctly.
7. Verify representative service pages load in both languages.
8. Verify `/robots.txt` and `/sitemap.xml` are reachable.
9. Verify the custom 404 page is served for a missing URL.
10. Verify canonical URLs in page source use the live domain.
11. Verify localized navigation and assets load without broken links.
12. Confirm no source files or secrets were uploaded.

## Rollback

- Keep the previous successful `website/dist/` upload as a known-good release.
- If the new deployment has a problem, replace the live web root contents with the previous uploaded static build.
- Because the site is static, rollback does not require database changes or server-side migrations.
- After rollback, clear any CDN or browser cache if the host or proxy caches static assets.

## Verification

- `npm run build` succeeds in `website/`.
- The generated output directory is `website/dist/`.
- The upload set is limited to static files from that directory.
- Production URLs, sitemap output, `robots.txt`, and `404.html` all reference the live domain.
