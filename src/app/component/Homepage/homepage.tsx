import React from 'react'
import Header from './Header';
import Image from 'next/image';

const Homepage = () => {
  return (
    <div className='bg-white min-h-screen w-screen pb-20'>
        <Header />
        
        {/* Hero Text */}
        <div className='absolute top-[208px] left-[110px] w-[1139px] h-[128px]'>
            <h1 className='font-["Plus_Jakarta_Sans"] font-extrabold text-[51px] leading-[120%]'>
                <span className='text-[#1D1F26]'>Tingkatkan Bisnismu dengan Solusi Digital </span>
                <span className='text-[#02C2B3]'>yang Tepat dan Terintegrasi!</span>
            </h1>
        </div>

        {/* Subheadline */}
        <div className='absolute top-[359px] left-[119px] w-[691px] h-[46px]'>
            <p className='font-["Plus_Jakarta_Sans"] font-medium text-[18px] leading-[100%] text-[#1D1F26]'>
                Corvidian siap membantu dari infrastruktur IT, pembuatan website, hingga aplikasi bisnis, semua demi operasional lebih cepat, aman, dan efisien.
            </p>
        </div>

        {/* Button Konsultasi Gratis */}
        <div className='absolute top-[450px] left-[119px] w-[221px] h-[44px]'>
            <button className='w-full h-full bg-[#1578CB] rounded-[7px] flex items-center justify-center hover:bg-[#1568BB] transition-colors duration-200'>
                <span className='font-["Plus_Jakarta_Sans"] font-bold text-[18px] text-[#F4F4F4]'>
                    Konsultasi Gratis
                </span>
            </button>
        </div>

        {/* Hero Image dengan Overlay */}
        <div className='absolute top-[538px] left-[118px] w-[1110px] h-[300px] rounded-b-[26.5px]'
            style={{background: 'linear-gradient(180deg, rgba(29, 31, 38, 10) 56.49%, rgba(29, 31, 38, 0.81) 88.16%, #1D1F26 110.68%)'       
        }}>
            <div className='relative bottom-[61px] w-[60%] h-[120%] overflow-hidden'
                 style={{
                   borderRadius: '0px 20px 20px 20px'
                 }}>
                {/* Background Image */}
                <Image
                    src="/gambar1.1.png"
                    alt="Foto Tim Corvidian"
                    fill
                    className='object-cover object-bottom z-10'
                />  
            </div>

            {/* Overlay Text */}
            <div className='absolute bottom-[40px] right-[128px] w-[195px] h-[18px] z-30'>
                <p className='font-["Plus_Jakarta_Sans"] font-medium text-[14px] leading-[100%] text-[#F4F4F4] underline decoration-solid'>
                    Kenali Corvidian Lebih Lanjut!
                </p>
            </div>
        </div>

        {/* Foto Komputer (Gambar 1.2) */}
        <div className='absolute top-[316px] left-[721px] w-[500px] h-[589px]'>
            <Image
                src="/gambar1.2.png"
                alt="Foto Komputer"
                fill
                className='object-contain'
            />
        </div>

        {/* Foto Smartphone (Gambar 1.3) */}
        <div className='absolute top-[653px] z-20 left-[743px] w-[200px] h-[296px]'>
            <Image
                src="/gambar1.3.png"
                alt="Foto Smartphone"
                fill
                className='object-contain'
            />
        </div>

        {/* Spacer untuk memberikan ruang di bawah gambar */}
        <div className='h-[1100px]'></div>
    </div>
  )
}

export default Homepage