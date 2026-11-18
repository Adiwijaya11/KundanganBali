"use client";

import { useState, type MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  KambojaBlossom,
  PadmaDivider,
  PadmaMandalaWatermark,
  PatraCrownOrnament,
  PepatranCorner,
} from "@/components/ui/BalineseOrnaments";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

type CardDesignId = "classic-bali" | "dark-luxury" | "botanical-modern";

type CardTemplate = {
  id: CardDesignId;
  label: string;
  styleTag: string;
};

const CARD_TEMPLATES: CardTemplate[] = [
  {
    id: "classic-bali",
    label: "Klasik Bali · Warm Ivory",
    styleTag: "Ornamen Ukiran",
  },
  {
    id: "dark-luxury",
    label: "Dark Luxury · Obsidian Gold",
    styleTag: "Elegan Malam",
  },
  {
    id: "botanical-modern",
    label: "Botanical Arch · Sage Editorial",
    styleTag: "Minimalis Modern",
  },
];

export function InvitationShowcase3D() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [tilt, setTilt] = useState({ rx: -4, ry: 8 });

  const activeCard = CARD_TEMPLATES[activeIndex];

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({
      rx: Number((-y * 16).toFixed(2)),
      ry: Number((x * 18).toFixed(2)),
    });
  }

  function handleMouseLeave() {
    setTilt({ rx: -4, ry: 8 });
  }

  return (
    <section
      aria-labelledby="showcase-3d-heading"
      className="relative overflow-hidden bg-[#F7F6F2] px-5 py-16 text-zinc-900 sm:px-8 sm:py-24 lg:px-12"
    >
      {/* Ambient blobs behind the 3D stage */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-12 left-1/4 h-72 w-72 rounded-full bg-[#C59B43]/20 blur-3xl" />
        <div className="absolute right-1/5 bottom-10 h-80 w-80 rounded-full bg-[#2F4538]/15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
        {/* Left: Copy + 3 Distinct Design Switcher */}
        <div className="lg:col-span-5">
          <RevealOnScroll>
            <span className="inline-flex items-center rounded-full border border-[#2F4538]/20 bg-white px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#2F4538]">
              Pratinjau 3 Gaya Desain
            </span>
            <h2
              id="showcase-3d-heading"
              className="mt-3 font-serif text-[clamp(2rem,3.8vw,3rem)] font-semibold leading-tight text-zinc-900"
            >
              Satu Platform, Ragam Karakter Desain Berbeda
            </h2>
            <p className="mt-3.5 text-sm leading-relaxed text-zinc-600 sm:text-base">
              Dari nuansa adat Bali klasik, kemewahan hitam-emas, hingga gaya
              botanical modern. Arahkan kursor pada kartu untuk efek 3D.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delayMs={120}>
            <div className="mt-7 space-y-2.5">
              {CARD_TEMPLATES.map((tpl, index) => {
                const isSelected = index === activeIndex;
                return (
                  <button
                    key={tpl.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "border-[#2F4538] bg-[#2F4538] font-semibold text-[#F7F6F2] shadow-sm"
                        : "border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 hover:bg-[#EFECE4]/60"
                    }`}
                  >
                    <div className="min-w-0">
                      <span className="block truncate">{tpl.label}</span>
                      <span
                        className={`block text-[11px] font-normal ${
                          isSelected ? "text-[#D7E2D9]" : "text-zinc-500"
                        }`}
                      >
                        {tpl.styleTag}
                      </span>
                    </div>
                    <span
                      className={`shrink-0 text-xs ${
                        isSelected ? "text-[#D7E2D9]" : "text-zinc-400"
                      }`}
                    >
                      0{index + 1}
                    </span>
                  </button>
                );
              })}
            </div>
          </RevealOnScroll>
        </div>

        {/* Right: 3D Perspective Interactive Card Stage */}
        <div className="flex justify-center lg:col-span-7">
          <RevealOnScroll delayMs={160} className="w-full max-w-[380px]">
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ perspective: "1200px" }}
              className="relative py-6"
            >
              {/* Back-stacked shadow card 1 */}
              <div
                aria-hidden="true"
                style={{
                  transform: `rotateX(${tilt.rx * 0.6}deg) rotateY(${
                    tilt.ry * 0.6 - 10
                  }deg) translate3d(-24px, 14px, -60px)`,
                }}
                className="pointer-events-none absolute inset-x-4 top-8 bottom-8 hidden rounded-3xl border border-[#C59B43]/35 bg-[#EFECE4]/90 shadow-lg transition-transform duration-300 ease-out motion-reduce:transform-none sm:block"
              />

              {/* Back-stacked shadow card 2 */}
              <div
                aria-hidden="true"
                style={{
                  transform: `rotateX(${tilt.rx * 0.8}deg) rotateY(${
                    tilt.ry * 0.8 + 8
                  }deg) translate3d(22px, -10px, -30px)`,
                }}
                className="pointer-events-none absolute inset-x-3 top-7 bottom-7 hidden rounded-3xl border border-[#2F4538]/20 bg-white/85 shadow-lg transition-transform duration-300 ease-out motion-reduce:transform-none sm:block"
              />

              {/* DESIGN 01: KLASIK BALI (Warm Ivory & Ukiran) */}
              {activeCard.id === "classic-bali" && (
                <div
                  style={{
                    transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
                    transformStyle: "preserve-3d",
                  }}
                  className="relative rounded-3xl border border-[#C59B43]/65 bg-[#F2EBD9] p-4 shadow-[0_30px_60px_-24px_rgba(24,24,27,0.38)] transition-transform duration-200 ease-out motion-reduce:transform-none sm:p-5"
                >
                  <span
                    style={{ transform: "translateZ(36px)" }}
                    className="absolute -top-3 left-6 z-20 rounded-full border border-[#C59B43]/50 bg-[#FAF6EE] px-3 py-1 text-[11px] font-semibold text-[#835C16] shadow-md"
                  >
                    Klasik Bali
                  </span>

                  <div className="relative flex aspect-[4/5] flex-col items-center justify-between overflow-hidden rounded-2xl border border-[#C59B43]/60 bg-[#FAF6EE] px-6 py-8 text-center">
                    <PadmaMandalaWatermark className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 text-[#835C16]/[0.14] animate-[spin_70s_linear_infinite] motion-reduce:animate-none" />
                    <PepatranCorner className="pointer-events-none absolute top-2.5 left-2.5 h-6 w-6 text-[#835C16]/85" />
                    <PepatranCorner className="pointer-events-none absolute top-2.5 right-2.5 h-6 w-6 rotate-90 text-[#835C16]/85" />
                    <PepatranCorner className="pointer-events-none absolute bottom-2.5 left-2.5 h-6 w-6 -rotate-90 text-[#835C16]/85" />
                    <PepatranCorner className="pointer-events-none absolute right-2.5 bottom-2.5 h-6 w-6 rotate-180 text-[#835C16]/85" />

                    <div
                      style={{ transform: "translateZ(20px)" }}
                      className="relative flex flex-col items-center"
                    >
                      <PatraCrownOrnament className="h-5 w-28 text-[#835C16]/85" />
                      <KambojaBlossom className="mt-1.5 h-6 w-6 text-[#835C16]" />
                      <p className="mt-1.5 font-serif text-base italic font-medium text-[#835C16]">
                        Om Swastiastu
                      </p>
                    </div>

                    <div
                      style={{ transform: "translateZ(28px)" }}
                      className="relative w-full"
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#5C4F3E]">
                        Undangan Upacara Tiga Oton
                      </p>
                      <h3 className="mt-2 font-serif text-3xl font-semibold leading-tight text-[#241D15]">
                        I Made Kuru Baya
                      </h3>
                      <PadmaDivider className="mx-auto my-4 max-w-[160px]" />
                      <p className="text-xs font-medium text-[#5C4F3E]">
                        Rabu, 25 November 2026 · 15:00 WITA
                      </p>
                    </div>

                    <div
                      style={{ transform: "translateZ(34px)" }}
                      className="relative"
                    >
                      <Link
                        href="/otonan/kuru-baya"
                        className="inline-flex min-h-[42px] items-center justify-center rounded-lg bg-[#3D2E1E] px-5 py-2 text-xs font-semibold text-[#FAF6EE] shadow-md transition-colors hover:bg-[#241D15]"
                      >
                        Buka Demo Otonan
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* DESIGN 02: DARK LUXURY (Obsidian & Gold Monogram) */}
              {activeCard.id === "dark-luxury" && (
                <div
                  style={{
                    transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
                    transformStyle: "preserve-3d",
                  }}
                  className="relative rounded-3xl border border-[#D4AF37]/45 bg-[#141210] p-4 shadow-[0_30px_60px_-24px_rgba(0,0,0,0.6)] transition-transform duration-200 ease-out motion-reduce:transform-none sm:p-5"
                >
                  <span
                    style={{ transform: "translateZ(36px)" }}
                    className="absolute -top-3 left-6 z-20 rounded-full border border-[#D4AF37]/60 bg-[#1F1B16] px-3 py-1 text-[11px] font-semibold text-[#E5C158] shadow-md"
                  >
                    Dark Luxury
                  </span>

                  <div className="relative flex aspect-[4/5] flex-col items-center justify-between overflow-hidden rounded-2xl border border-[#D4AF37]/35 bg-gradient-to-b from-[#1D1A16] via-[#151310] to-[#1C1813] px-6 py-8 text-center">
                    {/* Subtle gold radial glow */}
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute top-1/3 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-2xl"
                    />

                    {/* Minimalist Geometric Monogram Crest */}
                    <div
                      style={{ transform: "translateZ(24px)" }}
                      className="relative flex flex-col items-center"
                    >
                      <div className="flex h-14 w-14 rotate-45 items-center justify-center border border-[#D4AF37]/70 bg-[#141210]">
                        <span className="-rotate-45 font-serif text-lg font-semibold tracking-wider text-[#E5C158]">
                          R&amp;S
                        </span>
                      </div>
                      <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#D4AF37]/80">
                        The Wedding Of
                      </p>
                    </div>

                    <div
                      style={{ transform: "translateZ(30px)" }}
                      className="relative w-full"
                    >
                      <h3 className="font-serif text-[2rem] font-normal italic leading-tight text-[#FAF6EE]">
                        Raka &amp; Saraswati
                      </h3>
                      <div className="mx-auto my-4 flex items-center justify-center gap-2">
                        <span className="h-px w-10 bg-[#D4AF37]/50" />
                        <span className="h-1.5 w-1.5 rotate-45 bg-[#D4AF37]" />
                        <span className="h-px w-10 bg-[#D4AF37]/50" />
                      </div>
                      <p className="text-xs tracking-wide text-zinc-300">
                        20 · 12 · 2026 · Ubud, Bali
                      </p>
                    </div>

                    <div
                      style={{ transform: "translateZ(36px)" }}
                      className="relative"
                    >
                      <Link
                        href="/demo"
                        className="inline-flex min-h-[42px] items-center justify-center rounded-full border border-[#D4AF37]/70 bg-[#D4AF37] px-6 py-2 text-xs font-semibold text-[#141210] shadow-md transition-colors hover:bg-[#E5C158]"
                      >
                        Lihat Katalog Demo
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* DESIGN 03: BOTANICAL ARCH (Sage & Photo Editorial) */}
              {activeCard.id === "botanical-modern" && (
                <div
                  style={{
                    transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
                    transformStyle: "preserve-3d",
                  }}
                  className="relative rounded-3xl border border-[#2F4538]/25 bg-white p-4 shadow-[0_30px_60px_-24px_rgba(47,69,56,0.28)] transition-transform duration-200 ease-out motion-reduce:transform-none sm:p-5"
                >
                  <span
                    style={{ transform: "translateZ(36px)" }}
                    className="absolute -top-3 left-6 z-20 rounded-full bg-[#2F4538] px-3 py-1 text-[11px] font-semibold text-[#F7F6F2] shadow-md"
                  >
                    Botanical Modern
                  </span>

                  <div className="relative flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-2xl bg-[#F2F5F1] p-5 text-left">
                    {/* Top Arch Photo Window */}
                    <div
                      style={{ transform: "translateZ(20px)" }}
                      className="relative mx-auto aspect-[16/10] w-full overflow-hidden rounded-t-full rounded-b-xl border border-[#2F4538]/15 bg-[#EFECE4]"
                    >
                      <Image
                        src="/images/landing/hero-bg.jpg"
                        alt="Tema Botanical Modern KundanganBali"
                        fill
                        sizes="320px"
                        className="object-cover"
                      />
                    </div>

                    <div
                      style={{ transform: "translateZ(28px)" }}
                      className="mt-4"
                    >
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2F4538]">
                        Save The Date · Custom
                      </p>
                      <h3 className="mt-1 font-serif text-2xl font-semibold leading-snug text-zinc-900">
                        Undangan Acara Spesial Anda
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-zinc-600">
                        Layout editorial bersih dengan sapaan personal tamu dan
                        integrasi WhatsApp.
                      </p>
                    </div>

                    <div
                      style={{ transform: "translateZ(34px)" }}
                      className="mt-4 flex items-center justify-between gap-2 border-t border-[#2F4538]/15 pt-3.5"
                    >
                      <span className="text-[11px] font-medium text-[#2F4538]">
                        kundanganbali.com
                      </span>
                      <Link
                        href="/kontak"
                        className="inline-flex min-h-[38px] items-center justify-center rounded-full bg-[#2F4538] px-4 py-1.5 text-xs font-semibold text-[#F7F6F2] transition-colors hover:bg-[#23352A]"
                      >
                        Pesan Desain
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
