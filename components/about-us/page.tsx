"use client";
import { motion } from "framer-motion";
import { Rocket, TrendingUp, Layers, ListChecks, Users } from "lucide-react";
import Navbar from "../common/navbar";
import Footer from "../common/footer";
import SectionHeader from "../common/section-header";
import { animationVarients } from "@/constants/animations";
import { CallToActionCard } from "@/components/about-us/call-to-action-card";
import { HeroSection } from "@/components/about-us/hero-section";
import { WhoWeAre } from "@/components/about-us/who-we-are";
import { WhyChooseUs } from "@/components/about-us/why-choose-us";
import { EllipseGlow } from "./ellipse-glow";
import { ProgramCard } from "./program-card";
import {
  acceleratorFeatures,
  advantageList,
  evaluationCriteria,
  incubatorFeatures,
  metricsList,
} from "@/utils/about-us";
import FocusAreas from "./focus-area";
import YourJourneySection from "./your-journey";
import WhatWeOffer from "./what-we-offer";

export default function AboutPage() {
  return (
    <>
      <div className="sticky top-0 z-1000 container pt-6">
        <Navbar />
      </div>
      <main className="relative overflow-hidden">
        <EllipseGlow />
        <article className="relative z-10">
          <HeroSection />
          <div className="container">
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={animationVarients.container}
              className="space-y-8 lg:space-y-12 pb-30"
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
            <FocusAreas />
            <WhatWeOffer />
            <YourJourneySection />
            <WhyChooseUs
              advantageList={advantageList}
              metricsList={metricsList}
            />
            <motion.section
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={animationVarients.container}
              className="space-y-8 lg:space-y-12 py-30"
            >
              <SectionHeader
                badgeText="Get Started"
                badgeIcon={Rocket}
                title="Ready to Take the Next Step?"
                subtitle="Whether you're a founder building something big or an investor looking for curated deal flow — we're ready."
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                <CallToActionCard
                  icon={Users}
                  tagline="For Mentors & Investors"
                  title="Partner With Us"
                  desc="Gain early access to high-potential startups."
                  ctaText="Become a Partner"
                  ctaLink="/customer-support"
                />
                <CallToActionCard
                  icon={Rocket}
                  tagline="For Startups"
                  title="Ready to Build Something Big?"
                  desc="Join our next cohort and accelerate your startup journey."
                  ctaText="Apply Now"
                  ctaLink="/customer-support?inquiry=incubator"
                  isBrandBorder={true}
                  isPrimaryButton={true}
                />
              </div>
            </motion.section>
          </div>
        </article>
        <Footer />
      </main>
    </>
  );
}
