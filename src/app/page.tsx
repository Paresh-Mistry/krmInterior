import React from "react";
import Navbar from "@/components/Navbar";
import HeroScrollAnimation from "@/components/HeroScrollAnimation";
import IntroSection from "@/components/IntroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectShowcase from "@/components/ProjectShowcase";
import PhilosophySection from "@/components/PhilosophySection";
import ProcessSection from "@/components/ProcessSection";
import InteractiveSpacePlanner from "@/components/InteractiveSpacePlanner";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-[#191816]">
      {/* Navigation */}
      <Navbar />

      {/* Hero with Scroll-Driven 3D Frame Animation */}
      <HeroScrollAnimation totalFrames={50} />

      {/* Interiors with Intention */}
      <IntroSection />

      {/* Services Grid */}
      <ServicesSection />

      {/* Project Showcase / Typology Studies */}
      <ProjectShowcase />

      {/* Design Philosophy (Space, Material, Light, Function, Detail) */}
      <PhilosophySection />

      {/* 4-Step Process (Discover, Concept, Design, Execute) */}
      <ProcessSection />

      {/* Interactive Space Planner & Direct Inquiry */}
      {/* <InteractiveSpacePlanner /> */}

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}

