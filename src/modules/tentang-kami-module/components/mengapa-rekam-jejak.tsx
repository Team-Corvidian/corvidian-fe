import React from 'react'
import Timeline from './timeline'
import Image from 'next/image'

const MengapaRekamJejak = () => {
  return (
    <section className="w-full max-w-[1550px] relative">
      <div className="hidden xl:block">
        <Image
          src="/tentangkami/bird.png"
          alt="Bird Image"
          width={650}
          height={481.84}
          style={{ zIndex: -1 }}
          className="absolute object-contain right-0 top-[200px]"
        />
      </div>

      <div className="block xl:hidden">
        <Image
          src="/tentangkami/bird.png"
          alt="Bird Image"
          width={250}
          height={185}
          style={{ zIndex: -1 }}
          className="absolute object-contain right-0 top-[200px] md:top-[140px] max-sm:w-[200px] max-sm:top-[250px] max-[400px]:!top-[300px]"
        />
      </div>

      <div className="relative mt-[40px] mx-auto px-4 lg:mx-[100px] lg:px-[100px] py-6 lg:py-12 z-10 mb-[40px]">
        <div className="space-y-4 lg:space-y-6 w-full">
          <h1 className="text-[20px] lg:text-2xl font-extrabold text-corvidian-1 leading-tight">
            Mengapa Kami Ada?
          </h1>
          <div className="w-full lg:w-3/4 flex flex-col gap-[15px] lg:gap-[20px]">
            <p className="text-[14px] leading-relaxed">
              Corvidian terinspirasi dari keluarga burung corvidae, hewan yang
              dikenal cerdas, adaptif, dan mampu memecahkan masalah secara
              strategis. Filosofi kami, Think Fast. Fly High., mencerminkan
              kemampuan berpikir cepat untuk menemukan solusi, serta visi untuk
              membantu bisnis terbang lebih tinggi.
            </p>
            <p className="text-[14px] leading-relaxed">
              Kami hadir untuk menjadikan teknologi sebagai pendukung, bukan
              penghalang, membantu bisnis tumbuh dengan solusi yang cerdas
              sekaligus praktis.
            </p>
          </div>
          <h1 className="text-[20px] lg:text-2xl font-extrabold text-corvidian-1 leading-tight mt-6 lg:mt-0">
            Rekam Jejak Kami
          </h1>
          <Timeline />
        </div>
      </div>
    </section>
  );
}

export default MengapaRekamJejak