import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const FEATURES = [
  {
    title: "Tautan Khusus per Acara",
    description:
      "Setiap undangan memiliki alamat ringkas seperti kundanganbali.com/ayu-budi yang mudah dibagikan melalui WhatsApp.",
  },
  {
    title: "Ragam Tema & Upacara",
    description:
      "Mendukung undangan Pernikahan (Pawiwahan & Resepsi) hingga Upacara Telubulanan (3 Bulanan) dengan struktur yang tepat.",
  },
  {
    title: "Sapaan Tamu Otomatis",
    description:
      "Tambahkan parameter ?to=Nama+Tamu pada tautan untuk menampilkan nama tamu secara personal di sampul pembuka.",
  },
  {
    title: "Cepat, Ringan & Responsif",
    description:
      "Dirancang agar tampil presisi dan nyaman dibaca di ponsel, tablet, maupun desktop tanpa loading berat.",
  },
];

export function FeaturesSection() {
  return (
    <section
      aria-labelledby="features-heading"
      className="border-y border-zinc-200/80 bg-[#EFECE4] px-5 py-16 text-zinc-900 sm:px-8 sm:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <RevealOnScroll>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2F4538]">
              Keunggulan Platform
            </p>
            <h2
              id="features-heading"
              className="mt-2 font-serif text-[clamp(1.85rem,3.6vw,2.75rem)] font-semibold leading-tight text-zinc-900"
            >
              Dirancang Rapi untuk Kemudahan Anda &amp; Tamu
            </h2>
          </div>
        </RevealOnScroll>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => (
            <RevealOnScroll key={feature.title} delayMs={index * 90}>
              <article className="h-full rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-[0_10px_24px_-20px_rgba(24,24,27,0.18)]">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#2F4538]/10 text-xs font-semibold text-[#2F4538]">
                  0{index + 1}
                </span>
                <h3 className="mt-4 font-serif text-xl font-semibold text-zinc-900">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-600">
                  {feature.description}
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
