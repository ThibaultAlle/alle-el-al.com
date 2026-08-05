# Team Photos

This folder is for the photos of current lab members.

## How to Add Photos

1. Place the photo in this folder (`public/team/`).
2. Update the `"image"` field in `data/team.json` with the correct path.

### Example in team.json:

```json
{
  "id": "pi",
  "name": "Dr. Thibault Alle",
  ...
  "image": "/team/thibault-alle.jpg"   // ← Your photo goes here
}
```

## Recommended Image Guidelines

- **Size**: 800px – 1200px on the longest side
- **Format**: `.jpg` or `.png` (`.webp` also works)
- **Aspect Ratio**: The site currently uses `aspect-[4/3]` for team photos.
- **File size**: Keep under 400–500KB when possible.
- **Naming**: Use the slug style, e.g. `thibault-alle.jpg`, `jordan-kim.jpg`

## Current Image Paths (from data/team.json)

- Principal Investigator: `/team/thibault-alle.jpg`
- Postdocs & Students: Update the `"image"` field for each person.

## Placeholder Behavior

If no image is found, the site will show a nice placeholder with the person’s initials.

---

Need help generating placeholder images or organizing the photos? Let me know!
