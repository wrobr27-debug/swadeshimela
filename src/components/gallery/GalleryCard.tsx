"use client";

import { ExternalLink, Camera, Clock } from "lucide-react";
import type { Gallery } from "@/types/gallery";
import { isValidUrl } from "@/lib/utils";

interface GalleryCardProps {
  gallery: Gallery;
  index: number;
}

export function GalleryCard({ gallery, index }: GalleryCardProps) {
  const hasLink = isValidUrl(gallery.driveUrl);
  const isAll = gallery.id === "all-photos";

  const handleClick = () => {
    if (hasLink) {
      window.open(gallery.driveUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <article
      className={`group relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 card-glow
        ${isAll
          ? "border-[#C9A227]/60 bg-gradient-to-br from-[#4A0E0E]/80 to-[#1A0404]/90"
          : "border-[#C9A227]/25 bg-gradient-to-br from-[#2E0808]/80 to-[#1A0404]/90"
        }
        ${hasLink ? "cursor-pointer hover:-translate-y-1 hover:border-[#C9A227]/60" : "cursor-default opacity-80"}
      `}
      onClick={handleClick}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* ── Day Visual (text-based, no image) ── */}
      <div
        className={`relative w-full aspect-[4/3] flex flex-col items-center justify-center overflow-hidden
          ${isAll
            ? "bg-gradient-to-br from-[#6B1414] via-[#4A0E0E] to-[#2E0808]"
            : "bg-gradient-to-br from-[#3B0808] via-[#2E0808] to-[#1A0404]"
          }
        `}
      >
        {/* Background ornament */}
        <div className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none">
          <span className="text-[#C9A227] font-serif" style={{ fontSize: "12rem", lineHeight: 1 }}>
            {isAll ? "✦" : gallery.day}
          </span>
        </div>

        {/* Gold top border */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />

        {/* Corner ornaments */}
        <span className="absolute top-3 left-3 text-[#C9A227]/30 text-xl">✦</span>
        <span className="absolute top-3 right-3 text-[#C9A227]/30 text-xl">✦</span>
        <span className="absolute bottom-3 left-3 text-[#C9A227]/30 text-xl">✦</span>
        <span className="absolute bottom-3 right-3 text-[#C9A227]/30 text-xl">✦</span>

        {/* Main content */}
        <div className="relative z-10 text-center px-4">
          {isAll ? (
            <>
              <p className="text-[#C9A227] text-xs font-semibold tracking-[0.3em] uppercase mb-2">
                स्वदेशी मेला
              </p>
              <p
                className="font-serif font-black text-[#F0CC5A] leading-none mb-2"
                style={{ fontSize: "clamp(1.8rem, 5vw, 2.5rem)" }}
              >
                All
              </p>
              <p
                className="font-serif font-black text-[#FFF8E7] leading-none"
                style={{ fontSize: "clamp(1.8rem, 5vw, 2.5rem)" }}
              >
                Photos
              </p>
              <div className="mt-3 flex items-center justify-center gap-2">
                <div className="h-px w-8 bg-[#C9A227]/60" />
                <span className="text-[#C9A227] text-xs">7 Days</span>
                <div className="h-px w-8 bg-[#C9A227]/60" />
              </div>
            </>
          ) : (
            <>
              <p className="text-[#C9A227] text-xs font-semibold tracking-[0.4em] uppercase mb-1">
                Day
              </p>
              <p
                className="font-serif font-black leading-none mb-3"
                style={{
                  fontSize: "clamp(4rem, 10vw, 6rem)",
                  background: "linear-gradient(135deg, #F0CC5A, #C9A227, #F0CC5A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {gallery.day}
              </p>
              <p className="font-devanagari text-[#D4B896] text-xs">{gallery.date}</p>
            </>
          )}
        </div>

        {/* External link badge */}
        {hasLink && (
          <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-[#C9A227]/20 backdrop-blur-sm border border-[#C9A227]/40 flex items-center justify-center">
            <ExternalLink size={12} className="text-[#C9A227]" />
          </div>
        )}

        {/* Gold bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A227]/40 to-transparent" />
      </div>

      {/* ── Card Content ── */}
      <div className="flex flex-col flex-1 p-4">
        {/* Day name */}
        <p className="font-devanagari text-[#C9A227] text-xs font-semibold mb-1">
          {gallery.dayName}
        </p>

        {/* Title */}
        <h3 className="font-serif text-[#FFF8E7] font-semibold text-lg leading-snug mb-3 group-hover:text-[#F0CC5A] transition-colors">
          {gallery.title}
        </h3>

        {/* Cultural program chip */}
        <div className="flex items-start gap-2 bg-[#C9A227]/8 border border-[#C9A227]/20 rounded-lg p-2.5 mb-4 flex-1">
          <Camera size={12} className="text-[#C9A227] mt-0.5 shrink-0" />
          <p className="font-devanagari text-[#E0B840] text-xs leading-relaxed">
            {gallery.culturalProgram}
          </p>
        </div>

        {/* CTA */}
        <div
          className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all
            ${hasLink
              ? "bg-[#C9A227] hover:bg-[#E0B840] text-[#1A0404] group-hover:shadow-md group-hover:shadow-[#C9A227]/20"
              : "bg-[#2E0808] border border-[#C9A227]/20 text-[#D4B896]"
            }
          `}
        >
          {hasLink ? (
            <>
              <span>View Gallery</span>
              <ExternalLink size={13} />
            </>
          ) : (
            <>
              <Clock size={13} />
              <span>Photos Coming Soon</span>
            </>
          )}
        </div>
      </div>

      {/* Top glow on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </article>
  );
}
