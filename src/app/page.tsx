'use client'

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from "./components/Header";
import TextReveal from "./components/TextReveal";
import Button from "./components/Button";
import Dropdown from './components/Dropdown';
import Services from './components/Services';
import Advantages from './components/Advantages';
import MastersGallery from './components/MastersGallery';
import About from './components/About';
import AboutGallery from './components/AboutGallery';
import Footer from './components/Footer';
import Promotions from './components/Promotions';
import SalonGallery from './components/SalonGallery';
import Benefits from './components/Benefits';
import Blog from './components/Blog';
import { YCLIENTS_IDS } from './constants/yclients'
import YClientsWidget from './components/YClientsWidget';
import Preloader from './components/Preloader';
import { useFirstVisit } from './hooks/useFirstVisit';
import FadeUpText from './components/FadeUpText'
import Image from 'next/image'

// Регистрируем плагин ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const { isFirstVisit, isLoading: isCheckingFirstVisit } = useFirstVisit();
    const leftHandRef = useRef(null);
    const rightHandRef = useRef(null);
    const titleRef = useRef(null);
    const buttonsRef = useRef(null);
    const bgRef = useRef<HTMLImageElement>(null);

    // Устанавливаем начальные позиции при монтировании
    useEffect(() => {
        if (!isCheckingFirstVisit && !isFirstVisit) {
            setIsLoading(false); // Пропускаем прелоадер если это не первый визит
        }
        
        const isMobile = window.innerWidth < 768;
        
        if (isMobile) {
            gsap.set([leftHandRef.current, rightHandRef.current, titleRef.current, buttonsRef.current], { opacity: 0 });
            gsap.set(leftHandRef.current, {
                y: -50,
                rotation: -10,
                top: -40,
                left: 0
            });
            gsap.set(rightHandRef.current, {
                y: 50,
                rotation: -16,
                bottom: 200,
                right: 0
            });
        } else {
            const startXLeft = window.innerWidth <= 1640 ? -120 : 0;
            const startXRight = window.innerWidth <= 1640 ? 120 : 0;
            
            gsap.set([leftHandRef.current, rightHandRef.current, titleRef.current, buttonsRef.current], { opacity: 0 });
            gsap.set(leftHandRef.current, {
                x: `${startXLeft - 50}%`,
                rotation: 0,
                top: 0,
                left: 0
            });
            gsap.set(rightHandRef.current, {
                x: `${startXRight + 50}%`,
                rotation: 0,
                bottom: 0,
                right: 0
            });
        }
    }, [isCheckingFirstVisit, isFirstVisit]);

    // Обработчик завершения загрузки
    const handleLoadComplete = () => {
        setIsLoading(false);
    };

    // Анимации запускаются только после загрузки
    useEffect(() => {
        if (!isLoading) {
            const tl = gsap.timeline();
            const isMobile = window.innerWidth < 768;

            if (isMobile) {
                tl.to([leftHandRef.current, rightHandRef.current], {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power2.out"
                })
                .to(titleRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out"
                })
                .to(buttonsRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    ease: "power2.out"
                });
            } else {
                const startXLeft = window.innerWidth <= 1640 ? -120 : 0;
                const startXRight = window.innerWidth <= 1640 ? 120 : 0;

                tl.to([leftHandRef.current, rightHandRef.current], {
                    x: (index) => index === 0 ? startXLeft : startXRight,
                    opacity: 1,
                    duration: 0.6,
                    ease: "power2.out"
                })
                .to(titleRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out"
                })
                .to(buttonsRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    ease: "power2.out"
                });
            }

            // Обновление позиций при изменении размера окна
            const handleResize = () => {
                const newIsMobile = window.innerWidth < 768;

                if (newIsMobile) {
                    gsap.set(leftHandRef.current, {
                        x: 0,
                        y: 0,
                        rotation: -10,
                        top: -40,
                        left: 0
                    });
                    gsap.set(rightHandRef.current, {
                        x: 0,
                        y: 0,
                        rotation: -16,
                        bottom: 200,
                        right: 0
                    });
                } else {
                    const newStartXLeft = window.innerWidth <= 1640 ? -120 : 0;
                    const newStartXRight = window.innerWidth <= 1640 ? 120 : 0;

                    gsap.set(leftHandRef.current, {
                        x: newStartXLeft,
                        y: 0,
                        rotation: 0,
                        top: 0,
                        left: 0
                    });
                    gsap.set(rightHandRef.current, {
                        x: newStartXRight,
                        y: 0,
                        rotation: 0,
                        bottom: 0,
                        right: 0
                    });
                }
            };

            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [isLoading]);

    // Параллакс эффект тоже запускается после загрузки
    useEffect(() => {
        if (!isLoading) {
            const parallaxAnimation = gsap.to(bgRef.current, {
                yPercent: 20,
                ease: "none",
                scrollTrigger: {
                    trigger: "section",
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                    invalidateOnRefresh: true
                }
            });

            return () => {
                parallaxAnimation.kill();
                ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            };
        }
    }, [isLoading]);

    return (
        <main>
            {isLoading && isFirstVisit && typeof window !== 'undefined' && <Preloader onLoadComplete={handleLoadComplete} />}
            <section className="relative overflow-hidden">
                <Header />
                <Image
                    ref={bgRef}
                    src="/images/bg-main.png"
                    alt="team"
                    fill
                    className="-z-10 absolute top-0 left-0 w-full h-full rotate-180 md:rotate-0 will-change-transform"
                />
                <Image
                    src="/images/bg-main-layer.png"
                    alt="team"
                    fill
                    className="-z-[5] absolute top-0 left-0 w-full h-full rotate-180 md:rotate-0 hidden md:block"
                />
                <img
                    ref={leftHandRef}
                    src="/images/left.png"
                    alt="left"
                    id="left-hand"
                    sizes="(max-width: 768px) 50vw, 50vw"
                    className='absolute -z-[10] block opacity-0'
                />
                <img
                    ref={rightHandRef}
                    src="/images/right.png"
                    alt="right"
                    id="right-hand"
                    className='absolute -z-[10] block opacity-0'
                />
                <div
                    ref={titleRef}
                    className='px-5 md:px-0 pt-[188px] pb-[168px] md:py-[120px] flex flex-col items-center gap-y-[175px] md:gap-y-20 z-50 opacity-0'
                >
                    <h1
                        className="text-white text-[28px] lg:text-[64px] font-tenor-sans uppercase text-center max-w-[320px] lg:max-w-[1392px]"
                    >
                        Пространство для тех, кто любит красоту и ценит качество
                    </h1>
                    <div
                    ref={buttonsRef}
                    className='flex items-center justify-center flex-col md:flex-row gap-5 w-full opacity-0'
                >
                    <Button 
                        className="w-full md:w-[240px] hover:bg-white hover:text-primary ms_booking"
                        data-yclients-company-id={YCLIENTS_IDS.MAIN}
                    >
                        Записаться
                    </Button>
                    <Button 
                        variant='outline' 
                        className="w-full md:w-[240px] text-white border-white hover:text-primary hover:border-primary"
                        onClick={() => {
                            document.getElementById('prices')?.scrollIntoView({ 
                                behavior: 'smooth',
                                block: 'start'
                            })
                        }}
                    >
                        посмотреть цены
                    </Button>
                </div>
                </div>
                <div className='hidden md:flex max-w-[1008px] mx-auto items-start justify-center pb-[80px]'>
                    <div className='w-1/3 py-4 flex flex-col items-center gap-y-4 text-center'>
                        <p className='font-tilda-sans font-bold text-white text-[14px] uppercase'>
                            адреса салонов
                        </p>
                        <p className='text-white font-leight font-tilda-sans text-[16px]'>
                            Железнодорожный, <br/>
                            Саввинское шоссе, дом 4, корпус 2
                        </p>
                        <p className='text-white font-leight font-tilda-sans text-[16px]'>
                            Саввино, <br/>
                            ул. Народного ополчения, д. 1
                        </p>
                    </div>
                    <div className='w-1/3 py-4 flex flex-col items-center gap-y-4 text-center'>
                        <p className='font-tilda-sans font-bold text-white text-[14px] uppercase'>
                            часы работы
                        </p>
                        <p className='text-white font-leight font-tilda-sans text-[16px]'>
                            Пн-Пт: 09:00–21:00
                        </p>
                        <p className='text-white font-leight font-tilda-sans text-[16px]'>
                            Сб-Вс: 09:30–21:00
                        </p>
                    </div>
                    <div className='w-1/3 py-4 flex flex-col items-center gap-y-4 text-center'>
                        <p className='font-tilda-sans font-bold text-white text-[14px] uppercase'>
                            КОНТАКТЫ
                        </p>
                        <div className='flex flex-col items-center'>
                            <a href="tel:+79060811441" className='text-white font-leight font-tilda-sans text-[16px]'>
                                +7 (906) 081-14-41
                            </a>
                            <a href="mailto:firuzanails@gmail.com"
                                className='text-white font-leight font-tilda-sans text-[16px] underline'>
                                firuzanails@gmail.com
                            </a>
                        </div>
                        <div className='flex flex-col items-center'>
                            <a href="tel:+79260411441" className='text-white font-leight font-tilda-sans text-[16px]'>
                                +7 (926) 041-14-41
                            </a>
                            <a href="mailto:firuzanailstudio@gmail.com"
                                className='text-white font-leight font-tilda-sans text-[16px] underline'>
                                firuzanailstudio@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <div className='md:hidden absolute bottom-[94px] w-full flex justify-center'>
                <Dropdown title='Адреса салонов'>
                    <div className="flex flex-col gap-y-4 items-center">
                        <div className="flex flex-col gap-y-2 text-center">
                            <p className="font-tilda-sans text-[16px]">
                                <b>Железнодорожный,</b> <br/> Саввинское шоссе, дом 4, корпус 2
                            </p>
                            <div className="flex flex-col">
                                <a href="tel:+79060811441" className="font-tilda-sans text-[16px] font-light">
                                    +7 (906) 081-14-41
                                </a>
                                <a href="mailto:firuzanails@gmail.com" className="font-tilda-sans text-[16px] font-light">
                                    firuzanails@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2 text-center">
                            <p className="font-tilda-sans text-[16px]">
                                <b>Саввино,</b> <br/> ул. Народного ополчения, д. 1
                            </p>
                            <div className="flex flex-col">
                                <a href="tel:+79260411441" className="font-tilda-sans text-[16px] font-light">
                                    +7 (926) 041-14-41
                                </a>
                                <a href="mailto:firuzanailstudio@gmail.com" className="font-tilda-sans text-[16px] font-light">
                                    firuzanailstudio@gmail.com
                                </a>
                            </div>
                            <div className="mt-2 flex flex-col items-center gap-y-4 text-center">
                                <h6 className="text-primary font-bold font-tilda-sans text-[14px] uppercase">
                                    часы работы
                                </h6>
                                <div className="flex flex-col items-center gap-y-2 text-center">
                                    <p className="font-tilda-sans font-light text-[16px]">Пн-Пт: 09:00–21:00</p>
                                    <p className="font-tilda-sans font-light text-[16px]">Сб-Вс: 09:30–21:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Dropdown>
            </div>
            <section
                id="prices"
                className="px-5 lg:px-0 py-12 lg:py-20 flex flex-col md:border-dashed md:border border-black/10 bg-[#fcfcfc] md:mg-white"
            >
                <FadeUpText>
                    <h2 className='text-center text-[28px] md:text-[44px] font-tenor-sans uppercase'>
                        УСЛУГИ И ЦЕНЫ
                    </h2>
                </FadeUpText>
                <Services/>
                <Button className='w-full md:w-[240px] mx-auto'>
                  полный прайс-лист
                </Button>
            </section>
            <section id="advantages"
                className="py-12 md:py-20 px-5 lg:px-[95px] flex items-start justify-between flex-col md:flex-row flex-wrap gap-y-6">
                <Advantages/>
            </section>
            <MastersGallery/>
            <section id="about-section"
                className="py-12 px-5 lg:px-0 md:py-20 flex items-center justify-between border-b border-black/10 lg:max-w-[1540px] mx-auto">
                <About/>
                <div id="about-desc" className="w-full max-w-[695px]">
                    <div className="flex flex-col gap-y-6">
                        <FadeUpText>
                            <div className="flex flex-col gap-2">
                                <h6 className="text-primary font-bold font-tilda-sans text-[14px] uppercase">
                                    о наших салонах
                                </h6>
                                <h2 className="text-[28px] md:text-[44px] font-tenor-sans uppercase">
                                    Firuza Nail Studio
                                </h2>
                            </div>
                        </FadeUpText>
                        <FadeUpText delay={0.2}>
                            <p className="font-tilda-sans font-light md:font-normal text-[16px] md:text-[18px]">
                                Добро пожаловать в сеть салонов красоты FirUza Nail Studio!
                                В наших салонах мы создали уютную и гостеприимную атмосферу, где каждый посетитель чувствует себя как
                                дома. Мы уделяем большое внимание мелочам, чтобы ваш визит был максимально комфортным и приятным.
                            </p>
                        </FadeUpText>
                        <FadeUpText delay={0.3}>
                            <p className="font-tilda-sans font-light md:font-normal text-[16px] md:text-[18px]">
                                Приходите к нам и убедитесь сами, почему FirUza Nail Studio — это идеальное место для заботы о себе и
                                своем внешнем виде. Мы всегда рады видеть вас и готовы подарить вам радость и уверенность в своей
                                красоте!
                            </p>
                        </FadeUpText>
                    </div>
                    <div className="flex items-center flex-col md:flex-row justify-between mt-4">
                        <FadeUpText delay={0.4}>
                          <div className="flex items-center w-full gap-x-4">
                              <p className="font-tilda-sans font-light text-[16px]">
                                  актуальных <br/>
                                  расцветок
                              </p>
                              <p className="font-tenor-sans text-[90px]">
                                  100<span className="text-[64px]">+</span>
                              </p>
                          </div>
                        </FadeUpText>
                        <FadeUpText delay={0.4}>
                          <div className="flex items-center w-full justify-end md:justify-start gap-x-4">
                              <p className="font-tilda-sans font-light text-[16px]">
                                  довольных <br/>
                                  клиентов
                              </p>
                              <p className="font-tenor-sans text-[90px]">
                                  5к<span className="text-[64px]">+</span>
                              </p>
                          </div>
                        </FadeUpText>
                    </div>
                    <Button 
                        className="w-full md:w-[240px] mt-7 ms_booking"
                        data-yclients-company-id={YCLIENTS_IDS.MAIN}
                    >
                        записаться
                    </Button>
                </div>
            </section>
            <AboutGallery/>
            <Promotions/>
            <SalonGallery/>
            <Benefits/>
            <Blog/>
            <Footer/>
            <YClientsWidget companyId={YCLIENTS_IDS.MAIN} />
        </main>
    );
}











