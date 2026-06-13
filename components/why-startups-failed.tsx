"use client";

import { sliderCards, topCards } from "@/utils/why-startup-fails";
import { motion, Variants } from "framer-motion";

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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-5 lg:gap-6">
          {topCards.map((card, idx) => {
            const Illustration = card.illustration;
            return (
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
                  <motion.div
                    animate={{ y: [0, card.floatY, 0] }}
                    transition={{
                      duration: card.floatDuration,
                      repeat: Infinity,
                      repeatType: "loop",
                      ease: "easeInOut",
                      delay: idx * 0.3,
                    }}
                    className="w-full relative overflow-hidden h-48 flex items-center justify-center"
                  >
                    <Illustration />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
        <div className="mt-5 lg:mt-6">
          <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row lg:flex-wrap lg:justify-center gap-5 lg:gap-6 items-stretch">
            {sliderCards.map((card, idx) => {
              const isWide = card.type === "wide";
              const CardIllustration = card.illustration;

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
                  className={`${gridSpan} ${gradientStyles} border p-6 sm:p-8 rounded-2xl flex flex-col transition-all duration-300 group relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-linear-to-tr from-transparent via-transparent to-white/2 pointer-events-none" />

                  <div className="relative z-10 flex flex-col h-full">
                    {isWide ? (
                      <>
                        <div className="flex items-start justify-between gap-6 w-full">
                          <h3 className="text-lg sm:text-xl font-bold text-foreground tracking-tight leading-snug group-hover:text-brand transition-colors duration-300">
                            {card.title}
                          </h3>
                          {CardIllustration && (
                            <div className="shrink-0 p-2 bg-gray-1/20 border border-gray-2/30 rounded-xl">
                              <CardIllustration />
                            </div>
                          )}
                        </div>
                        <p className="mt-4 text-muted text-sm sm:text-base font-normal leading-relaxed text-balance">
                          {card.desc}
                        </p>
                      </>
                    ) : (
                      <>
                        <div className="flex items-start justify-between gap-4 w-full">
                          <h3 className="text-lg sm:text-xl font-bold text-foreground tracking-tight leading-snug group-hover:text-brand transition-colors duration-300">
                            {card.title}
                          </h3>
                          {CardIllustration && <CardIllustration />}
                        </div>

                        <ul className="mt-4 space-y-3">
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
                      </>
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
