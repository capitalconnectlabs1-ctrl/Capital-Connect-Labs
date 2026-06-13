import Image from "next/image";
export const ProblemSolutionIllustration = () => (
  <Image
    className="rounded-xl!"
    width={200}
    height={200}
    src={"/weak-problems.webp"}
    alt="market"
  />
);

export const MarketUnderstandingIllustration = () => (
  <Image
    width={250}
    height={300}
    src={"/market-understading.webp"}
    alt="market"
  />
);

export const BusinessModelIllustration = () => (
  <Image width={200} height={300} src={"/model-business.webp"} alt="market" />
);

export const FinancialPreparednessIllustration = () => (
  <svg
    className="size-10 lg:size-16 shrink-0"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="fp-bar1" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stopColor="#A3DC2F" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#A3DC2F" />
      </linearGradient>
      <linearGradient id="fp-bar2" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stopColor="#00D1A0" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#00D1A0" />
      </linearGradient>
    </defs>

    <rect
      x="4"
      y="6"
      width="56"
      height="52"
      rx="6"
      fill="currentColor"
      fillOpacity="0.06"
      stroke="currentColor"
      strokeOpacity="0.15"
      strokeWidth="1"
    />

    <line
      x1="12"
      y1="50"
      x2="58"
      y2="50"
      stroke="currentColor"
      strokeOpacity="0.2"
      strokeWidth="0.75"
    />
    <line
      x1="12"
      y1="50"
      x2="12"
      y2="14"
      stroke="currentColor"
      strokeOpacity="0.2"
      strokeWidth="0.75"
    />

    <rect x="15" y="38" width="5" height="12" rx="1.5" fill="url(#fp-bar1)" />
    <rect x="23" y="32" width="5" height="18" rx="1.5" fill="url(#fp-bar1)" />
    <rect x="31" y="26" width="5" height="24" rx="1.5" fill="url(#fp-bar1)" />
    <rect x="39" y="21" width="5" height="29" rx="1.5" fill="url(#fp-bar1)" />
    <rect x="47" y="16" width="5" height="34" rx="1.5" fill="url(#fp-bar1)" />
    <rect x="16" y="43" width="3" height="7" rx="1" fill="url(#fp-bar2)" />
    <rect x="24" y="39" width="3" height="11" rx="1" fill="url(#fp-bar2)" />
    <rect x="32" y="34" width="3" height="16" rx="1" fill="url(#fp-bar2)" />
    <rect x="40" y="30" width="3" height="20" rx="1" fill="url(#fp-bar2)" />
    <rect x="48" y="25" width="3" height="25" rx="1" fill="url(#fp-bar2)" />

    <circle cx="54" cy="14" r="6" fill="#A3DC2F" fillOpacity="0.2" />
    <text
      x="54"
      y="18"
      textAnchor="middle"
      fontSize="8"
      fill="#A3DC2F"
      fontWeight="700"
    >
      $
    </text>
  </svg>
);

