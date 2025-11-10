import React from 'react'

const PortofolioHero = () => {
  return (
    <section>
      {/* Desktop Version */}
      <div className="hidden lg:block container relative mt-[40px] mx-auto px-4 pt-12 lg:py-20 z-10 mb-[40px]">
        <div className="space-y-4 lg:space-y-6 flex flex-row">
          <div className='w-1/2 flex items-center mt-5'>
            <h1 className="text-xl md:text-2xl lg:text-4xl font-extrabold text-[#2A77BD] leading-tight">
              Portofolio <span className='text-corvidian-1'> Kami </span>                
            </h1>
          </div>
          <div className="w-1/2 justify-end flex items-center">
            <div className="w-1/2 text-end">
              <p className='text-[12px] ps-[50%] pt-[50px]'>
                Jelajahi hasil nyata dari solusi digital yang kami hadirkan.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="block lg:hidden container relative mt-[80px] mx-auto px-4 pt-8 pb-6 z-10">
        <div className="flex flex-row justify-between items-start gap-4">
          {/* Title - Left Side */}
          <div className="flex-shrink-0">
            <h1 className="text-lg font-extrabold text-[#2A77BD] leading-tight max-w-[140px]">
              Portofolio <span className='text-corvidian-1'>Kami</span>
            </h1>
          </div>
          
          {/* Description - Right Side */}
          <div className="flex-1 flex justify-end">
            <p className='text-xs text-corvidian-1 leading-relaxed text-right max-w-[180px]'>
              Jelajahi hasil nyata dari solusi digital yang kami hadirkan.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortofolioHero