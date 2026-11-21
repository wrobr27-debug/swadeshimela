import { Camera, MapPin, Calendar, Clock, Heart } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer id="about" className="relative overflow-hidden bg-[#0F0202] border-t border-[#C9A227]/20">
      {/* Top gold border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />

      <Container>
        <div className="py-12 md:py-16">
          {/* Main footer grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A227] to-[#E0B840] flex items-center justify-center">
                  <Camera size={18} className="text-[#1A0404]" />
                </div>
                <div>
                  <p className="font-devanagari font-bold text-[#F0CC5A] text-base leading-tight">
                    स्वदेशी मेला
                  </p>
                  <p className="font-sans-en text-[11px] text-[#D4B896] tracking-wider uppercase">
                    2026 · Photo Archive
                  </p>
                </div>
              </div>
              <p className="text-[#D4B896] text-sm leading-relaxed font-devanagari">
                {siteConfig.event.dateHindi} • {siteConfig.event.venueHindi}
              </p>
              <p className="text-[#D4B896] text-xs mt-2 italic font-devanagari">
                "{siteConfig.tagline}"
              </p>
            </div>

            {/* Event Details */}
            <div>
              <h3 className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider mb-4">
                Event Details
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2 text-[#D4B896]">
                  <Calendar size={15} className="text-[#C9A227] mt-0.5 shrink-0" />
                  <span className="font-devanagari">{siteConfig.event.dateHindi}</span>
                </li>
                <li className="flex items-start gap-2 text-[#D4B896]">
                  <MapPin size={15} className="text-[#C9A227] mt-0.5 shrink-0" />
                  <span className="font-devanagari">{siteConfig.event.venueHindi}</span>
                </li>
                <li className="flex items-start gap-2 text-[#D4B896]">
                  <Clock size={15} className="text-[#C9A227] mt-0.5 shrink-0" />
                  <span className="font-devanagari">{siteConfig.event.timingHindi}</span>
                </li>
              </ul>
            </div>

            {/* Organised By */}
            <div>
              <h3 className="text-[#C9A227] font-semibold text-sm uppercase tracking-wider mb-4">
                Organised By
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <span className="text-[#FFF8E7] font-semibold font-devanagari">
                    {siteConfig.organizer.primaryFull}
                  </span>
                  <p className="text-[#D4B896] text-xs">{siteConfig.organizer.primary}</p>
                </li>
                <li className="text-[#D4B896] font-devanagari">{siteConfig.organizer.secondary}</li>
                <li className="text-[#D4B896] font-devanagari">{siteConfig.organizer.tertiary}</li>
              </ul>
            </div>
          </div>

          {/* Sponsors Row */}
          <div className="border-t border-[#C9A227]/15 pt-8 mb-8">
            <p className="text-center text-[#C9A227] text-xs uppercase tracking-widest mb-5 font-semibold">
              Sponsors &amp; Partners
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              {siteConfig.sponsors.map((s) => (
                <div key={s.name} className="text-center">
                  <span className="text-[#FFF8E7] font-bold text-sm">{s.name}</span>
                  <p className="text-[#D4B896] text-[10px]">
                    {s.type === "sponsor"
                      ? "Sponsor"
                      : s.type === "digital-media"
                      ? "Digital Media Partner"
                      : "Supported By"}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Promo: Developer Bilaspur & Local News ── */}
          <div className="border-t border-[#C9A227]/15 pt-8 mb-8">
            <p className="text-center text-[#C9A227] text-xs uppercase tracking-widest mb-5 font-semibold">
              Powered &amp; Presented By
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Developer Bilaspur */}
              <a
                href={siteConfig.developerBilaspur.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-[#C9A227]/8 hover:bg-[#C9A227]/15 border border-[#C9A227]/25 hover:border-[#C9A227]/60 rounded-2xl p-4 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#C9A227] to-[#E0B840] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-[#C9A227]/20">
                  <span className="text-[#1A0404] font-black text-lg">DB</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#FFF8E7] font-bold text-sm group-hover:text-[#F0CC5A] transition-colors">
                    {siteConfig.developerBilaspur.name}
                  </p>
                  <p className="text-[#D4B896] text-xs">{siteConfig.developerBilaspur.tagline}</p>
                </div>
                <span className="text-[#C9A227] text-lg opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
              </a>

              {/* Local News Bilaspur */}
              <a
                href={siteConfig.localNews.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-[#C9A227]/8 hover:bg-[#C9A227]/15 border border-[#C9A227]/25 hover:border-[#C9A227]/60 rounded-2xl p-4 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#9B2222] to-[#6B1414] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-[#9B2222]/20 border border-[#C9A227]/30">
                  <span className="text-[#F0CC5A] font-black text-sm">LN</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#FFF8E7] font-bold text-sm group-hover:text-[#F0CC5A] transition-colors">
                    {siteConfig.localNews.name}
                  </p>
                  <p className="text-[#D4B896] text-xs font-devanagari">{siteConfig.localNews.tagline}</p>
                </div>
                <span className="text-[#C9A227] text-lg opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-[#C9A227]/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#D4B896]">
            <p>© 2026 Swadeshi Mela, Bilaspur. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <Heart size={12} className="text-[#9B2222] fill-[#9B2222]" /> by{" "}
              <a href={siteConfig.developerBilaspur.url} target="_blank" rel="noopener noreferrer" className="text-[#C9A227] hover:underline ml-1">
                Developer Bilaspur
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
