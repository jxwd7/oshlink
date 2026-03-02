# Oshlink Landing Page

Premium AI Automation Agency landing page for **Oshlink**. Built with Vite + Vanilla JS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
```

Output goes to the `dist/` folder. Preview the production build:

```bash
npm run preview
```

## Deployment

This is a static site — deploy the `dist/` folder to any of the following:

| Platform | How |
|----------|-----|
| **Vercel** | `npx vercel` or drag-and-drop `dist/` on vercel.com |
| **Netlify** | Drag-and-drop `dist/` on netlify.com/drop |
| **Cloudflare Pages** | Connect your repo, set build command `npm run build`, output dir `dist` |

## Project Structure

```
oshlink/
├── index.html      # Entry point + meta tags + OG tags
├── main.js         # All sections & interactive logic
├── style.css       # Design system, tokens, all component styles
├── vite.config.js  # Vite config
└── package.json
```

## Sections

1. **Navbar** – Sticky glassmorphism nav
2. **Hero** – Animated SVG background, pills, dual CTA
3. **Logo Ticker** – Infinite scroll strip
4. **How It Works** – 3-step process cards
5. **Services** – 6 flip-cards (hover desktop / tap mobile)
6. **Social Proof** – 3 client result cards with metric callouts
7. **ROI Calculator** – 3 sliders updating 3 result values reactively
8. **Audit Form** – 2-step form with step indicators
9. **FAQ** – Accordion (one open at a time)
10. **Footer** – Newsletter, 3-column links, social icons
11. **Floating Nav** – Mobile-only glassmorphism pill bar

## Accessibility

- All interactive elements have visible `:focus-visible` states
- `prefers-reduced-motion` disables all animations
- Semantic HTML5 throughout with `aria-*` attributes
- FAQ and form use `aria-expanded` / `aria-controls`
