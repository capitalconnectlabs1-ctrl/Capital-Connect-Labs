"use client";
import HighlightWords from "@/components/common/animated-headline";
import Badge from "@/components/common/badge";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import LeadershipTeam from "@/components/leadership-team";
import { motion } from "framer-motion";
import { Briefcase, GroupIcon, User2 } from "lucide-react";

const page = () => {
  const handleScrollDown = () => {
    const nextSection = document.getElementById("risk");
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
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.4 } },
            }}
            onClick={handleScrollDown}
            className="flex flex-col items-center gap-3 mt-4 cursor-pointer select-none group"
          >
            <div className="relative flex items-center justify-center">
              <svg
                width="24"
                height="45"
                viewBox="0 0 24 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-auto transition-colors"
              >
                <rect
                  x="0.379518"
                  y="0.379518"
                  width="23.241"
                  height="44.241"
                  rx="11.6205"
                  className="stroke-white/40 group-hover:stroke-brand transition-colors duration-300"
                  strokeWidth="0.759036"
                />
                <motion.path
                  animate={{
                    y: [0, 1, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  d="M12.5 11C12.5 10.7239 12.2761 10.5 12 10.5C11.7239 10.5 11.5 10.7239 11.5 11L12.5 11ZM11.6464 35.3536C11.8417 35.5488 12.1583 35.5488 12.3536 35.3536L15.5355 32.1716C15.7308 31.9763 15.7308 31.6597 15.5355 31.4645C15.3403 31.2692 15.0237 31.2692 14.8284 31.4645L12 34.2929L9.17157 31.4645C8.97631 31.2692 8.65973 31.2692 8.46447 31.4645C8.2692 31.6597 8.2692 31.9763 8.46447 32.1716L11.6464 35.3536ZM11.5 11L11.5 35L12.5 35L12.5 11L11.5 11Z"
                  className="fill-white group-hover:fill-brand transition-colors duration-300"
                />
              </svg>
            </div>
            <span className="text-xs tracking-wider text-muted font-light transition-colors duration-300 group-hover:text-brand">
              Scroll Down
            </span>
          </motion.div>
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
