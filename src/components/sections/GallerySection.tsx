"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { Images, FolderOpen } from "lucide-react";

export function GallerySection() {
  return (
    <section id="galleries" className="py-16 md:py-24 relative">
      {/* Ambient backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_20%,#3B0808/40,transparent)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_80%,#2A0606/50,transparent)] pointer-events-none" />

      <Container className="relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#C9A227]/10 border border-[#C9A227]/25 rounded-full px-4 py-1.5 mb-5">
            <Images size={13} className="text-[#C9A227]" />
            <span className="text-[#C9A227] text-xs font-semibold tracking-[0.2em] uppercase">Photo Archive</span>
          </div>

          <h2
            className="font-serif font-bold text-[#FFF8E7] mb-2"
            style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}
          >
            Day-Wise Galleries
          </h2>
          <p className="font-devanagari text-[#C9A227] mb-3" style={{ fontSize: "clamp(1rem, 2.5vw, 1.3rem)" }}>
            फोटो गैलरी
          </p>
          <p className="text-[#D4B896]/80 text-sm max-w-xl mx-auto leading-relaxed">
            Browse day-wise photo collections. Each card opens directly in Google Drive — free to view, download & share.
          </p>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-[#C9A227]/40" />
            <span className="text-[#C9A227]/60 text-sm">✦</span>
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-[#C9A227]/40" />
          </div>
        </motion.div>

        {/* How-to notice */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-10 flex items-start gap-3 bg-[#C9A227]/8 border border-[#C9A227]/20 rounded-2xl p-4 max-w-xl mx-auto"
        >
          <FolderOpen size={16} className="text-[#C9A227] mt-0.5 shrink-0" />
          <p className="text-[#D4B896] text-xs leading-relaxed">
            <span className="text-[#E0B840] font-semibold">How to access: </span>
            Click any gallery card → opens in Google Drive → browse, download or share your favourite moments. New galleries are added daily after the event.
          </p>
        </motion.div>

        <GalleryGrid />
      </Container>
    </section>
  );
}
