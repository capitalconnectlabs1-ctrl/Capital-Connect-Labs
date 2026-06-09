"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Badge from "./common/badge";
import Button from "./common/button";
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
      className="relative scroll-mt-32 min-h-[calc(100vh-106px)] overflow-hidden flex gap-24 py-24 flex-col items-center justify-center text-center"
    >
      <div className="absolute -top-30 lg:top-0 left-1/2 -translate-x-1/2 size-225 bg-radial-glow pointer-events-none z-0 opacity-75" />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
        }}
        className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col items-center"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mb-4 lg:mb-8"
        >
          <Link
            href="/customer-support?inquiry=incubator"
            className="block cursor-pointer"
          >
            <Badge
              pillText="New"
              text="Empowering early-stage startups"
              showArrow={true}
            />
          </Link>
        </motion.div>

        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-3 lg:mb-6 text-white-100 leading-[1.12]"
        >
          Empowering Early Stage <br className="max-sm:hidden" />
          Startups to Succeed
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
          <Button
            className="w-fit! text-nowrap"
            variant="primary"
            onClick={handlePartnerScrollSequence}
          >
            Become a partner
          </Button>

          <Link
            href="/customer-support?inquiry=incubator"
            className="inline-block"
          >
            <Button className="w-fit! text-nowrap" variant="secondary">
              Apply now
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      <div className="container max-sm:hidden">
        <Image
          width={1501}
          height={769}
          src={"/steps-hero.webp"}
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
