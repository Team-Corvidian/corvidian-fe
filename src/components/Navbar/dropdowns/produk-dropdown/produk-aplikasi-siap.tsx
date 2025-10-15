import React from 'react'
import Image from 'next/image'

const ProdukAplikasiSiap = () => {

    const operationsGeneral = [
    {
      icon: "/navbar/produk/business-travel-system.png",
      title: "Operations & General",
      description: "Business Travel System",
    },
    {
      icon: "/navbar/produk/office-operations-system.png",
      title: "Operations & General",
      description: "Office Operations System",
    },
    {
      icon: "/navbar/produk/document-print-management.png",
      title: "Operations & General",
      description: "Document Print Management System",
    },
  ];

  // Aplikasi Siap Pakai - Human Capital
  const humanCapital = [
    {
      icon: "/navbar/produk/timesheet-system.png",
      title: "Human Capital",
      description: "Timesheet System",
    },
    {
      icon: "/navbar/produk/recruitment-system.png",
      title: "Human Capital",
      description: "Recruitment System",
    },
    {
      icon: "/navbar/produk/human-capital-internal-system.png",
      title: "Human Capital",
      description: "Human Capital Internal System",
    },
  ];

  // Aplikasi Siap Pakai - Information
  const information = [
    {
      icon: "/navbar/produk/project-management.png",
      title: "Information",
      description: "Project Management",
    },
    {
      icon: "/navbar/produk/library-system.png",
      title: "Information",
      description: "Library System",
    },
  ];

  // Aplikasi Siap Pakai - Design System
  const designSystem = [
    {
      icon: "/navbar/produk/desain-sistem.png",
      title: "Design System",
      description: "Design System",
    },
  ];


  return (
    <div className="flex flex-row w-full mt-[10px] justify-between gap-4">
    {/* Column 1 - Operations & General */}
                  <div className="mt-6 space-y-4 flex flex-col gap-[10px]">
                    {operationsGeneral.map((service, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <Image 
                            src={service.icon} 
                            alt={service.description}
                            width={18}
                            height={18}
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-[12px] font-bold leading-tight" style={{ color: '#0D99FF' }}>
                            {service.title}
                          </h3>
                          <p className="text-[12px] text-white leading-tight mt-1">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Column 2 - Human Capital */}
                  <div className="mt-6 space-y-4 flex flex-col gap-[10px]">
                    {humanCapital.map((service, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <Image 
                            src={service.icon} 
                            alt={service.description}
                            width={18}
                            height={18}
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-[12px] font-bold leading-tight" style={{ color: '#0D99FF' }}>
                            {service.title}
                          </h3>
                          <p className="text-[12px] text-white leading-tight mt-1">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Column 3 - Information */}
                  <div className="mt-6 space-y-4 flex flex-col gap-[10px]">
                    {information.map((service, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <Image 
                            src={service.icon} 
                            alt={service.description}
                            width={18}
                            height={18}
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-[12px] font-bold leading-tight" style={{ color: '#0D99FF' }}>
                            {service.title}
                          </h3>
                          <p className="text-[12px] text-white leading-tight mt-1">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Column 4 - Design System */}
                  <div className="mt-6 space-y-4 flex flex-col gap-[10px]">
                    {designSystem.map((service, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <Image 
                            src={service.icon} 
                            alt={service.description}
                            width={18}
                            height={18}
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-[12px] font-bold leading-tight" style={{ color: '#0D99FF' }}>
                            {service.title}
                          </h3>
                          <p className="text-[12px] text-white leading-tight mt-1">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
    </div>
  )
}

export default ProdukAplikasiSiap
