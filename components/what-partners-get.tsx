"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, ShieldCheck, Grid, Layers } from "lucide-react";
import Badge from "./common/badge";

const topPartnerCards = [
  {
    num: "01. Curated Deal Flow",
    icon: Compass,
    desc: "Structured selection processes ensure better screened startups compared to open market investments, allowing investors to capture early value",
  },
  {
    num: "02. Early Risk Mitigation",
    icon: ShieldCheck,
    desc: "Startups undergo strict business model validation within programs. Continuous feedback loops drastically reduce execution risk before capital commitment.",
  },
];

const bottomPartnerCard = {
  num: "03. Enhanced Success Rates",
  icon: Grid,
  desc: "Structured incubation frameworks drastically improve the survival and scaling probability of early-stage startups, directly improving investor returns through de-risked portfolios. Beyond capital matching, ecosystem partners gain early validation through rigorous business model vetting, preferential rights in subsequent follow-on funding rounds to double down on breakout companies, and direct networking with top-tier corporate leads, co-investors, and innovative founders.",
};

export default function WhatPartnersGet() {
  return (
    <section
      id="partners"
      className="w-full lg:scroll-mt-24 scroll-mt-12  space-y-4 lg:space-y-12 py-16 relative overflow-hidden container"
    >
      <div className="text-center flex flex-col items-center max-w-3xl mx-auto space-y-4">
        <Badge text="For Partners" icon={<Layers size={16} />} />
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
          What Our Partners Get
        </h2>
        <p className="text-muted text-base max-w-2xl font-light leading-relaxed px-4">
          Maximizing strategic outcomes for both early-stage founders and
          ecosystem investors.
        </p>
      </div>
      <div className="space-y-4 lg:space-y-6 mt-4 lg:mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {topPartnerCards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={idx}
                className="bg-gray-1 border border-gray-2 p-6 md:p-8 rounded-2xl flex flex-col gap-6 transition-all duration-300 min-h-55"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-muted border border-brand/20 flex items-center justify-center text-brand">
                    <IconComponent className="w-5 h-5 stroke-2" />
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-foreground tracking-tight">
                    {card.num}
                  </h3>
                </div>
                <p className="text-muted text-sm md:text-base font-light leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div className="w-full bg-gray-1 border border-gray-2 p-6 md:p-10 rounded-2xl flex flex-col gap-6 transition-all duration-300">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-muted border border-brand/20 flex items-center justify-center text-brand">
              <bottomPartnerCard.icon className="w-5 h-5 stroke-2" />
            </div>
            <h3 className="text-base md:text-lg font-bold text-foreground tracking-tight">
              {bottomPartnerCard.num}
            </h3>
          </div>
          <p className="text-muted text-sm md:text-base font-light leading-relaxed">
            {bottomPartnerCard.desc}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
