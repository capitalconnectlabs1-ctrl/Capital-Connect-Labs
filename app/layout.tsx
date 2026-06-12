import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/common/lennis";
import SplashCursor from "@/components/common/splash-cursor";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Capital Connect Labs - Build. Launch. Scale.",
  description:
    "We partner with ambitious founders to move from idea to traction. Join our incubator and accelerator programs with structured support, hands-on mentorship, and strategic access to capital.",

  keywords: [
    "startup incubator platform",
    "early-stage startup accelerator",
    "founder mentorship program",
    "pre-seed seed funding access",
    "SaaS enterprise software incubator",
    "D2C startup accelerator",
    "HealthTech startup growth frameworks",
    "business model canvas design validation",
    "MVP architecture support",
    "GTM strategy customer acquisition",
    "investor pitch coaching readiness",
    "founder first community startup ecosystem",
  ],

  alternates: {
    canonical: "https://capital-connect-lab.netlify.app/",
  },

  openGraph: {
    title: "Capital Connect Labs | Empowering Early-Stage Startups to Succeed",
    description:
      "Accelerating ambitious ventures from initial validation to rapid fundraising readiness. Discover our Incubator and Accelerator pathways built to scale.",
    url: "https://capital-connect-lab.netlify.app/",
    siteName: "Capital Connect Labs",
    images: [
      {
        url: "https://capital-connect-lab.netlify.app/leadershipteam.webp",
        width: 1200,
        height: 630,
        alt: "Capital Connect Labs - Build. Launch. Scale.",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Capital Connect Labs | Build. Launch. Scale.",
    description:
      "We partner with ambitious founders to help them move from idea to traction with structured growth frameworks and deep investor networks.",
    images: ["https://capital-connect-lab.netlify.app/leadershipteam.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <SmoothScroll />
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
        {children}
      </body>
    </html>
  );
}
