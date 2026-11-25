"use client";

import { useState, useEffect } from "react";
import { galleries } from "@/config/galleries";
import { GalleryCard } from "@/components/gallery/GalleryCard";
import { DayStories } from "@/components/gallery/DayStories";
import { isValidUrl } from "@/lib/utils";
import type { Gallery } from "@/types/gallery";

/** Returns today's date string in IST (UTC+5:30) as "YYYY-MM-DD" */
function getTodayIST(): string {
  const now = new Date();
  const istOffset = 330 * 60 * 1000;
  const istNow = new Date(now.getTime() + istOffset);
  return istNow.toISOString().split("T")[0];
}

export function GalleryGrid() {
  const [todayIST, setTodayIST] = useState<string | null>(null);

  useEffect(() => {
    setTodayIST(getTodayIST());
  }, []);

  // Skeleton during SSR
  if (!todayIST) {
    return (
      <div className="space-y-6">
        {/* Stories skeleton */}
        <div className="flex gap-5 px-4 py-3">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col items-center gap-1.5 shrink-0">
              <div className="w-[62px] h-[62px] rounded-full bg-[#2E0808]/60 animate-pulse" />
              <div className="w-10 h-2 rounded bg-[#2E0808]/40 animate-pulse" />
            </div>
          ))}
        </div>
        {/* Cards skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {[1, 2].map((i) => (
            <div key={i} className="rounded-2xl border border-white/5 bg-[#2E0808]/40 aspect-[4/3] animate-pulse" />
          ))}
        </div>
      </div>
    );
  }

  const dayGalleries: Gallery[] = galleries.filter(
    (g) => g.id !== "all-photos" && g.startDate <= todayIST
  );

  const upcoming: Gallery[] = galleries.filter(
    (g) => g.id !== "all-photos" && g.startDate > todayIST
  );

  const allPhotos = galleries.find((g) => g.id === "all-photos");
  const showAllPhotos = allPhotos && allPhotos.startDate <= todayIST;

  return (
    <div className="space-y-8">

      {/* ── Instagram-style Stories bar ── */}
      <DayStories galleries={galleries} todayIST={todayIST} />

      {/* Thin separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9A227]/20 to-transparent -mt-4" />

      {/* Day-wise cards */}
      {dayGalleries.length === 0 ? (
        <div className="text-center py-16 text-[#D4B896]">
          <p className="text-4xl mb-3">📸</p>
          <p className="font-devanagari text-lg">मेला अभी शुरू नहीं हुआ है</p>
          <p className="text-sm mt-1">Galleries will appear as each day begins.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {dayGalleries.map((gallery, i) => (
            <GalleryCard key={gallery.id} gallery={gallery} index={i} />
          ))}
        </div>
      )}

      {/* Upcoming days teaser */}
      {upcoming.length > 0 && (
        <div className="border border-white/5 rounded-2xl p-5 bg-[#1A0404]/40 backdrop-blur-sm">
          <p className="text-[#C9A227] text-xs uppercase tracking-widest font-semibold mb-3 text-center">
            Coming Up
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {upcoming.map((g) => (
              <div
                key={g.id}
                className="flex items-center gap-2 bg-white/4 border border-white/8 rounded-full px-4 py-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]/40" />
                <span className="text-[#D4B896] text-xs font-medium">{g.title}</span>
                <span className="text-[#D4B896]/40 text-xs">· {g.date}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Photos — after Day 7 */}
      {showAllPhotos && allPhotos && (
        <div className="mt-6">
          <div
            className="relative rounded-2xl overflow-hidden border border-[#C9A227]/40 bg-gradient-to-r from-[#4A0E0E]/80 to-[#2E0808]/90 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 group cursor-pointer hover:border-[#C9A227]/70 transition-all"
            onClick={() => {
              if (isValidUrl(allPhotos.driveUrl)) {
                window.open(allPhotos.driveUrl, "_blank", "noopener,noreferrer");
              }
            }}
          >
            {/* Instagram gradient top line */}
            <div
              className="absolute top-0 inset-x-0 h-0.5"
              style={{ background: "linear-gradient(90deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)" }}
            />
            <div
              className="shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center text-3xl shadow-xl group-hover:scale-110 transition-transform"
              style={{ background: "linear-gradient(135deg, #f09433, #dc2743, #bc1888)" }}
            >
              ✦
            </div>
            <div className="flex-1 text-center md:text-left">
              <span
                className="inline-block text-white text-xs font-bold px-3 py-0.5 rounded-full mb-2"
                style={{ background: "linear-gradient(90deg, #f09433, #dc2743, #bc1888)" }}
              >
                Complete Collection
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#FFF8E7] mb-1 group-hover:text-[#F0CC5A] transition-colors">
                All 7 Days — Every Moment
              </h3>
              <p className="font-devanagari text-[#D4B896] text-sm">{allPhotos.date}</p>
            </div>
            <div className="shrink-0">
              <div
                className="flex items-center gap-2 text-white font-bold px-6 py-3 rounded-xl transition-opacity hover:opacity-90"
                style={{ background: "linear-gradient(90deg, #f09433, #dc2743, #bc1888)" }}
              >
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
