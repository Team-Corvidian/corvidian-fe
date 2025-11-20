import { Metadata } from "next";
import HeroSectionSistemKami from "@/modules/sistem-kami-siap-pakai/section/hero-sistem-kami";
import ScheduleConsultationSection from "@/modules/homepage-module/section/schedule-consultation-section";
import ConsultationSection from "@/modules/homepage-module/section/consultation-section";

export const metadata: Metadata = {
  title: "Sistem Kami Siap Pakai | Corvidian",
  description: "Kenali sistem kami yang siap pakai untuk berbagai kebutuhan bisnis Anda. Human Capital, Recruitment, Library, Project Management, dan lebih banyak lagi.",
  keywords: ["sistem siap pakai", "HR system", "recruitment system", "library system", "project management", "corvidian"],
  openGraph: {
    title: "Sistem Kami Siap Pakai | Corvidian",
    description: "Kenali sistem kami yang siap pakai untuk berbagai kebutuhan bisnis Anda.",
    type: "website",
  },
};

export default function SistemKamiSiapPakaiPage() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <HeroSectionSistemKami />
      <ConsultationSection/>
      <ScheduleConsultationSection />
    </main>
  );
}