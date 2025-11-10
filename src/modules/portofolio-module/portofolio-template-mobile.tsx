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
}

// Interface untuk Props Component
export interface PortofolioTemplateMobileProps {
  titleLine1: string
  titleLine2: string
  description: string
  mainImage?: string
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

const PortofolioTemplateMobile: React.FC<PortofolioTemplateMobileProps> = ({
  titleLine1,
  titleLine2,
  description,
  mainImage = '/portofolio/laptop.png',
  technologies,
  portfolioImages,
}) => {
  const [modalSrc, setModalSrc] = useState<string | null>(null)
  const [modalAlt, setModalAlt] = useState<string>('')

  const openModal = (src: string, alt = '') => {
    setModalSrc(src)
    setModalAlt(alt)
  }
  
  const closeModal = useCallback(() => {
    setModalSrc(null)
    setModalAlt('')
  }, [])

  // Disable body scroll saat modal terbuka
  useEffect(() => {
    if (modalSrc) {
      const original = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = original
      }
    }
  }, [modalSrc])

  // Close modal on Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    if (modalSrc) document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [modalSrc, closeModal])

  return (
    <section className="w-full relative mb-16">
      {/* Judul Section dengan Background Shape */}
      <div className="relative mb-8">
        <div 
          className="relative overflow-hidden" 
          style={{
            backgroundImage: 'url(/tentangkami/shape.png)', 
            backgroundSize: 'cover',
            height: '320px'
          }}
        >
          {/* Title Section */}
          <div className="relative top-8 px-6 flex flex-col gap-1.5">
            <p className="text-lg md:text-xl font-extrabold text-white leading-tight">
              {titleLine1}
            </p>
            <p className="text-lg md:text-xl font-extrabold text-corvidian-3 leading-tight">
              {titleLine2}
            </p>
          </div>
          
          {/* Main Image - Positioned di tengah bawah */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-full flex justify-center">
            <Image
              src={mainImage}
              alt="Portfolio Main Image"
              width={320}
              height={257}
              style={{zIndex: 1}}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Gambaran Umum Section */}
      <div className="flex flex-col gap-6 mb-10 px-8">
        {/* Header dengan Technologies */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-between items-start">
            <h2 className="text-base md:text-lg font-extrabold text-corvidian-1">
              Gambaran Umum
            </h2>
            
            {/* Technology Icons */}
            <div className="flex flex-row gap-2 items-center flex-wrap justify-end max-w-[180px]">
              {technologies.map((tech, index) => (
                <div key={`${tech.name}-${index}`} className="flex-shrink-0">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={tech.width * 0.55}
                    height={tech.height * 0.55}
                    style={{zIndex: 0}}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Deskripsi */}
        <p className='text-xs md:text-sm text-justify text-corvidian-1 leading-relaxed'>
          {description}
        </p>
      </div>

      {/* Portfolio Images Grid */}
      <div className="flex flex-col gap-5 mb-12 px-8">
        <h3 className="text-sm md:text-base font-semibold text-corvidian-1">
          Galeri Portofolio
        </h3>
        
        {/* Single Row of Images */}
        <div className="flex flex-row gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          {portfolioImages.map((image, index) => (
            <button
              key={`portfolio-${index}`}
              onClick={() => openModal(image.src, image.alt)}
              className="rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-corvidian-3 bg-gray-50 flex-shrink-0"
              aria-label={`Buka gambar portofolio ${image.alt || index}`}
              type="button"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width * 0.5}
                height={image.height * 0.5}
                style={{zIndex: 0}}
                className="object-contain"
              />
            </button>
          ))}
        </div>
        

      </div>

      {/* Modal */}
      {modalSrc && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm transition-opacity cursor-pointer"
          onClick={() => closeModal()}
        >
          <div className="max-w-[95vw] max-h-[90vh] p-4">
            <div className="w-full h-full rounded-lg shadow-2xl bg-transparent flex items-center justify-center">
              <Image
                src={modalSrc}
                alt={modalAlt || 'Gambar portofolio'}
                width={1000}
                height={700}
                style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '85vh' }}
                className="rounded-lg"
                priority
              />
            </div>
          </div>
          
          {/* Close hint text */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <p className="text-white text-xs bg-black/60 px-4 py-2 rounded-full backdrop-blur-sm">
              Tap untuk menutup
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default PortofolioTemplateMobile