"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface HeroScrollAnimationProps {
  totalFrames?: number;
}

export default function HeroScrollAnimation({ totalFrames = 50 }: HeroScrollAnimationProps) {
  const containerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const targetProgressRef = useRef<number>(0);
  const currentProgressRef = useRef<number>(0);
  const lastFrameRef = useRef<number>(-1);
  const animFrameIdRef = useRef<number | null>(null);

  // Preload frames (transparent WebP with JPG fallback)
  useEffect(() => {
    let mounted = true;
    const images: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const padNum = String(i).padStart(3, "0");

      img.src = `/frames/trans-frame-${padNum}.webp`;

      img.onload = () => {
        if (!mounted) return;
        loaded++;
        setLoadedCount(loaded);
        if (loaded >= Math.floor(totalFrames * 0.9)) setIsLoaded(true);
      };

      img.onerror = () => {
        img.onerror = () => {
          if (!mounted) return;
          loaded++;
          setLoadedCount(loaded);
          if (loaded >= Math.floor(totalFrames * 0.8)) setIsLoaded(true);
        };
        img.src = `/frames/ezgif-frame-${padNum}.jpg`;
      };

      images.push(img);
    }

    imagesRef.current = images;

    return () => {
      mounted = false;
    };
  }, [totalFrames]);

  // Draw a frame, contained inside the canvas box (canvas is now its own layout column)
  const drawFrame = useCallback((frameIdx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[frameIdx];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) return;

    const w = Math.floor(rect.width * dpr);
    const h = Math.floor(rect.height * dpr);
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    ctx.clearRect(0, 0, rect.width, rect.height);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const scale = Math.min(rect.width / img.naturalWidth, rect.height / img.naturalHeight);
    const drawW = img.naturalWidth * scale;
    const drawH = img.naturalHeight * scale;
    const drawX = (rect.width - drawW) / 2;
    const drawY = (rect.height - drawH) / 2;

    ctx.drawImage(img, Math.round(drawX), Math.round(drawY), Math.round(drawW), Math.round(drawH));
    ctx.restore();
  }, []);

  // Smooth lerp loop. Only draws when the frame actually changes,
  // and no React state is updated per tick (avoids 60 re-renders/sec).
  useEffect(() => {
    let isRunning = true;

    const tick = () => {
      if (!isRunning) return;

      const diff = targetProgressRef.current - currentProgressRef.current;
      if (Math.abs(diff) > 0.0001) {
        currentProgressRef.current += diff * 0.14;
      } else {
        currentProgressRef.current = targetProgressRef.current;
      }

      const p = Math.max(0, Math.min(1, currentProgressRef.current));
      const frame = Math.min(totalFrames - 1, Math.floor(p * (totalFrames - 1)));

      if (frame !== lastFrameRef.current) {
        lastFrameRef.current = frame;
        drawFrame(frame);
      }

      animFrameIdRef.current = requestAnimationFrame(tick);
    };

    animFrameIdRef.current = requestAnimationFrame(tick);

    return () => {
      isRunning = false;
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [drawFrame, totalFrames]);

  // Scroll progress relative to the tall container
  useEffect(() => {
    const updateProgress = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollableHeight = rect.height - window.innerHeight;
      if (scrollableHeight <= 0) return;

      targetProgressRef.current = Math.max(0, Math.min(1, -rect.top / scrollableHeight));
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  // Redraw whenever the canvas box changes size (breakpoint change, rotation,
  // mobile browser toolbar showing/hiding, etc.)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const redraw = () => {
      const frame = Math.min(
        totalFrames - 1,
        Math.floor(currentProgressRef.current * (totalFrames - 1))
      );
      lastFrameRef.current = frame;
      drawFrame(frame);
    };

    const observer = new ResizeObserver(redraw);
    observer.observe(canvas);
    return () => observer.disconnect();
  }, [drawFrame, totalFrames]);

  // Draw first frame as soon as loading finishes
  useEffect(() => {
    if (isLoaded) {
      lastFrameRef.current = -1;
      drawFrame(0);
    }
  }, [isLoaded, drawFrame]);

  const percent = Math.round((loadedCount / totalFrames) * 100);

  return (
    <section
      id="top"
      ref={containerRef}
      // Shorter scroll track on phones so the animation doesn't feel endless
      className="w-full h-[240vh] md:h-[320vh] bg-gradient-to-b from-[#9d8766]/20 to-[#faf9f6]"
    >
      {/* Pinned sticky stage. 100svh/100dvh avoids mobile address-bar jumps. */}
      <div className="sticky top-0 w-full h-screen md:pt-0 pt-20 overflow-hidden">
        {/* Loading overlay */}
        <div
          className={`absolute inset-0 z-30 bg-[#faf9f6] flex flex-col items-center justify-center transition-opacity duration-700 pointer-events-none ${
            isLoaded ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="w-full max-w-xs px-6 text-center space-y-4">
            <span className="font-serif text-2xl sm:text-3xl font-normal tracking-tight text-[#171513]">
              KRM Interior
            </span>
            <div className="w-full bg-[#eae4d7] h-0.5 rounded-full overflow-hidden">
              <div
                className="bg-[#9d8766] h-full transition-all duration-200 ease-out"
                style={{ width: `${percent}%` }}
              />
            </div>
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#7a7266]">
              Loading Spatial Experience &bull; {percent}%
            </p>
          </div>
        </div>

        {/*
          Layout:
          - mobile: stacked column. Text on top (auto height), canvas fills the rest.
          - md+: two columns side by side, text left, canvas right.
        */}
        <div className="mx-auto flex h-full w-full max-w-7xl flex-col md:flex-row md:items-center">
          {/* Text column */}
          <div className="flex shrink-0 flex-col md:items-start items-center justify-center gap-4 px-5 pt-20 pb-2 sm:px-8 sm:gap-4 md:w-1/2 md:gap-5 md:py-0 md:pr-6 lg:pr-10">
            <h1 className="font-serif text-[2rem] leading-[1.1] sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight text-[#171513] text-balance">
              Spaces Designed <br className="hidden sm:block" />
              <span className="italic font-normal text-[#8c795b]">Around You.</span>
            </h1>

            {/* Description is trimmed on very small screens to leave room for the animation */}
            <p className=" text-base md:text-start text-center sm:text-base text-[#5c5447] max-w-lg leading-relaxed font-normal">
              Thoughtfully designed interiors that bring together architecture,
              functionality and refined aesthetics. Specializing in bespoke residential
              and commercial spaces across Mumbai.
            </p>

            <div className="flex flex-row flex-wrap items-center justify-center gap-2.5 pt-1 sm:gap-4 md:flex-col md:items-start md:pt-2">
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 px-5 py-3 sm:px-7 sm:py-3.5 rounded-full bg-[#171513] text-[#faf9f6] hover:bg-[#38332b] text-[11px] sm:text-xs uppercase tracking-widest font-medium transition-all shadow-md hover:shadow-lg"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#d6caa7]" />
              </Link>

              <Link
                href="#showcase"
                className="inline-flex items-center px-5 py-3 sm:px-7 sm:py-3.5 rounded-full bg-[#f4f1ea]/90 hover:bg-[#eae4d7] text-[#2c2822] text-[11px] sm:text-xs uppercase tracking-widest font-medium transition-all border border-[#ded5c2]"
              >
                <span>Explore Our Work</span>
              </Link>
            </div>
          </div>

          {/* Canvas column. min-h-0 lets it shrink inside the flex column. */}
          <div className="relative min-h-0 w-full flex-1 md:h-full md:w-1/2 md:flex-none">
            <canvas
              ref={canvasRef}
              className="absolute inset-0 h-full w-full pointer-events-none"
              style={{ imageRendering: "-webkit-optimize-contrast" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}