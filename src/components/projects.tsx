"use client";

import { projectsData } from "@/constant";
import Wrapper from "@/components/ui/wrapper";
import ProjectCard from "@/components/project-card";
import useSectionInView from "@/hooks/useSectionInView";
import SectionHeading from "@/components/ui/section-heading";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <Wrapper>
      <div id="projects" className="mb-28 scroll-mt-28 sm:mb-24" ref={ref}>
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
