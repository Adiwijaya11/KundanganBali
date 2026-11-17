"use client";

type LeafConfig = {
  id: number;
  left: string;
  size: number;
  duration: string;
  delay: string;
  tone: "sage" | "gold" | "ivory";
};

const LEAVES: LeafConfig[] = [
  { id: 1, left: "6%", size: 18, duration: "13s", delay: "0s", tone: "sage" },
  { id: 2, left: "16%", size: 14, duration: "16s", delay: "-4s", tone: "gold" },
  { id: 3, left: "28%", size: 20, duration: "14s", delay: "-8s", tone: "sage" },
  { id: 4, left: "41%", size: 13, duration: "17s", delay: "-2s", tone: "ivory" },
  { id: 5, left: "54%", size: 17, duration: "12.5s", delay: "-6s", tone: "sage" },
  { id: 6, left: "67%", size: 15, duration: "15.5s", delay: "-10s", tone: "gold" },
  { id: 7, left: "79%", size: 19, duration: "13.5s", delay: "-3s", tone: "sage" },
  { id: 8, left: "90%", size: 14, duration: "16.5s", delay: "-7s", tone: "ivory" },
  { id: 9, left: "22%", size: 12, duration: "18s", delay: "-11s", tone: "gold" },
  { id: 10, left: "73%", size: 16, duration: "14.5s", delay: "-5s", tone: "sage" },
];

const TONE_CLASS: Record<LeafConfig["tone"], string> = {
  sage: "text-[#2F4538]/45",
  gold: "text-[#9A7B4F]/45",
  ivory: "text-[#C59B43]/50",
};

export function FallingLeaves({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-[5] overflow-hidden motion-reduce:hidden ${className}`}
    >
      {LEAVES.map((leaf) => (
        <span
          key={leaf.id}
          style={{
            left: leaf.left,
            top: "-8%",
            animationDuration: leaf.duration,
            animationDelay: leaf.delay,
          }}
          className={`animate-leaf-fall absolute will-change-transform ${TONE_CLASS[leaf.tone]}`}
        >
          <svg
            width={leaf.size}
            height={leaf.size * 1.35}
            viewBox="0 0 20 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 1C15.5 6.5 18.5 13 17.5 20.5C15.2 24 12.6 26.2 10 27C7.4 26.2 4.8 24 2.5 20.5C1.5 13 4.5 6.5 10 1Z"
              fill="currentColor"
            />
            <path
              d="M10 4V25.5"
              stroke="#F7F6F2"
              strokeWidth="0.9"
              strokeLinecap="round"
              opacity="0.7"
            />
          </svg>
        </span>
      ))}
    </div>
  );
}
