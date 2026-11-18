import Image from "next/image";
import {
  KambojaBlossom,
  PepatranCorner,
} from "@/components/ui/BalineseOrnaments";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { MilestoneItem } from "@/types/invitation";

type MilestoneStoryProps = {
  eyebrow: string;
  heading: string;
  description: string;
  items: MilestoneItem[];
};

export function MilestoneStory({
  eyebrow,
  heading,
  description,
  items,
}: MilestoneStoryProps) {
  return (
    <section
      id="kisah"
      aria-labelledby="story-heading"
      className="border-y border-[#C59B43]/25 bg-[#F2EBD9] px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
        <RevealOnScroll delayMs={0} className="lg:col-span-5">
          <div className="flex items-center gap-2">
            <KambojaBlossom className="h-5 w-5 text-[#835C16]" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#835C16]">
              {eyebrow}
            </p>
          </div>
          <h2
            id="story-heading"
            className="mt-2 font-serif text-[clamp(1.85rem,3.6vw,2.65rem)] font-semibold leading-tight text-[#241D15]"
          >
            {heading}
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[#5C4F3E] sm:text-base">
            {description}
          </p>

          {/* Editorial Balinese Canang Sari / Banten Otonan visual card */}
          <figure className="relative mt-7 max-w-md rounded-2xl border border-[#C59B43]/55 bg-[#FAF6EE] p-2.5 shadow-[0_16px_36px_-22px_rgba(36,29,21,0.3)] sm:p-3">
            <PepatranCorner className="pointer-events-none absolute top-2 left-2 z-10 h-5 w-5 text-[#835C16]/75" />
            <PepatranCorner className="pointer-events-none absolute top-2 right-2 z-10 h-5 w-5 rotate-90 text-[#835C16]/75" />
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#EAE0C8]">
              <Image
                src="/images/invitation/banten-otonan.jpg"
                alt="Canang Sari dan kain tenun adat Bali sebagai simbol rasa syukur upacara otonan"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2.5 px-1 text-center font-serif text-xs italic text-[#5C4F3E]">
              Simbol rasa syukur &amp; doa restu dalam tradisi Bali
            </figcaption>
          </figure>
        </RevealOnScroll>

        <ol className="space-y-5 border-l border-[#C59B43]/60 pl-6 lg:col-span-7">
          {items.map((item, index) => (
            <li key={item.step} className="relative">
              <RevealOnScroll delayMs={index * 130}>
                <div className="relative rounded-2xl border border-[#C59B43]/40 bg-[#FAF6EE] p-5 shadow-[0_10px_26px_-20px_rgba(36,29,21,0.22)] sm:p-6">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[31px] top-6 h-3 w-3 rounded-full border-2 border-[#FAF6EE] bg-[#835C16]"
                  />
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#835C16]">
                      {item.age}
                    </span>
                    <span className="text-xs font-medium text-[#5C4F3E]">
                      {item.dateLabel}
                    </span>
                  </div>
                  <h3 className="mt-1 font-serif text-xl font-semibold text-[#241D15]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#5C4F3E]">
                    {item.description}
                  </p>
                </div>
              </RevealOnScroll>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
