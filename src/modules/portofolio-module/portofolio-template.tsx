import React from 'react'
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
              backgroundPosition: 'center', 
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
            <Image
              key={`portfolio-${index}`}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              style={{zIndex: 0}}
              className="object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortofolioTemplate