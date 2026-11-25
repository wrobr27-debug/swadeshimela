"use client";

import { motion } from "framer-motion";
import { Camera, CalendarDays, Trophy, Unlock } from "lucide-react";
import { Container } from "@/components/ui/Container";

const stats = [
  { icon: CalendarDays, value: "7",    label: "Days of Culture",    suffix: "" },
  { icon: Camera,       value: "5000", label: "Photos & Memories",  suffix: "+" },
  { icon: Trophy,       value: "11",   label: "Competitions",        suffix: "" },
  { icon: Unlock,       value: "100",  label: "Free Access",         suffix: "%" },
];

export function StatsStrip() {
  return (
    <section className="relative py-0 overflow-hidden">
      {/* Gold border top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/50 to-transparent" />
      {/* Gold border bottom */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/50 to-transparent" />

      <div className="bg-gradient-to-r from-[#2E0808]/80 via-[#1A0404]/90 to-[#2E0808]/80 backdrop-blur-sm">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#C9A227]/10">
            {stats.map(({ icon: Icon, value, label, suffix }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center justify-center gap-2 py-7 px-4 group"
              >
                <div className="w-9 h-9 rounded-xl bg-[#C9A227]/10 border border-[#C9A227]/20 flex items-center justify-center mb-1 group-hover:bg-[#C9A227]/20 transition-colors">
                  <Icon size={16} className="text-[#C9A227]" />
                </div>
                <p
                  className="font-serif font-black text-[#F0CC5A] leading-none"
                  style={{
                    fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
                    background: "linear-gradient(135deg, #F8E090, #C9A227)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {value}{suffix}
                </p>
                <p className="text-[#D4B896] text-xs text-center leading-tight font-medium tracking-wide">
                  {label}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
