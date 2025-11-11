import React from 'react'
import Image from 'next/image'

export const ImageSection = () => {
  return (
    <section className="w-full relative overflow-hidden">
      <div className="hidden lg:block">
        <Image
          src="/tentangkami/shape.png"
          alt="Cable Image"
          width={650}
          height={481.84}
          priority
          style={{ zIndex: 3 }}
          className="absolute object-contain top-0 max-w-full h-auto"
        />
        <div
          className="absolute top-[40px] w-full"
          style={{
            backgroundImage: 'url(/tentangkami/hero.png)',
            zIndex: 1,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '550.84px',
            position: 'relative'
          }}
        />
      </div>

      <div className="hidden md:block lg:hidden">
        <Image
          src="/tentangkami/shape.png"
          alt="Cable Image"
          width={450}
          height={250}
          priority
          style={{ zIndex: 3 }}
          className="absolute object-contain top-0"
        />
        <div 
          className="absolute top-[30px] w-full" 
          style={{
            backgroundImage: 'url(/tentangkami/hero.png)',
            zIndex: 1,
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            height: '400px', 
            position: 'relative'
          }}
        />
      </div>

      <div className="block md:hidden">
        <Image
          src="/tentangkami/shape.png"
          alt="Cable Image"
          width={300}
          height={90}
          priority
          style={{ zIndex: 3 }}
          className="absolute object-contain top-0 left-0 right-0"
        />
        <div 
          className="absolute top-[20px] w-full" 
          style={{
            backgroundImage: 'url(/tentangkami/hero.png)',
            zIndex: 1,
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            height: '300px', 
            position: 'relative'
          }}
        />
      </div>
    </section>
  )
}