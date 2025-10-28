import React from 'react'
import Image from 'next/image'

const MucNet = () => {
  return (
    <section className="w-full relative">
          <div className="flex flex-row mb-[100px]">
            <div className="flex flex-col w-1/2">
              {/* Judul Section */}
              <div 
                className="relative" 
                style={{
                  backgroundImage: 'url(/tentangkami/shape.png)', 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center', 
                  height: '550.84px'
                }}
              >
                <div className="relative top-[70px] flex flex-col ms-[100px]">
                  <p className="text-xl max-sm:max-w-[330px] md:text-3xl font-extrabold text-white leading-tight max-[350px]:text-2xl max-[350px]:!max-w-[250px]">
                    MUC Net 
                  </p>
                  <p className="text-xl max-sm:max-w-[330px] md:text-3xl font-extrabold text-corvidian-3 leading-tight max-[350px]:text-2xl max-[350px]:!max-w-[250px]">
                    Apps
                  </p>
                </div>
                {/* Foto Portofolio - Dapat diganti (Horizontal) */}
                <div className="absolute flex flex-row gap-3 ms-[180px] top-[190px]">
                    <Image
                      src='/portofolio/hp1.png'
                      alt="Portfolio Main Image"
                      width={160}
                      height={185}
                      style={{zIndex: 0}}
                      className="object-contain"
                    />
                    <Image
                      src='/portofolio/hp1.png'
                      alt="Portfolio Main Image"
                      width={160}
                      height={184}
                      style={{zIndex: 0}}
                      className="object-contain"
                    />
                </div>
              </div>
            </div>
    
            <div className="relative flex flex-col w-1/2 pe-[50px] top-[70px] gap-[25px]">
              <div className="flex flex-row justify-between">
                <h1 className="text-xl max-sm:max-w-[330px] md:text-3xl font-extrabold text-corvidian-1 leading-tight max-[350px]:text-2xl max-[350px]:!max-w-[250px]">
                  Gambaran Umum
                </h1>
                {/* Foto Environment - Fixed/Tidak dapat diganti */}
                <div className="flex flex-row gap-3 ">
                    <Image
                      src='/portofolio/php.png'
                      alt='PHP Logo'
                      width={74}
                      height={39}
                      style={{zIndex: 0}}
                      className="object-contain"
                    />
                    <Image
                      src='/portofolio/Laravel.png'
                      alt='Laravel Logo'
                      width={61}
                      height={53}
                      style={{zIndex: 0}}
                      className="object-contain"
                    />
                    <Image
                      src='/portofolio/MySQL.png'
                      alt={'MySQL Logo'}
                      width={70}
                      height={36}
                      style={{zIndex: 0}}
                      className="object-contain"
                    />
                    <Image
                      src='/portofolio/Bootstrap.png'
                      alt={'Bootstrap Logo'}
                      width={37}
                      height={47}
                      style={{zIndex: 0}}
                      className="object-contain"
                    />
                </div>
              </div>
    
              {/* Deskripsi Section */}
              <p className='text-[14px] pt-4 text-justify text-black'>
                MUC Net Apps adalah aplikasi mobile yang terintegrasi dengan sistem web base MUC Net, dirancang untuk memudahkan karyawan mengelola kebutuhan kerja harian secara lebih praktis, kapan pun dan di mana pun. Fitur utama meliputi pengisian dan pemantauan timesheet, pencatatan jam kerja, absensi, serta riwayat aktivitas yang dapat diakses langsung dari ponsel. Aplikasi ini juga menghadirkan fungsi penting seperti Approval administratif, pengajuan cuti, unlock timesheet, rencana lembur, event attendance, dan pemesanan ruang meeting. Dengan tampilan sederhana dan interaktif, MUC Net Apps menyederhanakan proses administrasi, menjaga transparansi, dan meningkatkan kenyamanan kerja bagi seluruh karyawan. Untuk mendukung kinerja optimal, MUC Net Apps dibangun dengan Laravel pada backend sebagai pengelola data yang stabil dan Next.js pada frontend untuk pengalaman pengguna yang responsif. MySQL digunakan sebagai basis data yang aman, sedangkan TailwindCSS dan Bootstrap menjaga konsistensi antarmuka di berbagai perangkat mobile. Infrastruktur AWS Cloud memastikan performa tinggi, keamanan terjamin, serta kemampuan skalabilitas sesuai kebutuhan perusahaan. Dengan kombinasi ini, MUC Net Apps menjadi solusi digital efisien yang meningkatkan produktivitas, transparansi, dan kenyamanan kerja sehari-hari.

              </p>
            </div>
          </div>

        </section>
  )
}

export default MucNet