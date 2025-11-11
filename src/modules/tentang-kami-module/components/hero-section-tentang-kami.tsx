import React from 'react'

const HeroSectionTentangKami = () => {
  return (
    <section>
       <div className="container relative mt-[40px] mx-auto px-4 pt-12 lg:py-20 z-10 mb-[40px]">
          <div className="flex flex-col items-center text-center gap-6 lg:gap-10 md:flex-row md:items-end md:justify-between md:text-left">
            <div className='w-full md:w-1/2'>
                <h1 className="text-xl max-sm:max-w-[330px] md:text-2xl xl:text-4xl font-extrabold text-corvidian-1 leading-tight max-[350px]:text-2xl max-[350px]:!max-w-[250px] mx-auto md:mx-0">
                  Mitra Teknologi Cerdas untuk 
                </h1>
                <h1 className="text-xl max-sm:max-w-[330px] md:text-2xl xl:text-4xl font-extrabold text-[#2A77BD] leading-tight max-[350px]:text-2xl max-[350px]:!max-w-[250px] mx-auto md:mx-0">
                  Pertumbuhan Bisnis Lebih Cepat
                </h1>
            </div>
            <div className="w-full md:w-1/2 md:text-end">
                <p className='text-sm xl:text-[16px] 2xl:text-[18px] leading-relaxed md:leading-snug lg:max-w-md md:ml-auto'>
                  Ubah tantangan kompleks bisnis <br className="hidden sm:block" />
                  melalui solusi digital yang relevan, <br className="hidden sm:block" />
                  skalabel, dan berdampak nyata.
                </p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default HeroSectionTentangKami
