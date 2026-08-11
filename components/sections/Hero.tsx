"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Play } from "lucide-react";

const DESKTOP_VIDEO = "/videos/Hero_video_fade.mp4";
// Cache-buster so browsers don't keep an older hero file
const MOBILE_VIDEO = "/videos/hero_mobile_cut3.mp4?v=3";

function playVideo(video: HTMLVideoElement | null) {
  if (!video) return;
  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch((error) => {
      console.warn("Video autoplay prevented:", error);
    });
  }
}

export function Hero() {
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);

  // Ensure whichever video is active starts playing
  useEffect(() => {
    const mobile = mobileVideoRef.current;
    const desktop = desktopVideoRef.current;

    const attemptPlay = () => {
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      playVideo(isMobile ? mobile : desktop);
    };

    const onCanPlay = () => attemptPlay();

    if (mobile) {
      if (mobile.readyState >= 3) attemptPlay();
      else mobile.addEventListener("canplay", onCanPlay, { once: true });
    }
    if (desktop) {
      if (desktop.readyState >= 3) attemptPlay();
      else desktop.addEventListener("canplay", onCanPlay, { once: true });
    }

    // Also try immediately (covers already-loaded cases)
    attemptPlay();

    return () => {
      mobile?.removeEventListener("canplay", onCanPlay);
      desktop?.removeEventListener("canplay", onCanPlay);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center pt-16 overflow-hidden bg-background"
    >
      {/* Background Video — separate elements so mobile never loads the desktop file */}
      <div className="absolute inset-0">
        {/* Mobile only */}
        <video
          ref={mobileVideoRef}
          src={MOBILE_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={(e) => {
            e.currentTarget.currentTime = 0;
          }}
          className="absolute inset-0 w-full h-full object-cover object-center object-[center_25%] md:hidden"
          poster="/images/hero-poster.jpg"
        />
        {/* Desktop only */}
        <video
          ref={desktopVideoRef}
          src={DESKTOP_VIDEO}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedMetadata={(e) => {
            e.currentTarget.currentTime = 0;
          }}
          className="absolute inset-0 hidden h-full w-full object-cover object-center md:block"
          poster="/images/hero-poster.jpg"
        />

        {/* Elegant gradient + subtle pattern overlay for clean academic look */}
        <div className="absolute inset-0 bg-[radial-gradient(#00000008_0.8px,transparent_1px)] bg-[length:4px_4px] dark:bg-[radial-gradient(#ffffff0a_0.8px,transparent_1px)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/65 to-background" />
      </div>

      {/* Lab logo is now shown in the main content area below */}

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20 md:pt-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 backdrop-blur px-4 py-1 text-xs tracking-[2px] text-muted-foreground mb-6">
          UC SAN DIEGO • SKAGGS SCHOOL OF PHARMACY
        </div>

        {/* Logo as main headline (bigger + white) */}
        <div className="flex justify-center -mb-[576px] md:-mb-[726px] pointer-events-none">
          <div className="relative h-[850px] w-[3000px] md:h-[900px] md:w-[3720px] max-w-[90vw] -top-48 md:-top-60 -ml-14 md:-ml-28 pointer-events-none">
            <Image
              src="/images/Alle_lab_logo.png"
              alt="Alle et al. Lab"
              fill
              className="object-contain brightness-0 invert drop-shadow-[0_4px_16px_rgba(0,0,0,0.4)] pointer-events-none"
              priority
            />
          </div>
        </div>

        <p className="max-w-[620px] mx-auto text-2xl md:text-3xl tracking-[-1.1px] text-foreground/90 text-center">
          Medicinal chemistry for the next generation of therapeutics
        </p>

        <p className="max-w-md mx-auto text-lg text-muted-foreground text-center mt-6">
          We use modern medicinal chemistry and rational drug design strategies,
          including bioisosteric approaches, to develop novel small-molecule
          therapeutics targeting microtubules for neurodegenerative diseases,
          infectious diseases and cancer, while training and mentoring the next
          generation of medicinal chemists and biomedical researchers.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-20 mt-6">
          <Button size="lg" className="group min-w-[180px]" asChild>
            <a href="#research">
              Explore Our Research{" "}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="min-w-[180px]" asChild>
            <a
              href="mailto:talle@health.ucsd.edu"
              className="flex items-center gap-2"
            >
              <Play className="h-4 w-4" /> Get in Touch
            </a>
          </Button>
        </div>

        <div className="mt-16 text-[10px] tracking-[3px] text-muted-foreground/70 font-mono">
          LA JOLLA, CALIFORNIA
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#research"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-xs tracking-widest text-muted-foreground/70 hover:text-muted-foreground transition"
      >
        SCROLL TO BEGIN
        <div className="h-px w-8 bg-current mt-2" />
      </a>
    </section>
  );
}