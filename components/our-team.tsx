"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, User, ArrowLeft } from "lucide-react";
import Navbar from "./common/navbar";
import Footer from "./common/footer";
import SectionHeader from "./common/section-header";
import { TEAM_MEMBERS, TeamMember } from "@/utils/our-team";
import { EllipseGlow } from "./about-us/ellipse-glow";

interface OurTeamDetailProps {
  member: TeamMember;
}

export default function OurTeamDetail({ member }: OurTeamDetailProps) {
  return (
    <>
      <div className="sticky top-0 z-1000 container pt-6">
        <Navbar />
      </div>

      <main className="min-h-screen bg-background text-foreground pb-12 font-sans relative overflow-hidden">
        <EllipseGlow />
        <article className="relative z-10 container mt-20 space-y-10 lg:space-y-16">
          <SectionHeader
            badgeText={member.role}
            badgeIcon={User}
            title={member.name}
            subtitle={member.bio}
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-1 border border-gray-2 rounded-2xl overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-4 w-full aspect-4/3 lg:aspect-auto lg:min-h-full relative bg-[#1c1c1e]">
                <Image
                  src={member.imgSrc}
                  alt={member.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover object-top"
                  priority
                />
              </div>

              <div className="lg:col-span-8 p-6 lg:p-10 flex flex-col gap-8">
                <div className="space-y-1 pb-5 border-b border-gray-2/60">
                  <h2 className="text-2xl md:text-3xl font-bold text-white-100 tracking-tight">
                    {member.name}
                  </h2>
                  <span className="text-brand font-semibold text-sm tracking-wide">
                    {member.role}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-white-100 uppercase tracking-widest">
                      Key Highlights
                    </h4>
                    <ul className="space-y-3">
                      {member.highlights.map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted font-light leading-relaxed"
                        >
                          <CheckCircle2 className="size-4 text-brand shrink-0 mt-0.5 stroke-[2.5]" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xs font-bold text-white-100 uppercase tracking-widest">
                      Core Strengths
                    </h4>
                    <ul className="space-y-3">
                      {member.strengths.map((s, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="size-2 rounded-full bg-brand shrink-0" />
                          <span className="text-sm text-white-off font-medium">
                            {s}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <OtherMembers currentId={member.id} />
        </article>

        <div className="mt-16" />
        <Footer />
      </main>
    </>
  );
}

function OtherMembers({ currentId }: { currentId: string }) {
  const others = TEAM_MEMBERS.filter((m) => m.id !== currentId);

  return (
    <div className="space-y-5 pb-4">
      <h3 className="text-xs font-bold text-white-100 uppercase tracking-widest text-center">
        Meet the rest of the team
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {others.map((m) => (
          <Link
            key={m.id}
            href={`/our-team/${m.id}`}
            className="flex items-center gap-4 bg-gray-1 border border-gray-2 rounded-2xl p-4 hover:border-brand/30 transition-all group"
          >
            <div className="w-16 h-16 rounded-xl overflow-hidden relative shrink-0 bg-[#1c1c1e]">
              <Image
                src={m.imgSrc}
                alt={m.name}
                fill
                sizes="64px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-bold text-white-100 tracking-tight">
                {m.name}
              </span>
              <span className="text-xs text-brand font-medium tracking-wide">
                {m.role}
              </span>
              <span className="text-xs text-muted font-light mt-1">
                View Profile →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
