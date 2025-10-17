"use client"
import React, { useState } from 'react'
import Image from 'next/image';

const ConsultationSchedule = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    question: '',
    agreement: false
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Sebelum bekerja sama dengan Corvidian, banyak proses di MUC yang berjalan kurang efisien. Beberapa pekerjaan memerlukan waktu lebih lama karena sistem yang ada belum terintegrasi dengan baik. Setelah Corvidian hadir, semuanya berubah. Mereka memahami kebutuhan kami secara mendalam, merancang solusi yang tepat, dan memastikan setiap detail berjalan sesuai rencana. Hasilnya, koordinasi tim menjadi lebih lancar, pekerjaan lebih cepat terselesaikan, dan kinerja perusahaan meningkat signifikan. Corvidian bukan hanya penyedia teknologi, tetapi mitra strategis yang membantu kami bergerak maju.",
      author: "~Sugianto",
      position: "Managing Partner MUC Consulting"
    },
     {
      text: "Sebelum bekerja sama dengan Corvidian, banyak proses di MUC yang berjalan kurang efisien. Beberapa pekerjaan memerlukan waktu lebih lama karena sistem yang ada belum terintegrasi dengan baik. Setelah Corvidian hadir, semuanya berubah. Mereka memahami kebutuhan kami secara mendalam, merancang solusi yang tepat, dan memastikan setiap detail berjalan sesuai rencana. Hasilnya, koordinasi tim menjadi lebih lancar, pekerjaan lebih cepat terselesaikan, dan kinerja perusahaan meningkat signifikan. Corvidian bukan hanya penyedia teknologi, tetapi mitra strategis yang membantu kami bergerak maju.",
      author: "~Sugianto",
      position: "Managing Consulting"
    },
     {
      text: "Sebelum bekerja sama dengan Corvidian, banyak proses di MUC yang berjalan kurang efisien. Beberapa pekerjaan memerlukan waktu lebih lama karena sistem yang ada belum terintegrasi dengan baik. Setelah Corvidian hadir, semuanya berubah. Mereka memahami kebutuhan kami secara mendalam, merancang solusi yang tepat, dan memastikan setiap detail berjalan sesuai rencana. Hasilnya, koordinasi tim menjadi lebih lancar, pekerjaan lebih cepat terselesaikan, dan kinerja perusahaan meningkat signifikan. Corvidian bukan hanya penyedia teknologi, tetapi mitra strategis yang membantu kami bergerak maju.",
      author: "~Sugianto",
      position: "Managing Partner MUC Consulting"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="konsultasi" className='relative w-full py-20'>
      <div className='max-w-[1388px] mx-auto relative flex flex-col md:flex-row px-4 md:px-0'>
        {/* Form Section - 500px width */}
        <div className='md:w-[500px] w-full md:ml-[120px] mb-16 md:mb-0'>
          {/* Section Title */}
          <div className='mb-[20px]'>
            <h2 className='font-extrabold text-[33px] leading-[100%] text-[#1D1F26] mb-[10px]'>
              Jadwalkan Konsultasi Gratis
            </h2>
            <p className='font-medium text-[18px] leading-[100%] text-[#1D1F26]'>
              Lengkapi data di bawah, akan kami hubungi segera!
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className='space-y-[30px]'>
            {/* Name Field */}
            <div className='relative'>
              <input
                type="text"
                name="name"
                placeholder="Nama*"
                value={formData.name}
                onChange={handleInputChange}
                required
                className='w-full bg-transparent border-0 border-b border-[#000000] pb-[8px] font-normal text-[18px] leading-[100%] text-[#1D1F26] placeholder-[#1D1F26] focus:outline-none focus:border-[#02C2B3]'
              />
            </div>

            {/* Email Field */}
            <div className='relative'>
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleInputChange}
                required
                className='w-full bg-transparent border-0 border-b border-[#000000] pb-[8px] font-normal text-[18px] leading-[100%] text-[#1D1F26] placeholder-[#1D1F26] focus:outline-none focus:border-[#02C2B3]'
              />
            </div>

            {/* Phone Field */}
            <div className='relative'>
              <input
                type="tel"
                name="phone"
                placeholder="Nomor Telepon*"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className='w-full bg-transparent border-0 border-b border-[#000000] pb-[8px] font-normal text-[18px] leading-[100%] text-[#1D1F26] placeholder-[#1D1F26] focus:outline-none focus:border-[#02C2B3]'
              />
            </div>

            {/* Company Field */}
            <div className='relative'>
              <input
                type="text"
                name="company"
                placeholder="Perusahaan*"
                value={formData.company}
                onChange={handleInputChange}
                required
                className='w-full bg-transparent border-0 border-b border-[#000000] pb-[8px] font-normal text-[18px] leading-[100%] text-[#1D1F26] placeholder-[#1D1F26] focus:outline-none focus:border-[#02C2B3]'
              />
            </div>

            {/* Question Field */}
            <div className='relative'>
              <textarea
                name="question"
                placeholder="Pertanyaan*"
                value={formData.question}
                onChange={handleInputChange}
                required
                rows={3}
                className='w-full bg-transparent border-0 border-b border-[#000000] pb-[8px] font-normal text-[18px] leading-[100%] text-[#1D1F26] placeholder-[#1D1F26] focus:outline-none focus:border-[#02C2B3] resize-none'
              />
            </div>

            {/* Checkbox */}
            <div className='flex items-start gap-[10px] mt-[20px]'>
              <input
                type="checkbox"
                name="agreement"
                checked={formData.agreement}
                onChange={handleInputChange}
                required
                className='mt-[2px] w-[16px] h-[16px] accent-[#02C2B3]'
              />
              <label className='font-normal text-[14px] leading-[120%] text-[#1D1F26]'>
                Dengan mengirimkan formulir ini, saya setuju untuk menerima email dari Corvidian*
              </label>
            </div>

            {/* Submit Button */}
            <div className='mt-[30px]'>
              <button 
                type="submit"
                className='w-[221px] h-[44px] bg-[#1578CB] rounded-[7px] flex items-center justify-center hover:bg-[#1568BB] transition-colors duration-200'
              >
                <span className='font-bold text-[18px] text-[#F4F4F4]'>
                  Kirim
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* Testimonial Section with Vector.png Background */}
        <div className='md:ml-auto w-full md:w-[738px] overflow-visible relative'>
        {/* Vector.png Background */}
        <div className='w-full h-auto relative'>
            <div className='absolute inset-0 w-full h-full z-0'>
            <Image 
                src="/schedule/Vector.png"
                alt="Background shape"
                fill
                style={{ 
                objectFit: 'fill',
                objectPosition: 'right top'
                }}
                priority
            />
            </div>
            
            {/* Content container that determines the height */}
            <div className='relative z-10 pt-[50px] pb-[60px] pl-[140px] pr-[40px]'>
            {/* Title */}
            <div className='ml-[60px] mb-[40px]'>
                <h3 className='font-extrabold text-[28px] leading-[100%] text-[#F4F4F4]'>
                Apa kata mereka tentang service Corvidian ?
                </h3>
            </div>

            {/* Testimonial Content */}
            <div className='ml-[40px] flex flex-col justify-between'>
                {/* Testimonial Text */}
                <div className=' pr-[9px] mb-[40px]'>
                <p className='font-normal text-[16px] leading-[150%] text-[#F4F4F4]'>
                    {testimonials[currentTestimonial].text}
                </p>
                </div>

                {/* Author */}
                <div className='mb-[40px]'>
                <p className='font-normal text-[14px] text-[#F4F4F4] italic'>
                    {testimonials[currentTestimonial].author}
                </p>
                <p className='font-normal text-[14px] text-[#F4F4F4] italic'>
                    {testimonials[currentTestimonial].position}
                </p>
                </div>

                {/* Carousel Dots */}
                <div className='flex justify-center gap-[8px] pr-[100px]'>
                {testimonials.map((_, index) => (
                    <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-[10px] h-[10px] rounded-full transition-colors duration-200 ${
                        index === currentTestimonial ? 'bg-[#02C2B3]' : 'bg-[#C5CED5]'
                    }`}
                    />
                ))}
                {/* Additional inactive dots for visual effect */}
                {Array.from({ length: 7 }, (_, index) => (
                    <div
                    key={`extra-${index}`}
                    className='w-[10px] h-[10px] rounded-full bg-[#C5CED5]'
                    />
                ))}
                </div>
            </div>
            </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default ConsultationSchedule