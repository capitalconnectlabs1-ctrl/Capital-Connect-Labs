"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

import {
  CalendarDays,
  PieChart,
  TrendingUp,
  ShieldCheck,
  Eye,
  ArrowUpRight,
  Share2,
  Coins,
  Lightbulb,
} from "lucide-react";

const investorBenefits = [
  {
    id: "investor-point-1",
    title: "Structured Event Plan & Networking",
    icon: CalendarDays,
    bullets: [
      "Investors gain early access to curated deals via startup pitch events",
      "Structured selection processes ensure better screening compared to open market investments",
      "Opportunity to invest at lower valuations and maximize upside potential",
    ],
  },
  {
    id: "investor-point-2",
    title: "Portfolio Diversification",
    icon: PieChart,
    bullets: [
      "Incubators enable investors to spread capital across multiple startups",
      "Reduces risk compared to concentrated investments",
      "Exposure to emerging sectors and innovative technologies",
    ],
  },
  {
    id: "investor-point-3",
    title: "Enhanced Startup Success Rates",
    icon: TrendingUp,
    bullets: [
      "Incubators provide mentorship, resources, and networks",
      "Structured programs improve survival and scaling probability of startups",
      "Higher probability of attractive exits improves investor returns",
    ],
  },
  {
    id: "investor-point-4",
    title: "Early Validation & Risk Mitigation",
    icon: ShieldCheck,
    bullets: [
      "Startups undergo business model validation within programs",
      "Continuous feedback loops reduce execution risk",
      "Investors benefit from de-risked opportunities before committing additional capital",
    ],
  },
  {
    id: "investor-point-5",
    title: "Strategic Influence & Visibility",
    icon: Eye,
    bullets: [
      "Investors may shape program structure and mentor startups",
      "Enhanced visibility in the startup ecosystem",
      "Builds brand as a value-adding partner rather than just a capital provider",
    ],
  },
  {
    id: "investor-point-6",
    title: "Follow-on Investment Opportunities",
    icon: ArrowUpRight,
    bullets: [
      "Investors gain preferential rights in subsequent funding rounds",
      "Ability to double down on high-performing startups",
      "Stronger ownership in breakout companies",
    ],
  },
  {
    id: "investor-point-7",
    title: "Network & Ecosystem Benefits",
    icon: Share2,
    bullets: [
      "Access to founders, co-investors, and corporate partners",
      "Collaboration opportunities and knowledge sharing",
      "Improves future deal sourcing and partnerships",
    ],
  },
  {
    id: "investor-point-8",
    title: "Financial Returns",
    icon: Coins,
    bullets: [
      "Equity stakes in startups with high growth potential",
      "Potential for significant returns through acquisitions or IPOs",
      "Accelerated value creation driven by structured support",
    ],
  },
  {
    id: "investor-point-9",
    title: "Innovation Insights & Market Intelligence",
    icon: Lightbulb,
    bullets: [
      "Early visibility into emerging trends and disruptive innovations",
      "Strategic insights that can inform broader investment strategies",
      "Competitive advantage through proximity to innovation",
    ],
  },
];

export default function WhatInvestorsGet() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);

  return (
    <section
      id="investors"
      className="w-full pb-20 lg:pb-30 scroll-mt-12 relative"
    >
      <div className="container">
        <div className="relative mt-8 w-full">
          <Swiper
            modules={[Pagination]}
            spaceBetween={24}
            autoHeight={false}
            touchStartPreventDefault={false}
            onSwiper={setSwiperRef}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            className="w-full flex items-stretch overflow-hidden"
          >
            {investorBenefits.map((benefit, idx) => {
              const IconComponent = benefit.icon;
              return (
                <SwiperSlide
                  key={`slide-${benefit.id}`}
                  className="h-auto flex py-2"
                >
                  <div className="w-full h-full bg-gray-1 border min-h-97 border-gray-2 p-6 sm:p-8 rounded-3xl shadow-xl backdrop-blur-md flex flex-col justify-between flex-1">
                    <div>
                      <div className="mb-6 flex items-center justify-between">
                        <span className="text-sm text-muted font-semibold opacity-60">
                          Benefits Platform • 0{idx + 1}
                        </span>
                        <div className="size-12 rounded-2xl flex items-center justify-center border border-brand/20 bg-brand/5 text-brand shadow-sm">
                          <IconComponent className="size-6" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-4 tracking-tight">
                        {benefit.title}
                      </h3>

                      <ul className="space-y-3">
                        {benefit.bullets.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-3 text-sm text-muted font-normal leading-relaxed"
                          >
                            <span className="mt-2 size-1.5 rounded-full bg-brand shrink-0" />
                            <span className="opacity-90">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="flex items-center justify-center gap-2.5 mt-4 sm:mt-10 w-full">
            {investorBenefits.map((_, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={`dot-nav-${idx}`}
                  onClick={() => swiperRef?.slideTo(idx)}
                  className={`size-2.5 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                    isActive
                      ? "bg-brand scale-110 opacity-100"
                      : "bg-gray-300 opacity-40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
