'use client'

import Image from 'next/image'
import { useState } from 'react'
import PromotionModal from './PromotionModal'
interface PromotionCardProps {
  image: string
  title: string
  description: string
}

const PromotionCard = ({ image, title, description }: PromotionCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
        <div className="flex-1">
        <div className="flex flex-col gap-6">
            <div className="relative w-full h-[600px]">
            <Image
                src={image}
                alt={title}
                fill
                priority
                className="object-cover"
            />
            </div>

            <div className="flex flex-col gap-2">
            <h5 className="font-tilda-sans text-lg font-bold uppercase">{title}</h5>
            <p className="text-base font-tilda-sans font-light">{description}</p>
            <button
                onClick={() => setIsModalOpen(true)}
                className="w-[126px] py-2 text-primary flex items-center gap-x-2 font-tilda-sans font-bold text-sm uppercase group"
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
            </div>
        </div>
        </div>

        <PromotionModal 
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
        />
    </>
  )
}

export default function Promotions() {
  const promotions = [
    {
      image: '/images/promotions/1.svg',
      title: 'Акция "Приведи подругу"',
      description: 'Вы и ваша подруга получаете скидку 10% на любые услуги'
    },
    {
      image: '/images/promotions/2.svg',
      title: 'Скидка на первое посещение',
      description: 'Получите скидку 15% на первое посещение нашего салона'
    },
    {
      image: '/images/promotions/3.svg',
      title: 'Комплексные процедуры',
      description: 'Забронируйте 3 процедуры и получите скидку 20% на весь комплекс'
    }
  ]

  return (
    <section className="py-20 border-y border-black/10">
      <div className="container mx-auto">
        <div className="flex flex-col gap-[60px]">
          <div className="flex flex-col gap-2 text-center mx-auto">
            <h6 className="text-primary font-bold text-sm font-tilda-sans uppercase">наши спец предложения</h6>
            <h2 className="uppercase font-tenor-sans text-[44px]">Акции и скидки</h2>
          </div>

          {/* Карточки акций */}
          <div className="flex gap-5">
            {promotions.map((promo, index) => (
              <PromotionCard key={index} {...promo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 