import { HeroSection } from "./section/hero-section";
import { ProblemSection } from "./section/problem-section";

export const HomepageModule = () => {
  return (
    <div className="w-full min-h-screen">
      <HeroSection />
      <ProblemSection />
    </div>
  );
}