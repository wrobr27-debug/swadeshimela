"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Gallery } from "@/types/gallery";
import { isValidUrl } from "@/lib/utils";

interface DayStoriesProps {
  galleries: Gallery[];
  todayIST: string;
}

export function DayStories({ galleries, todayIST }: DayStoriesProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "right" ? 200 : -200, behavior: "smooth" });
  };

  const dayGalleries = galleries.filter((g) => g.id !== "all-photos" && g.startDate <= todayIST);
  if (dayGalleries.length === 0) return null;

  return (
    <div className="relative mb-8 -mx-2 group/stories">
      {/* Scroll left */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-[#1A0404]/80 border border-[#C9A227]/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/stories:opacity-100 transition-opacity shadow-lg"
        aria-label="Scroll left"
      >
        <ChevronLeft size={15} className="text-[#C9A227]" />
      </button>

      {/* Scroll right */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-[#1A0404]/80 border border-[#C9A227]/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover/stories:opacity-100 transition-opacity shadow-lg"
        aria-label="Scroll right"
      >
        <ChevronRight size={15} className="text-[#C9A227]" />
      </button>

      {/* Scrollable row */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto px-4 py-3 scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {dayGalleries.map((g, i) => {
          const hasLink = isValidUrl(g.driveUrl);
          const StoryEl = hasLink ? "a" : "div";
          const storyProps = hasLink
            ? { href: g.driveUrl, target: "_blank", rel: "noopener noreferrer" }
            : {};

          return (
            <StoryEl
              key={g.id}
              {...(storyProps as Record<string, string>)}
              className="flex flex-col items-center gap-1.5 shrink-0 cursor-pointer group/story"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {/* Story ring */}
              <div
                className="p-[2.5px] rounded-full transition-transform duration-200 group-hover/story:scale-105"
                style={{
                  background: hasLink
                    ? "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)"
                    : "linear-gradient(45deg, #3a3a3a, #555)",
                }}
              >
                <div className="p-[2px] rounded-full bg-[#1A0404]">
                  {/* Circle content */}
                  <div
                    className={`w-14 h-14 rounded-full flex flex-col items-center justify-center
                      ${hasLink
                        ? "bg-gradient-to-br from-[#4A0E0E] to-[#2E0808]"
                        : "bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A]"
                      }
                    `}
                  >
                    <span
                      className="font-serif font-black leading-none"
                      style={{
                        fontSize: "1.1rem",
                        background: hasLink
                          ? "linear-gradient(135deg, #F8E090, #C9A227)"
                          : "linear-gradient(135deg, #666, #444)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {g.day}
                    </span>
                  </div>
                </div>
              </div>

              {/* Label */}
              <span
                className={`text-[10px] font-medium text-center leading-tight max-w-[64px] truncate
                  ${hasLink ? "text-[#FFF8E7]" : "text-[#666]"}
                `}
              >
                {hasLink ? g.title : "Soon"}
              </span>

              {/* Live dot */}
              {hasLink && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              )}
            </StoryEl>
          );
        })}
      </div>

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-[#1A0404] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[#1A0404] to-transparent pointer-events-none" />
    </div>
  );
}
