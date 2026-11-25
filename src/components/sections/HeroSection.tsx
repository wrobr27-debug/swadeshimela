"use client";

import { motion } from "framer-motion";
import { Camera, MapPin, Calendar, Clock, ChevronDown } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: "easeOut" as const },
  }),
};

export function HeroSection() {
  const handleScroll = () => {
    document.querySelector("#galleries")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Swadeshi Mela 2026"
          fill
          priority
          className="object-cover object-center scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0101]/75 via-[#140303]/55 to-[#1A0404]/98" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0101]/60 via-transparent to-[#0A0101]/40" />
      </div>

      {/* Top gold line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A227] to-transparent z-10" />

      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#C9A227]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#7B1818]/20 blur-[120px] pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto pt-24 pb-32">

        {/* Live badge */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2.5 bg-[#C9A227]/12 border border-[#C9A227]/35 rounded-full px-5 py-2 mb-8 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9A227] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C9A227]" />
          </span>
          <span className="text-[#E0B840] text-xs font-semibold tracking-[0.2em] uppercase">
            Free Photo Access · Swadeshi Mela 2026
          </span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-devanagari font-black text-[#FFF8E7] leading-[1.05] mb-4"
          style={{
            fontSize: "clamp(3.2rem, 13vw, 7.5rem)",
            textShadow: "0 8px 40px rgba(0,0,0,0.6)",
          }}
        >
          <span
            style={{
              background: "linear-gradient(135deg, #F8E090 0%, #C9A227 40%, #F0CC5A 70%, #C9A227 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            स्वदेशी
          </span>
          <br />
          <span className="text-[#FFF8E7]">मेला</span>
        </motion.h1>

        {/* Year + tagline */}
        <motion.div custom={2} variants={fadeUp} initial="hidden" animate="visible">
          <p
            className="font-serif font-bold text-[#C9A227] tracking-[0.5em] mb-3"
            style={{ fontSize: "clamp(1rem, 3vw, 1.6rem)" }}
          >
            2 0 2 6
          </p>
          <p
            className="font-devanagari text-[#D4B896] font-normal mb-8"
            style={{ fontSize: "clamp(0.85rem, 2vw, 1.1rem)", letterSpacing: "0.05em" }}
          >
            {siteConfig.tagline}
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-[#C9A227]/60" />
          <span className="text-[#C9A227] text-base tracking-widest">✦ ✦ ✦</span>
          <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-[#C9A227]/60" />
        </motion.div>

        {/* Event detail pills */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {[
            { icon: Calendar, text: siteConfig.event.dateHindi },
            { icon: MapPin,   text: siteConfig.event.venueHindi },
            { icon: Clock,    text: siteConfig.event.timingHindi },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 bg-black/30 backdrop-blur-md border border-[#C9A227]/25 rounded-full px-4 py-2.5"
            >
              <Icon size={14} className="text-[#C9A227] shrink-0" />
              <span className="font-devanagari text-[#FFF8E7] text-sm">{text}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={handleScroll}
            className="group relative overflow-hidden flex items-center gap-3 bg-[#C9A227] hover:bg-[#E0B840] text-[#1A0404] font-bold px-9 py-4 rounded-full text-base transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl shadow-[#C9A227]/25"
          >
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
            <Camera size={19} />
            Explore Photo Galleries
          </button>

          <p className="font-devanagari text-[#D4B896]/80 text-xs">
            {siteConfig.event.inauguralHindi}
          </p>
        </motion.div>

        {/* Organizer */}
        <motion.p
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-10 text-[#D4B896]/60 text-[11px] tracking-[0.15em] uppercase"
        >
          Organised by &nbsp;
          <span className="text-[#C9A227]/90 font-semibold font-devanagari not-uppercase">
            {siteConfig.organizer.primaryFull}
          </span>
          &nbsp;·&nbsp;
          <span className="font-devanagari">{siteConfig.organizer.secondary}</span>
        </motion.p>
      </div>

      {/* Diya strip */}
      <div className="absolute bottom-0 inset-x-0 h-32 overflow-hidden z-10">
        <Image
          src="/diya-bg.png"
          alt="Decorative diyas"
          fill
          loading="eager"
          className="object-cover object-top opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0404] via-[#1A0404]/50 to-transparent" />
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScroll}
        aria-label="Scroll to galleries"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-[#C9A227]/50 hover:text-[#C9A227] transition-colors"
      >
        <span className="text-[9px] uppercase tracking-[0.25em]">Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </button>
    </section>
  );
}
