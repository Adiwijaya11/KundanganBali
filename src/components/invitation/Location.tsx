"use client";

import { useState } from "react";
import {
  CalendarMotifIcon,
  ClockMotifIcon,
  KambojaBlossom,
  LocationMotifIcon,
  PepatranCorner,
} from "@/components/ui/BalineseOrnaments";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { CeremonyEvent, InvitationData } from "@/types/invitation";

type LocationProps = {
  location: InvitationData["location"];
  primaryEvent?: CeremonyEvent;
};

export function Location({ location, primaryEvent }: LocationProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopyAddress() {
    try {
      await navigator.clipboard.writeText(location.address);
    } catch {
      // Clipboard API may be unavailable in restricted contexts
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2500);
  }

  return (
    <section
      id="lokasi"
      aria-labelledby="location-heading"
      className="border-y border-[#C59B43]/25 bg-[#F2EBD9] px-4 py-16 sm:px-8 sm:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-5xl">
        <RevealOnScroll delayMs={0}>
          <div className="text-center">
            <KambojaBlossom className="mx-auto mb-2 h-5 w-5 text-[#835C16]" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#835C16]">
              Lokasi Acara
            </p>
            <h2
              id="location-heading"
              className="mt-1.5 font-serif text-[clamp(1.75rem,3.6vw,2.65rem)] font-semibold leading-tight text-[#241D15]"
            >
              Peta &amp; Petunjuk Arah
            </h2>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delayMs={120}>
          <div className="relative mt-9 overflow-hidden rounded-2xl border border-[#C59B43]/50 bg-[#FAF6EE] p-4 shadow-[0_16px_38px_-24px_rgba(36,29,21,0.28)] sm:p-6 lg:p-7">
            <PepatranCorner className="absolute top-2.5 left-2.5 z-10 h-6 w-6 text-[#835C16]/75" />
            <PepatranCorner className="absolute top-2.5 right-2.5 z-10 h-6 w-6 rotate-90 text-[#835C16]/75" />

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center lg:gap-8">
              <div className="flex flex-col justify-between space-y-5 px-1 pt-2 lg:col-span-5 lg:pt-0">
                <div className="space-y-4">
                  {primaryEvent ? (
                    <>
                      <div className="flex items-start gap-3">
                        <CalendarMotifIcon className="mt-1 shrink-0 text-[#835C16]" />
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-[#835C16]">
                            Hari / Tanggal
                          </p>
                          <p className="mt-0.5 font-serif text-lg font-semibold text-[#241D15]">
                            {primaryEvent.date}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <ClockMotifIcon className="mt-1 shrink-0 text-[#835C16]" />
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-[#835C16]">
                            Waktu
                          </p>
                          <p className="mt-0.5 font-serif text-lg font-semibold text-[#241D15]">
                            {primaryEvent.time}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : null}

                  <div className="flex items-start gap-3">
                    <LocationMotifIcon className="mt-1 shrink-0 text-[#835C16]" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#835C16]">
                        Tempat
                      </p>
                      <p className="mt-0.5 font-serif text-lg font-semibold text-[#241D15]">
                        {location.venueName}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-[#5C4F3E]">
                        {location.address}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2.5 pt-1 sm:flex-row lg:flex-col xl:flex-row">
                  <a
                    href={location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[46px] flex-1 items-center justify-center rounded-lg bg-[#3D2E1E] px-5 py-2.5 text-sm font-semibold text-[#FAF6EE] transition-colors hover:bg-[#241D15]"
                  >
                    Petunjuk Arah
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyAddress}
                    className="inline-flex min-h-[46px] flex-1 items-center justify-center rounded-lg border border-[#835C16]/45 bg-[#F2EBD9]/60 px-5 py-2.5 text-sm font-semibold text-[#241D15] transition-colors hover:bg-[#F2EBD9] cursor-pointer"
                  >
                    {copied ? "Alamat Tersalin" : "Salin Alamat"}
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="overflow-hidden rounded-xl border border-[#C59B43]/40 bg-[#EAE0C8]">
                  <iframe
                    title={`Peta Lokasi ${location.venueName}`}
                    src={location.mapsEmbedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="aspect-[4/3] w-full border-0 sepia-[0.18] contrast-[0.98] sm:aspect-[16/10]"
                  />
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
