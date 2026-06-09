"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AlertTriangle } from "lucide-react";
import SectionHeader from "./common/section-header";

const topCardsData = [
  {
    title: "Weak Problem–Solution Fit",
    desc: "Startups struggle to clearly define the problem they are solving. The proposed solution often lacks sharp differentiation or clarity.",
    imgSrc: "/weak-problems.webp",
    isCenter: false,
    colSpan: "lg:col-span-3",
    cardPadding: "p-6",
  },
  {
    title: "Inadequate Market Understanding",
    desc: "Founders present inflated or generic market sizes (TAM/SAM/SOM). There is a limited understanding of customer segments and buying behavior.",
    imgSrc: "/market-understading.webp",
    isCenter: false,
    colSpan: "lg:col-span-6",
    cardPadding: "p-8",
  },
  {
    title: "Poor Business Model Definition",
    desc: "Revenue streams are unclear or unrealistic. Unit economics are weak or completely uncalculated.",
    imgSrc: "/model-business.webp",
    isCenter: false,
    colSpan: "lg:col-span-3",
    cardPadding: "p-6",
  },
];

const bottomCardsData = [
  {
    title: "Weak Financial Preparedness & Projections",
    desc: "Complete absence of detailed financial projections and cash flow modeling. Founders cannot justify their high funding requirements, current valuation metrics, or explain the strategic use of funds to institutional investors.",
  },
  {
    title: "Incomplete Pitch Deck & Outreach Strategy",
    desc: "Storytelling is poor, chaotic, or overly technical, missing critical baseline sections like team capabilities, legal readiness, and traction. Founders build anchor-inflated valuations with zero benchmark data, backed by random, poorly timed outreach instead of targeting an ideal investor profile.",
  },
];

export default function WhyStartupsFail() {
  return (
    <section
      id="risk"
      className="w-full pb-16 scroll-mt-48 relative overflow-hidden "
    >
      <div className="absolute top-[20%] left-[-15%] w-md h-112 rounded-full bg-accent-mint/10 blur-[130px] pointer-events-none z-0 mix-blend-screen opacity-60" />
      <div className="absolute bottom-[20%] right-[-15%] size-125 rounded-full bg-brand/15 blur-[140px] pointer-events-none z-0 mix-blend-screen opacity-70" />
      <div className="container">
        <SectionHeader
          badgeText="The Challenge"
          badgeIcon={AlertTriangle}
          title="Why Startups Fail to Raise Funds"
          subtitle="Common fundraising readiness gaps that prevent early-stage startups
            from securing institutional capital."
        />
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-4 lg:gap-6 mt-6 lg:mt-12">
          {topCardsData.map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, borderColor: "var(--gray-1)" }}
              className={`${card.colSpan} ${card.cardPadding} max-lg:p-4! bg-gray-1 border border-gray-2 rounded-2xl flex flex-col justify-between transition-all duration-300 lg:min-h-110`}
            >
              <div className="space-y-3 text-center">
                <h3
                  className={`font-bold text-foreground tracking-tight text-lg`}
                >
                  {card.title}
                </h3>

                <p
                  className={`font-normal leading-relaxed text-base text-muted`}
                >
                  {card.desc}
                </p>
              </div>
              <div className={`w-full relative overflow-hidden mt-6 h-48`}>
                <Image
                  src={card.imgSrc}
                  alt={card.title}
                  fill
                  sizes="(max-w-7xl) 100vw"
                  className="object-contain p-2"
                  priority={card.isCenter}
                />
              </div>
            </motion.div>
          ))}
        </div>
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 mt-4 lg:mt-6 gap-4 lg:gap-6">
          {bottomCardsData.map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, borderColor: "var(--gray-1)" }}
              className="bg-gray-1 border border-gray-2 p-4 lg:p-10 rounded-3xl space-y-4 flex flex-col lg:justify-center transition-all duration-300"
            >
              <h3 className="text-lg max-lg:text-center lg:text-3xl font-bold text-foreground tracking-tight leading-snug">
                {card.title.split("&").map((part, pIdx) => (
                  <React.Fragment key={pIdx}>
                    {pIdx > 0 && <br />}
                    {pIdx > 0 ? `& ${part.trim()}` : part.trim()}
                  </React.Fragment>
                ))}
              </h3>
              <p className="text-muted max-lg:text-center text-sm md:text-base font-light leading-relaxed opacity-85">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
