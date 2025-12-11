"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";

export interface TechnologyEnvironment {
  name: string;
  icon: string;
  width: number;
  height: number;
}

export interface PortofolioImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  modalWidth?: number;
  modalHeight?: number;
}

export interface PortofolioTemplateMobileProps {
  titleLine1: string;
  titleLine2: string;
  description: string;
  mainImage?: string;
  technologies: TechnologyEnvironment[];
  portfolioImages: PortofolioImage[];
}

export const AVAILABLE_TECHNOLOGIES = {
  PHP: {
    name: "PHP",
    icon: "/portofolio/php.png",
    width: 74,
    height: 39,
  },
  LARAVEL: {
    name: "Laravel",
    icon: "/portofolio/Laravel.png",
    width: 61,
    height: 53,
  },
  MYSQL: {
    name: "MySQL",
    icon: "/portofolio/MySQL.png",
    width: 70,
    height: 36,
  },
  BOOTSTRAP: {
    name: "Bootstrap",
    icon: "/portofolio/Bootstrap.png",
    width: 47,
    height: 37,
  },
} as const;

const PortofolioTemplateMobile: React.FC<PortofolioTemplateMobileProps> = ({
  titleLine1,
  titleLine2,
  description,
  mainImage = "/portofolio/laptop.png",
  technologies,
  portfolioImages,
}) => {
  const [modalImage, setModalImage] = useState<PortofolioImage | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const resetZoom = () => setZoomLevel(1);

  const adjustZoom = (delta: number) => {
    setZoomLevel((prev) => {
      const next = Math.min(
        3,
        Math.max(1, parseFloat((prev + delta).toFixed(2)))
      );
      return next;
    });
  };

  const openModal = (image: PortofolioImage) => {
    setModalImage(image);
    resetZoom();
  };

  const closeModal = useCallback(() => {
    setModalImage(null);
    resetZoom();
  }, []);

  useEffect(() => {
    if (modalImage) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [modalImage]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (modalImage) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [modalImage, closeModal]);

  return (
    <section className="w-full relative mb-16">
      <div className="relative mb-8">
        <div
          className="relative overflow-hidden"
          style={{
            backgroundImage: "url(/tentangkami/shape.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "320px",
          }}
        >
          <div className="relative top-8 px-6 flex flex-col gap-1.5">
            <p className="text-lg md:text-xl font-extrabold text-white leading-tight">
              {titleLine1}
            </p>
            <p className="text-lg md:text-xl font-extrabold text-corvidian-3 leading-tight">
              {titleLine2}
            </p>
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full flex justify-center">
            <Image
              src={mainImage}
              alt="Portfolio Main Image"
              width={320}
              height={260}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-6 mb-10 px-8">
        <div className="flex flex-row justify-between items-start">
          <h2 className="text-base md:text-lg font-extrabold text-corvidian-1">
            Gambaran Umum
          </h2>

          <div className="flex flex-row gap-2 items-center flex-wrap justify-end max-w-[180px]">
            {technologies.map((tech, index) => (
              <div key={`${tech.name}-${index}`} className="flex-shrink-0">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={tech.width * 0.55}
                  height={tech.height * 0.55}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs md:text-sm text-justify text-corvidian-1 leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex flex-col gap-3 px-8">
        <h3 className="text-sm md:text-base font-semibold text-corvidian-1">
          Galeri Portofolio
        </h3>

        <div className="flex flex-col gap-3">
          {portfolioImages.map((image, index) => (
            <button
              key={`portfolio-mobile-${index}`}
              onClick={() => openModal(image)}
              className="w-full rounded overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corvidian-3"
              type="button"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="object-contain w-full"
              />
            </button>
          ))}
        </div>
      </div>

      {modalImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md cursor-pointer"
          onClick={closeModal}
        >
          <div
            className="max-w-[95vw] max-h-[90vh] p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full h-full rounded-lg shadow-2xl flex items-center justify-center relative overflow-hidden">
              <div className="overflow-hidden max-h-[85vh] max-w-[95vw] flex items-center justify-center">
                <Image
                  src={modalImage.src}
                  alt={modalImage.alt}
                  width={modalImage.modalWidth ?? modalImage.width}
                  height={modalImage.modalHeight ?? modalImage.height}
                  className="object-contain rounded max-h-[85vh] max-w-[95vw]"
                  style={{
                    transform: `scale(${zoomLevel})`,
                    transformOrigin: "center center",
                  }}
                />
              </div>

              <div className="absolute bottom-4 right-4 flex gap-2">
                <button
                  type="button"
                  onClick={() => adjustZoom(-0.25)}
                  disabled={zoomLevel <= 1}
                  className="px-3 py-2 rounded bg-white/80 text-black text-sm font-semibold shadow disabled:opacity-30"
                >
                  -
                </button>
                <button
                  type="button"
                  onClick={() => adjustZoom(0.25)}
                  disabled={zoomLevel >= 3}
                  className="px-3 py-2 rounded bg-white/80 text-black text-sm font-semibold shadow disabled:opacity-30"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortofolioTemplateMobile;
