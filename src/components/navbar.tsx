"use client";

import { motion } from "framer-motion";
import { links } from "@/constant";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="relative z-50 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: "-50%", y: -100 }}
        animate={{ opacity: 1, x: "-50%", y: 0 }}
        transition={{
          when: "beforeChildren",
        }}
        className="fixed left-1/2 top-0 flex h-[4.5rem] w-full items-center justify-center rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[33rem] sm:rounded-full"
      >
        <nav className="flex w-full items-center justify-center pb-2 sm:pb-0">
          <ul className="flex w-full flex-wrap items-center justify-center gap-2 text-[0.9rem] font-medium text-gray-500 sm:w-full sm:flex-nowrap sm:gap-5">
            {links.map((link) => (
              <motion.li
                key={link.hash}
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Link
                  className="p-2 transition hover:text-gray-950"
                  href={link.hash}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
