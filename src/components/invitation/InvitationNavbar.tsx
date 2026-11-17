"use client";

import { useEffect, useState, type MouseEvent } from "react";
import { KambojaBlossom } from "@/components/ui/BalineseOrnaments";

export type NavLinkItem = {
  href: string;
  label: string;
};

type InvitationNavbarProps = {
  coupleNickname: string;
  themeLabel: string;
  links: NavLinkItem[];
  onNavigate: (event: MouseEvent<HTMLAnchorElement>, href: string) => void;
  hasMusic: boolean;
  isPlaying: boolean;
  onToggleMusic: () => void;
};

export function InvitationNavbar({
  coupleNickname,
  themeLabel,
  links,
  onNavigate,
  hasMusic,
  isPlaying,
  onToggleMusic,
}: InvitationNavbarProps) {
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

  function handleLinkClick(
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    setMobileMenuOpen(false);
    onNavigate(event, href);
  }

  return (
    <header className="sticky top-0 z-30 border-b border-[#C59B43]/30 bg-[#FAF6EE]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-8 lg:px-12">
        <a
          href="#hero"
          onClick={(event) => handleLinkClick(event, "#hero")}
          className="group inline-flex min-h-[44px] items-center gap-2.5 rounded-md pr-2 text-[#241D15] transition-colors hover:text-[#835C16]"
        >
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C59B43]/60 bg-[#F2EBD9] text-[#835C16] transition-colors group-hover:border-[#835C16]">
            <KambojaBlossom className="h-5 w-5" />
          </span>
          <span className="flex flex-col">
            <span className="font-serif text-lg font-semibold leading-none tracking-wide sm:text-xl">
              {coupleNickname}
            </span>
            <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#835C16]">
              {themeLabel}
            </span>
          </span>
        </a>

        <nav
          aria-label="Navigasi Bagian Undangan"
          className="hidden items-center gap-1 md:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => handleLinkClick(event, link.href)}
              className="inline-flex min-h-[44px] items-center rounded-md px-3.5 py-2 text-sm font-medium text-[#5C4F3E] transition-colors hover:bg-[#F2EBD9]/75 hover:text-[#241D15]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {hasMusic ? (
            <button
              type="button"
              onClick={onToggleMusic}
              aria-pressed={isPlaying}
              aria-label={isPlaying ? "Jeda musik latar" : "Putar musik latar"}
              title={
                isPlaying
                  ? "Musik sedang diputar (klik untuk jeda)"
                  : "Putar musik"
              }
              className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors cursor-pointer ${
                isPlaying
                  ? "border-[#835C16] bg-[#3D2E1E] text-[#FAF6EE]"
                  : "border-[#835C16]/45 bg-[#F2EBD9] text-[#241D15] hover:border-[#835C16]"
              }`}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className={
                  isPlaying
                    ? "animate-[spin_6s_linear_infinite] motion-reduce:animate-none"
                    : ""
                }
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9.5"
                  stroke="currentColor"
                  strokeWidth="1.35"
                />
                <path
                  d="M12 5.2A6.8 6.8 0 0 1 18.8 12"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  opacity="0.7"
                />
                <path
                  d="M12 18.8A6.8 6.8 0 0 1 5.2 12"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  opacity="0.7"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="2.4"
                  stroke="currentColor"
                  strokeWidth="1.35"
                />
                <circle cx="12" cy="12" r="0.9" fill="currentColor" />
              </svg>
            </button>
          ) : null}

          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-controls="invitation-mobile-menu"
            aria-label={
              mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
            }
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#835C16]/35 bg-[#F2EBD9]/75 text-[#241D15] transition-colors hover:border-[#835C16] hover:bg-[#F2EBD9] cursor-pointer md:hidden"
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
          id="invitation-mobile-menu"
          aria-label="Navigasi Mobile"
          className="border-t border-[#C59B43]/25 bg-[#FAF6EE] px-4 py-3 md:hidden"
        >
          <div className="grid grid-cols-2 gap-1.5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => handleLinkClick(event, link.href)}
                className="inline-flex min-h-[44px] items-center rounded-lg px-3 py-2 text-sm font-medium text-[#241D15] transition-colors hover:bg-[#F2EBD9]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
