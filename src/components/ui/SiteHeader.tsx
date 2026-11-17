"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Beranda" },
  { href: "/pricing", label: "Paket Harga" },
  { href: "/demo", label: "Demo Undangan" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-30 border-b border-zinc-200/80 bg-[#F7F6F2]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="group inline-flex min-h-[44px] items-center gap-2.5 rounded-md pr-2 text-zinc-900 transition-colors hover:text-[#2F4538]"
        >
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#2F4538] font-serif text-lg font-semibold text-[#F7F6F2] transition-colors group-hover:bg-zinc-900">
            K
          </span>
          <span className="flex flex-col">
            <span className="font-serif text-xl font-semibold leading-none tracking-tight">
              KundanganBali
            </span>
            <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
              Digital Studio
            </span>
          </span>
        </Link>

        <nav aria-label="Navigasi Utama" className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`inline-flex min-h-[44px] items-center rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-zinc-900/5 font-semibold text-zinc-900"
                    : "text-zinc-600 hover:bg-zinc-900/5 hover:text-zinc-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/telubulan/kuru-baya"
            className="hidden min-h-[42px] items-center justify-center rounded-lg bg-[#2F4538] px-4 py-2 text-sm font-semibold text-[#F7F6F2] transition-colors hover:bg-[#23352A] sm:inline-flex"
          >
            Demo Telubulanan
          </Link>

          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="site-mobile-menu"
            aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-300 bg-white text-zinc-900 transition-colors hover:bg-zinc-100 cursor-pointer md:hidden"
          >
            {mobileMenuOpen ? (
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M5 5L15 15M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M3.5 6H16.5M3.5 10H16.5M3.5 14H16.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          id="site-mobile-menu"
          aria-label="Navigasi Mobile"
          className="border-t border-zinc-200 bg-[#F7F6F2] px-4 py-3 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`inline-flex min-h-[44px] items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-zinc-900/5 font-semibold text-zinc-900"
                      : "text-zinc-700 hover:bg-zinc-900/5"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/telubulan/kuru-baya"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-1 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#2F4538] px-4 py-2 text-sm font-semibold text-[#F7F6F2]"
            >
              Demo Telubulanan
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
