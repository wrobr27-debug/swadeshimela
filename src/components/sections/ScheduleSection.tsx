import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { schedule } from "@/config/galleries";
import { Music } from "lucide-react";

export function ScheduleSection() {
  return (
    <section id="schedule" className="py-16 md:py-24 relative bg-[#0F0202]/80">
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227]/40 to-transparent" />

      <Container className="relative z-10">
        <SectionHeading
          hindi="सांस्कृतिक संध्या कार्यक्रम"
          english="Evening Cultural Program"
          subtitle="Every evening at 7:00 PM — Live performances celebrating India's rich cultural heritage."
        />

        {/* Time badge */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 bg-[#C9A227]/15 border border-[#C9A227]/40 rounded-full px-5 py-2">
            <Music size={15} className="text-[#C9A227]" />
            <span className="font-devanagari text-[#E0B840] font-semibold text-sm">
              समय : संध्या 7:00 बजे
            </span>
          </div>
        </div>

        {/* Schedule timeline */}
        <div className="max-w-3xl mx-auto space-y-3">
          {schedule.map((day, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-gradient-to-r from-[#2E0808]/60 to-[#1A0404]/60 border border-[#C9A227]/20 rounded-2xl p-4 hover:border-[#C9A227]/50 hover:bg-[#2E0808]/80 transition-all group"
            >
              {/* Date pill */}
              <div className="shrink-0 min-w-[90px]">
                <div className="bg-gradient-to-br from-[#6B1414] to-[#3B0808] border border-[#C9A227]/30 rounded-xl px-3 py-2 text-center">
                  <p className="text-[#F0CC5A] font-bold text-sm">{day.date}</p>
                  <p className="font-devanagari text-[#D4B896] text-xs">{day.dayName}</p>
                </div>
              </div>

              {/* Programs */}
              <div className="flex-1 pt-1">
                {day.program.map((prog, j) => (
                  <div key={j} className="flex items-center gap-2 mb-1 last:mb-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] shrink-0" />
                    <p className="font-devanagari text-[#FFF8E7] text-sm group-hover:text-[#F0CC5A] transition-colors">
                      {prog}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
