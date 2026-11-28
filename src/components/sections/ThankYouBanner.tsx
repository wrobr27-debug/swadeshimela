"use client";

import { motion } from "framer-motion";
import { Heart, Camera, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function ThankYouBanner() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2E0808]/80 via-[#1A0404] to-[#2E0808]/60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,#C9A227/8,transparent)]" />

      {/* Top & bottom gold borders */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto">

          {/* Top badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border border-[#C9A227]/40 bg-[#C9A227]/10 backdrop-blur-sm"
          >
            <Star size={12} className="text-[#C9A227] fill-[#C9A227]" />
            <span className="text-[#E0B840] text-xs font-bold tracking-[0.25em] uppercase">
              Swadeshi Mela 2026 — Concluded
            </span>
            <Star size={12} className="text-[#C9A227] fill-[#C9A227]" />
          </motion.div>

          {/* Hindi headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-devanagari font-black text-[#FFF8E7] leading-tight mb-3"
            style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)" }}
          >
            🙏 धन्यवाद, बिलासपुर!
          </motion.h2>

          {/* English subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-[#C9A227] font-semibold mb-6"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.4rem)" }}
          >
            Thank You for Making Swadeshi Mela 2026 Unforgettable
          </motion.p>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-[#C9A227]/50" />
            <span className="text-[#C9A227] text-lg">✦ ✦ ✦</span>
            <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-[#C9A227]/50" />
          </motion.div>

          {/* Message */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="font-devanagari text-[#D4B896] leading-relaxed mb-4"
            style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)" }}
          >
            स्वदेशी मेला 2026 — 20 से 26 नवंबर तक, 7 यादगार दिन, हजारों अनमोल पल।
            <br />
            आप सभी के उत्साह और प्रेम ने इस मेले को सफल बनाया।
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-[#D4B896]/80 text-sm leading-relaxed mb-10"
          >
            Seven days of culture, craft, competition & celebration — every moment is preserved in our galleries.
            <br />
            Browse, download and cherish your memories forever. 📸
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="grid grid-cols-3 gap-4 max-w-sm mx-auto mb-10"
          >
            {[
              { value: "7", label: "Days" },
              { value: "8", label: "Galleries" },
              { value: "11", label: "Events" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1 bg-[#C9A227]/8 border border-[#C9A227]/20 rounded-2xl py-4"
              >
                <span
                  className="font-serif font-black text-3xl"
                  style={{
                    background: "linear-gradient(135deg, #F8E090, #C9A227)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {value}
                </span>
                <span className="text-[#D4B896] text-xs font-medium">{label}</span>
              </div>
            ))}
          </motion.div>

          {/* Made with love */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <div className="flex items-center gap-2 text-[#D4B896]/70 text-xs">
              <Camera size={13} className="text-[#C9A227]" />
              <span>All memories archived & free to access</span>
            </div>
            <span className="hidden sm:block text-[#C9A227]/30">·</span>
            <div className="flex items-center gap-1.5 text-[#D4B896]/70 text-xs">
              <span>Organised with</span>
              <Heart size={11} className="text-[#9B2222] fill-[#9B2222]" />
              <span>by CBMD & स्वदेशी जागरण मंच</span>
            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
