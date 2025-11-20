import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CardFull = () => {
  return (
    <section className="w-full px-6 lg:px-8">
      <div className="max-w-[1500px] mx-auto">
        <div className="flex flex-wrap gap-10 justify-start">
          {/* Card 1: Human Capital */}
          <Link href="/konsultasi" className="w-[280px] flex-shrink-0">
            <div className="bg-[linear-gradient(360deg,#FFFFFF_0%,#C5CED5_100%)] rounded-3xl shadow-lg overflow-hidden relative h-[500px] flex items-end hover:scale-105 transition-transform duration-300">
              <div className="absolute left-0 top-0 h-full">
                <Image
                  src="/project/orang.png"
                  alt="Orang"
                  width={200}
                  height={400}
                  quality={100}
                  className="h-full w-auto object-cover object-left"
                />
              </div>
              <div className="absolute bottom-6 right-6 text-right z-10">
                <h3 className="text-corvidian-1 font-extrabold text-xl leading-tight mb-2">
                  Human
                  <br />
                  Capital
                  <br />
                  Internal
                  <br />
                  <span className="text-corvidian-2">System</span>
                </h3>
                <p className="text-corvidian-1 text-xs underline">
                  Pelajari lebih lanjut
                </p>
              </div>
            </div>
          </Link>

          {/* Card 2: Recruitment */}
          <Link href="/konsultasi" className="w-[280px] flex-shrink-0">
            <div className="bg-[linear-gradient(198.08deg,#02C2B3_-19.55%,#1D1F26_17.7%,#1D1F26_46.65%,#1578CB_95.15%)] rounded-3xl shadow-lg overflow-hidden relative h-[500px] hover:scale-105 transition-transform duration-300">
              <div className="absolute bottom-0 left-0 w-full h-[75%]">
                <Image
                  src="/project/duduk.png"
                  alt="Duduk"
                  width={280}
                  height={240}
                  quality={100}
                  className="w-full h-full object-cover object-bottom"
                />
              </div>
              <div className="absolute top-6 left-6 text-left">
                <h3 className="text-white font-extrabold text-xl leading-tight mb-2">
                  Recruitment
                  <br />
                  <span className="text-corvidian-2">System</span>
                </h3>
                <p className="text-white text-xs underline">
                  Pelajari lebih lanjut
                </p>
              </div>
            </div>
          </Link>

          {/* Card 3: Library */}
          <Link href="/konsultasi" className="w-[280px] flex-shrink-0">
            <div className="bg-[linear-gradient(90deg,#FFFFFF_0%,#C5CED5_100%)] rounded-3xl shadow-lg overflow-hidden relative h-[500px] hover:scale-105 transition-transform duration-300">
              <div className="absolute top-0 left-0 w-full h-[55%]">
                <Image
                  src="/project/library.png"
                  alt="Library"
                  width={280}
                  height={220}
                  quality={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-6 left-6 text-left">
                <h3 className="text-corvidian-1 font-extrabold text-2xl leading-tight mb-2">
                  Library
                  <br />
                  <span className="text-corvidian-2">System</span>
                </h3>
                <p className="text-corvidian-1 text-xs underline">
                  Pelajari lebih lanjut
                </p>
              </div>
            </div>
          </Link>

          {/* Card 4: Project Management */}
          <Link href="/konsultasi" className="w-[280px] flex-shrink-0">
            <div className="bg-[linear-gradient(142.7deg,#02C2B3_-28.02%,#1D1F26_17.75%,#1D1F26_62.27%,#1578CB_124.5%)] rounded-3xl overflow-hidden relative h-[500px] hover:scale-105 transition-transform duration-300">
              <div className="absolute bottom-0 left-0 w-full h-[70%]">
                <Image
                  src="/project/management.png"
                  alt="Management"
                  width={280}
                  height={200}
                  quality={100}
                  className="w-full h-full object-cover object-bottom"
                />
              </div>
              <div className="absolute top-6 left-6 text-left">
                <h3 className="text-white font-extrabold text-xl leading-tight mb-2">
                  Project
                  <br />
                  Management
                  <br />
                  <span className="text-corvidian-2">System</span>
                </h3>
                <p className="text-white text-xs underline">
                  Pelajari lebih lanjut
                </p>
              </div>
            </div>
          </Link>

          {/* Card 5: E-Sign (Baris ke-2) */}
          <Link href="/konsultasi" className="w-[280px] flex-shrink-0">
            <div className="bg-[linear-gradient(142.7deg,#02C2B3_-28.02%,#1D1F26_17.75%,#1D1F26_62.27%,#1578CB_124.5%)] rounded-3xl overflow-hidden relative h-[500px] hover:scale-105 transition-transform duration-300">
              <div className="absolute bottom-0 left-0 w-full h-[70%]">
                <Image
                  src="/project/esign.png"
                  alt="E-Sign"
                  width={280}
                  height={280}
                  quality={100}
                  className="w-full h-full object-cover object-bottom"
                />
              </div>
              <div className="absolute top-6 left-6 text-left">
                <h3 className="text-white font-extrabold text-xl leading-tight mb-2">
                  E-Sign
                  <br />
                  <span className="text-corvidian-2">System</span>
                </h3>
                <p className="text-white text-xs underline">
                  Pelajari lebih lanjut
                </p>
              </div>
            </div>
          </Link>

          {/* Card 8: Timesheet */}
          <Link href="/konsultasi" className="w-[280px] flex-shrink-0">
            <div className="bg-[linear-gradient(360deg,#FFFFFF_0%,#C5CED5_100%)] rounded-3xl overflow-hidden relative h-[500px] hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0">
                <Image
                  src="/project/office.png"
                  alt="Timesheet"
                  width={280}
                  height={500}
                  quality={100}
                  className="h-auto w-full object-cover object-right translate-y-11"
                />
              </div>
              <div className="absolute top-6 left-6 text-left">
                <h3 className="text-corvidian-1 font-extrabold text-xl leading-tight mb-2">
                  Officer 
                  <br />
                  Operation
                  <br />
                  <span className="text-corvidian-2">System</span>
                </h3>
                <p className="text-corvidian-1 text-xs underline">
                  Pelajari lebih lanjut
                </p>
              </div>
            </div>
          </Link>

          {/* Card 7: Business Trip */}
          <Link href="/konsultasi" className="w-[280px] flex-shrink-0">
            <div className="bg-[linear-gradient(142.7deg,#02C2B3_-28.02%,#1D1F26_17.75%,#1D1F26_62.27%,#1578CB_124.5%)] rounded-3xl overflow-hidden relative h-[500px] hover:scale-105 transition-transform duration-300">
              <div className="absolute bottom-0 left-0 w-full h-[70%]">
                <Image
                  src="/project/bus.png"
                  alt="Bus"
                  width={280}
                  height={280}
                  quality={100}
                  className="w-full h-full object-cover object-bottom"
                />
              </div>
              <div className="absolute top-6 left-6 text-left">
                <h3 className="text-white font-extrabold text-xl leading-tight mb-2">
                  Timesheet
                  <br />
                  <span className="text-corvidian-2">System</span>
                </h3>
                <p className="text-white text-xs underline">
                  Pelajari lebih lanjut
                </p>
              </div>
            </div>
          </Link>

          {/* Card 9: Document Print Management (Baris ke-3) */}
          <Link href="/konsultasi" className="w-[280px] flex-shrink-0">
            <div className="bg-[linear-gradient(360deg,#FFFFFF_0%,#C5CED5_100%)] rounded-3xl shadow-lg overflow-hidden relative h-[500px] hover:scale-105 transition-transform duration-300">
              <div className="absolute bottom-0 left-0 w-full h-[65%]">
                <Image
                  src="/project/timesheet.png"
                  alt="Timesheet"
                  width={280}
                  height={100}
                  quality={100}
                  className="w-full h-full object-cover object-bottom"
                />
              </div>
              <div className="absolute top-6 left-6 text-left">
                <h3 className="text-corvidian-1 font-extrabold text-xl leading-tight mb-2">
                  Document Print
                  <br />
                  Management
                  <br />
                  <span className="text-corvidian-2">System</span>
                </h3>
                <p className="text-corvidian-1 text-xs underline">
                  Pelajari lebih lanjut
                </p>
              </div>
            </div>
          </Link>

          {/* Card 9: Document Print Management (Baris ke-3) */}
          <Link href="/konsultasi" className="w-[280px] flex-shrink-0">
            <div className="bg-[linear-gradient(360deg,#FFFFFF_0%,#C5CED5_100%)] rounded-3xl shadow-lg overflow-hidden relative h-[500px] hover:scale-105 transition-transform duration-300">
              <div className="absolute bottom-0 left-0 w-full h-[65%]">
                <Image
                  src="/project/print.png"
                  alt="Print"
                  width={280}
                  height={100}
                  quality={100}
                  className="w-full h-full object-cover object-bottom"
                />
              </div>
              <div className="absolute top-6 left-6 text-left">
                <h3 className="text-corvidian-1 font-extrabold text-xl leading-tight mb-2">
                  Document Print
                  <br />
                  Management
                  <br />
                  <span className="text-corvidian-2">System</span>
                </h3>
                <p className="text-corvidian-1 text-xs underline">
                  Pelajari lebih lanjut
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CardFull