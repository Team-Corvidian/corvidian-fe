"use client"
import React from 'react'
import Image from 'next/image'

const MucNetMobile = () => {
  return (
    <section className="w-full relative mb-16">
      {/* Judul Section dengan Background Shape */}
      <div className="relative mb-8">
        <div 
          className="relative overflow-hidden" 
          style={{
            backgroundImage: 'url(/tentangkami/shape.png)', 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '320px'
          }}
        >
          {/* Title Section */}
          <div className="relative top-8 px-6 flex flex-col gap-1.5">
            <p className="text-lg md:text-xl font-extrabold text-white leading-tight">
              MUC Net
            </p>
            <p className="text-lg md:text-xl font-extrabold text-corvidian-3 leading-tight">
              Apps
            </p>
          </div>
          
          {/* Main Image - Positioned di tengah bawah */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full flex justify-center gap-3">
            <Image
              src='/portofolio/hp1.png'
              alt="MUC Net App Screenshot 1"
              width={88}
              height={102}
              style={{zIndex: 1}}
              className="object-contain"
            />
            <Image
              src='/portofolio/hp2.png'
              alt="MUC Net App Screenshot 2"
              width={88}
              height={101}
              style={{zIndex: 1}}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Gambaran Umum Section */}
      <div className="flex flex-col gap-6 mb-10 px-8">
        {/* Header dengan Technologies */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between items-start">
            <h2 className="text-base md:text-lg font-extrabold text-corvidian-1">
              Gambaran Umum
            </h2>
            
            {/* Technology Icons */}
            <div className="flex flex-row gap-2 items-center flex-wrap justify-end max-w-[180px]">
              <div className="flex-shrink-0">
                <Image
                  src='/portofolio/php.png'
                  alt='PHP Logo'
                  width={74 * 0.55}
                  height={39 * 0.55}
                  style={{zIndex: 0}}
                  className="object-contain"
                />
              </div>
              <div className="flex-shrink-0">
                <Image
                  src='/portofolio/Laravel.png'
                  alt='Laravel Logo'
                  width={61 * 0.55}
                  height={53 * 0.55}
                  style={{zIndex: 0}}
                  className="object-contain"
                />
              </div>
              <div className="flex-shrink-0">
                <Image
                  src='/portofolio/MySQL.png'
                  alt='MySQL Logo'
                  width={70 * 0.55}
                  height={36 * 0.55}
                  style={{zIndex: 0}}
                  className="object-contain"
                />
              </div>
              <div className="flex-shrink-0">
                <Image
                  src='/portofolio/Bootstrap.png'
                  alt='Bootstrap Logo'
                  width={47 * 0.55}
                  height={37 * 0.55}
                  style={{zIndex: 0}}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Deskripsi */}
        <p className='text-xs md:text-sm text-justify text-corvidian-1 leading-relaxed'>
          MUC Net Apps adalah aplikasi mobile yang terintegrasi dengan sistem web base MUC Net, dirancang untuk memudahkan karyawan mengelola kebutuhan kerja harian secara lebih praktis, kapan pun dan di mana pun. Fitur utama meliputi pengisian dan pemantauan timesheet, pencatatan jam kerja, absensi, serta riwayat aktivitas yang dapat diakses langsung dari ponsel. Aplikasi ini juga menghadirkan fungsi penting seperti Approval administratif, pengajuan cuti, unlock timesheet, rencana lembur, event attendance, dan pemesanan ruang meeting. Dengan tampilan sederhana dan interaktif, MUC Net Apps menyederhanakan proses administrasi, menjaga transparansi, dan meningkatkan kenyamanan kerja bagi seluruh karyawan. Untuk mendukung kinerja optimal, MUC Net Apps dibangun dengan Laravel pada backend sebagai pengelola data yang stabil dan Next.js pada frontend untuk pengalaman pengguna yang responsif. MySQL digunakan sebagai basis data yang aman, sedangkan TailwindCSS dan Bootstrap menjaga konsistensi antarmuka di berbagai perangkat mobile. Infrastruktur AWS Cloud memastikan performa tinggi, keamanan terjamin, serta kemampuan skalabilitas sesuai kebutuhan perusahaan. Dengan kombinasi ini, MUC Net Apps menjadi solusi digital efisien yang meningkatkan produktivitas, transparansi, dan kenyamanan kerja sehari-hari.
        </p>
      </div>
    </section>
  )
}

export default MucNetMobile