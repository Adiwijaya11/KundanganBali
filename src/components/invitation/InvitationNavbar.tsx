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
    <header className="sticky top-0 z-30 border-b border-[#C59B43]/55 bg-[#FAF6EE]/95 shadow-[0_6px_20px_-12px_rgba(36,29,21,0.28)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-4 py-2.5 sm:gap-3 sm:px-8 lg:px-12">
        <a
          href="#hero"
          onClick={(event) => handleLinkClick(event, "#hero")}
          className="group inline-flex min-h-[44px] min-w-0 items-center gap-2 rounded-md pr-1 text-[#241D15] transition-colors hover:text-[#835C16] sm:gap-2.5 sm:pr-2"
        >
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C59B43]/75 bg-[#F2EBD9] text-[#835C16] transition-colors group-hover:border-[#835C16]">
            <KambojaBlossom className="h-5 w-5" />
          </span>
          <span className="flex min-w-0 flex-col">
            <span className="truncate font-serif text-base font-semibold leading-none tracking-wide sm:text-xl">
              {coupleNickname}
            </span>
            <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#835C16]">
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
            className="inline-flex h-11 shrink-0 items-center justify-center gap-1.5 rounded-lg border border-[#835C16]/55 bg-[#F2EBD9] px-3 text-xs font-semibold text-[#241D15] shadow-2xs transition-colors hover:border-[#835C16] cursor-pointer md:hidden"
          >
            {mobileMenuOpen ? (
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M5 5L15 15M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="M3.5 6H16.5M3.5 10H16.5M3.5 14H16.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            )}
            <span>{mobileMenuOpen ? "Tutup" : "Menu"}</span>
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
