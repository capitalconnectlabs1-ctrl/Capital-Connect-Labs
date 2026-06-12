"use client";

import React, { useState, useId, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Mail,
  MessageSquare,
  Clock,
  MapPin,
  CheckCircle,
  ArrowRight,
  LifeBuoy,
  ArrowLeft,
  Contact2,
} from "lucide-react";
import Button from "@/components/common/button";
import SectionHeader from "@/components/common/section-header";
import Footer from "@/components/common/footer";
import Navbar from "@/components/common/navbar";

function SupportFormContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const nameInputId = useId();
  const emailInputId = useId();
  const subjectInputId = useId();
  const messageInputId = useId();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Payload ID Data:", formState);
    setSubmitted(true);
  };

  const handleExternalNavigation = (destination: string) => {
    router.push(destination);
  };

  return (
    <div className="grid grid-cols-1 gap-4 xl:gap-6 items-start mt-6 lg:mt-12">
      <div className="space-y-6 grid grid-cols-2 gap-6">
        <div className="bg-gray-1 h-full border border-gray-2/70 p-4 sm:p-8 rounded-xl space-y-3 lg:space-y-6">
          <h3 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2 tracking-tight">
            <LifeBuoy className="size-6 text-brand" /> Hub contact details
          </h3>
          <p className="text-muted text-base leading-relaxed">
            Reach out to us directly through standard official communication
            channels.
          </p>

          <div className="space-y-6 pt-2">
            <div className="flex items-start gap-2 sm:gap-4">
              <div className="size-11 rounded-xl bg-gray-2 flex items-center justify-center shrink-0 border border-gray-1">
                <Mail className="size-5 text-white" />
              </div>
              <div>
                <h4 className="text-base text-muted/70">Official inquiries</h4>
                <a
                  href="mailto:contact@capitalconnectslabs.com"
                  className="text-sm sm:text-base font-medium text-white-100 hover:text-brand transition-colors cursor-pointer mt-0.5"
                >
                  contact@capitalconnectslabs.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2 sm:gap-4">
              <div className="size-11 rounded-xl bg-gray-2 flex items-center justify-center shrink-0 border border-gray-1">
                <Clock className="size-5 text-white" />
              </div>
              <div>
                <h4 className="text-base text-muted/70">Response matrix</h4>
                <p className="text-sm sm:text-base font-medium text-white-100 mt-0.5">
                  Standard turnaround time less than 12 hours
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2 sm:gap-4">
              <div className="size-11 rounded-xl bg-gray-2 flex items-center justify-center shrink-0 border border-gray-1">
                <MapPin className="size-5 text-white" />
              </div>
              <div>
                <h4 className="text-base text-muted/70">Headquarters</h4>
                <p className="text-sm sm:text-base font-medium text-white-100 mt-0.5 leading-relaxed">
                  Bangalore
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-linear-to-br h-full flex flex-col justify-between from-brand/5 to-transparent border border-brand/20 p-6 sm:p-8 rounded-xl space-y-3">
          <div className="flex flex-col gap-2">
            <h4 className="text-base sm:text-lg font-bold text-brand">
              Looking for program applications?
            </h4>
            <p className="text-muted text-sm leading-relaxed">
              If you are a founder wanting to apply directly to our next
              incubation batch, please use the structured portal instead of this
              generic support form.
            </p>
          </div>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc4RkU639a2KOtd4AbhENoWo4Jls9Vvut5i098iu9ibc9Lb0A/viewform?pli=1"
            target="_blank"
          >
            <div className="text-sm font-bold text-white-100 flex items-center gap-1.5 hover:text-brand cursor-pointer group pt-2 w-fit">
              <span>Go to cohort dashboard</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function CustomerSupportPage() {
  return (
    <>
      <div className="sticky top-0 z-1000 container pt-6">
        <Navbar />
      </div>
      <main className="relative py-30 min-h-screen bg-background overflow-hidden">
        <div className="absolute top-[10%] right-[-10%] size-140 bg-radial-glow pointer-events-none z-0 opacity-60" />
        <div className="absolute bottom-[10%] left-[-15%] size-150 rounded-xl bg-accent-mint/10 blur-[150px] pointer-events-none z-0 mix-blend-screen opacity-50" />

        <div className="container relative z-10">
          <SectionHeader
            badgeText="24/7 Concierge Desk"
            badgeIcon={Contact2}
            title="How can we help your startup?"
            subtitle="Whether you are a founder looking for program details or an investor seeking access to our deal-flow dashboard, our team is ready to assist."
          />

          <Suspense
            fallback={
              <div className="text-center text-muted py-12">
                Loading workspace metrics...
              </div>
            }
          >
            <SupportFormContent />
          </Suspense>
        </div>
      </main>
      <Footer />
    </>
  );
}
