import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { GitMerge } from "lucide-react";
import SectionHeader from "../common/section-header";
import { JourneyStepCard } from "./journey-step-card";
import { howItWorks } from "@/utils/about-us";

export default function YourJourneySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "start 15%"],
  });

  return (
    <section ref={containerRef} className="space-y-8 lg:space-y-12 py-10">
      <SectionHeader
        badgeText="How It Works"
        badgeIcon={GitMerge}
        title="Your Journey With Us"
        subtitle="A clear, structured path from application to demo day — designed to set you up for success at every stage."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-3 overflow-hidden p-2">
        {howItWorks.map((item, idx) => {
          const startTrigger = idx * 0.12;
          const endTrigger = startTrigger + 0.4;

          const rawX = useTransform(
            scrollYProgress,
            [0, startTrigger, Math.min(endTrigger, 1)],
            [300, 200, 0],
          );

          const rawOpacity = useTransform(
            scrollYProgress,
            [0, startTrigger, Math.min(endTrigger, 0.85)],
            [0, 0, 1],
          );

          const springX = useSpring(rawX, { damping: 25, stiffness: 120 });
          const springOpacity = useSpring(rawOpacity, {
            damping: 20,
            stiffness: 150,
          });

          return (
            <motion.div
              key={idx}
              style={{
                x: springX,
                opacity: springOpacity,
              }}
              className="h-full"
            >
              <JourneyStepCard
                step={item.step}
                title={item.title}
                desc={item.desc}
                isLast={idx === howItWorks.length - 1}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
