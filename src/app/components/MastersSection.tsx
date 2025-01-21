'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { flushSync } from 'react-dom'
import useEmblaCarousel from 'embla-carousel-react'
import FadeUpText from './FadeUpText'

interface Master {
  id: number
  name: string
  role: string
  description: string
  image: string
  salon: string
}

const masters: Master[] = [
  {
    id: 1,
    name: 'МАША',
    role: 'ТОП МАСТЕР',
    description: 'Специализируется на аккуратном и долговечном маникюре и педикюре',
    image: '/images/masters/1.png',
    salon: 'Салон на Пушкинской'
  },
  {
    id: 2,
    name: 'ДАНА',
    role: 'СТАРШИЙ МАСТЕР',
    description: 'Любит экспериментировать с дизайном и использовать различные техники',
    image: '/images/masters/2.png',
    salon: 'Салон на Кирова'
  },
  {
    id: 3,
    name: 'ЕЛЕНА',
    role: 'ТОП МАСТЕР',
    description: 'Специализируется на сложных дизайнах, воплощая в жизнь самые смелые идеи клиентов',
    image: '/images/masters/3.png',
    salon: 'Салон на Ленина'
  },
  {
    id: 4,
    name: 'КРИСТИНА',
    role: 'МАСТЕР',
    description: 'Специализируется на аккуратном и долговечном маникюре и педикюре',
    image: '/images/masters/4.png',
    salon: 'Салон на Пушкинской'
  },
  {
    id: 5,
    name: 'КРИСТИНА',
    role: 'МАСТЕР',
    description: 'Специализируется на аккуратном и долговечном маникюре и педикюре',
    image: '/images/masters/4.png',
    salon: 'Салон на Пушкинской'
  },
  {
    id: 6,
    name: 'КРИСТИНА',
    role: 'МАСТЕР',
    description: 'Специализируется на аккуратном и долговечном маникюре и педикюре',
    image: '/images/masters/4.png',
    salon: 'Салон на Пушкинской'
  },
  {
    id: 7,
    name: 'КРИСТИНА',
    role: 'МАСТЕР',
    description: 'Специализируется на аккуратном и долговечном маникюре и педикюре',
    image: '/images/masters/4.png',
    salon: 'Салон на Пушкинской'
  },
  {
    id: 8,
    name: 'АЛЛА',
    role: 'ТОП МАСТЕР',
    description: 'Любит экспериментировать с дизайном и использовать различные техники',
    image: '/images/masters/5.png',
    salon: 'Салон на Кирова'
  }
]

const salons = [
  'Салон на Пушкинской',
  'Салон на Кирова',
  'Салон на Ленина'
]

const MastersSection = () => {
  const [activeSalon, setActiveSalon] = useState(salons[0])
  const filteredMasters = masters.filter(master => master.salon === activeSalon)

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: false,
    skipSnaps: false,
    slidesToScroll: 1,
    inViewThreshold: 0.7
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

  return (
    <section className="pt-12 pb-[96px] md:py-20 max-w-[1280px] mx-auto px-5 lg:px-0 block-p">
      <div className="flex flex-col gap-2 mb-6 md:mb-9">
        <FadeUpText delay={0.1}>
          <h6 className="text-primary font-tilda-sans text-[14px] uppercase">
            Доверьте свою красоту профессионалам
          </h6>
        </FadeUpText>
        <FadeUpText delay={0.2}>
          <h2 className="text-[28px] md:text-[44px] font-tenor-sans uppercase">
            наша команда мастеров
          </h2>
        </FadeUpText>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 mb-12 md:mb-9">
        {salons.map((salon) => (
          <button
            key={salon}
            onClick={() => setActiveSalon(salon)}
            className={`px-12 py-2.5 border border-black hover:opacity-80 text-14px  font-tilda-sans font-light ${
              activeSalon === salon 
                ? 'bg-black text-white' 
                : 'bg-transparent text-black'
            }`}
          >
            {salon}
          </button>
        ))}
      </div>

      <div className="hidden md:flex flex-wrap gap-x-5 gap-y-9">
        {filteredMasters.map((master) => (
          <div key={master.id} className="flex flex-col gap-6 w-full md:max-w-[48%] lg:max-w-[412px]">
            <div className="relative h-[600px]">
              <Image
                src={master.image}
                alt={master.name}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <FadeUpText delay={0.1}>
                <span className="text-primary font-tilda-sans font-bold text-sm">{master.role}</span>
              </FadeUpText>
              <FadeUpText delay={0.2}>
                <h3 className="text-lg font-bold font-tilda-sans">{master.name}</h3>
              </FadeUpText>
              <FadeUpText delay={0.2}>
                <p className="text-base font-light font-tilda-sans max-w-[346px]">{master.description}</p>
              </FadeUpText>
              <FadeUpText delay={0.3}>
                <button
                  className="w-[221px] py-2 text-primary flex items-center gap-x-2 font-tilda-sans font-bold text-sm uppercase group"
                >
                  Записаться к мастеру
                  <Image 
                    src="/icons/r-arrow.svg" 
                    alt="arrow-right" 
                    width={17} 
                    height={10} 
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />
                </button>
              </FadeUpText>
            </div>
          </div>
        ))}
      </div>
      
      <div className="md:hidden">
        <div className="overflow-hidden relative" ref={emblaRef}>
          <div className="flex gap-5">
            {filteredMasters.map((master) => (
              <div key={master.id} className="flex flex-col gap-6 w-full flex-1 min-w-full">
                <div className="relative h-[600px]">
                  <Image
                    src={master.image}
                    alt={master.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <FadeUpText delay={0.1}>
                    <span className="text-primary font-tilda-sans font-bold text-sm">{master.role}</span>
                  </FadeUpText>
                  <FadeUpText delay={0.2}>
                    <h3 className="text-lg font-bold font-tilda-sans">{master.name}</h3>
                  </FadeUpText>
                  <FadeUpText delay={0.3}>
                    <p className="text-base font-light font-tilda-sans max-w-[346px]">{master.description}</p>
                  </FadeUpText>
                  <FadeUpText delay={0.4}>
                    <button className="w-[221px] py-2 text-primary flex items-center gap-x-2 font-tilda-sans font-bold text-sm uppercase group">
                      Записаться к мастеру
                      <Image 
                        src="/icons/r-arrow.svg" 
                        alt="arrow-right" 
                        width={17} 
                        height={10} 
                        className="transition-transform duration-300 group-hover:translate-x-2"
                      />
                    </button>
                  </FadeUpText>
                </div>
              </div>
            ))}
          </div>
        </div>
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
    </section>
  )
}

export default MastersSection 