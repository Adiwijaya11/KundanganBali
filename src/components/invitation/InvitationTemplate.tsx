"use client";

import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import { useSearchParams } from "next/navigation";
import Lenis from "lenis";
import type { InvitationData } from "@/types/invitation";
import { CeremonyQuote } from "./CeremonyQuote";
import { Closing } from "./Closing";
import { Countdown } from "./Countdown";
import { CoupleProfile } from "./CoupleProfile";
import { EventDetails } from "./EventDetails";
import { Gallery } from "./Gallery";
import { Hero } from "./Hero";
import { InvitationModals, type ActiveModal } from "./InvitationModals";
import { InvitationNavbar } from "./InvitationNavbar";
import { Location } from "./Location";
import { MilestoneStory } from "./MilestoneStory";
import { Opening } from "./Opening";

type InvitationTemplateProps = {
  invitation: InvitationData;
};

export function InvitationTemplate({ invitation }: InvitationTemplateProps) {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to")?.trim() || undefined;
  const [activeModal, setActiveModal] = useState<ActiveModal>(null);
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  const navLinks =
    invitation.category === "telubulanan"
      ? [
          { href: "#hero", label: "Beranda" },
          { href: "#doa", label: "Doa" },
          { href: "#galeri", label: "Galeri" },
          { href: "#kisah", label: "Perjalanan" },
          { href: "#lokasi", label: "Lokasi" },
        ]
      : [
          { href: "#hero", label: "Beranda" },
          { href: "#mempelai", label: "Mempelai" },
          { href: "#acara", label: "Acara" },
          { href: "#galeri", label: "Galeri" },
          { href: "#lokasi", label: "Lokasi" },
        ];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, []);

  const startMusic = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || !invitation.musicUrl) return;
    try {
      audio.volume = 0.55;
      await audio.play();
    } catch {
      // Browser autoplay policy may block until user interaction
    }
  }, [invitation.musicUrl]);

  const toggleMusic = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio || !invitation.musicUrl) return;
    if (audio.paused) {
      await startMusic();
    } else {
      audio.pause();
    }
  }, [invitation.musicUrl, startMusic]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;
    let rafId = 0;

    function raf(time: number) {
      lenis.raf(time);
      rafId = window.requestAnimationFrame(raf);
    }

    rafId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    const shouldLock = !isOpened || activeModal !== null;

    if (!isOpened) {
      window.scrollTo(0, 0);
    }

    if (shouldLock) {
      document.body.style.overflow = "hidden";
      lenisRef.current?.stop();
    } else {
      document.body.style.overflow = "";
      lenisRef.current?.start();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpened, activeModal]);

  function handleOpenInvitation() {
    void startMusic();
    setIsOpened(true);
  }

  function scrollToSection(href: string) {
    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;

    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset: -68 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }

  function handleAnchorClick(
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    if (!lenisRef.current) return;
    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;

    event.preventDefault();
    lenisRef.current.scrollTo(target, { offset: -68 });
  }

  function handleBackToTop() {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <div className="flex flex-1 flex-col bg-[#FAF6EE] text-[#241D15]">
      {invitation.musicUrl ? (
        <audio ref={audioRef} src={invitation.musicUrl} loop preload="auto" />
      ) : null}

      <Opening
        greeting={invitation.hero.greeting}
        subtitle={invitation.hero.subtitle}
        coupleNickname={invitation.hero.displayTitle}
        dateLocationSummary={invitation.hero.dateLocationSummary}
        guestName={guestName}
        isOpened={isOpened}
        onOpenInvitation={handleOpenInvitation}
      />

      <InvitationNavbar
        coupleNickname={invitation.couple?.nickname ?? invitation.hero.displayTitle}
        themeLabel={invitation.themeLabel}
        links={navLinks}
        onNavigate={handleAnchorClick}
        hasMusic={Boolean(invitation.musicUrl)}
        isPlaying={isPlaying}
        onToggleMusic={() => void toggleMusic()}
      />

      <main className="flex-1">
        <Hero
          hero={invitation.hero}
          venueName={invitation.location.venueName}
          eventDateDisplay={invitation.events.targetDisplay}
          isOpened={isOpened}
          onGoToLocation={() => scrollToSection("#lokasi")}
          onOpenDetails={() => setActiveModal("details")}
        />

        {invitation.couple ? (
          <CoupleProfile
            couple={invitation.couple}
            quote={invitation.hero.quote}
          />
        ) : (
          <CeremonyQuote
            heading={invitation.hero.quoteHeading}
            text={invitation.hero.quote.text}
            source={invitation.hero.quote.source}
          />
        )}

        {invitation.category === "telubulanan" ? (
          <>
            <Gallery items={invitation.gallery} />
            {invitation.milestones ? (
              <MilestoneStory
                eyebrow={invitation.milestones.eyebrow}
                heading={invitation.milestones.heading}
                description={invitation.milestones.description}
                items={invitation.milestones.items}
              />
            ) : null}
          </>
        ) : (
          <>
            <EventDetails events={invitation.events.items} />
            <Gallery items={invitation.gallery} />
          </>
        )}

        <Countdown
          targetIsoDate={invitation.events.targetIsoDate}
          targetDisplay={invitation.events.targetDisplay}
          onGoToLocation={() => scrollToSection("#lokasi")}
        />

        <Location
          location={invitation.location}
          primaryEvent={invitation.events.items[0]}
        />
      </main>

      <Closing closing={invitation.closing} onBackToTop={handleBackToTop} />

      <InvitationModals
        invitation={invitation}
        activeModal={activeModal}
        onClose={() => setActiveModal(null)}
        onSwitchToRsvp={() => setActiveModal("rsvp")}
        initialGuestName={guestName || ""}
      />
    </div>
  );
}
