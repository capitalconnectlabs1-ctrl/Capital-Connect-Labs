import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { animationVarients } from "@/constants/animations";

interface JourneyStepCardProps {
  step: string;
  title: string;
  desc: string;
  isLast: boolean;
}

export function JourneyStepCard({
  step,
  title,
  desc,
  isLast,
}: JourneyStepCardProps) {
  return (
    <motion.div
      variants={animationVarients.fadeInUp}
      whileHover="hover"
      className="relative bg-gray-1 border border-gray-2 rounded-xl p-5 flex flex-col gap-3 transition-colors duration-300"
    >
      <span className="text-xs font-bold text-brand">{step}</span>
      <h4 className="text-base font-bold text-white-100">{title}</h4>
      <p className="text-muted text-xs font-light leading-relaxed">{desc}</p>
      {!isLast && (
        <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 size-4 text-brand/40 z-10" />
      )}
    </motion.div>
  );
}
