"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import BusinessModelIllustration from "@/utils/bussiness-model-svg";
import { sliderCards, topCards } from "@/utils/why-startup-fails";

const chunkArray = (arr: typeof sliderCards, size: number) => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size),
  );
};

export default function WhyStartupsFail() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const pairs = chunkArray(sliderCards, 2);
  const AUTOPLAY_TIME = 4000;
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % pairs.length);
    }, AUTOPLAY_TIME);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [pairs.length]);

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      setCurrentIndex((prev) => (prev + 1) % pairs.length);
      resetTimer();
    } else if (info.offset.x > swipeThreshold) {
      setCurrentIndex((prev) => (prev - 1 + pairs.length) % pairs.length);
      resetTimer();
    }
  };

  const handleProgressClick = (idx: number) => {
    setCurrentIndex(idx);
    resetTimer();
  };

  return (
    <section id="risk" className="w-full scroll-mt-48 relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-4 lg:gap-6">
          {topCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                delay: idx * 0.08,
                ease: "easeOut",
              }}
              whileHover={{ y: -4 }}
              className={`${card.colSpan} ${card.cardPadding} max-lg:p-4! bg-gray-1 border border-gray-2 rounded-2xl flex flex-col justify-between transition-colors duration-300 lg:min-h-110`}
            >
              <div className="space-y-3 text-center">
                <h3 className="font-bold text-foreground tracking-tight text-lg">
                  {card.title}
                </h3>
                <p className="font-normal leading-relaxed text-base text-muted">
                  {card.desc}
                </p>
              </div>
              {card.useCustomIllustration ? (
                <BusinessModelIllustration />
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
                  className="w-full relative overflow-hidden mt-6 h-48"
                >
                  <Image
                    src={card.imgSrc}
                    alt={card.title}
                    fill
                    sizes="(max-width: 1280px) 100vw, 33vw"
                    className="object-contain p-2"
                  />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
        <div className="mt-4 lg:mt-6 relative select-none">
          <div className="overflow-hidden min-h-115 sm:min-h-85 md:min-h-70 lg:min-h-72 xl:min-h-65 flex items-stretch touch-pan-y">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 w-full items-stretch cursor-grab active:cursor-grabbing"
              >
                {pairs[currentIndex].map((card, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-1 border border-gray-2 p-5 sm:p-6 lg:p-8 rounded-2xl flex flex-col justify-start w-full h-full transition-colors duration-300 pointer-events-none"
                  >
                    {card.type === "wide" ? (
                      <div className="space-y-3 sm:space-y-4">
                        <h3 className="text-lg sm:text-xl font-bold text-foreground tracking-tight leading-snug">
                          {card.title}
                        </h3>
                        <p className="text-muted text-sm sm:text-base lg:text-lg font-light leading-relaxed opacity-90">
                          {card.desc}
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-3 sm:space-y-4">
                        <h3 className="text-lg sm:text-xl font-bold text-foreground tracking-tight leading-snug">
                          {card.title}
                        </h3>
                        <ul className="space-y-2.5 sm:space-y-3">
                          {card.points?.map((point, pIdx) => (
                            <li
                              key={pIdx}
                              className="flex items-start gap-2.5 text-sm sm:text-base lg:text-lg text-muted font-normal leading-relaxed"
                            >
                              <span className="mt-2.5 size-1.5 rounded-full bg-brand shrink-0" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Screenshot-Matched Clickable Progress Line Indicator */}
          <div className="w-full flex gap-1.5 mt-4 lg:mt-6 px-0.5">
            {pairs.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => handleProgressClick(dotIdx)}
                className="h-2 flex-1 bg-gray-2/40 rounded-full overflow-hidden relative cursor-pointer group focus:outline-none"
                aria-label={`Go to slide ${dotIdx + 1}`}
              >
                {/* Hover state for better UX */}
                <div className="absolute inset-0 bg-gray-2/20 opacity-0 group-hover:opacity-100 transition-opacity" />

                {currentIndex === dotIdx && (
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{
                      duration: AUTOPLAY_TIME / 1000,
                      ease: "linear",
                    }}
                    className="absolute top-0 left-0 h-full bg-brand"
                  />
                )}
                {dotIdx < currentIndex && (
                  <div className="absolute top-0 left-0 h-full w-full bg-brand" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
