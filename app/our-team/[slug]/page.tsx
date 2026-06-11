import { TEAM_MEMBERS } from "@/utils/our-team";
import { notFound } from "next/navigation";
import OurTeamDetail from "@/components/our-team";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return TEAM_MEMBERS.map((m) => ({ slug: m.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const member = TEAM_MEMBERS.find((m) => m.id === slug);
  if (!member) return {};
  return {
    title: `${member.name} — Capital Connect Labs`,
    description: member.bio,
  };
}

export default async function TeamMemberPage({ params }: PageProps) {
  const { slug } = await params;
  const member = TEAM_MEMBERS.find((m) => m.id === slug);
  if (!member) notFound();
  return <OurTeamDetail member={member} />;
}
