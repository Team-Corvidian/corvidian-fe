import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ContentIt from '../components/hero-section-it/contentIt';

const HeroSectionDigital = () => {
  return (
    <div className='w-full max-w-[1550px] relative overflow-hidden'>
        {/* Background elements - Desktop */}
        <div className="hidden lg:block w-screen">
          <div 
            className="absolute top-[200px] w-[1000px] h-[600px] left-[505px] bg-no-repeat bg-cover" 
            style={{ 
              zIndex: 2,
              backgroundImage: "url('/heroItInfra/BlueIt.png')" 
            }}
          />
          <div 
            className="absolute top-[232px] left-[1000px] w-[575px] h-[450px] bg-[#1D1F26]" 
            style={{ zIndex: 1, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'}}
          />
          <div 
            className="absolute top-[550px] w-screen rounded-tr-[110px] h-full bg-[#f4f4f4]" 
            style={{ zIndex: 3, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'}}
          />
        </div>

        {/* Background elements - Mobile */}
        <div className="block lg:hidden w-screen">
          <div 
            className="absolute top-[200px] w-[250px] h-[120px] right-4 bg-no-repeat bg-cover" 
            style={{ 
              zIndex: 2,
              backgroundImage: "url('/heroItInfra/MobileBlue.png')" 
            }}
          />
          <div 
            className="absolute top-[215px] right-0 w-[120px] h-[160px] bg-[#1D1F26]" 
            style={{ zIndex: 1, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'}}
          />
          <div 
            className="absolute top-[300px] w-screen rounded-tr-[55px] h-full bg-[#f4f4f4]" 
            style={{ zIndex: 3, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'}}
          />
        </div>
        
        {/* Main hero content */}
        <div className="container relative mt-[40px] lg:mt-[100px] mx-auto px-6 lg:px-8 py-8 lg:py-20 z-10 mb-[40px] lg:mb-[90px]">
          <div className="space-y-3 lg:space-y-6">
                <h1 className="text-[24px] md:text-3xl lg:text-5xl xl:text-5xl font-extrabold text-corvidian-1 leading-tight max-w-[280px] lg:max-w-none">
                  Digital Software Solutions              
                </h1>

                <div className="text-[12px] md:text-base lg:text-lg text-corvidian-1 leading-relaxed max-w-[250px] lg:max-w-2xl font-medium">
                  <p>Dari pemasangan infrastruktur IT hingga pembuatan</p>
                  <p>website & aplikasi—semua bisa di Corvidian.</p>
                </div>

                <div>
                  <Button
                    asChild
                    size="lg"
                    className="bg-corvidian-2 hover:bg-corvidian-5 text-white hover:border border-black hover:text-corvidian-1 font-bold relative z-50 cursor-pointer text-[12px] lg:text-base px-4 lg:px-6 h-10 lg:h-11"
                  >
                    <Link href="/konsultasi">Konsultasi Gratis</Link>
                  </Button>
                </div>  
          </div>
        </div>
        
        {/* ContentIt component section */}
        <div className="relative z-10 mt-0">
          <div className="container mx-auto px-6 lg:px-8">
            <ContentIt/>
          </div>
        </div>
        
        {/* Why Corvidian Section - Desktop */}
        <div className="hidden lg:flex relative w-full h-full z-10 flex-row justify-between overflow-hidden">
          <div className="relative ml-[80px] lg:mt-[80px] mt-[40px] w-1/2">
            <p className="text-sm lg:text-[33px] text-corvidian-1 leading-relaxed max-w-2xl font-extrabold">
              Mengapa menggunakan jasa Digital Software Solutions
            </p>
            <p className="text-sm lg:text-l text-corvidian-1 leading-relaxed max-w-2xl">
              Gratis konsultasi seputar Digital Software Solutions untuk perusahaan Anda!
            </p>
            <div className="relative w-full h-full z-10 flex flex-row">
              <div className="relative mt-[40px] w-1/3">
                <p className="text-sm lg:text-[33px] text-corvidian-1 leading-relaxed max-w-2xl font-extrabold">
                  80++
                </p>
                <p className="text-sm lg:text-l text-corvidian-1 leading-relaxed max-w-2xl">
                  Klien
                </p>
              </div>
              <div className="relative mt-[40px] w-1/3">
                <p className="text-sm lg:text-[33px] text-corvidian-1 leading-relaxed max-w-2xl font-extrabold">
                  4.9/5
                </p>
                <p className="text-sm lg:text-l text-corvidian-1 leading-relaxed max-w-2xl">
                  Rating
                </p>
              </div>
            </div>
          </div>
          <Image
            src="/digital-service/Digital-solution-service.png"
            alt="Digital Service Image"
            width={489}
            height={445}
            className="object-contain"
          />
        </div>

        {/* Why Corvidian Section - Mobile */}
        <div className="block lg:hidden relative w-full z-10 mt-8 mb-8">
          <div className="flex flex-col gap-4">
            {/* Title & Description */}
            <div className='px-6'>
              <p className="text-[18px] text-corvidian-1 leading-tight font-extrabold mb-2">
                Mengapa menggunakan jasa Digital Software Solutions
              </p>
              <p className="text-[12px] text-corvidian-1 leading-relaxed">
                Gratis konsultasi seputar Digital Software Solutions untuk perusahaan Anda!
              </p>
            </div>

            {/* Stats */}
            <div className="flex gap-8 justify-between ps-6 mt-4">
              <div className=''>
                <p className="text-[24px] text-corvidian-1 font-extrabold">
                  80++
                </p>
                <p className="text-[12px] text-corvidian-1">
                  Klien
                </p>
              </div>
              <div className=''>
                <p className="text-[24px] text-corvidian-1 font-extrabold">
                  4.9/5
                </p>
                <p className="text-[12px] text-corvidian-1">
                  Rating
                </p>
              </div>
              {/* Digital Service Image */}
              <div className="flex justify-center top-[-10px] right-0">
                <Image
                  src="/digital-service/Digital-solution-service.png"
                  alt="Digital Service Image"
                  width={150}
                  height={113}
                  className="object-contain"
                />
              </div>
            </div>

          </div>
        </div>
        
    </div>
  )
}

export default HeroSectionDigital