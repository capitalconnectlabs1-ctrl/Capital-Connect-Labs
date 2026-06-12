import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { animationVarients } from "@/constants/animations";

interface SupportOfferCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export function SupportOfferCard({
  icon: Icon,
  title,
  desc,
}: SupportOfferCardProps) {
  return (
    <motion.div
      variants={animationVarients.fadeInUp}
      whileHover="hover"
      className="space-y-3 p-5 lg:p-8 rounded-xl bg-gray-1 border border-gray-2 transition-colors duration-300"
    >
      <h4 className="text-base font-bold text-white-100 flex items-center gap-2">
        <Icon className="size-5 text-brand shrink-0" /> {title}
      </h4>
      <p className="text-muted text-sm font-light leading-relaxed">{desc}</p>
    </motion.div>
  );
}
