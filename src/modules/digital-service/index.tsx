import React from 'react'
import ConsultationSchedule from '../homepage-module/section/schedule-consultation-section'
import ConsultationSection from '../homepage-module/section/consultation-section'
import OurPromotionSection from '../homepage-module/section/our-promotion-section'
import Footer from '../homepage-module/section/footer'
import HeroSectionDigital from './section/hero-section-digital'

export const Digitalservice = () => {
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

