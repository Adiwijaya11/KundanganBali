import Image from "next/image";
import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { FallingLeaves } from "./FallingLeaves";

const FEATURES = [
  {
    title: "Tautan Khusus per Acara",
    description:
      "Setiap undangan memiliki alamat ringkas seperti /otonan/kuru-baya yang mudah dibagikan melalui WhatsApp.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Ragam Tema & Upacara",
    description:
      "Mendukung Upacara Otonan hingga Pernikahan (Pawiwahan & Resepsi) dengan struktur yang tepat.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3C14.2 6.2 14.5 9.8 12 13.5C9.5 9.8 9.8 6.2 12 3Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M12 13.5C8.5 12.4 5.8 9.9 5 6.5C7.8 7 10.2 9.4 12 13.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M12 13.5C15.5 12.4 18.2 9.9 19 6.5C16.2 7 13.8 9.4 12 13.5Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M4 17.5C8 19.5 16 19.5 20 17.5"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Sapaan Tamu Otomatis",
    description:
      "Tambahkan parameter ?to=Nama+Tamu pada tautan untuk menampilkan nama tamu secara personal di sampul pembuka.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M17 11l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Cepat, Ringan & Responsif",
    description:
      "Dirancang agar tampil presisi dan nyaman dibaca di ponsel, tablet, maupun desktop tanpa beban berat.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="6"
          y="2.5"
          width="12"
          height="19"
          rx="2.5"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M10.5 18h3"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export function FeaturesSection() {
  return (
    <section
      aria-labelledby="features-heading"
      className="relative overflow-hidden border-y border-zinc-200/80 bg-[#EFECE4] px-5 py-16 text-zinc-900 sm:px-8 sm:py-22 lg:px-12"
    >
      {/* Subtle botanical falling leaves */}
      <FallingLeaves className="opacity-65" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <RevealOnScroll>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2F4538]/20 bg-white/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#2F4538]">
              Keunggulan Platform
            </span>
            <h2
              id="features-heading"
              className="mt-3 font-serif text-[clamp(1.9rem,3.6vw,2.85rem)] font-semibold leading-tight text-zinc-900"
            >
              Dirancang Rapi untuk Kemudahan Anda &amp; Tamu
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">
              Perpaduan desain editorial yang tenang, navigasi instan, serta
              personalisasi tamu dalam satu tautan undangan digital.
            </p>
          </div>
        </RevealOnScroll>

        {/* Clean 4-card grid with icons and subtle hover lift */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => (
            <RevealOnScroll key={feature.title} delayMs={index * 90}>
              <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-[0_12px_28px_-20px_rgba(24,24,27,0.16)] backdrop-blur-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#2F4538]/35 hover:shadow-[0_20px_38px_-22px_rgba(47,69,56,0.22)] motion-reduce:transform-none">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#2F4538]/10 text-[#2F4538] transition-colors duration-300 group-hover:bg-[#2F4538] group-hover:text-[#F7F6F2]">
                      {feature.icon}
                    </span>
                    <span className="font-serif text-sm font-semibold text-zinc-400">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-serif text-xl font-semibold text-zinc-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-zinc-600">
                    {feature.description}
                  </p>
                </div>

                <div className="mt-5 h-0.5 w-8 rounded-full bg-[#2F4538]/25 transition-all duration-300 group-hover:w-14 group-hover:bg-[#2F4538]" />
              </article>
            </RevealOnScroll>
          ))}
        </div>

        {/* Editorial Visual Asset Showcase */}
        <RevealOnScroll delayMs={200}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/90 p-5 shadow-[0_18px_40px_-24px_rgba(24,24,27,0.16)] backdrop-blur-xs sm:p-7">
            <div className="grid grid-cols-1 items-center gap-7 lg:grid-cols-12 lg:gap-10">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#EFECE4] lg:col-span-6">
                <Image
                  src="/images/landing/hero-bg.jpg"
                  alt="Detail estetika kartu undangan dan bunga kamboja KundanganBali"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover transition-transform duration-700 hover:scale-[1.03] motion-reduce:transform-none"
                />
              </div>

              <div className="lg:col-span-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2F4538]">
                  Estetika &amp; Pengalaman Tamu
                </p>
                <h3 className="mt-2 font-serif text-2xl font-semibold leading-snug text-zinc-900 sm:text-3xl">
                  Tampilan Hangat yang Langsung Terasa Istimewa
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">
                  Setiap undangan dilengkapi sampul pembuka interaktif, musik
                  latar instrumen Bali, galeri foto lightbox, hitung mundur
                  WITA, serta peta lokasi Google Maps yang mudah diakses tamu.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/otonan/kuru-baya?to=Made+Surya"
                    className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#2F4538] px-5 py-2.5 text-sm font-semibold text-[#F7F6F2] transition-colors hover:bg-[#23352A]"
                  >
                    Coba Pengalaman Tamu
                  </Link>
                  <Link
                    href="/demo"
                    className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-zinc-300 bg-white px-5 py-2.5 text-sm font-semibold text-zinc-900 transition-colors hover:bg-[#F7F6F2]"
                  >
                    Lihat Katalog Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
