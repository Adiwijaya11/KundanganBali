import {
  KambojaBlossom,
  PadmaDivider,
  PepatranCorner,
} from "@/components/ui/BalineseOrnaments";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { InvitationData } from "@/types/invitation";

type CoupleProfileProps = {
  couple: NonNullable<InvitationData["couple"]>;
  quote: InvitationData["hero"]["quote"];
};

export function CoupleProfile({ couple, quote }: CoupleProfileProps) {
  const profiles = [
    { role: "Mempelai Pria", data: couple.groom, delay: 80 },
    { role: "Mempelai Wanita", data: couple.bride, delay: 180 },
  ];

  return (
    <section
      id="mempelai"
      aria-labelledby="couple-heading"
      className="border-y border-[#C59B43]/25 bg-[#F2EBD9] px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-5xl">
        <RevealOnScroll delayMs={0}>
          <div className="mx-auto max-w-2xl text-center">
            <KambojaBlossom className="mx-auto mb-2.5 h-6 w-6 text-[#835C16]" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#835C16]">
              Mempelai
            </p>
            <h2
              id="couple-heading"
              className="mt-1.5 font-serif text-[clamp(1.85rem,3.6vw,2.7rem)] font-semibold leading-tight text-[#241D15]"
            >
              Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa
            </h2>
            <p className="mt-3 font-serif text-base italic leading-relaxed text-[#5C4F3E] sm:text-lg">
              &ldquo;{quote.text}&rdquo;
            </p>
            {quote.source ? (
              <p className="mt-1.5 text-xs text-[#835C16]">{quote.source}</p>
            ) : null}
          </div>
        </RevealOnScroll>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {profiles.map(({ role, data, delay }) => (
            <RevealOnScroll key={data.fullName} delayMs={delay}>
              <article className="relative h-full rounded-2xl border border-[#C59B43]/50 bg-[#FAF6EE] p-7 text-center shadow-[0_14px_34px_-24px_rgba(36,29,21,0.28)] sm:p-9">
                <PepatranCorner className="absolute top-3 left-3 h-6 w-6 text-[#835C16]/75" />
                <PepatranCorner className="absolute top-3 right-3 h-6 w-6 rotate-90 text-[#835C16]/75" />

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#835C16]">
                  {role}
                </p>
                <h3 className="mt-2 font-serif text-2xl font-semibold text-[#241D15] sm:text-3xl">
                  {data.fullName}
                </h3>
                <PadmaDivider className="mx-auto my-5 max-w-[180px]" />
                <p className="text-xs font-semibold uppercase tracking-wider text-[#5C4F3E]">
                  {data.childOrder}
                </p>
                <p className="mt-1.5 text-sm font-medium leading-relaxed text-[#241D15] sm:text-base">
                  {data.parents}
                </p>
                {data.origin ? (
                  <p className="mt-2 text-xs text-[#5C4F3E] sm:text-sm">
                    {data.origin}
                  </p>
                ) : null}
                {data.instagram ? (
                  <p className="mt-3 text-xs font-medium text-[#835C16]">
                    {data.instagram}
                  </p>
                ) : null}
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
