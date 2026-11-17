import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const PACKAGES = [
  {
    name: "Pratama",
    price: "Rp 149.000",
    tagline: "Ringkas & elegan untuk acara inti keluarga.",
    featured: false,
    features: [
      "Tautan khusus kundanganbali.com/<nama>",
      "Sampul pembuka & profil acara",
      "Detail jadwal & hitung mundur (WITA)",
      "Integrasi Google Maps & salin alamat",
      "Masa aktif tautan 6 bulan",
    ],
  },
  {
    name: "Madya",
    price: "Rp 249.000",
    tagline: "Pilihan favorit dengan galeri foto & musik latar.",
    featured: true,
    features: [
      "Semua fitur paket Pratama",
      "Galeri foto interaktif dengan Lightbox",
      "Musik latar instrumen tradisional Bali",
      "Personalisasi nama tamu (?to=Nama)",
      "Masa aktif tautan 1 tahun",
    ],
  },
  {
    name: "Utama",
    price: "Rp 399.000",
    tagline: "Layanan kustom penuh dengan pendampingan prioritas.",
    featured: false,
    features: [
      "Semua fitur paket Madya",
      "Penyesuaian tata letak & tipografi khusus",
      "Jumlah foto galeri & sesi acara fleksibel",
      "Bantuan input daftar tamu undangan",
      "Masa aktif tautan selamanya",
    ],
  },
];

export function PricingSection() {
  return (
    <section
      aria-labelledby="pricing-heading"
      className="bg-[#F7F6F2] px-5 py-14 text-zinc-900 sm:px-8 sm:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll forceShow>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2F4538]">
              Paket Harga
            </p>
            <h1
              id="pricing-heading"
              className="mt-2 font-serif text-[clamp(2.1rem,4.5vw,3.35rem)] font-semibold leading-tight text-zinc-900"
            >
              Investasi Terbaik untuk Momen Sekali Seumur Hidup
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">
              Pilih paket undangan digital yang paling sesuai dengan kebutuhan
              rangkaian upacara Anda. Transparan, tanpa biaya tersembunyi.
            </p>
          </div>
        </RevealOnScroll>

        <div className="mt-12 grid grid-cols-1 gap-7 lg:grid-cols-3">
          {PACKAGES.map((pkg, index) => (
            <RevealOnScroll key={pkg.name} forceShow delayMs={index * 100}>
              <article
                className={`flex h-full flex-col justify-between rounded-2xl border p-7 sm:p-8 ${
                  pkg.featured
                    ? "border-[#2F4538] bg-[#EFECE4] shadow-[0_20px_44px_-24px_rgba(24,24,27,0.22)]"
                    : "border-zinc-200 bg-white shadow-[0_14px_34px_-24px_rgba(24,24,27,0.12)]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="font-serif text-2xl font-semibold text-zinc-900">
                      Paket {pkg.name}
                    </h2>
                    {pkg.featured ? (
                      <span className="rounded-full bg-[#2F4538] px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#F7F6F2]">
                        Populer
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-2 text-sm text-zinc-600">{pkg.tagline}</p>

                  <p className="mt-5 font-serif text-4xl font-semibold text-zinc-900">
                    {pkg.price}
                  </p>

                  <div className="my-6 h-px w-full bg-zinc-200" />

                  <ul className="space-y-3 text-sm text-zinc-800">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2F4538]"
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <Link
                    href="/demo"
                    className={`inline-flex min-h-[48px] w-full items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-colors ${
                      pkg.featured
                        ? "bg-[#2F4538] text-[#F7F6F2] hover:bg-[#23352A]"
                        : "border border-zinc-300 bg-white text-zinc-900 hover:bg-[#EFECE4]"
                    }`}
                  >
                    Lihat Contoh Undangan
                  </Link>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
