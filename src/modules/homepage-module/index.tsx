import ConsultationSection from "./section/consultation-section";
import OurPromotionSection from "./section/our-promotion-section";
import { HeroSection } from "./section/hero-section";
import { ProblemSection } from "./section/problem-section";
import { ProjectSection } from "./section/project-section";
import OurClient from "./section/our-client";

export const HomepageModule = () => {
  return (
    <div className="w-screen flex justify-center">
      <div className="w-[1512px] min-h-screen">
        <HeroSection />
        <ProblemSection />
        <ProjectSection />
        <OurPromotionSection />
        <ConsultationSection />
        {/* <ConsultationSchedule /> */}
        <OurClient />
      </div>
    </div>
  );
};
