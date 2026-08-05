# Hero Background Video

This folder is for the background video used in the Hero section of the homepage.

## Recommended Location

Place your video here:

```
public/videos/lab-hero.mp4
```

## Video Requirements (Important)

For best results on the website:

- **Duration**: 8–15 seconds (looping)
- **Format**: MP4 (H.264 codec recommended for best compatibility)
- **Resolution**: 1920x1080 (Full HD) or 2560x1440 is fine
- **Frame rate**: 24–30 fps
- **File size**: Ideally under 4–6 MB (compress if needed)
- **Audio**: Must be **muted** (no sound)
- **Style**: Tasteful, professional, cinematic lab footage

### Recommended Content Ideas
- Slow panning shots of the lab
- Fume hoods, crystallography, synthetic chemistry work
- Microscopy or analytical instruments
- Subtle movement (avoid anything too busy or distracting)

## How to Use the Video

1. Name your file exactly: `lab-hero.mp4`
2. Open `components/sections/Hero.tsx`
3. Replace the current placeholder div with an actual `<video>` element.

Example code to use:

```tsx
<video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover opacity-60"
  poster="/images/hero-poster.jpg"
>
  <source src="/videos/lab-hero.mp4" type="video/mp4" />
</video>
```

## Poster Image (Strongly Recommended)

Add a high-quality still image as a fallback:

- Location: `public/images/hero-poster.jpg`
- Size: Same resolution as the video
- This shows while the video loads or if the video fails

## Current Status

As of now, the Hero section still uses a placeholder. You will need to update the code in `Hero.tsx` to activate the real video.

## Tips

- Use tools like **HandBrake** or **FFmpeg** to compress the video without losing too much quality.
- Test the video on both desktop and mobile.
- Make sure the video is not too bright — the current design has dark gradient overlays on top.

---

Need help with the actual code change in Hero.tsx? Just say the word and I can update it for you.
