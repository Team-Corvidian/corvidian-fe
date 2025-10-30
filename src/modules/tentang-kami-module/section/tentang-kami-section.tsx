import React from 'react'
import { ArtikelKami } from '../components/artikel-kami'
import { ImageSection } from '../components/image';
import MengapaRekamJejak from '../components/mengapa-rekam-jejak';
import Solusi from '../components/solusi';
import TimKami from '../components/tim-kami';
import CaraKamiBekerja from '../components/cara-kami-bekerja';
import ConsultationSection from '@/modules/homepage-module/section/consultation-section';
import ConsultationSchedule from '@/modules/homepage-module/section/schedule-consultation-section';
import HeroSectionTentangKami from '../components/hero-section-tentang-kami';
import Footer from '@/modules/homepage-module/section/footer';


const TentangKamiSection = () => {
  return (
    <section>
      <HeroSectionTentangKami />
      <ImageSection />
      <MengapaRekamJejak />
      <Solusi />
      <TimKami />
      <CaraKamiBekerja />
      <ArtikelKami />
      <ConsultationSection />
      <ConsultationSchedule />
      <Footer />
    </section>
  );
}

export default TentangKamiSection
