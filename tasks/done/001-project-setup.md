# Project setup

## Goal

Create the static Astro website project inside `website/` with Tailwind CSS, TypeScript support, and static build output suitable for shared hosting.

## Recommended model

GPT-5.4-mini

## Recommended reasoning

medium

## Context

Inspect `create-website-tasks.md`, `materials/`, and the current empty `website/` folder first.

## Implementation plan

1. Initialize an Astro project in `website/`.
2. Add Tailwind CSS using Astro's recommended integration.
3. Configure TypeScript and strict-enough defaults without adding unnecessary complexity.
4. Set Astro output to static.
5. Add basic scripts for `dev`, `build`, `preview`, and optional checks.
6. Add initial folders for layouts, components, content, styles, assets, and i18n utilities.

## Acceptance criteria

- [ ] `website/` contains a working Astro project.
- [ ] Tailwind CSS is configured and applied globally.
- [ ] TypeScript files are supported.
- [ ] `npm run build` generates static files.
- [ ] No CMS, database, or backend is added.

## Verification

Run from `website/`:

```sh
npm install
npm run build
```0

## Notes / constraints

- Do not build the clinic pages in this task.
- Keep dependencies minimal and free.
- The final output must be deployable on InterServer Windows shared hosting as static files.
