import React from "react";
import { motion, Variants } from "framer-motion";
import {
  MapPin,
  Cpu,
  BrainCircuit,
  Layers,
  Wallet,
  ShoppingBag,
  LucideIcon,
} from "lucide-react";
import SectionHeader from "../common/section-header";

interface FocusAreasProps {
  focusSector?: string[];
}

interface MarqueeCardProps {
  text: string;
}

const sectorIconMap: Record<string, LucideIcon> = {
  "Consumer Products": ShoppingBag,
  "Deep Tech": Cpu,
  "Artificial Intelligence": BrainCircuit,
  SaaS: Layers,
  Fintech: Wallet,
};

const defaultSectors: string[] = [
  "Consumer Products",
  "Deep Tech",
  "Artificial Intelligence",
  "SaaS",
  "Fintech",
];

const animationVarients: { [key: string]: Variants } = {
  container: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
};

export default function FocusAreas({
  focusSector = defaultSectors,
}: FocusAreasProps): React.JSX.Element {
  const cleanTopFive = focusSector
    .filter((item) => sectorIconMap[item])
    .slice(0, 5);
  const doubledSectors = [...cleanTopFive, ...cleanTopFive, ...cleanTopFive];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={animationVarients.container}
      className="space-y-8 lg:space-y-12 pb-30 overflow-hidden w-full"
    >
      <SectionHeader
        badgeText="Focus Areas"
        badgeIcon={MapPin}
        title="We Actively Support Startups In"
        subtitle="Our ecosystem is built for founders across these core high-growth industries."
      />

      <div className="w-full">
        <motion.div variants={animationVarients.fadeInUp} className="relative">
          <div className="flex flex-col w-full transform origin-center">
            <div className="flex overflow-hidden w-full">
              <motion.div
                animate={{ x: ["0%", "-10.33%"] }}
                transition={{ ease: "linear", duration: 18, repeat: Infinity }}
                className="flex flex-nowrap gap-5 shrink-0 py-3 pr-5"
              >
                {doubledSectors.map((sector, i) => (
                  <MarqueeCard key={`row-${i}`} text={sector} />
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

function MarqueeCard({ text }: MarqueeCardProps): React.JSX.Element {
  const IconComponent = sectorIconMap[text] || Layers;

  return (
    <motion.div
      whileHover={{
        y: -4,
        borderColor: "rgba(var(--brand), 0.6)",
        backgroundColor: "rgba(var(--brand), 0.04)",
      }}
      className="inline-flex items-center gap-4 px-8 py-5 rounded-2xl bg-background border border-gray-2 text-sm lg:text-lg text-white-off font-semibold tracking-wide whitespace-nowrap cursor-pointer transition-all duration-300 shadow-lg backdrop-blur-md"
    >
      <IconComponent
        className="w-5 h-5 lg:w-6 lg:h-6 text-brand"
        strokeWidth={2.2}
      />
      <span>{text}</span>
    </motion.div>
  );
}
