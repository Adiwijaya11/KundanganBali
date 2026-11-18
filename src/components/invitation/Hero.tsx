"use client";

import Image from "next/image";
import {
  CalendarMotifIcon,
  FallingKambojaPetals,
  KambojaBlossom,
  LocationMotifIcon,
  PadmaDivider,
  PadmaMandalaWatermark,
  PepatranCorner,
} from "@/components/ui/BalineseOrnaments";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { InvitationData } from "@/types/invitation";

type HeroProps = {
  hero: InvitationData["hero"];
  venueName: string;
  eventDateDisplay: string;
  isOpened: boolean;
  onGoToLocation: () => void;
  onOpenDetails: () => void;
};

export function Hero({
  hero,
  venueName,
  eventDateDisplay,
  isOpened,
  onGoToLocation,
  onOpenDetails,
}: HeroProps) {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[calc(100svh-69px)] items-center overflow-hidden bg-[#FAF6EE] px-5 py-7 sm:px-8 sm:py-10 lg:px-12 lg:py-16"
    >
      {/* Subtle Balinese paper & gold embossing backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/invitation/bali-ornament-bg.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(250,246,238,0.68)_0%,rgba(250,246,238,0.42)_65%,rgba(250,246,238,0.28)_100%)]" />
      </div>

      {/* Visible Balinese corner carvings on all screens including mobile */}
      <PepatranCorner className="pointer-events-none absolute top-3 left-3 z-10 h-8 w-8 text-[#835C16]/85 sm:top-5 sm:left-5 sm:h-10 sm:w-10" />
      <PepatranCorner className="pointer-events-none absolute top-3 right-3 z-10 h-8 w-8 rotate-90 text-[#835C16]/85 sm:top-5 sm:right-5 sm:h-10 sm:w-10" />
      <PepatranCorner className="pointer-events-none absolute bottom-3 left-3 z-10 h-8 w-8 -rotate-90 text-[#835C16]/85 sm:bottom-5 sm:left-5 sm:h-10 sm:w-10" />
      <PepatranCorner className="pointer-events-none absolute right-3 bottom-3 z-10 h-8 w-8 rotate-180 text-[#835C16]/85 sm:right-5 sm:bottom-5 sm:h-10 sm:w-10" />

      <FallingKambojaPetals className="opacity-85" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-14">
        <RevealOnScroll
          forceShow={isOpened}
          delayMs={180}
          className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end"
        >
          <figure className="relative w-[224px] sm:w-[270px] lg:w-[345px]">
            {/* Rotating sacred Padma mandala behind the arch frame */}
            <PadmaMandalaWatermark className="absolute top-1/2 left-1/2 -z-0 h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 text-[#835C16]/[0.16] sm:h-[360px] sm:w-[360px] lg:h-[440px] lg:w-[440px]" />

            {/* Outer champagne-gold double matte arch frame */}
            <div className="relative rounded-t-full rounded-b-3xl border border-[#C59B43]/70 bg-gradient-to-b from-[#F2EBD9] to-[#EAE0C8] p-2.5 shadow-[0_20px_42px_-20px_rgba(36,29,21,0.34)] sm:p-3.5">
              {/* Bottom corner pepatran flourishes aligned cleanly with rectangular base */}
              <PepatranCorner className="pointer-events-none absolute bottom-2 left-2 z-10 h-6 w-6 -rotate-90 text-[#835C16]/75 sm:h-7 sm:w-7" />
              <PepatranCorner className="pointer-events-none absolute right-2 bottom-2 z-10 h-6 w-6 rotate-180 text-[#835C16]/75 sm:h-7 sm:w-7" />

              {/* Inner ivory mat & hairline gold rim */}
              <div className="rounded-t-full rounded-b-2xl border border-[#C59B43]/45 bg-[#FAF6EE] p-1.5 sm:p-2">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-full rounded-b-xl bg-[#EAE0C8] ring-1 ring-[#835C16]/15 ring-inset">
                  <Image
                    src={hero.coverImage}
                    alt={hero.coverImageAlt}
                    fill
                    priority
                    sizes="(max-width: 640px) 224px, (max-width: 1024px) 270px, 345px"
                    className="object-cover object-[center_20%]"
                  />
                </div>
              </div>

              {/* Centered Kamboja seal at bottom of frame */}
              <span
                aria-hidden="true"
                className="absolute -bottom-3.5 left-1/2 z-20 inline-flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-[#C59B43]/70 bg-[#FAF6EE] text-[#835C16] shadow-xs"
              >
                <KambojaBlossom className="h-4 w-4" />
              </span>
            </div>

            <figcaption className="mt-5 text-center font-serif text-xs italic text-[#5C4F3E] sm:text-sm">
              {hero.caption}
            </figcaption>
          </figure>
        </RevealOnScroll>

        <div className="order-2 flex flex-col items-center text-center lg:order-1 lg:col-span-7 lg:items-start lg:text-left">
          <RevealOnScroll forceShow={isOpened} delayMs={80}>
            <p className="font-serif text-base italic font-medium text-[#835C16] sm:text-xl">
              {hero.greeting}
            </p>
            <h1
              id="hero-heading"
              className="mt-1 font-serif text-[clamp(2.15rem,5.2vw,4.1rem)] font-semibold leading-[1.08] tracking-tight text-[#241D15]"
            >
              {hero.displayTitle}
            </h1>
          </RevealOnScroll>

          <RevealOnScroll
            forceShow={isOpened}
            delayMs={200}
            className="w-full max-w-md"
          >
            <p className="mt-2 text-sm font-medium text-[#5C4F3E] sm:text-base">
              {hero.subline}
            </p>
            {hero.parentsLine ? (
              <p className="mt-1 text-sm text-[#5C4F3E]">{hero.parentsLine}</p>
            ) : null}
            <PadmaDivider className="mx-auto my-4 w-full max-w-xs lg:mx-0 lg:my-5 lg:max-w-md" />
          </RevealOnScroll>

          <RevealOnScroll
            forceShow={isOpened}
            delayMs={320}
            className="w-full max-w-lg"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-[#241D15] lg:justify-start">
              <span className="inline-flex items-center gap-1.5 font-medium">
                <CalendarMotifIcon className="shrink-0 text-[#835C16]" />
                {eventDateDisplay}
              </span>
              <span className="inline-flex items-center gap-1.5 font-medium">
                <LocationMotifIcon className="shrink-0 text-[#835C16]" />
                {venueName}
              </span>
            </div>
          </RevealOnScroll>

          <RevealOnScroll
            forceShow={isOpened}
            delayMs={440}
            className="w-full sm:w-auto"
          >
            <div className="mt-6 flex flex-row items-center justify-center gap-3 lg:mt-8 lg:justify-start">
              <button
                type="button"
                onClick={onGoToLocation}
                className="inline-flex min-h-[46px] flex-1 items-center justify-center rounded-lg bg-[#3D2E1E] px-4 py-2.5 text-sm font-semibold text-[#FAF6EE] shadow-sm transition-colors hover:bg-[#241D15] cursor-pointer sm:flex-none sm:px-6 sm:text-base"
              >
                Lokasi Acara
              </button>

              <button
                type="button"
                onClick={onOpenDetails}
                className="inline-flex min-h-[46px] flex-1 items-center justify-center rounded-lg border border-[#835C16]/45 bg-transparent px-4 py-2.5 text-sm font-semibold text-[#241D15] transition-colors hover:bg-[#F2EBD9] cursor-pointer sm:flex-none sm:px-6 sm:text-base"
              >
                Detail Acara
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
