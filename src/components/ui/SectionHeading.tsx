import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  hindi?: string;
  english: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

export function SectionHeading({
  hindi,
  english,
  subtitle,
  className,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10", centered && "text-center", className)}>
      {hindi && (
        <p className="font-devanagari text-sm font-semibold tracking-widest text-[#E0B840] uppercase mb-2">
          {hindi}
        </p>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FFF8E7] mb-3">
        {english}
      </h2>
      {/* Gold ornamental line */}
      <div className="flex items-center justify-center gap-3 mt-4">
        <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-[#C9A227]" />
        <span className="text-[#C9A227] text-lg">✦</span>
        <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-[#C9A227]" />
      </div>
      {subtitle && (
        <p className="mt-4 text-[#D4B896] text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
