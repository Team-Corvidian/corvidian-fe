import React from 'react'
import HeroSectionIt from './section/hero-section-it'
import ConsultationSchedule from '../homepage-module/section/schedule-consultation-section'
import ConsultationSection from '../homepage-module/section/consultation-section'
import OurPromotionSection from '../homepage-module/section/our-promotion-section'
import Footer from '../homepage-module/section/footer'

export const ITInfra = () => {
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

