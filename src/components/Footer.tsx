import React from "react";
import Link from "next/link";
import { ArrowUp, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "Home", href: "#top" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Showcase", href: "#showcase" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#181614] text-[#ede7dc] pt-20 pb-12 border-t border-[#2e2a24]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#2e2a24]">
          {/* Brand Identity */}
          <div className="md:col-span-5 space-y-4">
            <img src={logo.src} alt="KRM Interior Logo" className="filter invert md:w-[11em] sm:w-[10em] w-[10em] object-contain" />

            <p className="text-sm uppercase tracking-[0.22em] text-[#a89b87] font-mono">
              Interior Design &bull; Interior Architecture
            </p>
            <p className="text-sm text-[#a69c8f] max-w-sm leading-relaxed pt-2">
              Creating thoughtfully designed residential and commercial spaces across Mumbai. Where architectural balance, bespoke materials, and human rituals align.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#d6caa7] font-semibold mb-4">
              Navigation
            </p>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#b8ad9e] hover:text-[#faf9f6] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#d6caa7] font-semibold mb-4">
              Studio Information
            </p>
            <div className="space-y-3 text-sm text-[#b8ad9e]">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#9d8766] shrink-0 mt-0.5" />
                <span>Dr. B. A. Road, Parel, Mumbai, Maharashtra</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-3.5 h-3.5 text-[#9d8766] shrink-0" />
                <a href={`mailto:${process.env.EMAIL_ADDRESS}`} className="hover:text-[#faf9f6] transition-colors">
                  {process.env.EMAIL_ADDRESS}
                </a>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#top"
                className="inline-flex items-center space-x-2 text-sm font-mono uppercase tracking-wider text-[#9d8766] hover:text-[#d6caa7] transition-colors"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#8a7f72] gap-4">
          <p>
            &copy; {currentYear} KRM Interior. All rights reserved. Mumbai, India.
          </p>
          <p className="flex items-center space-x-4">
            <span>Residential &bull; Commercial &bull; Turnkey</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

