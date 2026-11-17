"use client";

import { useEffect, useState, type FormEvent } from "react";
import type { InvitationData } from "@/types/invitation";

export type ActiveModal = "rsvp" | "details" | null;
type RsvpStatus = "hadir" | "tidak-hadir";
type SubmitState = "idle" | "loading" | "error" | "success";

type InvitationModalsProps = {
  invitation: InvitationData;
  activeModal: ActiveModal;
  onClose: () => void;
  onSwitchToRsvp: () => void;
  initialGuestName?: string;
};

export function InvitationModals({
  invitation,
  activeModal,
  onClose,
  onSwitchToRsvp,
  initialGuestName = "",
}: InvitationModalsProps) {
  const [rsvpName, setRsvpName] = useState(initialGuestName);
  const [rsvpAttendance, setRsvpAttendance] = useState<RsvpStatus>("hadir");
  const [rsvpCount, setRsvpCount] = useState("1");
  const [rsvpMessage, setRsvpMessage] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedAddress, setCopiedAddress] = useState(false);

  const primaryEvent = invitation.events.items[0];

  useEffect(() => {
    if (!activeModal) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModal, onClose]);

  function handleRsvpSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedName = rsvpName.trim();

    if (!trimmedName) {
      setSubmitState("error");
      setErrorMessage(
        "Mohon isi nama lengkap Anda sebelum mengirim konfirmasi."
      );
      return;
    }

    setSubmitState("loading");
    setErrorMessage("");

    window.setTimeout(() => {
      setSubmitState("success");
    }, 350);
  }

  async function handleCopyAddress() {
    try {
      await navigator.clipboard.writeText(invitation.location.address);
    } catch {
      // Clipboard API may be unavailable in restricted contexts
    }
    setCopiedAddress(true);
    window.setTimeout(() => setCopiedAddress(false), 2500);
  }

  if (!activeModal) return null;

  return (
    <>
      {activeModal === "rsvp" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#241D15]/55 p-4 backdrop-blur-[2px]"
          onClick={onClose}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="rsvp-modal-title"
            className="w-full max-w-md rounded-2xl border border-[#C59B43]/45 bg-[#FAF6EE] p-6 text-[#241D15] shadow-xl sm:p-7"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2
                  id="rsvp-modal-title"
                  className="font-serif text-2xl font-semibold text-[#241D15]"
                >
                  Konfirmasi Kehadiran
                </h2>
                <p className="mt-1 text-sm text-[#5C4F3E]">
                  Mohon konfirmasi kehadiran Anda untuk acara{" "}
                  {invitation.hero.displayTitle}.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup dialog"
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-sm font-semibold text-[#5C4F3E] hover:bg-[#F2EBD9] hover:text-[#241D15] cursor-pointer"
              >
                Tutup
              </button>
            </div>

            {submitState === "success" ? (
              <div className="mt-5 rounded-xl border border-[#835C16]/35 bg-[#F2EBD9] p-5">
                <p className="font-serif text-xl font-semibold text-[#241D15]">
                  Matur Suksma, {rsvpName}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#5C4F3E]">
                  Konfirmasi Anda telah dicatat (
                  {rsvpAttendance === "hadir"
                    ? `Hadir, ${rsvpCount} orang`
                    : "Berhalangan hadir"}
                  ).
                  {rsvpMessage.trim()
                    ? ` Ucapan Anda: "${rsvpMessage.trim()}"`
                    : ""}
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <button
                    type="button"
                    onClick={() => setSubmitState("idle")}
                    className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[#835C16]/45 px-4 py-2 text-sm font-medium text-[#241D15] hover:bg-[#FAF6EE] cursor-pointer"
                  >
                    Ubah Jawaban
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#3D2E1E] px-5 py-2 text-sm font-semibold text-[#FAF6EE] hover:bg-[#241D15] cursor-pointer"
                  >
                    Selesai
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleRsvpSubmit}
                className="mt-5 space-y-4"
                noValidate
              >
                {submitState === "error" && (
                  <div
                    role="alert"
                    className="rounded-lg border border-red-800/30 bg-red-950/5 px-3.5 py-2.5 text-sm font-medium text-red-900"
                  >
                    {errorMessage}
                  </div>
                )}

                <div>
                  <label
                    htmlFor="rsvp-name"
                    className="block text-sm font-medium text-[#241D15]"
                  >
                    Nama Tamu
                  </label>
                  <input
                    id="rsvp-name"
                    type="text"
                    value={rsvpName}
                    onChange={(event) => setRsvpName(event.target.value)}
                    placeholder="Masukkan nama Anda"
                    className="mt-1.5 w-full min-h-[44px] rounded-lg border border-[#835C16]/35 bg-white px-3.5 py-2 text-sm text-[#241D15] placeholder:text-[#5C4F3E]/60"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="rsvp-status"
                      className="block text-sm font-medium text-[#241D15]"
                    >
                      Kehadiran
                    </label>
                    <select
                      id="rsvp-status"
                      value={rsvpAttendance}
                      onChange={(event) =>
                        setRsvpAttendance(event.target.value as RsvpStatus)
                      }
                      className="mt-1.5 w-full min-h-[44px] rounded-lg border border-[#835C16]/35 bg-white px-3 py-2 text-sm text-[#241D15]"
                    >
                      <option value="hadir">Hadir</option>
                      <option value="tidak-hadir">Berhalangan Hadir</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="rsvp-count"
                      className="block text-sm font-medium text-[#241D15]"
                    >
                      Jumlah Tamu
                    </label>
                    <select
                      id="rsvp-count"
                      value={rsvpCount}
                      disabled={rsvpAttendance === "tidak-hadir"}
                      onChange={(event) => setRsvpCount(event.target.value)}
                      className="mt-1.5 w-full min-h-[44px] rounded-lg border border-[#835C16]/35 bg-white px-3 py-2 text-sm text-[#241D15] disabled:opacity-50"
                    >
                      <option value="1">1 Orang</option>
                      <option value="2">2 Orang</option>
                      <option value="3">3 Orang</option>
                      <option value="4">4+ Orang</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="rsvp-message"
                    className="block text-sm font-medium text-[#241D15]"
                  >
                    Doa &amp; Ucapan (Opsional)
                  </label>
                  <textarea
                    id="rsvp-message"
                    rows={3}
                    value={rsvpMessage}
                    onChange={(event) => setRsvpMessage(event.target.value)}
                    placeholder="Tulis doa restu..."
                    className="mt-1.5 w-full rounded-lg border border-[#835C16]/35 bg-white px-3.5 py-2.5 text-sm text-[#241D15] placeholder:text-[#5C4F3E]/60"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="inline-flex min-h-[44px] items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-[#5C4F3E] hover:bg-[#F2EBD9] cursor-pointer"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    disabled={submitState === "loading"}
                    className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#3D2E1E] px-5 py-2 text-sm font-semibold text-[#FAF6EE] hover:bg-[#241D15] disabled:opacity-70 cursor-pointer"
                  >
                    {submitState === "loading"
                      ? "Mengirim..."
                      : "Kirim Konfirmasi"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {activeModal === "details" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#241D15]/55 p-4 backdrop-blur-[2px]"
          onClick={onClose}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="details-modal-title"
            className="w-full max-w-lg rounded-2xl border border-[#C59B43]/45 bg-[#FAF6EE] p-6 text-[#241D15] shadow-xl sm:p-7"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2
                  id="details-modal-title"
                  className="font-serif text-2xl font-semibold text-[#241D15]"
                >
                  Detail Upacara &amp; Lokasi
                </h2>
                <p className="mt-1 text-sm text-[#5C4F3E]">
                  {invitation.hero.subline} · {invitation.hero.displayTitle}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup detail acara"
                className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-sm font-semibold text-[#5C4F3E] hover:bg-[#F2EBD9] hover:text-[#241D15] cursor-pointer"
              >
                Tutup
              </button>
            </div>

            <div className="mt-5 space-y-4 text-sm leading-relaxed text-[#5C4F3E]">
              {invitation.events.detailsSummary ? (
                <p>{invitation.events.detailsSummary}</p>
              ) : null}

              <div className="space-y-2.5 rounded-xl border border-[#C59B43]/35 bg-[#F2EBD9]/75 p-4">
                {primaryEvent ? (
                  <>
                    <div>
                      <span className="font-semibold text-[#241D15]">
                        Hari / Tanggal:{" "}
                      </span>
                      <span>{primaryEvent.date}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-[#241D15]">
                        Waktu:{" "}
                      </span>
                      <span>{primaryEvent.time}</span>
                    </div>
                  </>
                ) : null}
                <div>
                  <span className="font-semibold text-[#241D15]">Tempat: </span>
                  <span>{invitation.location.address}</span>
                </div>
                {invitation.events.dressCode ? (
                  <div>
                    <span className="font-semibold text-[#241D15]">
                      Busana:{" "}
                    </span>
                    <span>{invitation.events.dressCode}</span>
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={handleCopyAddress}
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg border border-[#835C16]/45 px-4 py-2 text-sm font-medium text-[#241D15] hover:bg-[#F2EBD9] cursor-pointer"
              >
                {copiedAddress ? "Alamat Tersalin" : "Salin Alamat"}
              </button>
              <button
                type="button"
                onClick={onSwitchToRsvp}
                className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#3D2E1E] px-5 py-2 text-sm font-semibold text-[#FAF6EE] hover:bg-[#241D15] cursor-pointer"
              >
                Lanjut Konfirmasi Hadir
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
