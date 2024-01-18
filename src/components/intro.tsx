"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Wrapper from "@/components/ui/wrapper";
import IntroLinks from "@/components/intro-links";
import useSectionInView from "@/hooks/useSectionInView";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <Wrapper>
      <section
        ref={ref}
        className="mt-20 flex scroll-m-32 flex-col items-center justify-center sm:mt-0"
        id="home"
      >
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
            <span className="font-bold">Hello, I&apos;m Sourav.</span> I&apos;m
            a <span className="font-bold">full-stack developer</span> with{" "}
            <span className="font-bold">1 years</span> of experience. I enjoy
            building <span className="italic">sites & apps</span>. My focus is{" "}
            <span className="underline">React (Next.js)</span>.
          </motion.h2>
        </div>

        <IntroLinks />
      </section>
    </Wrapper>
  );
}
