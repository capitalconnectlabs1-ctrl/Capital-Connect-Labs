import { motion } from "framer-motion";
import { Target, Eye, Info } from "lucide-react";
import SectionHeader from "../common/section-header";
import { animationVarients } from "@/constants/animations";
import Tilt from "react-parallax-tilt";

export function WhoWeAre() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={animationVarients.container}
      className="space-y-8 lg:space-y-12"
    >
      <SectionHeader
        badgeText="About Us"
        badgeIcon={Info}
        title="Who We Are"
        subtitle="Capital Connect Labs is an incubator and accelerator platform designed to support startups from ideation to growth."
      />

      <div className="w-full">
        <motion.div variants={animationVarients.fadeInUp}>
          <Tilt
            tiltMaxAngleX={4}
            tiltMaxAngleY={4}
            perspective={1200}
            transitionSpeed={2000}
            glareEnable={true}
            glareMaxOpacity={0.05}
            scale={1.01}
            glarePosition="all"
            glareColor="#A3DC2F"
            gyroscope={true}
            className="group w-full relative overflow-hidden rounded-2xl border border-[#A3DC2F]/10 bg-white/10 backdrop-blur-xl p-6 md:p-10 lg:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8 lg:gap-12 transition-all duration-500 hover:border-brand/40 hover:shadow-[0_0_50px_rgba(163,220,47,0.15)]"
          >
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <p className="text-muted text-base md:text-xl font-light leading-relaxed text-balance">
                We combine mentorship, access to investors, fundraising support,
                and industry connections to help founders build impactful and
                sustainable businesses.
              </p>
            </div>
            <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 border-t md:border-t-0 md:border-l border-gray-2/20 pt-6 md:pt-0 md:pl-8 lg:pl-12">
              <div className="space-y-3">
                <h3 className="text-sm md:text-base font-bold text-white-100 flex items-center gap-2 tracking-wide">
                  <Target className="size-4 lg:size-5 text-brand" />
                  <span>Our Mission</span>
                </h3>
                <p className="text-muted text-sm font-light leading-relaxed">
                  Accelerate startup success through guidance, capital, and
                  ecosystem access.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm md:text-base font-bold text-white-100 flex items-center gap-2 tracking-wide">
                  <Eye className="size-4 lg:size-5 text-brand" />
                  <span>Our Vision</span>
                </h3>
                <p className="text-muted text-sm font-light leading-relaxed">
                  Build the next generation of high-growth startups.
                </p>
              </div>
            </div>
          </Tilt>
        </motion.div>
      </div>
    </motion.section>
  );
}
