export type SearchCategory =
  | "it-infrastructure"
  | "web-design-development"
  | "digital-software-solutions";

export interface StaticSearchItem {
  id: string;
  title: string;
  description: string;
  href: string;
  category: SearchCategory;
  keywords: string[];
}

export const staticSearchItems: StaticSearchItem[] = [
  {
    id: "service-it-network-installation",
    title: "Pembuatan & Instalasi Jaringan",
    description: "LAN/WAN, Wireless, dan VLAN",
    href: "/it-infrastructure",
    category: "it-infrastructure",
    keywords: [
      "jaringan",
      "network",
      "lan",
      "wan",
      "wireless",
      "it infrastructure",
      "infrastruktur",
    ],
  },
  {
    id: "service-it-security",
    title: "Pengaturan & Keamanan Perangkat Jaringan",
    description: "Router, Switch, dan Firewall",
    href: "/it-infrastructure",
    category: "it-infrastructure",
    keywords: [
      "keamanan",
      "security",
      "router",
      "switch",
      "firewall",
      "jaringan",
    ],
  },
  {
    id: "service-it-maintenance",
    title: "Pemeliharaan & Pemantauan Jaringan",
    description: "Monitoring dan maintenance",
    href: "/it-infrastructure",
    category: "it-infrastructure",
    keywords: [
      "pemantauan",
      "monitoring",
      "maintenance",
      "network",
      "support",
    ],
  },
  {
    id: "service-web-development",
    title: "Pembuatan Website",
    description: "Company Profile, Landing Page",
    href: "/web-design-development",
    category: "web-design-development",
    keywords: [
      "website",
      "landing page",
      "company profile",
      "web development",
    ],
  },
  {
    id: "service-web-design",
    title: "Desain UI/UX Website",
    description: "UI/UX Website",
    href: "/web-design-development",
    category: "web-design-development",
    keywords: ["ui ux", "desain", "experience", "interface", "website"],
  },
  {
    id: "service-web-maintenance",
    title: "Pemeliharaan & Optimalisasi Website",
    description: "Maintenance dan Konsultasi",
    href: "/web-design-development",
    category: "web-design-development",
    keywords: [
      "maintenance",
      "optimasi",
      "consulting",
      "website",
      "support",
    ],
  },
  {
    id: "service-digital-development",
    title: "Pengembangan Aplikasi",
    description: "Web, Mobile, dan Sistem Terintegrasi",
    href: "/digital-software-solution",
    category: "digital-software-solutions",
    keywords: [
      "aplikasi",
      "application",
      "software",
      "pengembangan",
      "development",
    ],
  },
  {
    id: "service-digital-design",
    title: "Desain UI/UX Aplikasi",
    description: "UI/UX Aplikasi",
    href: "/digital-software-solution",
    category: "digital-software-solutions",
    keywords: ["ui ux", "application design", "mobile", "produk digital"],
  },
  {
    id: "service-digital-maintenance",
    title: "Pemeliharaan Sistem & Manajemen Data",
    description: "Perawatan dan Manajemen Data",
    href: "/digital-software-solution",
    category: "digital-software-solutions",
    keywords: [
      "maintenance",
      "manajemen data",
      "support",
      "system",
      "operational",
    ],
  },
];
