import type { SVGProps } from "react";

/**
 * Balinese Padma (lotus) divider motif used to mark ceremonial sections
 * and anchor the Warm Ivory & Champagne Gold identity.
 */
export function PadmaDivider({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center gap-3 ${className}`}
      aria-hidden="true"
    >
      <span className="h-px flex-1 bg-[#C59B43]/55" />
      <svg
        width="28"
        height="18"
        viewBox="0 0 28 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 text-[#835C16]"
      >
        <path
          d="M14 2C15.8 5.2 16.2 8.8 14 12.5C11.8 8.8 12.2 5.2 14 2Z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path
          d="M14 12.5C10.5 11.4 7.8 8.9 7 5.5C9.8 6 12.2 8.4 14 12.5Z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path
          d="M14 12.5C17.5 11.4 20.2 8.9 21 5.5C18.2 6 15.8 8.4 14 12.5Z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path
          d="M5 13.5C8.5 15.2 19.5 15.2 23 13.5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
      <span className="h-px flex-1 bg-[#C59B43]/55" />
    </div>
  );
}

/**
 * Subtle Balinese pepatran-inspired corner flourish for framing cards and portraits.
 */
export function PepatranCorner({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path
        d="M2 34V14C2 7.37258 7.37258 2 14 2H34"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
      <path
        d="M8 28V15C8 11.134 11.134 8 15 8H28"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeDasharray="2 3"
      />
      <circle cx="14" cy="14" r="2" fill="currentColor" />
    </svg>
  );
}

/**
 * Delicate 8-petal Balinese Padma Mandala watermark for ceremonial depth.
 */
export function PadmaMandalaWatermark({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) {
  const angles = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      {...props}
    >
      <circle
        cx="120"
        cy="120"
        r="108"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeDasharray="3 5"
      />
      <circle cx="120" cy="120" r="88" stroke="currentColor" strokeWidth="0.9" />
      <circle cx="120" cy="120" r="32" stroke="currentColor" strokeWidth="1" />
      {angles.map((deg) => (
        <g key={deg} transform={`rotate(${deg} 120 120)`}>
          <path
            d="M120 26C131 48 131 74 120 92C109 74 109 48 120 26Z"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinejoin="round"
          />
          <circle cx="120" cy="16" r="2" fill="currentColor" />
        </g>
      ))}
    </svg>
  );
}

/**
 * Traditional Balinese Kamboja (Frangipani) 5-petal blossom accent.
 */
export function KambojaBlossom({
  className = "",
  ...props
}: SVGProps<SVGSVGElement>) {
  const angles = [0, 72, 144, 216, 288];
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {angles.map((deg) => (
        <path
          key={deg}
          transform={`rotate(${deg} 20 20)`}
          d="M20 4C23.5 8 24 14 20 18.5C16 14 16.5 8 20 4Z"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinejoin="round"
        />
      ))}
      <circle cx="20" cy="20" r="2.2" fill="currentColor" />
    </svg>
  );
}

export function CalendarMotifIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <rect
        x="2.5"
        y="4"
        width="15"
        height="13.5"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M2.5 8.5H17.5M6.5 2.25V5M13.5 2.25V5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ClockMotifIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M10 6V10.2L12.8 12"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LocationMotifIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M10 17.5C10 17.5 15.5 12.7 15.5 8.5C15.5 5.46243 13.0376 3 10 3C6.96243 3 4.5 5.46243 4.5 8.5C4.5 12.7 10 17.5 10 17.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="8.5" r="2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
