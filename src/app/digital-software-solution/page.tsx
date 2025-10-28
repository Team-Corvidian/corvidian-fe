import React from 'react'
import ConsultationSchedule from '@/modules/homepage-module/section/schedule-consultation-section'
import ConsultationSection from '@/modules/homepage-module/section/consultation-section'
import OurPromotionSection from '@/modules/homepage-module/section/our-promotion-section'
import Footer from '@/modules/homepage-module/section/footer'
import HeroSectionDigital from '@/modules/digital-service/section/hero-section-digital'

export default function DigitalSoftwareSolutionPage() {
  return (
    <div className="w-full min-h-screen">
      <HeroSectionDigital/>
      <ConsultationSection/>
      <ConsultationSchedule/>
      <OurPromotionSection/>
      <Footer/>
    </div>
  )
}

