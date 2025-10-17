import React from 'react'
import Image from 'next/image'

export const Header = () => {
  return (
    <div className='flex flex-row items-end justify-center pt-20 gap-12  mx-auto flex-wrap'>
      <h1 className='2xl:text-[51px] text-5xl font-extrabold'>Mitra Teknologi Cerdas untuk <br /> <span className='text-corvidian-2'>Pertumbuhan Bisnis Lebih Cepat</span></h1>
      <p className='2xl:text-lg text-sm w-[250px] text-center 2xl:w-[327px] font-semibold'>
        Ubah tantangan kompleks bisnis melalui solusi digital yang relevan, skalabel, dan berdampak nyata.
      </p>
      <Image src='/tentang-kami/orang-ngobrol.png' alt='orang ngobrol' width={500} height={500} quality={100} className='w-full pt-10' />
    </div>
  )
}


