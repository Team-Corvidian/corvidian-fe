"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const [isLarge, setIsLarge] = useState(false)
  const [isMedium, setIsMedium] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsLarge(width >= 1024) // Tailwind breakpoint 'lg'
      setIsMedium(width >= 768 && width < 1024) // Tailwind breakpoint 'md'
    }

    handleResize() // Check initial size
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // On medium screens, blue should be above dark
  const blueZ = isLarge ? 30 : (isMedium ? 25 : 10)
  const darkZ = isLarge ? 20 : (isMedium ? 15 : 10)
  const grayZ = isLarge ? 10 : (isMedium ? 5 : 10)
  const contentZ = isLarge || isMedium ? 35 : 20

  return (
    <footer className="relative overflow-hidden w-full">
      {/* Background vectors for large screens with proper z-index */}
      <div className="md:block hidden">
        {/* Blue background - always top layer on medium and large screens */}
        <div 
          className="absolute top-[19.35px] w-[900px] h-[500px] left-[-100px] bg-no-repeat bg-cover bg-center" 
          style={{ 
            zIndex: blueZ,
            backgroundImage: "url('/footer/footer_blue.png')" 
          }}
        />
        {/* Dark background - middle layer on large, below blue on medium */}
        <div 
          className="absolute top-[30px] left-[374px] w-[1234px] h-[450px] bg-[#1D1F26]" 
          style={{ zIndex: darkZ, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 15% 100%)'}}
        />
        {/* Gray background - bottom layer */}
        <div 
          className="absolute top-[200px] w-[1234px] h-[400px] bg-[#B1BCC3]" 
          style={{ zIndex: grayZ, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 15% 100%)'}}
        />
      </div>
      
      {/* Simple background for small screens only (below md) */}
      <div className="w-full h-full bg-[#1D1F26] absolute top-0 left-0 md:hidden" style={{ zIndex: darkZ }}></div>
      
      {/* Main content container - higher z-index to appear above all backgrounds */}
      <div className="relative mx-auto px-4 pt-8" style={{ zIndex: contentZ }}>
        <div className="flex flex-col lg:flex-row max-w-7xl mx-auto">
          
          {/* Left Section - Full width on medium screens */}
          <div className="w-full lg:w-1/2 p-4 text-white">
            {/* Logo */}
            <div className="mb-6 flex justify-center lg:justify-start">
              <Image 
                src="/footer/CordovaWhite.png" 
                alt="Corvidian Logo" 
                width={190} 
                height={38} 
                className="mt-[100px]"
              />
            </div>
            
            {/* Address */}
            <div className="mt-6 mx-[90px] lg:mx-0 w-[362px]">
              <h3 className="font-bold text-[12px] mb-2">Kantor</h3>
              <p className="font-normal text-[12px] leading-tight">
                MUC Building, Jl. TB Simatupang No.15, RT.10/RW.3, Tj. Bar., Kec. Jagakarsa, Kota Jakarta 
                Selatan, Daerah Khusus Ibukota Jakarta 12530
              </p>
            </div>
          </div>
          
          {/* Right Section - Full width on medium screens */}
          <div className="md:w-full w-[362px] mx-[90px] lg:mx-0 lg:w-1/2 p-4 text-white lg:mt-[100px] lg:ms-[40px]">
            <div className="flex flex-col gap-2 w-full">
              <div className="w-full mb-[10px] flex flex-col lg:flex-row gap-1 justify-between">
                <p className="text-[12px] text-[#F4F4F4] mb-3 lg:w-1/2">
                  Dapatkan info penawaran menarik lebih awal dengan <span className="font-bold">cantumkan email kamu di samping!</span>
                </p>
                <div className="lg:w-1/2">
                  <div className="">
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="bg-white text-black mb-[8px] px-3 py-2 rounded-2xl w-full h-[44px]"
                    />
                  </div>
                </div>
              </div>
               
              {/* Menu sections */}
              <div className="w-full mb-[10px] flex flex-col lg:flex-row justify-between gap-[10px]">
                <div className="w-full lg:w-1/2 flex flex-wrap mb-6">
                  {/* Menu 1 */}
                  <div className="w-1/2 pr-2">
                    <ul className="space-y-1">
                      <li><Link href="#" className="text-[12px]">Produk & Layanan</Link></li>
                      <li><Link href="#" className="text-[12px]">Solusi</Link></li>
                      <li><Link href="#" className="text-[12px]">Sumber Daya</Link></li>
                      <li><Link href="#" className="text-[12px]">Harga</Link></li>
                      <li><Link href="#" className="text-[12px]">Tentang Kami</Link></li>
                    </ul>
                  </div>
                  
                  {/* Menu 2 */}
                  <div className="w-1/2 pl-2">
                    <ul className="space-y-1">
                      <li><Link href="#" className="text-[12px]">Testimoni Klien</Link></li>
                      <li><Link href="#" className="text-[12px]">Telpon Resmi</Link></li>
                      <li><Link href="#" className="text-[12px]">Klien Kami</Link></li>
                      <li><Link href="#" className="text-[12px]">Portofolio Kami</Link></li>
                    </ul>
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <p className="text-[12px] mb-[8px]">
                    Ingin bertanya lebih rinci? hubungi kami melalui kanal berikut:
                  </p>
                  <div className="mb-[8px] space-y-1">
                    <div className="flex flex-row gap-[6px]">
                      <Image 
                        src="/footer/office.png" 
                        alt="Office Icon" 
                        width={15}
                        height={15} 
                      />
                      <p className="text-[12px] font-bold">ask@corvidian.io</p>
                    </div>
                    <div className="flex flex-row gap-[6px]">
                      <Image 
                        src="/footer/telephone.png" 
                        alt="Telephone Icon" 
                        width={15}
                        height={15} 
                      />
                      <p className="text-[12px] font-bold">+62 812 2191 5478</p>
                    </div>  
                  </div>
                  
                  {/* Social Media */}
                  <div className="">
                    <p className="text-[12px] mb-[8px]">Ikut media sosial kami <span className="font-bold">@corvidian</span></p>
                    <div className="flex space-x-4">
                      <Link href="#" className="text-white">
                        <div className="bg-[#000000] w-8 h-8 flex items-center justify-center rounded-full">
                          <Image 
                            src="/footer/facebook.png" 
                            alt="Facebook Icon" 
                            width={32}
                            height={32} 
                          />
                        </div>
                      </Link>
                      <Link href="#" className="text-white">
                        <div className="bg-[#000000] w-8 h-8 flex items-center justify-center rounded-full">
                          <Image 
                            src="/footer/linkedin.png" 
                            alt="LinkedIn Icon" 
                            width={32}
                            height={32} 
                          />
                        </div>
                      </Link>
                      <Link href="#" className="text-white">
                        <div className="bg-[#000000] w-8 h-8 flex items-center justify-center rounded-full">
                          <Image 
                            src="/footer/instagram.png" 
                            alt="Instagram Icon" 
                            width={32}
                            height={32} 
                          />
                        </div>
                      </Link>
                      <Link href="#" className="text-white">
                        <div className="bg-[#000000] w-8 h-8 flex items-center justify-center rounded-full">
                          <Image 
                            src="/footer/youtube.png" 
                            alt="YouTube Icon" 
                            width={32}
                            height={32} 
                          />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-[12px] font-extralight text-white">
            | www.corvidian.io | © Corvidian. All right reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer