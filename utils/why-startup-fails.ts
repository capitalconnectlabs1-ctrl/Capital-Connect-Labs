import {
  ProblemSolutionIllustration,
  MarketUnderstandingIllustration,
  BusinessModelIllustration,
  FinancialPreparednessIllustration,
  PitchDeckIllustration,
  TractionIllustration,
  TeamGapsIllustration,
  LegalIllustration,
  ValuationIllustration,
  FundraisingIllustration,
} from "@/constants/why-startup-fails";

export const topCards = [
  {
    title: "Weak Problem–Solution Fit",
    desc: "Startups struggle to clearly define the problem they are solving. Solution lacks sharp differentiation or clarity.",
    colSpan: "lg:col-span-3 md:col-span-1",
    cardPadding: "p-6",
    floatDuration: 3.5,
    floatY: -6,
    illustration: ProblemSolutionIllustration,
  },
  {
    title: "Inadequate Market Understanding",
    desc: "Founders present inflated or generic market sizes (TAM/SAM/SOM). Limited understanding of customer segments and buying behavior.",
    colSpan: "lg:col-span-6 md:col-span-1",
    cardPadding: "p-8",
    floatDuration: 4.2,
    floatY: -4,
    illustration: MarketUnderstandingIllustration,
  },
  {
    title: "Poor Business Model Definition",
    desc: "Revenue streams are unclear or unrealistic. Unit economics are weak or not calculated.",
    colSpan: "lg:col-span-3 md:col-span-1",
    cardPadding: "p-6",
    floatDuration: 3.8,
    floatY: -5,
    illustration: BusinessModelIllustration,
  },
];

export const sliderCards = [
  {
    type: "wide",
    title: "Weak Financial Preparedness & Projections",
    desc: "Complete absence of detailed financial projections and cash flow modeling. Founders cannot justify their high funding requirements, current valuation metrics, or explain the strategic use of funds to institutional investors.",
    illustration: FinancialPreparednessIllustration,
  },
  {
    type: "wide",
    title: "Incomplete Pitch Deck & Outreach Strategy",
    desc: "Storytelling is poor, chaotic, or overly technical, missing critical baseline sections like team capabilities, legal readiness, and traction. Founders build anchor-inflated valuations with zero benchmark data, backed by random, poorly timed outreach instead of targeting an ideal investor profile.",
    illustration: PitchDeckIllustration,
  },
  {
    type: "small",
    title: "Lack of Traction or Misrepresented Traction",
    points: [
      "Insufficient or irrelevant metrics (vanity metrics)",
      "No clear growth story",
    ],
    illustration: TractionIllustration,
  },
  {
    type: "small",
    title: "Team Gaps",
    points: [
      "Lack of complementary skills in the founding team",
      "Key roles are unfilled",
    ],
    illustration: TeamGapsIllustration,
  },
  {
    type: "small",
    title: "Legal and Compliance Unpreparedness",
    points: [
      "Incomplete incorporation or unclear cap table",
      "Missing IP protection or regulatory awareness",
    ],
    illustration: LegalIllustration,
  },
  {
    type: "small",
    title: "Unrealistic Valuation Expectations",
    points: [
      "Founders anchor on inflated valuations without justification",
      "Poor understanding of comparable deals",
    ],
    illustration: ValuationIllustration,
  },
  {
    type: "small",
    title: "Lack of Fundraising Strategy",
    points: [
      "No clear target investor profile",
      "Random or poorly timed outreach",
    ],
    illustration: FundraisingIllustration,
  },
];
