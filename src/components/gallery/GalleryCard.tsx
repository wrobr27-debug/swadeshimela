"use client";

import { motion } from "framer-motion";
import { ExternalLink, Clock } from "lucide-react";
import type { Gallery } from "@/types/gallery";
import { isValidUrl } from "@/lib/utils";

interface GalleryCardProps {
  gallery: Gallery;
  index: number;
}

export function GalleryCard({ gallery, index }: GalleryCardProps) {
  const hasLink = isValidUrl(gallery.driveUrl);
  const isAll = gallery.id === "all-photos";

  const cardClasses = `group relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-300
    ${isAll
      ? "border-[#C9A227]/50 bg-gradient-to-br from-[#4A0E0E]/90 to-[#1A0404]"
      : "border-white/5 bg-gradient-to-br from-[#2A0707]/90 to-[#120202]"
    }
    ${hasLink
      ? "cursor-pointer hover:-translate-y-2 hover:border-[#C9A227]/50 hover:shadow-2xl hover:shadow-[#C9A227]/10"
      : "cursor-default"
    }`;

  const inner = (
    <>
      {/* ── Day Visual ── */}
      <div
        className={`relative w-full overflow-hidden flex flex-col items-center justify-center
          ${isAll ? "aspect-[4/3]" : "aspect-[4/3]"}
          ${isAll
            ? "bg-gradient-to-br from-[#5C1010] via-[#3B0808] to-[#1A0404]"
            : "bg-gradient-to-br from-[#2E0606] via-[#1E0404] to-[#0F0202]"
          }
        `}
      >
        {/* Subtle radial glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`w-32 h-32 rounded-full blur-3xl ${isAll ? "bg-[#C9A227]/20" : "bg-[#C9A227]/10"}`} />
        </div>

        {/* Watermark number */}
        <div
          className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
          aria-hidden
        >
          <span
            className="font-serif font-black text-[#C9A227]"
            style={{ fontSize: "10rem", lineHeight: 1, opacity: 0.04 }}
          >
            {isAll ? "✦" : gallery.day}
          </span>
        </div>

        {/* Top & bottom gold lines */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/60 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/20 to-transparent" />

        {/* Day number display */}
        <div className="relative z-10 text-center select-none">
          {isAll ? (
            <>
              <p className="text-[#C9A227] text-[10px] font-bold tracking-[0.4em] uppercase mb-3">
                Complete
              </p>
              <p
                className="font-serif font-black leading-none text-[#FFF8E7]"
                style={{ fontSize: "clamp(2rem, 6vw, 3rem)" }}
              >
                All Photos
              </p>
              <div className="mt-3 flex items-center justify-center gap-2">
                <div className="h-px w-6 bg-[#C9A227]/50" />
                <span className="text-[#C9A227] text-[10px] tracking-widest">7 DAYS</span>
                <div className="h-px w-6 bg-[#C9A227]/50" />
              </div>
            </>
          ) : (
            <>
              <p className="text-[#C9A227]/70 text-[10px] font-bold tracking-[0.5em] uppercase mb-1">
                Day
              </p>
              <p
                className="font-serif font-black leading-none"
                style={{
                  fontSize: "clamp(4.5rem, 11vw, 6.5rem)",
                  background: "linear-gradient(160deg, #F8E090 0%, #E0B840 50%, #C9A227 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {gallery.day}
              </p>
              <p className="text-[#D4B896]/60 text-[10px] mt-1 tracking-wide">
                {gallery.date}
              </p>
            </>
          )}
        </div>

        {/* Link badge */}
        {hasLink && (
          <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-[#C9A227]/15 backdrop-blur-sm border border-[#C9A227]/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <ExternalLink size={11} className="text-[#C9A227]" />
          </div>
        )}
      </div>

      {/* ── Card body ── */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        {/* Day label row */}
        <div className="flex items-center justify-between">
          <span className="font-devanagari text-[#C9A227] text-[11px] font-semibold tracking-wide">
            {gallery.dayName}
          </span>
          {hasLink
            ? <span className="text-[10px] text-emerald-400/80 font-medium flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />Live</span>
            : <span className="text-[10px] text-[#D4B896]/50 font-medium">Coming soon</span>
          }
        </div>

        {/* Title */}
        <h3 className="font-serif text-[#FFF8E7] font-semibold text-lg leading-tight group-hover:text-[#F0CC5A] transition-colors duration-200">
          {gallery.title}
        </h3>

        {/* Cultural program */}
        <p className="font-devanagari text-[#D4B896]/70 text-[11px] leading-relaxed flex-1">
          {gallery.culturalProgram}
        </p>

        {/* CTA button */}
        <div
          className={`mt-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200
            ${hasLink
              ? "bg-[#C9A227] text-[#1A0404] group-hover:bg-[#E0B840] group-hover:shadow-lg group-hover:shadow-[#C9A227]/20"
              : "bg-white/4 border border-white/8 text-[#D4B896]/50"
            }
          `}
        >
          {hasLink ? (
            <><span>Open Gallery</span><ExternalLink size={12} /></>
          ) : (
            <><Clock size={12} /><span>Uploading Soon</span></>
          )}
        </div>
      </div>

      {/* Hover glow line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A227] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </>
  );

  if (hasLink) {
    return (
      <motion.a
        href={gallery.driveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClasses}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.07 }}
        aria-label={`View ${gallery.title} photos on Google Drive`}
      >
        {inner}
      </motion.a>
    );
  }

  return (
    <motion.article
      className={cardClasses}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      aria-label={`${gallery.title} — photos coming soon`}
    >
      {inner}
    </motion.article>
  );
}
