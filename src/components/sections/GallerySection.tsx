import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { Camera } from "lucide-react";

export function GallerySection() {
  return (
    <section id="galleries" className="py-16 md:py-24 relative">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,#3B0808_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,#2E0808_0%,transparent_60%)] pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          hindi="फोटो गैलरी"
          english="Photo Galleries"
          subtitle="Browse day-wise photo collections from Swadeshi Mela 2026. Each gallery opens in Google Drive — free for all visitors."
        />

        {/* How-to notice */}
        <div className="mb-8 flex items-start gap-3 bg-[#C9A227]/10 border border-[#C9A227]/30 rounded-xl p-4 max-w-2xl mx-auto">
          <Camera size={18} className="text-[#C9A227] mt-0.5 shrink-0" />
          <div>
            <p className="text-[#E0B840] font-semibold text-sm mb-0.5">How to access your photos</p>
            <p className="text-[#D4B896] text-xs leading-relaxed">
              Click any day&apos;s gallery card → it opens in Google Drive → browse, download or share your favourite moments. Links will be activated after each day&apos;s photos are uploaded.
            </p>
          </div>
        </div>

        <GalleryGrid />
      </Container>
    </section>
  );
}
