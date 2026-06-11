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
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 xl:gap-6 items-start mt-6 lg:mt-12">
      <div className="lg:col-span-5 space-y-6">
        <div className="bg-gray-1 border border-gray-2/70 p-4 sm:p-8 rounded-xl space-y-3 lg:space-y-6">
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
                <p className="text-sm sm:text-base font-medium text-white-100 hover:text-brand transition-colors cursor-pointer mt-0.5">
                  support@capitalconnectlabs.com
                </p>
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
                  Capital Connect Labs Inc., Innovation Ecosystem Hub
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-linear-to-br from-brand/5 to-transparent border border-brand/20 p-6 sm:p-8 rounded-xl space-y-3">
          <h4 className="text-base sm:text-lg font-bold text-brand">
            Looking for program applications?
          </h4>
          <p className="text-muted text-sm leading-relaxed">
            If you are a founder wanting to apply directly to our next
            incubation batch, please use the structured portal instead of this
            generic support form.
          </p>
          <div
            onClick={() => handleExternalNavigation("/portal")}
            className="text-sm font-bold text-white-100 flex items-center gap-1.5 hover:text-brand cursor-pointer group pt-2 w-fit"
          >
            <span>Go to cohort dashboard</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>

      <div className="lg:col-span-7 h-full">
        <div className="bg-gray-1 border h-full border-gray-2 p-4 md:p-6 lg:p-10 rounded-xl relative overflow-hidden">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 space-y-4"
            >
              <div className="size-16 bg-brand/10 border border-brand/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="size-8 text-brand" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white-100">
                Message received securely
              </h3>
              <p className="text-muted text-base sm:text-lg max-w-md mx-auto leading-relaxed">
                Thank you for connecting. An ecosystem coordinator has been
                assigned to your ticket and will trace back shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-sm font-semibold text-brand hover:underline mt-6 block mx-auto cursor-pointer"
              >
                Submit another response
              </button>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="h-full flex flex-col gap-6 justify-between"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-base sm:text-2xl font-bold text-foreground mb-1.5 tracking-tight">
                    Send a secure transmission
                  </h3>
                  <p className="text-muted text-sm sm:text-base">
                    All ecosystem support communications are vaulted and audited
                    internally.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-6">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor={nameInputId}
                      className="text-sm font-bold text-muted"
                    >
                      Your full name
                    </label>
                    <input
                      id={nameInputId}
                      name="client-name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Aman Kumar"
                      className="w-full bg-gray-2 border border-gray-1 rounded-xl px-4 py-3.5 text-base font-medium text-foreground outline-hidden focus:border-brand transition-colors"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor={emailInputId}
                      className="text-sm font-bold text-muted"
                    >
                      Email address
                    </label>
                    <input
                      id={emailInputId}
                      name="client-email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="name@agency.com"
                      className="w-full bg-gray-2 border border-gray-1 rounded-xl px-4 py-3.5 text-base font-medium text-foreground outline-hidden focus:border-brand transition-colors"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor={subjectInputId}
                    className="text-sm font-bold text-muted"
                  >
                    Subject / Area of inquiry
                  </label>
                  <input
                    id={subjectInputId}
                    name="transmission-subject"
                    type="text"
                    required
                    placeholder="e.g. Incubation program architecture gaps"
                    className="w-full bg-gray-2 border border-gray-1 rounded-xl px-4 py-3.5 text-base font-medium text-foreground outline-hidden focus:border-brand transition-colors"
                    value={formState.subject}
                    onChange={(e) =>
                      setFormState({ ...formState, subject: e.target.value })
                    }
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor={messageInputId}
                    className="text-sm font-bold text-muted"
                  >
                    Elaborate your message
                  </label>
                  <textarea
                    id={messageInputId}
                    name="transmission-body"
                    rows={5}
                    required
                    placeholder="Describe your current traction, portfolio needs, or support requests in detail..."
                    className="w-full bg-gray-2 border border-gray-1 rounded-xl px-4 py-3.5 text-base font-medium text-foreground outline-hidden focus:border-brand transition-colors resize-none"
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                  />
                </div>
              </div>
              <Button
                type="submit"
                variant="primary"
                className="w-full! justify-center py-4 text-base font-bold rounded-xl"
              >
                <span>Dispatch transmission</span>
                <MessageSquare className="size-5 inline ml-2" />
              </Button>
            </form>
          )}
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
