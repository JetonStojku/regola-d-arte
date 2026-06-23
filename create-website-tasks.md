# Codex Task Generator: Static Dentistry Clinic Website

## Goal

Create a set of small implementation tasks for building a modern static dentistry clinic website.

The website must be created inside:

```txt
website/
```

The task files must be created inside:

```txt
tasks/
```

Use the existing `materials/` folder as the source of truth for clinic information, branding, texts, images, services, contact details, location, and any other available content.

## Target Stack

Prefer:

* Astro
* Tailwind CSS
* TypeScript where useful
* Static HTML/CSS/JS output
* No CMS
* No database
* No paid widgets
* No server backend unless absolutely necessary

The final website must be deployable as static files on InterServer Windows shared hosting.

## Website Purpose

The website has three main goals:

1. Represent the clinic as a modern, trustworthy, premium dentistry business.
2. Rank well on Google search through strong technical SEO, local SEO, performance, accessibility, and good content structure.
3. Support multilingual content with Italian as the primary language and English as the secondary language.

The website must:

* Use Italian (it) as the default language.
* Use English (en) as the secondary language.
* Prioritize Italian content quality, UX, and SEO.
* Provide a complete English experience for international visitors.
* Support language switching throughout the website.

Do not promise unrealistic SEO results, but implement everything that improves ranking quality.

## Required Website Features

Include tasks for:

* Homepage
* About clinic page
* Services overview page
* Individual service pages
* Dentist/team section if materials support it
* Contact page
* Google Maps embed using a free iframe solution
* Facebook page/posts embed using official free Meta/Facebook embed tools if possible
* Reviews section using only free solutions:

  * Prefer static/manual review cards from materials
  * Or link to Google reviews / Google Business Profile
  * Do not use paid review widgets
* Email contact form using a free static-form solution if possible

  * Prefer a provider with a free plan
  * Keep the form simple and safe
  * If no provider is configured, create a fallback `mailto:` option
* SEO metadata
* Local business schema JSON-LD
* Dentist/medical business structured data where appropriate
* Sitemap
* robots.txt
* Open Graph/social sharing metadata
* Responsive mobile-first layout
* High performance images
* Accessibility basics

## Internationalization Requirements

The website must be designed as a multilingual website from the beginning.

Requirements:

* Italian (it) is the default language.
* English (en) is the secondary language.
* No hardcoded content directly inside page components.
* Content should be organized to support future languages.
* Use a structured content approach suitable for Astro.
* All navigation labels, metadata, page titles, buttons, CTAs, and SEO content must support localization.
* Implement language-specific routes.

Preferred URL structure:

/it/
/it/servizi/
/it/contatti/

/en/
/en/services/
/en/contact/

Implement proper hreflang tags and canonical URLs.

All localized pages must have:

* localized title
* localized meta description
* localized Open Graph metadata
* localized structured data where applicable

## SEO Requirements

Create tasks that cover:

* Keyword-aware page structure
* Local SEO for the clinic city/area
* Clean URLs
* Unique title and meta description per page
* One clear H1 per page
* Proper heading hierarchy
* Internal linking between services and contact page
* Image alt text
* Fast loading
* Lazy loading images
* Schema.org structured data
* Sitemap generation
* robots.txt
* 404 page
* Google Search Console readiness
* Google Business Profile link/CTA if available in materials
* Hreflang implementation
* Language-specific metadata
* Language-specific sitemap support
* Canonical URL strategy
* Localized structured data
* Italian-first SEO strategy
* English SEO support

Important: avoid keyword stuffing. Content should sound natural and professional.

## Task Creation Rules

Create multiple small markdown task files inside `tasks/`.

Each task must be small enough for GPT-5.4-mini with low or medium reasoning.

Use this naming style:

```txt
tasks/001-project-setup.md
tasks/002-content-audit.md
tasks/003-layout-shell.md
tasks/004-homepage.md
...
```

Each task file must include:

```md
# Task title

## Goal
Clear result expected from this task.

## Recommended model
Example: GPT-5.4-mini

## Recommended reasoning
low or medium

## Context
Files/folders to inspect first.

## Implementation plan
Step-by-step plan.

## Acceptance criteria
Checklist for completion.

## Verification
Commands/checks to run.

## Notes / constraints
Important limits and warnings.
```

## Model Selection Rules

Use:

* `GPT-5.4-mini low` for simple presentational tasks, content mapping, static pages, simple components.
* `GPT-5.4-mini medium` for Astro setup, SEO/schema implementation, sitemap/robots, form integration, image optimization, responsive layout system.
* Avoid high/extra-high unless the task cannot be split smaller.

## Suggested Task Breakdown

Create tasks similar to:

1. Project setup in `website/`
2. Materials/content audit
3. Internationalization architecture
4. Language routing strategy
5. Localized content structure
6. Design system: colors, typography, spacing, buttons
7. Site information architecture and URL plan
8. Design system: colors, typography, spacing, buttons
9. Layout shell: header, footer, navigation
10. Homepage hero and trust sections
11. Services data model
12. Services overview page
13. Individual service pages
14. About clinic page
15. Team/doctors section
16. Reviews/testimonials section using free/static approach
17. Google Maps and location section
18. Facebook embed section
19. Contact page and free email form strategy
20. SEO metadata system
21. Local business JSON-LD schema
22. Sitemap and robots.txt
23. Image optimization and accessibility pass
24. Performance/mobile polish
25. Final QA checklist and deployment notes for InterServer Windows shared hosting

You may adjust the exact task list after inspecting `materials/`.

## Important Constraints

* Do not use WordPress.
* Do not use any CMS.
* Do not use paid widgets.
* Do not add unnecessary backend complexity.
* Do not expose private emails/API keys in source code.
* Do not invent clinic facts if they are missing from `materials/`.
* If content is missing, create clear placeholders and a `materials/MISSING_CONTENT.md` list.
* Keep the website clean, modern, professional, and trustworthy.
* Prioritize SEO, speed, and easy maintenance.
* Italian must always be treated as the primary language.
* English must never replace Italian as the default experience.
* Do not duplicate content blindly across languages.
* Maintain SEO best practices for multilingual websites.
* All future languages should be addable without major refactoring.

## Final Output Required

After generating all tasks, create:

```txt
tasks/README.md
```

This README must include:

* Recommended task execution order
* Which tasks can run independently
* Which tasks depend on earlier tasks
* Suggested model/reasoning per task
* Final deployment checklist

The generated tasks must clearly identify:

* which tasks are multilingual-specific
* localization dependencies
* SEO dependencies related to multilingual content
* translation content requirements

Create dedicated service pages for each dentistry service instead of a single services page.

Examples:

* Dental Implants
* Orthodontics
* Teeth Whitening
* Oral Surgery
* Dental Hygiene
* Pediatric Dentistry

Generate separate SEO-focused tasks for each service page if materials support the content.
