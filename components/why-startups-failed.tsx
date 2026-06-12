"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import BusinessModelIllustration from "@/utils/bussiness-model-svg";
import { sliderCards, topCards } from "@/utils/why-startup-fails";

const viewportConfig = { once: true, amount: 0.15 };

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};

export default function WhyStartupsFail() {
  return (
    <section id="risk" className="w-full scroll-mt-48 relative">
      <div className="absolute top-0 -left-24 -translate-x-1/2 size-125 bg-brand/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -right-24 size-75 bg-emerald-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container relative z-10 px-4">
        {/* Top Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-5 lg:gap-6">
          {topCards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              whileHover={{
                y: -6,
                borderColor: "var(--color-gray-1, rgba(255,255,255,0.15))",
              }}
              className={`${card.colSpan} ${card.cardPadding} max-lg:p-5 bg-gray-1/40 backdrop-blur-md border border-gray-2/60 rounded-2xl flex flex-col justify-between transition-all duration-300 lg:min-h-115 relative overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-radial-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none absolute-glow" />
              <div className="space-y-3 text-center relative z-10">
                <h3 className="font-bold text-foreground tracking-tight text-lg sm:text-xl">
                  {card.title}
                </h3>
                <p className="font-normal leading-relaxed text-sm sm:text-base text-muted/90">
                  {card.desc}
                </p>
              </div>

              <div className="relative z-10 w-full flex justify-center items-center mt-6">
                {card.useCustomIllustration ? (
                  <div className="w-full flex justify-center h-48 items-center">
                    <BusinessModelIllustration />
                  </div>
                ) : (
                  <motion.div
                    animate={{ y: [0, card.floatY, 0] }}
                    transition={{
                      duration: card.floatDuration,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                      delay: idx * 0.3,
                    }}
                    className="w-full relative overflow-hidden h-48"
                  >
                    <Image
                      src={card.imgSrc}
                      alt={card.title}
                      fill
                      sizes="(max-width: 1280px) 100vw, 33vw"
                      className="object-contain p-2 filter"
                    />
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Cards Row (Problem Statement Area) */}
        <div className="mt-5 lg:mt-6">
          {/* Swapped grid utilities for flex utilities on desktop (lg:) to allow centering via lg:justify-center */}
          <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row lg:flex-wrap lg:justify-center gap-5 lg:gap-6 items-stretch">
            {sliderCards.map((card, idx) => {
              const isWide = card.type === "wide";

              {
                /* 
                Calculates responsive widths manually for large viewports so flex items wrap correctly.
                lg:w-[calc(50%-12px)] gives a perfect 2-item row split while accounting for your 24px gap.
                lg:w-[calc(33.333%-16px)] gives a perfect 3-item row split.
              */
              }
              const gridSpan = isWide
                ? "w-full md:col-span-2 lg:w-[calc(50%-12px)]"
                : "w-full md:col-span-1 lg:w-[calc(33.333%-16px)]";

              const gradientStyles = isWide
                ? "bg-gradient-to-br from-gray-1/60 via-gray-1/40 to-brand/5 border-brand/20"
                : "bg-gray-1/30 backdrop-blur-md border-gray-2/60";

              return (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewportConfig}
                  whileHover={{
                    y: -6,
                    borderColor: "rgba(255, 255, 255, 0.2)",
                  }}
                  className={`${gridSpan} ${gradientStyles} border p-6 sm:p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 group relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-linear-to-tr from-transparent via-transparent to-white/2 pointer-events-none" />

                  <div className="space-y-4 relative z-10 w-full">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground tracking-tight leading-snug group-hover:text-brand transition-colors duration-300">
                      {card.title}
                    </h3>

                    {isWide ? (
                      <p className="text-muted text-sm sm:text-base font-normal leading-relaxed text-balance">
                        {card.desc}
                      </p>
                    ) : (
                      <ul className="space-y-3 pt-1">
                        {card.points?.map((point, pIdx) => (
                          <li
                            key={pIdx}
                            className="flex items-start gap-3 text-sm sm:text-base text-muted font-normal leading-relaxed"
                          >
                            <span className="mt-2 size-2 rounded-full bg-linear-to-r from-brand to-emerald-400 shrink-0 shadow-[0_0_8px_var(--color-brand)]" />
                            <span className="text-muted/90">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
