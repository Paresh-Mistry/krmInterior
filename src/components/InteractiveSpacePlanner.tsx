"use client";

import React, { useState } from "react";
import { MessageSquare, Calculator, Check, ArrowRight, ShieldCheck, Home } from "lucide-react";

export default function InteractiveSpacePlanner() {
  const [spaceType, setSpaceType] = useState<string>("2-3bhk");
  const [scope, setScope] = useState<string>("turnkey");
  const [area, setArea] = useState<string>("1200-2000");
  const [mumbaiLocation, setMumbaiLocation] = useState<string>("Parel / Lower Parel");

  const spaceTypes = [
    { id: "2-3bhk", label: "2 or 3 BHK Apartment" },
    { id: "penthouse", label: "Luxury Penthouse / Duplex" },
    { id: "commercial", label: "Commercial / Office Suite" },
    { id: "kitchen", label: "Modular Kitchen & Living" },
    { id: "single-room", label: "Custom Bedroom / Living Room" },
  ];

  const scopes = [
    { id: "turnkey", label: "Complete Turnkey Execution (Civil, Joinery, Lighting & Styling)" },
    { id: "joinery", label: "Custom Millwork, Modular Kitchen & Wardrobes" },
    { id: "renovation", label: "Architectural Renovation & Layout Overhaul" },
    { id: "consultation", label: "Concept Design & 3D Spatial Layouts" },
  ];

  const areas = [
    { id: "under-1000", label: "Under 1,000 sq.ft." },
    { id: "1200-2000", label: "1,200 — 2,000 sq.ft." },
    { id: "2000-3500", label: "2,000 — 3,500 sq.ft." },
    { id: "over-3500", label: "3,500+ sq.ft." },
  ];

  const getSpaceLabel = () => spaceTypes.find((s) => s.id === spaceType)?.label || spaceType;
  const getScopeLabel = () => scopes.find((s) => s.id === scope)?.label || scope;
  const getAreaLabel = () => areas.find((a) => a.id === area)?.label || area;

  const whatsappMessage = encodeURIComponent(
    `Hello Paresh / KRM Interior,\nI am planning an interior project in Mumbai:\n- Space Type: ${getSpaceLabel()}\n- Scope: ${getScopeLabel()}\n- Approx Area: ${getAreaLabel()}\n- Location: ${mumbaiLocation}\nI would like to schedule a consultation.`
  );

  return (
    <section className="py-28 md:py-36 bg-[#f4f1ea] border-t border-[#eae4d7]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[#9d8766] font-semibold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Planner</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#171513] font-light leading-tight">
            Outline Your Space. <br />
            <span className="italic font-normal text-[#8c795b]">Receive tailored architectural insights.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#5c5447] mt-3 max-w-lg mx-auto leading-relaxed">
            Select your project parameters to prepare a structured briefing for the KRM Interior studio team in Parel, Mumbai.
          </p>
        </div>

        {/* Planner Interactive Container with Side Visual Preview */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#faf9f6] rounded-3xl border border-[#ded5c2] p-6 sm:p-10 shadow-xl overflow-hidden">
          {/* Options Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Step 1: Space Type */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#7a7266] mb-3 font-semibold">
                1. Select Space Typology
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {spaceTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSpaceType(type.id)}
                    className={`text-left p-3.5 rounded-xl border text-xs font-medium transition-all flex items-center justify-between ${
                      spaceType === type.id
                        ? "bg-[#171513] text-[#faf9f6] border-[#171513] shadow-md"
                        : "bg-[#f5f2ea] text-[#4d4538] border-[#ded5c2] hover:bg-[#ede7dc]"
                    }`}
                  >
                    <span>{type.label}</span>
                    {spaceType === type.id && <Check className="w-3.5 h-3.5 text-[#d6caa7]" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Approximate Area */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#7a7266] mb-3 font-semibold">
                2. Approximate Carpet Area
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {areas.map((a) => (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => setArea(a.id)}
                    className={`text-center p-3 rounded-xl border text-xs font-medium transition-all ${
                      area === a.id
                        ? "bg-[#171513] text-[#faf9f6] border-[#171513] shadow-md"
                        : "bg-[#f5f2ea] text-[#4d4538] border-[#ded5c2] hover:bg-[#ede7dc]"
                    }`}
                  >
                    {a.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Project Scope */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#7a7266] mb-3 font-semibold">
                3. Scope of Engagement
              </label>
              <div className="grid grid-cols-1 gap-2.5">
                {scopes.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setScope(s.id)}
                    className={`text-left p-3.5 rounded-xl border text-xs transition-all flex items-center justify-between ${
                      scope === s.id
                        ? "bg-[#171513] text-[#faf9f6] border-[#171513] shadow-md"
                        : "bg-[#f5f2ea] text-[#4d4538] border-[#ded5c2] hover:bg-[#ede7dc]"
                    }`}
                  >
                    <span className="leading-snug">{s.label}</span>
                    {scope === s.id && <Check className="w-3.5 h-3.5 text-[#d6caa7] shrink-0 ml-2" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Mumbai Location Input */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[#7a7266] mb-2 font-semibold">
                4. Location / Neighborhood in Mumbai
              </label>
              <input
                type="text"
                value={mumbaiLocation}
                onChange={(e) => setMumbaiLocation(e.target.value)}
                placeholder="e.g. Parel, Worli, Bandra, Dadar, Marine Lines"
                className="w-full px-4 py-3 rounded-xl bg-[#f5f2ea] border border-[#ded5c2] text-xs font-sans text-[#171513] focus:outline-none focus:border-[#9d8766]"
              />
            </div>
          </div>

          {/* Right Column: Briefing Summary Box with Visual Card */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md border border-[#e4dcce]">
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
                alt="Architectural space planning"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#d6caa7]">
                  Tailored Proposal
                </span>
                <p className="font-serif text-sm font-normal">
                  Turnkey Residential &amp; Commercial Solutions
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#f2ece0] border border-[#ded5c2] space-y-4">
              <div className="flex items-center justify-between border-b border-[#ded5c2] pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#7a7266]">
                  Briefing Preview
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#e6decf] text-[#4d4538]">
                  Direct to Paresh Mistry
                </span>
              </div>

              <div className="text-xs text-[#4d4538] space-y-1 font-mono">
                <p>&bull; Typology: <strong className="text-[#171513]">{getSpaceLabel()}</strong></p>
                <p>&bull; Area: <strong className="text-[#171513]">{getAreaLabel()}</strong></p>
                <p>&bull; Scope: <strong className="text-[#171513]">{getScopeLabel()}</strong></p>
                <p>&bull; Neighborhood: <strong className="text-[#171513]">{mumbaiLocation || "Mumbai"}</strong></p>
              </div>

              <div className="pt-2 flex flex-col gap-3">
                <a
                  href={`https://wa.me/${process.env.MOBILE_NUMBER}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl bg-[#171513] text-[#faf9f6] hover:bg-[#38332b] text-xs uppercase tracking-widest font-medium transition-all shadow-md group"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#d6caa7]" />
                  <span>Send Brief via WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href={`tel:${process.env.MOBILE_NUMBER}`}
                  className="px-6 py-3 rounded-xl bg-[#faf9f6] text-[#171513] border border-[#ded5c2] hover:bg-[#ede7dc] text-xs uppercase tracking-widest font-medium transition-all text-center"
                >
                  Call {process.env.MOBILE_NUMBER}
                </a>
              </div>

              <div className="flex items-center space-x-2 text-[10px] font-mono text-[#8a8070] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#9d8766]" />
                <span>Zero obligation. Direct conversation with studio principal.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
