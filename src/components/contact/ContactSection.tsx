"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { FallingLeaves } from "@/components/landing/FallingLeaves";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

const WHATSAPP_NUMBER = "6283114592416";
const DISPLAY_PHONE = "083114592416";
const EMAIL = "vizziocraft@gmail.com";
const INSTAGRAM_HANDLE = "@vizziocraft";
const INSTAGRAM_URL = "https://www.instagram.com/vizziocraft/";

const STUDIO_HIGHLIGHTS = [
  {
    title: "Respon Cepat",
    value: "< 15 Menit",
    detail: "Jam kerja 09:00 – 20:00 WITA",
  },
  {
    title: "Pengerjaan Kilat",
    value: "1–2 Hari",
    detail: "Siap sebar setelah data lengkap",
  },
  {
    title: "Revisi Fleksibel",
    value: "Gratis",
    detail: "Penyesuaian teks & foto acara",
  },
];

export function ContactSection() {
  const [name, setName] = useState("");
  const [eventType, setEventType] = useState("Pernikahan");
  const [packageName, setPackageName] = useState("Premium (Rp249.000)");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleWhatsAppSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedName = name.trim();
    if (!trimmedName) {
      setError("Mohon isi nama Anda terlebih dahulu.");
      return;
    }
    setError("");

    const lines = [
      `Halo KundanganBali / VizzioCraft, saya *${trimmedName}*.`,
      `Saya tertarik memesan undangan untuk acara *${eventType}* (Paket: ${packageName}).`,
      message.trim() ? `Catatan: ${message.trim()}` : "",
    ].filter(Boolean);

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-[#F7F6F2] px-5 py-14 text-zinc-900 sm:px-8 sm:py-20 lg:px-12"
    >
      {/* Clear, layered organic ambient blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-20 -left-24 h-80 w-80 rounded-full bg-gradient-to-br from-[#2F4538]/25 to-[#835C16]/15 blur-2xl sm:h-[440px] sm:w-[440px]" />
        <div className="absolute top-24 -right-24 h-80 w-80 rounded-full bg-gradient-to-bl from-[#C59B43]/30 to-[#EFECE4]/60 blur-2xl sm:h-[420px] sm:w-[420px]" />
        <div className="absolute -bottom-24 left-1/4 h-72 w-72 rounded-full bg-gradient-to-tr from-[#2F4538]/20 to-[#C59B43]/20 blur-2xl sm:h-96 sm:w-96" />
        <div className="absolute right-1/4 bottom-10 h-60 w-60 rounded-full bg-[#835C16]/15 blur-2xl" />
      </div>

      <FallingLeaves className="opacity-55" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <RevealOnScroll forceShow>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2F4538]/25 bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#2F4538] shadow-2xs backdrop-blur-xs">
              Hubungi Kami
            </span>
            <h1
              id="contact-heading"
              className="mt-3 font-serif text-[clamp(2.1rem,4.5vw,3.35rem)] font-semibold leading-tight text-zinc-900"
            >
              Konsultasikan Undangan Digital Anda
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">
              Tim kami di Denpasar, Bali siap membantu Anda memilih tema,
              menyiapkan data acara, hingga undangan siap dibagikan.
            </p>
          </div>
        </RevealOnScroll>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column: Studio Visual Asset + Contact Info */}
          <div className="space-y-6 lg:col-span-5">
            <RevealOnScroll forceShow delayMs={60}>
              <div className="overflow-hidden rounded-2xl border border-zinc-200/90 bg-white/95 p-3 shadow-[0_18px_40px_-24px_rgba(24,24,27,0.18)] backdrop-blur-xs">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#EFECE4]">
                  <Image
                    src="/images/landing/hero-bg.jpg"
                    alt="VizzioCraft Studio Undangan Digital Denpasar Bali"
                    fill
                    sizes="(max-width: 1024px) 100vw, 440px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/65 via-zinc-900/15 to-transparent" />
                  <div className="absolute bottom-3 left-3.5 right-3.5 flex items-end justify-between gap-2 text-white">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#D7E2D9]">
                        VizzioCraft Studio
                      </p>
                      <p className="font-serif text-lg font-semibold leading-tight">
                        Denpasar, Bali
                      </p>
                    </div>
                    <span className="rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-semibold backdrop-blur-sm">
                      09:00 – 20:00 WITA
                    </span>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll forceShow delayMs={120}>
              <div className="rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-[0_14px_34px_-24px_rgba(24,24,27,0.14)] backdrop-blur-xs">
                <h2 className="font-serif text-2xl font-semibold text-zinc-900">
                  Saluran Resmi Kami
                </h2>
                <p className="mt-1 text-sm text-zinc-600">
                  Pilih jalur komunikasi yang paling nyaman untuk Anda.
                </p>

                <div className="mt-5 space-y-3">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3.5 rounded-xl border border-zinc-200/80 bg-[#F7F6F2] p-3.5 transition-colors hover:border-[#2F4538]/40 hover:bg-[#EFECE4]"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2F4538] text-[#F7F6F2]">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                        WhatsApp / Telepon
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-zinc-900">
                        {DISPLAY_PHONE}
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${EMAIL}`}
                    className="flex items-start gap-3.5 rounded-xl border border-zinc-200/80 bg-[#F7F6F2] p-3.5 transition-colors hover:border-[#2F4538]/40 hover:bg-[#EFECE4]"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2F4538] text-[#F7F6F2]">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <rect
                          x="3"
                          y="5"
                          width="18"
                          height="14"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                        <path
                          d="M3 7l9 6 9-6"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                        Email
                      </p>
                      <p className="mt-0.5 truncate text-sm font-semibold text-zinc-900">
                        {EMAIL}
                      </p>
                    </div>
                  </a>

                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3.5 rounded-xl border border-zinc-200/80 bg-[#F7F6F2] p-3.5 transition-colors hover:border-[#2F4538]/40 hover:bg-[#EFECE4]"
                  >
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#2F4538] text-[#F7F6F2]">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="4"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                      </svg>
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
                        Instagram
                      </p>
                      <p className="mt-0.5 text-sm font-semibold text-zinc-900">
                        {INSTAGRAM_HANDLE}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Interactive Form + Studio Highlights */}
          <div className="space-y-6 lg:col-span-7">
            <RevealOnScroll forceShow delayMs={160}>
              <div className="rounded-2xl border border-zinc-200/90 bg-white/95 p-6 shadow-[0_14px_34px_-24px_rgba(24,24,27,0.14)] backdrop-blur-xs sm:p-8">
                <h2 className="font-serif text-2xl font-semibold text-zinc-900">
                  Kirim Pesan Cepat via WhatsApp
                </h2>
                <p className="mt-1.5 text-sm text-zinc-600">
                  Isi detail singkat acara Anda untuk langsung terhubung ke
                  WhatsApp kami.
                </p>

                <form
                  onSubmit={handleWhatsAppSubmit}
                  className="mt-6 space-y-4"
                  noValidate
                >
                  {error ? (
                    <div
                      role="alert"
                      className="rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-medium text-red-800"
                    >
                      {error}
                    </div>
                  ) : null}

                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-zinc-900"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="Contoh: Made Surya"
                      className="mt-1.5 w-full min-h-[44px] rounded-xl border border-zinc-200 bg-[#F7F6F2] px-3.5 py-2 text-sm text-zinc-900 placeholder:text-zinc-500 focus:border-[#2F4538] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-event"
                        className="block text-sm font-medium text-zinc-900"
                      >
                        Jenis Acara
                      </label>
                      <select
                        id="contact-event"
                        value={eventType}
                        onChange={(event) => setEventType(event.target.value)}
                        className="mt-1.5 w-full min-h-[44px] rounded-xl border border-zinc-200 bg-[#F7F6F2] px-3.5 py-2 text-sm text-zinc-900 focus:border-[#2F4538] focus:bg-white focus:outline-none"
                      >
                        <option value="Pernikahan">Pernikahan / Pawiwahan</option>
                        <option value="Otonan">Otonan</option>
                        <option value="Ulang Tahun">Ulang Tahun</option>
                        <option value="Syukuran / Aqiqah">
                          Syukuran / Aqiqah
                        </option>
                        <option value="Khitanan / Metatah">
                          Khitanan / Metatah
                        </option>
                        <option value="Lainnya">Acara Lainnya</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-package"
                        className="block text-sm font-medium text-zinc-900"
                      >
                        Pilihan Paket
                      </label>
                      <select
                        id="contact-package"
                        value={packageName}
                        onChange={(event) => setPackageName(event.target.value)}
                        className="mt-1.5 w-full min-h-[44px] rounded-xl border border-zinc-200 bg-[#F7F6F2] px-3.5 py-2 text-sm text-zinc-900 focus:border-[#2F4538] focus:bg-white focus:outline-none"
                      >
                        <option value="Basic (Rp199.000)">
                          Basic (Rp199.000)
                        </option>
                        <option value="Premium (Rp249.000)">
                          Premium (Rp249.000)
                        </option>
                        <option value="Exclusive (Rp599.000)">
                          Exclusive (Rp599.000)
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-zinc-900"
                    >
                      Catatan / Pertanyaan (Opsional)
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      placeholder="Ceritakan tanggal acara atau permintaan desain khusus..."
                      className="mt-1.5 w-full rounded-xl border border-zinc-200 bg-[#F7F6F2] px-3.5 py-2.5 text-sm text-zinc-900 placeholder:text-zinc-500 focus:border-[#2F4538] focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                    <button
                      type="submit"
                      className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-xl bg-[#2F4538] px-6 py-3 text-sm font-semibold text-[#F7F6F2] transition-colors hover:bg-[#23352A] cursor-pointer"
                    >
                      Kirim via WhatsApp
                    </button>
                    <a
                      href={`mailto:${EMAIL}?subject=${encodeURIComponent(
                        `Konsultasi Undangan ${eventType} - ${
                          name.trim() || "KundanganBali"
                        }`
                      )}`}
                      className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-[#EFECE4]"
                    >
                      Kirim Email
                    </a>
                  </div>
                </form>
              </div>
            </RevealOnScroll>

            <RevealOnScroll forceShow delayMs={220}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {STUDIO_HIGHLIGHTS.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-zinc-200/90 bg-white/95 p-4 shadow-[0_10px_24px_-20px_rgba(24,24,27,0.16)] backdrop-blur-xs"
                  >
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2F4538]">
                      {item.title}
                    </p>
                    <p className="mt-1 font-serif text-2xl font-semibold text-zinc-900">
                      {item.value}
                    </p>
                    <p className="mt-1 text-xs text-zinc-600">{item.detail}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
