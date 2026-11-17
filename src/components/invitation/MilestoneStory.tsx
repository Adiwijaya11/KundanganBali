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
      className="border-y border-[#C59B43]/25 bg-[#F2EBD9] px-5 py-14 sm:px-8 sm:py-18 lg:px-12"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
        <RevealOnScroll delayMs={0} className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#835C16]">
            {eyebrow}
          </p>
          <h2
            id="story-heading"
            className="mt-1.5 font-serif text-[clamp(1.85rem,3.6vw,2.65rem)] font-semibold leading-tight text-[#241D15]"
          >
            {heading}
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[#5C4F3E] sm:text-base">
            {description}
          </p>
        </RevealOnScroll>

        <ol className="space-y-5 border-l border-[#C59B43]/60 pl-6 lg:col-span-7">
          {items.map((item, index) => (
            <li key={item.step} className="relative">
              <RevealOnScroll delayMs={index * 130}>
                <div className="relative rounded-2xl border border-[#C59B43]/35 bg-[#FAF6EE] p-5 sm:p-6">
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
