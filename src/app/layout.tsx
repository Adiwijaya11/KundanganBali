import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://kundanganbali.com";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "KundanganBali — Jasa Undangan Digital Pernikahan & Otonan Bali",
    template: "%s | KundanganBali",
  },
  description:
    "Jasa pembuatan undangan digital modern di Denpasar, Bali untuk Pernikahan, Pawiwahan, Otonan, Ulang Tahun, dan Syukuran. Cepat, elegan, dan personal.",
  keywords: [
    "kundangan bali",
    "kundanganbali",
    "undangan bali",
    "undangan digital bali",
    "undangan pernikahan digital bali",
    "undangan otonan digital",
    "undangan pawiwahan online",
    "jasa undangan digital denpasar",
    "undangan web bali",
  ],
  verification: {
    google:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ||
      "cB74Qi9NWQJ7HjR-LrVmsluiUgggkspHl1pnDvxSMRc",
  },
  authors: [{ name: "VizzioCraft Studio", url: SITE_URL }],
  creator: "VizzioCraft Studio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "KundanganBali",
    title: "KundanganBali — Jasa Undangan Digital Pernikahan & Otonan Bali",
    description:
      "Buat undangan digital elegan khas Bali dan modern dengan tautan khusus, musik latar, RSVP, serta sapaan nama tamu otomatis.",
    images: [
      {
        url: "/images/landing/hero-bg.jpg",
        width: 1200,
        height: 675,
        alt: "KundanganBali Studio Undangan Digital Bali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KundanganBali — Jasa Undangan Digital Pernikahan & Otonan Bali",
    description:
      "Jasa pembuatan undangan digital modern di Denpasar, Bali untuk Pernikahan, Pawiwahan, dan Otonan.",
    images: ["/images/landing/hero-bg.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${cormorant.variable} ${jakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF6EE] text-[#241D15] font-sans selection:bg-[#835C16]/15 selection:text-[#241D15]">
        {children}
      </body>
    </html>
  );
}
