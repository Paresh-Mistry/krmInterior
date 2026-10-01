import React from "react";
import { PhilosophyPillar } from "@/types";

interface ExtendedPhilosophyPillar extends PhilosophyPillar {
  image: string;
  className: string;
}

export default function PhilosophySection() {
const pillars: ExtendedPhilosophyPillar[] = [
  {
    title: "SPACE",
    subtitle: "Volumetric Proportion & Flow",
    detail:
      "Optimized axial alignments, uncluttered visual horizons, and deliberate breathing room.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80",

    // Masonry positioning
    className: "sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3",
  },

  {
    title: "MATERIAL",
    subtitle: "Tactile Honesty & Authentic Textures",
    detail:
      "Natural stone veining, grain alignment, non-toxic acoustic textiles, and honed unlacquered metals.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",

    className: "sm:col-span-5 md:col-span-4",
  },

  {
    title: "LIGHT",
    subtitle: "Circadian Rhythm & Sculptural Shadow",
    detail:
      "2700K ambient warmth, architectural coves, glare-shielded downlights, and custom statement pendants.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",

    className: "md:col-span-4",
  },

  {
    title: "FUNCTION",
    subtitle: "Effortless Utility & Hidden Systems",
    detail:
      "Silent soft-close hardware, concealed HVAC diffuser slots, cable-free living zones, and purpose-built cabinetry.",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=800&q=80",

    className: "sm:col-span-5 md:col-span-4 lg:col-span-3",
  },

  {
    title: "DETAIL",
    subtitle: "Millimeter Precision & Master Joinery",
    detail:
      "Precision reveals, bespoke joinery profiles, recessed floor skirting, and calibrated alignment.",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=800&q=80",

    className: "sm:col-span-6 md:col-span-5",
  },
];

  return (
    <section id="philosophy" className="py-28 md:py-36 bg-[#f4f1ea] border-t border-[#eae4d7]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[#9d8766] font-semibold mb-3">
            <span>04</span>
            <span>&bull;</span>
            <span>Design Philosophy</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#171513] font-light leading-[1.12] mb-6">
            The Five Constants. <br />
            <span className="italic font-normal text-[#8c795b]">Guiding every decision.</span>
          </h2>
          <p className="text-base text-[#5c5447] leading-relaxed font-light">
            Regardless of project scale or aesthetic direction, our studio evaluates every line drawn against five enduring architectural fundamentals.
          </p>
        </div>

<div className="space-y-8">
  <div className="container mx-auto lg:py-2 2xl:max-w-[1400px]">
    <div className="grid gap-6 sm:grid-cols-12">
      {pillars.map((pillar, idx) => (
        <div
          key={idx}
          className={`col-span-12 ${pillar.className}`}
        >
          <a
            href="#"
            className="group relative block overflow-hidden rounded-xl focus:outline-none"
          >
            <div className="relative aspect-[12/7] overflow-hidden rounded-xl">
              <img
                src={pillar.image}
                alt={pillar.title}
                className="
                  h-full
                  w-full
                  rounded-xl
                  object-cover
                  transition-transform
                  duration-500
                  ease-in-out
                  group-hover:scale-105
                  group-focus:scale-105
                "
              />

              <div className="absolute bottom-0 p-2 sm:p-4">
                <div className="rounded-lg text-[#f4f1ea]/90 p-4 font-semibold backdrop-blur-sm">
                  <div className="text-sm md:text-xl">{pillar.title}</div>
                </div>
              </div>
                  <div className="text-xs text-white absolute top-3 right-3 w-8/12">{pillar.detail}</div>

            </div>
          </a>
        </div>
      ))}
    </div>
  </div>
</div>
      </div>
    </section>
  );
}
