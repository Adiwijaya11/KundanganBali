import {
  CalendarMotifIcon,
  ClockMotifIcon,
  KambojaBlossom,
  LocationMotifIcon,
} from "@/components/ui/BalineseOrnaments";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { CeremonyEvent } from "@/types/invitation";

type EventDetailsProps = {
  events: CeremonyEvent[];
};

export function EventDetails({ events }: EventDetailsProps) {
  return (
    <section
      id="acara"
      aria-labelledby="events-heading"
      className="bg-[#FAF6EE] px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-5xl">
        <RevealOnScroll delayMs={0}>
          <div className="text-center">
            <KambojaBlossom className="mx-auto mb-2.5 h-6 w-6 text-[#835C16]" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#835C16]">
              Rangkaian Acara
            </p>
            <h2
              id="events-heading"
              className="mt-1.5 font-serif text-[clamp(1.85rem,3.6vw,2.65rem)] font-semibold leading-tight text-[#241D15]"
            >
              Hari &amp; Waktu Bahagia
            </h2>
          </div>
        </RevealOnScroll>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {events.map((eventItem, index) => (
            <RevealOnScroll key={eventItem.id} delayMs={index * 110}>
              <article className="flex h-full flex-col justify-between rounded-2xl border border-[#C59B43]/50 bg-[#F2EBD9] p-6 shadow-[0_14px_34px_-24px_rgba(36,29,21,0.28)] sm:p-8">
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-[#241D15]">
                    {eventItem.title}
                  </h3>

                  <div className="mt-5 space-y-3.5 text-sm text-[#241D15]">
                    <div className="flex items-start gap-3">
                      <CalendarMotifIcon className="mt-0.5 shrink-0 text-[#835C16]" />
                      <span className="font-medium">{eventItem.date}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <ClockMotifIcon className="mt-0.5 shrink-0 text-[#835C16]" />
                      <span className="font-medium">{eventItem.time}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <LocationMotifIcon className="mt-0.5 shrink-0 text-[#835C16]" />
                      <div>
                        <p className="font-semibold">{eventItem.venue}</p>
                        <p className="mt-0.5 text-[#5C4F3E]">{eventItem.address}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {eventItem.notes ? (
                  <p className="mt-6 border-t border-[#C59B43]/30 pt-4 text-xs leading-relaxed text-[#5C4F3E] sm:text-sm">
                    {eventItem.notes}
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
