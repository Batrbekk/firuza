'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

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
    image: '/images/masters/1.svg',
    salon: 'Салон на Пушкинской'
  },
  {
    id: 2,
    name: 'ДАНА',
    role: 'СТАРШИЙ МАСТЕР',
    description: 'Любит экспериментировать с дизайном и использовать различные техники',
    image: '/images/masters/2.svg',
    salon: 'Салон на Кирова'
  },
  {
    id: 3,
    name: 'ЕЛЕНА',
    role: 'ТОП МАСТЕР',
    description: 'Специализируется на сложных дизайнах, воплощая в жизнь самые смелые идеи клиентов',
    image: '/images/masters/3.svg',
    salon: 'Салон на Ленина'
  },
  {
    id: 4,
    name: 'КРИСТИНА',
    role: 'МАСТЕР',
    description: 'Специализируется на аккуратном и долговечном маникюре и педикюре',
    image: '/images/masters/4.svg',
    salon: 'Салон на Пушкинской'
  },
  {
    id: 5,
    name: 'КРИСТИНА',
    role: 'МАСТЕР',
    description: 'Специализируется на аккуратном и долговечном маникюре и педикюре',
    image: '/images/masters/4.svg',
    salon: 'Салон на Пушкинской'
  },
  {
    id: 6,
    name: 'КРИСТИНА',
    role: 'МАСТЕР',
    description: 'Специализируется на аккуратном и долговечном маникюре и педикюре',
    image: '/images/masters/4.svg',
    salon: 'Салон на Пушкинской'
  },
  {
    id: 7,
    name: 'КРИСТИНА',
    role: 'МАСТЕР',
    description: 'Специализируется на аккуратном и долговечном маникюре и педикюре',
    image: '/images/masters/4.svg',
    salon: 'Салон на Пушкинской'
  },
  {
    id: 8,
    name: 'АЛЛА',
    role: 'ТОП МАСТЕР',
    description: 'Любит экспериментировать с дизайном и использовать различные техники',
    image: '/images/masters/5.svg',
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

  return (
    <section className="py-20 container mx-auto">
      <div className="mb-9">
        <p className="text-[#6A7B61] text-sm mb-2">
          Доверьте свою красоту профессионалам
        </p>
        <h2 className="text-4xl">
          наша команда мастеров
        </h2>
      </div>

      <div className="flex gap-4 mb-9">
        {salons.map((salon) => (
          <button
            key={salon}
            onClick={() => setActiveSalon(salon)}
            className={`px-12 py-2.5 border border-black ${
              activeSalon === salon 
                ? 'bg-black text-white' 
                : 'bg-transparent text-black'
            }`}
          >
            {salon}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-x-5 gap-y-9">
        {filteredMasters.map((master) => (
          <div key={master.id} className="flex flex-col gap-6">
            <div className="relative h-[600px]">
              <Image
                src={master.image}
                alt={master.name}
                fill
                className="object-cover"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="text-primary font-tilda-sans font-bold text-sm">{master.role}</span>
              <h3 className="text-lg font-bold font-tilda-sans">{master.name}</h3>
              <p className="text-base font-light font-tilda-sans max-w-[346px]">{master.description}</p>
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
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MastersSection 