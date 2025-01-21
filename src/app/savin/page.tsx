'use client'

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Services from '../components/Services'
import Footer from '../components/Footer'
import MastersSection from '../components/MastersSection'
import Header from '../components/Header'
import TextReveal from '../components/TextReveal'
import Button from '../components/Button'
import About from '../components/About'
import AboutGallery from '../components/AboutGallery'
import { YCLIENTS_IDS } from '../constants/yclients'
import YClientsWidget from '../components/YClientsWidget'
import FadeUpText from '../components/FadeUpText'

// Регистрируем плагин ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Savin() {
  const bgRef = useRef<HTMLImageElement>(null);
  const firstSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const parallaxAnimation = gsap.to(bgRef.current, {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: firstSectionRef.current,
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
  }, []);

  return (
    <main>
      <section ref={firstSectionRef} className="relative overflow-hidden">
        <Header />
        <img 
          ref={bgRef}
          src="/images/bg-savin.png" 
          alt="team" 
          className="-z-10 absolute object-cover object-center top-0 left-0 w-full h-full will-change-transform" 
        />
        <div className="px-5 md:px-0 flex flex-col items-center gap-y-[96px] md:gap-y-[60px] text-center md:py-20 py-[96px]">
            <div className="flex flex-col">
              <TextReveal className="uppercase text-white font-tenor-sans text-[28px] md:text-[64px]">
                САЛОН
              </TextReveal>
              <TextReveal className="uppercase text-white font-tenor-sans text-[28px] md:text-[64px] max-w-[314px] md:max-w-full">
                НА Саввинском шоссе
              </TextReveal>
            </div>
            <div 
              className='flex items-center justify-center flex-col md:flex-row gap-5 w-full'
            >
              <Button 
                className="w-full md:w-[240px] hover:bg-white hover:text-primary ms_booking"
                data-yclients-company-id={YCLIENTS_IDS.SAVIN}
              >
                Записаться
              </Button>
              <Button 
                variant='outline' 
                className="w-full md:w-[240px] text-white border-white hover:text-primary hover:bg-white"
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
      </section>
      <section id="about-section" className="py-12 px-5 lg:px-0 md:py-20 flex items-center justify-between lg:max-w-[1540px] mx-auto">
        <About />
        <div id="about-desc" className="w-full max-w-[695px]">
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-2">
              <FadeUpText delay={0.1}>
                <h6 className="text-primary font-bold font-tilda-sans text-[14px] uppercase">
                  о салоне 
                </h6>
              </FadeUpText>
              <FadeUpText delay={0.2}>
                <h2 className="text-[28px] md:text-[44px] font-tenor-sans uppercase">
                  Firuza Nail Studio
                </h2>
              </FadeUpText>
            </div>
            <FadeUpText delay={0.3}>
              <p className="font-tilda-sans font-light md:font-normal text-[16px] md:text-[18px]">
                  FirUza Nail Studio — это бренд красоты и качества. Наше пространство создано для тех, кто ценит индивидуальный подход и желает получить качественный сервис и результаты. Безупречное качество и элегантность - так мы видим идеальный маникюр и педикюр. Создание и коррекция формы бровей, ламинирование и наращивание ресниц, подчёркивающий ваш взгляд, перманентный макияж - всё чтобы сделать ваши брови и ресницы такими, как нравится вам!
              </p>
            </FadeUpText>
            <FadeUpText delay={0.4}>
              <p className="font-tilda-sans font-light md:font-normal text-[16px] md:text-[18px]">
                Доверяйте свою красоту профессионалам!
              </p>
            </FadeUpText>
          </div>
          <div className="flex items-center flex-col md:flex-row justify-between mt-4">
            <FadeUpText delay={0.5}>
              <div className="flex items-center w-full gap-x-4">
                <p className="font-tilda-sans font-light text-[16px]">
                  опытных <br />
                  мастеров
                </p>
                <p className="font-tenor-sans text-[90px]">
                  12<span className="text-[64px]">+</span>
                </p>
              </div>
            </FadeUpText>
            <FadeUpText delay={0.5}>
              <div className="flex items-center w-full justify-end md:justify-start gap-x-4">
                <p className="font-tilda-sans font-light text-[16px]">
                  довольных <br />
                  клиентов
                </p>
                <p className="font-tenor-sans text-[90px]">
                  5к<span className="text-[64px]">+</span>
                </p>
              </div>
            </FadeUpText>
          </div>
          <Button className="w-full md:w-[240px] mt-7 hover:bg-white hover:text-primary">
            Выбрать мастера
          </Button>
        </div>
      </section>
      <AboutGallery />
      <section id="prices" className="px-5 lg:px-0 py-12 lg:py-20 flex flex-col">
        <h3 className='text-center text-[28px] md:text-[44px] font-tenor-sans uppercase'>
          УСЛУГИ И ЦЕНЫ
        </h3>
        <Services />
        <Button className='w-full md:w-[240px] mx-auto'>
          полный прайс-лист
        </Button>
      </section>
      <MastersSection />
      <Footer />
      <YClientsWidget companyId={YCLIENTS_IDS.SAVIN} />
    </main> 
  );
}











