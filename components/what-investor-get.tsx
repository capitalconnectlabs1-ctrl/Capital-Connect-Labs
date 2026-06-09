"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
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
import SectionHeader from "./common/section-header";

const investorsBenefits = [
  {
    id: "investor-point-1",
    title: "Structured Event Plan & Networking",
    desc: "Investors gain early access to curated deals via startup pitch events. Structured selection processes ensure better screening compared to open market investments, providing opportunities to invest at lower valuations and maximize upside potential.",
    icon: CalendarDays,
  },
  {
    id: "investor-point-2",
    title: "Portfolio Diversification",
    desc: "Incubators enable investors to spread capital across multiple startups, drastically reducing risk compared to concentrated investments while gaining exposure to emerging sectors and innovative technologies.",
    icon: PieChart,
  },
  {
    id: "investor-point-3",
    title: "Enhanced Startup Success Rates",
    desc: "We provide mentorship, resources, and deep networks. These structured programs improve survival and scaling probability of startups, translating to higher probability of attractive exits and investor returns.",
    icon: TrendingUp,
  },
  {
    id: "investor-point-4",
    title: "Early Validation & Risk Mitigation",
    desc: "Startups undergo rigorous business model validation within our programs. Continuous feedback loops reduce execution risk, letting investors benefit from de-risked opportunities before committing additional capital.",
    icon: ShieldCheck,
  },
  {
    id: "investor-point-5",
    title: "Strategic Influence & Visibility",
    desc: "Investors may shape program structure and mentor frontline startups. This builds your brand as a value-adding partner rather than just a capital provider, enhancing visibility in the entire ecosystem.",
    icon: Eye,
  },
  {
    id: "investor-point-6",
    title: "Follow-on Investment Opportunities",
    desc: "Gain preferential rights in subsequent funding rounds. Secure the ability to double down on high-performing startups and build stronger ownership stakes in breakout companies.",
    icon: ArrowUpRight,
  },
  {
    id: "investor-point-7",
    title: "Network & Ecosystem Benefits",
    desc: "Instant access to founders, seasoned co-investors, and global corporate partners. Leverage massive collaboration opportunities and knowledge sharing to improve your future deal sourcing.",
    icon: Share2,
  },
  {
    id: "investor-point-8",
    title: "Financial Returns",
    desc: "Equity stakes in high-growth potential startups. Capitalize on the potential for significant returns through strategic acquisitions or IPOs, with accelerated value creation driven by structured support.",
    icon: Coins,
  },
  {
    id: "investor-point-9",
    title: "Innovation Insights & Market Intelligence",
    desc: "Get early visibility into emerging trends and disruptive innovations. Gain strategic market insights that can inform your broader investment strategies and give you a sharp competitive advantage.",
    icon: Lightbulb,
  },
];

export default function WhatInvestorsGet() {
  const [activeId, setActiveId] = useState("investor-point-1");

  const handleIndicatorClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="investors"
      className="w-full py-16 lg:scroll-mt-24 scroll-mt-12 "
    >
      <div className="container">
        <SectionHeader
          badgeText="For Investors"
          badgeIcon={Briefcase}
          title="What Investors Get in Addition to Investment Opportunities"
          subtitle="Structured selection processes ensure better screening compared to open market investments."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6 lg:mt-16 relative items-start">
          <div className="hidden lg:block lg:col-span-4 lg:sticky lg:top-28 space-y-1">
            {investorsBenefits.map((benefit, idx) => {
              const isActive = activeId === benefit.id;
              return (
                <button
                  key={benefit.id}
                  onClick={() => handleIndicatorClick(benefit.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl flex items-center gap-4 transition-colors duration-200 cursor-pointer border ${
                    isActive
                      ? "bg-gray-1 border-gray-2 text-brand font-medium"
                      : "bg-transparent border-transparent text-muted hover:text-foreground"
                  }`}
                >
                  <span className={isActive ? "text-brand" : "text-muted"}>
                    {idx + 1}.
                  </span>
                  <span className={isActive ? "text-brand" : ""}>
                    {benefit.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="col-span-1 lg:col-span-8">
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible gap-4 lg:gap-6 snap-x snap-mandatory pb-4 lg:pb-0 scrollbar-none [&::-webkit-scrollbar]:hidden">
              {investorsBenefits.map((benefit, idx) => {
                const isActive = activeId === benefit.id;
                const IconComponent = benefit.icon;

                return (
                  <motion.div
                    key={benefit.id}
                    id={benefit.id}
                    onViewportEnter={() => setActiveId(benefit.id)}
                    viewport={{ amount: 0.6 }}
                    initial={{ opacity: 0.6, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`p-6 lg:p-8 rounded-xl bg-gray-1 border transition-all duration-300 shrink-0 w-[85vw] sm:w-120 lg:w-full snap-center ${
                      isActive ? "border-brand/40 shadow-sm" : "border-gray-2"
                    }`}
                  >
                    <div className="mb-6 flex items-center justify-between">
                      <span className="text-xs text-muted font-medium">
                        Point {idx + 1}
                      </span>

                      <motion.div
                        animate={{
                          scale: isActive ? 1.05 : 1,
                          backgroundColor: isActive
                            ? "var(--color-brand-muted)"
                            : "rgba(36, 36, 36, 0.5)",
                        }}
                        className={`size-10 rounded-xl flex items-center justify-center border transition-colors duration-300 ${
                          isActive
                            ? "border-brand/20 text-brand"
                            : "border-transparent text-muted"
                        }`}
                      >
                        <IconComponent className="size-5" />
                      </motion.div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted text-base font-normal leading-relaxed">
                      {benefit.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex lg:hidden justify-center items-center mt-4">
              {investorsBenefits.map((benefit, idx) => {
                const isActive = activeId === benefit.id;
                return (
                  /* ACCESSIBILITY FIX: Added button structural wrappers for target tap padding extension */
                  <button
                    key={`dot-${benefit.id}`}
                    onClick={() => handleIndicatorClick(benefit.id)}
                    className="p-2.5 flex items-center justify-center cursor-pointer"
                    aria-label={`Go to slide for point ${idx + 1}`}
                  >
                    <div
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        isActive ? "w-6 bg-brand" : "w-1.5 bg-gray-2"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
