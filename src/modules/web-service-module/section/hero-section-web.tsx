import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ContentIt from '../components/hero-section-it/contentIt';

const HeroSectionWeb = () => {
  return (
    <div className='w-screen relative overflow-hidden'>
        {/* Background elements */}
        <div className="w-full">
          <div 
            className="absolute top-[200px] w-[1000px] h-[600px] left-[505px] bg-no-repeat bg-cover" 
            style={{ 
              zIndex: 2,
              backgroundImage: "url('/heroItInfra/BlueIt.png')" 
            }}
          />
          {/* Dark background - middle layer on large, below blue on medium */}
          <div 
            className="absolute top-[232px] left-[1000px] w-[575px] h-[450px] bg-[#1D1F26]" 
            style={{ zIndex: 1, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'}}
          />
          <div 
            className="absolute top-[550px] w-full rounded-tr-[110px] h-full bg-[#f4f4f4]" 
            style={{ zIndex: 3, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'}}
          />
        </div>
        
        {/* Main hero content */}
        <div className="container relative mt-[100px] mx-auto px-4 lg:px-8 py-12 lg:py-20 z-10 mb-[90px]">
          <div className="space-y-4 lg:space-y-6">
                <h1 className="text-3xl max-sm:max-w-[330px] md:text-3xl lg:text-5xl xl:text-5xl font-extrabold text-corvidian-1 leading-tight max-[350px]:text-2xl max-[350px]:!max-w-[250px]">
                  Web Design & Development                
                </h1>

                <div className="text-sm max-sm:max-w-[277px] md:text-base lg:text-lg text-corvidian-1 leading-relaxed max-w-2xl font-medium">
                  <p>Dari pemasangan infrastruktur IT hingga pembuatan</p>
                  <p>website & aplikasi—semua bisa di Corvidian.</p>
                </div>

                <div>
                  <Button
                    asChild
                    size="lg"
                    className="bg-corvidian-2 hover:bg-corvidian-5 text-white hover:border border-black hover:text-corvidian-1 font-bold md:my-4 max-md:-translate-y-5 relative z-50 cursor-pointer max-md:mt-8 max-md:max-w-[151px] max-[350px]:!max-w-[130px] max-[350px]:!text-[12px] max-[350px]:!my-10"
                  >
                    <Link href="/konsultasi">Konsultasi Gratis</Link>
                  </Button>
                </div>  
          </div>
        </div>
        
        {/* ContentIt component section */}
        <div className="relative z-10 mt-[0px]">
          <div className="container mx-auto px-4 lg:px-8">
            <ContentIt/>
          </div>
        </div>
        
        <div className="relative w-full h-full z-10 flex flex-row justify-between">
          <div className="relative ml-[80px] mt-[40px] w-1/2">
            <p className="text-sm lg:text-[33px] text-corvidian-1 leading-relaxed max-w-2xl font-extrabold">
              Mengapa menggunakan jasa Web Design & Development
            </p>
            <p className="text-sm lg:text-l text-corvidian-1 leading-relaxed max-w-2xl">
              Gratis konsultasi seputar IT Infrastruktur untuk perusahaan Anda!
            </p>
            <div className="relative w-full h-full z-10 flex flex-row ">
              <div className="relative mt-[40px] w-1/3">
                <p className="text-sm lg:text-[33px] text-corvidian-1 leading-relaxed max-w-2xl font-extrabold">
                  80++
                </p>
                <p className="text-sm lg:text-l text-corvidian-1 leading-relaxed max-w-2xl">
                  Klien
                </p>
              </div>
              <div className="relative mt-[40px] w-1/3 ">
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
            src="/web-service/Web-service page.png"
            alt="Web Service Image"
            width={589}
            height={445}
            className="object-contain"
          />
        </div>
        
    </div>
  )
}

export default HeroSectionWeb