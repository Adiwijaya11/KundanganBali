import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export const FAQ_ITEMS = [
  {
    question: "Berapa harga pembuatan undangan digital di KundanganBali?",
    answer:
      "Tersedia tiga pilihan paket aktif 1 tahun: Basic Rp199.000, Premium Rp249.000 (dilengkapi RSVP, musik, ucapan, dan amplop digital), serta Exclusive Rp599.000 untuk desain custom penuh.",
  },
  {
    question: "Berapa lama proses pengerjaan undangan hingga siap dibagikan?",
    answer:
      "Setelah seluruh data acara, foto, dan detail lokasi lengkap dikirimkan, undangan digital Anda selesai dalam 1–2 hari kerja.",
  },
  {
    question: "Acara apa saja yang didukung oleh KundanganBali?",
    answer:
      "Kami melayani undangan digital untuk Pernikahan / Pawiwahan, Otonan, Ulang Tahun, Syukuran & Aqiqah, Khitanan / Metatah, hingga acara resmi lainnya.",
  },
  {
    question: "Bagaimana cara menampilkan nama tamu secara otomatis?",
    answer:
      "Setiap tautan undangan mendukung parameter ?to=Nama+Tamu sehingga nama kerabat atau tamu undangan langsung tampil di sampul pembuka.",
  },
];

export function FaqSection() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="border-t border-zinc-200/80 bg-[#EFECE4] px-5 py-16 text-zinc-900 sm:px-8 sm:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-4xl">
        <RevealOnScroll>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2F4538]">
              Pertanyaan Umum
            </p>
            <h2
              id="faq-heading"
              className="mt-2 font-serif text-[clamp(1.85rem,3.6vw,2.75rem)] font-semibold leading-tight text-zinc-900"
            >
              Informasi Seputar Layanan KundanganBali
            </h2>
          </div>
        </RevealOnScroll>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {FAQ_ITEMS.map((item, index) => (
            <RevealOnScroll key={item.question} delayMs={index * 70}>
              <article className="h-full rounded-2xl border border-zinc-200/90 bg-white p-6 shadow-[0_10px_24px_-20px_rgba(24,24,27,0.14)]">
                <h3 className="font-serif text-xl font-semibold leading-snug text-zinc-900">
                  {item.question}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-600">
                  {item.answer}
                </p>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
