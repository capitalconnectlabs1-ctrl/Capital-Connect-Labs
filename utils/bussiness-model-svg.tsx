"use client";

import { motion } from "framer-motion";

export default function BusinessModelIllustration() {
  return (
    <div className="w-full h-48 flex items-center justify-center mt-6">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-48 h-48"
      >
        <svg
          viewBox="0 0 200 200"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer ring */}
          <motion.circle
            cx="100"
            cy="100"
            r="95"
            fill="#1a2a1a"
            animate={{ scale: [1, 1.03, 1], opacity: [0.55, 0.85, 0.55] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "100px 100px" }}
          />

          {/* Mid ring */}
          <motion.circle
            cx="100"
            cy="100"
            r="72"
            fill="#1f3a1f"
            animate={{ scale: [1, 1.03, 1], opacity: [0.55, 0.85, 0.55] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
            style={{ transformOrigin: "100px 100px" }}
          />

          {/* Inner bright circle */}
          <circle cx="100" cy="100" r="48" fill="#c8f135" />

          {/* Chart icon — vertical axis */}
          <line
            x1="76"
            y1="122"
            x2="76"
            y2="82"
            stroke="#1a2a1a"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Chart icon — horizontal axis */}
          <line
            x1="76"
            y1="122"
            x2="128"
            y2="122"
            stroke="#1a2a1a"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Arrow tip vertical */}
          <polyline
            points="72,88 76,80 80,88"
            stroke="#1a2a1a"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Arrow tip horizontal */}
          <polyline
            points="122,118 129,122 122,126"
            stroke="#1a2a1a"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Zigzag chart line */}
          <polyline
            points="82,112 94,94 108,103 124,80"
            stroke="#1a2a1a"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </motion.div>
    </div>
  );
}
