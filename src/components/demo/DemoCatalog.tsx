"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  KambojaBlossom,
  PadmaDivider,
  PadmaMandalaWatermark,
  PatraCrownOrnament,
  PepatranCorner,
} from "@/components/ui/BalineseOrnaments";

type CategoryFilter =
  | "all"
  | "pernikahan"
  | "otonan"
  | "ulang-tahun"
  | "syukuran"
  | "khitanan"
  | "lamaran"
  | "lainnya";

type DemoCatalogItem = {
  slug: string;
  category: string;
  themeLabel: string;
  title: string;
  subtitle: string;
  dateLocationSummary: string;
  coverImage: string;
  coverImageAlt: string;
  path: string;
};

type DemoCatalogProps = {
  items: DemoCatalogItem[];
};

const CATEGORIES: { id: CategoryFilter; label: string; description: string }[] = [
  { id: "all", label: "Semua Undangan", description: "Seluruh koleksi aktif" },
  { id: "pernikahan", label: "Pernikahan", description: "Akad, Resepsi & Pawiwahan" },
  { id: "otonan", label: "Otonan", description: "Otonan 210 hari & Tiga Oton" },
  { id: "ulang-tahun", label: "Ulang Tahun", description: "Pesta ulang tahun & sweet 17" },
  { id: "syukuran", label: "Syukuran & Aqiqah", description: "Kelahiran bayi & doa bersama" },
  { id: "khitanan", label: "Khitanan / Metatah", description: "Acara keluarga & remaja" },
  { id: "lamaran", label: "Lamaran / Tunangan", description: "Momen menuju hari pernikahan" },
  { id: "lainnya", label: "Acara Resmi & Lainnya", description: "Wisuda, gathering & syukuran rumah" },
];

const FEATURE_TAGS = [
  "Musik Latar Bali",
  "Galeri Lightbox",
  "Hitung Mundur WITA",
  "Sapaan ?to=Nama",
  "Google Maps",
];

