"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FallingKambojaPetals,
  KambojaBlossom,
  PadmaDivider,
  PadmaMandalaWatermark,
  PatraCrownOrnament,
  PepatranCorner,
} from "@/components/ui/BalineseOrnaments";

type OpeningProps = {
  greeting: string;
  subtitle: string;
  coupleNickname: string;
  dateLocationSummary: string;
  guestName?: string;
  isOpened: boolean;
  onOpenInvitation: () => void;
};

export function Opening({
  greeting,
  subtitle,
  coupleNickname,
  dateLocationSummary,
  guestName,
  isOpened,
  onOpenInvitation,
}: OpeningProps) {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const rafId = window.requestAnimationFrame(() => {
      setEntered(true);
    });
    return () => window.cancelAnimationFrame(rafId);
  }, []);

  return (
    <section
      id="opening"
      aria-labelledby="opening-title"
      aria-hidden={isOpened}
      className={`fixed inset-0 z-40 flex items-center justify-center overflow-hidden bg-[#F2EBD9] px-5 py-10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none sm:px-8 ${
        isOpened
          ? "pointer-events-none -translate-y-10 scale-[1.02] opacity-0"
          : "translate-y-0 scale-100 opacity-100"
      }`}
    >
      {/* Textured Balinese paper backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/invitation/bali-ornament-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-[#F2EBD9]/35" />
      </div>

      <FallingKambojaPetals />

      <PadmaMandalaWatermark
        className={`absolute h-[520px] w-[520px] text-[#835C16]/[0.14] transition-all duration-1000 ease-out motion-reduce:transition-none sm:h-[680px] sm:w-[680px] ${
          entered ? "scale-100 opacity-100" : "scale-90 opacity-0"
        } animate-[spin_75s_linear_infinite] motion-reduce:animate-none`}
      />

      <div
        className={`relative w-full max-w-lg rounded-2xl border border-[#C59B43]/55 bg-[#FAF6EE]/95 px-6 py-11 text-center shadow-[0_22px_48px_-24px_rgba(36,29,21,0.32)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:transform-none sm:px-12 sm:py-14 ${
          entered
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-4 scale-[0.97] opacity-0"
        }`}
      >
        <PepatranCorner className="absolute top-3 left-3 text-[#835C16]/80" />
        <PepatranCorner className="absolute top-3 right-3 rotate-90 text-[#835C16]/80" />
        <PepatranCorner className="absolute bottom-3 left-3 -rotate-90 text-[#835C16]/80" />
        <PepatranCorner className="absolute right-3 bottom-3 rotate-180 text-[#835C16]/80" />

        <div
          style={{ transitionDelay: "120ms" }}
          className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
            entered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <PatraCrownOrnament className="mx-auto mb-2 text-[#835C16]/85" />
          <KambojaBlossom className="mx-auto mb-3 h-7 w-7 text-[#835C16]" />
          <p className="font-serif text-lg italic font-medium text-[#835C16] sm:text-xl">
            {greeting}
          </p>
        </div>

        <div
          style={{ transitionDelay: "240ms" }}
          className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
            entered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#5C4F3E]">
            {subtitle}
          </p>
          <h2
            id="opening-title"
            className="mt-2.5 font-serif text-[clamp(2.2rem,5.5vw,3.4rem)] font-semibold leading-[1.08] text-[#241D15]"
          >
            {coupleNickname}
          </h2>
        </div>

        <div
          style={{ transitionDelay: "360ms" }}
          className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
            entered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <PadmaDivider className="mx-auto my-6 max-w-xs" />
          {guestName ? (
            <div className="mb-3">
              <p className="text-xs uppercase tracking-[0.14em] text-[#5C4F3E]">
                Kepada Yth. Bapak/Ibu/Saudara/i
              </p>
              <p className="mt-1 font-serif text-xl font-semibold text-[#241D15]">
                {guestName}
              </p>
            </div>
          ) : null}
          <p className="text-xs text-[#5C4F3E] sm:text-sm">
            {dateLocationSummary}
          </p>
        </div>

        <div
          style={{ transitionDelay: "480ms" }}
          className={`mt-8 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
            entered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <button
            type="button"
            tabIndex={isOpened ? -1 : 0}
            onClick={onOpenInvitation}
            className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-[#3D2E1E] px-8 py-3 text-sm font-semibold text-[#FAF6EE] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#241D15] active:translate-y-0 cursor-pointer sm:text-base"
          >
            Buka Undangan
          </button>
        </div>
      </div>
    </section>
  );
}
