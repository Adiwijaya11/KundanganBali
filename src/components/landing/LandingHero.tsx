import Image from "next/image";
import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { FallingLeaves } from "./FallingLeaves";

export function LandingHero() {
  return (
    <section
      aria-labelledby="landing-hero-heading"
      className="relative flex min-h-svh items-center justify-center overflow-hidden bg-[#F7F6F2] px-5 py-16 text-center text-zinc-900 sm:px-8 sm:py-20 lg:px-12"
    >
      {/* Full-bleed invitation flat-lay background with light radial scrim for clarity */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <Image
          src="/images/landing/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(247,246,242,0.78)_0%,rgba(247,246,242,0.45)_58%,rgba(247,246,242,0.22)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#EFECE4]/70 to-transparent" />
      </div>

      <FallingLeaves />

      <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center">
        <RevealOnScroll forceShow delayMs={60}>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2F4538]/25 bg-[#F7F6F2]/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#2F4538] shadow-xs backdrop-blur-sm">
            Studio Undangan Digital Bali
          </span>

          <h1
            id="landing-hero-heading"
            className="mt-5 font-serif text-[clamp(2.4rem,5.4vw,4.4rem)] font-semibold leading-[1.06] tracking-tight text-zinc-900 drop-shadow-[0_1px_12px_rgba(247,246,242,0.9)]"
          >
            Undangan Digital{" "}
            <span className="italic text-[#2F4538]">Elegan &amp; Personal</span>{" "}
            untuk Setiap Momen Sakral
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-relaxed text-zinc-800 sm:text-lg">
            KundanganBali menghadirkan platform undangan digital cepat dan rapi
            dengan alamat tautan terstruktur seperti{" "}
            <code className="rounded bg-[#F7F6F2]/90 px-1.5 py-0.5 text-sm font-semibold text-zinc-900">
              /telubulan/kuru-baya
            </code>{" "}
            dan{" "}
            <code className="rounded bg-[#F7F6F2]/90 px-1.5 py-0.5 text-sm font-semibold text-zinc-900">
              /pernikahan/&lt;nama&gt;
            </code>
            .
          </p>
        </RevealOnScroll>

        <RevealOnScroll forceShow delayMs={180}>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/telubulan/kuru-baya"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-lg bg-[#2F4538] px-6 py-3 text-sm font-semibold text-[#F7F6F2] shadow-sm transition-colors hover:bg-[#23352A] sm:w-auto sm:text-base"
            >
              Lihat Demo Telubulanan
            </Link>
            <Link
              href="/pricing"
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-lg border border-zinc-300 bg-white/95 px-6 py-3 text-sm font-semibold text-zinc-900 shadow-xs backdrop-blur-sm transition-colors hover:bg-[#EFECE4] sm:w-auto sm:text-base"
            >
              Lihat Paket Harga
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
