import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button";

const ProdukSolusiLayanan = () => {
    // IT Infrastructure services
  const itInfraServices = [
    {
      icon: "/navbar/produk/pembuatan-instalasi-jaringan.png",
      title: "Pembuatan & Instalasi Jaringan",
      description: "(LAN/WAN, Wireless, dan VLAN)",
    },
    {
      icon: "/navbar/produk/pengaturan-keamanan-perangkat-jaringan.png",
      title: "Pengaturan & Keamanan Perangkat Jaringan",
      description: "(Router, Switch, dan Firewall)",
    },
    {
      icon: "/navbar/produk/pemeliharaan-pemantauan-jaringan.png",
      title: "Pemeliharaan & Pemantauan Jaringan",
      description: "Monitoring dan maintenance",
    },
  ];

  // Web Design & Development services
  const webServices = [
    {
      icon: "/navbar/produk/pembuatan-website.png",
      title: "Pembuatan Website",
      description: "(Company Profile, Landing Page)",
    },
    {
      icon: "/navbar/produk/ui-ux-website.png",
      title: "Desain UI/UX",
      description: "(UI/UX Website)",
    },
    {
      icon: "/navbar/produk/pemeliharaan-optimalisasi-website.png",
      title: "Pemeliharaan & Optimalisasi Website",
      description: "(Maintenance dan Konsultasi)",
    },
  ];

  // Digital Software Solutions services
  const digitalServices = [
    {
      icon: "/navbar/produk/pengembangan-aplikasi.png",
      title: "Pengembangan Aplikasi",
      description: "(LAN/WAN, Wireless, dan VLAN)",
    },
    {
      icon: "/navbar/produk/ui-ux-aplikasi.png",
      title: "Desain UI/UX",
      description: "(UI/UX Aplikasi)",
    },
    {
      icon: "/navbar/produk/pemeliharaan-sistem-manajemen-data.png",
      title: "Pemeliharaan Sistem & Manajemen Data",
      description: "(Perawatan & Manajemen Data)",
    },
  ];

  return (
    <div className="flex flex-row w-full justify-between">
                      {/* IT Infrastructure Services */}
                      <div className="mt-6 space-y-4 flex flex-col gap-[10px]">
                        <Button variant="outline" size="sm" className=" text-[12px] text-black font-bold w-fit rounded-2xl">IT Infrastruktur</Button>
    
                        {itInfraServices.map((service, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="flex-shrink-0">
                              <Image 
                                src={service.icon} 
                                alt={service.title}
                                width={18}
                                height={18}
                                className="object-contain"
                              />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-[12px] font-bold text-white leading-tight">
                                {service.title}
                              </h3>
                              <p className="text-[12px] text-gray-300 leading-tight mt-1">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
    
                      {/* Web Design & Development Services */}
                      <div className="mt-6 space-y-4 flex flex-col gap-[10px]">
                        <Button variant="outline" size="sm" className="text-[12px] text-black font-bold w-fit rounded-2xl">Web Design & Development</Button>
    
                        {webServices.map((service, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="flex-shrink-0">
                              <Image 
                                src={service.icon} 
                                alt={service.title}
                                width={18}
                                height={18}
                                className="object-contain"
                              />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-[12px] font-bold text-white leading-tight">
                                {service.title}
                              </h3>
                              <p className="text-[12px] text-gray-300 leading-tight mt-1">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
    
                      {/* Digital Software Solutions Services */}
                      <div className="mt-6 space-y-4 flex flex-col gap-[10px]">
                        <Button variant="outline" size="sm" className="text-[12px] text-black font-bold w-fit rounded-2xl">Digital Software Solutions</Button>
    
                        {digitalServices.map((service, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="flex-shrink-0">
                              <Image 
                                src={service.icon} 
                                alt={service.title}
                                width={18}
                                height={18}
                                className="object-contain"
                              />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-[12px] font-bold text-white leading-tight">
                                {service.title}
                              </h3>
                              <p className="text-[12px] text-gray-300 leading-tight mt-1">
                                {service.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                </div>
  )
}

export default ProdukSolusiLayanan
