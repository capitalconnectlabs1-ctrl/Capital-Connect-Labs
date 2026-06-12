"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, User } from "lucide-react";
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
                <div className="flex items-start justify-between">
                  <div className="space-y-1 pb-5 border-b border-gray-2/60">
                    <h2 className="text-2xl md:text-3xl font-bold text-white-100 tracking-tight">
                      {member.name}
                    </h2>
                    <span className="text-brand font-semibold text-sm tracking-wide">
                      {member.role}
                    </span>
                  </div>
                  <a
                    target="_blank"
                    className="size-12 rounded-md bg-gray-2 hover:scale-105 duration-300 flex items-center justify-center text-foreground/80 hover:text-black"
                    href={member.linkedin}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="100"
                      height="100"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#0288D1"
                        d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
                      ></path>
                      <path
                        fill="#FFF"
                        d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
                      ></path>
                    </svg>
                  </a>
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
      <h3 className="text-xs font-bold text-white-100 text-center">
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
