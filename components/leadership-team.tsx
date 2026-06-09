"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Badge from "./common/badge";
import { Group } from "lucide-react";

const teamMembers = [
  {
    name: "Sathyan Gopalan",
    role: "Co-Founder & CEO",
    desc: "Held critical South Asia leadership roles across Oracle Financial Services, Wipro, and Tata Unisys.",
    imgSrc: "/sathyan-gopalan.webp",
  },
  {
    name: "Indranil Roy",
    role: "Co-Founder & COO",
    desc: "Core Expertise: Startup evaluation, market validation, product management, and early-stage mentorship",
    imgSrc: "/indranil-roy.webp",
  },
  {
    name: "Kshitij Deshmukh",
    role: "Vice President — Investment Management",
    desc: "8+ years of expertise across alternative investments, lending structures, and financial operations.",
    imgSrc: "/kshitij-deshmukh.webp",
  },
];

export default function LeadershipTeam() {
  return (
    <section
      id="team"
      className="w-full scroll-mt-32 space-y-4 lg:space-y-6 py-16 relative overflow-hidden container"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 bg-gray-1 border border-gray-2 rounded-2xl p-5 lg:p-10 items-center">
        <div className="lg:col-span-7 space-y-4 md:pr-4">
          <Badge icon={<Group size={16} />} text="Team" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Our Leadership Team
          </h2>
          <p className="text-muted text-sm md:text-base font-light leading-relaxed">
            The Capital Connect Labs leadership team brings together a unique
            blend of enterprise leadership, startup building, investment
            expertise, and operational execution. With experience spanning
            global technology organizations, fintech, startup fundraising,
            product development, and alternative investments, we offer founders
            strategic vision coupled with hands-on execution capability.
          </p>
        </div>

        <div className="lg:col-span-5 w-full h-65 md:h-100 relative rounded-2xl overflow-hidden border border-gray-2/40">
          <Image
            src="/leadershipteam.webp"
            alt="Capital Connect Labs Workspace Session"
            fill
            sizes="(max-w-7xl) 50vw"
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
        {teamMembers.map((member, idx) => (
          <motion.div
            key={idx}
            transition={{ duration: 0.25 }}
            className="bg-gray-1 border border-gray-2 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 group"
          >
            <div className="w-full aspect-4/3 relative bg-[#1c1c1e] overflow-hidden">
              <Image
                src={member.imgSrc}
                alt={member.name}
                fill
                sizes="(max-w-7xl) 33vw"
                className="object-cover group-hover:scale-110 transition-all duration-500 ease-out"
              />
            </div>
            <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 min-h-48 gap-4">
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground tracking-tight">
                  {member.name}
                </h3>
                <p className="text-muted text-base font-light leading-normal">
                  {member.desc}
                </p>
              </div>

              <div className="text-brand font-medium text-xs md:text-[13px] tracking-wide font-sans">
                {member.role}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
