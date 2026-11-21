"use client";

import { useState, useEffect } from "react";
import { Menu, X, Camera } from "lucide-react";
import { Container } from "@/components/ui/Container";

const navLinks = [
  { label: "Photo Galleries", href: "#galleries" },
  { label: "Schedule", href: "#schedule" },
  { label: "Competitions", href: "#competitions" },
  { label: "About", href: "#about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1A0404]/95 backdrop-blur-md border-b border-[#C9A227]/30 shadow-lg shadow-black/40"
          : "bg-transparent"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          >
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#C9A227] to-[#E0B840] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Camera size={18} className="text-[#1A0404]" />
            </div>
            <div>
              <p className="font-devanagari font-bold text-[#F0CC5A] text-sm leading-tight">
                स्वदेशी मेला
              </p>
              <p className="font-sans-en text-[10px] text-[#D4B896] tracking-wider uppercase leading-tight">
                2026 · Bilaspur
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="px-4 py-2 text-sm text-[#D4B896] hover:text-[#F0CC5A] transition-colors font-medium relative group cursor-pointer"
              >
                {link.label}
                <span className="absolute bottom-1 left-4 right-4 h-px bg-[#C9A227] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </button>
            ))}
            <button
              onClick={() => handleNav("#galleries")}
              className="ml-3 px-5 py-2 bg-[#C9A227] hover:bg-[#E0B840] text-[#1A0404] font-semibold text-sm rounded-full transition-all hover:scale-105 active:scale-95"
            >
              View Galleries
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen((p) => !p)}
            className="md:hidden p-2 rounded-lg text-[#C9A227] hover:bg-[#C9A227]/10 transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#1A0404]/98 backdrop-blur-md border-t border-[#C9A227]/20 px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="w-full text-left px-4 py-3 text-[#D4B896] hover:text-[#F0CC5A] hover:bg-[#C9A227]/10 rounded-lg transition-all font-medium"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => handleNav("#galleries")}
              className="w-full px-4 py-3 bg-[#C9A227] hover:bg-[#E0B840] text-[#1A0404] font-bold rounded-xl transition-colors"
            >
              View Photo Galleries
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
