import {
  KambojaBlossom,
  PadmaDivider,
  PadmaMandalaWatermark,
} from "@/components/ui/BalineseOrnaments";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

type CeremonyQuoteProps = {
  heading: string;
  text: string;
  source?: string;
};

export function CeremonyQuote({ heading, text, source }: CeremonyQuoteProps) {
  return (
    <section
      id="doa"
      aria-labelledby="quote-heading"
      className="relative overflow-hidden border-y border-[#C59B43]/25 bg-[#F2EBD9] px-5 py-14 sm:px-8 sm:py-18 lg:px-12"
    >
      <PadmaMandalaWatermark className="absolute top-1/2 left-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 text-[#835C16]/[0.06] sm:h-[380px] sm:w-[380px]" />

      <div className="relative mx-auto max-w-3xl text-center">
        <RevealOnScroll delayMs={0}>
          <KambojaBlossom className="mx-auto mb-2.5 h-6 w-6 text-[#835C16]" />
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#835C16]">
            {heading}
          </p>
          <h2 id="quote-heading" className="sr-only">
            {heading}
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delayMs={120}>
          <blockquote className="mt-5 font-serif text-[clamp(1.4rem,3vw,2.1rem)] italic leading-snug text-[#241D15]">
            &ldquo;{text}&rdquo;
          </blockquote>
        </RevealOnScroll>

        {source ? (
          <RevealOnScroll delayMs={240}>
            <PadmaDivider className="mx-auto my-6 max-w-xs" />
            <p className="text-sm font-medium text-[#5C4F3E]">{source}</p>
          </RevealOnScroll>
        ) : null}
      </div>
    </section>
  );
}
