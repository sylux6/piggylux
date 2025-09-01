import { motion } from "framer-motion";

export default function MotionTitle({ text }: { text: string }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6 }}
      className="text-3xl sm:text-5xl font-semibold tracking-tight"
    >
      {text}
    </motion.h1>
  );
}
