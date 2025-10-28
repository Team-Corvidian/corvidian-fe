"use client"
import React, { useState } from 'react'
// import Image from 'next/image';
import KataMereka from '../components/schedule-consultation/kata-mereka';

const ConsultationSchedule = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    question: '',
    agreement: false
  });

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
    <section id="konsultasi" className='relative w-full overflow-hidden'>
      
      <div className='max-w-[1388px] ms-auto relative flex flex-col md:flex-row px-4 md:px-0'>
        {/* Form Section - 500px width */}
        <div className='md:w-[500px] w-full md:ml-[50px] mb-16 md:mb-0'>
          {/* Section Title */}
          <div className='mb-[20px]'>
            <h2 className='font-extrabold text-[33px] leading-[100%] text-[#1D1F26] mb-[10px]'>
              Jadwalkan Konsultasi Gratis
            </h2>
            <p className='font-medium text-[14px] leading-[100%] text-[#1D1F26]'>
              Lengkapi data di bawah, akan kami hubungi segera!
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className='space-y-[20px]'>
            {/* Name Field */}
            <div className='relative'>
              <input
                type="text"
                name="name"
                placeholder="Nama*"
                value={formData.name}
                onChange={handleInputChange}
                required
                className='w-full bg-transparent border-0 border-b border-[#000000] pb-[8px] font-normal text-[14px] leading-[100%] text-[#1D1F26] placeholder-[#1D1F26] focus:outline-none focus:border-[#02C2B3]'
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
                className='w-full bg-transparent border-0 border-b border-[#000000] pb-[8px] font-normal text-[14px] leading-[100%] text-[#1D1F26] placeholder-[#1D1F26] focus:outline-none focus:border-[#02C2B3]'
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
                className='w-full bg-transparent border-0 border-b border-[#000000] pb-[8px] font-normal text-[14px] leading-[100%] text-[#1D1F26] placeholder-[#1D1F26] focus:outline-none focus:border-[#02C2B3]'
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
                className='w-full bg-transparent border-0 border-b border-[#000000] pb-[8px] font-normal text-[14px] leading-[100%] text-[#1D1F26] placeholder-[#1D1F26] focus:outline-none focus:border-[#02C2B3]'
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
                className='w-full bg-transparent border-0 border-b border-[#000000] pb-[8px] font-normal text-[14px] leading-[100%] text-[#1D1F26] placeholder-[#1D1F26] focus:outline-none focus:border-[#02C2B3] resize-none'
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
            <div className='mt-[60px]'>
              <button 
                type="submit"
                className='w-[221px] h-[44px] bg-[#1578CB] rounded-[7px] flex items-center justify-center hover:bg-[#1568BB] transition-colors duration-200'
              >
                <span className='font-bold text-[14px] text-[#F4F4F4]'>
                  Kirim
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* Testimonial Section with Vector.png Background */}
        <div className='md:ml-auto w-full md:w-2/3 overflow-hidden relative'>
        {/* Vector.png Background */}
        <KataMereka />
        </div>
      </div>
    </section>
  )
}

export default ConsultationSchedule