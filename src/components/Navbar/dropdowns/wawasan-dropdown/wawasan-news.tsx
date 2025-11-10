"use client";

import React from "react";
import Image from "next/image";

interface WawasanNewsProps {
  image: string;
  date: string;
  title: string;
  description: string;
}

export const WawasanNews = ({
  image,
  date,
  title,
  description,
}: WawasanNewsProps) => {
  return (
    <>
      {/* Desktop Version */}
      <div className="hidden lg:flex gap-4 pb-6 border-b border-white/10 last:border-b-0 group cursor-pointer">
        <div className="w-[175px] h-[100px] rounded-xl overflow-hidden flex-shrink-0">
          <Image
            src={image}
            alt={title}
            width={175}
            height={100}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <span className="text-xs text-corvidian-5/60">{date}</span>
          <h3 className="text-white font-semibold text-base leading-tight group-hover:text-corvidian-3 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-sm text-corvidian-5/80 leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="flex lg:hidden gap-3 pb-4 border-b border-gray-200 last:border-b-0 group cursor-pointer">
        <div className="w-[100px] h-[60px] rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src={image}
            alt={title}
            width={100}
            height={60}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <span className="text-[10px] text-gray-400">{date}</span>
          <h3 className="text-corvidian-1 font-semibold text-xs leading-tight group-hover:text-[#02C2B3] transition-colors duration-300 line-clamp-2">
            {title}
          </h3>
          <p className="text-[10px] text-gray-500 leading-relaxed line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </>
  );
};