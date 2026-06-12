"use client";

import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";
import SplashCursor from "@/components/common/splash-cursor";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="relative h-screen bg-black">
      <SplashCursor
        DENSITY_DISSIPATION={3.5}
        VELOCITY_DISSIPATION={1}
        PRESSURE={0.1}
        CURL={4}
        SPLAT_RADIUS={0.2}
        SPLAT_FORCE={6000}
        COLOR_UPDATE_SPEED={6}
        SHADING
        RAINBOW_MODE={true}
        COLOR="#A3DC2F"
      />

      <div className="relative container z-10 pt-6">
        <Navbar />
      </div>
      <Hero />
      <Footer />
    </main>
  );
}
