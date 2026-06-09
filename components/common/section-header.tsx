"use client";
import React from "react";
import Badge from "./badge";

interface SectionHeaderProps {
  badgeText: string;
  badgeIcon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  className?: string;
}

export default function SectionHeader({
  badgeText,
  badgeIcon: Icon,
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={`${className} text-center flex flex-col items-center max-w-3xl mx-auto space-y-4`}
    >
      <Badge text={badgeText} icon={<Icon className="w-4 h-4" />} />
      <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
        {title}
      </h2>
      <p className="text-muted text-base max-w-2xl font-light leading-relaxed px-4">
        {subtitle}
      </p>
    </div>
  );
}
