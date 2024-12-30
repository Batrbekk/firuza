'use client'

import Image from 'next/image'

export default function SalonGallery() {
  return (
    <section className="py-20 border-y border-black/10">
      <div className="container mx-auto">
        <div className="flex flex-col gap-9">
          <div className="max-w-[500px] mx-auto text-center flex flex-col gap-6">
            <h2 className="text-[44px] font-tenor-sans uppercase">
              Наши салоны
            </h2>
            <p className="text-lg font-tilda-sans">
              Уютная атмосфера и безупречный сервис в каждом из наших салонов
            </p>
          </div>

          <div className="flex gap-5">
            {/* Первая колонка */}
            <div className="w-[370px] h-[650px]">
              <Image 
                src="/images/salons/1.svg"
                alt="Salon interior"
                width={370}
                height={650}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Вторая колонка */}
            <div className="w-[240px] flex flex-col gap-5">
              <div className="h-[315px]">
                <Image 
                  src="/images/salons/2.svg"
                  alt="Salon interior"
                  width={240}
                  height={315}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[315px]">
                <Image 
                  src="/images/salons/3.svg"
                  alt="Salon interior"
                  width={240}
                  height={315}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Третья колонка */}
            <div className="w-[371px] h-[650px]">
              <Image 
                src="/images/salons/4.svg"
                alt="Salon interior"
                width={371}
                height={650}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Четвертая колонка */}
            <div className="w-[239px] flex flex-col gap-5">
              <div className="h-[421px]">
                <Image 
                  src="/images/salons/5.svg"
                  alt="Salon interior"
                  width={239}
                  height={421}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[209px]">
                <Image 
                  src="/images/salons/6.svg"
                  alt="Salon interior"
                  width={239}
                  height={209}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Пятая колонка */}
            <div className="w-[239px] flex flex-col gap-5">
              <div className="h-[318px]">
                <Image 
                  src="/images/salons/7.svg"
                  alt="Salon interior"
                  width={239}
                  height={318}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[314px]">
                <Image 
                  src="/images/salons/8.svg"
                  alt="Salon interior"
                  width={239}
                  height={314}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 