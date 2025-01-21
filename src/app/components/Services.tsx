'use client'

import { cn } from "@/lib/utils";
import FadeUpText from "./FadeUpText";

interface ServiceItemProps {
  name: string;
  price: number;
}

function ServiceItem({ name, price }: ServiceItemProps) {
  return (
    <div className="flex items-center w-full">
      <span className="text-black font-tilda-sans text-[18px] md:text-[26px] w-fit md:max-w-[370px]">
        {name}
      </span>
      <div className="border-b border-dashed border-primary flex-grow mx-2 mt-2" />
      <div className="flex items-center gap-1 whitespace-nowrap">
        <span className="text-primary font-tilda-sans text-[18px] md:text-[26px]">от {price} ₽</span>
      </div>
    </div>
  )
}

interface ServiceCategoryProps {
  id: string;
  title: string;
  services: ServiceItemProps[];
  className?: string;
}

function ServiceCategory({ id, title, services, className }: ServiceCategoryProps) {
  return (
    <div id={id} className={cn("flex flex-col gap-[18px] md:gap-9 w-full", className)}>
      <FadeUpText>
        <h3 className="text-black text-[24px] md:text-[38px] font-tenor-sans text-center">
          {title}
        </h3>
      </FadeUpText>
      <FadeUpText delay={0.1}>
        <div className="flex flex-col gap-6">
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </FadeUpText>
    </div>
  )
}

export default function Services() {
     const leftColumnCategories = [
        {
          id: "manicure",
          title: "Маникюр",
          services: [
            { name: "Стандартный комплекс", price: 1900 },
            { name: "Прозрачное покрытие", price: 1700 },
            { name: "Френч", price: 2300 },
            { name: "Без покрытия", price: 1100 },
            { name: "Мужской", price: 1300 },
            { name: "Снятие гель-лака", price: 500 }
          ]
        },
        {
          id: "pedicure",
          title: "Педикюр",
          services: [
            { name: "Полный педикюр Golden Trace / Smart", price: 3000 },
            { name: "Мужской педикюр", price: 1500 }
          ]
        },
        {
          id: "nails",
          title: "Наращивание ногтей",
          services: [
            { name: "Наращивание S/M/L", price: 4000 },
            { name: "Френч наращивание", price: 4400 },
            { name: "Коррекция", price: 3200 }
          ]
        }
    ];

      const rightColumnCategories = [
        {
          id: "eyelashes",
          title: "Наращивание ресниц",
          services: [
            { name: "Классика 1D", price: 2400 },
            { name: "2D", price: 3000 },
            { name: "3D", price: 3000 },
            { name: "Ламинирование ресниц", price: 2500 }
          ],
          className: "hidden md:flex"
        },
        {
          id: "eyebrows",
          title: "Брови",
          services: [
            { name: "Комплекс ДУ + коррекция + окрашивание", price: 2000 },
            { name: "Коррекция + окрашивание хной/краской", price: 1500 },
            { name: "Окрашивание хной/краской", price: 800 }
          ]
        },
        {
          id: "permanent-makeup",
          title: "Перманентный макияж",
          services: [
            { name: "Перманентный макияж бровей", price: 8000 },
            { name: "Перманентный макияж губ", price: 6000 },
            { name: "Коррекция перманентного макияжа бровей", price: 8000 }
          ],
          className: "hidden md:flex"
        }
    ];

  return (
    <div className="max-w-[1280px] w-full mx-auto flex lg:items-start justify-between lg:flex-row flex-col items-center gap-y-9 mt-6 mb-9 md:mt-12 md:mb-[60px]">
      <div className="flex flex-col gap-y-9 md:gap-y-[60px] max-w-[580px] w-full">
        {leftColumnCategories.map((category, index) => (
          <ServiceCategory 
            key={`left-${index}`} 
            {...category} 
          />
        ))}
      </div>
      <div className="flex flex-col gap-y-9 md:gap-y-[60px] max-w-[580px] w-full">
        {rightColumnCategories.map((category, index) => (
          <ServiceCategory 
            key={`right-${index}`} 
            {...category}
            className={category.className} 
          />
        ))}
      </div>
    </div>
  ) 
} 