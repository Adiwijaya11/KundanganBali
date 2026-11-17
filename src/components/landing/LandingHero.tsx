import Image from "next/image";
import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function LandingHero() {
  return (
    <section
      aria-labelledby="landing-hero-heading"
      className="bg-[#F7F6F2] px-5 py-14 text-zinc-900 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <RevealOnScroll forceShow delayMs={60}>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2F4538]/20 bg-[#2F4538]/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#2F4538]">
              Studio Undangan Digital Bali
            </span>

            <h1
              id="landing-hero-heading"
              className="mt-5 font-serif text-[clamp(2.4rem,5vw,4.25rem)] font-semibold leading-[1.06] tracking-tight text-zinc-900"
            >
              Undangan Digital{" "}
              <span className="italic text-[#2F4538]">Elegan &amp; Personal</span>{" "}
              untuk Setiap Momen Sakral
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg">
              KundanganBali menghadirkan platform undangan digital cepat dan
              rapi dengan alamat tautan terstruktur seperti{" "}
              <code className="rounded bg-[#EFECE4] px-1.5 py-0.5 text-sm font-medium text-zinc-900">
                /telubulan/kuru-baya
              </code>{" "}
              dan{" "}
              <code className="rounded bg-[#EFECE4] px-1.5 py-0.5 text-sm font-medium text-zinc-900">
                /pernikahan/&lt;nama&gt;
              </code>
              .
            </p>
          </RevealOnScroll>

          <RevealOnScroll forceShow delayMs={180}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/telubulan/kuru-baya"
                className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-[#2F4538] px-6 py-3 text-sm font-semibold text-[#F7F6F2] shadow-sm transition-colors hover:bg-[#23352A] sm:text-base"
              >
                Lihat Demo Telubulanan
              </Link>
              <Link
                href="/pricing"
                className="inline-flex min-h-[48px] items-center justify-center rounded-lg border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-[#EFECE4] sm:text-base"
              >
                Lihat Paket Harga
              </Link>
            </div>
          </RevealOnScroll>
        </div>

        <div className="flex justify-center lg:col-span-5 lg:justify-end">
          <RevealOnScroll forceShow delayMs={240}>
            <div className="w-full max-w-[360px] rounded-2xl border border-zinc-200 bg-white p-4 shadow-[0_24px_48px_-24px_rgba(24,24,27,0.18)]">
              <div className="mb-3 flex items-center justify-between rounded-lg bg-[#F7F6F2] px-3 py-2 text-xs text-zinc-500">
                <span className="font-medium text-zinc-700">
                  /telubulan/kuru-baya
                </span>
                <span className="rounded bg-[#2F4538]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#2F4538]">
                  Live
                </span>
              </div>

              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#EFECE4]">
                <Image
                  src="/images/demo/baby-hero.jpg"
                  alt="Pratinjau undangan digital Upacara Telubulanan KundanganBali"
                  fill
                  priority
                  sizes="(max-width: 640px) 280px, 340px"
                  className="object-cover"
                />
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <div>
                  <p className="font-serif text-lg font-semibold text-zinc-900">
                    I Made Kuru Baya
                  </p>
                  <p className="text-xs text-zinc-500">
                    Tema Warm Ivory · Telubulanan
                  </p>
                </div>
                <Link
                  href="/telubulan/kuru-baya"
                  className="inline-flex min-h-[38px] items-center justify-center rounded-lg border border-zinc-300 px-3.5 py-1.5 text-xs font-semibold text-zinc-900 transition-colors hover:bg-[#F7F6F2]"
                >
                  Buka
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
