'use client'

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from "../components/Footer";
import Header from "../components/Header";
import TextReveal from "../components/TextReveal";
import Button from '../components/Button';
import StudyCards from "../components/StudyCards";
import Image from "next/image";
import MastersGallery from "../components/MastersGallery";

// Регистрируем плагин ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Study() {
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
                    src="/images/bg-study.png" 
                    alt="team" 
                    className="-z-10 absolute object-cover md:object-center top-0 left-0 w-full h-full will-change-transform" 
                />
                <div className="px-5 md:px-0 flex flex-col items-center gap-y-6 md:gap-y-4 mx-auto md:max-w-[528px] lg:max-w-[1200px] text-center py-24 md:pt-[60px] md:pb-20">
                    <TextReveal className="uppercase text-white font-tenor-sans text-[28px] md:text-[64px] study-title">
                        Обучение ногтевому сервису
                    </TextReveal>
                    <p className="text-white font-tilda-sans text-[18px]">
                        Освой востребованную профессию в нашей школе ногтевого сервиса!
                    </p>
                </div>
            </section>
            <section className="relative md:max-w-[1280px] mx-auto px-5 md:px-11 lg:px-0 pt-24 pb-12 md:py-20 flex items-center justify-between lg:flex-row flex-col study-desc">
                <div className="flex flex-col gap-y-6 lg:max-w-[630px]">
                    <h2 className="font-tenor-sans text-[28px] md:text-[44px] uppercase leading-[1.2]">
                        обучение <br />
                        Firuza Nail Studio
                    </h2>
                    <p className="font-tilda-sans text-[18px]">
                        Мы поможем вам освоить востребованную профессию и начать успешную карьеру в индустрии красоты! Запишитесь на курс уже сегодня!
                    </p>
                    <p className="font-tilda-sans text-[18px]">
                        Запишитесь на обучение уже сегодня и откройте для себя новые горизонты!
                    </p>
                </div>
                <div className="flex flex-col gap-y-9 lg:max-w-[500px] w-full">
                    <div className="flex md:flex-row flex-col lg:items-center justify-between w-full">
                        <div className="flex items-center gap-x-4">
                            <p className="font-tilda-sans font-light text-[16px]">
                                курса
                            </p>
                            <p className="font-tenor-sans text-[90px] ">7</p>
                        </div>
                        <div className="flex items-center gap-x-4 ml-auto md:ml-0">
                            <p className="font-tilda-sans font-light text-[16px]">
                                трудоустроенных <br /> учеников
                            </p>
                            <p className="font-tenor-sans text-[90px]">85<span className="text-[60px]">%</span></p>
                        </div>
                    </div>
                    <Button className="w-full lg:max-w-[240px]">
                        Выбрать тариф
                    </Button>
                </div>
            </section>
            <section id="study-cards" className="py-20 max-w-[1540px] mx-auto px-5 md:px-11 lg:px-0 flex flex-col items-center gap-y-9">
                <div className="flex flex-col gap-y-2 text-center max-w-[630px]">
                    <h6 className="font-tilda-sans text-[14px] text-primary uppercase font-medium ">
                        выбери свой курс
                    </h6>
                    <h2 className="font-tenor-sans text-[28px] md:text-[44px] uppercase leading-[1.2]">
                        Обучение маникюру
                    </h2>
                    <p className="font-tilda-sans text-[18px]">
                        Мы предлагаем три варианта обучения маникюру, которые позволят вам освоить навыки с нуля или углубить ваши существующие знания. Выберите программу, которая подойдёт именно вашим целям!
                    </p>
                </div>
                <StudyCards />
            </section>
            <section id="study-certificate" className="py-20 max-w-[1540px] mx-auto px-5 md:px-11 lg:px-0 hidden md:flex flex-col items-center gap-y-9">
                <div className="flex flex-col gap-y-2 text-center max-w-[630px]">
                    <h6 className="font-tilda-sans text-[14px] text-primary uppercase font-medium ">
                        о прохождении обучения
                    </h6>
                    <h2 className="font-tenor-sans text-[28px] md:text-[44px] uppercase leading-[1.2]">
                        сертификат
                    </h2>
                    <p className="font-tilda-sans text-[18px]">
                        По завершении обучения вы получите документ, подтверждающий ваши умения и знания. Это позволит вам уверенно применять полученные навыки в индустрии красоты. Мы гордимся качеством нашего обучения и гарантируем высокий уровень подготовки наших специалистов.
                    </p>
                </div>
                <div className="flex lg:flex-row flex-col items-center gap-5 w-full certificate-wrapper">
                    <div className="md:w-[500px] lg:w-[33%] h-[698px] relative">
                        <Image 
                            src="/images/certificate/1.png" 
                            alt="certificate" 
                            fill 
                            className="object-cover"
                            quality={100}
                            unoptimized
                        />
                    </div>
                    <div className="md:w-[500px] lg:w-[33%] h-[698px] relative">
                        <Image 
                            src="/images/certificate/2.png" 
                            alt="certificate" 
                            fill 
                            className="object-cover"
                            quality={100}
                            unoptimized
                        />
                    </div>
                    <div className="md:w-[500px] lg:w-[33%] h-[698px] relative">
                        <Image 
                            src="/images/certificate/3.png" 
                            alt="certificate" 
                            fill 
                            className="object-cover"
                            quality={100}
                            unoptimized
                        />
                    </div>
                </div>
            </section>
            <div id="study-works" className="hidden md:block">
                <MastersGallery />
            </div>
            <section id="study-start-desc" className="py-20 max-w-[1540px] mx-auto px-5 md:px-11 lg:px-0 hidden md:flex lg:flex-row flex-col items-center justify-between">
                <h2 className="font-tenor-sans text-[28px] md:text-[44px] uppercase leading-[1.2] max-w-[889px]">
                    Запишитесь на обучение прямо сейчас и начните свой путь к успеху в индустрии красоты!
                </h2>
                <div className="flex flex-col gap-y-4 w-full lg:max-w-[500px]">
                    <div className="flex items-center gap-x-4">
                        <p className="font-tilda-sans font-light text-[16px]">
                            начало <br />
                            обучения
                        </p>
                        <p className="font-tenor-sans text-[90px] uppercase">
                                12 <span className="text-[40px]">декабря</span>
                        </p>
                    </div>
                    <Button className="w-full">
                        записаться на курс
                    </Button>
                </div>
            </section>
            <Footer />
        </main>
    )
}