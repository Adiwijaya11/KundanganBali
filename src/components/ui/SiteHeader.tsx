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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header
      className={`sticky top-0 z-30 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
        scrolled ? "px-3 pt-3 sm:px-6" : "px-0 pt-0"
      }`}
    >
      <div
        className={`mx-auto transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
          scrolled
            ? "max-w-5xl rounded-2xl border border-zinc-300/90 bg-[#F7F6F2]/95 px-4 py-2.5 shadow-[0_14px_34px_-18px_rgba(24,24,27,0.28)] backdrop-blur-md sm:px-6"
            : "max-w-full border-b border-zinc-300/80 bg-[#F7F6F2]/95 px-4 py-3 shadow-[0_4px_16px_-10px_rgba(24,24,27,0.16)] backdrop-blur-md sm:px-8 sm:py-3.5 lg:px-12"
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
          {/* Brand Logo with subtle hover tilt */}
          <Link
            href="/"
            className="group inline-flex min-h-[44px] items-center gap-2.5 rounded-lg pr-2 text-zinc-900 transition-colors hover:text-[#2F4538]"
          >
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#2F4538] font-serif text-lg font-semibold text-[#F7F6F2] shadow-xs transition-all duration-300 ease-out group-hover:scale-105 group-hover:rotate-6 group-hover:bg-[#23352A] motion-reduce:transform-none">
              K
            </span>
            <span className="flex flex-col">
              <span className="font-serif text-xl font-semibold leading-none tracking-tight">
                KundanganBali
              </span>
              <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500 transition-colors group-hover:text-[#2F4538]">
                Digital Studio
              </span>
            </span>
          </Link>

          {/* Desktop Pill Navigation */}
          <nav
            aria-label="Navigasi Utama"
            className="hidden items-center gap-1 rounded-full border border-zinc-200/80 bg-white/65 p-1 shadow-2xs backdrop-blur-sm md:flex"
          >
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative inline-flex min-h-[38px] items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-[#2F4538] font-semibold text-[#F7F6F2] shadow-xs"
                      : "text-zinc-600 hover:bg-zinc-900/5 hover:text-zinc-900"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA + Mobile Toggle */}
          <div className="flex items-center gap-2">
            <Link
              href="/otonan/kuru-baya"
              className="group hidden min-h-[42px] items-center justify-center gap-2 rounded-xl bg-[#2F4538] px-4 py-2 text-sm font-semibold text-[#F7F6F2] shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#23352A] hover:shadow-md active:translate-y-0 motion-reduce:transform-none sm:inline-flex"
            >
              <span>Demo Otonan</span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5 motion-reduce:transform-none"
              >
                <path
                  d="M3.5 8H12.5M12.5 8L8.5 4M12.5 8L8.5 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>

            <button
              type="button"
              aria-expanded={mobileMenuOpen}
              aria-controls="site-mobile-menu"
              aria-label={
                mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
              }
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-11 shrink-0 items-center justify-center gap-1.5 rounded-xl border border-zinc-300 bg-white px-3 text-xs font-semibold text-zinc-900 shadow-xs transition-colors hover:bg-zinc-100 cursor-pointer md:hidden"
            >
              <span className="relative flex h-4 w-4 items-center justify-center">
                <span
                  className={`absolute h-0.5 w-4 rounded-full bg-current transition-all duration-300 ${
                    mobileMenuOpen
                      ? "rotate-45"
                      : "-translate-y-1.5"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-4 rounded-full bg-current transition-all duration-200 ${
                    mobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute h-0.5 w-4 rounded-full bg-current transition-all duration-300 ${
                    mobileMenuOpen
                      ? "-rotate-45"
                      : "translate-y-1.5"
                  }`}
                />
              </span>
              <span>{mobileMenuOpen ? "Tutup" : "Menu"}</span>
            </button>
          </div>
        </div>

        {/* Smooth animated mobile drawer */}
        <div
          id="site-mobile-menu"
          className={`grid transition-all duration-300 ease-out motion-reduce:transition-none md:hidden ${
            mobileMenuOpen
              ? "mt-3 grid-rows-[1fr] border-t border-zinc-200/80 pt-3 opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <nav
            aria-label="Navigasi Mobile"
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-1 pb-1">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    tabIndex={mobileMenuOpen ? 0 : -1}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`inline-flex min-h-[44px] items-center rounded-xl px-3.5 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[#2F4538] font-semibold text-[#F7F6F2]"
                        : "text-zinc-700 hover:bg-zinc-900/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/otonan/kuru-baya"
                tabIndex={mobileMenuOpen ? 0 : -1}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-1.5 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-[#2F4538] px-4 py-2 text-sm font-semibold text-[#F7F6F2] transition-colors hover:bg-[#23352A]"
              >
                Demo Otonan
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
