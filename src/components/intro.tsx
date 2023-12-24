"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

import { CgArrowRight } from "react-icons/cg";
import { LuDownload } from "react-icons/lu";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import Wrapper from "@/components/ui/wrapper";
import { buttonVariants } from "@/components/ui/button";

export default function Intro() {
  return (
    <Wrapper>
      <section className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, type: "tween" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=368&h=368&q=100"
                alt="Ricardo portrait"
                width="192"
                height="192"
                quality="95"
                priority={true}
                className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
              />
            </motion.div>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                delay: 0.1,
                duration: 0.5,
              }}
              className="absolute bottom-0 right-0 text-3xl"
            >
              👋
            </motion.span>
          </div>
        </div>

        <div className="mb-10 mt-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-medium leading-6 sm:text-4xl"
          >
            <span className="font-bold">Hello, I&apos;m Ricardo.</span> I&apos;m
            a <span className="font-bold">full-stack developer</span> with{" "}
            <span className="font-bold">8 years</span> of experience. I enjoy
            building <span className="italic">sites & apps</span>. My focus is{" "}
            <span className="underline">React (Next.js)</span>.
          </motion.h2>
        </div>

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
      </section>
    </Wrapper>
  );
}
