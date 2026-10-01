"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, ArrowUpRight, Send, Check } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Residential Interiors",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const text = encodeURIComponent(
      `Hello KRM Interior,\nMy name is ${formData.name}.\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nNotes: ${formData.message}`
    );
    window.open(`https://wa.me/919920086695?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-[#fbfaf8] border-t border-[#eae4d7]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Business Info & Studio Imagery */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 text-[11px] font-mono uppercase tracking-[0.25em] text-[#9d8766] font-semibold mb-3">
                <span>06</span>
                <span>&bull;</span>
                <span>Get In Touch</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#171513] font-light leading-[1.12] mb-4">
                Let&rsquo;s Design <br />
                <span className="italic font-normal text-[#8c795b]">Your Space.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#5c5447] leading-relaxed">
                Have a space in mind? Let&rsquo;s discuss how it can be transformed with thoughtful architectural precision.
              </p>
            </div>

            {/* Studio Atmospheric Image */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-md border border-[#e4dcce]">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
                alt="KRM Interior design studio consultations"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#d6caa7]">
                  Consultation Atelier
                </span>
                <p className="font-serif text-base font-normal">
                  Parel Studio &bull; Dr. B. A. Road, Mumbai
                </p>
              </div>
            </div>

            {/* Studio Details Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#f5f2ea] border border-[#e4dcce] space-y-6">
              <h3 className="font-serif text-xl font-medium text-[#171513]">
                KRM Interior Studio
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#4d4538]">
                {/* Location */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-[#ede7dc] text-[#8c795b] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-[#171513] font-medium font-mono text-[11px] uppercase tracking-wider mb-0.5">
                      Studio Address
                    </strong>
                    <p className="leading-relaxed">
                      Dr. B. A. Road, Parel, Mumbai, Maharashtra
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-[#ede7dc] text-[#8c795b] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-[#171513] font-medium font-mono text-[11px] uppercase tracking-wider mb-0.5">
                      Direct Studio Line
                    </strong>
                    <a
                      href="tel:9920086695"
                      className="font-mono text-sm hover:text-[#9d8766] transition-colors font-medium text-[#171513]"
                    >
                      9920086695
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 rounded-lg bg-[#ede7dc] text-[#8c795b] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-[#171513] font-medium font-mono text-[11px] uppercase tracking-wider mb-0.5">
                      Email Inquiries
                    </strong>
                    <a
                      href="mailto:interiordesigner@gmail.com"
                      className="hover:text-[#9d8766] transition-colors break-all"
                    >
                      interiordesigner@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Contact CTAs */}
              <div className="pt-4 border-t border-[#ded5c2] grid grid-cols-2 gap-3">
                <a
                  href="tel:9920086695"
                  className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-[#faf9f6] text-[#171513] border border-[#ded5c2] hover:bg-[#ede7dc] text-xs uppercase tracking-wider font-medium transition-all text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-[#9d8766]" />
                  <span>Call Us</span>
                </a>
                <a
                  href="https://wa.me/919920086695?text=Hello%20KRM%20Interior%2C%20I%20would%20like%20to%20discuss%20an%20interior%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-[#171513] text-[#faf9f6] hover:bg-[#38332b] text-xs uppercase tracking-wider font-medium transition-all text-center shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#d6caa7]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form */}
          <div className="lg:col-span-7 bg-[#f5f2ea]/70 p-8 sm:p-10 rounded-3xl border border-[#e5ded0] shadow-sm">
            <h3 className="font-serif text-2xl font-medium text-[#171513] mb-2">
              Start a Conversation
            </h3>
            <p className="text-xs text-[#6e6557] mb-8">
              Share details regarding your residence or commercial space. We will respond promptly.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#ede7dc] border border-[#d9cfbe] text-center space-y-4">
                <div className="mx-auto w-12 h-12 rounded-full bg-[#faf9f6] flex items-center justify-center text-[#8c795b] shadow-sm">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-medium text-[#171513]">
                  Inquiry Initiated
                </h4>
                <p className="text-xs text-[#524a3e] max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out to KRM Interior. Your details have opened in WhatsApp. You may also call us directly at 9920086695.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-mono underline uppercase tracking-wider text-[#7a7266] hover:text-[#171513]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#696154] mb-2 font-medium">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 bg-[#F7F4EE] border-b border-[#d9cfbe] text-xs text-[#171513] focus:outline-none focus:border-[#9d8766]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#696154] mb-2 font-medium">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 98200XXXXX"
                      className="w-full px-4 py-3 bg-[#F7F4EE] border-b border-[#d9cfbe] text-xs text-[#171513] focus:outline-none focus:border-[#9d8766]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#696154] mb-2 font-medium">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. rahul@example.com"
                      className="w-full px-4 py-3 bg-[#F7F4EE] border-b border-[#d9cfbe] text-xs text-[#171513] focus:outline-none focus:border-[#9d8766]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#696154] mb-2 font-medium">
                      Service Requirement
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F7F4EE] border-b border-[#d9cfbe] text-xs text-[#171513] focus:outline-none focus:border-[#9d8766]"
                    >
                      <option value="Residential Interiors">Residential Interiors</option>
                      <option value="Commercial Interiors">Commercial Interiors</option>
                      <option value="Living Room Design">Living Room Design</option>
                      <option value="Bedroom Design">Bedroom Design</option>
                      <option value="Modular Kitchen">Modular Kitchen</option>
                      <option value="Office Interiors">Office Interiors</option>
                      <option value="Custom Interior Design">Custom Interior Design</option>
                      <option value="Complete Interior Solutions">Complete Interior Solutions</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#696154] mb-2 font-medium">
                    Space Notes / Requirements
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the property, location in Mumbai, carpet area, or current condition..."
                    className="w-full px-4 py-3 bg-[#F7F4EE] border-b border-[#d9cfbe] text-xs text-[#171513] focus:outline-none focus:border-[#9d8766] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-xl bg-[#171513] text-[#faf9f6] hover:bg-[#38332b] text-xs uppercase tracking-widest font-medium transition-all shadow-md"
                >
                  <Send className="w-3.5 h-3.5 text-[#d6caa7]" />
                  <span>Start a Conversation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#d6caa7]" />
                </button>

                <p className="text-[11px] text-center font-mono text-[#8a8070]">
                  Studio located on Dr. B. A. Road, Parel, Mumbai. Visits by prior appointment.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
