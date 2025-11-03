"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import Image from 'next/image'
import Link from 'next/link'
import { GlobalSearchWidget } from "@/components/search/global-search-widget";

const ContentIt = () => {
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
        <div className="text-sm top-[100px] lg:text-lg text-corvidian-1 leading-relaxed max-w-2xl font-medium">
          <p>Cari berdasarkan kata kunci</p>
        </div>
        <GlobalSearchWidget />

        <div className="mt-[80px]">
          <p className="text-sm lg:text-[33px] text-corvidian-1 leading-relaxed max-w-2xl font-bold">
            Rincian Solusi Berbasis IT Infrastructure
          </p>
          <p className="text-sm lg:text-l text-corvidian-1 leading-relaxed max-w-2xl">
            Berbagai jenis bisnis sudah memberikan testimoni, sekarang giliran kamu untuk menentukan!
          </p>
        </div>

        {/* Section 1: Infrastructure Setup & Management */}
        <div className="mt-[80px]">
          <div className="bg-white shadow-xl w-full h-[60px] flex items-center">
            <div className="ml-[50px] w-[4px] h-[60%] bg-[#1578CB] self-center"/>
            <p className="ml-[50px] text-sm lg:text-[18px] text-corvidian-1 font-bold my-auto flex-grow">
              Pengaturan & Pengelolaan Infrastruktur IT (IT Infrastructure Setup & Management) 
            </p>
            <div className="mr-[30px] cursor-pointer" onClick={() => setInfrastructureExpanded(!infrastructureExpanded)}>
              {infrastructureExpanded ? (
                <Image
                  src="/heroItInfra/Up.png"
                  alt="Up Arrow"
                  width={24}
                  height={24}
                  className="self-center"
                />
              ) : (
                <Image
                  src="/heroItInfra/Down.png"
                  alt="Down Arrow"
                  width={24}
                  height={24}
                  className="self-center"
                />
              )}
            </div>
          </div>
          
          {/* Expandable content for Infrastructure */}
          {infrastructureExpanded && (
            <div className="mt-2 flex flex-col ">
              {/* Details section */}
              <div className="bg-[#C5CED5] shadow-xl w-[1110px] ml-[105px] h-[60px] flex items-center">
                <p className="ml-6 text-sm lg:text-[18px] text-corvidian-1 font-bold my-auto flex-grow">
                  Rincian layanan 
                </p>
                <div className="mr-[30px] cursor-pointer" onClick={() => setInfrastructureDetailsExpanded(!infrastructureDetailsExpanded)}>
                  {infrastructureDetailsExpanded ? (
                    <Image
                      src="/heroItInfra/UpDark.png"
                      alt="Up Arrow"
                      width={24}
                      height={24}
                      className="self-center"
                    />
                  ) : (
                    <Image
                      src="/heroItInfra/DownDark.png"
                      alt="Down Arrow"
                      width={24}
                      height={24}
                      className="self-center"
                    />
                  )}
                </div>
              </div>
              
              {/* Details content */}
              {infrastructureDetailsExpanded && (
                <div className="bg-[#C5CED5] shadow-xl w-[1110px] ml-[105px] p-6 transition-all duration-300 ease-in-out">
                  <p className="text-sm lg:text-base text-corvidian-1">
                    Layanan IT Infrastructure kami mencakup perencanaan, implementasi, dan pemeliharaan infrastruktur teknologi 
                    informasi yang komprehensif untuk mendukung operasi bisnis Anda.
                  </p>
                  <ul className="list-disc pl-5 mt-4 mb-4 text-sm lg:text-base text-corvidian-1">
                    <li className="mb-2">Desain dan implementasi jaringan</li>
                    <li className="mb-2">Manajemen server dan virtualisasi</li>
                    <li className="mb-2">Solusi penyimpanan dan backup data</li>
                    <li className="mb-2">Infrastruktur keamanan IT</li>
                    <li>Layanan cloud dan hybrid cloud</li>
                  </ul>
                  {/* New Button - Improved gradient border button */}
                  <div className="h-[40px] w-[130px] rounded-4xl flex items-center justify-center" style={{background:"linear-gradient(to right, #02C2B3, #1D1F26, #1D1F26, #1578CB)"}}>
                    <Button variant="outline" size="sm" className=" text-[12px] text-black font-bold w-fit rounded-2xl">
                      <Link href='/it-infrastructure' className='pointer'>Konsultasi Gratis</Link>
                    </Button>
                  </div>
                </div>
                )}
              
              {/* FAQ section */}
              <div className="bg-[#C5CED5] shadow-xl w-[1110px] ml-[105px] h-[60px] flex items-center mt-2">
                <p className="ml-6 text-sm lg:text-[18px] text-corvidian-1 font-bold my-auto flex-grow">
                  Pertanyaan yang sering ditanyakan (FAQ)
                </p>
                <div className="mr-[30px] cursor-pointer" onClick={() => setInfrastructureFAQExpanded(!infrastructureFAQExpanded)}>
                  {infrastructureFAQExpanded ? (
                    <Image
                      src="/heroItInfra/UpDark.png"
                      alt="Up Arrow"
                      width={24}
                      height={24}
                      className="self-center"
                    />
                  ) : (
                    <Image
                      src="/heroItInfra/DownDark.png"
                      alt="Down Arrow"
                      width={24}
                      height={24}
                      className="self-center"
                    />
                  )}
                </div>
              </div>
              
              {/* FAQ content */}
              {infrastructureFAQExpanded && (
                <div className="bg-[#C5CED5] shadow-xl w-[1110px] ml-[105px] p-6 transition-all duration-300 ease-in-out">
                  <div className="mb-4">
                    <h3 className="font-bold text-sm mb-2">Berapa lama waktu yang dibutuhkan untuk setup infrastruktur IT?</h3>
                    <p className="text-sm">Waktu setup bervariasi tergantung pada kompleksitas dan skala proyek, biasanya antara 2-6 minggu.</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-bold text-sm mb-2">Apakah layanan maintenance termasuk dalam paket?</h3>
                    <p className="text-sm">Ya, kami menyediakan layanan maintenance sebagai bagian dari kontrak layanan berkelanjutan.</p>
                  </div>
                  <div className="h-[40px] w-[130px] rounded-4xl flex items-center justify-center" style={{background:"linear-gradient(to right, #02C2B3, #1D1F26, #1D1F26, #1578CB)"}}>
                    <Button variant="outline" size="sm" className=" text-[12px] text-black font-bold w-fit rounded-2xl">
                      <Link href='/it-infrastructure' className='pointer'>Konsultasi Gratis</Link>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}    
        </div>

        {/* Section 2: Security & Data Protection */}
        <div className="mt-[20px]">
          <div className="bg-white shadow-xl w-full h-[60px] flex items-center">
            <div className="ml-[50px] w-[4px] h-[60%] bg-[#1578CB] self-center"/>
            <p className="ml-[50px] text-sm lg:text-[18px] text-corvidian-1 font-bold my-auto flex-grow">
              Keamanan Sistem & Data (Security & Data Protection)
            </p>
            <div className="mr-[30px] cursor-pointer" onClick={() => setSecurityExpanded(!securityExpanded)}>
              {securityExpanded ? (
                <Image
                  src="/heroItInfra/Up.png"
                  alt="Up Arrow"
                  width={24}
                  height={24}
                  className="self-center"
                />
              ) : (
                <Image
                  src="/heroItInfra/Down.png"
                  alt="Down Arrow"
                  width={24}
                  height={24}
                  className="self-center"
                />
              )}
            </div>
          </div>
          
          {/* Expandable content for Security */}
          {securityExpanded && (
            <div className="mt-2 flex flex-col ">
              {/* Details section */}
              <div className="bg-[#C5CED5] shadow-xl w-[1110px] ml-[105px] h-[60px] flex items-center">
                <p className="ml-6 text-sm lg:text-[18px] text-corvidian-1 font-bold my-auto flex-grow">
                  Rincian layanan 
                </p>
                <div className="mr-[30px] cursor-pointer" onClick={() => setSecurityDetailsExpanded(!securityDetailsExpanded)}>
                  {securityDetailsExpanded ? (
                    <Image
                      src="/heroItInfra/UpDark.png"
                      alt="Up Arrow"
                      width={24}
                      height={24}
                      className="self-center"
                    />
                  ) : (
                    <Image
                      src="/heroItInfra/DownDark.png"
                      alt="Down Arrow"
                      width={24}
                      height={24}
                      className="self-center"
                    />
                  )}
                </div>
              </div>
              
              {/* Details content */}
              {securityDetailsExpanded && (
                <div className="bg-[#C5CED5] shadow-xl w-[1110px] ml-[105px] p-6 transition-all duration-300 ease-in-out">
                  <p className="text-sm lg:text-base text-corvidian-1">
                    Kami menyediakan solusi keamanan komprehensif untuk melindungi aset digital Anda dari ancaman cyber. 
                    Dengan meningkatnya serangan siber, melindungi data dan infrastruktur menjadi prioritas utama.
                  </p>
                  <ul className="list-disc pl-5 mt-4 mb-4 text-sm lg:text-base text-corvidian-1">
                    <li className="mb-2">Penilaian risiko keamanan dan audit</li>
                    <li className="mb-2">Implementasi firewall dan solusi anti-malware</li>
                    <li className="mb-2">Enkripsi data dan manajemen identitas</li>
                    <li className="mb-2">Deteksi intrusi dan monitoring keamanan 24/7</li>
                    <li>Perencanaan pemulihan bencana dan kontinuitas bisnis</li>
                  </ul>
                  <div className="h-[40px] w-[130px] rounded-4xl flex items-center justify-center" style={{background:"linear-gradient(to right, #02C2B3, #1D1F26, #1D1F26, #1578CB)"}}>
                    <Button variant="outline" size="sm" className=" text-[12px] text-black font-bold w-fit rounded-2xl">
                      <Link href='/it-infrastructure' className='pointer'>Konsultasi Gratis</Link>
                    </Button>
                  </div>
                </div>
              )}
              
              {/* FAQ section */}
              <div className="bg-[#C5CED5] shadow-xl w-[1110px] ml-[105px] h-[60px] flex items-center mt-2">
                <p className="ml-6 text-sm lg:text-[18px] text-corvidian-1 font-bold my-auto flex-grow">
                  Pertanyaan yang sering ditanyakan (FAQ)
                </p>
                <div className="mr-[30px] cursor-pointer" onClick={() => setSecurityFAQExpanded(!securityFAQExpanded)}>
                  {securityFAQExpanded ? (
                    <Image
                      src="/heroItInfra/UpDark.png"
                      alt="Up Arrow"
                      width={24}
                      height={24}
                      className="self-center"
                    />
                  ) : (
                    <Image
                      src="/heroItInfra/DownDark.png"
                      alt="Down Arrow"
                      width={24}
                      height={24}
                      className="self-center"
                    />
                  )}
                </div>
              </div>
              
              {/* FAQ content */}
              {securityFAQExpanded && (
                <div className="bg-[#C5CED5] shadow-xl w-[1110px] ml-[105px] p-6 transition-all duration-300 ease-in-out">
                  <div className="mb-4">
                    <h3 className="font-bold text-sm mb-2">Seberapa sering audit keamanan perlu dilakukan?</h3>
                    <p className="text-sm">Kami merekomendasikan audit keamanan komprehensif setidaknya setiap 6 bulan, dengan pemantauan berkelanjutan.</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-bold text-sm mb-2">Apa standar keamanan yang Anda terapkan?</h3>
                    <p className="text-sm">Kami mengikuti standar industri seperti ISO 27001, NIST, dan praktik terbaik keamanan siber terkini.</p>
                  </div>
                  <div className="h-[40px] w-[130px] rounded-4xl flex items-center justify-center" style={{background:"linear-gradient(to right, #02C2B3, #1D1F26, #1D1F26, #1578CB)"}}>
                    <Button variant="outline" size="sm" className=" text-[12px] text-black font-bold w-fit rounded-2xl">
                      <Link href='/it-infrastructure' className='pointer'>Konsultasi Gratis</Link>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Section 3: Operations & Support */}
        <div className="mt-[20px] mb-[80px]">
          <div className="bg-white shadow-xl w-full h-[60px] flex items-center">
            <div className="ml-[50px] w-[4px] h-[60%] bg-[#1578CB] self-center"/>
            <p className="ml-[50px] text-sm lg:text-[18px] text-corvidian-1 font-bold my-auto flex-grow">
              Operasional & Dukungan Teknis (Operations & Support)
            </p>
            <div className="mr-[30px] cursor-pointer" onClick={() => setOperationsExpanded(!operationsExpanded)}>
              {operationsExpanded ? (
                <Image
                  src="/heroItInfra/Up.png"
                  alt="Up Arrow"
                  width={24}
                  height={24}
                  className="self-center"
                />
              ) : (
                <Image
                  src="/heroItInfra/Down.png"
                  alt="Down Arrow"
                  width={24}
                  height={24}
                  className="self-center"
                />
              )}
            </div>
          </div>
          
          {/* Expandable content for Operations */}
          {operationsExpanded && (
            <div className="mt-2 flex flex-col ">
              {/* Details section */}
              <div className="bg-[#C5CED5] shadow-xl w-[1110px] ml-[105px] h-[60px] flex items-center">
                <p className="ml-6 text-sm lg:text-[18px] text-corvidian-1 font-bold my-auto flex-grow">
                  Rincian layanan 
                </p>
                <div className="mr-[30px] cursor-pointer" onClick={() => setOperationsDetailsExpanded(!operationsDetailsExpanded)}>
                  {operationsDetailsExpanded ? (
                    <Image
                      src="/heroItInfra/UpDark.png"
                      alt="Up Arrow"
                      width={24}
                      height={24}
                      className="self-center"
                    />
                  ) : (
                    <Image
                      src="/heroItInfra/DownDark.png"
                      alt="Down Arrow"
                      width={24}
                      height={24}
                      className="self-center"
                    />
                  )}
                </div>
              </div>
              
              {/* Details content */}
              {operationsDetailsExpanded && (
                <div className="bg-[#C5CED5] shadow-xl w-[1110px] ml-[105px] p-6 transition-all duration-300 ease-in-out">
                  <p className="text-sm lg:text-base text-corvidian-1">
                    Tim operasional kami menyediakan dukungan teknis berkelanjutan dan layanan pengelolaan untuk memastikan 
                    sistem IT Anda berjalan dengan lancar.
                  </p>
                  <ul className="list-disc pl-5 mt-4 mb-4 text-sm lg:text-base text-corvidian-1">
                    <li className="mb-2">Help desk dan dukungan pengguna akhir</li>
                    <li className="mb-2">Pemeliharaan sistem dan pemecahan masalah</li>
                    <li className="mb-2">Manajemen patch dan pembaruan software</li>
                    <li className="mb-2">Monitoring performa dan pelaporan</li>
                    <li>Layanan TI terkelola dan konsultasi strategis</li>
                  </ul>
                  <div className="h-[40px] w-[130px] rounded-4xl flex items-center justify-center" style={{background:"linear-gradient(to right, #02C2B3, #1D1F26, #1D1F26, #1578CB)"}}>
                    <Button variant="outline" size="sm" className=" text-[12px] text-black font-bold w-fit rounded-2xl">
                      <Link href='/it-infrastructure' className='pointer'>Konsultasi Gratis</Link>
                    </Button>
                  </div>
                </div>
              )}
              
              {/* FAQ section */}
              <div className="bg-[#C5CED5] shadow-xl w-[1110px] ml-[105px] h-[60px] flex items-center mt-2">
                <p className="ml-6 text-sm lg:text-[18px] text-corvidian-1 font-bold my-auto flex-grow">
                  Pertanyaan yang sering ditanyakan (FAQ)
                </p>
                <div className="mr-[30px] cursor-pointer" onClick={() => setOperationsFAQExpanded(!operationsFAQExpanded)}>
                  {operationsFAQExpanded ? (
                    <Image
                      src="/heroItInfra/UpDark.png"
                      alt="Up Arrow"
                      width={24}
                      height={24}
                      className="self-center"
                    />
                  ) : (
                    <Image
                      src="/heroItInfra/DownDark.png"
                      alt="Down Arrow"
                      width={24}
                      height={24}
                      className="self-center"
                    />
                  )}
                </div>
              </div>
              
              {/* FAQ content */}
              {operationsFAQExpanded && (
                <div className="bg-[#C5CED5] shadow-xl w-[1110px] ml-[105px] p-6 transition-all duration-300 ease-in-out">
                  <div className="mb-4">
                    <h3 className="font-bold text-sm mb-2">Bagaimana cara mengakses dukungan teknis?</h3>
                    <p className="text-sm">Dukungan tersedia melalui telepon, email, dan portal web 24/7 untuk klien dengan kontrak dukungan.</p>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-bold text-sm mb-2">Berapa lama waktu respon untuk masalah kritis?</h3>
                    <p className="text-sm">Masalah kritis memiliki waktu respon awal kurang dari 15 menit dan penanganan prioritas.</p>
                  </div>
                  <div className="h-[40px] w-[130px] rounded-4xl flex items-center justify-center" style={{background:"linear-gradient(to right, #02C2B3, #1D1F26, #1D1F26, #1578CB)"}}>
                    <Button variant="outline" size="sm" className=" text-[12px] text-black font-bold w-fit rounded-2xl">
                      <Link href='/it-infrastructure' className='pointer'>Konsultasi Gratis</Link>
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

export default ContentIt
