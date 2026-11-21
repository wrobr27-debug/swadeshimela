"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Camera, MapPin, Calendar, Clock, ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const handleScroll = () => {
    document.querySelector("#galleries")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Swadeshi Mela 2026"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0202]/80 via-[#1A0404]/60 to-[#1A0404]/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0202]/70 via-transparent to-[#0F0202]/40" />
      </div>

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent z-10" />

      {/* Decorative corner ornaments */}
      <div className="absolute top-20 left-4 md:left-10 text-[#C9A227]/30 text-6xl pointer-events-none select-none">❋</div>
      <div className="absolute top-20 right-4 md:right-10 text-[#C9A227]/30 text-6xl pointer-events-none select-none">❋</div>

      {/* Main Content */}
      <div
        className={`relative z-10 text-center px-4 w-full max-w-5xl mx-auto transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Top badge */}
        <div className="inline-flex items-center gap-2 bg-[#C9A227]/15 border border-[#C9A227]/40 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse" />
          <span className="text-[#E0B840] text-xs font-semibold tracking-widest uppercase">
            Free Photo Access
          </span>
        </div>

        {/* Hindi Main Title */}
        <h1
          className="font-devanagari font-black text-[#FFF8E7] leading-tight mb-2"
          style={{
            fontSize: "clamp(3rem, 12vw, 7rem)",
            textShadow: "0 4px 30px rgba(0,0,0,0.8)",
          }}
        >
          <span className="text-gold-gradient shimmer-gold">स्वदेशी</span>
          <br />
          <span className="text-[#FFF8E7]">मेला</span>
        </h1>

        {/* Year */}
        <p
          className="font-serif font-bold text-[#C9A227] tracking-[0.3em] mb-1"
          style={{ fontSize: "clamp(1.2rem, 4vw, 2rem)" }}
        >
          2026
        </p>

        {/* Tagline */}
        <p
          className="font-devanagari text-[#F0CC5A] font-medium mb-8"
          style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.3rem)" }}
        >
          {siteConfig.tagline}
        </p>

        {/* Ornamental divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-[#C9A227]" />
          <span className="text-[#C9A227] text-xl">✦</span>
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-[#C9A227]" />
        </div>

        {/* Event Details Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <div className="flex items-center gap-2 bg-[#1A0404]/70 backdrop-blur-sm border border-[#C9A227]/30 rounded-full px-4 py-2">
            <Calendar size={15} className="text-[#C9A227]" />
            <span className="font-devanagari text-[#FFF8E7] text-sm font-medium">
              {siteConfig.event.dateHindi}
            </span>
          </div>
          <div className="flex items-center gap-2 bg-[#1A0404]/70 backdrop-blur-sm border border-[#C9A227]/30 rounded-full px-4 py-2">
            <MapPin size={15} className="text-[#C9A227]" />
            <span className="font-devanagari text-[#FFF8E7] text-sm font-medium">
              {siteConfig.event.venueHindi}
            </span>
          </div>
          <div className="flex items-center gap-2 bg-[#1A0404]/70 backdrop-blur-sm border border-[#C9A227]/30 rounded-full px-4 py-2">
            <Clock size={15} className="text-[#C9A227]" />
            <span className="font-devanagari text-[#FFF8E7] text-sm font-medium">
              {siteConfig.event.timingHindi}
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleScroll}
            className="group flex items-center gap-3 bg-gradient-to-r from-[#C9A227] to-[#E0B840] hover:from-[#E0B840] hover:to-[#F0CC5A] text-[#1A0404] font-bold px-8 py-4 rounded-full text-base transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#C9A227]/30"
          >
            <Camera size={20} />
            Explore Photo Galleries
          </button>
          <div className="flex items-center gap-2 text-[#D4B896] text-sm">
            <span className="w-5 h-px bg-[#C9A227]" />
            <span className="font-devanagari">{siteConfig.event.inauguralHindi}</span>
            <span className="w-5 h-px bg-[#C9A227]" />
          </div>
        </div>

        {/* Organizer tag */}
        <p className="mt-10 text-[#D4B896] text-xs tracking-wider uppercase">
          Organised by{" "}
          <span className="text-[#E0B840] font-semibold font-devanagari">
            {siteConfig.organizer.primaryFull}
          </span>
          {" "}•{" "}
          <span className="font-devanagari">{siteConfig.organizer.secondary}</span>
        </p>
      </div>

      {/* Diya decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 h-28 overflow-hidden">
        <Image
          src="/diya-bg.png"
          alt="Decorative diyas"
          fill
          loading="eager"
          className="object-cover object-top opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0404] via-[#1A0404]/40 to-transparent" />
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScroll}
        aria-label="Scroll to galleries"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-[#C9A227]/70 hover:text-[#C9A227] transition-colors"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ChevronDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
}
