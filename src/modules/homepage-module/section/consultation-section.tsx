import React from 'react'
import Link from 'next/link'

const ConsultationSection = () => {
  return (
    <section id="konsultasi" className="relative w-full h-[250px] flex justify-center my-20">
      <div className="w-[90%] max-sm:max-w-[330px] max-sm:h-[241px] max-w-[1110px] h-[179px] rounded-[20px] flex flex-col justify-center md:flex-row  md:items-center md:justify-between px-12"
           style={{
             background: 'linear-gradient(90.58deg, #02C2B3 -13.4%, #1D1F26 25.6%, #1D1F26 63.53%, #1578CB 116.56%)'
           }}>
        
        <div className="flex flex-col gap-4 md:gap-3 mb-4">
          <h2 className="font-extrabold md:text-[30px] text-[20px] leading-[100%] text-white">
            Ready to think fast and fly high with us?
          </h2>
          
          <p className="font-normal text-[14px] md:text-[18px] leading-[100%] text-white">
            Mulai langkah pertama menuju solusi digital yang cerdas dan berdampak nyata.
          </p>
        </div>

        <Link href="https://wa.me/1234567890">
          <button className="w-[151px] h-[36px] md:w-[221px] md:h-[44px] rounded-[7px] font-bold text-[14px] md:text-[18px] text-white hover:text-corvidian-1 bg-corvidian-2 hover:bg-[#C9C9C9] transition-colors duration-200">
            Konsultasi Gratis
          </button>
        </Link>
      </div>
    </section>
  )
}

export default ConsultationSection