"use client";

import { motion } from "framer-motion";

const LIME = "#A3DC2F";
const DARK = "#0f110f";
const BODY1 = "#A3DC2F";
const BODY2 = "#A3DC2F";
const SKIN1 = "#A3DC2F";
const SKIN2 = "#A3DC2F";
const HAIR1 = "#A3DC2F";
const HAIR2 = "#A3DC2F";

function Person({
  x,
  scale = 1,
  bodyColor,
  skinColor,
  hairColor,
  isCenter = false,
  delay = 0,
}: {
  x: number;
  scale?: number;
  bodyColor: string;
  skinColor: string;
  hairColor: string;
  isCenter?: boolean;
  delay?: number;
}) {
  const s = scale;
  const headR = (isCenter ? 44 : 34) * s;
  const bodyW = 56 * s;
  const bodyH = 110 * s;
  const neckW = 14 * s;
  const neckH = 22 * s;

  const floorY = 310;
  const bodyTop = floorY - bodyH;
  const neckY = bodyTop - neckH;
  const headCY = neckY - headR + 4 * s;

  const roleLabel = isCenter
    ? "Leadership"
    : bodyColor === BODY1
      ? x < 340
        ? "Investment"
        : "Operations"
      : x < 230
        ? "Fintech"
        : "Product";

  return (
    <motion.g
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Shadow */}
      <motion.ellipse
        cx={x}
        cy={floorY + 5}
        rx={36 * s}
        ry={7 * s}
        fill="#000"
        opacity={0.18}
        animate={{ rx: [36 * s, 32 * s, 36 * s] }}
        transition={{
          duration: 2.5,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Body */}
      <rect
        x={x - bodyW / 2}
        y={bodyTop}
        width={bodyW}
        height={bodyH}
        rx={12 * s}
        fill={bodyColor}
      />

      {/* Shirt strip */}
      <rect
        x={x - 9 * s}
        y={bodyTop}
        width={18 * s}
        height={bodyH * 0.38}
        rx={4 * s}
        fill="#141e08"
      />

      {/* Tie — center only */}
      {isCenter && (
        <polygon
          points={[
            `${x - 5 * s},${bodyTop + 4 * s}`,
            `${x - 3 * s},${bodyTop + 16 * s}`,
            `${x},${bodyTop + 38 * s}`,
            `${x + 3 * s},${bodyTop + 16 * s}`,
            `${x + 5 * s},${bodyTop + 4 * s}`,
          ].join(" ")}
          fill={LIME}
          opacity={0.7}
        />
      )}

      {/* Collar */}
      <rect
        x={x - 12 * s}
        y={bodyTop - 2 * s}
        width={24 * s}
        height={10 * s}
        rx={3 * s}
        fill={LIME}
        opacity={0.35}
      />

      {/* Neck */}
      <rect
        x={x - neckW / 2}
        y={neckY}
        width={neckW}
        height={neckH + 4}
        rx={4 * s}
        fill={skinColor}
      />

      {/* Head */}
      <circle cx={x} cy={headCY} r={headR} fill={skinColor} />

      {/* Face highlight */}
      <ellipse
        cx={x}
        cy={headCY - 5 * s}
        rx={headR * 0.45}
        ry={headR * 0.36}
        fill={skinColor}
        opacity={0.5}
      />

      {/* Eyes */}
      {([-1, 1] as const).map((side) => (
        <g key={side}>
          <ellipse
            cx={x + side * 10 * s}
            cy={headCY - 4 * s}
            rx={3.5 * s}
            ry={2.5 * s}
            fill="#1a2e0a"
          />
          <ellipse
            cx={x + side * 10 * s}
            cy={headCY - 4 * s}
            rx={1.5 * s}
            ry={1.5 * s}
            fill="white"
            opacity={0.7}
          />
        </g>
      ))}

      {/* Smile */}
      <path
        d={`M ${x - 8 * s} ${headCY + 5 * s} Q ${x} ${headCY + 13 * s} ${
          x + 8 * s
        } ${headCY + 5 * s}`}
        fill="none"
        stroke="#1a2e0a"
        strokeWidth={1.5 * s}
        strokeLinecap="round"
      />

      {/* Hair */}
      <path
        d={`M ${x - headR * 1.02} ${headCY - headR * 0.15} A ${
          headR * 1.02
        } ${headR * 1.02} 0 0 1 ${x + headR * 1.02} ${headCY - headR * 0.15}`}
        fill={hairColor}
      />

      {/* Center star badge */}
      {isCenter && (
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.5, duration: 0.4, ease: "backOut" }}
        >
          <circle cx={x} cy={headCY - headR - 22} r={14} fill="#141e08" />
          <circle
            cx={x}
            cy={headCY - headR - 22}
            r={14}
            fill="none"
            stroke={LIME}
            strokeWidth={1}
          />
          <StarShape cx={x} cy={headCY - headR - 22} />
        </motion.g>
      )}

      {/* Role badge */}
      <motion.g
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delay + 0.4, duration: 0.4 }}
      >
        <rect
          x={x - (isCenter ? 44 : 38)}
          y={floorY + 14}
          width={isCenter ? 88 : 76}
          height={22}
          rx={7}
          fill="#111611"
          stroke={isCenter ? LIME : "#222e14"}
          strokeWidth={0.8}
        />
        <text
          x={x}
          y={floorY + 29}
          textAnchor="middle"
          fill={isCenter ? LIME : "#7ab83a"}
          fontSize={isCenter ? 11 : 10}
          fontWeight={isCenter ? 600 : 500}
          fontFamily="Inter, sans-serif"
        >
          {roleLabel}
        </text>
      </motion.g>
    </motion.g>
  );
}

