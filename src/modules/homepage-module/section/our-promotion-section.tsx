import React from 'react'
import PromotionCard from '../components/promotion/promotion-card'

const OurPromotionSection = () => {
  const promotionPoints = [
    {
      title: "Solusi Lengkap dan Terintegrasi",
      content: "Kami tidak hanya membuat website atau sistem, tapi merancang solusi digital yang saling terhubung."
    },
    {
      title: "Fokus pada UMKM", 
      content: "Solusi kami gampang dipakai, fleksibel, dan ramah di kantong, khusus buat kebutuhan UMKM."
    },
    {
      title: "Tim Profesional Berpengalaman",
      content: "Tim engineer & developer kami sudah bantu puluhan proyek, jadi kamu nggak perlu khawatir soal kualitas."
    },
    {
      title: "Layanan Cepat dan Responsif",
      content: "Cepat Tanggap & Responsif! Kami tanggapi cepat, kerjain tepat waktu, dan komunikasi selalu jelas. Biar kamu nggak perlu nunggu lama."
    },
    {
      title: "Harga Transparan dan Fleksibel",
      content: "Paket layanan bisa disesuaikan kebutuhan & budget bisnis-mu. Nggak ada biaya tersembunyi."
    }
  ];

  return (
    <section id="why-us" className="w-full bg-[#f4f4f4] py-[60px] my-16">
      <div className="w-full max-w-[1110px] mx-auto px-4">
        {/* Mobile layout - vertical stack */}
        <div className="flex flex-col gap-6 items-center md:hidden">
          {/* Title & Subheadline Section */}
          <div className="w-[338px]">
            {/* Main Title */}
            <div className="mb-[20px]">
              <h2 className="font-extrabold text-[28px] leading-[100%] text-corvidian-1">
                Kenapa Banyak Bisnis Pilih Corvidian?
              </h2>
            </div>
            
            {/* Subheadline */}
            <div>
              <p className="font-medium text-[16px] leading-[120%] text-corvidian-1">
                Berbagai jenis bisnis sudah memberikan testimoni, sekarang giliran kamu untuk menentukan!
              </p>
            </div>
          </div>

          {/* All cards stacked vertically on mobile */}
          {promotionPoints.map((point, index) => (
            <PromotionCard 
              key={index}
              title={point.title}
              content={point.content}
              isMobile={true}
            />
          ))}
        </div>

        {/* Desktop layout - rows */}
        <div className="hidden md:block">
          {/* First Row - Title/Subheadline + 2 Cards */}
          <div className="flex gap-[25px] mb-[25px]">
            {/* Title & Subheadline Section */}
            <div className="w-[400px] flex flex-col justify-center">
              {/* Main Title */}
              <div className="mb-[20px]">
                <h2 className="font-extrabold text-[28px] leading-[100%] text-corvidian-1">
                  Kenapa Banyak Bisnis Pilih Corvidian?
                </h2>
              </div>
              
              {/* Subheadline */}
              <div>
                <p className="font-medium text-[16px] leading-[120%] text-corvidian-1">
                  Berbagai jenis bisnis sudah memberikan testimoni, sekarang giliran kamu untuk menentukan!
                </p>
              </div>
            </div>

            {/* First Row Cards */}
            {promotionPoints.slice(0, 2).map((point, index) => (
              <PromotionCard 
                key={index}
                title={point.title}
                content={point.content}
              />
            ))}
          </div>

          {/* Second Row - 3 Cards */}
          <div className="flex gap-[25px]">
            {promotionPoints.slice(2, 5).map((point, index) => (
              <PromotionCard 
                key={index + 2}
                title={point.title}
                content={point.content}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurPromotionSection