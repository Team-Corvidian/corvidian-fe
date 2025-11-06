"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export const ProjectSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current!.offsetLeft);
    setScrollLeft(scrollRef.current!.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div className="w-full">
      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing px-6"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div className="flex gap-6 pb-4">
          <div className="w-[280px] flex-shrink-0">
            <div className="bg-[linear-gradient(360deg,#FFFFFF_0%,#C5CED5_100%)] rounded-3xl shadow-lg overflow-hidden relative h-[400px] flex items-end">
              <div className="absolute left-0 top-0 h-full">
                <Image
                  src="/project/orang.png"
                  alt="Orang"
                  width={200}
                  height={400}
                  quality={100}
                  className="h-full w-auto object-cover object-left"
                />
              </div>
              <div className="absolute bottom-6 right-6 text-right z-10">
                <h3 className="text-corvidian-1 font-extrabold text-xl leading-tight mb-2">
                  Human
                  <br />
                  Capital
                  <br />
                  Internal
                  <br />
                  <span className="text-corvidian-4">System</span>
                </h3>
                <p className="text-corvidian-1 text-xs underline">
                  Pelajari lebih lanjut
                </p>
              </div>
            </div>
          </div>

          <div className="w-[280px] flex-shrink-0">
            <div className="bg-[linear-gradient(198.08deg,#02C2B3_-19.55%,#1D1F26_17.7%,#1D1F26_46.65%,#1578CB_95.15%)] rounded-3xl shadow-lg overflow-hidden relative h-[400px]">
              <div className="absolute bottom-0 left-0 w-full h-[75%]">
                <Image
                  src="/project/duduk.png"
                  alt="Duduk"
                  width={280}
                  height={240}
                  quality={100}
                  className="w-full h-full object-cover object-bottom"
                />
              </div>
              <div className="absolute top-6 left-6 text-left">
                <h3 className="text-white font-extrabold text-xl leading-tight mb-2">
                  Recruitment
                  <br />
                  <span className="text-corvidian-4">System</span>
                </h3>
                <p className="text-white text-xs underline">
                  Pelajari lebih lanjut
                </p>
              </div>
            </div>
          </div>

          <div className="w-[280px] flex-shrink-0">
            <div className="bg-[linear-gradient(90deg,#FFFFFF_0%,#C5CED5_100%)] rounded-3xl shadow-lg overflow-hidden relative h-[400px]">
              <div className="absolute top-0 left-0 w-full h-[55%]">
                <Image
                  src="/project/library.png"
                  alt="Library"
                  width={280}
                  height={220}
                  quality={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-6 left-6 text-left">
                <h3 className="text-corvidian-1 font-extrabold text-2xl leading-tight mb-2">
                  Library
                  <br />
                  <span className="text-corvidian-4">System</span>
                </h3>
                <p className="text-corvidian-1 text-xs underline">
                  Pelajari lebih lanjut
                </p>
              </div>
            </div>
          </div>

          <div className="w-[280px] flex-shrink-0">
            <div className="bg-[linear-gradient(142.7deg,#02C2B3_-28.02%,#1D1F26_17.75%,#1D1F26_62.27%,#1578CB_124.5%)] rounded-3xl overflow-hidden relative h-[400px]">
              <div className="absolute bottom-0 left-0 w-full h-[70%]">
                <Image
                  src="/project/management.png"
                  alt="Management"
                  width={280}
                  height={200}
                  quality={100}
                  className="w-full h-full object-cover object-bottom"
                />
              </div>
              <div className="absolute top-6 left-6 text-left">
                <h3 className="text-white font-extrabold text-xl leading-tight mb-2">
                  Project
                  <br />
                  Management
                  <br />
                  <span className="text-corvidian-4">System</span>
                </h3>
                <p className="text-white text-xs underline">
                  Pelajari lebih lanjut
                </p>
              </div>
            </div>
          </div>

          <div className="w-[280px] flex-shrink-0">
            <div className="bg-[linear-gradient(360deg,#FFFFFF_0%,#C5CED5_100%)] rounded-3xl overflow-hidden relative h-[400px]">
              <div className="absolute inset-0">
                <Image
                  src="/project/timesheet.png"
                  alt="Timesheet"
                  width={280}
                  height={300}
                  quality={100}
                  className="h-auto w-full object-cover object-right translate-y-11"
                />
              </div>
              <div className="absolute top-6 left-6 text-left">
                <h3 className="text-corvidian-1 font-extrabold text-xl leading-tight mb-2">
                  Timesheet
                  <br />
                  <span className="text-corvidian-4">System</span>
                </h3>
                <p className="text-corvidian-1 text-xs underline">
                  Pelajari lebih lanjut
                </p>
              </div>
            </div>
          </div>

          <div className="w-[280px] flex-shrink-0">
            <div className="bg-[linear-gradient(360deg,#FFFFFF_0%,#C5CED5_100%)] rounded-3xl overflow-hidden relative h-[400px]">
              <div className="p-8 flex flex-col h-full justify-center">
                <p className="text-corvidian-1 text-sm mb-6">
                  Mau tahu lebih banyak, sistem yang siapa pakai?
                </p>
                <h3 className="font-extrabold text-2xl bg-[linear-gradient(90.58deg,#02C2B3_-13.4%,#1D1F26_25.6%,#1D1F26_63.53%,#1578CB_116.56%)] bg-clip-text text-transparent">
                  Lihat lebih lengkap.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};
