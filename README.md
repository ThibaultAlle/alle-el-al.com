# Alle et al. Lab Website

Modern, clean, and professional academic website for the medicinal chemistry research lab at UC San Diego Skaggs School of Pharmacy.

**Built with:**
- Next.js 15 (App Router) + React 19
- TypeScript
- Tailwind CSS + next-themes
- shadcn/ui-inspired components (no heavy Radix dependency)
- Fully accessible & responsive (light + dark modes)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
  layout.tsx          # Root layout + metadata + Navbar/Footer
  page.tsx            # Composed sections
  globals.css         # Design system, dark mode tokens, typography

components/
  ui/                 # Reusable primitives (Button, etc.)
  sections/           # Hero, ResearchAreas, News, Publications, Team
  Navbar.tsx
  Footer.tsx

data/
  publications.json   # Easy to edit list of papers
  team.json           # Current team (9 members)
  alumni.json         # Alumni / former members

lib/utils.ts          # cn() helper (clsx + tailwind-merge)
```

## Updating Content (No code changes needed)

**Publications:** Edit `data/publications.json`

**Team (Current members):** Edit `data/team.json` — currently 9 people

**Alumni:** Edit `data/alumni.json` — former members appear in a dedicated Alumni section

Each entry is self-documenting. New items will appear automatically.

### Hosting PDFs Locally

You can upload actual PDF files of your papers:

1. Place PDFs in the `public/publications/` folder.
2. Add a `pdf` field in `data/publications.json`:

   ```json
   "pdf": "/publications/2025-nature-chem-bio-patel.pdf"
   ```

When a `pdf` field is present, the website automatically shows a **"Download PDF"** button.

See `public/publications/README.md` for naming conventions and best practices.

## Theme (Light / Dark)

The site supports both light and dark modes with a toggle in the navbar (top right on desktop, inside mobile menu).

- Default: Dark (professional academic aesthetic)
- Users can switch freely; preference is saved in localStorage
- System preference is respected when "System" is chosen

The color system lives in `app/globals.css` under `:root` and `.dark`.

## Design Notes

- Dark mode is the default (`.dark` class on `<html>`)
- Very generous whitespace and refined typography
- Subtle tasteful animations (no heavy framer-motion usage yet)
- All sections use semantic IDs for smooth navbar scrolling
- Publications have real-time client-side search + filters

## Video Background

The hero contains a high-quality placeholder. Replace with actual lab video:

1. Add `public/videos/lab-hero.mp4` (muted, loop, 8–15 seconds recommended)
2. Update the `<video>` element in `components/sections/Hero.tsx` (currently commented)

## Deployment

Vercel (recommended):
```bash
npm run build
```

Push to GitHub and import into Vercel. Environment works out of the box.

## Accessibility & Performance

- Semantic HTML + ARIA where appropriate
- Keyboard accessible navigation
- Reduced motion respected (via Tailwind)
- Fast by default (no heavy client bundles except search)

## Future Enhancements (optional)

- Add framer-motion for entrance animations on sections
- Real image optimization with `next/image`
- Add a simple contact form (Resend + React Hook Form)
- RSS feed or news CMS integration
- Full publications page with BibTeX export

---

Maintained by the Alle Lab. University of California, San Diego.
