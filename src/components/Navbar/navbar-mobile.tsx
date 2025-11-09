"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProdukAplikasiSiapMobile from "./dropdowns/produk-dropdown/produk-aplikasi-siap-mobile";

export const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Data untuk Produk & Layanan
  const serviceCategories = [
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
    <>
      <motion.div
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed w-screen top-0 left-0 right-0 z-50 bg-white rounded-b-2xl overflow-hidden"
      >
        <div className="px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/navbar/navbar.png"
              alt="Corvidian Logo"
              width={100}
              height={20}
            />
          </Link>
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#1D1F26] p-2"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              initial={false}
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
                opacity: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
              }}
              className="overflow-hidden bg-white max-h-[60vh] overflow-y-auto"
            >
              <div className="flex flex-col gap-4 px-6 pb-6">
                {/* Produk & Layanan Dropdown */}
                <div className="border-b border-gray-200 pb-3">
                  <button
                    onClick={() => toggleSection("produk")}
                    className="flex justify-between items-center w-full text-corvidian-1 text-base font-medium"
                  >
                    <span>Produk & Layanan</span>
                    <motion.div
                      animate={{
                        rotate: expandedSection === "produk" ? 180 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {expandedSection === "produk" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 space-y-4">
                          {/* Solusi Berdasarkan Layanan */}
                          <div>
                            {serviceCategories.map((category, idx) => (
                              <div key={idx} className="mb-6">
                                <div className="h-[40px] mb-4 w-fit rounded-full flex items-center justify-center p-[2px]" style={{background:"linear-gradient(to right, #02C2B3, #1D1F26, #1D1F26, #1578CB)"}}>
                                  <Button variant="outline" size="sm" className="text-[12px] text-black font-bold w-fit rounded-full bg-white hover:bg-gray-50 px-4">
                                    <Link href={category.link} className='pointer' onClick={() => setIsOpen(false)}>
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
                                        onClick={() => setIsOpen(false)}
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

                          {/* Aplikasi Siap Pakai */}
                          <div>
                            <h3 className="text-xs font-semibold text-[#02C2B3] mb-3">
                              Aplikasi Siap Pakai
                            </h3>
                            <ProdukAplikasiSiapMobile />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Wawasan - Hidden when Produk expanded */}
                {expandedSection !== "produk" && (
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ delay: 0.15, duration: 0.3 }}
                  >
                    <Link
                      href="/wawasan"
                      className="text-corvidian-1 text-base font-medium block"
                      onClick={() => setIsOpen(false)}
                    >
                      Wawasan
                    </Link>
                  </motion.div>
                )}

                {/* Tentang Kami - Hidden when Produk expanded */}
                {expandedSection !== "produk" && (
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    <Link
                      href="/tentang-kami"
                      className="text-corvidian-1 text-base font-medium block"
                      onClick={() => setIsOpen(false)}
                    >
                      Tentang Kami
                    </Link>
                  </motion.div>
                )}

              </div>
            </motion.nav>
          )}
        </AnimatePresence>
        {/* Scroll Down Indicator */}
        {(expandedSection === "produk" && isOpen) && (
          <div className="flex flex-col items-center mt-6 mb-2">
            <p className="text-xs text-gray-500 mb-2">Scroll Down for other option</p>
            <div className="flex gap-1">
              <div className="w-1 h-1 rounded-full bg-gray-400"></div>
              <div className="w-1 h-1 rounded-full bg-gray-400"></div>
              <div className="w-1 h-1 rounded-full bg-gray-400"></div>
            </div>
          </div>
        )}

      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
      
    
    </>
  );
};