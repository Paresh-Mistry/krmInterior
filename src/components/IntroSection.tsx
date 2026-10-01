import React from "react";
import Image from "next/image";
import { Compass, Layers, SunMedium, Sliders, ArrowUpRight } from "lucide-react";
import HighlightSection from "./HighlightSection";

export default function IntroSection() {
  const highlights = [
    {
      icon: Compass,
      title: "Spatial Proportions",
      description: "Optimizing flow, natural sightlines, and volumetric balance across residential and commercial blueprints."
    },
    {
      icon: Layers,
      title: "Tactile Materiality",
      description: "Curating authentic fluted timbers, honed stones, brushed metals, and bespoke textured wall finishes."
    },
    {
      icon: SunMedium,
      title: "Circadian Lighting",
      description: "Layering ambient warmth, focused task accents, and daylight harmony for atmospheric transformation."
    },
    {
      icon: Sliders,
      title: "Bespoke Joinery",
      description: "Tailored architectural cabinetry and millimeter-precise storage crafted for everyday living."
    }
  ];

  return (
    <section id="about" className="relative py-28 md:py-36 bg-[#fbfaf8] border-t border-[#eae4d7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Top Editorial Row: Manifesto & Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[#9d8766] font-semibold">
              <span>01</span>
              <span>&bull;</span>
              <span>Studio Ethos</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#171513] font-light leading-[1.12] text-balance">
              Interiors with Intention. <br />
              <span className="italic font-normal text-[#8c795b]">Form follows life.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#524a3e] leading-relaxed font-light">
              At KRM Interior, we approach every interior not as a blank canvas to decorate, but as an architectural volume to orchestrate. We balance sculptural simplicity, acoustic tranquility, and human-centric utility to create homes and workplaces that endure.
            </p>

            <div className="pt-2 flex items-center space-x-6">
              <a
                href="#services"
                className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#171513] hover:text-[#9d8766] font-semibold transition-colors group"
              >
                <span>Discover Our Disciplines</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#9d8766]" />
              </a>
              <span className="w-1.5 h-1.5 rounded-full bg-[#ded5c2]" />
              <span className="text-xs font-mono text-[#7a7266]">Parel, Mumbai</span>
            </div>
          </div>

          {/* Editorial Photography Feature */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-[#ded5c2]">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
                alt="Architectural living interior with sunlight and warm minimalist furniture"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#d6caa7]">
                  Atmospheric Balance
                </span>
                <p className="font-serif text-lg font-light text-[#faf9f6]">
                  Natural light ingress &amp; natural lime plaster
                </p>
              </div>
            </div>

            {/* Overlapping Detail Vignette */}
            <div className="hidden sm:block absolute -bottom-8 -left-8 w-44 h-44 rounded-2xl overflow-hidden shadow-xl border-4 border-[#faf9f6]">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80"
                alt="Tactile timber and stone detail"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>



        {/* 4 Architectural Pillars Grid */}
        <HighlightSection />
      </div>
    </section>
  );
}