export function DemoCatalog({ items }: DemoCatalogProps) {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const counts = useMemo(() => {
    const map: Record<CategoryFilter, number> = {
      all: items.length,
      pernikahan: 0,
      otonan: 0,
      "ulang-tahun": 0,
      syukuran: 0,
      khitanan: 0,
      lamaran: 0,
      lainnya: 0,
    };
    for (const item of items) {
      if (item.category in map) {
        map[item.category as CategoryFilter] += 1;
      }
    }
    return map;
  }, [items]);

  const activeCategoryMeta =
    CATEGORIES.find((cat) => cat.id === selectedCategory) ?? CATEGORIES[0];

  const filteredItems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return items.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      if (!matchesCategory) return false;
      if (!query) return true;

      return (
        item.title.toLowerCase().includes(query) ||
        item.subtitle.toLowerCase().includes(query) ||
        item.themeLabel.toLowerCase().includes(query) ||
        item.path.toLowerCase().includes(query) ||
        item.dateLocationSummary.toLowerCase().includes(query)
      );
    });
  }, [items, selectedCategory, searchQuery]);

  return (
    <div className="flex flex-1 flex-col lg:flex-row">
      {/* Flush-left Sidebar on Desktop */}
      <aside className="w-full shrink-0 border-b border-zinc-200/90 bg-white lg:w-72 lg:border-r lg:border-b-0 xl:w-80">
        <div className="p-4 sm:p-6 lg:sticky lg:top-20">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2F4538]">
              Kategori Acara
            </p>
            <span className="rounded-full bg-[#EFECE4] px-2.5 py-0.5 text-[11px] font-semibold text-zinc-700">
              {CATEGORIES.length - 1} Jenis
            </span>
          </div>

          <nav
            aria-label="Filter Kategori Undangan"
            className="mt-3.5 flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:gap-1.5 lg:overflow-visible lg:pb-0"
          >
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group flex shrink-0 items-center justify-between gap-3 rounded-xl px-3.5 py-2.5 text-left text-sm transition-all duration-200 cursor-pointer lg:w-full ${
                    isActive
                      ? "bg-[#2F4538] font-semibold text-[#F7F6F2] shadow-xs"
                      : "bg-[#F7F6F2] text-zinc-700 hover:bg-[#EFECE4] hover:text-zinc-900"
                  }`}
                >
                  <div className="min-w-0">
                    <span className="block truncate">{category.label}</span>
                    <span
                      className={`hidden truncate text-[11px] font-normal lg:block ${
                        isActive ? "text-[#D7E2D9]" : "text-zinc-500"
                      }`}
                    >
                      {category.description}
                    </span>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-semibold ${
                      isActive
                        ? "bg-white/20 text-[#F7F6F2]"
                        : "bg-zinc-200/80 text-zinc-700"
                    }`}
                  >
                    {counts[category.id]}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Feature highlights in sidebar */}
          <div className="mt-7 hidden border-t border-zinc-100 pt-5 lg:block">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
              Fitur Tersedia
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {FEATURE_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-zinc-200 bg-[#F7F6F2] px-2.5 py-1 text-[11px] font-medium text-zinc-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6 hidden rounded-xl border border-[#2F4538]/15 bg-[#EFECE4]/70 p-4 lg:block">
            <p className="font-serif text-base font-semibold text-zinc-900">
              Butuh Desain Custom?
            </p>
            <p className="mt-1 text-xs leading-relaxed text-zinc-600">
              Konsultasikan tema dan kebutuhan acara Anda bersama tim
              KundanganBali.
            </p>
            <Link
              href="/pricing"
              className="mt-3 inline-flex min-h-[38px] w-full items-center justify-center rounded-lg bg-[#2F4538] px-3 py-1.5 text-xs font-semibold text-[#F7F6F2] transition-colors hover:bg-[#23352A]"
            >
              Lihat Paket Harga
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Catalog Area */}
      <div className="min-w-0 flex-1 bg-[#F7F6F2] px-4 py-8 sm:px-8 sm:py-10 lg:px-10">
        {/* Top Banner + Search Bar */}
        <div className="mb-7 rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-[0_14px_34px_-24px_rgba(24,24,27,0.16)] sm:p-7">
          <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <span className="inline-flex items-center rounded-full bg-[#2F4538]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2F4538]">
                Katalog Demo KundanganBali
              </span>
              <h1 className="mt-2.5 font-serif text-[clamp(1.85rem,3.4vw,2.75rem)] font-semibold leading-tight text-zinc-900">
                {activeCategoryMeta.label}
              </h1>
              <p className="mt-1.5 max-w-2xl text-sm text-zinc-600">
                {activeCategoryMeta.description} — jelajahi langsung tampilan
                undangan digital, musik latar, serta personalisasi tamu.
              </p>
            </div>

            <div className="w-full xl:max-w-sm">
              <div className="relative">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-zinc-400"
                >
                  <circle
                    cx="9"
                    cy="9"
                    r="6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M13.5 13.5L17 17"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Cari nama, tema, atau path..."
                  aria-label="Cari undangan demo"
                  className="w-full min-h-[44px] rounded-xl border border-zinc-200 bg-[#F7F6F2] py-2 pr-4 pl-10 text-sm text-zinc-900 placeholder:text-zinc-500 focus:border-[#2F4538] focus:bg-white focus:outline-none"
                />
              </div>
              <p className="mt-2 text-right text-xs text-zinc-500">
                Menampilkan{" "}
                <span className="font-semibold text-zinc-900">
                  {filteredItems.length}
                </span>{" "}
                undangan
              </p>
            </div>
          </div>
        </div>

        {/* 2-col on mobile, 3-col on lg, 4-col on xl */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            {filteredItems.map((item) => (
              <article
                key={item.path}
                className="group flex h-full flex-col justify-between overflow-hidden rounded-xl border border-zinc-200/90 bg-white p-2.5 shadow-[0_14px_30px_-22px_rgba(24,24,27,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-[#2F4538]/40 hover:shadow-[0_20px_38px_-22px_rgba(47,69,56,0.22)] motion-reduce:transform-none sm:rounded-2xl sm:p-3.5"
              >
                <div>
                  {/* Miniature Invitation Template Design Preview (no customer photo) */}
                  <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-lg border border-[#C59B43]/40 bg-[#F2EBD9] p-2 sm:rounded-xl sm:p-3.5">
                    <PadmaMandalaWatermark className="absolute h-32 w-32 text-[#835C16]/[0.14] transition-transform duration-700 group-hover:scale-105 group-hover:rotate-12 motion-reduce:transform-none sm:h-48 sm:w-48" />

                    <div className="relative flex h-full w-full flex-col items-center justify-between rounded-md border border-[#C59B43]/55 bg-[#FAF6EE]/95 px-2 py-2.5 text-center shadow-[0_10px_24px_-14px_rgba(36,29,21,0.28)] sm:rounded-lg sm:px-3 sm:py-4">
                      <PepatranCorner className="pointer-events-none absolute top-1 left-1 h-3 w-3 text-[#835C16]/75 sm:top-1.5 sm:left-1.5 sm:h-4 sm:w-4" />
                      <PepatranCorner className="pointer-events-none absolute top-1 right-1 h-3 w-3 rotate-90 text-[#835C16]/75 sm:top-1.5 sm:right-1.5 sm:h-4 sm:w-4" />
                      <PepatranCorner className="pointer-events-none absolute bottom-1 left-1 h-3 w-3 -rotate-90 text-[#835C16]/75 sm:bottom-1.5 sm:left-1.5 sm:h-4 sm:w-4" />
                      <PepatranCorner className="pointer-events-none absolute right-1 bottom-1 h-3 w-3 rotate-180 text-[#835C16]/75 sm:right-1.5 sm:bottom-1.5 sm:h-4 sm:w-4" />

                      <div className="flex flex-col items-center">
                        <PatraCrownOrnament className="h-3 w-14 text-[#835C16]/80 sm:h-4 sm:w-20" />
                        <KambojaBlossom className="mt-0.5 h-3.5 w-3.5 text-[#835C16] sm:mt-1 sm:h-4 sm:w-4" />
                        <span className="mt-0.5 font-serif text-[10px] italic text-[#835C16] sm:mt-1 sm:text-xs">
                          Om Swastiastu
                        </span>
                      </div>

                      <div className="w-full px-0.5 sm:px-1">
                        <p className="truncate text-[7px] font-semibold uppercase tracking-[0.14em] text-[#5C4F3E] sm:text-[8px] sm:tracking-[0.18em]">
                          {item.subtitle}
                        </p>
                        <p className="mt-0.5 truncate font-serif text-xs font-semibold leading-tight text-[#241D15] sm:mt-1 sm:text-base">
                          {item.title}
                        </p>
                        <PadmaDivider className="mx-auto my-1.5 max-w-[60px] sm:my-2 sm:max-w-[90px]" />
                        <p className="truncate text-[8px] text-[#5C4F3E] sm:text-[9px]">
                          {item.dateLocationSummary}
                        </p>
                      </div>

                      <span className="inline-flex items-center justify-center rounded bg-[#3D2E1E] px-2 py-0.5 text-[8px] font-semibold text-[#FAF6EE] sm:rounded-md sm:px-3 sm:py-1 sm:text-[9px]">
                        Buka Undangan
                      </span>
                    </div>

                    <span className="absolute top-1.5 right-1.5 z-10 rounded-full bg-[#F7F6F2]/95 px-2 py-0.5 text-[8px] font-semibold uppercase tracking-wider text-[#2F4538] shadow-2xs backdrop-blur-xs sm:top-2.5 sm:right-2.5 sm:px-2.5 sm:text-[10px]">
                      {item.themeLabel}
                    </span>
                  </div>

                  <div className="mt-2.5 px-0.5 sm:mt-3.5">
                    <p className="truncate text-[10px] font-semibold uppercase tracking-[0.12em] text-[#2F4538] sm:text-[11px] sm:tracking-[0.14em]">
                      {item.subtitle}
                    </p>
                    <h2 className="mt-0.5 truncate font-serif text-base font-semibold text-zinc-900 sm:mt-1 sm:text-xl">
                      {item.title}
                    </h2>
                    <p className="mt-0.5 truncate text-[11px] text-zinc-500 sm:mt-1 sm:text-xs">
                      {item.path}
                    </p>
                  </div>
                </div>

                <div className="mt-3 flex flex-col gap-1.5 border-t border-zinc-100 pt-2.5 sm:mt-4 sm:gap-2 sm:pt-3">
                  <Link
                    href={item.path}
                    className="inline-flex min-h-[36px] w-full items-center justify-center rounded-lg bg-[#2F4538] px-2.5 py-1.5 text-[11px] font-semibold text-[#F7F6F2] transition-colors hover:bg-[#23352A] sm:min-h-[40px] sm:px-3 sm:py-2 sm:text-xs"
                  >
                    Buka Undangan
                  </Link>
                  <Link
                    href={`${item.path}?to=Made+Surya`}
                    className="inline-flex min-h-[34px] w-full items-center justify-center rounded-lg border border-zinc-200 bg-white px-2 py-1 text-[10px] font-medium text-zinc-700 transition-colors hover:bg-[#F7F6F2] sm:min-h-[38px] sm:px-3 sm:py-1.5 sm:text-xs"
                  >
                    Coba ?to=Made+Surya
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-zinc-300 bg-white/80 px-6 py-14 text-center">
            <p className="font-serif text-2xl font-semibold text-zinc-900">
              Belum ada demo untuk kategori ini
            </p>
            <p className="mx-auto mt-2 max-w-md text-sm text-zinc-600">
              Koleksi untuk kategori{" "}
              <span className="font-semibold text-zinc-900">
                {activeCategoryMeta.label}
              </span>{" "}
              akan segera tersedia, atau coba reset filter untuk melihat demo
              yang aktif.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="inline-flex min-h-[42px] items-center justify-center rounded-lg bg-[#2F4538] px-5 py-2 text-sm font-semibold text-[#F7F6F2] transition-colors hover:bg-[#23352A] cursor-pointer"
              >
                Tampilkan Semua Demo
              </button>
              <Link
                href="/pricing"
                className="inline-flex min-h-[42px] items-center justify-center rounded-lg border border-zinc-300 bg-white px-5 py-2 text-sm font-semibold text-zinc-900 transition-colors hover:bg-[#EFECE4]"
              >
                Lihat Paket Harga
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
