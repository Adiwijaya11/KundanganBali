import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export function CtaSection() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="border-t border-zinc-200 bg-[#2F4538] px-5 py-16 text-center text-[#F7F6F2] sm:px-8 sm:py-22 lg:px-12"
    >
      <div className="mx-auto max-w-2xl">
        <RevealOnScroll>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D7E2D9]">
            Mulai Sekarang
          </p>
          <h2
            id="cta-heading"
            className="mt-2 font-serif text-[clamp(1.9rem,3.8vw,2.85rem)] font-semibold leading-tight"
          >
            Lihat Langsung Hasil Undangan Kami
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[#E4EAE5] sm:text-base">
            Jelajahi demo undangan Upacara Otonan maupun contoh undangan
            Pernikahan Adat Bali sebelum memilih paket Anda.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/demo"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-lg bg-[#F7F6F2] px-6 py-3 text-sm font-semibold text-[#18181B] transition-colors hover:bg-white sm:w-auto sm:text-base"
            >
              Buka Halaman Demo
            </Link>
            <Link
              href="/pricing"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-lg border border-[#F7F6F2]/35 px-6 py-3 text-sm font-semibold text-[#F7F6F2] transition-colors hover:bg-white/10 sm:w-auto sm:text-base"
            >
              Lihat Paket Harga
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
