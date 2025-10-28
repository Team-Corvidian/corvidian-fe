import React from 'react'
import HeroSectionIt from '@/modules/ITInfra/section/hero-section-it'
import ConsultationSchedule from '@/modules/homepage-module/section/schedule-consultation-section'
import ConsultationSection from '@/modules/homepage-module/section/consultation-section'
import OurPromotionSection from '@/modules/homepage-module/section/our-promotion-section'
import Footer from '@/modules/homepage-module/section/footer'

export default function ITInfraPage() {
  return (
    <div className="w-full min-h-screen">
      <HeroSectionIt/>
      <ConsultationSection/>
      <ConsultationSchedule/>
      <OurPromotionSection/>
      <Footer/>
    </div>
  )
}

