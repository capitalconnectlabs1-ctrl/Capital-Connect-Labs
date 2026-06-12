"use client";
import HighlightWords from "@/components/common/animated-headline";
import Badge from "@/components/common/badge";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import LeadershipTeam from "@/components/leadership-team";
import { motion } from "framer-motion";
import { User2 } from "lucide-react";

const page = () => {
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
            <Badge icon={<User2 size={16} />} text="Our Team" />
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-3 lg:mb-6 text-white-100 leading-[1.12]"
          >
            <HighlightWords words={["Our", "Leadership", "Team"]} />
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-muted text-sm sm:text-base md:text-lg max-w-2xl mb-8 font-normal leading-relaxed opacity-95"
          >
            Structured selection processes ensure better screening compared to
            open market investments.
          </motion.p>
        </motion.div>
      </section>

      <div>
        <LeadershipTeam />
      </div>
      <Footer />
    </>
  );
};

export default page;
