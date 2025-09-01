"use client";
import { motion } from "framer-motion";

export default function PiggyMascot() {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="w-28 h-28 rounded-full bg-piggy-pink/70 shadow-soft grid place-items-center border border-piggy-rose/40"
      aria-hidden
    >
      <span className="text-3xl">🐷</span>
    </motion.div>
  );
}
