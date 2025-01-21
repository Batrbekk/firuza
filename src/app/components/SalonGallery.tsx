'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { useState, useCallback, useEffect } from 'react'
import { flushSync } from 'react-dom'
import FadeUpText from './FadeUpText'

export default function SalonGallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      containScroll: false,
      dragFree: false,
      skipSnaps: false,
      slidesToScroll: 1,
      inViewThreshold: 0.7,
      loop: true,
    },
    [
      Autoplay({
        delay: 3000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
        rootNode: (emblaRoot) => emblaRoot.parentElement,
      })
    ]
  )

  const [scrollProgress, setScrollProgress] = useState(0)

  const onScroll = useCallback(() => {
    if (!emblaApi) return
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()))
    setScrollProgress(progress)
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    
    emblaApi.on('scroll', () => {
      flushSync(() => onScroll())
    })
    
    onScroll()
  }, [emblaApi, onScroll])

  const images = [
    '/images/salons/1.png',
    '/images/salons/2.png',
    '/images/salons/3.png',
    '/images/salons/4.png',
    '/images/salons/5.png',
    '/images/salons/6.png',
    '/images/salons/7.png',
    '/images/salons/8.png',
  ];

  return (
    <section className="px-5 lg:px-0 pt-6 pb-[96px] md:pt-20 md:pb-[130px]">
      <div className="flex flex-col gap-9">
        <div className="max-w-[500px] mx-auto md:text-center flex flex-col gap-6">
          <FadeUpText delay={0.1}>
            <h2 className="text-[28px] md:text-[44px] font-tenor-sans uppercase">
              Фото салонов
            </h2>
          </FadeUpText>
          <FadeUpText delay={0.2}>
            <p className="text-[18px] font-tilda-sans">
              Уютная атмосфера и безупречный сервис в каждом из наших салонов
            </p>
          </FadeUpText>
        </div>

        <div id="desktop-gallery" className="hidden md:flex gap-5 max-w-[1540px] mx-auto w-full">
          {/* Первая колонка */}
          <div className="w-[24.02%] h-[650px] relative">
            <Image 
              src="/images/salons/1.png"
              alt="Salon interior"
              fill
              className="w-full h-full object-cover"
            />
          </div>

          {/* Вторая колонка */}
          <div className="w-[15.58%] flex flex-col gap-5">
            <div className="h-[315px] relative">
              <Image 
                src="/images/salons/2.png"
                alt="Salon interior"
                fill
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[315px] relative">
              <Image 
                src="/images/salons/3.png"
                alt="Salon interior"
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Третья колонка */}
          <div className="w-[24.02%] h-[650px] relative">
            <Image 
              src="/images/salons/4.png"
              alt="Salon interior"
              fill
              className="w-full h-full object-cover"
            />
          </div>

          {/* Четвертая колонка */}
          <div className="w-[15.52%] flex flex-col gap-5">
            <div className="h-[421px] relative">
              <Image 
                src="/images/salons/5.png"
                alt="Salon interior"
                fill
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[209px] relative">
              <Image 
                src="/images/salons/6.png"
                alt="Salon interior"
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Пятая колонка */}
          <div className="w-[15.52%] flex flex-col gap-5">
            <div className="h-[318px] relative">
              <Image 
                src="/images/salons/7.png"
                alt="Salon interior"
                fill
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-[314px] relative">
              <Image 
                src="/images/salons/8.png"
                alt="Salon interior"
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div className="overflow-hidden relative" ref={emblaRef}>
            <div className="flex gap-5">
              {images.map((url, index) => (
                <div 
                  key={index} 
                  className={`flex-[0_0_85%] min-w-0 h-[520px] relative ${
                    index === images.length - 1 ? 'mr-5' : ''
                  }`}
                >
                  <Image 
                    src={url}
                    alt="Salon interior"
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => emblaApi?.scrollNext()}
              className="absolute -right-6 top-[224px] w-[72px] h-[72px] bg-white rounded-full flex items-center justify-center z-10"
            >
              <Image 
                src="/icons/r-arrow.svg" 
                alt="Next" 
                width={24} 
                height={15}
              />
            </button>
          </div>
          
          {/* Progress bar */}
          <div className="w-full mt-6 md:hidden">
            <div className="flex items-center h-1">
              <div 
                className="bg-[#6A7B61] h-full transition-all duration-200 ease-out"
                style={{ width: `${Math.max(12.5, scrollProgress * 100)}%` }}
              />
              <div 
                className="bg-primary/10 h-full transition-all duration-200 ease-out"
                style={{ width: `${100 - (scrollProgress * 100)}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}