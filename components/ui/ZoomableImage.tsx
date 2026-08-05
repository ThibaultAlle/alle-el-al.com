"use client";

import { useCallback, useEffect, useId, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { Minus, Plus, X, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  aspectClassName?: string;
  sizes?: string;
  priority?: boolean;
  /** Skip Next.js image optimization (use for files that return "Invalid source image") */
  unoptimized?: boolean;
}

const ZOOM_LEVELS = [1, 1.5, 2, 3] as const;

export function ZoomableImage({
  src,
  alt,
  className,
  imageClassName = "object-contain",
  aspectClassName = "aspect-video",
  sizes = "(max-width: 768px) 100vw, 896px",
  priority = false,
  unoptimized = false,
}: ZoomableImageProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [zoomIndex, setZoomIndex] = useState(0);
  const titleId = useId();

  const zoom = ZOOM_LEVELS[zoomIndex];

  useEffect(() => {
    setMounted(true);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    setZoomIndex(0);
  }, []);

  const zoomIn = useCallback(() => {
    setZoomIndex((i) => Math.min(i + 1, ZOOM_LEVELS.length - 1));
  }, []);

  const zoomOut = useCallback(() => {
    setZoomIndex((i) => Math.max(i - 1, 0));
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "+" || e.key === "=") zoomIn();
      if (e.key === "-") zoomOut();
    };

    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
    };
  }, [open, close, zoomIn, zoomOut]);

  const lightbox =
    open && mounted
      ? createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="fixed inset-0 z-[200] flex flex-col bg-black/92 supports-[backdrop-filter]:bg-black/85 backdrop-blur-sm"
          >
            <span id={titleId} className="sr-only">
              {alt}
            </span>

            <div className="flex shrink-0 items-center justify-between gap-2 px-2 py-2 sm:px-4 sm:py-3">
              <p className="text-xs sm:text-sm text-white/70 truncate min-w-0 flex-1 pr-2">
                {alt}
              </p>

              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <button
                  type="button"
                  onClick={zoomOut}
                  disabled={zoomIndex === 0}
                  className="inline-flex h-11 w-11 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 active:bg-white/25 transition-colors touch-manipulation disabled:opacity-35 disabled:pointer-events-none"
                  aria-label="Zoom out"
                >
                  <Minus className="h-5 w-5" />
                </button>
                <span className="min-w-[2.75rem] text-center text-xs sm:text-sm text-white/80 tabular-nums">
                  {Math.round(zoom * 100)}%
                </span>
                <button
                  type="button"
                  onClick={zoomIn}
                  disabled={zoomIndex === ZOOM_LEVELS.length - 1}
                  className="inline-flex h-11 w-11 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 active:bg-white/25 transition-colors touch-manipulation disabled:opacity-35 disabled:pointer-events-none"
                  aria-label="Zoom in"
                >
                  <Plus className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={close}
                  className="ml-0.5 inline-flex h-11 w-11 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 active:bg-white/25 transition-colors touch-manipulation"
                  aria-label="Close full-size image"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div
              className="flex-1 min-h-0 overflow-auto overscroll-contain"
              onClick={close}
            >
              <div
                className={cn(
                  "min-h-full flex p-2 sm:p-4",
                  zoom === 1 ? "items-center justify-center" : "items-start justify-start"
                )}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={alt}
                  className={cn(
                    "select-none rounded-sm shadow-2xl h-auto transition-[width] duration-150",
                    zoom === 1
                      ? "w-auto max-w-[min(100%,calc(100vw-1rem))] max-h-[calc(100dvh-5.5rem)]"
                      : "max-w-none max-h-none"
                  )}
                  style={
                    zoom > 1
                      ? { width: `${Math.round(zoom * 90)}vw` }
                      : undefined
                  }
                  onClick={(e) => e.stopPropagation()}
                  draggable={false}
                />
              </div>
            </div>

            <p className="shrink-0 text-center text-[11px] sm:text-xs text-white/50 pb-3 pt-1 px-4">
              {zoom > 1
                ? "Scroll or drag to pan · Esc or tap outside to close"
                : "Use + to zoom · Esc or tap outside to close"}
            </p>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "relative w-full overflow-hidden cursor-zoom-in group text-left",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          aspectClassName,
          className
        )}
        aria-label={`View full size: ${alt}`}
      >
        {unoptimized ? (
          // Native img for files that break Next.js optimizer
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            className={cn("absolute inset-0 w-full h-full", imageClassName)}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className={cn(imageClassName)}
          />
        )}
        <span
          className={cn(
            "pointer-events-none absolute bottom-2 right-2 sm:bottom-3 sm:right-3",
            "inline-flex items-center gap-1.5 rounded-full",
            "bg-black/55 text-white backdrop-blur-sm",
            "px-2.5 py-1.5 text-[11px] sm:text-xs font-medium",
            "opacity-90 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-visible:opacity-100",
            "transition-opacity duration-200"
          )}
        >
          <ZoomIn className="h-3.5 w-3.5 shrink-0" aria-hidden />
          <span className="hidden sm:inline">Enlarge</span>
        </span>
      </button>
      {lightbox}
    </>
  );
}