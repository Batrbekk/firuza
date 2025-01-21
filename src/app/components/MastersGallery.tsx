'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { flushSync } from 'react-dom'
import FadeUpText from './FadeUpText'
import SlideUpReveal from './SlideUpReveal'

interface GalleryTab {
  id: number
  title: string
  images: string[]
}

const TABS: GalleryTab[] = [
  {
    id: 1,
    title: 'Маникюр',
    images: [
      '/images/gallery/manicure-1.png',
      '/images/gallery/manicure-2.png',
      '/images/gallery/manicure-3.png',
      '/images/gallery/manicure-4.png',
      '/images/gallery/manicure-5.png',
      '/images/gallery/manicure-6.png',
      '/images/gallery/manicure-7.png',
    ]
  },
  {
    id: 2,
    title: 'Педикюр',
    images: [
      '/images/gallery/manicure-1.png',
      '/images/gallery/manicure-2.png',
      '/images/gallery/manicure-3.png',
      '/images/gallery/manicure-4.png',
    ]
  },
  {
    id: 3,
    title: 'Наращивание ресниц',
    images: [
      '/images/gallery/lashes-1.png',
      '/images/gallery/lashes-2.png',
      '/images/gallery/lashes-3.png',
      '/images/gallery/lashes-4.png',
    ]
  },
  {
    id: 4,
    title: 'Оформление бровей',
    images: [
      '/images/gallery/brows-1.png',
      '/images/gallery/brows-2.png',
      '/images/gallery/brows-3.png',
    ]
  }
]

export default function MastersGallery() {
  const [activeTab, setActiveTab] = useState(TABS[0])
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true
  })

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

  const handleTabClick = (tab: GalleryTab) => {
    setActiveTab(tab)
    if (emblaApi) {
      emblaApi.scrollTo(0)
    }
  }

  return (
    <section className="bg-[#292929] py-12 md:pt-20 md:pb-[100px] px-5 lg:px-0">
      <div className="flex flex-col gap-9 pl-0 lg:pl-[95px]">
        <div className="flex flex-col gap-9 lg:pl-[130px]">
          <div className="flex flex-col gap-2">
            <FadeUpText>
              <h6 className="text-primary font-bold font-tilda-sans text-[14px] uppercase">
                Firuza Nail Studio
              </h6>
            </FadeUpText>
            <FadeUpText delay={0.1}>
              <h2 className="text-[28px] md:text-[44px] font-tenor-sans uppercase text-white">
                Работы НАШИХ мастеров
              </h2>
            </FadeUpText>
          </div>
          <div className="flex justify-center md:justify-start flex-wrap gap-4">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab)}
                className={`h-[40px] text-center transition-colors w-full max-w-[47%] lg:max-w-[180px] font-tilda-sans font-light text-[14px] ${
                  activeTab.id === tab.id
                    ? 'bg-[#D5B899] text-black'
                    : 'border border-[#D5B899] text-[#D5B899]'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-5">
            {activeTab.images.map((image, index) => (
              <div
                key={index}
                className="relative flex-[0_0_100%] md:flex-[0_0_370px] h-[520px] md:h-[600px]"
              >
                <img
                  src={image}
                  alt={`${activeTab.title} ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full mt-9 lg:px-[95px]">
        <div className="flex items-center px-0 lg:px-[130px] h-1">
          <div 
            className="bg-[#6A7B61] h-full transition-all duration-200 ease-out"
            style={{ width: `${scrollProgress * 100}%` }}
          />
          <div 
            className="bg-white h-full transition-all duration-200 ease-out"
            style={{ width: `${100 - (scrollProgress * 100)}%` }}
          />
        </div>
      </div>
    </section>
  )
} 