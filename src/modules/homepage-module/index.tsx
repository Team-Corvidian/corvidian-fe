import ConsultationSection from "./section/consultation-section";
import OurPromotionSection from "./section/our-promotion-section";
import { HeroSection } from "./section/hero-section";
import { ProblemSection } from "./section/problem-section";
import { ProjectSection } from "./section/project-section";
import ConsultationSchedule from "./section/schedule-consultation-section";
import OurClient from "./section/our-client";
import Footer from "./section/footer";

export const HomepageModule = () => {
  return (
    <div className="w-full min-h-screen">
      <HeroSection />
      <ProblemSection />
      <ProjectSection />
      <ConsultationSection />
      <OurPromotionSection />
      <ConsultationSchedule />
      <OurClient />
      <Footer />
    </div>
  );
}