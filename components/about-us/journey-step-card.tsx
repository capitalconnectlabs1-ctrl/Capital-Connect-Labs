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
      className={`relative bg-gray-1 border border-gray-2 rounded-xl p-5 flex flex-col gap-3 transition-colors duration-300`}
    >
      <h4 className="text-base font-bold text-white-100">{title}</h4>
      <p className="text-muted text-xs font-light leading-relaxed">{desc}</p>
    </motion.div>
  );
}
