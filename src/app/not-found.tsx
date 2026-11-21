import Link from "next/link";
import { Camera } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-festival flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-[#C9A227] text-8xl font-bold font-serif mb-4">404</div>
        <h1 className="font-devanagari text-2xl text-[#FFF8E7] mb-2">पृष्ठ नहीं मिला</h1>
        <p className="text-[#D4B896] mb-8">The page you are looking for does not exist.</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#C9A227] hover:bg-[#E0B840] text-[#1A0404] font-bold px-6 py-3 rounded-full transition-all hover:scale-105"
        >
          <Camera size={18} />
          Back to Galleries
        </Link>
      </div>
    </div>
  );
}