// ─────────────────────────────────────────────────────────────
// 2. Pitch Deck
// ─────────────────────────────────────────────────────────────
export const PitchDeckIllustration = () => (
  <svg
    className="size-10 lg:size-16 shrink-0"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="10"
      y="12"
      width="44"
      height="30"
      rx="4"
      fill="currentColor"
      fillOpacity="0.04"
      stroke="currentColor"
      strokeOpacity="0.1"
      strokeWidth="0.75"
      transform="rotate(-3 32 27)"
    />
    <rect
      x="10"
      y="12"
      width="44"
      height="30"
      rx="4"
      fill="currentColor"
      fillOpacity="0.05"
      stroke="currentColor"
      strokeOpacity="0.12"
      strokeWidth="0.75"
      transform="rotate(-1 32 27)"
    />
    <rect
      x="10"
      y="12"
      width="44"
      height="30"
      rx="4"
      fill="currentColor"
      fillOpacity="0.06"
      stroke="currentColor"
      strokeOpacity="0.2"
      strokeWidth="1"
    />
    <rect x="10" y="12" width="44" height="8" rx="4" fill="#A3DC2F" />
    <rect x="10" y="16" width="44" height="4" fill="#A3DC2F" />
    <text
      x="32"
      y="19.5"
      textAnchor="middle"
      fontSize="4.5"
      fill="#1a1a1a"
      fontWeight="700"
      letterSpacing="0.3"
    >
      SERIES A
    </text>

    {/* Sparkline trend */}
    <polyline
      points="16,36 20,32 25,34 30,28 35,24 40,26 46,20 50,17"
      fill="none"
      stroke="#00D1A0"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Area under sparkline */}
    <polygon
      points="16,36 20,32 25,34 30,28 35,24 40,26 46,20 50,17 50,38 16,38"
      fill="#00D1A0"
      fillOpacity="0.12"
    />
    <circle cx="26" cy="46" r="2" fill="#A3DC2F" />
    <circle cx="32" cy="46" r="1.5" fill="currentColor" fillOpacity="0.2" />
    <circle cx="37" cy="46" r="1.5" fill="currentColor" fillOpacity="0.2" />
    <circle cx="42" cy="46" r="1.5" fill="currentColor" fillOpacity="0.2" />
    <g transform="translate(52,52) rotate(-35)">
      <rect
        x="-3"
        y="-10"
        width="6"
        height="16"
        rx="1.5"
        fill="#FFC700"
        fillOpacity="0.9"
      />
      <polygon points="-3,6 3,6 0,11" fill="#FFC700" />
      <rect
        x="-3"
        y="-10"
        width="6"
        height="4"
        rx="1.5"
        fill="#FFC700"
        fillOpacity="0.5"
      />
    </g>
  </svg>
);

export const TractionIllustration = () => (
  <svg
    className="lg:size-16 size-10 shrink-0"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="tr-fill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#00D1A0" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#00D1A0" stopOpacity="0.02" />
      </linearGradient>
    </defs>

    {/* Axes */}
    <line
      x1="6"
      y1="42"
      x2="6"
      y2="8"
      stroke="currentColor"
      strokeOpacity="0.2"
      strokeWidth="0.75"
    />
    <line
      x1="6"
      y1="42"
      x2="44"
      y2="42"
      stroke="currentColor"
      strokeOpacity="0.2"
      strokeWidth="0.75"
    />

    <line
      x1="6"
      y1="34"
      x2="44"
      y2="34"
      stroke="currentColor"
      strokeOpacity="0.08"
      strokeWidth="0.5"
      strokeDasharray="2 2"
    />
    <line
      x1="6"
      y1="26"
      x2="44"
      y2="26"
      stroke="currentColor"
      strokeOpacity="0.08"
      strokeWidth="0.5"
      strokeDasharray="2 2"
    />
    <line
      x1="6"
      y1="18"
      x2="44"
      y2="18"
      stroke="currentColor"
      strokeOpacity="0.08"
      strokeWidth="0.5"
      strokeDasharray="2 2"
    />

    <polygon
      points="6,40 12,36 18,34 24,30 30,25 36,19 42,12 42,42 6,42"
      fill="url(#tr-fill)"
    />

    <polyline
      points="6,40 12,36 18,34 24,30 30,25 36,19 42,12"
      fill="none"
      stroke="#00D1A0"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <circle cx="6" cy="40" r="2" fill="#00D1A0" />
    <circle cx="12" cy="36" r="2" fill="#00D1A0" />
    <circle cx="18" cy="34" r="2" fill="#00D1A0" />
    <circle cx="24" cy="30" r="2" fill="#00D1A0" />
    <circle cx="30" cy="25" r="2.5" fill="#00D1A0" />
    <circle cx="36" cy="19" r="2.5" fill="#00D1A0" />
    <circle cx="42" cy="12" r="3" fill="#A3DC2F" />

    <rect x="24" y="6" width="18" height="9" rx="3" fill="#A3DC2F" />
    <text
      x="33"
      y="13"
      textAnchor="middle"
      fontSize="5"
      fill="#1a1a1a"
      fontWeight="700"
    >
      +147%
    </text>
  </svg>
);

