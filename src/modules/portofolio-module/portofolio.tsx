import React from 'react'

const PortofolioHero = () => {
  return (
    <section>
       <div className="container relative mt-[40px] mx-auto px-4  pt-12 lg:py-20 z-10 mb-[40px]">
          <div className="space-y-4 lg:space-y-6 flex flex-row">
            <div className='w-1/2 flex items-center mt-5'>
                <h1 className="text-xl max-sm:max-w-[330px] md:text-2xl lg:text-4xl font-extrabold text-[#2A77BD] leading-tight max-[350px]:text-2xl max-[350px]:!max-w-[250px]">
                    Portofolio <span className='text-corvidian-1'> Kami </span>                
                </h1>
            </div>
            <div className="w-1/2 justify-end flex items-center">
                <div className="w-1/2 text-end">
                    <p className='text-[12px] ps-[50%] pt-[50px]'>Jelajahi hasil nyata dari solusi digital yang kami hadirkan.</p>
                </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default PortofolioHero
