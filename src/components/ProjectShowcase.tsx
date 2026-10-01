"use client";

import React, { useState } from "react";
import { ShowcaseProject } from "@/types";
import { Layers, MapPin, Maximize2, Sparkles, ArrowUpRight } from "lucide-react";

interface ExtendedProject extends ShowcaseProject {
  image: string;
}

export default function ProjectShowcase() {
  const [filter, setFilter] = useState<string>("all");

  const projects: ExtendedProject[] = [
    {
      id: "parel-highrise",
      title: "Parel Highrise Sanctuary",
      category: "Residential Concept",
      location: "Parel, Mumbai",
      palette: ["#e8e2d5", "#b8a994", "#4a4338", "#2c2822"],
      description: "A continuous flow concept balancing warm fluted limestones, recessed ceiling reveals, and minimalist acoustic living zones.",
      dimensions: "2,850 sq.ft.",
      materiality: "Honed Roman Travertine, Smoked European Oak, Brushed Bronze",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "worli-residence",
      title: "Worli Coastal Modernism",
      category: "Residential Concept",
      location: "Worli Seaface, Mumbai",
      palette: ["#f5f2ec", "#cfc5b4", "#786d5c", "#1f1d19"],
      description: "Framing expansive maritime daylight with soft textured microcement, seamless pivot doors, and low-profile bespoke modular seating.",
      dimensions: "3,400 sq.ft.",
      materiality: "Cast Microcement, Natural Teak, Fluted Ribbed Glass",
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "lower-parel-studio",
      title: "Lower Parel Creative Atelier",
      category: "Commercial Concept",
      location: "Lower Parel, Mumbai",
      palette: ["#eae5dc", "#8f8474", "#3b362e", "#141311"],
      description: "An adaptive studio layout featuring acoustic slatted walls, concealed biophilic integration, and flexible collaborative breakout lounges.",
      dimensions: "4,200 sq.ft.",
      materiality: "Matte Black Steel, Acoustic PET Felt, Reclaimed Teak Joinery",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "bandra-duplex",
      title: "Bandra Heritage Minimalist Penthouse",
      category: "Residential Concept",
      location: "Bandra West, Mumbai",
      palette: ["#f7f4ee", "#dcd2c1", "#968772", "#28241e"],
      description: "Harmonizing contemporary brutalist geometries with organic warmth, integrated culinary island, and intimate master suite alcoves.",
      dimensions: "3,100 sq.ft.",
      materiality: "White Statuario Quartz, Fluted Walnut, Tactile Bouclé Linens",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "nariman-executive",
      title: "Nariman Point Private Executive Suite",
      category: "Commercial Concept",
      location: "South Mumbai",
      palette: ["#ece6db", "#b5a895", "#5c5345", "#1c1a17"],
      description: "Discreet acoustic isolation, concealed presentation technology, and architectural lighting engineered for high-level governance.",
      dimensions: "2,100 sq.ft.",
      materiality: "Smoked Grey Veneer, Anodized Titanium Accents, Silk-Wool Rugs",
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: "prabhadevi-kitchen",
      title: "Prabhadevi Architectural Kitchen Study",
      category: "Bespoke Millwork",
      location: "Prabhadevi, Mumbai",
      palette: ["#fbf9f5", "#e5decf", "#a49681", "#22201c"],
      description: "Zero-handle pocket door cabinetry, concealed appliance banks, and cantilevered quartzite breakfast bar.",
      dimensions: "650 sq.ft.",
      materiality: "Brazilian Quartzite, Matte Anti-Fingerprint Laminate, LED Strips",
      image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const categories = [
    { label: "All Typologies", value: "all" },
    { label: "Residential Concepts", value: "Residential Concept" },
    { label: "Commercial Concepts", value: "Commercial Concept" },
    { label: "Bespoke Millwork", value: "Bespoke Millwork" },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="showcase" className="py-28 md:py-36 bg-[#faf9f6] border-t border-[#eae4d7]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[#9d8766] font-semibold mb-3">
              <span>03</span>
              <span>&bull;</span>
              <span>Design Typologies &amp; Showcase</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#171513] font-light leading-[1.12]">
              Spatial Frameworks. <br />
              <span className="italic font-normal text-[#8c795b]">Form, texture &amp; light.</span>
            </h2>
          </div>

          <div className="max-w-md space-y-2">
            <p className="text-sm sm:text-sm text-[#5c5447] leading-relaxed">
              Architectural studies and design layouts developed by KRM Interior. Ready-to-adapt frameworks representing our spatial principles across Mumbai residences and workspaces.
            </p>
            <div className="flex items-center space-x-2 text-[11px] font-mono text-[#8a8070]">
              <Sparkles className="w-3 h-3 text-[#9d8766]" />
              <span>Tailored to Mumbai Floor Plans</span>
            </div>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-5 py-2.5 rounded-full text-sm font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                filter === cat.value
                  ? "bg-[#171513] text-[#faf9f6] font-semibold shadow-md"
                  : "bg-[#f2ece0] text-[#6b6253] hover:bg-[#e6decf]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Editorial Project Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-[#fbfaf8] hover:bg-white rounded-3xl border border-[#e5ded0] hover:border-[#cfc4b0] overflow-hidden transition-all duration-500 hover:shadow-2xl flex flex-col justify-between"
            >
              {/* Architectural Image Frame */}
              <div className="relative aspect-[4/3] bg-[#eae4d7] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />

                {/* Location Pill */}
                <div className="absolute top-4 left-4 z-10 flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#faf9f6]/95 backdrop-blur-md border border-[#ded5c4] text-[10px] font-mono text-[#4a4338] shadow-sm">
                  <MapPin className="w-3 h-3 text-[#9d8766]" />
                  <span>{project.location}</span>
                </div>

                {/* Dimensions Pill */}
                <div className="absolute top-4 right-4 z-10 flex items-center space-x-1 px-3 py-1 rounded-full bg-[#faf9f6]/95 backdrop-blur-md border border-[#ded5c4] text-[10px] font-mono text-[#4a4338] shadow-sm">
                  <Maximize2 className="w-3 h-3 text-[#8c795b]" />
                  <span>{project.dimensions}</span>
                </div>

                {/* Color Palette Swatch Bar */}
                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between p-2.5 rounded-xl bg-[#faf9f6]/95 backdrop-blur-md border border-[#ded5c4] shadow-sm">
                  <span className="text-[10px] font-mono text-[#736a5c] uppercase tracking-wider pl-1">Palette</span>
                  <div className="flex items-center space-x-1.5">
                    {project.palette.map((color, cIdx) => (
                      <span
                        key={cIdx}
                        className="w-4 h-4 rounded-full border border-black/10 shadow-inner"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Card Content */}
              <div className="p-7 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#9d8766] font-semibold mb-1.5">
                    {project.category}
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-[#171513] mb-2 group-hover:text-[#8c795b] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#5c5447] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Materiality Spec */}
                <div className="pt-4 border-t border-[#eae4d7] space-y-1.5">
                  <div className="flex items-center space-x-1.5 text-[10px] font-mono uppercase tracking-wider text-[#8a8070]">
                    <Layers className="w-3 h-3 text-[#9d8766]" />
                    <span>Materiality Specification:</span>
                  </div>
                  <p className="text-[11px] font-medium text-[#2d2821]">
                    {project.materiality}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
