import React from 'react'
import Timeline from './timeline'
import Image from 'next/image'

const MengapaRekamJejak = () => {
  return (
    <section className='w-screen relative'>
                <Image
                    src="/tentangkami/bird.png"
                    alt="Cable Image"
                    width={650}
                    height={481.84}
                    style={{zIndex:-1}}
                    className="absolute object-contain right-0 top-[200px]"
                />
        <div className="container relative mt-[40px] mx-[100px] px-4 lg:px-[100px] py-12 z-10 mb-[40px]">
          <div className="space-y-4 lg:space-y-6 w-full ">
                <h1 className="text-xl max-sm:max-w-[330px] md:text-2xl  font-extrabold text-corvidian-1 leading-tight max-[350px]:text-2xl max-[350px]:!max-w-[250px]">
                    Mengapa Kami Ada?               
                </h1>
                <div className="w-3/4 flex flex-col gap-[20px] text-[14px] ">
                    <p className='text-[12px]'>Corvidian terinspirasi dari keluarga burung corvidae, hewan yang dikenal cerdas, adaptif, dan mampu memecahkan masalah secara strategis. Filosofi kami, Think Fast. Fly High., mencerminkan kemampuan berpikir cepat untuk menemukan solusi, serta visi untuk membantu bisnis terbang lebih tinggi.</p>
                    <p className='text-[12px]'>Kami hadir untuk menjadikan teknologi sebagai pendukung, bukan penghalang, membantu bisnis tumbuh dengan solusi yang cerdas sekaligus praktis.</p>
                </div>
                <h1 className="text-xl max-sm:max-w-[330px] md:text-2xl  font-extrabold text-corvidian-1 leading-tight max-[350px]:text-2xl max-[350px]:!max-w-[250px]">
                    Rekam Jejak Kami               
                </h1>
                <Timeline />
            </div>
          </div>
    </section>
  )
}

export default MengapaRekamJejak