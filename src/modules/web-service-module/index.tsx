import React from 'react'
// import HeroSectionIt from './section/hero-section-web'
import ConsultationSchedule from '../homepage-module/section/schedule-consultation-section'
import ConsultationSection from '../homepage-module/section/consultation-section'
import OurPromotionSection from '../homepage-module/section/our-promotion-section'
import Footer from '../homepage-module/section/footer'
import HeroSectionWeb from './section/hero-section-web'

export const Webservice = () => {
  return (
    <div className="w-full min-h-screen">
      <HeroSectionWeb/>
      <ConsultationSection/>
      <ConsultationSchedule/>
      <OurPromotionSection/>
      <Footer/>
    </div>
  )
}

