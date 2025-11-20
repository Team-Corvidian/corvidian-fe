"use client"
import React, { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'

// Interface untuk Technology Environment
export interface TechnologyEnvironment {
  name: string
  icon: string
  width: number
  height: number
}

// Interface untuk Portofolio Images
export interface PortofolioImage {
  src: string
  alt: string
  width: number
  height: number
  modalWidth?: number
  modalHeight?: number
}

// Interface untuk Props Component
export interface PortofolioTemplateProps {
  titleLine1: string
  titleLine2: string
  description: string
  mainImage?: string // Optional, default ke laptop.png
  technologies: TechnologyEnvironment[]
  portfolioImages: PortofolioImage[]
}

// Data constants untuk environment technologies yang tersedia
export const AVAILABLE_TECHNOLOGIES = {
  PHP: {
    name: 'PHP',
    icon: '/portofolio/php.png',
    width: 74,
    height: 39,
  },
  LARAVEL: {
    name: 'Laravel',
    icon: '/portofolio/Laravel.png',
    width: 61,
    height: 53,
  },
  MYSQL: {
    name: 'MySQL',
    icon: '/portofolio/MySQL.png',
    width: 70,
    height: 36,
  },
  BOOTSTRAP: {
    name: 'Bootstrap',
    icon: '/portofolio/Bootstrap.png',
    width: 47,
    height: 37,
  },
} as const

const PortofolioTemplate: React.FC<PortofolioTemplateProps> = ({
  titleLine1,
  titleLine2,
  description,
  mainImage = '/portofolio/laptop.png',
  technologies,
  portfolioImages,
}) => {
  // Modal state: src gambar yang sedang dibuka
  const [modalImage, setModalImage] = useState<PortofolioImage | null>(null)
  const [zoomLevel, setZoomLevel] = useState(1)

  const resetZoom = () => setZoomLevel(1)
  const adjustZoom = (delta: number) => {
    setZoomLevel((prev) => {
      const next = Math.min(3, Math.max(1, parseFloat((prev + delta).toFixed(2))))
      return next
    })
  }

  const openModal = (image: PortofolioImage) => {
    setModalImage(image)
    resetZoom()
  }
  const closeModal = useCallback(() => {
    setModalImage(null)
    resetZoom()
  }, [])

  // disable body scroll saat modal terbuka
  useEffect(() => {
    if (modalImage) {
      const original = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = original
      }
    }
  }, [modalImage])

  // close modal on Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    if (modalImage) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [modalImage, closeModal])

  return (
    <section className="w-full relative">
      <div className="flex flex-row mb-[100px]">
        <div className="flex flex-col w-1/2">
          {/* Judul Section */}
          <div 
            className="relative" 
            style={{
              backgroundImage: 'url(/tentangkami/shape.png)', 
              backgroundSize: 'cover', 
              height: '550.84px'
            }}
          >
            <div className="relative top-[70px] flex flex-col ms-[100px]">
              <p className="text-xl max-sm:max-w-[330px] md:text-3xl font-extrabold text-white leading-tight max-[350px]:text-2xl max-[350px]:!max-w-[250px]">
                {titleLine1}
              </p>
              <p className="text-xl max-sm:max-w-[330px] md:text-3xl font-extrabold text-corvidian-3 leading-tight max-[350px]:text-2xl max-[350px]:!max-w-[250px]">
                {titleLine2}
              </p>
            </div>
            <Image
              src={mainImage}
              alt="Portfolio Main Image"
              width={650}
              height={481.84}
              style={{zIndex: 0}}
              className="absolute object-contain ms-[100px] top-[120px]"
            />
          </div>
        </div>

        <div className="relative flex flex-col w-1/2 pe-[50px] top-[70px] gap-[25px]">
          <div className="flex flex-row justify-between">
            <h1 className="text-xl max-sm:max-w-[330px] md:text-3xl font-extrabold text-corvidian-1 leading-tight max-[350px]:text-2xl max-[350px]:!max-w-[250px]">
              Gambaran Umum
            </h1>
            {/* Foto Environment - Fixed/Tidak dapat diganti */}
            <div className="flex flex-row gap-3 items-center">
              {technologies.map((tech, index) => (
                <Image
                  key={`${tech.name}-${index}`}
                  src={tech.icon}
                  alt={tech.name}
                  width={tech.width}
                  height={tech.height}
                  style={{zIndex: 0}}
                  className="object-contain"
                />
              ))}
            </div>
          </div>

          {/* Deskripsi Section */}
          <p className='text-[14px] pt-4 text-justify text-black'>
            {description}
          </p>
        </div>
      </div>

      <div className="relative flex flex-col w-full top-[40px] gap-[25px] justify-center items-center mb-[170px]">
        {/* Foto Portofolio - Dapat diganti */}
        <div className="flex flex-row gap-[10px] items-center">
          {portfolioImages.map((image, index) => (
            <button
              key={`portfolio-${index}`}
              onClick={() => openModal(image)}
              className="rounded overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corvidian-3"
              aria-label={`Buka gambar portofolio ${image.alt || index}`}
              type="button"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.modalWidth ?? image.width}
                height={image.modalHeight ?? image.height}
                sizes={`(max-width: 768px) 90vw, ${image.width}px`}
                quality={100}
                style={{ zIndex: 0, width: image.width, height: image.height }}
                className="object-contain"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md transition-opacity cursor-pointer"
          onClick={() => closeModal()} // klik sekali pada overlay akan menutup modal
        >
          <div
            className="max-w-[90vw] max-h-[90vh] p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="w-full h-full rounded shadow-lg bg-transparent flex items-center justify-center relative overflow-hidden">
              <div className="overflow-auto max-h-[80vh] max-w-[90vw] flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={modalImage.src}
                  alt={modalImage.alt || 'Gambar portofolio'}
                  width={modalImage.modalWidth ?? modalImage.width}
                  height={modalImage.modalHeight ?? modalImage.height}
                  className="rounded object-contain"
                  style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center' }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button
                  type="button"
                  aria-label="Perkecil gambar"
                  onClick={() => adjustZoom(-0.25)}
                  disabled={zoomLevel <= 1}
                  className="px-3 py-2 rounded bg-white/80 text-black text-sm font-semibold shadow disabled:opacity-40"
                >
                  -
                </button>
                <button
                  type="button"
                  aria-label="Perbesar gambar"
                  onClick={() => adjustZoom(0.25)}
                  disabled={zoomLevel >= 3}
                  className="px-3 py-2 rounded bg-white/80 text-black text-sm font-semibold shadow disabled:opacity-40"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          {/* close button removed */}
        </div>
      )}
    </section>
  )
}

export default PortofolioTemplate
