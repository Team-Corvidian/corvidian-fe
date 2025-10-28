import React from 'react'
import Image from 'next/image'

const TimKami = () => {
  const teamMembers = [
    {
      name: "Fauzan Abdurrahman",
      position: "Chief Executive Officer",
      image: "/tentangkami/people/fauzan-abdurrahman.png"
    },
    {
      name: "Budhi Kurniawan",
      position: "Chief Operating Officer",
      image: "/tentangkami/people/budhi-kurniawa.png"
    },
    {
      name: "Mahrizal",
      position: "Chief Technology Officer",
      image: "/tentangkami/people/mahrizal.png"
    },
    {
      name: "Al Faqih",
      position: "Chief Creative Officer",
      image: "/tentangkami/people/Al-Faqih.png"
    }
  ];

  return (
    <section className='pb-12'>
        <div className="container relative mt-[40px] mx-[100px] px-4 lg:px-[100px] z-10 mb-[40px]">
          <div className="space-y-4 lg:space-y-6 w-full">
                <h1 className="text-xl max-sm:max-w-[330px] md:text-2xl font-extrabold text-corvidian-1 leading-tight max-[350px]:text-2xl max-[350px]:!max-w-[250px]">
                    Tim Kami               
                </h1>
                <div className="w-3/4 flex flex-col gap-[20px] text-[14px]">
                    <p className='text-[12px]'>Corvidian terinspirasi dari keluarga burung corvidae, hewan yang dikenal cerdas, adaptif, dan mampu memecahkan masalah secara strategis. Filosofi kami, Think Fast. Fly High., mencerminkan kemampuan berpikir cepat untuk menemukan solusi, serta visi untuk membantu bisnis terbang lebih tinggi.</p>
                </div>

            </div>
        </div>
        {/* Team Cards Grid */}
        <div className="grid grid-cols-4 gap-[8px] mt-8 mx-[90px]">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="flex flex-col items-center"
              style={{ width: '283px' }}
            >
              {/* Card Container */}
              <div 
                className="relative rounded-[20px] overflow-hidden"
                style={{ 
                  width: '260px', 
                  height: '380px',
                  backgroundColor: '#F4F4F4'
                }}
              >
                {/* Image */}
                <div className="w-full h-full relative ">
                  <Image 
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-contain pt-[60px]"
                  />
                </div>
                {/* Name Tag */}
                <div 
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-[8px] px-4 py-3 text-center"
                  style={{ 
                    width: '251px', 
                    height: '64px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <h3 className="text-[14px] font-bold text-black">
                    {member.name}
                  </h3>
                  <p className="text-[12px] text-black mt-1">
                    {member.position}
                  </p>
                </div>
              </div>
            </div>
            ))}
        </div>
    </section>
  )
}

export default TimKami
