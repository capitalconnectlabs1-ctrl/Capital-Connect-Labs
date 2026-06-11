import { Variants } from "framer-motion";

export const animationVarients: Record<string, Variants> = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  },
  cardHover: {
    hover: {
      y: -6,
      borderColor: "rgba(var(--brand), 0.4)",
      boxShadow: "0 20px 40px -15px rgba(0,0,0,0.5)",
    },
  },
  imageHover: {
    hover: { scale: 1.04, transition: { duration: 0.4, ease: "easeOut" } },
  },
};
