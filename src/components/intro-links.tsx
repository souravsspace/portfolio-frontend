"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CgArrowRight } from "react-icons/cg";
import { LuDownload } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { buttonVariants } from "@/components/ui/button";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function IntroLinks() {
  const { setTimeOfListClick, setActiveSection } = useActiveSectionContext();

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.3 }}
      className="flex gap-2"
    >
      <motion.div whileTap={{ scale: 0.97 }} whileHover={{ scale: 1.03 }}>
        <Link
          href="#contact"
          className={buttonVariants({
            className: "flex items-center justify-center rounded-3xl",
          })}
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfListClick(Date.now());
          }}
        >
          Contact Here
          <CgArrowRight className="ml-2 h-5 w-5 text-gray-300" />
        </Link>
      </motion.div>

      <Link
        href="./cv.pdf"
        className={buttonVariants({
          variant: "outline",
          className: "flex items-center justify-center rounded-3xl",
        })}
        download
      >
        Download CV
        <LuDownload className="ml-2 h-5 w-5 text-gray-600" />
      </Link>

      <Link
        href="https://github.com/souravsspace"
        target="_blank"
        className={buttonVariants({
          variant: "outline",
          size: "icon",
        })}
      >
        <FaGithub className="h-6 w-6 text-gray-600" />
      </Link>

      <Link
        href="https://www.linkedin.com/in/md-sourav-ukil-856211292/"
        target="_blank"
        className={buttonVariants({
          variant: "outline",
          size: "icon",
        })}
      >
        <FaLinkedin className="h-6 w-6 text-gray-600" />
      </Link>
    </motion.div>
  );
}
