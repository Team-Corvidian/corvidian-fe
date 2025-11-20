"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

const KataMereka = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const testimonials = [
    {
      text: "Sebelum bekerja sama dengan Corvidian, aktivitas di MUC masih banyak dilakukan secara manual. Setelah Corvidian hadir, semuanya berubah. Mereka memahami kebutuhan kami, merancang solusi yang tepat, dan memastikan setiap detail berjalan lancar. Kini koordinasi tim lebih efisien, pekerjaan selesai lebih cepat, dan kinerja perusahaan meningkat signifikan. Corvidian bukan sekadar penyedia teknologi, tapi mitra strategis yang mendorong kami maju..",
      author: "~Sugianto",
      position: "Managing Partner MUC Consulting",
    },
    {
      text: "Penggunaan LMS Corvidian memudahkan pengajar dari Binawan dan peserta di Hong Kong dalam proses belajar yang lebih efisien dan interaktif. Platform ini memungkinkan penyampaian materi secara online serta akses informasi kapan saja dan di mana saja. Dengan fitur komunikasi dan evaluasi terintegrasi, LMS ini meningkatkan interaksi dan memudahkan pemantauan pembelajaran secara fleksibel dan terstruktur.",
      author: "~Januar Priatama",
      position: "Head of Project Binawan Inti Utama",
    },
    {
      text: "Bagi MUC Law, tim support Corvidian adalah aset berharga. Mereka responsif, sigap mendiagnosis masalah, dan memberikan solusi yang terukur. Setiap penyelesaian selalu berbasis solusi, bukan perbaikan sementara. Kami sangat menghargai kesabaran dan kejelian tim Corvidian dalam mendengar kendala dan memberi solusi yang tepat. Dukungan mereka membuat kami yakin setiap tantangan selalu punya jalan keluarnya.",
      author: "~Kiki Amaruly",
      position: "Senior Associate MUC Attorney at Law",
    },
    {
      text: "Kami sangat puas dengan pembuatan software yang dilakukan. Prosesnya cepat dan mudah, dengan dukungan tim yang selalu siap membantu. Software yang dihasilkan juga sangat mudah digunakan dan tampilannya sangat user-friendly. Tim support juga sangat responsif dan membantu menyelesaikan masalah dengan cepat. Kami sangat merekomendasikan layanan ini.",
      author: "~Adi Rasidi",
      position: "Partner KAP RTS",
    },
    {
      text: "Awalnya kami sempat khawatir adaptasi dengan sistem baru akan memakan waktu lama. Tapi ternyata, solusi dari Corvidian langsung terasa mudah digunakan. Kami bisa mengaksesnya lewat Web atau mobile, dan dalam waktu singkat, pekerjaan terasa lebih teratur dan cepat terselesaikan.",
      author: "~Muhammad Trisna Indra",
      position: "Direktur Utama Taxficient",
    },
  ];

  const handleScroll = () => {
    if (scrollRef.current && !isDragging) {
      const container = scrollRef.current;
      const scrollPosition = container.scrollLeft;
      const containerWidth = container.offsetWidth;
      const index = Math.round(scrollPosition / containerWidth);
      setCurrentTestimonial(
        Math.min(Math.max(index, 0), testimonials.length - 1)
      );
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current!.offsetLeft);
    setScrollLeft(scrollRef.current!.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current!.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollPosition = container.scrollLeft;
      const containerWidth = container.offsetWidth;
      const index = Math.round(scrollPosition / containerWidth);
      const clampedIndex = Math.min(
        Math.max(index, 0),
        testimonials.length - 1
      );

      setCurrentTestimonial(clampedIndex);

      container.scrollTo({
        left: clampedIndex * containerWidth,
        behavior: "smooth",
      });
    }
  };

  const handleDotClick = (index: number) => {
    setCurrentTestimonial(index);
    if (scrollRef.current) {
      const containerWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: index * containerWidth,
        behavior: "smooth",
      });
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current!.offsetLeft);
    setScrollLeft(scrollRef.current!.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollRef.current!.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  return (
    <section id="testimoni" className="w-full h-full lg:h-auto">
      <div className="w-full h-full lg:h-auto relative">
        <div className="absolute inset-0 w-full h-full -z-10">
          <Image
            src="/schedule/Vector.png"
            alt="Background shape"
            fill
            style={{
              objectFit: "fill",
            }}
            priority
            className="hidden lg:block"
          />
          <div className="lg:hidden absolute inset-0 bg-corvidian-1"></div>
        </div>

        <div className="relative z-10 flex flex-col xl:min-h-[500px]">
          <div className="pt-8 lg:pt-[50px] px-6 lg:pl-[260px] lg:pr-[50px] mb-6 lg:mb-[20px]">
            <h3 className="font-extrabold text-[18px] lg:text-[22px] xl:text-[28px] leading-tight lg:leading-[100%] text-[#F4F4F4] text-center lg:text-left">
              Apa kata mereka tentang service Corvidian
            </h3>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing snap-x snap-mandatory"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onScroll={handleScroll}
          >
            <div className="flex h-full">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full snap-center px-6 lg:pl-[260px] lg:pr-[100px]"
                >
                  <div className="flex flex-col justify-between h-full py-4 lg:py-0">
                    <div className="mb-6 lg:mb-[20px]">
                      <p className="font-normal text-[13px] lg:text-[14px] xl:text-[16px] leading-relaxed lg:leading-[150%] text-[#F4F4F4]">
                        {testimonial.text}
                      </p>
                    </div>

                    <div className="mb-8 lg:mb-[50px]">
                      <p className="font-bold text-[12px] lg:text-[13px] xl:text-[14px] text-[#F4F4F4] italic mb-1">
                        {testimonial.author}
                      </p>
                      <p className="font-normal text-[12px] lg:text-[13px] xl:text-[14px] text-[#F4F4F4] italic">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-[8px] py-6 lg:pb-[20px]">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-[8px] h-[8px] lg:w-[10px] lg:h-[10px] rounded-full transition-colors duration-200 ${
                  index === currentTestimonial ? "bg-[#02C2B3]" : "bg-[#C5CED5]"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default KataMereka;
