"use client";

import React, { useState } from "react";
import {
  Home,
  Building2,
  Sofa,
  BedDouble,
  UtensilsCrossed,
  Briefcase,
  PenTool,
  Compass,
  ArrowUpRight,
  CheckCircle2,
  Phone
} from "lucide-react";
import { ServiceItem } from "@/types";
import { Marquee } from "./ui/marquee";

interface ExtendedServiceItem extends ServiceItem {
  image: string;
}

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<string>("residential");

  const services: ExtendedServiceItem[] = [
    {
      id: "residential",
      title: "Residential Interiors",
      subtitle: "Bespoke Living Environments",
      description:
        "Comprehensive interior architecture for high-end apartments, penthouses, and private residences tailored to daily routines and aesthetic calm.",
      focus: ["Full-Floor Planning", "Material Continuity", "Atmospheric Lighting", "Custom Wardrobes"],
      features: ["Turnkey Project Execution", "Space Optimization", "3D Architectural Visualization", "Fine Millwork Integration"],
      tag: "Residential",
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "commercial",
      title: "Commercial Interiors",
      subtitle: "Brand-Centric Workspaces & Boutiques",
      description:
        "Thoughtful commercial spatial planning that elevates brand identity, customer interaction, and operational efficiency.",
      focus: ["Retail Storefronts", "Showrooms & Galleries", "Executive Lounges", "Hospitality Spaces"],
      features: ["High-Traffic Durability", "Code Compliance", "Acoustic Zoning", "Brand Identity Styling"],
      tag: "Commercial",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "living-room",
      title: "Living Room Design",
      subtitle: "The Spatial Anchor of the Home",
      description:
        "Orchestrating conversational intimacy, sculptural furniture layouts, art placement, and natural daylight orientation.",
      focus: ["Media Unit Millwork", "Concealed Wiring", "Feature Wall Cladding", "Curated Seating Systems"],
      features: ["Acoustic Management", "Architectural Niches", "Layered Lighting Controls", "Custom Marble & Wood Joinery"],
      tag: "Living Space",
      image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "bedroom",
      title: "Bedroom Design",
      subtitle: "Sanctuaries of Quiet Repose",
      description:
        "Master and guest suites engineered for restorative rest, tactile warmth, concealed storage, and acoustic silence.",
      focus: ["Acoustic Headboard Ensembles", "Integrated Walk-in Closets", "Soft Indirect Luminescence", "Natural Linens & Silks"],
      features: ["Circadian Lighting", "Fluted Wood Details", "Ensuite Flow", "Ergonomic Bedside Automation"],
      tag: "Private Spaces",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "modular-kitchen",
      title: "Modular Kitchen",
      subtitle: "Culinary Ergonomics & Precision German/Austrian Hardware",
      description:
        "High-performance modular kitchen designs uniting durable quartz/granite surfaces, precision soft-close systems, and streamlined appliances.",
      focus: ["Ergonomic Work Triangle", "Concealed Venting", "Anti-Scratch Anti-Fingerprint Surfaces", "Pantry Towers"],
      features: ["Heavy-Duty Drawer Slides", "Integrated LED Cabinet Bars", "Moisture-Resistant Marine Ply", "Smart Corner Pull-outs"],
      tag: "Culinary",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "office",
      title: "Office Interiors",
      subtitle: "Focus, Collaboration & Ergonomics",
      description:
        "Modern corporate and boutique creative workspaces designed to inspire productivity, foster collaboration, and minimize auditory distraction.",
      focus: ["Ergonomic Workstations", "Executive Boardrooms", "Soundproof Phone Pods", "Cable Management"],
      features: ["Air Quality Integration", "Biophilic Planters", "Flexible Meeting Layouts", "Acoustic Baffles"],
      tag: "Corporate",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "custom-interior",
      title: "Custom Interior Design",
      subtitle: "Bespoke Millwork & Specialty Architectural Elements",
      description:
        "One-of-a-kind architectural fixtures, fluted paneling, floating credenzas, and custom metal-and-stone consoles made exclusively for your space.",
      focus: ["Bespoke Brass & Gunmetal Hardware", "Curved Wall Paneling", "Custom Vanity Consoles", "Display Vitrines"],
      features: ["Master Craftsmanship", "Shop Drawings & Prototyping", "Curated Rare Veneers", "Seamless Handover"],
      tag: "Artisanal",
      image: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "complete-solutions",
      title: "Complete Interior Solutions",
      subtitle: "End-to-End Turnkey Conception to Handover",
      description:
        "A holistic design-to-build service managing conceptual blueprints, material procurement, civil site supervision, and pristine final styling.",
      focus: ["Single Point of Responsibility", "Civil & MEP Works", "Site Coordination in Mumbai", "Strict Quality Benchmarking"],
      features: ["Budget Oversight", "Detailed Timeline Execution", "Material Authenticity Verification", "Post-Handover Support"],
      tag: "Turnkey",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    },
  ];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "residential": return Home;
      case "commercial": return Building2;
      case "living-room": return Sofa;
      case "bedroom": return BedDouble;
      case "modular-kitchen": return UtensilsCrossed;
      case "office": return Briefcase;
      case "custom-interior": return PenTool;
      default: return Compass;
    }
  };

  const activeServiceData = services.find((s) => s.id === selectedService) || services[0];

  return (
    <section id="services" className="py-28 md:py-36 bg-[#f4f1ea] border-t border-[#eae4d7]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[#9d8766] font-semibold mb-3">
              <span>02</span>
              <span>&bull;</span>
              <span>Services &amp; Disciplines</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#171513] font-light leading-[1.12]">
              Specialized Practices. <br />
              <span className="italic font-normal text-[#8c795b]">Tailored to the space.</span>
            </h2>
          </div>
          <p className="text-sm sm:text-sm text-[#5c5447] max-w-md leading-relaxed">
            From single-room transformations to complete turnkey interior solutions across Mumbai. Every project is executed with disciplined craftsmanship and transparent communication.
          </p>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-6 mb-16">
          <Marquee pauseOnHover className="[--duration:28s] [--gap:1.5rem]">
            {services.map((service, idx) => {
              const Icon = getServiceIcon(service.id);
              const isSelected = selectedService === service.id;

              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`group cursor-pointer w-[280px] sm:w-[320px] lg:w-[340px]
            min-h-full shrink-0 rounded-3xl transition-all duration-300 border overflow-hidden flex flex-col justify-between ${isSelected
                      ? "bg-[#faf9f6] border-[#9d8766] shadow-xl -translate-y-1.5 ring-1 ring-[#9d8766]"
                      : "bg-[#fbfaf8] hover:bg-[#faf9f6] border-[#e2dacf] hover:border-[#cfc4b0] shadow-sm hover:shadow-md"
                    }`}
                >
                  {/* Service Card Image Banner */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#e8e2d5]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                    <span className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#faf9f6]/90 backdrop-blur-sm text-[#4d4538] font-medium shadow-sm">
                      {service.tag}
                    </span>

                    <span className="absolute top-3 right-3 font-mono text-sm px-2 py-0.5 rounded-full bg-black/40 text-white backdrop-blur-sm">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Service Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-2.5 mb-3">
                        <div className="p-2 rounded-lg bg-[#ede7dc] text-[#8c795b]">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="font-serif text-lg sm:text-xl font-medium text-[#171513] group-hover:text-[#8c795b] transition-colors leading-snug">
                          {service.title}
                        </h3>
                      </div>

                      <p className="text-sm text-[#61584b] line-clamp-2 leading-relaxed">
                        {service.subtitle}
                      </p>
                    </div>

                    <div className="pt-4 mt-5 border-t border-[#eae4d7] flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#8a8070] group-hover:text-[#171513] transition-colors font-medium">
                        {isSelected ? "Active Focus" : "Explore Scope"}
                      </span>
                      <ArrowUpRight
                        className={`w-3.5 h-3.5 transition-transform duration-300 ${isSelected ? "rotate-45 text-[#9d8766]" : "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#a19685]"
                          }`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </Marquee>

          {/* #F4F1EA give me color as background instead of white  */}

          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#F4F1EA] to-transparent sm:w-32 md:w-40 lg:w-48" />

          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#F4F1EA] to-transparent sm:w-32 md:w-40 lg:w-48" /></div>

        {/* Selected Service Detailed Feature Box with High-Res Image Showcase */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#faf9f6] border border-[#ded5c2] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Visual Hero Image for the Selected Service */}
            <div className="lg:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#e4dcce]">
              <img
                src={activeServiceData.image}
                alt={activeServiceData.title}
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#d6caa7]">
                  Discipline Blueprint
                </span>
                <p className="font-serif text-xl font-normal text-[#faf9f6]">
                  {activeServiceData.title}
                </p>
              </div>
            </div>

            {/* Details and Specs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center space-x-3">
                <span className="text-sm font-mono uppercase tracking-[0.25em] text-[#9d8766] font-semibold">
                  Detailed Scope
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#9d8766]" />
                <span className="text-sm font-mono text-[#7b7264]">{activeServiceData.tag}</span>
              </div>

              <div>
                <h3 className="font-serif text-3xl sm:text-4xl text-[#171513] font-medium mb-3">
                  {activeServiceData.title}
                </h3>
                <p className="text-sm text-[#524a3e] leading-relaxed">
                  {activeServiceData.description}
                </p>
              </div>

              {/* Core Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {activeServiceData.features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2.5 text-sm text-[#3b352b]">
                    <CheckCircle2 className="w-4 h-4 text-[#8c795b] shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#ded5c2] flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={`tel:${process.env.MOBILE_NUMBER}`}
                  className="w-full sm:w-auto inline-flex gap-3 items-center justify-center space-x-2 py-3.5 px-4 bg-green-600 text-white hover:bg-green-700 rounded-full text-sm uppercase tracking-widest font-medium transition-all"
                >
                  <Phone size={18} /> Call To KRM Interior
                </a>
                <a
                  href={`https://wa.me/${process.env.MOBILE_NUMBER}?text=Hello%20KRM%20Interior%2C%20I%20am%20interested%20in%20consulting%20about%20${encodeURIComponent(activeServiceData.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 py-3.5 px-6 bg-[#1e1c18] text-[#faf9f6] hover:bg-[#38332b] rounded-full text-sm uppercase tracking-widest font-medium transition-all shadow-md"
                >
                  <span>Inquire for {activeServiceData.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#d6caa7]" />
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
