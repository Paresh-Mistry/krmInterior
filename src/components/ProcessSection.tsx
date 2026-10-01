import React from "react";
import { ProcessStep } from "@/types";
import { Search, Compass, Palette, Wrench, CheckCircle } from "lucide-react";

interface ExtendedProcessStep extends ProcessStep {
  image: string;
}

export default function ProcessSection() {
  const steps: ExtendedProcessStep[] = [
    {
      number: "01",
      phase: "DISCOVER",
      title: "Understanding Space, Requirements & Lifestyle",
      description:
        "Every project begins with deep listening and site reconnaissance. We analyze natural light trajectories, existing structural parameters, civil layouts, and personal daily rituals in Mumbai.",
      deliverables: ["Site Survey & Dimension Verification", "Client Lifestyle Briefing", "Spatial Feasibility Review", "Budget & Timeline Alignment"],
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
    },
    {
      number: "02",
      phase: "CONCEPT",
      title: "Developing Visual & Functional Direction",
      description:
        "We translate aspirations into architectural space. We explore volumetric flow, preliminary mood palettes, circulation options, and spatial zoning to establish a clear creative trajectory.",
      deliverables: ["2D Architectural Floor Plans", "Moodboard & Material Swatch Concept", "Zoning Diagrams", "Design Trajectory Alignment"],
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    },
    {
      number: "03",
      phase: "DESIGN",
      title: "Refining Materials, Layouts, Lighting & Details",
      description:
        "The concept is engineered into millimeter precision. We detail custom joinery, specify exact stone and timber finishes, engineer electrical and lighting schedules, and model full 3D spatial renders.",
      deliverables: ["Photorealistic 3D Visualizations", "Comprehensive Millwork Shop Drawings", "Lighting & Electrical Layout Schedules", "Final Material Specs & BOQ"],
      image: "https://images.unsplash.com/photo-1618221381711-42ca8ab6e908?auto=format&fit=crop&w=800&q=80",
    },
    {
      number: "04",
      phase: "EXECUTE",
      title: "Turning Approved Design into Finished Space",
      description:
        "Our skilled craftsmen, civil supervisors, and specialist fabricators bring the blueprints into physical reality under rigorous on-site quality controls and structured milestones.",
      deliverables: ["On-Site Civil & MEP Supervision", "Artisanal Carpentry & Joinery Fabrication", "Rigorous Snagging & Finishing Audits", "Pristine Handover & Walkthrough"],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return Search;
      case 1: return Compass;
      case 2: return Palette;
      case 3: return Wrench;
      default: return CheckCircle;
    }
  };

  return (
    <section id="process" className="py-28 md:py-36 bg-[#faf9f6] border-t border-[#eae4d7]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[#9d8766] font-semibold mb-3">
              <span>05</span>
              <span>&bull;</span>
              <span>Methodology &amp; Workflow</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#171513] font-light leading-[1.12]">
              Disciplined Process. <br />
              <span className="italic font-normal text-[#8c795b]">From blueprint to living space.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#5c5447] max-w-md leading-relaxed">
            A transparent four-phase framework ensuring clarity, timeline discipline, and impeccable craft execution for every project in Mumbai.
          </p>
        </div>

        {/* 4 Process Cards with Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = getStepIcon(idx);
            return (
              <div
                key={step.phase}
                className="group relative rounded-3xl bg-[#fbfaf8] hover:bg-white border border-[#e5ded0] hover:border-[#9d8766] transition-all duration-300 hover:shadow-xl overflow-hidden flex flex-col justify-between"
              >
                {/* Process Step Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#eae4d7]">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Top Step Pill & Icon */}
                  <div className="absolute top-3 left-3 flex items-center space-x-2">
                    <span className="font-mono text-[11px] font-semibold px-2.5 py-1 rounded-full bg-[#faf9f6]/95 backdrop-blur-sm text-[#8c795b] shadow-sm">
                      {step.number} &mdash; {step.phase}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 p-1.5 rounded-lg bg-black/40 text-white backdrop-blur-sm">
                    <Icon className="w-3.5 h-3.5 text-[#d6caa7]" />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl font-medium text-[#171513] mb-2 leading-snug group-hover:text-[#8c795b] transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-xs text-[#61584b] leading-relaxed mb-6">
                      {step.description}
                    </p>
                  </div>

                  {/* Deliverables List */}
                  <div className="pt-4 border-t border-[#e2dacf] space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8a8070] block font-semibold">
                      Key Deliverables:
                    </span>
                    <ul className="space-y-1.5">
                      {step.deliverables.map((del) => (
                        <li key={del} className="flex items-center space-x-2 text-[11px] text-[#4d4538]">
                          <span className="w-1 h-1 rounded-full bg-[#9d8766] shrink-0" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
