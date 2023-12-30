"use client";

import { projectsData } from "@/constant";
import Wrapper from "@/components/ui/wrapper";
import ProjectCard from "@/components/project-card";
import SectionHeading from "@/components/ui/section-heading";
import { useActiveSectionContext } from "@/context/active-section-context";

import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) setActiveSection("Projects");
  }, [inView]);

  return (
    <Wrapper>
      <div id="projects" className="scroll-mt-28" ref={ref}>
        <SectionHeading title="My Projects" />
        <div>
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}
