"use client"
import Image from "next/image";
import logo from '../../../public/images/green-logo.svg';
import { useState, useEffect } from "react";
import Link from "next/link";
import MobileAccordion from "./MobileAccordion";
import Button from "./Button";
import vk from '../../../public/icons/vk-green.svg';
import telegram from '../../../public/icons/telegram-green.svg';
import { usePathname } from 'next/navigation';

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    
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

    const getBookingUrl = () => {
        switch(pathname) {
            case '/opolch':
                return 'https://b1219727.yclients.com/company/1116949/personal/menu?o=';
            case '/savin':
                return 'https://b583630.yclients.com/company/551568/personal/menu?o=';
            default:
                return 'https://b1333420.yclients.com/select-city/157/select-branch?o=';
        }
    };

    const handleBooking = () => {
        window.open(getBookingUrl());
        handleMenuClick();
    };

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <>
            <button 
                onClick={handleMenuClick}
                id="menu-button"
                className={`w-[36px] flex flex-col items-end gap-y-1 md:hidden z-50 relative ${isOpen ? 'menu-open' : ''}`}
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
                                <Link href="/savin" className="uppercase font-tilda-sans font-light text-sm">
                                    Салон на Саввинском шоссе
                                </Link>
                                <Link href="/opolch" className="uppercase font-tilda-sans font-light text-sm">
                                    Салон на Народного ополчения
                                </Link> 
                            </div>
                        </MobileAccordion>
                        <Link href="/team" className="uppercase font-tilda-sans font-bold text-sm">
                            Наша команда
                        </Link>
                        <Link href="/promotion" className="uppercase font-tilda-sans font-bold text-sm">
                            акции
                        </Link>
                        <MobileAccordion title="Обучение">
                            <div className="flex flex-col gap-y-2">
                                <Link href="/study" className="uppercase font-tilda-sans font-light text-sm">
                                    Программа обучения
                                </Link>
                            </div>
                        </MobileAccordion>
                        <Link href="/blog" className="uppercase font-tilda-sans font-bold text-sm">
                            блог
                        </Link>
                        <Link href="/contact" className="uppercase font-tilda-sans font-bold text-sm">
                            Контакты
                        </Link>
                    </nav>
                    <div className="pb-6 flex flex-col gap-y-5">
                        <Button 
                            onClick={handleBooking}
                        >
                            Записаться
                        </Button>
                        <Button 
                            variant="outline"
                            onClick={() => {
                                handleMenuClick()
                                document.getElementById('prices')?.scrollIntoView({ 
                                    behavior: 'smooth',
                                    block: 'start'
                                })
                            }}
                        >
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