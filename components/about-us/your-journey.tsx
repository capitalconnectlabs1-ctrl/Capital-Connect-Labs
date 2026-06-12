"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { GitMerge } from "lucide-react";
import SectionHeader from "../common/section-header";
import { JourneyStepCard } from "./journey-step-card";
import { howItWorks } from "@/utils/about-us";

export default function YourJourneySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 60%"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const cardVariants: Variants = {
    hidden: (isEven: boolean) => ({
      opacity: 0,
      x: isEven ? 60 : -60,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 18,
        duration: 0.8,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="space-y-8 pt-30 lg:space-y-12 w-full overflow-hidden"
    >
      <SectionHeader
        badgeText="How It Works"
        badgeIcon={GitMerge}
        title="Your Journey With Us"
        subtitle="A clear, structured path from application to demo day — designed to set you up for success at every stage."
      />

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-6 md:left-1/2 top-2 bottom-2 w-px -translate-x-1/2 bg-gray-2/30" />
        <motion.div
          style={{ height: lineHeight }}
          className="absolute left-6 md:left-1/2 top-2 w-px -translate-x-1/2 bg-linear-to-b from-brand via-brand/80 to-transparent origin-top"
        />

        <div className="space-y-8 md:space-y-16">
          {howItWorks.map((item, idx) => {
            const isEven = idx % 2 === 1;

            return (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-stretch justify-between gap-4 md:gap-16 ${
                  isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-6 md:left-1/2 top-6 md:top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-background border-2 border-brand shadow-[0_0_20px_rgba(163,220,10,0.15)] text-[10px] font-bold text-brand">
                  {item.step}
                </div>
                <motion.div
                  custom={isEven}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={cardVariants}
                  className="w-full md:w-[calc(50%-2rem)] pl-14 sm:pl-12 md:pl-0"
                >
                  <JourneyStepCard
                    step={item.step}
                    title={item.title}
                    desc={item.desc}
                    isLast={idx === howItWorks.length - 1}
                  />
                </motion.div>
                <div className="hidden md:block w-[calc(50%-2rem)]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
