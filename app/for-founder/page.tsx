"use client";
import HighlightWords from "@/components/common/animated-headline";
import Badge from "@/components/common/badge";
import Button from "@/components/common/button";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import WhatFoundersGet from "@/components/what-founder-gets";
import { motion } from "framer-motion";
import { User2 } from "lucide-react";
import Link from "next/link";

const page = () => {
  const handleScrollDown = () => {
    const nextSection = document.getElementById("founder");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="sticky top-0 z-1000 container pt-6">
        <Navbar />
      </div>

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
            <Badge icon={<User2 size={16} />} text="For Founders" />
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-3 lg:mb-6 text-white-100 leading-[1.12]"
          >
            What Founders Get in
            <br className="max-sm:hidden" />
            <HighlightWords words={["Addition", "to", "Funding"]} />
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-muted text-sm sm:text-base md:text-lg max-w-2xl mb-8 font-normal leading-relaxed opacity-95"
          >
            We go beyond funding. Our program is designed to deliver real,
            tangible value that accelerates your startup's growth and increases
            your chances of success.
          </motion.p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc4RkU639a2KOtd4AbhENoWo4Jls9Vvut5i098iu9ibc9Lb0A/viewform?pli=1"
            target="_blank"
          >
            <Button className="w-fit! text-nowrap">Apply Now</Button>
          </a>
        </motion.div>
      </section>

      <div>
        <WhatFoundersGet />
      </div>
      <Footer />
    </>
  );
};

export default page;
