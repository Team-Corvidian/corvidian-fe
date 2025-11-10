import React from "react";
import PortofolioHero from "@/modules/portofolio-module/portofolio";
import PortofolioContent from "@/modules/portofolio-module/portofolio-content";
import PortofolioContentMobile from "@/modules/portofolio-module/portofolio-content-mobile";
import MucNet from "@/modules/portofolio-module/muc-net";
import MucNetMobile from "@/modules/portofolio-module/muc-net-mobile";
import ConsultationSchedule from "@/modules/homepage-module/section/schedule-consultation-section";
import ConsultationSection from "@/modules/homepage-module/section/consultation-section";

export default function Portofolio() {
  return (
    <div className="w-screen flex justify-center">
      <div className="w-full max-w-[1550px] min-h-screen">
        <PortofolioHero />
        
        {/* Desktop Version - Hidden on mobile */}
        <div className="hidden lg:block">
          <PortofolioContent />
        </div>
        
        {/* Mobile Version - Hidden on desktop */}
        <div className="block lg:hidden">
          <PortofolioContentMobile />
        </div>
        
        {/* Desktop MucNet - Hidden on mobile */}
        <div className="hidden lg:block">
          <MucNet />
        </div>
        
        {/* Mobile MucNet - Hidden on desktop */}
        <div className="block lg:hidden">
          <MucNetMobile />
        </div>
        
        <ConsultationSection />
        <ConsultationSchedule />
      </div>
    </div>
  );
}