"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "./button";

const NAV_LINKS = [
  { label: "About Us", href: "/about-us" },
  { label: "Problem Statement", href: "/problem-statement" },
  { label: "For Founders", href: "/for-founder" },
  { label: "For Investors", href: "/for-investor" },
  { label: "Our Team", href: "/our-team" },
  { label: "Privacy Policy", href: "/privacy-policies" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="relative z-999">
      <div className="container bg-background/75 backdrop-blur-md border rounded-xl border-gray-2/80 transition-all duration-300">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="logo"
              width={48}
              height={48}
              className="size-10 lg:size-12"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8 text-muted font-medium">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative py-1 transition-colors ${
                    isActive ? "text-brand" : "hover:text-white-pure"
                  }`}
                >
                  {link.label}
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 w-full bg-brand rounded-full"
                    initial={false}
                    animate={{
                      scaleX: isActive ? 1 : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    style={{ transformOrigin: "left" }}
                  />
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc4RkU639a2KOtd4AbhENoWo4Jls9Vvut5i098iu9ibc9Lb0A/viewform?pli=1"
              target="_blank"
            >
              <Button variant="primary" className="px-5 py-2.5">
                Apply Now
              </Button>
            </a>
          </div>

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="lg:hidden text-muted hover:text-white-pure p-2 border bg-gray-2 border-gray-1 rounded-lg"
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden fixed top-28 left-1/2 -translate-x-1/2 w-[calc(100vw-48px)] z-100 rounded-xl border border-gray-1 bg-[#0F0F0F] px-5 py-5 shadow-xl"
          >
            <div className="flex flex-col gap-4 text-muted font-medium">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`relative py-2 transition-colors ${
                      isActive ? "text-brand" : "hover:text-brand"
                    }`}
                  >
                    {link.label}
                    <motion.span
                      className="absolute bottom-0 left-0 h-[1.5px] bg-brand rounded-full"
                      initial={false}
                      animate={{ width: isActive ? "100%" : "0%" }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    />
                  </Link>
                );
              })}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc4RkU639a2KOtd4AbhENoWo4Jls9Vvut5i098iu9ibc9Lb0A/viewform?pli=1"
                target="_blank"
                className="mt-2"
              >
                <Button variant="outline" className="w-full">
                  Apply Now
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
