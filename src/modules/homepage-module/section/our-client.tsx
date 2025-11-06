import React from 'react'
import Image from 'next/image'

const OurClient = () => {
  const clientLogos = [
    {
      name: "MUC Consulting",
      logo: "/client/muc-consulting.png",
      width: 150,
      height: 60
    },
    {
      name: "RTS",
      logo: "/client/rts-logo.png", 
      width: 130,
      height: 60
    },
    {
      name: "MUC Attorney at Law",
      logo: "/client/muc-attorney.png",
      width: 120,
      height: 120
    },
    {
      name: "Dinawan",
      logo: "/client/dinawan-logo.png",
      width: 70,
      height: 90
    }
  ]

  return (
    <section id="clients" className="w-full py-20">
      <div className="w-full max-w-[1512px] mx-auto">
        <div className="flex justify-center mb-16">
          <h2 className="font-extrabold text-[30px] leading-[100%] text-corvidian-1 text-center">
            Klien Kami
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 md:gap-x-20 justify-items-center items-center">
          {clientLogos.map((client, index) => (
            <div 
              key={index}
              className="flex items-center justify-center transition-all duration-300 hover:scale-105"
            >
              <Image
                src={client.logo}
                alt={`${client.name} Logo`}
                width={client.width}
                height={client.height}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurClient