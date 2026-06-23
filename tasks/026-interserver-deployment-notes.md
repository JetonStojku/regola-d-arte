# InterServer deployment notes

## Goal

Document how to build and deploy the static Astro output to InterServer Windows shared hosting.

## Recommended model

GPT-5.4-mini

## Recommended reasoning

medium

## Context

Inspect Astro build output, package scripts, sitemap/robots setup, and any hosting constraints known for InterServer Windows shared hosting.

## Implementation plan

1. Document the exact build command and output directory.
2. Explain which generated files should be uploaded to hosting.
3. Document production domain configuration for canonical URLs and sitemap.
4. Include notes for static routing, 404 handling, assets, and MIME-sensitive files.
5. Add a deployment checklist for after upload.
6. Include rollback guidance using the previous uploaded static build.

## Acceptance criteria

- [ ] Deployment instructions are clear for a static hosting upload.
- [ ] No server backend, CMS, or database is required.
- [ ] Production URL configuration is documented.
- [ ] Sitemap, robots, and 404 deployment checks are included.
- [ ] Instructions avoid exposing secrets.

## Verification

Run a production build and confirm the documented output directory matches the actual Astro output.

## Notes / constraints

- Do not assume SSH or Node.js is available on the shared host.
- The deployed site should run as static files after upload.
