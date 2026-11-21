import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "स्वदेशी मेला 2026 – Photo Gallery | Bilaspur",
  description:
    "Explore cherished moments from Swadeshi Mela 2026 – 20 to 26 November at Science College Ground, Bilaspur. Browse day-wise photo galleries.",
  keywords: [
    "Swadeshi Mela 2026",
    "स्वदेशी मेला",
    "Bilaspur",
    "बिलासपुर",
    "CBMD",
    "photo gallery",
    "mela photos",
  ],
  openGraph: {
    title: "स्वदेशी मेला 2026 – Photo Gallery",
    description:
      "Browse day-wise photo galleries from Swadeshi Mela 2026, Bilaspur.",
    type: "website",
    locale: "hi_IN",
    images: [{ url: "/hero.png", width: 1200, height: 630, alt: "Swadeshi Mela 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "स्वदेशी मेला 2026 – Photo Gallery",
    description: "Browse day-wise photo galleries from Swadeshi Mela 2026, Bilaspur.",
    images: ["/hero.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="hi" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-[#1A0404] text-[#FFF8E7] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
