import Link from "next/link";
import {
  KambojaBlossom,
  PadmaDivider,
  PepatranCorner,
} from "@/components/ui/BalineseOrnaments";

export default function TelubulanNotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F2EBD9] px-5 py-12">
      <div className="relative w-full max-w-md rounded-2xl border border-[#C59B43]/55 bg-[#FAF6EE] px-7 py-12 text-center shadow-[0_20px_44px_-24px_rgba(36,29,21,0.28)]">
        <PepatranCorner className="absolute top-3 left-3 h-6 w-6 text-[#835C16]/75" />
        <PepatranCorner className="absolute top-3 right-3 h-6 w-6 rotate-90 text-[#835C16]/75" />
        <PepatranCorner className="absolute bottom-3 left-3 h-6 w-6 -rotate-90 text-[#835C16]/75" />
        <PepatranCorner className="absolute right-3 bottom-3 h-6 w-6 rotate-180 text-[#835C16]/75" />

        <KambojaBlossom className="mx-auto mb-3 h-7 w-7 text-[#835C16]" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#835C16]">
          404 · Tidak Ditemukan
        </p>
        <h1 className="mt-2 font-serif text-3xl font-semibold text-[#241D15]">
          Undangan Telubulanan Tidak Tersedia
        </h1>
        <PadmaDivider className="mx-auto my-5 max-w-[180px]" />
        <p className="text-sm leading-relaxed text-[#5C4F3E]">
          Tautan undangan Telubulanan yang Anda tuju tidak ditemukan atau sudah
          tidak aktif.
        </p>

        <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#3D2E1E] px-5 py-2.5 text-sm font-semibold text-[#FAF6EE] transition-colors hover:bg-[#241D15]"
          >
            Ke Beranda
          </Link>
          <Link
            href="/telubulan/kuru-baya"
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[#835C16]/45 px-5 py-2.5 text-sm font-semibold text-[#241D15] transition-colors hover:bg-[#F2EBD9]"
          >
            Lihat Demo Telubulanan
          </Link>
        </div>
      </div>
    </main>
  );
}
