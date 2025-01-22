'use client'

import Image from 'next/image'
import { useState, useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { flushSync } from 'react-dom'
import PromotionModal from './PromotionModal'
import FadeUpText from './FadeUpText'

interface PromotionCardProps {
  image: string
  title: string
  description: string
}

const PromotionCard = ({ image, title, description }: PromotionCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="flex-1 min-w-full md:min-w-0">
        <div className="flex flex-col gap-6">
          <div className="relative w-full h-[520px] md:h-[600px]">
            <Image
              fill
              quality={90}
              src={image}
              alt={title}
              className="w-full h-full absolute top-0 left-0 object-cover"
            />
          </div>

          <div className="flex flex-col gap-2">
            <FadeUpText delay={0.1}>
              <h5 className="font-tilda-sans text-[18px] font-bold uppercase">
                {title}
              </h5>
            </FadeUpText>
            <FadeUpText delay={0.2}>
              <p className="text-[16px] font-tilda-sans font-light lg:max-w-[346px]">
                {description}
              </p>
            </FadeUpText>
            <FadeUpText delay={0.3}>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-[126px] py-2 text-primary flex items-center gap-x-2 font-tilda-sans font-bold text-[14px] uppercase group"
              >
                Подробнее
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
      </div>

      <PromotionModal 
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
        }}
      />
    </>
  )
}

export default function Promotions() {
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

  const promotions = [
    {
      image: '/images/promotions/1.png',
      title: 'Акция "Приведи подругу"',
      description: 'Вы и ваша подруга получаете скидку 10% на любые услуги'
    },
    {
      image: '/images/promotions/2.png',
      title: 'Скидка на первое посещение',
      description: 'В день рождения 7 дней до и 7 дней после Дня Рождения — скидка 10% на любую услугу по предъявлению паспорта. Подарите себе праздник!'
    },
    {
      image: '/images/promotions/3.png',
      title: 'Комплексные процедуры',
      description: 'Забронируйте 3 процедуры и получите скидку 20% на весь комплекс'
    }
  ]

  return (
    <section className="py-12 md:py-20 md:border-b border-black/10 block-p">
      <div className="flex flex-col gap-[36px] md:gap-[60px] max-w-[1280px] mx-auto">
        <div className="flex flex-col gap-2 text-center mx-auto">
          <FadeUpText delay={0.1}>
            <h6 className="text-primary font-bold text-[14px] font-tilda-sans uppercase">
              наши спец предложения
            </h6>
          </FadeUpText>
          <FadeUpText delay={0.1}>
            <h2 className="uppercase font-tenor-sans text-[28px] md:text-[44px]">
              Акции и скидки
            </h2>
          </FadeUpText>
        </div>

        {/* Desktop version */}
        <div className="hidden md:flex flex-col lg:flex-row gap-5 px-5 lg:px-0">
          {promotions.map((promo, index) => (
            <PromotionCard key={index} {...promo} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden px-5">
          <div className="overflow-hidden relative" ref={emblaRef}>
            <div className="flex gap-5">
              {promotions.map((promo, index) => (
                <PromotionCard key={index} {...promo} />
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
          <div className="w-full mt-[96px] md:hidden">
            <div className="flex items-center h-1">
              <div 
                className="bg-[#6A7B61] h-full transition-all duration-200 ease-out"
                style={{ width: `${Math.max(33, scrollProgress * 100)}%` }}
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