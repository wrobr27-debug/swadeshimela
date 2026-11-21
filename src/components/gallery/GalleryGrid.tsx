"use client";

import { galleries } from "@/config/galleries";
import { GalleryCard } from "@/components/gallery/GalleryCard";

export function GalleryGrid() {
  // Show day galleries first, then the "All Photos" card last (featured)
  const dayGalleries = galleries.filter((g) => g.id !== "all-photos");
  const allPhotos = galleries.find((g) => g.id === "all-photos");

  return (
    <div className="space-y-8">
      {/* Day-wise cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {dayGalleries.map((gallery, i) => (
          <GalleryCard key={gallery.id} gallery={gallery} index={i} />
        ))}
      </div>

      {/* All Photos — full-width featured card */}
      {allPhotos && (
        <div className="mt-6">
          <div className="relative rounded-2xl overflow-hidden border border-[#C9A227]/50 bg-gradient-to-r from-[#4A0E0E]/80 to-[#2E0808]/90 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 group cursor-pointer hover:border-[#C9A227]/80 transition-all card-glow"
            onClick={() => {
              if (allPhotos.driveUrl && allPhotos.driveUrl !== "#") {
                window.open(allPhotos.driveUrl, "_blank", "noopener,noreferrer");
              }
            }}
          >
            {/* Gold glow top */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />

            {/* Star badge */}
            <div className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#C9A227] to-[#E0B840] flex items-center justify-center text-3xl md:text-4xl shadow-xl shadow-[#C9A227]/20 group-hover:scale-110 transition-transform">
              ✦
            </div>

            {/* Text */}
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block bg-[#C9A227] text-[#1A0404] text-xs font-bold px-3 py-0.5 rounded-full mb-2">
                Complete Collection
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#FFF8E7] mb-1 group-hover:text-[#F0CC5A] transition-colors">
                All 7 Days — Every Moment
              </h3>
              <p className="font-devanagari text-[#D4B896] text-sm">
                {allPhotos.culturalProgram} · {allPhotos.date}
              </p>
            </div>

            {/* CTA */}
            <div className="shrink-0">
              <div className="flex items-center gap-2 bg-[#C9A227] hover:bg-[#E0B840] text-[#1A0404] font-bold px-6 py-3 rounded-xl transition-colors">
                <span>View All Photos</span>
                <span>→</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
