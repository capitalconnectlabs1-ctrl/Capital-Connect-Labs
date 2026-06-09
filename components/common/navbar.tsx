"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "./button";

const navLinks = [
  {
    label: "About",
    href: "/about-us",
  },
  {
    label: "Programs",
    href: "/#programs",
  },
  {
    label: "Why CCL",
    href: "/#risk",
  },
  {
    label: "Our Team",
    href: "/#team",
  },
  {
    label: "Privacy Policy",
    href: "/privacy-policies",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
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
          <div className="hidden md:flex items-center gap-8 text-muted font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-white-pure transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link href="/customer-support">
              <Button variant="primary" className="px-5 py-2.5">
                Get started
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden text-muted hover:text-white-pure p-2 border bg-gray-2 border-gray-1 rounded-lg"
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
            className="md:hidden fixed top-28 left-1/2 -translate-x-1/2 z-999 w-[88%] rounded-xl border border-gray-1 bg-[#0F0F0F] px-5 py-5 shadow-xl"
          >
            <div className="flex flex-col gap-4 text-muted font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-2 hover:text-brand transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/customer-support"
                onClick={() => setIsOpen(false)}
                className="mt-2"
              >
                <Button variant="outline" className="w-full">
                  Get started
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
