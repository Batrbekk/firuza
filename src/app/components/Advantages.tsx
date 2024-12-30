import Image from 'next/image'

interface AdvantageItemProps {
  icon: number
  title: string
  description: string
}

function AdvantageItem({ icon, title, description }: AdvantageItemProps) {
  return (
    <div className="flex flex-col items-center gap-6 w-[360px]">
       <Image 
            src={`/icons/advantage/${icon}.svg`}
            alt={title}
            width={110}
            height={110}
          />
      <h5 className="text-center font-tilda-sans text-lg uppercase">{title}</h5>
      <p className="text-center font-tilda-sans font-light text-base">{description}</p>
    </div>
  )
}

export default function Advantages() {
  const advantages: AdvantageItemProps[] = [
    {
      icon: 1,
      title: "МАСТЕРА-ПРОФЕССИОНАЛЫ",
      description: "Команда высококвалифицированных специалистов с большим опытом работы и безупречной репутацией"
    },
    {
      icon: 2,
      title: "УНИКАЛЬНОСТЬ",
      description: "Создаем неповторимый образ, подчеркивающий вашу индивидуальность"
    },
    {
      icon: 3,
      title: "ТОЛЬКО ПРЕМИУМ-МАТЕРИАЛЫ",
      description: "Работаем только с лучшими материалами для безупречного результата"
    },
    {
      icon: 4,
      title: "УДОБНАЯ ОНЛАЙН-ЗАПИСЬ",
      description: "Быстрая и удобная система онлайн-записи, позволяющая выбрать удобное время и мастера без звонков и ожиданий"
    }
  ]

  return (
    <section className="w-full py-20">
      <div className="container mx-auto">
        <div className="flex justify-center gap-x-8">
          {advantages.map((advantage, index) => (
            <AdvantageItem key={index} {...advantage} />
          ))}
        </div>
      </div>
    </section>
  )
} 