"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { KambojaBlossom } from "@/components/ui/BalineseOrnaments";
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
      className="overflow-hidden bg-[#FAF6EE] px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
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

        <div className="mt-10 grid grid-cols-1 gap-8 px-2 sm:grid-cols-2 sm:gap-10 sm:pb-6 lg:gap-12">
          {items.map((item, index) => (
            <RevealOnScroll
              key={item.id}
              direction={item.direction ?? (index % 2 === 0 ? "left" : "right")}
              delayMs={index * 110}
            >
              <button
                type="button"
                onClick={() => setSelectedIndex(index)}
                className={`group block w-full rounded-lg border border-[#C59B43]/30 bg-[#F2EBD9] p-2.5 pb-4 text-left shadow-[0_10px_24px_-16px_rgba(36,29,21,0.32)] transition-transform duration-300 ease-out motion-reduce:transform-none cursor-pointer sm:p-3 sm:pb-5 ${
                  item.tiltClass ?? ""
                }`}
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-[#EAE0C8]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 46vw"
                    className={`object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transform-none ${
                      item.imageClass || "object-center"
                    }`}
                  />
                </div>
                <div className="mt-3 flex items-baseline justify-between gap-2 px-1">
                  <span className="font-serif text-lg font-semibold text-[#241D15]">
                    {item.title}
                  </span>
                  <span className="text-xs text-[#5C4F3E]">{item.subtitle}</span>
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

            <div className="relative mt-4 aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#C59B43]/40 bg-[#EAE0C8]">
              <Image
                src={activeItem.src}
                alt={activeItem.alt}
                fill
                sizes="(max-width: 640px) 100vw, 560px"
                className={`object-cover ${activeItem.imageClass || "object-center"}`}
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
