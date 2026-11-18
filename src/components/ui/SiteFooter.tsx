import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-[#EFECE4] px-5 py-12 text-zinc-900 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#2F4538] font-serif text-base font-semibold text-[#F7F6F2]">
                K
              </span>
              <span className="font-serif text-2xl font-semibold tracking-tight">
                KundanganBali
              </span>
            </div>
            <p className="mt-2.5 max-w-md text-sm leading-relaxed text-zinc-600">
              Platform pembuatan undangan digital modern untuk upacara
              Pawiwahan, Resepsi, hingga Otonan dengan tautan khusus
              setiap acara.
            </p>
          </div>

          <nav
            aria-label="Navigasi Footer"
            className="flex flex-wrap gap-6 text-sm font-medium text-zinc-600"
          >
            <Link href="/" className="transition-colors hover:text-zinc-900">
              Beranda
            </Link>
            <Link
              href="/pricing"
              className="transition-colors hover:text-zinc-900"
            >
              Paket Harga
            </Link>
            <Link href="/demo" className="transition-colors hover:text-zinc-900">
              Demo Undangan
            </Link>
            <Link
              href="/otonan/kuru-baya"
              className="transition-colors hover:text-zinc-900"
            >
              /otonan/kuru-baya
            </Link>
          </nav>
        </div>

        <div className="my-8 h-px w-full bg-zinc-300/80" />

        <div className="flex flex-col items-center justify-between gap-2 text-xs text-zinc-600 sm:flex-row">
          <p>© 2026 KundanganBali. Studio Undangan Digital, Bali.</p>
          <p className="font-medium text-[#2F4538]">
            kundanganbali.com/&lt;slug&gt;
          </p>
        </div>
      </div>
    </footer>
  );
}
