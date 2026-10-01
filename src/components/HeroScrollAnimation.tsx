"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, MousePointer } from "lucide-react";

interface HeroScrollAnimationProps {
  totalFrames?: number;
}

export default function HeroScrollAnimation({ totalFrames = 50 }: HeroScrollAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const imagesRef = useRef<HTMLImageElement[]>([]);
  const targetProgressRef = useRef<number>(0);
  const currentProgressRef = useRef<number>(0);
  const animFrameIdRef = useRef<number | null>(null);

  // Preload all 50 frames (transparent WebP with fallback)
  useEffect(() => {
    let mounted = true;
    const images: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const padNum = String(i).padStart(3, "0");
      
      // Load transparent WebP frame
      img.src = `/frames/trans-frame-${padNum}.webp`;

      img.onload = () => {
        if (!mounted) return;
        loaded++;
        setLoadedCount(loaded);
        if (loaded >= Math.floor(totalFrames * 0.9)) {
          setIsLoaded(true);
        }
      };

      img.onerror = () => {
        // Fallback to original if transparent is still processing
        img.onerror = () => {
          if (!mounted) return;
          loaded++;
          setLoadedCount(loaded);
          if (loaded >= Math.floor(totalFrames * 0.8)) {
            setIsLoaded(true);
          }
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

  // Draw current frame to canvas with crisp, transparent rendering
  const drawFrame = useCallback((frameIdx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = imagesRef.current[frameIdx];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();

    if (canvas.width !== Math.floor(rect.width * dpr) || canvas.height !== Math.floor(rect.height * dpr)) {
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
    }

    ctx.save();
    ctx.scale(dpr, dpr);
    // Clear canvas to ensure 100% transparent background
    ctx.clearRect(0, 0, rect.width, rect.height);

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    const imgW = img.naturalWidth;
    const imgH = img.naturalHeight;
    const containerW = rect.width;
    const containerH = rect.height;

    // Responsive contain scaling with optimal padding
    const isMobile = containerW < 768;
    const scale = Math.min(containerW / imgW, containerH / imgH) * (isMobile ? 1.05 : 0.95);
    const drawW = imgW * scale;
    const drawH = imgH * scale;

    // On desktop, shift canvas center slightly to the right to balance the left-aligned editorial typography
    const offsetX = isMobile ? 0 : containerW * 0.08;
    const drawX = (containerW - drawW) / 2 + offsetX;
    const drawY = (containerH - drawH) / 2;

    ctx.drawImage(img, Math.round(drawX), Math.round(drawY), Math.round(drawW), Math.round(drawH));

    ctx.restore();
  }, []);

  // Smooth lerp loop with requestAnimationFrame
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
      const targetFrame = Math.min(
        totalFrames - 1,
        Math.floor(p * (totalFrames - 1))
      );

      setScrollProgress(p);
      drawFrame(targetFrame);

      animFrameIdRef.current = requestAnimationFrame(tick);
    };

    animFrameIdRef.current = requestAnimationFrame(tick);

    return () => {
      isRunning = false;
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [drawFrame, totalFrames]);

  // Window scroll listener calculating progress relative to sticky container
  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollableHeight = rect.height - window.innerHeight;

      if (scrollableHeight <= 0) return;

      const top = -rect.top;
      const progress = Math.max(0, Math.min(1, top / scrollableHeight));
      targetProgressRef.current = progress;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Re-draw on resize
  useEffect(() => {
    const handleResize = () => {
      const targetFrame = Math.min(
        totalFrames - 1,
        Math.floor(currentProgressRef.current * (totalFrames - 1))
      );
      drawFrame(targetFrame);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [drawFrame, totalFrames]);

  // Milestones
  const isPhase1 = scrollProgress < 0.28;
  const isPhase2 = scrollProgress >= 0.28 && scrollProgress < 0.64;
  const isPhase3 = scrollProgress >= 0.64;

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative w-full h-[320vh] bg-[#faf9f6]"
    >
      {/* Pinned Sticky Section */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-between">
        {/* Architectural Ambient Background Atmosphere */}
        <div className="absolute inset-0 pointer-events-none opacity-60 bg-[radial-gradient(ellipse_at_65%_50%,#f0ebe0_0%,#faf9f6_70%)]" />
        <div className="absolute inset-0 pointer-events-none grid-lines opacity-20" />

        {/* Loading Screen Overlay */}
        <div
          className={`absolute inset-0 z-30 bg-[#faf9f6] flex flex-col items-center justify-center transition-opacity duration-700 pointer-events-none ${
            isLoaded ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="w-full max-w-xs px-6 text-center space-y-4">
            <span className="font-serif text-3xl font-normal tracking-tight text-[#171513]">
              KRM Interior
            </span>
            <div className="w-full bg-[#eae4d7] h-0.5 rounded-full overflow-hidden">
              <div
                className="bg-[#9d8766] h-full transition-all duration-200 ease-out"
                style={{ width: `${Math.round((loadedCount / totalFrames) * 100)}%` }}
              />
            </div>
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#7a7266]">
              Loading Spatial Experience &bull; {Math.round((loadedCount / totalFrames) * 100)}%
            </p>
          </div>
        </div>

        {/* 3D Frame Sequence Canvas Stage (100% Transparent, No Box Border, No Shadow Edge) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="relative w-full h-full max-w-7xl mx-auto flex items-center justify-center">
            {/* Subtle diffused floor shadow reflection beneath model */}
            <div className="absolute bottom-[20%] right-[20%] sm:right-[30%] w-72 sm:w-96 h-12 bg-black/5 rounded-full filter blur-2xl transform scale-y-50 pointer-events-none" />
            
            <canvas
              ref={canvasRef}
              className="w-full h-full object-contain pointer-events-none"
              style={{
                imageRendering: "-webkit-optimize-contrast",
              }}
            />
          </div>
        </div>

        {/* Editorial Story Typography Layer (Seamless Integration with Floating 3D Model) */}
        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 flex-1 flex flex-col justify-center pointer-events-none">
          {/* Phase 1: 0% to 28% -> Hero Initial State */}
          <div
            className={`transition-all duration-700 transform ${
              isPhase1
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-8 pointer-events-none absolute"
            }`}
          >
            <div className="max-w-xl space-y-5">

              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#171513] leading-[1.08] text-balance">
                Spaces Designed <br />
                <span className="italic font-normal text-[#8c795b]">Around You.</span>
              </h1>

              <p className="text-sm md:text-base text-[#5c5447] max-w-lg leading-relaxed font-normal">
                Thoughtfully designed interiors that bring together architecture,
                functionality and refined aesthetics. Specializing in bespoke residential
                and commercial spaces across Mumbai.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center space-x-2.5 px-7 py-3.5 rounded-full bg-[#171513] text-[#faf9f6] hover:bg-[#38332b] text-xs uppercase tracking-widest font-medium transition-all shadow-md hover:shadow-lg group"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#d6caa7]" />
                </Link>

                <Link
                  href="#showcase"
                  className="inline-flex items-center space-x-2 px-7 py-3.5 rounded-full bg-[#f4f1ea]/90 hover:bg-[#eae4d7] text-[#2c2822] text-xs uppercase tracking-widest font-medium transition-all border border-[#ded5c2]"
                >
                  <span>Explore Our Work</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
