import Link from "next/link";
import {
  KambojaBlossom,
  PadmaDivider,
  PadmaMandalaWatermark,
} from "@/components/ui/BalineseOrnaments";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { InvitationData } from "@/types/invitation";

type ClosingProps = {
  closing: InvitationData["closing"];
  onBackToTop: () => void;
};

export function Closing({ closing, onBackToTop }: ClosingProps) {
  return (
    <footer
      id="penutup"
      aria-labelledby="closing-heading"
      className="relative overflow-hidden bg-[#FAF6EE] px-5 py-16 text-center sm:px-8 sm:py-20 lg:px-12"
    >
      <PadmaMandalaWatermark className="absolute top-1/2 left-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 text-[#835C16]/[0.06] sm:h-[400px] sm:w-[400px]" />

      <div className="relative mx-auto max-w-xl">
        <RevealOnScroll delayMs={0}>
          <KambojaBlossom className="mx-auto mb-3 h-6 w-6 text-[#835C16]" />
          <h2
            id="closing-heading"
            className="font-serif text-[clamp(1.75rem,3.6vw,2.5rem)] font-semibold text-[#241D15]"
          >
            {closing.title}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#5C4F3E] sm:text-base">
            {closing.message}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delayMs={120}>
          <PadmaDivider className="mx-auto my-7 max-w-xs" />
          <p className="font-serif text-xl italic font-medium text-[#241D15]">
            {closing.blessing}
          </p>
          {closing.families ? (
            <p className="mt-2 text-sm font-medium text-[#5C4F3E]">
              Kami yang berbahagia: {closing.families}
            </p>
          ) : null}
        </RevealOnScroll>

        <RevealOnScroll delayMs={220}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={onBackToTop}
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[#835C16]/45 bg-[#F2EBD9]/75 px-5 py-2 text-sm font-semibold text-[#241D15] transition-colors hover:bg-[#F2EBD9] cursor-pointer"
            >
              Kembali ke Atas
            </button>
            <Link
              href="/"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg px-4 py-2 text-xs font-medium text-[#5C4F3E] transition-colors hover:text-[#241D15]"
            >
              Dibuat dengan KundanganBali
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </footer>
  );
}