export const TeamGapsIllustration = () => (
  <svg
    className="lg:size-16 size-10 shrink-0"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="16"
      y="4"
      width="16"
      height="13"
      rx="4"
      fill="#A3DC2F"
      fillOpacity="0.2"
      stroke="#A3DC2F"
      strokeWidth="1.5"
    />
    <circle cx="24" cy="8" r="2.5" fill="#A3DC2F" />
    <text
      x="24"
      y="15.5"
      textAnchor="middle"
      fontSize="4"
      fill="#A3DC2F"
      fontWeight="700"
    >
      CEO
    </text>

    <line
      x1="16"
      y1="17"
      x2="10"
      y2="24"
      stroke="currentColor"
      strokeOpacity="0.3"
      strokeWidth="1"
    />
    <line
      x1="32"
      y1="17"
      x2="38"
      y2="24"
      stroke="currentColor"
      strokeOpacity="0.2"
      strokeWidth="1"
      strokeDasharray="2 2"
    />

    <rect
      x="4"
      y="24"
      width="14"
      height="13"
      rx="4"
      fill="#00D1A0"
      fillOpacity="0.2"
      stroke="#00D1A0"
      strokeWidth="1.5"
    />
    <circle cx="11" cy="28" r="2" fill="#00D1A0" />
    <text
      x="11"
      y="35"
      textAnchor="middle"
      fontSize="4"
      fill="#00D1A0"
      fontWeight="700"
    >
      CTO
    </text>

    <rect
      x="30"
      y="24"
      width="14"
      height="13"
      rx="4"
      fill="none"
      stroke="#ff4d4d"
      strokeWidth="1.5"
      strokeDasharray="3 2"
    />
    <text
      x="37"
      y="32"
      textAnchor="middle"
      fontSize="4"
      fill="#ff4d4d"
      fontWeight="700"
    >
      CMO
    </text>
    <text
      x="37"
      y="36.5"
      textAnchor="middle"
      fontSize="3.5"
      fill="#ff4d4d"
      fillOpacity="0.7"
    >
      vacant
    </text>

    <rect
      x="4"
      y="41"
      width="40"
      height="2.5"
      rx="1.25"
      fill="currentColor"
      fillOpacity="0.1"
    />
    <rect
      x="4"
      y="41"
      width="36"
      height="2.5"
      rx="1.25"
      fill="#A3DC2F"
      fillOpacity="0.8"
    />

    <rect
      x="4"
      y="45"
      width="40"
      height="2.5"
      rx="1.25"
      fill="currentColor"
      fillOpacity="0.1"
    />
    <rect
      x="4"
      y="45"
      width="10"
      height="2.5"
      rx="1.25"
      fill="#ff4d4d"
      fillOpacity="0.8"
    />
  </svg>
);

export const LegalIllustration = () => (
  <svg
    className="lg:size-16 size-10 shrink-0"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="lg-shield" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#A3DC2F" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#A3DC2F" stopOpacity="0.06" />
      </linearGradient>
    </defs>

    <path
      d="M24 4 L40 10 V24 C40 36 24 44 24 44 C24 44 8 36 8 24 V10 Z"
      fill="url(#lg-shield)"
      stroke="#A3DC2F"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />

    <path
      d="M24 9 L35 13.5 V24 C35 33 24 40 24 40 C24 40 13 33 13 24 V13.5 Z"
      fill="none"
      stroke="#A3DC2F"
      strokeWidth="0.75"
      strokeOpacity="0.4"
      strokeLinejoin="round"
    />

    <path
      d="M17 24 L22 30 L31 18"
      fill="none"
      stroke="#00D1A0"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <circle cx="38" cy="10" r="6" fill="#ff4d4d" />
    <text
      x="38"
      y="13.5"
      textAnchor="middle"
      fontSize="8"
      fill="white"
      fontWeight="800"
    >
      !
    </text>
  </svg>
);