function StarShape({ cx, cy }: { cx: number; cy: number }) {
  const pts = 5,
    R = 9,
    r = 4;
  const points = Array.from({ length: pts * 2 }, (_, i) => {
    const angle = (i * Math.PI) / pts - Math.PI / 2;
    const rad = i % 2 === 0 ? R : r;
    return `${cx + Math.cos(angle) * rad},${cy + Math.sin(angle) * rad}`;
  }).join(" ");
  return <polygon points={points} fill={LIME} opacity={0.9} />;
}

function OrbRing({ cx, cy }: { cx: number; cy: number }) {
  return (
    <>
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const startAngle = (i * Math.PI * 2) / 6;
        const orbRx = 85,
          orbRy = 48;
        const steps = 60;
        const animCx = Array.from({ length: steps + 1 }, (_, k) => {
          const a = startAngle + (k / steps) * Math.PI * 2;
          return cx + Math.cos(a) * orbRx;
        });
        const animCy = Array.from({ length: steps + 1 }, (_, k) => {
          const a = startAngle + (k / steps) * Math.PI * 2;
          return cy + Math.sin(a) * orbRy;
        });
        return (
          <motion.circle
            key={i}
            r={3 + (i % 3)}
            fill={LIME}
            opacity={0.25 + (i % 3) * 0.1}
            animate={{ cx: animCx, cy: animCy }}
            transition={{
              duration: 6 + i * 0.8,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.4,
            }}
          />
        );
      })}
    </>
  );
}

