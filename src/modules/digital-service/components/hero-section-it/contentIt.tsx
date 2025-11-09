"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { GlobalSearchWidget } from '@/components/search/global-search-widget'

const ContentDigital = () => {
  const [infrastructureExpanded, setInfrastructureExpanded] = useState(false)
  const [securityExpanded, setSecurityExpanded] = useState(false)
  const [operationsExpanded, setOperationsExpanded] = useState(false)
  
  const [infrastructureDetailsExpanded, setInfrastructureDetailsExpanded] = useState(false)
  const [infrastructureFAQExpanded, setInfrastructureFAQExpanded] = useState(false)
  const [securityDetailsExpanded, setSecurityDetailsExpanded] = useState(false)
  const [securityFAQExpanded, setSecurityFAQExpanded] = useState(false)
  const [operationsDetailsExpanded, setOperationsDetailsExpanded] = useState(false)
  const [operationsFAQExpanded, setOperationsFAQExpanded] = useState(false)

  return (
    <div className='mb-[20px]'>
        <div className="text-[12px] lg:text-lg text-corvidian-1 leading-relaxed max-w-2xl font-medium">
          <p>Cari berdasarkan kata kunci</p>
        </div>
        <GlobalSearchWidget />

        <div className="lg:mt-[80px] mt-[40px]">
          <p className="text-[18px] lg:text-[33px] text-corvidian-1 leading-relaxed max-w-2xl font-bold">
            Rincian Solusi Berbasis Digital Software Solutions
          </p>
          <p className="text-[12px] lg:text-l text-corvidian-1 leading-relaxed max-w-2xl">
            Berbagai jenis bisnis sudah memberikan testimoni, sekarang giliran kamu untuk menentukan!
          </p>
        </div>

        {/* Section 1: Pengembangan Aplikasi (Application Development) */}
        <div className="lg:mt-[80px] mt-[40px]">
          <div className="bg-white shadow-xl w-full h-[60px] flex items-center">
            <div className="ml-[20px] lg:ml-[50px] w-[4px] h-[60%] bg-[#1578CB] self-center"/>
            <p className="ml-[20px] lg:ml-[50px] text-[12px] lg:text-[18px] text-corvidian-1 font-bold my-auto flex-grow pr-4 md:w-full w-3/4">
              Pengembangan Aplikasi (Web, Mobile, Integrated Systems)
            </p>
            <div className="mr-[15px] lg:mr-[30px] cursor-pointer flex-shrink-0" onClick={() => setInfrastructureExpanded(!infrastructureExpanded)}>
              {infrastructureExpanded ? (
                <Image
                  src="/heroItInfra/Up.png"
                  alt="Up Arrow"
                  width={24}
                  height={24}
                  className="self-center w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]"
                />
              ) : (
                <Image
                  src="/heroItInfra/Down.png"
                  alt="Down Arrow"
                  width={24}
                  height={24}
                  className="self-center w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]"
                />
              )}
            </div>
          </div>
          
          {/* Expandable content for Application Development */}
          {infrastructureExpanded && (
            <div className="mt-2 flex flex-col">
              {/* Details section */}
              <div className="bg-[#C5CED5] shadow-xl w-[calc(100%-40px)] lg:w-[1110px] ml-[40px] lg:ml-[105px] h-[60px] flex items-center">
                <p className="ml-6 lg:ml-8 text-[12px] lg:text-[18px] text-corvidian-1 font-bold my-auto flex-grow pr-4">
                  Rincian layanan 
                </p>
                <div className="mr-[15px] lg:mr-[30px] cursor-pointer flex-shrink-0" onClick={() => setInfrastructureDetailsExpanded(!infrastructureDetailsExpanded)}>
                  {infrastructureDetailsExpanded ? (
                    <Image
                      src="/heroItInfra/UpDark.png"
                      alt="Up Arrow"
                      width={24}
                      height={24}
                      className="self-center w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]"
                    />
                  ) : (
                    <Image
                      src="/heroItInfra/DownDark.png"
                      alt="Down Arrow"
                      width={24}
                      height={24}
                      className="self-center w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]"
                    />
                  )}
                </div>
              </div>
              
              {/* Details content */}
              {infrastructureDetailsExpanded && (
                <div className="bg-[#C5CED5] shadow-xl w-[calc(100%-40px)] lg:w-[1110px] ml-[40px] lg:ml-[105px] p-4 lg:p-6 transition-all duration-300 ease-in-out">
                  <p className="text-[12px] lg:text-base text-corvidian-1">
                    Layanan pengembangan aplikasi kami mencakup desain, development, dan deployment aplikasi custom yang 
                    disesuaikan dengan kebutuhan bisnis Anda untuk meningkatkan efisiensi operasional.
                  </p>
                  <ul className="list-disc pl-5 mt-4 mb-4 text-[12px] lg:text-base text-corvidian-1">
                    <li className="mb-2">Web Application Development (Progressive Web Apps)</li>
                    <li className="mb-2">Mobile Application (iOS & Android)</li>
                    <li className="mb-2">Cross-platform development (React Native, Flutter)</li>
                    <li className="mb-2">Integrated Systems & API Development</li>
                    <li>Enterprise Application Solutions</li>
                  </ul>
                  <div className="h-[40px] w-[130px] rounded-4xl flex items-center justify-center" style={{background:"linear-gradient(to right, #02C2B3, #1D1F26, #1D1F26, #1578CB)"}}>
                    <Button variant="outline" size="sm" className="text-[12px] text-black font-bold w-fit rounded-2xl">
                      <Link href='/digital-service' className='pointer'>Konsultasi Gratis</Link>
                    </Button>
                  </div>
                </div>
              )}
              
              {/* FAQ section */}
              <div className="bg-[#C5CED5] shadow-xl w-[calc(100%-40px)] lg:w-[1110px] ml-[40px] lg:ml-[105px] h-[60px] flex items-center mt-2">
                <p className="ml-6 lg:ml-8 text-[12px] lg:text-[18px] text-corvidian-1 font-bold my-auto flex-grow pr-4">
                  Pertanyaan yang sering ditanyakan (FAQ)
                </p>
                <div className="mr-[15px] lg:mr-[30px] cursor-pointer flex-shrink-0" onClick={() => setInfrastructureFAQExpanded(!infrastructureFAQExpanded)}>
                  {infrastructureFAQExpanded ? (
                    <Image
                      src="/heroItInfra/UpDark.png"
                      alt="Up Arrow"
                      width={24}
                      height={24}
                      className="self-center w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]"
                    />
                  ) : (
                    <Image
                      src="/heroItInfra/DownDark.png"
                      alt="Down Arrow"
                      width={24}
                      height={24}
                      className="self-center w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]"
                    />
                  )}
                </div>
              </div>
              
              {/* FAQ content */}
              {infrastructureFAQExpanded && (
                <div className="bg-[#C5CED5] shadow-xl w-[calc(100%-40px)] lg:w-[1110px] ml-[40px] lg:ml-[105px] p-4 lg:p-6 transition-all duration-300 ease-in-out">
                  <div className="mb-4">
                    <h3 className="font-bold text-[12px] lg:text-sm mb-2">Berapa lama waktu pengembangan aplikasi?</h3>
                    <p className="text-[12px] lg:text-sm">Waktu pengembangan bervariasi tergantung kompleksitas, untuk aplikasi sederhana 2-3 bulan, aplikasi kompleks 6-12 bulan.</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-bold text-[12px] lg:text-sm mb-2">Apakah bisa membuat aplikasi untuk iOS dan Android sekaligus?</h3>
                    <p className="text-[12px] lg:text-sm">Ya, kami dapat menggunakan teknologi cross-platform untuk deployment di kedua platform secara efisien.</p>
                  </div>
                  <div className="h-[40px] w-[130px] rounded-4xl flex items-center justify-center" style={{background:"linear-gradient(to right, #02C2B3, #1D1F26, #1D1F26, #1578CB)"}}>
                    <Button variant="outline" size="sm" className="text-[12px] text-black font-bold w-fit rounded-2xl">
                      <Link href='/digital-service' className='pointer'>Konsultasi Gratis</Link>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Section 2: Desain/Pengalaman Pengguna (UI/UX Design) */}
        <div className="mt-[20px]">
          <div className="bg-white shadow-xl w-full h-[60px] flex items-center">
            <div className="ml-[20px] lg:ml-[50px] w-[4px] h-[60%] bg-[#1578CB] self-center"/>
            <p className="ml-[20px] lg:ml-[50px] text-[12px] lg:text-[18px] text-corvidian-1 font-bold my-auto flex-grow pr-4 md:w-full w-3/4">
              Desain/Pengalaman Pengguna Aplikasi dan Sistem (UI/UX Design)
            </p>
            <div className="mr-[15px] lg:mr-[30px] cursor-pointer flex-shrink-0" onClick={() => setSecurityExpanded(!securityExpanded)}>
              {securityExpanded ? (
                <Image
                  src="/heroItInfra/Up.png"
                  alt="Up Arrow"
                  width={24}
                  height={24}
                  className="self-center w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]"
                />
              ) : (
                <Image
                  src="/heroItInfra/Down.png"
                  alt="Down Arrow"
                  width={24}
                  height={24}
                  className="self-center w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]"
                />
              )}
            </div>
          </div>
          
          {/* Expandable content for UI/UX */}
          {securityExpanded && (
            <div className="mt-2 flex flex-col">
              {/* Details section */}
              <div className="bg-[#C5CED5] shadow-xl w-[calc(100%-40px)] lg:w-[1110px] ml-[40px] lg:ml-[105px] h-[60px] flex items-center">
                <p className="ml-6 lg:ml-8 text-[12px] lg:text-[18px] text-corvidian-1 font-bold my-auto flex-grow pr-4">
                  Rincian layanan 
                </p>
                <div className="mr-[15px] lg:mr-[30px] cursor-pointer flex-shrink-0" onClick={() => setSecurityDetailsExpanded(!securityDetailsExpanded)}>
                  {securityDetailsExpanded ? (
                    <Image
                      src="/heroItInfra/UpDark.png"
                      alt="Up Arrow"
                      width={24}
                      height={24}
                      className="self-center w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]"
                    />
                  ) : (
                    <Image
                      src="/heroItInfra/DownDark.png"
                      alt="Down Arrow"
                      width={24}
                      height={24}
                      className="self-center w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]"
                    />
                  )}
                </div>
              </div>
              
              {/* Details content */}
              {securityDetailsExpanded && (
                <div className="bg-[#C5CED5] shadow-xl w-[calc(100%-40px)] lg:w-[1110px] ml-[40px] lg:ml-[105px] p-4 lg:p-6 transition-all duration-300 ease-in-out">
                  <p className="text-[12px] lg:text-base text-corvidian-1">
                    Kami menyediakan layanan desain UI/UX untuk aplikasi dan sistem yang user-centric, menciptakan 
                    pengalaman pengguna yang intuitif dan meningkatkan engagement.
                  </p>
                  <ul className="list-disc pl-5 mt-4 mb-4 text-[12px] lg:text-base text-corvidian-1">
                    <li className="mb-2">User research dan behavior analysis</li>
                    <li className="mb-2">Information architecture & user flows</li>
                    <li className="mb-2">Interactive prototyping & wireframing</li>
                    <li className="mb-2">Visual design untuk aplikasi & sistem</li>
                    <li>Usability testing & design iteration</li>
                  </ul>
                  <div className="h-[40px] w-[130px] rounded-4xl flex items-center justify-center" style={{background:"linear-gradient(to right, #02C2B3, #1D1F26, #1D1F26, #1578CB)"}}>
                    <Button variant="outline" size="sm" className="text-[12px] text-black font-bold w-fit rounded-2xl">
                      <Link href='/digital-service' className='pointer'>Konsultasi Gratis</Link>
                    </Button>
                  </div>
                </div>
              )}
              
              {/* FAQ section */}
              <div className="bg-[#C5CED5] shadow-xl w-[calc(100%-40px)] lg:w-[1110px] ml-[40px] lg:ml-[105px] h-[60px] flex items-center mt-2">
                <p className="ml-6 lg:ml-8 text-[12px] lg:text-[18px] text-corvidian-1 font-bold my-auto flex-grow pr-4">
                  Pertanyaan yang sering ditanyakan (FAQ)
                </p>
                <div className="mr-[15px] lg:mr-[30px] cursor-pointer flex-shrink-0" onClick={() => setSecurityFAQExpanded(!securityFAQExpanded)}>
                  {securityFAQExpanded ? (
                    <Image
                      src="/heroItInfra/UpDark.png"
                      alt="Up Arrow"
                      width={24}
                      height={24}
                      className="self-center w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]"
                    />
                  ) : (
                    <Image
                      src="/heroItInfra/DownDark.png"
                      alt="Down Arrow"
                      width={24}
                      height={24}
                      className="self-center w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]"
                    />
                  )}
                </div>
              </div>
              
              {/* FAQ content */}
              {securityFAQExpanded && (
                <div className="bg-[#C5CED5] shadow-xl w-[calc(100%-40px)] lg:w-[1110px] ml-[40px] lg:ml-[105px] p-4 lg:p-6 transition-all duration-300 ease-in-out">
                  <div className="mb-4">
                    <h3 className="font-bold text-[12px] lg:text-sm mb-2">Mengapa UI/UX penting untuk aplikasi?</h3>
                    <p className="text-[12px] lg:text-sm">UI/UX yang baik meningkatkan user satisfaction, retention, dan konversi. Aplikasi dengan UX buruk cenderung ditinggalkan pengguna.</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-bold text-[12px] lg:text-sm mb-2">Apakah bisa redesign aplikasi yang sudah ada?</h3>
                    <p className="text-[12px] lg:text-sm">Ya, kami dapat melakukan audit UX dan redesign untuk meningkatkan usability dan visual appeal aplikasi existing.</p>
                  </div>
                  <div className="h-[40px] w-[130px] rounded-4xl flex items-center justify-center" style={{background:"linear-gradient(to right, #02C2B3, #1D1F26, #1D1F26, #1578CB)"}}>
                    <Button variant="outline" size="sm" className="text-[12px] text-black font-bold w-fit rounded-2xl">
                      <Link href='/digital-service' className='pointer'>Konsultasi Gratis</Link>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Section 3: Manajemen Data & Pemeliharaan Sistem */}
        <div className="mt-[20px] lg:mb-[80px] mb-[40px]">
          <div className="bg-white shadow-xl w-full h-[60px] flex items-center">
            <div className="ml-[20px] lg:ml-[50px] w-[4px] h-[60%] bg-[#1578CB] self-center"/>
            <p className="ml-[20px] lg:ml-[50px] text-[12px] lg:text-[18px] text-corvidian-1 font-bold my-auto flex-grow pr-4 md:w-full w-3/4">
              Manajemen Data & Pemeliharaan Sistem (Data Management & System Maintenance)
            </p>
            <div className="mr-[15px] lg:mr-[30px] cursor-pointer flex-shrink-0" onClick={() => setOperationsExpanded(!operationsExpanded)}>
              {operationsExpanded ? (
                <Image
                  src="/heroItInfra/Up.png"
                  alt="Up Arrow"
                  width={24}
                  height={24}
                  className="self-center w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]"
                />
              ) : (
                <Image
                  src="/heroItInfra/Down.png"
                  alt="Down Arrow"
                  width={24}
                  height={24}
                  className="self-center w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]"
                />
              )}
            </div>
          </div>
          
          {/* Expandable content for Data Management */}
          {operationsExpanded && (
            <div className="mt-2 flex flex-col">
              {/* Details section */}
              <div className="bg-[#C5CED5] shadow-xl w-[calc(100%-40px)] lg:w-[1110px] ml-[40px] lg:ml-[105px] h-[60px] flex items-center">
                <p className="ml-6 lg:ml-8 text-[12px] lg:text-[18px] text-corvidian-1 font-bold my-auto flex-grow pr-4">
                  Rincian layanan 
                </p>
                <div className="mr-[15px] lg:mr-[30px] cursor-pointer flex-shrink-0" onClick={() => setOperationsDetailsExpanded(!operationsDetailsExpanded)}>
                  {operationsDetailsExpanded ? (
                    <Image
                      src="/heroItInfra/UpDark.png"
                      alt="Up Arrow"
                      width={24}
                      height={24}
                      className="self-center w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]"
                    />
                  ) : (
                    <Image
                      src="/heroItInfra/DownDark.png"
                      alt="Down Arrow"
                      width={24}
                      height={24}
                      className="self-center w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]"
                    />
                  )}
                </div>
              </div>
              
              {/* Details content */}
              {operationsDetailsExpanded && (
                <div className="bg-[#C5CED5] shadow-xl w-[calc(100%-40px)] lg:w-[1110px] ml-[40px] lg:ml-[105px] p-4 lg:p-6 transition-all duration-300 ease-in-out">
                  <p className="text-[12px] lg:text-base text-corvidian-1">
                    Layanan manajemen data dan pemeliharaan sistem kami memastikan aplikasi dan data Anda tetap aman, 
                    terorganisir, dan berjalan optimal untuk mendukung kebutuhan bisnis.
                  </p>
                  <ul className="list-disc pl-5 mt-4 mb-4 text-[12px] lg:text-base text-corvidian-1">
                    <li className="mb-2">Database design & optimization</li>
                    <li className="mb-2">Data migration & integration services</li>
                    <li className="mb-2">System monitoring & performance tuning</li>
                    <li className="mb-2">Regular updates & bug fixes</li>
                    <li>Technical support & system maintenance</li>
                  </ul>
                  <div className="h-[40px] w-[130px] rounded-4xl flex items-center justify-center" style={{background:"linear-gradient(to right, #02C2B3, #1D1F26, #1D1F26, #1578CB)"}}>
                    <Button variant="outline" size="sm" className="text-[12px] text-black font-bold w-fit rounded-2xl">
                      <Link href='/digital-service' className='pointer'>Konsultasi Gratis</Link>
                    </Button>
                  </div>
                </div>
              )}
              
              {/* FAQ section */}
              <div className="bg-[#C5CED5] shadow-xl w-[calc(100%-40px)] lg:w-[1110px] ml-[40px] lg:ml-[105px] h-[60px] flex items-center mt-2">
                <p className="ml-6 lg:ml-8 text-[12px] lg:text-[18px] text-corvidian-1 font-bold my-auto flex-grow pr-4">
                  Pertanyaan yang sering ditanyakan (FAQ)
                </p>
                <div className="mr-[15px] lg:mr-[30px] cursor-pointer flex-shrink-0" onClick={() => setOperationsFAQExpanded(!operationsFAQExpanded)}>
                  {operationsFAQExpanded ? (
                    <Image
                      src="/heroItInfra/UpDark.png"
                      alt="Up Arrow"
                      width={24}
                      height={24}
                      className="self-center w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]"
                    />
                  ) : (
                    <Image
                      src="/heroItInfra/DownDark.png"
                      alt="Down Arrow"
                      width={24}
                      height={24}
                      className="self-center w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]"
                    />
                  )}
                </div>
              </div>
              
              {/* FAQ content */}
              {operationsFAQExpanded && (
                <div className="bg-[#C5CED5] shadow-xl w-[calc(100%-40px)] lg:w-[1110px] ml-[40px] lg:ml-[105px] p-4 lg:p-6 transition-all duration-300 ease-in-out">
                  <div className="mb-4">
                    <h3 className="font-bold text-[12px] lg:text-sm mb-2">Bagaimana cara melakukan backup data aplikasi?</h3>
                    <p className="text-[12px] lg:text-sm">Kami menyediakan automated backup solution dengan scheduling rutin dan multiple backup points untuk data recovery.</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-bold text-[12px] lg:text-sm mb-2">Apakah ada SLA untuk system maintenance?</h3>
                    <p className="text-[12px] lg:text-sm">Ya, kami menyediakan SLA yang jelas dengan guaranteed uptime dan response time untuk critical issues.</p>
                  </div>
                  <div className="h-[40px] w-[130px] rounded-4xl flex items-center justify-center" style={{background:"linear-gradient(to right, #02C2B3, #1D1F26, #1D1F26, #1578CB)"}}>
                    <Button variant="outline" size="sm" className="text-[12px] text-black font-bold w-fit rounded-2xl">
                      <Link href='/digital-service' className='pointer'>Konsultasi Gratis</Link>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
    </div>
  )
}

export default ContentDigital
