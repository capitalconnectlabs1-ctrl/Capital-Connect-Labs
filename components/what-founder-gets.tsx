"use client";
import { founderBenefits } from "@/utils/what-founder-get";
import { motion } from "framer-motion";

export default function WhatFoundersGet() {
  return (
    <section
      id="founders"
      className="w-full pb-30 lg:scroll-mt-24 scroll-mt-12"
    >
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-6">
          {founderBenefits.slice(0, 3).map((benefit, idx) => (
            <BenefitCard key={benefit.id} benefit={benefit} idx={idx} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mt-4 lg:mt-6 lg:w-2/3 lg:mx-auto">
          {founderBenefits.slice(3).map((benefit, idx) => (
            <BenefitCard key={benefit.id} benefit={benefit} idx={idx + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitCard({
  benefit,
  idx,
}: {
  benefit: (typeof founderBenefits)[number];
  idx: number;
}) {
  const IconComponent = benefit.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: idx * 0.07 }}
      className="bg-gray-1 border border-gray-2 p-6 lg:p-8 rounded-2xl flex flex-col gap-5 hover:border-brand/30 transition-all duration-300 hover:-translate-y-0.5"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs text-muted font-medium">Point {idx + 1}</span>
        <div className="size-10 rounded-xl bg-brand-muted border border-brand/20 flex items-center justify-center">
          <IconComponent className="size-5 text-brand" />
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-foreground tracking-tight">
          {benefit.title}
        </h3>
        <p className="text-muted text-sm font-normal leading-relaxed">
          {benefit.desc}
        </p>
      </div>
    </motion.div>
  );
}
