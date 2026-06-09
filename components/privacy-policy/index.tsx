"use client";
import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";
import Image from "next/image";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen text-foreground font-sans pb-24">
      <div className="flex container items-center justify-between w-full mx-auto mb-16 border-b border-gray-2/30 py-4 lg:py-6">
        <Link className="text-muted flex items-center gap-2" href={"/"}>
          <ArrowLeft className="size-5 transition-transform group-hover:-translate-x-0.5" />
          <span>Back to home</span>
        </Link>
        <Link href={"/"} className="relative size-10 lg:size-12">
          <Image
            src="/logo.svg"
            alt="Capital Connect Labs Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>
      </div>
      <article className="container mt-16 space-y-4 lg:space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
          Privacy Policies
        </h2>
        <div className="space-y-10">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white-100 flex items-center gap-2">
              <span className="text-brand text-sm">1.</span> Introduction
            </h2>
            <p className="text-muted text-sm md:text-base font-light leading-relaxed pl-6">
              Welcome to Capital Connect Labs. Capital Connect Labs is a startup
              ecosystem platform focused on supporting founders, startups,
              investors, mentors, and ecosystem participants through incubation,
              acceleration, strategic guidance, networking opportunities,
              educational content, and related services. By accessing our
              website, submitting information, applying to our programs, or
              engaging with our services, you agree to the terms outlined in
              this Privacy Policy.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white-100 flex items-center gap-2">
              <span className="text-brand text-sm">2.</span> Information We
              Collect
            </h2>
            <p className="text-muted text-sm md:text-base font-light leading-relaxed pl-6">
              We may collect information including but not limited to:
            </p>
            <div className="pl-6 space-y-2 text-sm text-muted font-light">
              <p>
                <strong className="text-brand font-normal">
                  Personal Information:
                </strong>{" "}
                Name, email address, phone number, LinkedIn profile, company
                details, designation.
              </p>
              <p>
                <strong className="text-brand font-normal">
                  Startup Information:
                </strong>{" "}
                Startup name, founder details, business model, pitch decks,
                financial information voluntarily shared, fundraising
                information.
              </p>
              <p>
                <strong className="text-brand font-normal">
                  Investor & Website Logs:
                </strong>{" "}
                Investor profile, areas of interest, investment preferences, IP
                address, browser type, device information, website usage data,
                cookies and analytics data.
              </p>
            </div>
          </section>
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white-100 flex items-center gap-2">
              <span className="text-brand text-sm">3.</span> How We Use
              Information
            </h2>
            <p className="text-muted text-sm md:text-base font-light leading-relaxed pl-6">
              We may use collected information for startup evaluation and
              onboarding, investor evaluation and onboarding, program
              participation, communication and support, educational and
              networking activities, website improvement, internal analytics,
              compliance requirements, and service delivery.
            </p>
            <div className="pl-6 text-xs text-accent-mint">
              ✓ Data will be deleted on request
            </div>
          </section>
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white-100 flex items-center gap-2">
              <span className="text-brand text-sm">4.</span> Data Integrity &
              Responsible Usage
            </h2>
            <p className="text-muted text-sm md:text-base font-light leading-relaxed pl-6">
              Capital Connect Labs values privacy, confidentiality, and
              responsible data management. Information shared with us will
              primarily be used for evaluation, educational, research,
              ecosystem-building, and service delivery purposes. We do not sell
              personal information to third parties. Any sharing of information
              will be limited to educational purposes, ecosystem collaboration,
              startup-investor introductions (with consent where appropriate),
              service delivery requirements, or legal or regulatory obligations.
              Confidential startup information, business plans, and sensitive
              materials will be treated responsibly and with reasonable care.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white-100 flex items-center gap-2">
              <span className="text-brand text-sm">5.</span> Investor & Startup
              Introductions
            </h2>
            <p className="text-muted text-sm md:text-base font-light leading-relaxed pl-6">
              Where startups or investors voluntarily participate in
              introductions facilitated by Capital Connect Labs: Relevant
              information may be shared for evaluation purposes. Participants
              remain responsible for their own due diligence. Capital Connect
              Labs does not guarantee funding, investment, business outcomes, or
              commercial success.
            </p>
          </section>
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white-100 flex items-center gap-2">
              <span className="text-brand text-sm">6 & 7.</span> Payments &
              Refund Policy
            </h2>
            <div className="pl-6 space-y-3 text-muted text-sm font-light leading-relaxed">
              <p>
                <strong>06. Payments:</strong> Certain services, events,
                programs, memberships, workshops, consultations, or future
                offerings may require payment. Payments may be processed through
                third-party providers. Capital Connect Labs does not store
                complete payment card information.
              </p>
              <p>
                <strong>07. Refund Policy:</strong> Unless otherwise stated in
                writing registration fees, program fees, event fees, consulting
                fees, and membership fees are generally non-refundable once
                services have commenced. Approved refunds may be subject to
                administrative gateway charges.
              </p>
            </div>
          </section>
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white-100 flex items-center gap-2">
              <span className="text-brand text-sm">8 - 10.</span> Data Security,
              Cookies & Third-Parties
            </h2>
            <div className="pl-6 space-y-3 text-muted text-sm font-light leading-relaxed">
              <p>
                <strong>08. Data Security:</strong> We implement reasonable
                administrative, technical, and operational safeguards to protect
                information from unauthorized access, misuse, disclosure, or
                alteration. However, no online system can guarantee absolute
                security. Users acknowledge that sharing information over the
                internet carries inherent risks.
              </p>
              <p>
                <strong>09. Cookies & Analytics:</strong> Our website may use
                cookies and analytics tools to improve website functionality,
                understand user behavior, enhance user experience, and measure
                performance.
              </p>
              <p>
                <strong>10. Third-Party Services:</strong> Our website may
                contain links to third-party websites, tools, payment
                processors, or external platforms. Capital Connect Labs is not
                responsible for the privacy practices or content of such
                third-party services.
              </p>
            </div>
          </section>
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white-100 flex items-center gap-2">
              <span className="text-brand text-sm">11 - 13.</span> Intellectual
              Property, Liability & Changes
            </h2>
            <div className="pl-6 space-y-3 text-muted text-sm font-light leading-relaxed">
              <p>
                <strong>11. Intellectual Property:</strong> All content on this
                website, including text, graphics, branding, logos, educational
                materials, and related content, remains the property of Capital
                Connect Labs unless otherwise stated. Unauthorized reproduction
                or distribution is prohibited.
              </p>
              <p>
                <strong>12. Limitation of Liability:</strong> Capital Connect
                Labs provides ecosystem support, educational resources,
                networking opportunities, startup services, and related
                activities. We do not guarantee investment, funding, startup
                success, or commercial outcomes.
              </p>
              <p>
                <strong>13. Changes to This Policy:</strong> We may update this
                Privacy Policy periodically. Updated versions will be published
                on our website with the revised effective date. Continued use
                constitutes acceptance of any updates.
              </p>
            </div>
          </section>
        </div>
        <div className="text-xs text-muted/30 pt-4 flex gap-1.5">
          <FileText className="size-3" />
          <span>END OF POLICY</span>
        </div>
      </article>
    </main>
  );
}
