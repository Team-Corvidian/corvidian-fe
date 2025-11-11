"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu } from "lucide-react";
import ProdukAplikasiSiapMobile from "./dropdowns/produk-dropdown/produk-aplikasi-siap-mobile";
import ProdukSolusiLayananMobile from "./dropdowns/produk-dropdown/produk-solusi-layanan.-mobile";
import { WawasanDropdown } from "./dropdowns/wawasan-dropdown/wawasan-dropdown";
import type { ArticlePreview } from "@/lib/api/wawasan-api";

interface NavbarMobileProps {
  articles?: ArticlePreview[];
}

export const NavbarMobile = ({ articles = [] }: NavbarMobileProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleClose = () => {
    setIsOpen(false);
    setExpandedSection(null);
  };

  const handleMenuToggle = () => {
    if (expandedSection !== null) {
      setExpandedSection(null);
    } else {
      setIsOpen(!isOpen);
    }
  };

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
            onClick={handleMenuToggle}
            className="text-[#1D1F26] p-2"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            <Menu size={24} />
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
                {expandedSection !== "wawasan" && (
                <div className="border-b border-gray-200 pb-3">
                  {expandedSection === null && (
                  <button
                    onClick={() => toggleSection("produk")}
                    className="flex justify-between items-center w-full text-corvidian-1 text-base font-medium"
                  >
                    <span>Produk & Layanan</span>
                  </button>
                  )}

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
                          <div>
                            <ProdukSolusiLayananMobile onLinkClick={handleClose} />
                          </div>

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
                )}

                {expandedSection !== "produk" && (
                <div className="border-b border-gray-200 pb-3">
                  {expandedSection === null && (
                    <button
                      onClick={() => toggleSection("wawasan")}
                      className="flex justify-between items-center w-full text-corvidian-1 text-base font-medium"
                    >
                      <span>Wawasan</span>
                    </button>
                  )}

                  <AnimatePresence>
                    {expandedSection === "wawasan" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4">
                          <WawasanDropdown 
                            articles={articles} 
                            onLinkClick={handleClose}
                          />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                )}

                {expandedSection !== "produk" && expandedSection !== "wawasan" && (
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    <Link
                      href="/tentang-kami"
                      className="text-corvidian-1 text-base font-medium block"
                      onClick={handleClose}
                    >
                      Tentang Kami
                    </Link>
                  </motion.div>
                )}

              </div>
            </motion.nav>
          )}
        </AnimatePresence>
        
        {((expandedSection === "produk" || expandedSection === "wawasan") && isOpen) && (
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
            onClick={handleClose}
          />
        )}
      </AnimatePresence>
    </>
  );
};
