"use client"
import Image from "next/image";
import logo from '../../../public/images/green-logo.svg';
import { useState, useEffect } from "react";
import Link from "next/link";
import MobileAccordion from "./MobileAccordion";
import Button from "./Button";
import vk from '../../../public/icons/vk-green.svg';
import telegram from '../../../public/icons/telegram-green.svg';

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);
    
    return (
        <>
            <button 
                id="menu-button"
                className={`w-[36px] flex flex-col items-end gap-y-1 md:hidden z-50 relative ${isOpen ? 'menu-open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="burger-line w-full h-[2px] bg-white rounded-full" />
                <div className="burger-line w-[32px] h-[2px] bg-white rounded-full" />
                <div className="burger-line w-[24px] h-[2px] bg-white rounded-full" />
            </button>

            <div 
                className={`fixed inset-0 bg-white transition-all duration-300 ease-in-out ${
                    isOpen 
                    ? 'opacity-100 visible h-dvh' 
                    : 'opacity-0 invisible h-0'
                } z-40`}
            >
                <div className={`container mx-auto px-5 pt-[86px] transition-all duration-300 delay-150 relative h-full flex flex-col justify-between overflow-auto ${
                    isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}>
                    <div className="absolute left-5 top-6">
                        <div className="relative w-[88px] h-[38px] md:w-[148px] md:h-[67px]">
                            <Image src={logo} alt="logo" fill />
                        </div>
                    </div>
                    <nav className="py-6 text-center flex flex-col gap-y-6">
                        <MobileAccordion title="Салоны">
                            <div className="flex flex-col gap-y-2">
                                <Link href="/" className="uppercase font-tilda-sans font-light text-sm">
                                    Салон на Саввинском шоссе
                                </Link>
                                <Link href="/" className="uppercase font-tilda-sans font-light text-sm">
                                    Салон на Народного ополчения
                                </Link> 
                            </div>
                        </MobileAccordion>
                        <Link href="/" className="uppercase font-tilda-sans font-bold text-sm">
                            Наша команда
                        </Link>
                        <Link href="/" className="uppercase font-tilda-sans font-bold text-sm">
                            подарочные карты
                        </Link>
                        <Link href="/" className="uppercase font-tilda-sans font-bold text-sm">
                            акции
                        </Link>
                        <MobileAccordion title="Обучение">
                            <div className="flex flex-col gap-y-2">
                                <Link href="/" className="uppercase font-tilda-sans font-light text-sm">
                                    Программа обучения
                                </Link>
                                <Link href="/" className="uppercase font-tilda-sans font-light text-sm">
                                    Сертификаты
                                </Link> 
                                <Link href="/" className="uppercase font-tilda-sans font-light text-sm">
                                    Работы учеников
                                </Link> 
                            </div>
                        </MobileAccordion>
                        <Link href="/" className="uppercase font-tilda-sans font-bold text-sm">
                            блог
                        </Link>
                        <Link href="/" className="uppercase font-tilda-sans font-bold text-sm">
                            Контакты
                        </Link>
                    </nav>
                    <div className="pb-6 flex flex-col gap-y-5">
                        <Button>
                            Записаться
                        </Button>
                        <Button variant="outline">
                            посмотреть цены
                        </Button>
                        <div className="flex items-center justify-center gap-x-2.5">
                            <div className="relative w-10 h-10">
                                <Link href="/" target="_blank">
                                    <Image src={vk} alt="vk" fill />
                                </Link>
                            </div>
                            <div className="relative w-10 h-10">
                                <Link href="/" target="_blank">
                                    <Image src={telegram} alt="telegram" fill />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}