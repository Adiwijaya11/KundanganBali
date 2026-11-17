import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

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
  title: {
    default: "KundanganBali — Undangan Pernikahan Digital Elegan Khas Bali",
    template: "%s | KundanganBali",
  },
  description:
    "Layanan pembuatan undangan pernikahan digital modern, minimalis, dan elegan dengan sentuhan estetika Bali.",
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
