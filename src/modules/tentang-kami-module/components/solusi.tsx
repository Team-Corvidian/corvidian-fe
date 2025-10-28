import React from 'react'
import Image from 'next/image'

const Solusi = () => {
  const solutions = [
    {
      id: 1,
      title: "IT Infrastructure",
      description: "Jaringan, keamanan, dan pengaturan sistem untuk menjaga kelancaran operasional.",
      image: "/tentangkami/kabel.png",
      position: "left-top",
      gradient: "linear-gradient(to bottom, #FFFFFF, #C5CED5)"
    },
    {
      id: 2,
      title: "Web Design & Development",
      description: "Aplikasi kustom dan alat otomasi yang menyederhanakan kompleksitas.",
      position: "left-bottom",
      gradient: "linear-gradient(to right, #02C2B3, #1D1F26, #1D1F26, #1578CB)"
    },
    {
      id: 3,
      title: "Digital Software Solutions",
      description: "Website yang memadukan fungsi dan pengalaman pengguna terbaik.",
      position: "right-top",
      gradient: "linear-gradient(to right, #02C2B3, #1D1F26, #1D1F26, #1578CB)"
    },
    {
      id: 4,
      title: "CoBuild",
      description: "Layanan pengembangan kolaboratif bagi klien yang ingin membangun solusi bersama kami dengan memanfaatkan perangkat lunak siap pakai.",
      position: "right-bottom",
      gradient: "linear-gradient(to bottom, #FFFFFF, #C5CED5)"
    },
  ];

  return (
    <section className='w-full relative'>
        <div className="container relative mx-[100px] px-[100px] pb-[40px] z-10 mb-[40px]">
          <div className="space-y-4 lg:space-y-6 w-full">
                <h1 className="text-xl max-sm:max-w-[330px] md:text-2xl font-extrabold text-corvidian-1 leading-tight max-[350px]:text-2xl max-[350px]:!max-w-[250px]">
                    Solusi 
                    <span className='text-[#2A77BD] mx-1'>
                         Corvidian              
                    </span>
                </h1>
                <div className="w-3/4 text-[14px]">
                    <p className='text-[12px]'>Kami rancang untuk menjawab tantangan dan mengubahnya menjadi peluang</p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-2 gap-[22px] mt-8">
                  {/* Left Column */}
                  <div className="flex flex-col gap-[23px]">
                    {/* IT Infrastructure - Kiri Atas */}
                    <div 
                      className="rounded-[20px] flex flex-col justify-between"
                      style={{ 
                        width: '530px', 
                        height: '307px',
                        background: solutions[0].gradient
                      }}
                    >
                      <div className="flex-1 flex items-start justify-end">
                        <Image 
                          src={solutions[0].image!}
                          alt={solutions[0].title}
                          width={300}
                          height={150}
                          className="object-contain scale-x-[-1]"
                        />
                      </div>
                      <div className="mt-2 p-6">
                        <h3 className="text-[24px] font-bold text-black mb-2">
                          {solutions[0].title}
                        </h3>
                        <p className="text-[12px] text-black">
                          {solutions[0].description}
                        </p>
                      </div>
                    </div>

                    {/* Web Design & Development - Kiri Bawah */}
                    <div 
                      className="rounded-[20px] p-6 flex flex-col justify-end"
                      style={{ 
                        width: '530px', 
                        height: '142px',
                        background: solutions[1].gradient
                      }}
                    >
                      <div>
                        <h3 className="text-[24px] font-bold text-white mb-2">
                          {solutions[1].title}
                        </h3>
                        <p className="text-[12px] text-white">
                          {solutions[1].description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="flex flex-col gap-[23px]">
                    {/* Digital Software Solutions - Kanan Atas */}
                    <div 
                      className="rounded-[20px] p-6 flex flex-col justify-end"
                      style={{ 
                        width: '331px', 
                        height: '213px',
                        background: solutions[2].gradient
                      }}
                    >
                      <div>
                        <h3 className="text-[24px] font-bold text-white mb-2">
                          {solutions[2].title}
                        </h3>
                        <p className="text-[12px] text-white">
                          {solutions[2].description}
                        </p>
                      </div>
                    </div>

                    {/* CoBuild - Kanan Bawah */}
                    <div 
                      className="rounded-[20px] p-6 flex flex-col justify-end"
                      style={{ 
                        width: '331px', 
                        height: '236px',
                        background: solutions[3].gradient
                      }}
                    >
                      <div>
                        <h3 className="text-[24px] font-bold text-black mb-2">
                          {solutions[3].title}
                        </h3>
                        <p className="text-[12px] text-black">
                          {solutions[3].description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
    </section>
  )
}

export default Solusi