import React from 'react'
import PortofolioHero from '@/modules/portofolio-module/portofolio'
import PortofolioContent from '@/modules/portofolio-module/portofolio-content'
import MucNet from '@/modules/portofolio-module/muc-net'
import ConsultationSchedule from "@/modules/homepage-module/section/schedule-consultation-section";
import ConsultationSection from "@/modules/homepage-module/section/consultation-section";
import Footer from "@/modules/homepage-module/section/footer";



export default function Portofolio() {
  return (
    <div className="w-full min-h-screen">
      <PortofolioHero />
      <PortofolioContent />
      <MucNet />
      <ConsultationSection />
      <ConsultationSchedule />
      <Footer />
    </div>
  )
}

