"use client";

import Image from "next/image";
import {
  CalendarMotifIcon,
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
      className="relative flex min-h-[calc(100svh-69px)] items-center overflow-hidden bg-[#FAF6EE] px-5 py-6 sm:px-8 sm:py-10 lg:px-12 lg:py-16"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-7 sm:gap-9 lg:grid-cols-12 lg:gap-14">
        <RevealOnScroll
          forceShow={isOpened}
          delayMs={180}
          className="order-1 flex justify-center lg:order-2 lg:col-span-5 lg:justify-end"
        >
          <figure className="relative w-[176px] sm:w-[240px] lg:w-[350px]">
            <PadmaMandalaWatermark className="absolute top-1/2 left-1/2 -z-0 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 text-[#835C16]/[0.09] sm:h-[340px] sm:w-[340px] lg:h-[440px] lg:w-[440px]" />
            <PepatranCorner className="absolute -top-2.5 -left-2.5 z-10 h-7 w-7 text-[#835C16] sm:h-9 sm:w-9" />
            <PepatranCorner className="absolute -top-2.5 -right-2.5 z-10 h-7 w-7 rotate-90 text-[#835C16] sm:h-9 sm:w-9" />
            <PepatranCorner className="absolute -bottom-1 left-0 z-10 hidden h-7 w-7 -rotate-90 text-[#835C16]/75 sm:block sm:h-8 sm:w-8" />
            <PepatranCorner className="absolute right-0 -bottom-1 z-10 hidden h-7 w-7 rotate-180 text-[#835C16]/75 sm:block sm:h-8 sm:w-8" />

            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-full rounded-b-2xl border border-[#C59B43]/60 bg-[#F2EBD9] p-2 shadow-[0_14px_34px_-18px_rgba(36,29,21,0.28)] sm:p-2.5">
              <div className="relative h-full w-full overflow-hidden rounded-t-full rounded-b-xl bg-[#EAE0C8]">
                <Image
                  src={hero.coverImage}
                  alt={hero.coverImageAlt}
                  fill
                  priority
                  sizes="(max-width: 640px) 196px, (max-width: 1024px) 250px, 350px"
                  className="object-cover"
                />
              </div>
            </div>

            <figcaption className="mt-2.5 text-center font-serif text-xs italic text-[#5C4F3E] sm:text-sm">
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
