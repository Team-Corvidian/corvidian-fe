import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-center gap-8 h-full'>
        <div className='text-[#F4F4F4] font-["Plus_Jakarta_Sans"] font-normal text-[16px] leading-[100%] w-[135px] h-[20px] flex items-center justify-center'>
            Produk & Layanan
        </div>
        <div className='text-[#F4F4F4] font-["Plus_Jakarta_Sans"] font-normal text-[16px] leading-[100%] w-[73px] h-[20px] flex items-center justify-center'>
            Wawasan
        </div>
        <div className='text-[#F4F4F4] font-["Plus_Jakarta_Sans"] font-normal text-[16px] leading-[100%] w-[110px] h-[20px] flex items-center justify-center'>
            Tentang Kami
        </div>
    </div>
  )
}

export default Navbar