"use client";

import Wrapper from "@/components/ui/wrapper";
import useSectionInView from "@/hooks/useSectionInView";
import SectionHeading from "@/components/ui/section-heading";

import { motion } from "framer-motion";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <Wrapper>
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="scroll-mt-28 text-center text-base"
        id="about"
        ref={ref}
      >
        <SectionHeading title="About Me" />

        <p className="mb-3">
          After graduating with a degree in{" "}
          <span className="font-medium">Accounting</span>, I decided to pursue
          my passion for programming. I enrolled in a coding bootcamp and
          learned{" "}
          <span className="font-medium">full-stack web development</span>.{" "}
          <span className="italic">My favorite part of programming</span> is the
          problem-solving aspect. I <span className="underline">love</span> the
          feeling of finally figuring out a solution to a problem. My core stack
          is{" "}
          <span className="font-medium">
            React, Next.js, Node.js, and MongoDB
          </span>
          . I am also familiar with TypeScript and Prisma. I am always looking
          to learn new technologies. I am currently looking for a{" "}
          <span className="font-medium">full-time position</span> as a software
          developer.
        </p>

        <div className="my-2" />

        <p>
          <span className="italic">When I'm not coding</span>, I enjoy playing
          video games, watching movies, and playing with my dog. I also enjoy{" "}
          <span className="font-medium">learning new things</span>. I am
          currently learning about{" "}
          <span className="font-medium">history and philosophy</span>. I'm also
          learning how to play the guitar.
        </p>
      </motion.section>
    </Wrapper>
  );
}
