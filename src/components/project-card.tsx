"use client";

import { type projectsData } from "@/constant";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type Props = (typeof projectsData)[number];

export default function ProjectCard({
  title,
  description,
  tags,
  imageUrl,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.55, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgess, opacity: opacityProgess }}
      className="group mb-3 last:mb-0 sm:mb-8"
    >
      <motion.section
        ref={ref}
        style={{ scale: scrollYProgress, opacity: scrollYProgress }}
        className="relative mb-3 max-w-[42rem] overflow-hidden rounded-md border border-black/5 bg-gray-100 transition last:mb-0 hover:bg-gray-200 hover:shadow group-even:pl-8 sm:mb-6 sm:pr-8"
      >
        <div className="flex h-full flex-col gap-2 px-4 pb-8 pt-4 group-even:ml-[18rem] sm:max-w-[50%] sm:pl-10 sm:pr-2 sm:pt-10">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="rounded-full bg-black/75 px-3 py-1 text-xs uppercase tracking-wider text-white "
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt={title}
          className="absolute -right-40 top-8 h-[28.25rem] w-[28.25rem] rounded-t-sm shadow-2xl transition-all duration-300 group-even:-left-40 group-even:right-[initial] group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-105 group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2 "
        />
      </motion.section>
    </motion.div>
  );
}
