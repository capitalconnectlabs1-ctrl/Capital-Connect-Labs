import Link from "next/link";
import { CheckCircle2, LucideIcon } from "lucide-react";
import Tilt from "react-parallax-tilt";

interface ProgramCardProps {
  icon: LucideIcon;
  title: string;
  stage: string;
  desc: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  isFeatured?: boolean;
}

export function ProgramCard({
  icon: Icon,
  title,
  stage,
  desc,
  features,
  ctaText,
  ctaLink,
  isFeatured,
}: ProgramCardProps) {
  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      perspective={1000}
      transitionSpeed={1500}
      glareEnable={true}
      glareMaxOpacity={0.1}
      scale={1.001}
      glarePosition="all"
      glareColor="#A3DC2F"
      gyroscope={true}
      className={`group relative overflow-hidden h-full rounded-xl border border-[#A3DC2F]/4 bg-white/3 backdrop-blur-xl p-5 lg:p-10 flex flex-col justify-between gap-8 transition-all duration-500 group-hover:border-[#A3DC2F]/50 group-hover:shadow-[0_0_40px_rgba(163,220,47,0.25)] ${
        isFeatured ? "border-brand/20" : "border-gray-2"
      }`}
    >
      <div>
        <div className="flex items-center gap-3">
          <div className="size-12 rounded-xl bg-brand-muted border border-brand/20 flex items-center justify-center">
            <Icon
              className={`size-5 ${isFeatured ? "text-brand" : "text-brand"}`}
            />
          </div>
          <div>
            <h3
              className={`text-lg font-bold ${isFeatured ? "text-brand" : "text-white-100"}`}
            >
              {title}
            </h3>
            <p className="text-muted">{stage}</p>
          </div>
        </div>
        <p className="text-muted mt-6 text-base font-light leading-relaxed">
          {desc}
        </p>
        <div className="mt-6">
          <p className="text-base font-bold">What You Get</p>
          <ul className="space-y-4 mt-4">
            {features.map((f, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-base text-muted font-light"
              >
                <CheckCircle2 className="size-4 text-brand shrink-0 mt-0.5 stroke-[2.5]" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Link href={ctaLink}>
        <button
          className={`w-full text-sm font-bold py-3 rounded-xl transition-all ${
            isFeatured
              ? "bg-brand text-background hover:opacity-90"
              : "border border-gray-2 text-white-100 hover:border-brand/40"
          }`}
        >
          {ctaText}
        </button>
      </Link>
    </Tilt>
  );
}
