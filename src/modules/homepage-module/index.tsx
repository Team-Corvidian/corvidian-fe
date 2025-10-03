import { HeroSection } from "./section/hero-section";
import { ProblemSection } from "./section/problem-section";
import { ProjectSection } from "./section/project-section";

export const HomepageModule = () => {
  return (
    <div className="w-full min-h-screen">
      <HeroSection />
      <ProblemSection />
      <ProjectSection />
    </div>
  );
}