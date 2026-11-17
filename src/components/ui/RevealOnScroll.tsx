"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealDirection = "up" | "left" | "right";

type RevealOnScrollProps = {
  children: ReactNode;
  delayMs?: number;
  className?: string;
  forceShow?: boolean;
  direction?: RevealDirection;
};

const HIDDEN_TRANSFORM: Record<RevealDirection, string> = {
  up: "translate-y-6 opacity-0",
  left: "-translate-x-10 opacity-0",
  right: "translate-x-10 opacity-0",
};

export function RevealOnScroll({
  children,
  delayMs = 0,
  className = "",
  forceShow = false,
  direction = "up",
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);
  const isVisible = forceShow || shown;

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -32px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [shown]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100 ${
        isVisible
          ? "translate-x-0 translate-y-0 opacity-100"
          : HIDDEN_TRANSFORM[direction]
      } ${className}`}
    >
      {children}
    </div>
  );
}
