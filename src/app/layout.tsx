import type { Metadata, Viewport } from "next";
import "./globals.css";

import { cn } from "@/lib/utils";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const viewport: Viewport = {
  themeColor: "#fbfaf8",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "KRM Interior | Interior Design Studio in Mumbai",
  description:
    "KRM Interior is a modern interior design and architecture studio in Parel, Mumbai, creating thoughtfully designed residential and commercial spaces with architectural precision, refined materiality, and timeless balance.",
  keywords: [
    "KRM Interior",
    "Interior Design Studio Mumbai",
    "Interior Architect Parel Mumbai",
    "Residential Interior Design",
    "Commercial Interiors Mumbai",
    "Modular Kitchen Mumbai",
    "Living Room Interior Design",
    "Custom Interior Solutions Parel"
  ],
  authors: [{ name: "KRM Interior" }],
  creator: "KRM Interior",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://krminterior.com",
    title: "KRM Interior | Interior Design Studio in Mumbai",
    description:
      "Modern interior design studio creating thoughtfully designed residential and commercial spaces in Mumbai.",
    siteName: "KRM Interior",
  },
  alternates: {
    canonical: "https://krminterior.com",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness structured schema for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": "KRM Interior",
    "image": "https://krminterior.com/logo.png",
    "telephone": process.env.MOBILE_NUMBER,
    "email": process.env.EMAIL_ADDRESS,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dr. B. A. Road",
      "addressLocality": "Parel, Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.0028,
      "longitude": 72.8427
    },
    "description": "KRM Interior is an interior design studio creating thoughtfully designed residential and commercial spaces.",
    "priceRange": "$$$"
  };

  return (
    <html lang="en" className={cn("scroll-smooth", "font-sans", inter.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased min-h-screen bg-[#fbfaf8] text-[#191816] selection:bg-[#2a2622] selection:text-[#f7f5f0]">
        {children}
      </body>
    </html>
  );
}

