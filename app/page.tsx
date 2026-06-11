"use client";

import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import Hero from "@/components/hero";
import { ProgramCard } from "@/components/about-us/program-card";
import { Layers, Rocket, TrendingUp } from "lucide-react";
import SectionHeader from "@/components/common/section-header";
import { motion } from "framer-motion";
import { animationVarients } from "@/constants/animations";
import { acceleratorFeatures, incubatorFeatures } from "@/utils/about-us";

export default function Home() {
  return (
    <main>
      <div className="sticky top-0 z-1000 container pt-6">
        <Navbar />
      </div>
      <div className="overflow-hidden">
        <Hero />
        <motion.section
          id="programs-hero"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={animationVarients.container}
          className="space-y-8 scroll-mt-34 container lg:space-y-12 pb-30"
        >
          <SectionHeader
            badgeText="Our Programs"
            badgeIcon={Layers}
            title="Programs Designed for Every Stage"
            subtitle="Tailored pathways to take your venture from initial idea to fundraising readiness."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            <ProgramCard
              icon={Rocket}
              title="Incubator Program"
              stage="From Idea to MVP"
              desc="Perfect for early-stage founders looking to validate their ideas and build their first product."
              features={incubatorFeatures}
              ctaText="Apply for Cohort"
              ctaLink="/customer-support?inquiry=incubator"
            />
            <ProgramCard
              icon={TrendingUp}
              title="Accelerator Program"
              stage="Scale with Confidence"
              desc="Designed for startups with early traction looking to grow faster and raise funding."
              features={acceleratorFeatures}
              ctaText="Scale Your Venture"
              ctaLink="/customer-support?inquiry=accelerator"
              isFeatured={true}
            />
          </div>
        </motion.section>
      </div>
      <Footer />
    </main>
  );
}
