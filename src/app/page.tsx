import {
  Intro,
  About,
  Projects,
  Skills,
  Experience,
  Contact,
  Footer,
} from "@/components";
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
      <Contact />
      <Footer />
    </main>
  );
}
