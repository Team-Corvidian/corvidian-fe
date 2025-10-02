import React from 'react'
import Image from 'next/image'

const Whatsapp = () => {
  return (
    <div className='relative w-[189px] h-[44px] border border-[#F4F4F4] rounded-[27px] flex items-center overflow-hidden'
         style={{
           background: 'linear-gradient(111.46deg, #02C2B3 -11.36%, #1D1F26 28.42%, #1D1F26 67.11%, #1578CB 121.2%)'
         }}>
        {/* WhatsApp Logo */}
        <div className='w-[55px] h-[35px] flex items-center justify-center'>
            <Image 
                src="/whatsapp.png" 
                alt="WhatsApp" 
                width={24} 
                height={24}
                className='object-contain'
            />
        </div>
        {/* Text */}
        <div className='text-[#02C2B3] font-["Plus_Jakarta_Sans"] font-bold text-[16px] leading-[100%] w-[123px] h-[20px] flex items-center justify-center'>
            Whatsapp Kami
        </div>
    </div>
  )
}

export default Whatsapp