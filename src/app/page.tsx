import About from "@/components/about";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

import SectionDevider from "@/components/ui/section-devider";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-4">
      <Intro />
      <SectionDevider />
      <About />
      <SectionDevider />
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
}
