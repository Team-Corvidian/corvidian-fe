"use client"
import React from 'react'

const ProdukLayanan = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const serviceCategories = [
    {
      title: "IT Infrastructure",
      color: "#ffffff",
      services: [
        {
          icon: "🔗",
          title: "Pembuatan & Instalasi Jaringan",
          subtitle: "(LAN/WAN, Wireless, dan VLAN)"
        },
        {
          icon: "🔒",
          title: "Pengaturan & Keamanan Perangkat Jaringan",
          subtitle: "(Router, Switch, dan Firewall)"
        },
        {
          icon: "🔧",
          title: "Pemeliharaan & Pemantauan Jaringan",
          subtitle: "Monitoring dan maintenance"
        }
      ]
    },
    {
      title: "Web Design & Development",
      color: "#ffffff",
      services: [
        {
          icon: "💻",
          title: "Pembuatan Website",
          subtitle: "(Company dan Landing Page)"
        },
        {
          icon: "🎨",
          title: "Desain UI/UX",
          subtitle: "(UI/UX Website)"
        },
        {
          icon: "📊",
          title: "Pemeliharaan & Optimalisasi Website",
          subtitle: "(Maintenance dan Konsultasi)"
        }
      ]
    },
    {
      title: "Digital Software Solutions",
      color: "#ffffff",
      services: [
        {
          icon: "📱",
          title: "Pengembangan Aplikasi",
          subtitle: "(LAN/WAN, Wireless dan VLAN)"
        },
        {
          icon: "🎨",
          title: "Desain UI/UX",
          subtitle: "(UI/UX Aplikasi)"
        },
        {
          icon: "💾",
          title: "Pemeliharaan Sistem & Manajemen Data",
          subtitle: "(Perawatan & Manajemen Data)"
        }
      ]
    }
  ];

  const readyToUseApps = [
    {
      icon: "🚗",
      title: "Operations & General",
      subtitle: "Business Travel System",
      color: "#1578CB"
    },
    {
      icon: "🏢",
      title: "Operations & General",
      subtitle: "Office Operations System",
      color: "#1578CB"
    },
    {
      icon: "📄",
      title: "Operations & General",
      subtitle: "Document Print Management System",
      color: "#1578CB"
    },
    {
      icon: "👥",
      title: "Human Capital",
      subtitle: "Timesheet System",
      color: "#1578CB"
    },
    {
      icon: "👤",
      title: "Human Capital",
      subtitle: "Recruitment System",
      color: "#1578CB"
    },
    {
      icon: "👥",
      title: "Human Capital",
      subtitle: "Human Capital Internal System",
      color: "#1578CB"
    },
    {
      icon: "📊",
      title: "Information",
      subtitle: "Project Management",
      color: "#1578CB"
    },
    {
      icon: "📚",
      title: "Information",
      subtitle: "Library System",
      color: "#1578CB"
    },
    {
      icon: "⚖️",
      title: "Legal",
      subtitle: "E-Sign System",
      color: "#1578CB"
    }
  ];

  if (!isOpen) return null;

  return (
    <div className='fixed top-[85px] left-0 w-full h-screen z-80'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50' onClick={onClose} />
      
      {/* Dropdown Content - positioned to align with navbar */}
      <div className='relative bg-[#1D1F26] rounded-b-[20px] w-[1109px] mx-auto p-[30px]'>
        {/* Title */}
        <div className='text-center mb-[25px]'>
          <h3 className='font-["Plus_Jakarta_Sans"] font-medium text-[16px] text-[#F4F4F4] mb-[15px]'>
            Solusi Berdasarkan Layanan
          </h3>
        </div>

        {/* Service Categories */}
        <div className='flex gap-[30px] mb-[30px] justify-center'>
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className='w-[280px]'>
              {/* Category Title with Animated Gradient Border */}
              <div className='text-center mb-[15px]'>
                <div className='relative inline-block'>
                  {/* Gradient Border Container */}
                  <div 
                    className='absolute inset-0 rounded-[16px] p-[2px] animate-pulse'
                    style={{
                      background: `linear-gradient(90deg, 
                        #1e3a8a 0%, 
                        transparent 30%, 
                        transparent 70%, 
                        #02C2B3 100%
                      )`,
                      animation: 'gradientMove 3s ease-in-out infinite'
                    }}
                  >
                    <div className='w-full h-full bg-[#1D1F26] rounded-[14px]'></div>
                  </div>
                  
                  {/* Title Content */}
                  <span 
                    className='relative z-10 inline-block px-[16px] py-[6px] rounded-[16px] font-["Plus_Jakarta_Sans"] font-medium text-[12px] text-[#1D1F26]'
                    style={{ backgroundColor: category.color }}
                  >
                    {category.title}
                  </span>
                </div>
              </div>

              {/* Services List */}
              <div className='space-y-[12px]'>
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className='flex items-start gap-[10px] cursor-pointer hover:bg-[#2A2D35] p-[8px] rounded-[6px] transition-colors'>
                    <span className='text-[14px] mt-[2px]'>{service.icon}</span>
                    <div>
                      <h4 className='font-["Plus_Jakarta_Sans"] font-medium text-[12px] text-[#F4F4F4] leading-[120%] mb-[3px]'>
                        {service.title}
                      </h4>
                      <p className='font-["Plus_Jakarta_Sans"] font-normal text-[10px] text-[#B0B0B0] leading-[120%]'>
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Ready-to-Use Applications */}
        <div>
          <h4 className='font-["Plus_Jakarta_Sans"] font-medium text-[14px] text-[#F4F4F4] mb-[15px] text-center'>
            Aplikasi Siap Pakai
          </h4>
          
          <div className='grid grid-cols-3 gap-[15px] max-w-[900px] mx-auto'>
            {readyToUseApps.map((app, appIndex) => (
              <div key={appIndex} className='flex items-center gap-[6px] cursor-pointer hover:bg-[#2A2D35] p-[6px] rounded-[6px] transition-colors'>
                <span className='text-[12px]'>{app.icon}</span>
                <div>
                  <h5 className='font-["Plus_Jakarta_Sans"] font-medium text-[10px] text-[#1578CB] leading-[120%]'>
                    {app.title}
                  </h5>
                  <p className='font-["Plus_Jakarta_Sans"] font-normal text-[9px] text-[#F4F4F4] leading-[120%]'>
                    {app.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom CSS Animation */}
      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background: linear-gradient(90deg, 
              #1e3a8a 0%, 
              transparent 30%, 
              transparent 70%, 
              #02C2B3 100%
            );
          }
          25% {
            background: linear-gradient(90deg, 
              #02C2B3 0%, 
              transparent 30%, 
              transparent 70%, 
              #1e3a8a 100%
            );
          }
          50% {
            background: linear-gradient(90deg, 
              #1e3a8a 0%, 
              #02C2B3 25%, 
              transparent 50%, 
              #02C2B3 75%, 
              #1e3a8a 100%
            );
          }
          75% {
            background: linear-gradient(90deg, 
              #02C2B3 0%, 
              transparent 30%, 
              transparent 70%, 
              #1e3a8a 100%
            );
          }
          100% {
            background: linear-gradient(90deg, 
              #1e3a8a 0%, 
              transparent 30%, 
              transparent 70%, 
              #02C2B3 100%
            );
          }
        }
      `}</style>
    </div>
  );
};

export default ProdukLayanan;