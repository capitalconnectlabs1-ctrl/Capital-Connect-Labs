import { motion } from "framer-motion";
import Badge from "../common/badge";
import Button from "../common/button";
import HighlightWords from "../common/animated-headline";

export function HeroSection() {
  return (
    <section
      id="hero-about-us"
      className="relative overflow-hidden scroll-mt-32 lg:min-h-[calc(100vh-106px)] flex gap-24 py-24 flex-col items-center justify-center text-center"
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
          <Badge
            pillText="CCL"
            text="Empowering early-stage startups"
            showArrow={false}
          />
        </motion.div>
        <HighlightWords words={["Build.", "Launch.", "Scale."]} />
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
            <Button className="w-fit! text-nowrap" variant="primary">
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
    </section>
  );
}
