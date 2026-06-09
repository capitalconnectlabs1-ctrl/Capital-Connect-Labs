"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Info,
  Target,
  Eye,
  Sparkles,
  Award,
  CheckCircle2,
  Bookmark,
  Mail,
  Globe,
} from "lucide-react";
import SectionHeader from "../common/section-header";
import Navbar from "../common/navbar";
import Footer from "../common/footer";

const SUPPORT_OFFERS = [
  {
    title: "Mentorship",
    desc: "Gain access to experienced founders, investors, and industry leaders through curated 1:1 sessions and workshops.",
  },
  {
    title: "Funding Access",
    desc: "Connect with angels, VCs, and institutional investors. Get support in raising pre-seed and seed funding.",
  },
  {
    title: "Business Support",
    desc: "Legal, finance, branding, and go-to-market strategies tailored to your startup's needs.",
  },
  {
    title: "Ecosystem Access",
    desc: "Leverage our network of workspace partners, software & IT partners, corporates, and global startup communities.",
  },
];

const focusSector = [
  "Direct to Consumer (D2C)",
  "SaaS / Enterprise Software",
  "HealthTech",
  "Climate & Sustainability",
  "Retail",
];

const advantageLists = [
  "Strong mentor network of industry veterans",
  "Access to capital tracks and private investor pools",
  "Structured frameworks optimized for rapid traction",
  "Deep industry connections with ecosystem providers",
  "Founder-first approach with fully transparent terms",
  "Lower upfront fees, completely success-aligned",
];

const METRICS_LIST = [
  "Funds raised by startups",
  "Revenue growth tracking",
  "Customer traction indicators",
  "Market expansion milestones",
  "Follow-on investments streams",
];