function DashLine({
  x1,
  y1,
  x2,
  y2,
  delay,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay: number;
}) {
  return (
    <motion.line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={LIME}
      strokeWidth={0.8}
      strokeDasharray="4 6"
      initial={{ opacity: 0, pathLength: 0 }}
      animate={{ opacity: 0.12, pathLength: 1 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
    />
  );
}

function FloatingBadge({
  x,
  y,
  label,
  highlight,
  delay,
  floatDelay,
}: {
  x: number;
  y: number;
  label: string;
  highlight?: boolean;
  delay: number;
  floatDelay?: number;
}) {
  const w = highlight ? 160 : 88;
  return (
    <motion.g
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
    >
      <motion.g
        animate={{ y: [0, -5, 0] }}
        transition={{
          duration: 3,
          delay: floatDelay ?? 0,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <rect
          x={x - w / 2}
          y={y - 14}
          width={w}
          height={28}
          rx={8}
          fill="#111611"
          stroke={highlight ? LIME : "#1e2a12"}
          strokeWidth={highlight ? 1 : 0.5}
        />
        <circle cx={x - w / 2 + 18} cy={y} r={5} fill="#1e2e10" />
        <circle
          cx={x - w / 2 + 18}
          cy={y}
          r={2.5}
          fill={LIME}
          opacity={highlight ? 1 : 0.6}
        />
        <text
          x={x - w / 2 + 30}
          y={y + 4}
          fill={highlight ? LIME : "#5a8a28"}
          fontSize={11}
          fontWeight={highlight ? 600 : 500}
          fontFamily="Inter, sans-serif"
        >
          {label}
        </text>
      </motion.g>
    </motion.g>
  );
}

export default function LeadershipIllustration() {
  const centerX = 340;
  const centerHeadY = 310 - 110 * 1.1 - 44 * 1.1 * 2 + 4 * 1.1 + 44 * 1.1;

  return (
    <div className="w-full h-full">
      <svg
        viewBox="0 0 680 400"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid meet"
        style={{ display: "block" }}
      >
        {/* Dot grid */}
        {[60, 120, 180, 240, 300, 360, 420, 480, 540, 600].map((gx) =>
          [50, 350].map((gy) => (
            <circle
              key={`${gx}-${gy}`}
              cx={gx}
              cy={gy}
              r={1.5}
              fill="#1a1f1a"
            />
          )),
        )}

        {/* Ground line */}
        <rect
          x="40"
          y="318"
          width="600"
          height="1.5"
          rx="1"
          fill="#1a221a"
          opacity="0.6"
        />

        {/* Dashed connecting lines */}
        <DashLine x1={130} y1={260} x2={centerX - 50} y2={260} delay={1.2} />
        <DashLine x1={230} y1={245} x2={centerX - 42} y2={245} delay={0.9} />
        <DashLine x1={centerX + 50} y1={245} x2={450} y2={245} delay={0.9} />
        <DashLine x1={centerX + 50} y1={260} x2={550} y2={260} delay={1.2} />

        {/* Orbs */}
        <OrbRing cx={centerX} cy={centerHeadY} />

        {/* Corner arcs */}
        <path
          d="M40 70 Q40 30 80 30"
          fill="none"
          stroke="#1e261a"
          strokeWidth="1"
        />
        <path
          d="M640 70 Q640 30 600 30"
          fill="none"
          stroke="#1e261a"
          strokeWidth="1"
        />

        {/* Badges */}
        <FloatingBadge
          x={340}
          y={28}
          label="Capital Connect Labs"
          highlight
          delay={0.2}
          floatDelay={0}
        />
        <FloatingBadge
          x={80}
          y={90}
          label="Strategy"
          delay={1.4}
          floatDelay={0.5}
        />
        <FloatingBadge
          x={600}
          y={90}
          label="Venture"
          delay={1.4}
          floatDelay={1.0}
        />
        <FloatingBadge
          x={80}
          y={140}
          label="Fintech"
          delay={1.6}
          floatDelay={1.5}
        />
        <FloatingBadge
          x={600}
          y={140}
          label="Ops"
          delay={1.6}
          floatDelay={2.0}
        />

        {/* People */}
        <Person
          x={110}
          scale={0.72}
          bodyColor="#2a4018"
          skinColor="#3a5828"
          hairColor="#151e0a"
          delay={0.8}
        />
        <Person
          x={220}
          scale={0.88}
          bodyColor={BODY1}
          skinColor={SKIN1}
          hairColor={HAIR1}
          delay={0.5}
        />
        <Person
          x={centerX}
          scale={1.1}
          bodyColor={BODY2}
          skinColor={SKIN2}
          hairColor={HAIR2}
          isCenter
          delay={0.1}
        />
        <Person
          x={460}
          scale={0.88}
          bodyColor={BODY1}
          skinColor={SKIN1}
          hairColor={HAIR1}
          delay={0.5}
        />
        <Person
          x={570}
          scale={0.72}
          bodyColor="#2a4018"
          skinColor="#3a5828"
          hairColor="#151e0a"
          delay={0.8}
        />
      </svg>
    </div>
  );
}
