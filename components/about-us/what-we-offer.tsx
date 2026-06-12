import { motion } from "framer-motion";
import { Bookmark } from "lucide-react";
import SectionHeader from "../common/section-header";
import { animationVarients } from "@/constants/animations";
import { SupportOfferCard } from "@/components/about-us/support-offer-card";
import { supportChart } from "@/utils/about-us";

const WhatWeOffer = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={animationVarients.container}
      className="space-y-8 lg:space-y-12"
    >
      <SectionHeader
        badgeText="What We Offer"
        badgeIcon={Bookmark}
        title="End-to-End Startup Support"
        subtitle="From mentorship to funding access — everything your startup needs to move fast and grow smart."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        {supportChart.map((offer, idx) => (
          <SupportOfferCard
            key={idx}
            icon={offer.icon}
            title={offer.title}
            desc={offer.desc}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default WhatWeOffer;
