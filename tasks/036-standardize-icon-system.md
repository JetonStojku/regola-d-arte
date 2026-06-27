# Task: Standardize Icon System

## Goal

Review the entire project and implement a consistent, modern, and maintainable icon system.

The objective is to ensure every icon used throughout the website follows a single design language while keeping the bundle size small and the implementation simple.

## Recommended Model

GPT-5.4-mini

## Recommended Reasoning

Medium

---

## Context

Inspect the existing project structure before making any changes.

Review:

* Current dependencies
* Existing icon usage
* Components
* Pages
* Layouts
* Navigation
* Footer
* Contact page
* Service pages
* CTA components
* Cards
* Social links
* Any custom SVGs

---

## Requirements

Use a **single icon solution** for the entire project.

Preferred solution:

* `@iconify-icon/astro`

Reasons:

* Supports Lucide icons
* Supports Simple Icons
* Tree-shakeable
* Modern
* Lightweight
* Free
* Large icon ecosystem
* Excellent Astro compatibility

Avoid mixing multiple icon libraries unless technically required.

---

## Icon Guidelines

### UI Icons

Use modern Lucide icons for interface elements such as:

* Phone
* Email
* Address
* Calendar
* Menu
* Close
* Arrow
* Check
* Clock
* Navigation
* Contact
* Team
* Services
* Accessibility
* Performance indicators

### Social Icons

Use official Simple Icons for:

* Facebook
* Instagram
* WhatsApp
* YouTube
* TikTok
* LinkedIn
* Google Maps
* Any additional social platform used by the clinic

Do not use unofficial brand icons.

---

## Design Rules

Icons should:

* Use a consistent visual style.
* Be appropriately sized.
* Respect spacing rules.
* Align correctly with surrounding text.
* Follow the design system.
* Be responsive.
* Support dark/light themes if implemented.
* Be accessible.
* Never appear blurry or stretched.

---

## Implementation Plan

1. Inspect the project for every existing icon.
2. Select the appropriate icon for each location.
3. Replace inconsistent icons.
4. Remove duplicate or unused icon libraries.
5. Create reusable icon components if beneficial.
6. Ensure icons inherit color correctly from the design system.
7. Verify responsive rendering.
8. Verify accessibility (`aria-hidden`, labels where appropriate).
9. Keep the implementation simple and maintainable.

---

## Suggested Icon Mapping

Use icons appropriate to their context.

Examples:

| Section         | Suggested Icon        |
| --------------- | --------------------- |
| Address         | Map Pin               |
| Phone           | Phone                 |
| Email           | Mail                  |
| Opening Hours   | Clock                 |
| Contact Form    | Message               |
| Appointment CTA | Calendar Check        |
| Team            | Users                 |
| Reviews         | Star                  |
| Services        | Badge Plus / Sparkles |
| Navigation      | Menu                  |
| Search          | Search                |
| External Link   | Arrow Up Right        |
| Back            | Arrow Left            |
| Forward         | Arrow Right           |
| Success         | Check Circle          |
| Warning         | Triangle Alert        |
| Error           | Circle Alert          |

These are recommendations. Choose the icon that best matches the UI context.

---

## Acceptance Criteria

* A single icon system is used across the project.
* UI icons are visually consistent.
* Official brand icons are used for social networks.
* No duplicate icon libraries remain.
* Icons are responsive.
* Icons are accessible.
* Bundle size impact is minimal.
* No unused icon imports remain.

---

## Verification

* Run the development server.
* Verify icons on desktop.
* Verify icons on mobile.
* Check alignment and spacing.
* Confirm no missing icons.
* Confirm the project builds successfully.
* Confirm no unused dependency warnings.

---

## Notes

* Prefer existing icons over creating custom SVGs unless the project requires a unique brand-specific icon.
* Do not introduce paid icon libraries.
* Keep the solution future-proof so additional icons can be added consistently.
* If an existing icon is more appropriate than the suggested mapping, prefer the better UX choice while maintaining visual consistency.
