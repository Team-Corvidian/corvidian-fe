"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { GlobalSearchWidget } from '@/components/search/global-search-widget'

const ContentWeb = () => {
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
            Rincian Solusi Berbasis Web Design & Development
          </p>
          <p className="text-[12px] lg:text-l text-corvidian-1 leading-relaxed max-w-2xl">
            Berbagai jenis bisnis sudah memberikan testimoni, sekarang giliran kamu untuk menentukan!
          </p>
        </div>

        {/* Section 1: Pembuatan Website (Company Profile & Landing Page) */}
        <div className="lg:mt-[80px] mt-[40px]">
          <div className="bg-white shadow-xl w-full h-[60px] flex items-center">
            <div className="ml-[20px] lg:ml-[50px] w-[4px] h-[60%] bg-[#1578CB] self-center"/>
            <p className="ml-[20px] lg:ml-[50px] text-[12px] lg:text-[18px] text-corvidian-1 font-bold my-auto flex-grow pr-4 md:w-full w-3/4">
              Pembuatan Website (Company Profile & Landing Page)
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
          
          {/* Expandable content for Website Creation */}
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
                    Layanan pembuatan website kami mencakup desain, development, dan deployment website profesional yang 
                    disesuaikan dengan kebutuhan bisnis Anda untuk meningkatkan presence online.
                  </p>
                  <ul className="list-disc pl-5 mt-4 mb-4 text-[12px] lg:text-base text-corvidian-1">
                    <li className="mb-2">Company Profile Website</li>
                    <li className="mb-2">Landing Page untuk kampanye marketing</li>
                    <li className="mb-2">Responsive design untuk semua device</li>
                    <li className="mb-2">SEO optimization</li>
                    <li>Content Management System (CMS)</li>
                  </ul>
                  <div className="h-[40px] w-[130px] rounded-4xl flex items-center justify-center" style={{background:"linear-gradient(to right, #02C2B3, #1D1F26, #1D1F26, #1578CB)"}}>
                    <Button variant="outline" size="sm" className="text-[12px] text-black font-bold w-fit rounded-2xl">
                      <Link href='/web-service' className='pointer'>Konsultasi Gratis</Link>
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
                    <h3 className="font-bold text-[12px] lg:text-sm mb-2">Berapa lama waktu pembuatan website?</h3>
                    <p className="text-[12px] lg:text-sm">Waktu pembuatan website bervariasi, untuk company profile sederhana biasanya 2-4 minggu, sedangkan landing page 1-2 minggu.</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-bold text-[12px] lg:text-sm mb-2">Apakah website akan mobile-friendly?</h3>
                    <p className="text-[12px] lg:text-sm">Ya, semua website yang kami buat responsive dan mobile-friendly untuk memastikan pengalaman optimal di semua device.</p>
                  </div>
                  <div className="h-[40px] w-[130px] rounded-4xl flex items-center justify-center" style={{background:"linear-gradient(to right, #02C2B3, #1D1F26, #1D1F26, #1578CB)"}}>
                    <Button variant="outline" size="sm" className="text-[12px] text-black font-bold w-fit rounded-2xl">
                      <Link href='/web-service' className='pointer'>Konsultasi Gratis</Link>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Section 2: Desain/Pengalaman Pengguna (UI/UX Website) */}
        <div className="mt-[20px]">
          <div className="bg-white shadow-xl w-full h-[60px] flex items-center">
            <div className="ml-[20px] lg:ml-[50px] w-[4px] h-[60%] bg-[#1578CB] self-center"/>
            <p className="ml-[20px] lg:ml-[50px] text-[12px] lg:text-[18px] text-corvidian-1 font-bold my-auto flex-grow pr-4 md:w-full w-3/4">
              Desain/Pengalaman Pengguna (UI/UX Website) 
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
                    Kami menyediakan layanan desain UI/UX yang user-centric untuk menciptakan pengalaman pengguna yang 
                    intuitif, menarik, dan meningkatkan konversi bisnis Anda.
                  </p>
                  <ul className="list-disc pl-5 mt-4 mb-4 text-[12px] lg:text-base text-corvidian-1">
                    <li className="mb-2">User research dan analisis perilaku pengguna</li>
                    <li className="mb-2">Wireframing dan prototyping</li>
                    <li className="mb-2">Visual design dan branding</li>
                    <li className="mb-2">Usability testing dan iterasi design</li>
                    <li>Design system dan style guide</li>
                  </ul>
                  <div className="h-[40px] w-[130px] rounded-4xl flex items-center justify-center" style={{background:"linear-gradient(to right, #02C2B3, #1D1F26, #1D1F26, #1578CB)"}}>
                    <Button variant="outline" size="sm" className="text-[12px] text-black font-bold w-fit rounded-2xl">
                      <Link href='/web-service' className='pointer'>Konsultasi Gratis</Link>
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
                    <h3 className="font-bold text-[12px] lg:text-sm mb-2">Apa perbedaan UI dan UX?</h3>
                    <p className="text-[12px] lg:text-sm">UI (User Interface) fokus pada tampilan visual, sedangkan UX (User Experience) fokus pada pengalaman dan kemudahan penggunaan secara keseluruhan.</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-bold text-[12px] lg:text-sm mb-2">Apakah bisa redesign website yang sudah ada?</h3>
                    <p className="text-[12px] lg:text-sm">Ya, kami menerima project redesign untuk meningkatkan UI/UX website yang sudah ada dengan pendekatan yang terstruktur.</p>
                  </div>
                  <div className="h-[40px] w-[130px] rounded-4xl flex items-center justify-center" style={{background:"linear-gradient(to right, #02C2B3, #1D1F26, #1D1F26, #1578CB)"}}>
                    <Button variant="outline" size="sm" className="text-[12px] text-black font-bold w-fit rounded-2xl">
                      <Link href='/web-service' className='pointer'>Konsultasi Gratis</Link>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Section 3: Pemeliharaan & Optimalisasi Website */}
        <div className="mt-[20px] lg:mb-[80px] mb-[40px]">
          <div className="bg-white shadow-xl w-full h-[60px] flex items-center">
            <div className="ml-[20px] lg:ml-[50px] w-[4px] h-[60%] bg-[#1578CB] self-center"/>
            <p className="ml-[20px] lg:ml-[50px] text-[12px] lg:text-[18px] text-corvidian-1 font-bold my-auto flex-grow pr-4 md:w-full w-3/4">
              Pemeliharaan & Optimalisasi Website (Website Maintenance & Optimization) 
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
          
          {/* Expandable content for Maintenance */}
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
                    Layanan pemeliharaan dan optimalisasi kami memastikan website Anda tetap aman, cepat, dan 
                    up-to-date untuk memberikan performa terbaik bagi pengguna.
                  </p>
                  <ul className="list-disc pl-5 mt-4 mb-4 text-[12px] lg:text-base text-corvidian-1">
                    <li className="mb-2">Regular updates dan security patches</li>
                    <li className="mb-2">Performance optimization dan speed improvement</li>
                    <li className="mb-2">Backup dan disaster recovery</li>
                    <li className="mb-2">Bug fixes dan technical support</li>
                    <li>Content updates dan feature enhancements</li>
                  </ul>
                  <div className="h-[40px] w-[130px] rounded-4xl flex items-center justify-center" style={{background:"linear-gradient(to right, #02C2B3, #1D1F26, #1D1F26, #1578CB)"}}>
                    <Button variant="outline" size="sm" className="text-[12px] text-black font-bold w-fit rounded-2xl">
                      <Link href='/web-service' className='pointer'>Konsultasi Gratis</Link>
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
                    <h3 className="font-bold text-[12px] lg:text-sm mb-2">Seberapa sering website perlu di-maintenance?</h3>
                    <p className="text-[12px] lg:text-sm">Kami merekomendasikan maintenance rutin bulanan untuk updates dan optimasi, dengan monitoring berkelanjutan 24/7.</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-bold text-[12px] lg:text-sm mb-2">Apa yang termasuk dalam paket maintenance?</h3>
                    <p className="text-[12px] lg:text-sm">Paket maintenance mencakup security updates, performance optimization, backup, bug fixes, dan technical support prioritas.</p>
                  </div>
                  <div className="h-[40px] w-[130px] rounded-4xl flex items-center justify-center" style={{background:"linear-gradient(to right, #02C2B3, #1D1F26, #1D1F26, #1578CB)"}}>
                    <Button variant="outline" size="sm" className="text-[12px] text-black font-bold w-fit rounded-2xl">
                      <Link href='/web-service' className='pointer'>Konsultasi Gratis</Link>
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

export default ContentWeb
