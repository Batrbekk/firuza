'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'

interface BenefitProps {
  subtitle: string
  title: string
  description: string
  image: string
  stats: Array<{
    label: string
    value: string
  }>
  imagePosition?: 'left' | 'right'
}

const Benefit = ({ subtitle, title, description, image, stats, imagePosition = 'left' }: BenefitProps) => {
  const content = (
    <div className="w-full lg:w-[630px] flex flex-col gap-4">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h6 className="text-primary text-[14px] font-tilda-sans font-bold uppercase">
            {subtitle}
          </h6>
          <h2 className="text-white text-[28px] md:text-[44px] font-tenor-sans uppercase leading-[128%]">
            {title}
          </h2>
        </div>
        <p className="text-white text-lg font-tilda-sans font-light leading-[29px]">
          {description}
        </p>
      </div>

      <div className="flex justify-between flex-col md:flex-row">
        {stats.map((stat, index) => (
          <div key={index} className={cn('flex gap-4 items-center', index === 1 ? 'justify-end' : 'justify-start')}>
            <p className={cn('text-white text-base font-tilda-sans font-light', stat.label === 'опытных мастеров' ? '' : 'w-min')}>
              {stat.label}
            </p>
            <p className="text-white text-[90px] font-tenor-sans">
              {stat.value.includes('+') ? (
                <>
                  {stat.value.replace('+', '')}
                  <span className="text-[60px]">+</span>
                </>
              ) : (
                stat.value
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  )

  const imageBlock = (
    <div className="w-full lg:w-[520px] h-[448px] relative">
      <Image 
        src={image}
        alt="Benefit illustration"
        fill
        className="object-cover"
      />
    </div>
  )

  return (
    <div className="flex flex-col lg:flex-row gap-y-[36px] gap-x-[130px] items-center">
      {imagePosition === 'left' ? (
        <>
          {imageBlock}
          {content}
        </>
      ) : (
        <>
          {content}
          {imageBlock}
        </>
      )}
    </div>
  )
}

export default function Benefits() {
  const benefits: BenefitProps[] = [
    {
      subtitle: "Доверьте свои ногти лучшим специалистам",
      title: "Мастера высшего класса",
      description: "В FirUza Nail Studio работают только высококвалифицированные мастера с многолетним опытом и подтверждёнными сертификатами. Они постоянно совершенствуют свои навыки, осваивая новые техники и тренды. Мы гарантируем безупречное качество выполнения любой процедуры, использование только профессиональных материалов и долговечность маникюра. Вы будете уверены в результате!",
      image: "/images/benefits/1.svg",
      stats: [
        {
          label: "филиала",
          value: "2"
        },
        {
          label: "опытных мастеров",
          value: "25+"
        }
      ],
      imagePosition: 'left' as const
    },
    {
      subtitle: "Создайте свой неповторимый образ вместе с нами",
      title: "индивидуальный подход",
      description: "В FirUza Nail Studio мы верим, что красота — это индивидуальность. Наши мастера внимательно выслушают ваши пожелания, учтут особенности ваших ногтей и помогут создать дизайн, идеально подчёркивающий вашу красоту и стиль. Мы предлагаем широкий выбор техник, цветов и материалов, чтобы воплотить ваши самые смелые идеи в жизнь. Ваш неповторимый образ — наша главная задача!",
      image: "/images/benefits/2.svg",
      stats: [
        {
          label: "актуальных расцветок",
          value: "100+"
        },
        {
          label: "вариантов дизайнов",
          value: "50+"
        }
      ],
      imagePosition: 'right' as const
    }
  ]

  return (
    <section className="bg-[#292929] px-5 lg:px-0 py-12 md:py-[130px]">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-[60px]">
        {benefits.map((benefit, index) => (
          <Benefit key={index} {...benefit} />
        ))}
      </div>
    </section>
  )
} 