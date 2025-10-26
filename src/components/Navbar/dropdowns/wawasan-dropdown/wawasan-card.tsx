"use client";

import React from "react";
import Image from "next/image";

export const WawasanCard = () => {
  return (
    <div
      className="h-[140px] rounded-2xl p-6 flex items-center overflow-visible relative max-w-[652px] max-h-[119px]"
      style={{
        background:
          "linear-gradient(93.81deg, #02C2B3 -22.39%, #1D1F26 24.46%, #1D1F26 70.03%, #1578CB 133.73%)",
        boxShadow:
          "0px 7px 10.9px 0px #FFFFFF40 inset, 0px -5px 11.3px 0px #00000040 inset",
      }}
    >
      <div className="flex flex-col gap-2 z-10">
        <h3 className="text-white text-lg font-bold">Our Portofolio</h3>
        <p className="text-corvidian-5 text-sm max-w-[280px]">
          Jelajahi hasil nyata dari solusi digital yang kami hadirkan.
        </p>
      </div>
      <div className="absolute bottom-0 left-1/2 translate-x-2 flex items-end">
        <div>
          <Image src="/navbar/hp.png" alt="hp" width={80} height={86} />
        </div>
        <div className="-translate-x-3">
          <Image src="/navbar/lms.png" alt="laptop" width={160} height={114} />
        </div>
        <div className="-translate-x-6">
          <Image src="/navbar/muc.png" alt="tablet" width={200} height={100} />
        </div>
      </div>
    </div>
  );
};
