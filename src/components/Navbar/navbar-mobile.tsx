"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

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

  const appCategories = [
    {
      title: "Operations & General",
      items: [
        { title: "Business Travel System", link: "/aplikasi/business-travel" },
        { title: "Office Operations System", link: "/aplikasi/office-operations" },
        { title: "Document Print Management System", link: "/aplikasi/document-print" },
      ],
    },
    {
      title: "Human Capital",
      items: [
        { title: "Timesheet System", link: "/aplikasi/timesheet" },
        { title: "Recruitment System", link: "/aplikasi/recruitment" },
        { title: "Human Capital Internal System", link: "/aplikasi/hr-internal" },
      ],
    },
    {
      title: "Information",
      items: [
        { title: "Project Management", link: "/aplikasi/project-management" },
        { title: "Library System", link: "/aplikasi/library" },
      ],
    },
    {
      title: "Design",
      items: [{ title: "Design System", link: "/aplikasi/design-system" }],
    },
  ];

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-white rounded-b-2xl overflow-hidden"
      >
        <div className="px-6 py-4 flex justify-between items-center">
          <Image
            src="/navbar/navbar.png"
            alt="Corvidian Logo"
            width={100}
            height={20}
          />
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
              className="overflow-hidden bg-white max-h-[80vh] overflow-y-auto"
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
                            <h3 className="text-xs font-semibold text-[#02C2B3] mb-3">
                              Solusi Berdasarkan Layanan
                            </h3>
                            {serviceCategories.map((category, idx) => (
                              <div key={idx} className="mb-4">
                                <h4 className="text-sm font-medium text-corvidian-1 mb-2">
                                  {category.title}
                                </h4>
                                <div className="space-y-2 pl-3">
                                  {category.items.map((item, itemIdx) => (
                                    <div key={itemIdx}>
                                      <Link
                                        href={item.link}
                                        className="text-sm text-gray-600 hover:text-[#02C2B3] block transition-colors"
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
                            {appCategories.map((category, idx) => (
                              <div key={idx} className="mb-4">
                                <h4 className="text-sm font-medium text-corvidian-1 mb-2">
                                  {category.title}
                                </h4>
                                <div className="space-y-2 pl-3">
                                  {category.items.map((item, itemIdx) => (
                                    <Link
                                      key={itemIdx}
                                      href={item.link}
                                      className="text-sm text-gray-600 hover:text-[#02C2B3] block transition-colors"
                                      onClick={() => setIsOpen(false)}
                                    >
                                      {item.title}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Wawasan */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
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

                {/* Tentang Kami */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
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

                {/* Konsultasi Button */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25, duration: 0.3 }}
                  className="pt-4"
                >
                  <div className="relative inline-block w-full">
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: `linear-gradient(90deg, #1578CB 0%, #1D1F26 50%, #02C2B3 100%)`,
                        padding: "2px",
                      }}
                    ></div>
                    <Link
                      href="/konsultasi"
                      className="relative z-10 flex items-center justify-center w-full px-6 py-3 font-medium text-[#1D1F26] bg-white rounded-full"
                      onClick={() => setIsOpen(false)}
                    >
                      Konsultasi Gratis
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
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