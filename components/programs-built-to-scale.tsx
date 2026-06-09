"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Check } from "lucide-react";
import { useRouter } from "next/navigation";
import SectionHeader from "./common/section-header";
import Button from "./common/button";

const programsData = [
  {
    slug: "incubator",
    title: "Incubator Program",
    subLabel: "Idea to MVP",
    titleColorClass: "text-foreground",
    buttonVariant: "outline" as const,
    buttonText: "Apply for Cohort",
    features: [
      "Comprehensive Idea Validation & Business Model Canvas Design",
      "Hands-on Minimum Viable Product (MVP) Architecture Support",
      "Continuous Strategic Product-Market Fit (PMF) Guidance",
      "Initial Founder Coaching & Continuous 1:1 Expert Mentorship",
      "Essential Foundational Legal Setup, IP Awareness & Compliance",
    ],
  },
  {
    slug: "accelerator",
    title: "Accelerator Program",
    subLabel: "Scale with Confidence",
    titleColorClass: "text-brand",
    buttonVariant: "secondary" as const,
    buttonText: "Scale Your Venture",
    features: [
      "Advanced Growth, Strategic Scaling & Customer Acquisition Frameworks",
      "Deep-Dive Investor Readiness, Financial Modeling & Pitch Coaching",
      "Tailored Market Validation & Aggressive Go-to-Market (GTM) Support",
      "Direct Access to Angel Networks, Global VCs & Private Demo Days",
      "High-Level Corporate Alliances & Ecosystem Strategic Partnerships",
    ],
  },
  {
    slug: "advisory",
    title: "Custom Advisory",
    subLabel: "Bespoke Institutional Solutions",
    titleColorClass: "text-brand",
    buttonVariant: "primary" as const,
    buttonText: "Contact Us",
    features: [
      "Tailored co-investment structuring",
      "Corporate innovation mapping",
      "Strategic institutional networking",
      "Dedicated growth ecosystem design",
    ],
  },
];

export default function ProgramsBuiltToScale() {
  const router = useRouter();

  const handleProgramNavigation = (slug: string, title: string) => {
    console.log(
      `Ecosystem Session: Selected context channel sequence [${title}]`,
    );
    router.push(`/customer-support?inquiry=${slug}`);
  };

  return (
    <section
      id="programs"
      className="w-full lg:scroll-mt-24 scroll-mt-12  space-y-4 lg:space-y-12 py-16 relative overflow-hidden container"
    >
      <SectionHeader
        badgeText="Structured Frameworks"
        badgeIcon={Layers}
        title="Programs Built to Scale"
        subtitle="Tailored sequential pathways designed to take ambitious ventures from initial validation to rapid fundraising readiness."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mt-6 lg:mt-12 items-stretch">
        {programsData.map((program, idx) => (
          <motion.div
            key={idx}
            transition={{ duration: 0.3 }}
            className="bg-gray-1 border border-gray-2 p-5 lg:p-8 rounded-2xl flex flex-col justify-between transition-all"
          >
            <div className="space-y-6">
              <div className="space-y-1.5">
                <h3
                  className={`text-2xl font-bold tracking-tight ${program.titleColorClass}`}
                >
                  {program.title}
                </h3>
                <p className="text-muted text-sm font-normal tracking-wide">
                  {program.subLabel}
                </p>
              </div>

              <ul className="space-y-4 pt-4">
                {program.features.map((feature, fIdx) => (
                  <li
                    key={fIdx}
                    className="flex items-start gap-2 lg:gap-3 text-xs md:text-base text-foreground/90 leading-relaxed font-light"
                  >
                    <Check className="w-4 h-4 text-brand shrink-0 mt-0.5 stroke-3" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-8">
              <Button
                variant={program.buttonVariant}
                className="w-full py-3.5 text-xs font-bold"
                onClick={() =>
                  handleProgramNavigation(program.slug, program.title)
                }
              >
                {program.buttonText}
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
