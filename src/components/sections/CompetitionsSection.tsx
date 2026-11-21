import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { competitions } from "@/config/galleries";
import { Trophy, Users, Clock, Calendar } from "lucide-react";

export function CompetitionsSection() {
  return (
    <section id="competitions" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#3B0808_0%,transparent_70%)] pointer-events-none opacity-40" />

      <Container className="relative z-10">
        <SectionHeading
          hindi="प्रतियोगिताएँ"
          english="Competitions"
          subtitle="Multiple exciting competitions across all days — open to all ages. Win prizes and celebrate India's talent!"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {competitions.map((comp, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-[#2E0808]/70 to-[#1A0404]/80 border border-[#C9A227]/20 rounded-2xl p-4 hover:border-[#C9A227]/50 hover:bg-[#2E0808]/80 transition-all group"
            >
              {/* Icon + Title */}
              <div className="flex items-start gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-[#C9A227]/15 border border-[#C9A227]/30 flex items-center justify-center shrink-0 group-hover:bg-[#C9A227]/25 transition-colors">
                  <Trophy size={16} className="text-[#C9A227]" />
                </div>
                <h3 className="font-devanagari font-bold text-[#FFF8E7] text-sm leading-tight pt-1 group-hover:text-[#F0CC5A] transition-colors">
                  {comp.name}
                </h3>
              </div>

              {/* Details */}
              <div className="space-y-1.5 pl-12">
                <div className="flex items-center gap-2">
                  <Calendar size={12} className="text-[#C9A227] shrink-0" />
                  <span className="text-[#D4B896] text-xs">{comp.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={12} className="text-[#C9A227] shrink-0" />
                  <span className="font-devanagari text-[#D4B896] text-xs">{comp.time}</span>
                </div>
                {(comp.ageGroup || comp.note) && (
                  <div className="flex items-start gap-2">
                    <Users size={12} className="text-[#C9A227] mt-0.5 shrink-0" />
                    <span className="font-devanagari text-[#D4B896] text-xs">
                      {comp.ageGroup || comp.note}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
