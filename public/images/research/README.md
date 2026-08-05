# Research Area Images

This folder is used for illustration images for the Research Areas section.

## Folder Structure

```
public/images/research/
├── README.md
├── microtubule-modulating-triazolopyrimidines.jpg
├── bioisosteric-replacement.jpg
├── covalent-chemical-probes.jpg
└── ...
```

## How to Add Images

1. Add your image file to this folder.
2. Update the corresponding research area in `data/research-areas.ts` and add the `image` field:

```ts
{
  slug: "microtubule-modulating-triazolopyrimidines",
  title: "...",
  shortDescription: "...",
  image: "/images/research/microtubule-modulating-triazolopyrimidines.jpg",   // ← Add this line
  // ...
}
```

## Recommended Image Guidelines

- **Aspect Ratio**: 16:9 or 21:9 (wide) works best
- **Recommended Width**: 1200px – 1600px
- **Format**: `.jpg`, `.png`, or `.webp`
- **File Size**: Keep under 800KB when possible for fast loading
- **Style**: Clean, professional, scientific illustrations or high-quality photos

## Naming Convention (Recommended)

Use the same slug as the research area for consistency:

- `microtubule-modulating-triazolopyrimidines.jpg`
- `bioisosteric-replacement.jpg`
- `structure-based-drug-design.jpg`

## Notes

- Images are **optional**. If no image is provided, the card will display using only the icon.
- The website uses Next.js `<Image>` for automatic optimization.
- You can use the same image on both the homepage card and the individual research page.

---

Need help choosing good images or generating placeholder illustrations? Let me know!
