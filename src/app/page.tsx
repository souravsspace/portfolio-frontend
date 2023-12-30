import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects";

import SectionDevider from "@/components/ui/section-devider";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center px-4">
      <Intro />
      <SectionDevider />
      <About />
      <SectionDevider />
      <Projects />
    </main>
  );
}
