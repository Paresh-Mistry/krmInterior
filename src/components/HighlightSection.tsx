"use client";

import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import {
    Autoplay,
    EffectCoverflow,
    Navigation,
    Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import clsx from "clsx";


const HighlightSection = () => {
    const images = [
        {
            src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
            alt: "Architectural living interior with sunlight and warm minimalist furniture",
            title: "Atmospheric Balance",
            description: "Natural light ingress & natural lime plaster",
        },
        {
            src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
            alt: "Tactile timber and stone interior detail",
            title: "Material Harmony",
            description: "Timber, stone & tactile surfaces",
        },
        {
            src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
            alt: "Modern warm minimalist interior",
            title: "Quiet Luxury",
            description: "Timeless forms with refined detailing",
        },
        {
            src: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
            alt: "Contemporary residential interior",
            title: "Living Spaces",
            description: "Designed around the rhythm of everyday life",
        },
        {
            src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
            alt: "Elegant contemporary interior",
            title: "Architectural Calm",
            description: "Sculptural simplicity and visual balance",
        },
        {
            src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
            alt: "Minimalist living room interior",
            title: "Human-Centric Design",
            description: "Utility shaped around the people who inhabit it",
        },
    ];

    return (
        <section
            id="about"
            className="relative overflow-hidden border-t border-[#eae4d7] bg-[#fbfaf8] pt-28 md:pt-36"
        >
            <div className="relative z-10 flex w-full justify-center">
                <div className="mx-auto grid w-full max-w-7xl grid-cols-1 justify-items-center gap-12 px-5 lg:grid-cols-12 lg:gap-16 sm:px-8">

                    {/* 3D Interior Carousel */}
                    <div className="relative w-full lg:col-span-10 lg:col-start-2">
                        <Carousel_003
                            images={images}
                            showPagination
                            showNavigation
                            loop
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

const Carousel_003 = ({
    images,
    className,
    showPagination = false,
    showNavigation = false,
    loop = true,
    autoplay = false,
    spaceBetween = 0,
}: {
    images: {
        src: string;
        alt: string;
        title?: string;
        description?: string;
    }[];
    className?: string;
    showPagination?: boolean;
    showNavigation?: boolean;
    loop?: boolean;
    autoplay?: boolean;
    spaceBetween?: number;
}) => {
    const css = `
    .Carousal_003 {
      width: 100%;
      height: 500px;
      padding-bottom: 50px !important;
    }

    .Carousal_003 .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 300px;
      height: 420px;
      border-radius: 24px;
      overflow: hidden;
      border: 1px solid #ded5c2;
    }

    .Carousal_003 .swiper-slide img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .Carousal_003 .swiper-pagination {
      bottom: 5px !important;
    }

    .Carousal_003 .swiper-pagination-bullet {
      background-color: #8c795b !important;
      opacity: 0.35;
    }

    .Carousal_003 .swiper-pagination-bullet-active {
      opacity: 1;
      width: 24px;
      border-radius: 999px;
    }

    .Carousal_003 .swiper-button-next,
    .Carousal_003 .swiper-button-prev {
      width: 32px;
      height: 32px;
      border-radius: 999px;
      background: rgba(23, 21, 19, 0.75);
      backdrop-filter: blur(8px);
      transition: all 0.3s ease;
    }

    .Carousal_003 .swiper-button-next:hover,
    .Carousal_003 .swiper-button-prev:hover {
      background: #8c795b;
    }

    @media (max-width: 768px) {
      .Carousal_003 {
        height: 440px;
      }

      .Carousal_003 .swiper-slide {
        width: 260px;
        height: 360px;
      }
    }
  `;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
                duration: 0.6,
                ease: "easeOut",
            }}
            className={clsx("relative w-full", className)}
        >
            <style>{css}</style>

            <Swiper
                spaceBetween={spaceBetween}
                autoplay={
                    autoplay
                        ? {
                            delay: 2500,
                            disableOnInteraction: false,
                        }
                        : false
                }
                effect="coverflow"
                grabCursor={true}
                slidesPerView="auto"
                centeredSlides={true}
                loop={loop}
                coverflowEffect={{
                    rotate: 40,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={
                    showPagination
                        ? {
                            clickable: true,
                        }
                        : false
                }
                navigation={
                    showNavigation
                        ? {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        }
                        : false
                }
                className="Carousal_003"
                modules={[
                    EffectCoverflow,
                    Autoplay,
                    Pagination,
                    Navigation,
                ]}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-full w-full">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                            />

                            {/* Image Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/80 via-transparent to-transparent" />

                            {/* Image Content */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                {image.title && (
                                    <span className="mb-1 block text-[9px] font-mono uppercase tracking-[0.25em] text-[#d6caa7]">
                                        {image.title}
                                    </span>
                                )}

                                {image.description && (
                                    <p className="font-serif text-base font-light text-[#faf9f6]">
                                        {image.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {showNavigation && (
                    <>
                        <div className="swiper-button-next after:hidden">
                            <ChevronRightIcon className="h-5 w-5 text-white" />
                        </div>

                        <div className="swiper-button-prev after:hidden">
                            <ChevronLeftIcon className="h-5 w-5 text-white" />
                        </div>
                    </>
                )}
            </Swiper>
        </motion.div>
    );
};

export { HighlightSection };

export default HighlightSection;

