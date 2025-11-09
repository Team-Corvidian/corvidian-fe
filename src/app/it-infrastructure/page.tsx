import React from "react";
import HeroSectionIt from "@/modules/ITInfra/section/hero-section-it";
import ConsultationSchedule from "@/modules/homepage-module/section/schedule-consultation-section";
import ConsultationSection from "@/modules/homepage-module/section/consultation-section";
import OurPromotionSection from "@/modules/homepage-module/section/our-promotion-section";

export default function ITInfraPage() {
  return (
    <div className="w-screen flex justify-center">
    <div className="w-full max-w-[1550px] min-h-screen">
      <HeroSectionIt/>
      <ConsultationSection/>
      <ConsultationSchedule/>
      <OurPromotionSection/>
    </div>
    </div>
  );
}
