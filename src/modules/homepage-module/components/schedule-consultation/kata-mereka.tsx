"use client";

import React, { useRef, useState } from 'react'
import Image from 'next/image'

const KataMereka = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const testimonials = [
    {
      text: "Sebelum bekerja sama dengan Corvidian, banyak proses di MUC yang berjalan kurang efisien. Beberapa pekerjaan memerlukan waktu lebih lama karena sistem yang ada belum terintegrasi dengan baik. Setelah Corvidian hadir, semuanya berubah. Mereka memahami kebutuhan kami secara mendalam, merancang solusi yang tepat, dan memastikan setiap detail berjalan sesuai rencana. Hasilnya, koordinasi tim menjadi lebih lancar, pekerjaan lebih cepat terselesaikan, dan kinerja perusahaan meningkat signifikan. Corvidian bukan hanya penyedia teknologi, tetapi mitra strategis yang membantu kami bergerak maju.",
      author: "~Sugianto",
      position: "Managing Partner MUC Consulting"
    },
    {
      text: "Penggunaan LMS oleh pengajar dari Binawan bersama peserta dari Hong Kong memberikan pengalaman pembelajaran yang efisien dan interaktif. Platform ini memudahkan pengajar dalam menyampaikan materi secara online, serta memungkinkan peserta untuk mengakses informasi kapan saja dan di mana saja. Dengan fitur komunikasi dan evaluasi yang terintegrasi, LMS ini mendukung interaksi yang lebih baik antara pengajar dan peserta, serta memfasilitasi pemantauan perkembangan pembelajaran yang fleksibel dan terstruktur.",
      author: "~Januar Priatama",
      position: "Head of Project Binawan Inti Utama"
    },
    {
      text: "Bagi MUC Law, tim support Corvidian adalah salah satu aset terbesar dalam kerja sama ini. Mereka selalu responsif, sigap memberikan diagnosa yang tepat, dan menyampaikan rencana tindakan yang jelas serta terukur. Setiap langkah penyelesaian selalu berbasis solusi, bukan sekadar perbaikan sementara. Kami juga sangat menghargai kesabaran mereka yang luar biasa dalam mendengarkan setiap kendala yang kami hadapi, sekaligus memberikan solusi yang tepat guna. Dukungan seperti ini membuat kami merasa aman dan yakin bahwa setiap tantangan akan selalu mendapatkan jalan keluarnya",
      author: "~Kiki Amaruly",
      position: "Senior Associate MUC Attorney at Law"
    },
    {
      text: "Kami sangat puas dengan pembuatan software yang dilakukan. Prosesnya cepat dan mudah, dengan dukungan tim yang selalu siap membantu. Software yang dihasilkan juga sangat mudah digunakan dan tampilannya sangat user-friendly. Tim support juga sangat responsif dan membantu menyelesaikan masalah dengan cepat. Kami sangat merekomendasikan layanan ini.",
      author: "~Adi Rasidi",
      position: "Partner KAP RTS"
    },
    {
      text: "Awalnya kami sempat khawatir adaptasi dengan sistem baru akan memakan waktu lama. Tapi ternyata, solusi dari Corvidian langsung terasa mudah digunakan. Kami bisa mengaksesnya lewat Web atau mobile, dan dalam waktu singkat, pekerjaan terasa lebih teratur dan cepat terselesaikan.",
      author: "~Muhammad Trisna Indra",
      position: "Direktur Utama Taxficient"
    }
  ];

  // Update dots based on scroll position
  const handleScroll = () => {
    if (scrollRef.current && !isDragging) {
      const scrollPosition = scrollRef.current.scrollLeft;
      const itemWidth = 600; // width dari setiap testimonial item
      const index = Math.round(scrollPosition / itemWidth);
      setCurrentTestimonial(Math.min(Math.max(index, 0), testimonials.length - 1));
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
    const walk = (x - startX) * 2;
    scrollRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // Snap to nearest testimonial
    if (scrollRef.current) {
      const itemWidth = 600;
      const scrollPosition = scrollRef.current.scrollLeft;
      const index = Math.round(scrollPosition / itemWidth);
      const clampedIndex = Math.min(Math.max(index, 0), testimonials.length - 1);
      
      setCurrentTestimonial(clampedIndex);
      
      // Smooth scroll to the snapped position
      scrollRef.current.scrollTo({
        left: clampedIndex * itemWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleDotClick = (index: number) => {
    setCurrentTestimonial(index);
    if (scrollRef.current) {
      const itemWidth = 600;
      scrollRef.current.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section>
       <div className='w-full h-auto relative'>
           <Image 
               src="/schedule/Vector.png"
               alt="Background shape"
               fill
               style={{ 
                 objectFit: 'fill',
                 objectPosition: 'right bottom',
                 height: '100%',
                 left: 0
               }}
               priority
           />
           <div className='absolute inset-0 w-cover h-full z-0'></div>
           
           {/* Fixed Title - Outside scroll area */}
           <div className='relative z-1 pt-[50px] pl-[260px] pr-[50px] mb-[20px]'>
             <h3 className='font-extrabold text-[28px] leading-[100%] text-[#F4F4F4]'>
               Apa kata mereka tentang service Corvidian ?
             </h3>
           </div>

           {/* Content container with horizontal scroll */}
           <div 
             ref={scrollRef}
             className='relative z-1 ml-[260px] mr-[50px] overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing'
             onMouseDown={handleMouseDown}
             onMouseMove={handleMouseMove}
             onMouseUp={handleMouseUp}
             onMouseLeave={handleMouseUp}
             onScroll={handleScroll}
           >
             <div className='flex w-max'>
               {testimonials.map((testimonial, index) => (
                 <div 
                   key={index}
                   className='pb-[20px] flex-shrink-0'
                   style={{ width: '600px' }}
                 >
                   {/* Testimonial Content */}
                   <div className='me-[50px] flex flex-col justify-between'>
                     {/* Testimonial Text */}
                     <div className='pr-[9px] mb-[20px]'>
                       <p className='font-normal text-[16px] leading-[150%] text-[#F4F4F4]'>
                         {testimonial.text}
                       </p>
                     </div>
       
                     {/* Author */}
                     <div className='mb-[50px]'>
                       <p className='font-bold text-[14px]  text-[#F4F4F4] italic'>
                         {testimonial.author}
                       </p>
                       <p className='font-normal text-[14px] text-[#F4F4F4] italic'>
                         {testimonial.position}
                       </p>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           </div>

           {/* Carousel Dots - Fixed position */}
           <div className='relative z-10 flex justify-center gap-[8px] pb-[20px]'>
             {testimonials.map((_, index) => (
               <button
                 key={index}
                 onClick={() => handleDotClick(index)}
                 className={`w-[10px] h-[10px] rounded-full transition-colors duration-200 ${
                   index === currentTestimonial ? 'bg-[#02C2B3]' : 'bg-[#C5CED5]'
                 }`}
               />
             ))}
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
  )
}

export default KataMereka