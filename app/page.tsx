"use client";

import { WhoWeAre } from "@/components/about-us/who-we-are";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import Hero from "@/components/hero";
import LeadershipTeam from "@/components/leadership-team";
import WhatWeLookFor from "@/components/what-we-look-for";

export default function Home() {
  return (
    <main>
      <div className="sticky top-0 z-50 container pt-6">
        <Navbar />
      </div>
      <div className="overflow-hidden">
        <Hero />
        <WhoWeAre />
        <WhatWeLookFor />
        <LeadershipTeam />
      </div>
      <Footer />
    </main>
  );
}