export const ValuationIllustration = () => (
  <svg
    className="lg:size-16 size-10 shrink-0"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="8"
      y1="22"
      x2="40"
      y2="18"
      stroke="currentColor"
      strokeOpacity="0.5"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="24"
      y1="20"
      x2="24"
      y2="38"
      stroke="currentColor"
      strokeOpacity="0.4"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <polygon points="19,38 29,38 24,44" fill="currentColor" fillOpacity="0.2" />

    <ellipse
      cx="10"
      cy="30"
      rx="8"
      ry="3.5"
      fill="#FFC700"
      fillOpacity="0.25"
      stroke="#FFC700"
      strokeWidth="1.25"
    />
    <line
      x1="8"
      y1="22"
      x2="10"
      y2="26.5"
      stroke="currentColor"
      strokeOpacity="0.3"
      strokeWidth="0.75"
    />
    <text
      x="10"
      y="34"
      textAnchor="middle"
      fontSize="4"
      fill="#FFC700"
      fontWeight="700"
    >
      $50M
    </text>
    <ellipse
      cx="38"
      cy="23"
      rx="6"
      ry="2.5"
      fill="#ff4d4d"
      fillOpacity="0.15"
      stroke="#ff4d4d"
      strokeWidth="1.25"
    />
    <line
      x1="40"
      y1="18"
      x2="38"
      y2="20.5"
      stroke="currentColor"
      strokeOpacity="0.3"
      strokeWidth="0.75"
    />
    <text
      x="38"
      y="27"
      textAnchor="middle"
      fontSize="4"
      fill="#ff4d4d"
      fontWeight="700"
    >
      $12M
    </text>
    <line
      x1="18"
      y1="28"
      x2="34"
      y2="22"
      stroke="#FFC700"
      strokeWidth="0.75"
      strokeDasharray="2 1.5"
    />
    <text
      x="26"
      y="21"
      textAnchor="middle"
      fontSize="3.5"
      fill="#FFC700"
      fontWeight="700"
    >
      4.2× gap
    </text>
  </svg>
);

export const FundraisingIllustration = () => (
  <svg
    className="lg:size-16 size-10 shrink-0"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="22"
      cy="26"
      r="18"
      stroke="currentColor"
      strokeOpacity="0.15"
      strokeWidth="1.25"
    />
    <circle
      cx="22"
      cy="26"
      r="12"
      stroke="#A3DC2F"
      strokeOpacity="0.35"
      strokeWidth="1.25"
      strokeDasharray="3 2"
    />
    <circle
      cx="22"
      cy="26"
      r="6"
      stroke="#A3DC2F"
      strokeOpacity="0.6"
      strokeWidth="1.25"
    />
    <circle cx="22" cy="26" r="3" fill="#A3DC2F" />
    <line
      x1="42"
      y1="6"
      x2="25"
      y2="23"
      stroke="#00D1A0"
      strokeWidth="2"
      strokeLinecap="round"
      markerEnd="url(#fr-arrow)"
    />
    <defs>
      <marker
        id="fr-arrow"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="5"
        markerHeight="5"
        orient="auto-start-reverse"
      >
        <path
          d="M2 1L8 5L2 9"
          fill="none"
          stroke="#00D1A0"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </marker>
    </defs>
    <line
      x1="42"
      y1="6"
      x2="40"
      y2="10"
      stroke="#00D1A0"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <line
      x1="42"
      y1="6"
      x2="46"
      y2="8"
      stroke="#00D1A0"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <circle cx="22" cy="8" r="2.5" fill="#FFC700" />
    <circle cx="38" cy="18" r="2.5" fill="#FFC700" fillOpacity="0.6" />
    <circle cx="40" cy="34" r="2.5" fill="#FFC700" fillOpacity="0.35" />
  </svg>
);

const ILLUSTRATIONS = [
  {
    name: "Financial Preparedness",
    Component: FinancialPreparednessIllustration,
  },
  { name: "Pitch Deck", Component: PitchDeckIllustration },
  { name: "Traction", Component: TractionIllustration },
  { name: "Team Gaps", Component: TeamGapsIllustration },
  { name: "Legal & Compliance", Component: LegalIllustration },
  { name: "Valuation", Component: ValuationIllustration },
  { name: "Fundraising Strategy", Component: FundraisingIllustration },
];

export const IllustrationPreview = () => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
      gap: "24px",
      padding: "32px",
      background: "#0e0e0e",
      minHeight: "100vh",
      fontFamily: "system-ui, sans-serif",
    }}
  >
    {ILLUSTRATIONS.map(({ name, Component }) => (
      <div
        key={name}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
          padding: "24px 16px",
          background: "#1a1a1a",
          borderRadius: "12px",
          border: "1px solid rgba(163,220,47,0.12)",
          color: "#A3DC2F",
        }}
      >
        <Component />
        <span
          style={{
            fontSize: "11px",
            color: "#888",
            textAlign: "center",
            lineHeight: 1.4,
          }}
        >
          {name}
        </span>
      </div>
    ))}
  </div>
);

export default IllustrationPreview;
