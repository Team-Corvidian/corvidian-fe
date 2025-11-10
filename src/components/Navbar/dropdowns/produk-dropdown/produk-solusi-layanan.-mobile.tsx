import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

interface ServiceItem {
  title: string;
  description: string;
  link: string;
}

interface ServiceCategory {
  title: string;
  link: string;
  items: ServiceItem[];
}

interface ProdukSolusiLayananMobileProps {
  onLinkClick?: () => void;
}

const ProdukSolusiLayananMobile = ({ onLinkClick }: ProdukSolusiLayananMobileProps) => {
  const serviceCategories: ServiceCategory[] = [
    {
      title: "IT Infrastructure",
      link: "/it-infrastructure",
      items: [
        {
          title: "Pembuatan & Instalasi Jaringan",
          description: "(LAN/WAN, Wireless, dan VLAN)",
          link: "/layanan/it-infrastructure/jaringan",
        },
        {
          title: "Pengaturan & Keamanan Perangkat Jaringan",
          description: "(Router, Switch, dan Firewall)",
          link: "/layanan/it-infrastructure/keamanan",
        },
        {
          title: "Pemeliharaan & Pemantauan Jaringan",
          description: "Monitoring dan maintenance",
          link: "/layanan/it-infrastructure/pemeliharaan",
        },
      ],
    },
    {
      title: "Web Design & Development",
      link: "/web-design-development",
      items: [
        {
          title: "Pembuatan Website",
          description: "(Company Profile, Landing Page)",
          link: "/layanan/web/pembuatan",
        },
        {
          title: "Desain UI/UX",
          description: "(UI/UX Website)",
          link: "/layanan/web/desain",
        },
        {
          title: "Pemeliharaan & Optimalisasi Website",
          description: "(Maintenance dan Konsultasi)",
          link: "/layanan/web/pemeliharaan",
        },
      ],
    },
    {
      title: "Digital Software Solutions",
      link: "/digital-software-solution",
      items: [
        {
          title: "Pengembangan Aplikasi",
          description: "(Mobile & Desktop App)",
          link: "/layanan/software/aplikasi",
        },
        {
          title: "Desain UI/UX",
          description: "(UI/UX Aplikasi)",
          link: "/layanan/software/desain",
        },
        {
          title: "Pemeliharaan Sistem & Manajemen Data",
          description: "(Perawatan & Manajemen Data)",
          link: "/layanan/software/pemeliharaan",
        },
      ],
    },
  ];

  return (
    <div>
      {serviceCategories.map((category, idx) => (
        <div key={idx} className="mb-6">
          <div 
            className="h-[40px] mb-4 w-fit rounded-full flex items-center justify-center p-[2px]" 
            style={{background:"linear-gradient(to right, #02C2B3, #1D1F26, #1D1F26, #1578CB)"}}
          >
            <Button 
              variant="outline" 
              size="sm" 
              className="text-[12px] text-black font-bold w-fit rounded-full bg-white hover:bg-gray-50 px-4"
            >
              <Link 
                href={category.link} 
                className='pointer' 
                onClick={onLinkClick}
              >
                {category.title}
              </Link>
            </Button>
          </div>
          
          <div className="space-y-2 pl-3">
            {category.items.map((item, itemIdx) => (
              <div key={itemIdx}>
                <Link
                  href={item.link}
                  className="text-sm text-black hover:text-[#02C2B3] block transition-colors font-semibold"
                  onClick={onLinkClick}
                >
                  {item.title}
                </Link>
                <p className="text-xs text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProdukSolusiLayananMobile