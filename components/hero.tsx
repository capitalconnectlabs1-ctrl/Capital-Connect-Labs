"use client";
import { motion } from "framer-motion";
import Badge from "./common/badge";
import Button from "./common/button";
import HighlightWords from "./common/animated-headline";
import Image from "next/image";

export default function Hero() {
  const handlePartnerScrollSequence = () => {
    console.log(
      "Ecosystem Action: Scrolling viewport target context to [Investor Alpha Section]",
    );
    const element = document.getElementById("partners");
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
      id="hero"
      className="relative scroll-mt-32 lg:min-h-[calc(100vh-106px)] flex gap-24 pt-24 flex-col items-center justify-center text-center"
    >
      <div className="absolute top-0 lg:-top-40 left-1/2 -translate-x-1/2 size-100 lg:size-225 bg-radial-glow pointer-events-none z-0 opacity-75" />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
        }}
        className="container relative z-10 flex flex-col items-center"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mb-4 lg:mb-8"
        >
          <Badge pillText="CCL" text="Empowering early-stage startups" />
        </motion.div>

        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-3 lg:mb-6 text-white-100 leading-[1.12]"
        >
          Empowering Early Stage <br className="max-sm:hidden" />
          <HighlightWords words={["Startups", "to", "Succeed"]} />
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-muted text-sm sm:text-base md:text-lg max-w-2xl mb-10 font-normal leading-relaxed opacity-95"
        >
          We partner with ambitious founders to help them move from idea to
          traction with structured support, hands-on mentorship, and access to
          capital.
        </motion.p>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="flex items-center justify-center gap-2 sm:gap-4 w-full"
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfp4ePohYQGlO4KQB4afsgKl2sX235-IKOHMK15mo0e3MsHww/viewform"
            target="_blank"
          >
            <Button
              className="w-fit! text-nowrap"
              variant="primary"
              onClick={handlePartnerScrollSequence}
            >
              For Investors
            </Button>
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc4RkU639a2KOtd4AbhENoWo4Jls9Vvut5i098iu9ibc9Lb0A/viewform?pli=1"
            target="_blank"
          >
            <Button className="w-fit! text-nowrap" variant="secondary">
              For Founders
            </Button>
          </a>
        </motion.div>
      </motion.div>
      <div className="container max-sm:hidden">
        <Image
          width={1501}
          height={769}
          src={"/steps-hero.png"}
          alt="hero image"
          priority
        />
      </div>
      <div className="container sm:hidden">
        <Image
          width={644}
          height={455}
          className="rounded-xl"
          src={"/steps-hero-mobile.webp"}
          alt="hero image"
          priority
        />
      </div>
    </section>
  );
}
