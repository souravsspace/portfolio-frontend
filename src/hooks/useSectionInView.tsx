"use client";

import { useEffect } from "react";
import { type NavLinksType } from "@/types";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function useSectionInView(
  sectionName: NavLinksType,
  threshold = 0.75,
) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfListClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfListClick > 1000)
      setActiveSection(sectionName);
  }, [inView]);

  return {
    ref,
  };
}
