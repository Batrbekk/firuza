'use client'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../../public/images/logo.svg';
import Telegram from '../../../public/icons/telegram.svg';
import Vk from '../../../public/icons/vk.svg';
import Menu from './Menu';
import Accordion from './Accordion';

export default function Header() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const handleAccordionToggle = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <header className="w-full z-100">
      <div className="flex items-center px-5 py-6 justify-between md:justify-center md:px-0 md:py-[28px] border-b border-white/10 relative">
        <Link href="/" className="relative w-[88px] h-[38px] md:w-[148px] md:h-[67px]">
          <Image src={logo} alt="logo" fill />
        </Link>
        <div className="absolute md:left-[95px] hidden md:flex items-center gap-x-2.5">
          <Link href="#" target="_blank" className="flex items-center justify-center relative w-10 h-10">
            <Image src={Vk} alt="social-icon" fill />
          </Link>
          <Link href="#" target="_blank" className="flex items-center justify-center relative w-10 h-10">
            <Image src={Telegram} alt="social-icon" fill />
          </Link>
        </div>
        <Menu />
      </div>
      <div className="border-b border-white/10 hidden md:flex justify-center relative z-[999]">
        <div className="md:max-w-[720px] lg:max-w-[1020px] mx-auto flex items-center justify-between w-full header-row">
          <Accordion 
            text="Салоны" 
            id="salons"
            isOpen={openAccordion === 'salons'}
            onToggle={() => handleAccordionToggle('salons')}
          >
            <div className="flex items-center justify-between w-full">
              <Link href="/savin" className="text-black font-light font-tilda-sans text-sm uppercase hover:text-primary">
                Салон на Саввинском шоссе
              </Link>
              <Link href="/opolch" className="text-black font-light font-tilda-sans text-sm uppercase hover:text-primary">
                Салон на Народного ополчения
              </Link>
            </div>
          </Accordion>
          <Link href="/team" className="text-white font-bold font-tilda-sans text-sm uppercase">
            Наша команда
          </Link>
          <Link href="/promotion" className="text-white font-bold font-tilda-sans text-sm uppercase">
            Акции
          </Link>
          <Accordion 
            text="Обучение" 
            id="education"
            isOpen={openAccordion === 'education'}
            onToggle={() => handleAccordionToggle('education')}
          >
            <div className="flex items-center justify-between w-full">
              <Link href="/study#study-cards" className="text-black font-light font-tilda-sans text-sm uppercase hover:text-primary">
                Программа обучения
              </Link>
              <Link href="/study#study-certificate" className="text-black font-light font-tilda-sans text-sm uppercase hover:text-primary">
                Сертификаты
              </Link>
              <Link href="/study#study-works" className="text-black font-light font-tilda-sans text-sm uppercase hover:text-primary">
                Работы учеников
              </Link>
            </div>
          </Accordion>
          <Link href="/blog" className="text-white font-bold font-tilda-sans text-sm uppercase">
            Блог
          </Link>
          <Link href="/contact" className="text-white font-bold font-tilda-sans text-sm uppercase">
            Контакты
          </Link>
        </div>
      </div>
    </header>
  )
}
