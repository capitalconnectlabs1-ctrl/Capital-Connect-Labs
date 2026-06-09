"use client";

import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import Hero from "@/components/hero";
import LeadershipTeam from "@/components/leadership-team";
import ProgramsBuiltToScale from "@/components/programs-built-to-scale";
import WhyStartupsFail from "@/components/the-challenges";
import WhatInvestorsGet from "@/components/what-investor-get";
import WhatPartnersGet from "@/components/what-partners-get";

export default function Home() {
  return (
    <main>
      <div className="sticky top-0 z-1000 container pt-6">
        <Navbar />
      </div>
      <Hero />
      <WhyStartupsFail />
      <WhatInvestorsGet />
      <WhatPartnersGet />
      <ProgramsBuiltToScale />
      <LeadershipTeam />
      <Footer />
    </main>
  );
}
