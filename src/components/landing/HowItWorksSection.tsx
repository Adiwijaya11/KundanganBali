import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const STEPS = [
  {
    step: "Langkah 01",
    title: "Pilih Paket & Jenis Acara",
    description:
      "Tentukan paket undangan yang sesuai untuk acara Pawiwahan, Resepsi, atau Upacara Telubulanan.",
  },
  {
    step: "Langkah 02",
    title: "Kirim Data & Galeri Foto",
    description:
      "Lengkapi nama mempelai atau buah hati, jadwal acara, tautan Google Maps, serta foto pilihan Anda.",
  },
  {
    step: "Langkah 03",
    title: "Aktif di Path Pilihan Anda",
    description:
      "Undangan terbit di tautan khusus seperti /ayu-budi dan siap disebarkan kepada seluruh kerabat.",
  },
];

export function HowItWorksSection() {
  return (
    <section
      aria-labelledby="how-heading"
      className="bg-[#F7F6F2] px-5 py-16 text-zinc-900 sm:px-8 sm:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-5xl">
        <RevealOnScroll>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2F4538]">
              Alur Pemesanan
            </p>
            <h2
              id="how-heading"
              className="mt-2 font-serif text-[clamp(1.85rem,3.6vw,2.75rem)] font-semibold leading-tight text-zinc-900"
            >
              Tiga Langkah Mudah Menuju Hari Baik
            </h2>
          </div>
        </RevealOnScroll>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {STEPS.map((item, index) => (
            <RevealOnScroll key={item.step} delayMs={index * 100}>
              <div className="h-full rounded-2xl border border-zinc-200 bg-white p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2F4538]">
                  {item.step}
                </p>
                <h3 className="mt-2 font-serif text-2xl font-semibold text-zinc-900">
                  {item.title}
                </h3>
                <div className="my-4 h-px w-12 bg-zinc-200" />
                <p className="text-sm leading-relaxed text-zinc-600">
                  {item.description}
                </p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
