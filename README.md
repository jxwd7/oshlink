# OSHLink

**Conversion-focused website for an AI automation agency.**

OSHLink is a Vite-powered static site that positions an AI automation agency around business outcomes: client acquisition, workflow automation, voice infrastructure, CRM sync, document processing, customer support, and measurable time savings.

## Product Idea

The site is built as a client-facing acquisition surface for AI automation services. Instead of presenting AI as abstract technology, it guides visitors through:

- What automation can remove from daily operations.
- How an agency would audit and prioritize workflows.
- What services are available.
- What return on time savings could look like.
- How to request an automation audit.

## Features

| Section | Purpose |
| --- | --- |
| Hero | Establishes OSHLink as an AI automation agency |
| Logo ticker | Adds market-style credibility and motion |
| How it works | Explains the audit-to-implementation process |
| Services | Covers lead generation, voice agents, workflow automation, CRM/data sync, support, and documents |
| Social proof | Presents credibility signals and testimonial-style copy |
| ROI calculator | Estimates savings from team size, hours, and hourly rate |
| Audit form | Two-step lead capture form with validation and success state |
| FAQ | Handles common objections through an accordion |
| Mobile nav | Adds quick access for smaller screens |

## Tech Stack

- Vite
- Vanilla JavaScript
- CSS with responsive layout, motion, and reduced-motion handling

## Repository Map

```text
index.html        Site entry
src/main.js       Section rendering, form behavior, ROI calculator, FAQ logic
src/styles.css    Visual system, layout, responsive behavior, motion
package.json      Vite scripts
```

## Run Locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Brand Direction

The site is intentionally direct and operational. It avoids vague AI language and pushes toward audit, implementation, and measurable savings. This makes it useful as a reference for AI automation positioning, landing-page conversion, and business-facing product copy.

## Next Steps

- Connect the audit form to a CRM or email workflow.
- Add service-specific landing pages.
- Add real client case studies and before/after workflow examples.
- Add analytics events for calculator usage and form drop-off.

## Maintainer

Built by [Jawwad Ahmed](https://jawwad.xyz), focused on AI automation, agent workflows, and business adoption.
