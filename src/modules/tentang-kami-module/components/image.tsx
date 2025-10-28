import React from 'react'
import Image from 'next/image'

export const ImageSection = () => {
  return (
    <section className="w-full relative">
        <Image
                src="/tentangkami/shape.png"
                alt="Cable Image"
                width={650}
                height={481.84}
                style={{zIndex:3}}
                className="absolute object-contain top-[0px]"
            />
            <div 
                className="absolute top-[40px] w-full " 
                style={{backgroundImage: 'url(/tentangkami/hero.png)',zIndex: 1 ,backgroundSize: 'cover', backgroundPosition: 'center', height: '550.84px', position: 'relative'}}>
            </div>
    </section>
  )
}
