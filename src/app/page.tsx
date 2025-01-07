'use client'

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Header from "./components/Header";
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
export default function Home() {
    const leftHandRef = useRef(null);
    const rightHandRef = useRef(null);
    const titleRef = useRef(null);
    const buttonsRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        const isMobile = window.innerWidth < 768; // md breakpoint

        if (isMobile) {
            // Мобильная версия
            gsap.set(leftHandRef.current, { 
                y: -100, 
                opacity: 0,
                rotation: -10,
                top: -40,
                left: 0
            });
            gsap.set(rightHandRef.current, { 
                y: 100, 
                opacity: 0,
                rotation: -16,
                bottom: 200,
                right: 0
            });
            gsap.set(titleRef.current, { opacity: 0, y: 50 });
            gsap.set(buttonsRef.current, { opacity: 0, y: 30 });

            tl.to([leftHandRef.current, rightHandRef.current], {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out"
            })
            .to(titleRef.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out"
            })
            .to(buttonsRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            });
        } else {
            // Десктопная версия
            const startXLeft = window.innerWidth <= 1640 ? -120 : 0;
            const startXRight = window.innerWidth <= 1640 ? 120 : 0;

            gsap.set(leftHandRef.current, { 
                x: `${startXLeft - 100}%`,
                rotation: 0,
                top: 0,
                left: 0
            });
            gsap.set(rightHandRef.current, { 
                x: `${startXRight + 100}%`,
                rotation: 0,
                bottom: 0,
                right: 0
            });
            gsap.set(titleRef.current, { opacity: 0, y: 50 });
            gsap.set(buttonsRef.current, { opacity: 0, y: 30 });

            tl.to([leftHandRef.current, rightHandRef.current], {
                x: (index) => index === 0 ? startXLeft : startXRight,
                duration: 1,
                ease: "power2.out"
            })
            .to(titleRef.current, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out"
            })
            .to(buttonsRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
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
    }, []);

    return (
        <main>
            <section className="relative overflow-hidden">
                <Header />
                <img 
                    src="/images/bg-main.png" 
                    alt="team" 
                    className="-z-10 absolute top-0 left-0 w-full h-full rotate-180 md:rotate-0" 
                />
                <img 
                    ref={leftHandRef}
                    src="/images/left.png" 
                    alt="left"
                    id="left-hand"
                    className='absolute -z-10 block' 
                />
                <img 
                    ref={rightHandRef}
                    src="/images/right.png" 
                    alt="right"
                    id="right-hand"
                    className='absolute -z-10 block' 
                />
                <div className='px-5 md:px-0 pt-[188px] pb-[168px] md:py-[120px] flex flex-col items-center gap-y-[175px] md:gap-y-20'>
                    <h1 
                        ref={titleRef}
                        className="text-white text-[28px] lg:text-[64px] font-tenor-sans uppercase text-center max-w-[320px] lg:max-w-[1392px]"
                    >
                        Пространство для тех, кто любит красоту и ценит качество
                    </h1>
                    <div 
                        ref={buttonsRef}
                        className='flex items-center justify-center flex-col md:flex-row gap-5 w-full'
                    >
                        <Button className="w-full md:w-[240px]">
                            Записаться
                        </Button>
                        <Button variant='outline' className="w-full md:w-[240px] text-white border-white">
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
                            Железнодорожный, <br />
                            Саввинское шоссе, дом 4, корпус 2     
                        </p>
                        <p className='text-white font-leight font-tilda-sans text-[16px]'>
                            Саввино, <br />
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
                            <a href="mailto:firuzanails@gmail.com" className='text-white font-leight font-tilda-sans text-[16px] underline'>
                                firuzanails@gmail.com 
                            </a>
                        </div>
                        <div className='flex flex-col items-center'>
                            <a href="tel:+79260411441" className='text-white font-leight font-tilda-sans text-[16px]'>
                                +7 (926) 041-14-41
                            </a>
                            <a href="mailto:firuzanailstudio@gmail.com" className='text-white font-leight font-tilda-sans text-[16px] underline'>
                                firuzanailstudio@gmail.com 
                            </a>
                        </div>
                    </div>
                </div>
                <div className='md:hidden absolute bottom-[94px] w-full flex justify-center'>
                  <Dropdown title='Адреса салонов'>
                    <div>
                      <p>Железнодорожный, Саввинское шоссе, дом 4, корпус 2</p>
                      <p>Саввино, ул. Народного ополчения, д. 1</p>
                    </div>
                  </Dropdown>
                </div>
            </section>
            <section className="px-5 lg:px-0 py-12 lg:py-20 flex flex-col md:border-dashed md:border border-black/10">
              <h3 className='text-center text-[28px] md:text-[44px] font-tenor-sans uppercase'>
                УСЛУГИ И ЦЕНЫ
              </h3>
              <Services />
              <Button className='w-full md:w-[240px] mx-auto'>
                полный прайс-лист
              </Button>
            </section>
            <section id="advantages" className="py-12 md:py-20 px-5 lg:px-[95px] flex items-start justify-between flex-col md:flex-row flex-wrap gap-y-6">
              <Advantages />
            </section>
            <MastersGallery />
            <section id="about-section" className="py-12 px-5 lg:px-0 md:py-20 flex items-center justify-between border-b border-black/10 lg:max-w-[1540px] mx-auto">
              <About />
              <div id="about-desc" className="w-full max-w-[695px]">
                <div className="flex flex-col gap-y-6">
                  <div className="flex flex-col gap-2">
                    <h6 className="text-primary font-bold font-tilda-sans text-[14px] uppercase">
                      о наших салонах
                    </h6>
                    <h2 className="text-[28px] md:text-[44px] font-tenor-sans uppercase">
                      Firuza Nail Studio
                    </h2>
                  </div>
                  <p className="font-tilda-sans font-light md:font-normal text-[16px] md:text-[18px]">
                    Добро пожаловать в сеть салонов красоты FirUza Nail Studio!
                    В наших салонах мы создали уютную и гостеприимную атмосферу, где каждый посетитель чувствует себя как дома. Мы уделяем большое внимание мелочам, чтобы ваш визит был максимально комфортным и приятным.
                  </p>
                  <p className="font-tilda-sans font-light md:font-normal text-[16px] md:text-[18px]">
                    Приходите к нам и убедитесь сами, почему FirUza Nail Studio — это идеальное место для заботы о себе и своем внешнем виде. Мы всегда рады видеть вас и готовы подарить вам радость и уверенность в своей красоте!
                  </p>
                </div>
                <div className="flex items-center flex-col md:flex-row justify-between mt-4">
                  <div className="flex items-center w-full gap-x-4">
                    <p className="font-tilda-sans font-light text-[16px]">
                      актуальных <br />
                      расцветок
                    </p>
                    <p className="font-tenor-sans text-[90px]">
                      100<span className="text-[64px]">+</span>
                    </p>
                  </div>
                  <div className="flex items-center w-full justify-end md:justify-start gap-x-4">
                    <p className="font-tilda-sans font-light text-[16px]">
                      довольных <br />
                      клиентов
                    </p>
                    <p className="font-tenor-sans text-[90px]">
                      5к<span className="text-[64px]">+</span>
                    </p>
                  </div>
                </div>
                <Button className="w-full md:w-[240px] mt-7">
                  записаться
                </Button>
              </div>
            </section>
            <AboutGallery />
            <Promotions />
            <SalonGallery />
            <Benefits />
            <Blog />
            <Footer />
        </main> 
    );
}











