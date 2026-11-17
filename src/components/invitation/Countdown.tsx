"use client";

import { useEffect, useState } from "react";
import { KambojaBlossom } from "@/components/ui/BalineseOrnaments";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

type CountdownValues = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isReached: boolean;
};

function getRemainingTime(targetMs: number, now: number): CountdownValues {
  const diff = targetMs - now;
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isReached: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isReached: false,
  };
}

type CountdownProps = {
  targetIsoDate: string;
  targetDisplay: string;
  onGoToLocation: () => void;
};

export function Countdown({
  targetIsoDate,
  targetDisplay,
  onGoToLocation,
}: CountdownProps) {
  const [remaining, setRemaining] = useState<CountdownValues | null>(null);

  useEffect(() => {
    const targetMs = new Date(targetIsoDate).getTime();
    const update = () => setRemaining(getRemainingTime(targetMs, Date.now()));
    const initTimer = window.setTimeout(update, 0);
    const interval = window.setInterval(update, 1000);
    return () => {
      window.clearTimeout(initTimer);
      window.clearInterval(interval);
    };
  }, [targetIsoDate]);

  const units = [
    { label: "Hari", value: remaining ? String(remaining.days).padStart(2, "0") : "--" },
    { label: "Jam", value: remaining ? String(remaining.hours).padStart(2, "0") : "--" },
    { label: "Menit", value: remaining ? String(remaining.minutes).padStart(2, "0") : "--" },
    { label: "Detik", value: remaining ? String(remaining.seconds).padStart(2, "0") : "--" },
  ];

  return (
    <section
      id="countdown"
      aria-labelledby="countdown-heading"
      className="border-y border-[#C59B43]/25 bg-[#F2EBD9] px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-4xl text-center">
        <RevealOnScroll delayMs={0}>
          <KambojaBlossom className="mx-auto mb-2.5 h-6 w-6 text-[#835C16]" />
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#835C16]">
            Hitung Mundur Acara
          </p>
          <h2
            id="countdown-heading"
            className="mt-1.5 font-serif text-[clamp(1.85rem,3.6vw,2.65rem)] font-semibold leading-tight text-[#241D15]"
          >
            Menuju Hari Bahagia
          </h2>
          <p className="mt-1.5 text-sm text-[#5C4F3E]">{targetDisplay}</p>
        </RevealOnScroll>

        {remaining?.isReached ? (
          <RevealOnScroll delayMs={120}>
            <div className="mx-auto mt-8 max-w-lg rounded-2xl border border-[#C59B43]/50 bg-[#FAF6EE] p-6">
              <p className="font-serif text-2xl font-semibold text-[#241D15]">
                Hari Bahagia Telah Tiba
              </p>
            </div>
          </RevealOnScroll>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-5">
            {units.map((unit, index) => (
              <RevealOnScroll key={unit.label} delayMs={index * 90}>
                <div className="rounded-2xl border border-[#C59B43]/45 bg-[#FAF6EE] px-4 py-5 sm:py-6">
                  <div className="font-serif text-4xl font-semibold tabular-nums text-[#241D15] sm:text-5xl">
                    {unit.value}
                  </div>
                  <div className="mt-1.5 text-xs font-semibold uppercase tracking-wider text-[#835C16]">
                    {unit.label}
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        )}

        <RevealOnScroll delayMs={280}>
          <div className="mt-9 flex justify-center">
            <button
              type="button"
              onClick={onGoToLocation}
              className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-[#3D2E1E] px-6 py-3 text-sm font-semibold text-[#FAF6EE] transition-colors hover:bg-[#241D15] cursor-pointer sm:text-base"
            >
              Lihat Peta Lokasi
            </button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
