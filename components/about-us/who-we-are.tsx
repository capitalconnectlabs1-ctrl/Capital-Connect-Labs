"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Target, Eye, Info } from "lucide-react";
import SectionHeader from "../common/section-header";

export function WhoWeAre() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "start 25%"],
  });

  const storySteps = [
    {
      title: "Our Values",
      icon: Info,
      desc: "We combine mentorship, access to investors and fundraising support, and industry connections to help founders build impactful and sustainable businesses.",
    },
    {
      title: "Our Mission",
      icon: Target,
      desc: "Accelerate startup success through guidance, capital, and ecosystem access.",
    },
    {
      title: "Our Vision",
      icon: Eye,
      desc: "Build the next generation of high-growth startups.",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="space-y-6 lg:space-y-12 w-full overflow-hidden"
    >
      <SectionHeader
        badgeText="About Us"
        badgeIcon={Info}
        title="Who We Are"
        subtitle="Capital Connect Labs is an incubator and accelerator platform designed to support startups from ideation to growth."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 overflow-hidden p-2">
        {storySteps.map((step, idx) => {
          const Icon = step.icon;
          const startTrigger = idx * 0.15;
          const endTrigger = startTrigger + 0.4;

          const rawX = useTransform(
            scrollYProgress,
            [0, startTrigger, Math.min(endTrigger, 1)],
            [150, 100, 0],
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
              <div className="group relative h-full p-6 md:p-8 rounded-2xl border border-gray-2/60 bg-gray-1/30 backdrop-blur-md transition-all duration-500 hover:border-brand/40 hover:bg-gray-1/50 hover:shadow-[0_0_40px_rgba(163,220,10,0.05)]">
                <div className="mb-4 flex items-center justify-center w-10 h-10 rounded-xl bg-background border border-gray-2/60 group-hover:border-brand/50 group-hover:shadow-[0_0_20px_rgba(163,220,10,0.15)] transition-all duration-500">
                  <Icon className="size-5 text-brand" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 tracking-wide">
                  {step.title}
                </h3>
                <p className="text-muted text-sm md:text-base font-light leading-relaxed text-balance">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
