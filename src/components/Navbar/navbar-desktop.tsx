"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { WawasanDropdown } from "./dropdowns/wawasan-dropdown/wawasan-dropdown";
import { ProdukDropdown } from "./dropdowns/produk-dropdown/produk-dropdown";
type ActiveDropdown = "produk" | "wawasan" | null;

export const NavbarDesktop = () => {
  const [activeDropdown, setActiveDropdown] = useState<ActiveDropdown>(null);

  const handleDropdownToggle = (dropdown: ActiveDropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const dropdownConfigs = {
    produk: { width: 1000, content: <ProdukDropdown /> },
    wawasan: { width: 760, content: <WawasanDropdown /> },
  };

  const currentConfig = activeDropdown ? dropdownConfigs[activeDropdown] : null;

  return (
    <>
      <AnimatePresence>
        {activeDropdown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setActiveDropdown(null)}
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="px-20 py-8 flex justify-between items-center fixed top-0 left-0 right-0 bg-[#FFFFFF1A] backdrop-blur-lg z-50"
      >
        <Link href="/">
          <Image
            src="/navbar/navbar.png"
            alt="Corvidian Logo"
            width={120}
            height={24}
            className="cursor-pointer"
          />
        </Link>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[linear-gradient(111deg,_#02C2B3_-11.36%,_#1D1F26_28.42%,_#1D1F26_67.11%,_#1578CB_121.2%)] px-4 py-2 border border-corvidian-5 rounded-full flex items-center gap-2"
        >
          <Image src="/navbar/whatsapp.png" alt="WA" width={21} height={21} />
          <Link
            href="https://wa.me/1234567890"
            className="text-corvidian-4 text-sm font-bold"
          >
            WhatsApp Kami
          </Link>
        </motion.div>
      </motion.div>

      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <motion.div
          className="bg-corvidian-1 text-corvidian-5 flex flex-col items-center"
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            width: activeDropdown ? currentConfig?.width : "auto",
            borderRadius: activeDropdown ? 24 : 9999,
            paddingLeft: 32,
            paddingRight: 32,
            paddingTop: 12,
            paddingBottom: activeDropdown ? 0 : 12,
          }}
          transition={{
            y: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
            opacity: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
            width: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
            borderRadius: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
            paddingBottom: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
          }}
        >
          <div className="flex gap-8 text-sm font-normal whitespace-nowrap relative z-50">
            <button
              onClick={() => handleDropdownToggle("produk")}
              className={`focus:outline-none transition-all duration-300 hover:text-white ${
                activeDropdown === "produk" ? "text-corvidian-3" : ""
              }`}
            >
              Produk & Layanan
            </button>
            <button
              onClick={() => handleDropdownToggle("wawasan")}
              className={`focus:outline-none transition-all duration-300 hover:text-white ${
                activeDropdown === "wawasan" ? "text-corvidian-3" : ""
              }`}
            >
              Wawasan
            </button>
            <Link
              href="/tentang-kami"
              className="hover:text-white transition-all duration-300"
              onClick={() => setActiveDropdown(null)}
            >
              Tentang Kami
            </Link>
          </div>

          <motion.div
            initial={false}
            animate={{
              height: activeDropdown ? 754 : 0,
              marginTop: activeDropdown ? 12 : 0,
            }}
            transition={{
              duration: 0.4,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="w-full"
          >
            <AnimatePresence mode="wait">
              {activeDropdown && (
                <motion.div
                  key={activeDropdown}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.35,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="h-fit rounded-2xl bg-[#1D1F26]/80 mb-3"
                >
                  {currentConfig?.content}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};
