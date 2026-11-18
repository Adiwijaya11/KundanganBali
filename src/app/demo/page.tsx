import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { SiteHeader } from "@/components/ui/SiteHeader";
import { getInvitationPath, getOtonanBySlug } from "@/lib/invitations";

export const metadata: Metadata = {
  title: "Demo Undangan",
  description:
    "Pratinjau langsung template undangan digital KundanganBali untuk Upacara Otonan.",
};

export default function DemoPage() {
  const otonan = getOtonanBySlug("kuru-baya");
  const otonanPath = otonan ? getInvitationPath(otonan) : "/otonan/kuru-baya";

  return (
    <div className="flex min-h-screen flex-col bg-[#F7F6F2] text-zinc-900">
      <SiteHeader />

      <main className="flex-1 px-4 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <RevealOnScroll forceShow>
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2F4538]">
                Demo Undangan Digital
              </p>
              <h1 className="mt-2 font-serif text-[clamp(1.95rem,4.5vw,3.35rem)] font-semibold leading-tight text-zinc-900">
                Jelajahi Contoh Undangan Secara Langsung
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">
                Setiap jenis upacara memiliki struktur path yang rapi:{" "}
                <code className="inline-block rounded bg-[#EFECE4] px-1.5 py-0.5 text-xs font-medium text-zinc-900">
                  /otonan/&lt;nama&gt;
                </code>{" "}
                untuk Upacara Otonan dan{" "}
                <code className="inline-block rounded bg-[#EFECE4] px-1.5 py-0.5 text-xs font-medium text-zinc-900">
                  /pernikahan/&lt;nama&gt;
                </code>{" "}
                untuk Pernikahan.
              </p>
            </div>
          </RevealOnScroll>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-2">
            {otonan ? (
              <RevealOnScroll forceShow delayMs={100}>
                <article className="flex h-full flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-4 shadow-[0_18px_40px_-24px_rgba(24,24,27,0.18)] sm:p-6 lg:p-8">
                  <div>
                    <div className="mb-5 flex flex-wrap items-center justify-between gap-2 rounded-lg bg-[#F7F6F2] px-3 py-2 text-xs text-zinc-600">
                      <span className="min-w-0 truncate font-medium text-zinc-900">
                        kundanganbali.com{otonanPath}
                      </span>
                      <span className="shrink-0 rounded bg-[#2F4538]/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#2F4538]">
                        {otonan.themeLabel}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 items-center gap-5 sm:grid-cols-12 sm:gap-6">
                      <div className="sm:col-span-5">
                        <div className="relative mx-auto aspect-[4/5] w-full max-w-[220px] overflow-hidden rounded-xl bg-[#EFECE4] sm:max-w-none">
                          <Image
                            src={otonan.hero.coverImage}
                            alt={otonan.hero.coverImageAlt}
                            fill
                            sizes="(max-width: 640px) 220px, 240px"
                            className="object-cover"
                          />
                        </div>
                      </div>

                      <div className="text-center sm:col-span-7 sm:text-left">
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2F4538]">
                          {otonan.hero.subtitle}
                        </p>
                        <h2 className="mt-1.5 font-serif text-2xl font-semibold text-zinc-900 sm:text-3xl">
                          {otonan.hero.displayTitle}
                        </h2>
                        <p className="mt-2 text-sm text-zinc-600">
                          {otonan.hero.dateLocationSummary}
                        </p>
                        <p className="mt-3 text-xs leading-relaxed text-zinc-500">
                          Dilengkapi sampul pembuka, musik latar, galeri
                          lightbox, hitung mundur WITA, peta lokasi, dan modal
                          konfirmasi kehadiran.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-2.5 border-t border-zinc-100 pt-5 sm:mt-7 sm:flex-row">
                    <Link
                      href={otonanPath}
                      className="inline-flex min-h-[46px] flex-1 items-center justify-center rounded-lg bg-[#2F4538] px-4 py-2.5 text-center text-sm font-semibold text-[#F7F6F2] transition-colors hover:bg-[#23352A]"
                    >
                      Buka Demo
                    </Link>
                    <Link
                      href={`${otonanPath}?to=Made+Surya`}
                      className="inline-flex min-h-[46px] flex-1 items-center justify-center rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-center text-sm font-semibold text-zinc-900 transition-colors hover:bg-[#F7F6F2]"
                    >
                      Coba Nama Tamu
                    </Link>
                  </div>
                </article>
              </RevealOnScroll>
            ) : null}

            <RevealOnScroll forceShow delayMs={200}>
              <article className="flex h-full flex-col justify-between rounded-2xl border border-dashed border-zinc-300 bg-[#EFECE4]/60 p-4 sm:p-6 lg:p-8">
                <div>
                  <div className="mb-5 flex flex-wrap items-center justify-between gap-2 rounded-lg bg-white/80 px-3 py-2 text-xs text-zinc-500">
                    <span className="min-w-0 truncate font-medium text-zinc-700">
                      kundanganbali.com/pernikahan/&lt;nama&gt;
                    </span>
                    <span className="shrink-0 rounded bg-zinc-200 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-zinc-700">
                      Segera Hadir
                    </span>
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2F4538]">
                    Undangan Pernikahan
                  </p>
                  <h2 className="mt-1.5 font-serif text-2xl font-semibold text-zinc-900 sm:text-3xl">
                    Katalog Pawiwahan &amp; Resepsi
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    Route{" "}
                    <code className="inline-block rounded bg-white px-1.5 py-0.5 text-xs">
                      /pernikahan/[slug]
                    </code>{" "}
                    sudah siap digunakan dan akan menampilkan portofolio klien
                    pernikahan pertama Anda setelah data ditambahkan.
                  </p>
                </div>

                <div className="mt-6 border-t border-zinc-200/80 pt-5 sm:mt-7">
                  <Link
                    href="/pricing"
                    className="inline-flex min-h-[46px] w-full items-center justify-center rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 transition-colors hover:bg-[#F7F6F2]"
                  >
                    Lihat Paket Pernikahan
                  </Link>
                </div>
              </article>
            </RevealOnScroll>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