export default function AboutPage() {
  const [email, setEmail] = useState("");

  return (
    <>
      <div className="sticky top-0 z-1000 container pt-6">
        <Navbar />
      </div>
      <main className="min-h-screen bg-background text-foreground pb-12 font-sans relative overflow-hidden">
        <div className="absolute top-[10%] left-[-15%] w-137 h-137 rounded-full bg-accent-mint/10 blur-[140px] pointer-events-none z-0 mix-blend-screen opacity-50" />
        <div className="absolute top-[40%] right-[-15%] w-150 h-150 rounded-full bg-brand/10 blur-[150px] pointer-events-none z-0 mix-blend-screen opacity-60" />
        <div className="absolute bottom-[20%] left-[-10%] w-md h-112 rounded-full bg-accent-blue/5 blur-[120px] pointer-events-none z-0" />
        <article className="relative z-10 container mt-20 space-y-6 lg:space-y-12">
          <SectionHeader
            badgeText="About Us"
            badgeIcon={Info}
            title="Who We Are"
            subtitle="Capital Connect Labs is an incubator and accelerator platform designed to support startups from ideation to growth."
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch">
            <div className="lg:col-span-6 bg-gray-1 border border-gray-2 p-5 lg:p-10 rounded-xl flex flex-col justify-between space-y-8">
              <p className="text-muted text-sm md:text-base font-light leading-relaxed">
                We combine mentorship, access to investors and fundraising
                support, and industry connections to help founders build
                impactful and sustainable businesses. We partner with ambitious
                founders to help them move from idea to traction with structured
                support, hands-on mentorship, and access to capital.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-gray-2/60">
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-white-100 flex items-center gap-2">
                    <Target className="size-4 text-brand" /> Our Mission
                  </h3>
                  <p className="text-muted text-base font-light leading-relaxed">
                    Accelerate startup success through guidance, capital, and
                    ecosystem access.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-bold text-white-100 flex items-center gap-2">
                    <Eye className="size-4 text-brand" /> Our Vision
                  </h3>
                  <p className="text-muted text-base font-light leading-relaxed">
                    Build the next generation of high-growth startups.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 w-full aspect-4/3 lg:aspect-4/3 lg:min-h-full relative rounded-xl overflow-hidden border border-gray-2 shadow-2xl bg-gray-1">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
                alt="Capital Connect Labs Modern Corporate Workspace"
                fill
                sizes="(max-w-7xl) 50vw"
                className="object-cover opacity-95 transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>
          </div>

          <div className="lg:space-y-12 border-t border-gray-2/40 pt-16">
            <div className="text-center space-y-2">
              <span className="text-sm text-brand">What We Offer</span>
              <h3 className="text-2xl md:text-3xl font-bold text-white-100 tracking-tight">
                End-to-End Startup Support
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-lg:mt-6 lg:gap-6">
              {SUPPORT_OFFERS.map((offer, idx) => (
                <div
                  key={idx}
                  className="space-y-3 p-4 lg:p-8 rounded-xl bg-gray-1 border border-gray-2 transition-all duration-300 hover:border-gray-3 hover:-translate-y-0.5"
                >
                  <h4 className="text-sm font-bold text-white-100 flex items-center gap-2">
                    <Bookmark className="size-4 text-brand" /> {offer.title}
                  </h4>
                  <p className="text-muted text-base md:text-sm font-light leading-relaxed">
                    {offer.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 items-stretch border-t border-gray-2/40 pt-16">
            <div className="lg:col-span-5 w-full aspect-4/3 lg:min-h-full relative rounded-xl overflow-hidden border border-gray-2 bg-gray-1">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
                alt="Ecosystem Innovation Cohorts Brainstorming"
                fill
                sizes="(max-w-7xl) 40vw"
                className="object-cover opacity-85 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>

            <div className="lg:col-span-7 bg-gray-1 border border-gray-2 p-4 lg:p-10 rounded-xl flex flex-col justify-center space-y-4 lg:space-y-6">
              <div>
                <span className="text-sm text-brand">Focus Areas</span>
                <h4 className="text-xl font-bold text-white-100 tracking-tight mt-1">
                  We actively support startups in:
                </h4>
              </div>

              <div className="flex flex-wrap gap-1 lg:gap-2.5 lg:pt-2">
                {focusSector.map((sector, sIdx) => (
                  <div
                    key={sIdx}
                    className="px-3 lg:px-4 py-2.5 rounded-xl bg-background border border-gray-2 text-xs lg:text-base text-white-off font-medium tracking-wide"
                  >
                    {sector}
                  </div>
                ))}
                <div className="px-3 lg:px-4 py-2.5 rounded-xl bg-brand-muted border border-brand/20 text-sm lg:text-base text-brand font-bold tracking-wide">
                  Other sectors are also welcome!
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 border-t border-gray-2/40 pt-16 items-stretch">
            <div className="space-y-6 bg-gray-1 p-5 md:p-8 rounded-xl border border-gray-2 transition-all hover:border-gray-3">
              <h3 className="text-lg font-bold text-white-100 flex items-center gap-2">
                <Award className="size-4 text-brand" /> Why Choose Us
              </h3>
              <ul className="space-y-2 lg:space-y-3.5">
                {advantageLists.map((adv, aIdx) => (
                  <li
                    key={aIdx}
                    className="flex items-start gap-3 text-base text-muted font-light leading-relaxed"
                  >
                    <CheckCircle2 className="size-4 text-brand shrink-0 mt-0.5 stroke-[2.5]" />
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 lg:space-y-6 bg-gray-1 p-5 md:p-8 rounded-xl border border-gray-2 flex flex-col justify-between transition-all hover:border-gray-3">
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-white-100 flex items-center gap-2">
                  <Sparkles className="size-4 text-brand" /> Success Metrics
                </h3>
                <p className="text-muted text-base font-light tracking-wide">
                  We measure our ecosystem impact continuously by:
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2.5 flex-1 justify-center pt-4">
                {METRICS_LIST.map((metric, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-3 lg:p-3.5 rounded-xl bg-background border border-gray-2 text-sm lg:text-base font-medium text-white-off flex items-center gap-3 hover:border-brand/20 transition-all"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </article>
        <div className="mt-16"></div>
        <Footer />
      </main>
    </>
  );
}
