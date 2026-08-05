# Images Directory

This folder contains all static images for the Alle et al. Lab website.

## Recommended Structure

```
public/images/
├── team/
│   ├── alex-alle.jpg           # PI (main photo, high quality)
│   ├── jordan-kim.jpg
│   ├── elena-vargas.jpg
│   ├── priya-patel.jpg
│   ├── marcus-chen.jpg
│   ├── aisha-okoro.jpg
│   ├── sofia-ramirez.jpg
│   ├── liam-thompson.jpg
│   ├── mei-lin.jpg
│   ├── alumni-samuel-okoro.jpg
│   ├── alumni-rachel-sato.jpg
│   ├── alumni-david-park.jpg
│   ├── alumni-nadia-elsayed.jpg
│   └── alumni-kevin-morales.jpg
│
├── hero-poster.jpg             # 16:9 or 21:9 still for video fallback (1920px+ wide)
├── og-image.png                # 1200×630 — social sharing card
└── favicon.ico                 # (optional, can also live in /public)
```

## Image Guidelines

### Team & Alumni Photos
- **Style**: Clean, professional academic headshots or environmental portraits.
- **Lighting**: Soft, even, preferably natural or studio.
- **Background**: Simple, slightly blurred lab or neutral (white/light gray preferred for consistency).
- **Cropping**: 4:3 or 3:2 ratio works well with current card design.
- **File format**: JPEG at 85–90% quality. Target 800–1200px on the long edge.
- **Naming**: Use the exact filenames referenced in `data/team.json` and `data/alumni.json`.

### Hero Background
- Provide a high-quality still (`hero-poster.jpg`) as a fallback for the video.
- When the real lab video is ready, place it in `public/videos/lab-hero.mp4`.

### Social / OG Image
- 1200 × 630 px
- Should include lab name + UCSD branding + subtle visual (molecule, microscope, or lab bench).

## Current State

Until real photos are added, the site uses elegant gradient + initials placeholders in the team cards. These look professional in both light and dark mode.

## How to Replace Placeholders

1. Drop your real `.jpg` files into `public/images/team/` using the exact names above.
2. The components will automatically display them (using Next.js `<Image>`).

No code changes required when you add real photos.

## Lab Logo 3 (Hero Section)

**Status:** Active — using your `Alle_lab_logo.png`

The logo is layered directly over the background video (`z-20`) with a strong drop shadow for readability.

**Current file:** `public/images/Alle_lab_logo.png`

To switch to an SVG version later (for perfect scaling), just update the `src` in `components/sections/Hero.tsx`.

---

Maintained by the Alle Lab • UC San Diego
