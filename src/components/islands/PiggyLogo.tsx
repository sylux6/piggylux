import { motion } from "framer-motion";

export default function PiggyLogo({ size = 56 }: { size?: number }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 128 128"
      initial={{ rotate: 0 }}
      whileHover={{ rotate: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
      className="drop-shadow"
      aria-label="piggylux"
    >
      {/* Cute piggy head */}
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0%" stopColor="#FFC1CC" />
          <stop offset="100%" stopColor="#FF8FB1" />
        </linearGradient>
      </defs>
      <circle cx="64" cy="64" r="46" fill="url(#g)" />
      {/* ears */}
      <path d="M30 40 L24 18 L44 30 Z" fill="#FFC1CC" />
      <path d="M98 40 L84 30 L104 18 Z" fill="#FFC1CC" />
      {/* snout */}
      <ellipse cx="64" cy="76" rx="22" ry="16" fill="#FF8FB1" />
      <circle cx="56" cy="76" r="4" fill="#22192D" opacity=".6" />
      <circle cx="72" cy="76" r="4" fill="#22192D" opacity=".6" />
      {/* eyes with sparkle */}
      <circle cx="48" cy="58" r="6" fill="#22192D" />
      <circle cx="80" cy="58" r="6" fill="#22192D" />
      <circle cx="83" cy="55" r="2" fill="#fff" />
    </motion.svg>
  );
}
