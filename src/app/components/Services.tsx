'use client'

interface ServiceItemProps {
  name: string;
  price: number;
}

function ServiceItem({ name, price }: ServiceItemProps) {
  return (
    <div className="flex items-center w-full">
      <span className="text-black font-tilda-sans text-[26px]">{name}</span>
      <div className="border-b border-dashed border-primary flex-grow mx-2"></div>
      <div className="flex items-center gap-1 whitespace-nowrap">
        <span className="text-primary font-tilda-sans text-[26px]">от {price} ₽</span>
      </div>
    </div>
  )
}

interface ServiceCategoryProps {
  title: string;
  services: ServiceItemProps[];
}

function ServiceCategory({ title, services }: ServiceCategoryProps) {
  return (
    <div className="flex flex-col gap-9 max-w-[560px] w-full">
      <h3 className="text-black text-[38px] font-tenor-sans text-center">{title}</h3>
      <div className="flex flex-col gap-6">
        {services.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </div>
    </div>
  )
}

export default function Services() {
     const leftColumnCategories = [
        {
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
          title: "Педикюр",
          services: [
            { name: "Полный педикюр Golden Trace / Smart", price: 3000 },
            { name: "Мужской педикюр", price: 1500 }
          ]
        },
        {
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
          title: "Наращивание ресниц",
          services: [
            { name: "Классика 1D", price: 2400 },
            { name: "2D", price: 3000 },
            { name: "3D", price: 3000 },
            { name: "Ламинирование ресниц", price: 2500 }
          ]
        },
        {
          title: "Брови",
          services: [
            { name: "Комплекс ДУ + коррекция + окрашивание", price: 2000 },
            { name: "Коррекция + окрашивание хной/краской", price: 1500 },
            { name: "Окрашивание хной/краской", price: 800 }
          ]
        },
        {
          title: "Перманентный макияж",
          services: [
            { name: "Перманентный макияж бровей", price: 8000 },
            { name: "Перманентный макияж губ", price: 6000 },
            { name: "Коррекция перманентного макияжа бровей", price: 8000 }
          ]
        }
    ];

  return (
    <section className="w-full py-20 container mx-auto">
      <div className="flex flex-col items-center justify-center w-full">
        <h2 className="text-black text-[44px] font-tenor-sans text-center mb-12">УСЛУГИ И ЦЕНЫ</h2>
        <div className="flex justify-center gap-x-28">
            <div className="flex flex-col gap-y-[60px]">
                {leftColumnCategories.map((category, index) => (
                <ServiceCategory key={`left-${index}`} {...category} />
                ))}
            </div>
            <div className="flex flex-col gap-y-[60px]">
                {rightColumnCategories.map((category, index) => (
                <ServiceCategory key={`right-${index}`} {...category} />
                ))}
            </div>
        </div>
        <div className="flex justify-center mt-[60px]">
          <button className="bg-[#6A7B61] text-white uppercase font-bold text-sm py-4 px-10">
            полный прайс-лист
          </button>
        </div>
      </div>
    </section>
  ) 
} 