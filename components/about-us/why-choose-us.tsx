import { motion } from "framer-motion";
import { Award, Sparkles, CheckCircle2, HelpCircle } from "lucide-react";
import SectionHeader from "../common/section-header";
import { animationVarients } from "@/constants/animations";

interface WhyChooseUsProps {
  advantageList: string[];
  metricsList: string[];
}

export function WhyChooseUs({ advantageList, metricsList }: WhyChooseUsProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={animationVarients.container}
      className="space-y-8 lg:space-y-12"
    >
      <SectionHeader
        badgeText="Why CCL"
        badgeIcon={HelpCircle}
        title="Why Choose Us"
        subtitle="We measure our success by yours — here's what sets Capital Connect Labs apart."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 items-stretch">
        <motion.div
          variants={animationVarients.fadeInUp}
          className="space-y-4 bg-gray-1 p-5 md:p-8 rounded-xl border border-gray-2"
        >
          <h3 className="text-base font-bold text-white-100 flex items-center gap-2">
            <Award className="size-4 text-brand" /> Our Advantages
          </h3>
          <ul className="space-y-3">
            {advantageList.map((adv, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-sm text-muted font-light leading-relaxed"
              >
                <CheckCircle2 className="size-4 text-brand shrink-0 mt-0.5 stroke-[2.5]" />
                <span>{adv}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={animationVarients.fadeInUp}
          className="space-y-4 bg-gray-1 p-5 md:p-8 rounded-xl border border-gray-2 flex flex-col justify-between"
        >
          <div className="space-y-1.5">
            <h3 className="text-base font-bold text-white-100 flex items-center gap-2">
              <Sparkles className="size-4 text-brand" /> Success Metrics
            </h3>
            <p className="text-muted text-sm font-light leading-relaxed">
              We measure our ecosystem impact continuously by:
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2.5 pt-4">
            {metricsList.map((metric, i) => (
              <motion.div
                key={i}
                whileHover={{ x: 4, borderColor: "rgba(var(--brand), 0.2)" }}
                className="p-3 rounded-xl bg-background border border-gray-2 text-sm font-medium text-white-off flex items-center gap-3 transition-all"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                <span>{metric}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
