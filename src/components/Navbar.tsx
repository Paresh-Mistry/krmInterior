"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Menu, X, ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png"; 

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Showcase", href: "#showcase" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Floating Ultra-Glassy Header with max-w-7xl */}
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-4 sm:px-8 pointer-events-none">
        <div
          className={`pointer-events-auto w-full max-w-7xl rounded-2xl sm:rounded-full transition-all duration-500 flex items-center justify-between px-6 sm:px-8 py-3 ${
            scrolled
              ? "bg-white/35 backdrop-blur-2xl backdrop-saturate-[180%] border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.08),inset_0_1px_2px_rgba(255,255,255,0.9),inset_0_0_15px_rgba(255,255,255,0.4)]"
              : "bg-white/25 backdrop-blur-xl backdrop-saturate-[160%] border border-white/50 shadow-[0_12px_35px_rgba(0,0,0,0.05),inset_0_1px_2px_rgba(255,255,255,0.85)]"
          }`}
          style={{
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
          }}
        >
          {/* Brand Logo */}
          <Link
            href="#top"
            className="flex items-center space-x-3 group focus:outline-none"
          >
            <div className="flex flex-col">
              <img src={logo.src} alt="KRM Interior Logo" className="h-full md:w-[11em] sm:w-[10em] w-[10em] object-contain" />
            </div>
          </Link>

          {/* Center Navigation Links with Glass Pills */}
          <nav className="hidden lg:flex items-center bg-white/20  rounded-full py-1 px-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-[0.18em] text-[#3d362a] hover:text-[#171513] hover:bg-white/60 hover:shadow-xs px-2.5 py-1.5 rounded-full font-medium transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center space-x-3">

            {/* Inquire CTA Pill */}
            <a
              href={`https://wa.me/${process.env.MOBILE_NUMBER}?text=Hello%20KRM%20Interior%2C%20I%20would%20like%20to%20inquire%20about%20interior%20design%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold bg-[#171513] hover:bg-[#343029] text-[#faf9f6] px-5 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg border border-white/20"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#d6caa7]" />
              <span>Inquire</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#d6caa7]" />
            </a>
          </div>

          {/* Mobile Menu & Call Triggers */}
          <div className="flex items-center space-x-2 lg:hidden">
            <a
              href={`tel:${process.env.MOBILE_NUMBER}`}
              className="p-2 rounded-full bg-white/40 text-[#171513] hover:bg-white/70 transition-colors border border-white/50"
              aria-label="Call KRM Interior"
            >
              <Phone className="w-5.5 h-5.5 text-[#9d8766]" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-white/40 text-[#171513] hover:bg-white/70 transition-colors border border-white/50 focus:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-[#121110]/35 backdrop-blur-md lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Floating Glass Drawer */}
      <div
        className={`fixed top-4 right-4 bottom-4 z-50 w-[88%] max-w-sm bg-white/60 backdrop-blur-2xl backdrop-saturate-[180%] text-[#171513] rounded-3xl shadow-2xl lg:hidden flex flex-col justify-between p-7 border border-white/70 transition-transform duration-500 ease-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-[110%]"
        }`}
        style={{
          WebkitBackdropFilter: "blur(24px) saturate(180%)",
        }}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between pb-5 border-b border-black/[0.08]">
                        <img src={logo.src} alt="KRM Interior Logo" className="h-full md:w-[11em] sm:w-[10em] w-[10em] object-contain" />

          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-full bg-black/[0.05] hover:bg-black/[0.1] transition-colors"
            aria-label="Close menu"
          >
            <X className="w-4 h-4 text-[#171513]" />
          </button>
        </div>

        {/* Drawer Links */}
        <nav className="flex flex-col space-y-4 my-auto py-6">
          {navLinks.map((link, idx) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-serif text-[#1e1c18] hover:text-[#9d8766] transition-colors flex items-center justify-between group"
            >
              <span>{link.label}</span>
              <span className="text-xs font-mono text-[#8a8070] group-hover:text-[#9d8766]">
                0{idx + 1}
              </span>
            </Link>
          ))}
        </nav>

        {/* Drawer Footer Contact */}
        <div className="pt-5 border-t border-black/[0.08] space-y-4">
          <div className="text-xs text-[#524b3e] space-y-1">
            <p className="font-semibold text-[#171513]">Studio Location:</p>
            <p>Dr. B. A. Road, Parel, Mumbai, Maharashtra</p>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2">
            <a
              href={`tel:${process.env.MOBILE_NUMBER}`}
              className="flex items-center justify-center space-x-2 py-3 px-4 bg-white/50 text-[#171513] border border-white/70 rounded-2xl text-xs font-medium hover:bg-white/80 transition-colors shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#9d8766]" />
              <span>Call Now</span>
            </a>
            <a
              href={`https://wa.me/${process.env.MOBILE_NUMBER}?text=Hello%20KRM%20Interior%2C%20I%20would%20like%20to%20inquire%20about%20interior%20design%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 py-3 px-4 bg-[#171513] text-[#faf9f6] rounded-2xl text-xs font-semibold hover:bg-[#343029] transition-colors shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#d6caa7]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
