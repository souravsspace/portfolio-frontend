"use client";
import { motion } from "framer-motion";

export default function SectionDevider() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.125 }}
      className="my-12 hidden h-16 w-1 rounded-lg bg-gray-200 sm:block"
    ></motion.div>
  );
}
