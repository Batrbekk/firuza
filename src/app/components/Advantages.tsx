import Image from 'next/image'
import FadeUpText from './FadeUpText'

interface AdvantageItemProps {
  icon: number
  title: string
  description: string
}

function AdvantageItem({ icon, title, description }: AdvantageItemProps) {
  return (
    <FadeUpText delay={0.1}>
      <div id="advantage-item" className="flex flex-col items-center gap-6 max-w-[360px] w-full">
      <img 
          src={`/icons/advantage/${icon}.svg`}
          alt={title}
        />
        <h5 className="text-center font-tilda-sans text-[18px] font-bold uppercase">
          {title}
        </h5>
        <p className="text-center font-tilda-sans font-light text-[16px]">
          {description}
        </p>
      </div>
    </FadeUpText>
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
    <>
      {advantages.map((advantage, index) => (
        <AdvantageItem key={index} {...advantage} />
      ))}
    </>
  )
} 