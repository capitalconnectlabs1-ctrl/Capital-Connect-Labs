import { animationVarients } from "@/constants/animations";
import { motion } from "framer-motion";
import SectionHeader from "./common/section-header";
import { ListChecks } from "lucide-react";
import { evaluationCriteria } from "@/utils/about-us";

const WhatWeLookFor = () => {
  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={animationVarients.container}
        className="space-y-10 container lg:space-y-14 pb-30"
      >
        <SectionHeader
          badgeText="Evaluation Criteria"
          badgeIcon={ListChecks}
          title="What We Look For"
          subtitle="We look for startups that demonstrate the right foundation to grow, scale, and succeed."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {evaluationCriteria.map((c, i) => (
            <motion.div
              key={i}
              variants={animationVarients.fadeInUp}
              whileHover={{ y: -4 }}
              className="group flex items-center gap-4 p-5 bg-gray-1/50 hover:bg-gray-1 border border-gray-2 rounded-xl transition-all duration-300 cursor-pointer"
            >
              <div className="h-2 w-2 rounded-full bg-brand shrink-0 group-hover:w-4 group-hover:rounded-sm transition-all duration-300 ease-out" />

              <span className="text-sm md:text-base text-white-off/90 font-medium group-hover:text-white transition-colors duration-200">
                {c}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default WhatWeLookFor;
