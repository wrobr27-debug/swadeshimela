"use client";

import Image from "next/image";
import { ExternalLink, Camera, Lock } from "lucide-react";
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
      className={`group relative flex flex-col rounded-2xl overflow-hidden border transition-all duration-300 cursor-pointer card-glow
        ${isAll
          ? "border-[#C9A227]/60 bg-gradient-to-br from-[#4A0E0E]/80 to-[#1A0404]/90"
          : "border-[#C9A227]/25 bg-gradient-to-br from-[#2E0808]/80 to-[#1A0404]/90"
        }
        ${hasLink ? "hover:-translate-y-1 hover:border-[#C9A227]/60" : "opacity-80 cursor-default"}
      `}
      onClick={handleClick}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Thumbnail */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={gallery.thumbnail || "/gallery-thumb.png"}
          alt={gallery.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A0404]/80 via-transparent to-transparent" />

        {/* Day badge */}
        <div
          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase
            ${isAll
              ? "bg-[#C9A227] text-[#1A0404]"
              : "bg-[#6B1414]/90 text-[#F0CC5A] border border-[#C9A227]/40"
            }
          `}
        >
          {isAll ? "All Photos" : `Day ${gallery.day}`}
        </div>

        {/* Lock / External indicator */}
        <div className="absolute top-3 right-3">
          {hasLink ? (
            <div className="w-7 h-7 rounded-full bg-[#C9A227]/20 backdrop-blur-sm border border-[#C9A227]/40 flex items-center justify-center">
              <ExternalLink size={12} className="text-[#C9A227]" />
            </div>
          ) : (
            <div className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center">
              <Lock size={11} className="text-[#D4B896]" />
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        {/* Date & Day */}
        <p className="font-devanagari text-[#C9A227] text-xs font-semibold mb-1">
          {gallery.dayName}
        </p>
        <p className="text-[#D4B896] text-[11px] mb-2">{gallery.date}</p>

        {/* Title */}
        <h3 className="font-serif text-[#FFF8E7] font-semibold text-base leading-snug mb-2 group-hover:text-[#F0CC5A] transition-colors">
          {gallery.title}
        </h3>

        {/* Description */}
        <p className="text-[#D4B896] text-xs leading-relaxed mb-3 flex-1">
          {gallery.description}
        </p>

        {/* Cultural Program */}
        <div className="flex items-start gap-2 bg-[#C9A227]/8 border border-[#C9A227]/20 rounded-lg p-2.5 mb-4">
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
              <Lock size={13} />
              <span>Coming Soon</span>
            </>
          )}
        </div>
      </div>

      {/* Gold top glow on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </article>
  );
}
