import React from 'react'
import  CardFull  from '../components/card-full';

const HeroSectionSistemKami = () => {
  return (
    <div className='w-full max-w-[1550px] relative overflow-hidden'>
        {/* Background elements - Desktop */}
        <div className="hidden lg:block w-screen">
          <div 
            className="absolute top-[150px] w-[1400px] h-[400px] right-[0px] bg-no-repeat bg-cover" 
            style={{ 
              zIndex: 2,
              backgroundImage: "url('/heroItInfra/BlueIt.png')" 
            }}
          />
          <div 
            className="absolute top-[232px] right-0 w-[500px] h-[450px] bg-[#1D1F26]" 
            style={{ zIndex: 1, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'}}
          />
          <div 
            className="absolute top-[420px] w-screen rounded-tr-[110px] h-full bg-[#f4f4f4]" 
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
            className="absolute top-[280px] w-screen rounded-tr-[55px] h-full bg-[#f4f4f4]" 
            style={{ zIndex: 3, clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'}}
          />
        </div>
        
        {/* Main hero content */}
        <div className="container relative mt-[40px] lg:mt-[80px] mx-auto px-6 lg:px-8 py-8 lg:py-20 z-10 mb-[20px] lg:mb-[40px]">
          <div className="space-y-3 lg:space-y-6">
                <h1 className="text-[24px] w-1/2 lg:text-5xl font-extrabold text-corvidian-1 leading-tight max-w-[350px] lg:max-w-none">
                  Kenali sistem kami yang <span className="text-corvidian-2">siap pakai!</span>
                </h1>

                <div className="text-[12px] md:text-base lg:text-lg text-corvidian-1 leading-relaxed max-w-[250px] lg:max-w-2xl font-medium">
                  <p>Kenali Cepat di Sistem Siap Pakai kami!</p>
                </div>
          </div>
        </div>
        
        {/* Card Grid Section */}
        <div className="relative z-10 mt-[40px] lg:mt-[60px] mb-[80px] mx-[100px] lg:mb-[120px]">
          <CardFull />
        </div>


        
    </div>
  )
}

export default HeroSectionSistemKami