import React from "react";
import Image from "next/image";
import Link from "next/link";

export const NavbarDesktop = () => {
  return (
    <div className="px-20 py-6 flex justify-between items-center fixed top-0 left-0 right-0 bg-[#FFFFFF1A] backdrop-blur-lg z-50">
      <div className="text-lg font-bold">
        <Image
          src="/navbar/navbar.png"
          alt="Corvidian Logo"
          width={120}
          height={24}
        />
      </div>
      <div className="flex space-x-4 bg-corvidian-1 px-8 py-3 gap-5 text-corvidian-5 rounded-full text-sm font-normal">
        <a href="#produk">Produk & Layanan</a>
        <a href="#wawasan">Wawasan</a>
        <a href="#tentang-kami">Tentang Kami</a>
      </div>
      <div className="bg-[linear-gradient(111deg,_#02C2B3_-11.36%,_#1D1F26_28.42%,_#1D1F26_67.11%,_#1578CB_121.2%)] px-4 py-2 border-corvidian-5 border rounded-full flex items-center gap-2">
        <Image 
          src="/navbar/whatsapp.png"
          alt="WhatsApp Kami"
          width={21}
          height={21}
        />
        <Link href="https://wa.me/1234567890" className="text-corvidian-4 text-sm font-bold">WhatsApp Kami</Link>
      </div>
    </div>
  );
};
