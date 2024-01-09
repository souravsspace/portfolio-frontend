"use client";

import { motion } from "framer-motion";

import { skillsData } from "@/constant";
import useSectionInView from "@/hooks/useSectionInView";
import SectionHeading from "@/components/ui/section-heading";

const fadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);

  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading title="Skills" />
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationVariant}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            key={index + skill}
            className="rounded-xl border border-black/10 bg-white px-5 py-2.5"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
