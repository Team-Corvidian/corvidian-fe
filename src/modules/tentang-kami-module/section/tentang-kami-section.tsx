import { fetchWawasanPreviews } from "@/lib/api/wawasan-api";
import { ArtikelKami } from "../components/artikel-kami";
import { ImageSection } from "../components/image";
import MengapaRekamJejak from "../components/mengapa-rekam-jejak";
import Solusi from "../components/solusi";
import TimKami from "../components/tim-kami";
import CaraKamiBekerja from "../components/cara-kami-bekerja";
import ConsultationSection from "@/modules/homepage-module/section/consultation-section";
import ConsultationSchedule from "@/modules/homepage-module/section/schedule-consultation-section";
import HeroSectionTentangKami from "../components/hero-section-tentang-kami";

const TentangKamiSection = async () => {
  const articles = await fetchWawasanPreviews();
  return (
    <div className="w-full flex justify-center lg:px-0">
      <div className="w-full max-w-[1440px] min-h-screen">
        <HeroSectionTentangKami />
        <ImageSection />
        <MengapaRekamJejak />
        <Solusi />
        <TimKami />
        <CaraKamiBekerja />
        <ArtikelKami articles={articles} />
        <ConsultationSection />
        <ConsultationSchedule />
      </div>
    </div>
  );
};

export default TentangKamiSection;
