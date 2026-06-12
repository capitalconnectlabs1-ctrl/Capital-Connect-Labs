export const ProblemSolutionIllustration = () => (
  <svg
    className="w-full h-full max-h-40 text-brand"
    viewBox="0 0 200 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M40 80 H80 V40 H40 Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="4 4"
      className="opacity-60"
    />
    <circle cx="150" cy="60" r="25" stroke="currentColor" strokeWidth="2" />
    <path
      d="M80 60 H115"
      stroke="url(#brandGradient)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeDasharray="5 5"
    />
    <path d="M110 55 L120 60 L110 65" fill="currentColor" />
    <text
      x="60"
      y="105"
      textAnchor="middle"
      className="fill-foreground/70 text-[10px] font-medium"
    >
      Problem
    </text>
    <text
      x="150"
      y="105"
      textAnchor="middle"
      className="fill-foreground/70 text-[10px] font-medium"
    >
      Solution
    </text>
    <defs>
      <linearGradient id="brandGradient" x1="0" y1="0" x2="1" y2="0">
        <stop stopColor="var(--color-brand, #3b82f6)" />
        <stop offset="1" stopColor="#10b981" />
      </linearGradient>
    </defs>
  </svg>
);

// Inadequate Market Understanding SVG
export const MarketUnderstandingIllustration = () => (
  <svg
    className="w-full h-full max-h-40 text-brand"
    viewBox="0 0 300 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="30"
      y="50"
      width="60"
      height="50"
      rx="6"
      stroke="currentColor"
      strokeWidth="2"
      className="opacity-40"
    />
    <text
      x="60"
      y="75"
      textAnchor="middle"
      className="fill-foreground font-bold text-xs"
    >
      TAM
    </text>
    <rect
      x="120"
      y="35"
      width="60"
      height="65"
      rx="6"
      stroke="currentColor"
      strokeWidth="2"
      fill="currentColor"
      fillOpacity="0.05"
    />
    <text
      x="150"
      y="65"
      textAnchor="middle"
      className="fill-brand font-bold text-xs"
    >
      SAM
    </text>
    <rect
      x="210"
      y="20"
      width="60"
      height="80"
      rx="6"
      stroke="url(#brandGradient)"
      strokeWidth="2.5"
      fill="currentColor"
      fillOpacity="0.1"
    />
    <text
      x="240"
      y="55"
      textAnchor="middle"
      className="fill-emerald-400 font-bold text-xs"
    >
      SOM
    </text>
    <path
      d="M20 100 H280"
      stroke="currentColor"
      strokeWidth="1.5"
      className="opacity-30"
    />
  </svg>
);

// Poor Business Model Definition SVG
export const BusinessModelIllustration = () => (
  <svg
    className="w-full h-full max-h-40 text-brand"
    viewBox="0 0 200 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="20"
      y="25"
      width="45"
      height="30"
      rx="4"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <rect
      x="77"
      y="25"
      width="45"
      height="30"
      rx="4"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="currentColor"
      fillOpacity="0.05"
    />
    <rect
      x="135"
      y="25"
      width="45"
      height="30"
      rx="4"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M42 55 V80 H157 V55"
      stroke="url(#brandGradient)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="100" cy="80" r="12" fill="currentColor" />
    <text
      x="100"
      y="84"
      textAnchor="middle"
      className="fill-background font-bold text-[10px]"
    >
      $
    </text>
    <text
      x="42"
      y="43"
      textAnchor="middle"
      className="fill-foreground/80 text-[8px]"
    >
      Value
    </text>
    <text
      x="100"
      y="43"
      textAnchor="middle"
      className="fill-brand text-[8px] font-bold"
    >
      Channels
    </text>
    <text
      x="157"
      y="43"
      textAnchor="middle"
      className="fill-foreground/80 text-[8px]"
    >
      Revenue
    </text>
  </svg>
);

// Weak Financial Preparedness SVG
export const FinancialPreparednessIllustration = () => (
  <svg
    className="w-16 h-16 text-brand shrink-0"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="8"
      y="12"
      width="48"
      height="40"
      rx="6"
      stroke="currentColor"
      strokeWidth="2"
    />
    <line
      x1="16"
      y1="24"
      x2="32"
      y2="24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="16"
      y1="34"
      x2="40"
      y2="34"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="16"
      y1="44"
      x2="24"
      y2="44"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle
      cx="44"
      cy="40"
      r="6"
      stroke="url(#brandGradient)"
      strokeWidth="2"
    />
    <path
      d="M44 30 V34"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// Incomplete Pitch Deck SVG
export const PitchDeckIllustration = () => (
  <svg
    className="w-16 h-16 text-brand shrink-0"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 10 H42 L54 22 V54 H12 Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M42 10 V22 H54"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <path
      d="M20 32 H44 M20 40 H44 M20 48 H32"
      stroke="url(#brandGradient)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle
      cx="48"
      cy="48"
      r="8"
      fill="currentColor"
      className="text-emerald-500/20"
    />
    <path
      d="M46 45 L51 48 L46 51"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
