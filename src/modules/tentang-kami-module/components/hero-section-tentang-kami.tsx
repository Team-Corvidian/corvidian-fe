import React from 'react'
// import Image from 'next/image'

const HeroSectionTentangKami = () => {
  return (
    <section>
       <div className="container relative mt-[40px] mx-auto px-4  pt-12 lg:py-20 z-10 mb-[40px]">
          <div className="space-y-4 lg:space-y-6 flex flex-row">
            <div className='w-1/2'>
                <h1 className="text-xl max-sm:max-w-[330px] md:text-2xl lg:text-4xl  font-extrabold text-corvidian-1 leading-tight max-[350px]:text-2xl max-[350px]:!max-w-[250px]">
                  Mitra Teknologi Cerdas untuk 
                </h1>
                <h1 className="text-xl max-sm:max-w-[330px] md:text-2xl lg:text-4xl font-extrabold text-[#2A77BD] leading-tight max-[350px]:text-2xl max-[350px]:!max-w-[250px]">
                  Pertumbuhan Bisnis Lebih Cepat
                </h1>
            </div>
            <div className="w-1/2 text-end">
                <p className='text-[12px] ps-[50%] pt-[50px]'>Ubah tantangan kompleks bisnis melalui solusi digital yang relevan, skalabel, dan berdampak nyata.</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default HeroSectionTentangKami
