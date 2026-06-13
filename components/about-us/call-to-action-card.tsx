import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import { animationVarients } from "@/constants/animations";

interface CallToActionCardProps {
  icon: LucideIcon;
  tagline: string;
  title: string;
  desc: string;
  ctaText: string;
  ctaLink: string;
  isBrandBorder?: boolean;
  isPrimaryButton?: boolean;
}

export function CallToActionCard({
  icon: Icon,
  tagline,
  title,
  desc,
  ctaText,
  ctaLink,
  isBrandBorder,
  isPrimaryButton,
}: CallToActionCardProps) {
  return (
    <motion.div
      variants={animationVarients.fadeInUp}
      whileHover="hover"
      className={`rounded-xl p-4 sm:p-6 lg:p-10 flex flex-col gap-5 border transition-colors duration-300 bg-linear-to-br from-brand/5 to-transparent border-brand/20 ${
        isBrandBorder ? "border-brand/20" : "border-gray-2"
      }`}
    >
      <div className="size-10 rounded-xl bg-brand-muted border border-brand/20 flex items-center justify-center">
        <Icon className="size-5 text-brand" />
      </div>
      <div>
        <p className="text-brand font-semibold mb-1">{tagline}</p>
        <h4 className="text-xl font-bold text-white-100">{title}</h4>
        <p className="text-muted text-sm font-light mt-2 leading-relaxed">
          {desc}
        </p>
      </div>
      <a target="_blank" href={ctaLink}>
        <button
          className={`w-full text-sm font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 ${
            isPrimaryButton
              ? "bg-brand text-background hover:opacity-90"
              : "border border-gray-2 text-white-100 hover:border-brand/40"
          }`}
        >
          {ctaText} <ArrowRight className="size-4" />
        </button>
      </a>
    </motion.div>
  );
}
