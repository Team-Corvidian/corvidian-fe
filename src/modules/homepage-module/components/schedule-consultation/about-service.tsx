"use client"
import React, { useState } from 'react'

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
      position: "Managing  Consulting"
    },
     {
      text: "Sebelum bekerja sama dengan Corvidian, banyak proses di MUC yang berjalan kurang efisien. Beberapa pekerjaan memerlukan waktu lebih lama karena sistem yang ada belum terintegrasi dengan baik. Setelah Corvidian hadir, semuanya berubah. Mereka memahami kebutuhan kami secara mendalam, merancang solusi yang tepat, dan memastikan setiap detail berjalan sesuai rencana. Hasilnya, koordinasi tim menjadi lebih lancar, pekerjaan lebih cepat terselesaikan, dan kinerja perusahaan meningkat signifikan. Corvidian bukan hanya penyedia teknologi, tetapi mitra strategis yang membantu kami bergerak maju.",
      author: "~Sugianto",
      position: "Managing Partner MUC Consulting"
    }
    // Additional testimonials can be added here
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
    <div className='relative w-full max-w-[1388px] mx-auto'>
      {/* Form Section - 500px width */}
      <div className='absolute left-[120px] w-[500px]'>
        {/* Section Title */}
        <div className='mb-[20px]'>
          <h2 className='font-["Plus_Jakarta_Sans"] font-extrabold text-[33px] leading-[100%] text-[#1D1F26] mb-[10px]'>
            Jadwalkan Konsultasi Gratis
          </h2>
          <p className='font-["Plus_Jakarta_Sans"] font-medium text-[18px] leading-[100%] text-[#1D1F26]'>
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
              className='w-full bg-transparent border-0 border-b border-[#000000] pb-[8px] font-["Plus_Jakarta_Sans"] font-normal text-[18px] leading-[100%] text-[#1D1F26] placeholder-[#1D1F26] focus:outline-none focus:border-[#02C2B3]'
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
              className='w-full bg-transparent border-0 border-b border-[#000000] pb-[8px] font-["Plus_Jakarta_Sans"] font-normal text-[18px] leading-[100%] text-[#1D1F26] placeholder-[#1D1F26] focus:outline-none focus:border-[#02C2B3]'
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
              className='w-full bg-transparent border-0 border-b border-[#000000] pb-[8px] font-["Plus_Jakarta_Sans"] font-normal text-[18px] leading-[100%] text-[#1D1F26] placeholder-[#1D1F26] focus:outline-none focus:border-[#02C2B3]'
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
              className='w-full bg-transparent border-0 border-b border-[#000000] pb-[8px] font-["Plus_Jakarta_Sans"] font-normal text-[18px] leading-[100%] text-[#1D1F26] placeholder-[#1D1F26] focus:outline-none focus:border-[#02C2B3]'
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
              className='w-full bg-transparent border-0 border-b border-[#000000] pb-[8px] font-["Plus_Jakarta_Sans"] font-normal text-[18px] leading-[100%] text-[#1D1F26] placeholder-[#1D1F26] focus:outline-none focus:border-[#02C2B3] resize-none'
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
            <label className='font-["Plus_Jakarta_Sans"] font-normal text-[14px] leading-[100%] text-[#1D1F26]'>
              Dengan mengirimkan formulir ini, saya setuju untuk menerima email dari Corvidian*
            </label>
          </div>

          {/* Submit Button */}
          <div className='mt-[30px]'>
            <button 
              type="submit"
              className='w-[221px] h-[44px] bg-[#1578CB] rounded-[7px] flex items-center justify-center hover:bg-[#1568BB] transition-colors duration-200'
            >
              <span className='font-["Plus_Jakarta_Sans"] font-bold text-[18px] text-[#F4F4F4]'>
                Kirim
              </span>
            </button>
          </div>
        </form>
      </div>

      {/* Feedback Section with Trapezoid Background */}
      <div className='absolute left-[650px] w-[738px] h-[561px] overflow-hidden'>
        {/* Trapezoid Background */}
        <div 
          className='w-[738px] h-[561px] bg-[#1D1F26] relative '
          style={{
            clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)'
          }}
        >
          {/* Title */}
          <div className='absolute top-[50px] left-[140px] right-[40px]'>
            <h3 className='font-["Plus_Jakarta_Sans"] font-extrabold text-[28px] leading-[100%] text-[#F4F4F4]'>
              Apa kata mereka tentang service Corvidian
            </h3>
          </div>

          {/* Testimonial Content */}
          <div className='absolute top-[140px] left-[140px] right-[40px] bottom-[80px]'>
            <div className='h-full flex flex-col justify-between'>
              {/* Testimonial Text */}
              <div className='flex-1 pr-[20px]'>
                <p className='font-["Plus_Jakarta_Sans"] font-normal text-[16px] leading-[150%] text-[#F4F4F4] mb-[30px]'>
                  {testimonials[currentTestimonial].text}
                </p>
              </div>

              {/* Author */}
              <div className='mb-[40px]'>
                <p className='font-["Plus_Jakarta_Sans"] font-normal text-[14px] text-[#F4F4F4] italic'>
                  {testimonials[currentTestimonial].author}
                </p>
                <p className='font-["Plus_Jakarta_Sans"] font-normal text-[14px] text-[#F4F4F4] italic'>
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
  )
}

export default ConsultationSchedule