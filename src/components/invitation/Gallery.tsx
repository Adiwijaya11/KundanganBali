"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { KambojaBlossom, PepatranCorner } from "@/components/ui/BalineseOrnaments";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { GalleryPhoto } from "@/types/invitation";

type GalleryProps = {
  items: GalleryPhoto[];
};

export function Gallery({ items }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (selectedIndex === null) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      } else if (event.key === "ArrowRight") {
        setSelectedIndex((prev) =>
          prev === null ? null : (prev + 1) % items.length
        );
      } else if (event.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev === null ? null : (prev - 1 + items.length) % items.length
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, items.length]);

  const activeItem = selectedIndex !== null ? items[selectedIndex] : null;

  return (
    <section
      id="galeri"
      aria-labelledby="gallery-heading"
      className="overflow-hidden bg-[#FAF6EE] px-3 py-14 sm:px-8 sm:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-5xl">
        <RevealOnScroll delayMs={0}>
          <div className="text-center">
            <KambojaBlossom className="mx-auto mb-2 h-5 w-5 text-[#835C16]" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#835C16]">
              Galeri Foto
            </p>
            <h2
              id="gallery-heading"
              className="mt-1.5 font-serif text-[clamp(1.75rem,3.6vw,2.65rem)] font-semibold leading-tight text-[#241D15]"
            >
              Momen Bahagia Kami
            </h2>
          </div>
        </RevealOnScroll>

        <div className="mt-9 grid grid-cols-2 gap-3 px-0.5 pb-4 sm:mt-10 sm:gap-10 sm:px-3 sm:pb-6 lg:gap-12">
          {items.map((item, index) => (
            <RevealOnScroll
              key={item.id}
              direction={item.direction ?? (index % 2 === 0 ? "left" : "right")}
              delayMs={index * 140}
              slow
            >
              <button
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={`group relative block w-full rounded-xl border border-[#C59B43]/55 bg-[#F2EBD9] p-1.5 text-left shadow-[0_12px_26px_-16px_rgba(36,29,21,0.3)] transition-all duration-300 ease-out hover:border-[#835C16]/70 hover:shadow-[0_20px_38px_-20px_rgba(36,29,21,0.36)] motion-reduce:transform-none cursor-pointer sm:rounded-2xl sm:p-4 ${
                  item.tiltClass ??
                  (index % 2 === 0
                    ? "-rotate-2 hover:rotate-0"
                    : "rotate-2 hover:rotate-0 translate-y-2 sm:translate-y-4")
                }`}
              >
                <PepatranCorner className="pointer-events-none absolute top-1 left-1 z-10 h-4 w-4 text-[#835C16]/75 sm:top-2 sm:left-2 sm:h-5 sm:w-5" />
                <PepatranCorner className="pointer-events-none absolute top-1 right-1 z-10 h-4 w-4 rotate-90 text-[#835C16]/75 sm:top-2 sm:right-2 sm:h-5 sm:w-5" />

                <div className="rounded-lg border border-[#C59B43]/40 bg-[#FAF6EE] p-0.5 sm:rounded-xl sm:p-2">
                  <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md bg-[#EAE0C8] sm:aspect-[4/3] sm:rounded-lg">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 44vw, 44vw"
                      className={`object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transform-none ${
                        item.imageClass || "object-[center_22%]"
                      }`}
                    />
                  </div>
                </div>

                <div className="mt-2 flex flex-col gap-0.5 px-1 sm:mt-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-2 sm:px-1.5">
                  <span className="truncate font-serif text-sm font-semibold text-[#241D15] sm:text-lg">
                    {item.title}
                  </span>
                  <span className="text-[11px] font-medium text-[#835C16] sm:text-xs">
                    {item.subtitle}
                  </span>
                </div>
              </button>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {activeItem && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#241D15]/75 p-4 backdrop-blur-[2px]"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-title"
            className="w-full max-w-xl rounded-2xl border border-[#C59B43]/50 bg-[#FAF6EE] p-5 text-[#241D15] shadow-xl sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3
                  id="lightbox-title"
                  className="font-serif text-2xl font-semibold text-[#241D15]"
                >
                  {activeItem.title}
                </h3>
                <p className="mt-0.5 text-sm text-[#5C4F3E]">
                  {activeItem.subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg px-3 text-sm font-semibold text-[#5C4F3E] hover:bg-[#F2EBD9] hover:text-[#241D15] cursor-pointer"
              >
                Tutup
              </button>
            </div>

            <div className="relative mt-4 aspect-[4/5] w-full overflow-hidden rounded-xl border border-[#C59B43]/40 bg-[#EAE0C8] sm:aspect-[4/3]">
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                fill
                sizes="(max-width: 640px) 100vw, 560px"
                className={`object-cover ${activeItem.imageClass || "object-[center_22%]"}`}
              />
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={() =>
                  setSelectedIndex(
                    (selectedIndex - 1 + items.length) % items.length
                  )
                }
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[#835C16]/45 px-4 py-2 text-sm font-medium text-[#241D15] hover:bg-[#F2EBD9] cursor-pointer"
              >
                Sebelumnya
              </button>
              <span className="text-xs font-medium text-[#5C4F3E]">
                {selectedIndex + 1} / {items.length}
              </span>
              <button
                type="button"
                onClick={() => setSelectedIndex((selectedIndex + 1) % items.length)}
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[#835C16]/45 px-4 py-2 text-sm font-medium text-[#241D15] hover:bg-[#F2EBD9] cursor-pointer"
              >
                Berikutnya
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
