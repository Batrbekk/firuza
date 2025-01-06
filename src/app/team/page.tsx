'use client'

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from "../components/Header";
import TextReveal from "../components/TextReveal";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Team() {
	const imagesContainerRef = useRef<HTMLDivElement>(null);
    const imagesRef = useRef<HTMLImageElement[]>([]);

    useEffect(() => {
        const images = imagesRef.current;
        
        images.forEach((image) => {
            if (image) {
                gsap.from(image, {
                    opacity: 0,
                    scale: 1.1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: image,
                        start: "top 85%",
                        end: "bottom 15%",
                        toggleActions: "play none none reverse"
                    }
                });
            }
        });
    }, []);

    const addToRefs = (el: HTMLImageElement | null) => {
        if (el && !imagesRef.current.includes(el)) {
            imagesRef.current.push(el);
        }
    };

    return (
        <main>
					<section className="relative">
            <Header />
						<img 
							src="/images/back-team.png" 
							alt="team" 
							className="-z-10 absolute object-cover top-0 left-0 w-full h-full object-center" 
						/>
            <div className="pt-[62px] md:pt-20 pb-24 md:pb-52 px-5 md:px-0 flex flex-col items-center gap-y-[36px] md:gap-y-4 mx-auto md:max-w-[760px] text-center">
                <TextReveal className="uppercase text-white font-tenor-sans text-[28px] md:text-[64px]">
									Наша команда
                </TextReveal>
                <p 
                    className="text-white font-tilda-sans text-lg"
                >
                   Фундамент FirUza Nail Studio — это профессиональные мастера, влюблённые в свою профессию.
                </p>
            </div>
        	</section>
					<section ref={imagesContainerRef} className="max-w-[1280px] mx-auto px-5 lg:px-0 py-24 md:py-12 flex flex-col gap-y-6">
						<div className="flex flex-col lg:flex-row items-start md:items-center justify-between w-full">
							<div className="flex flex-col gap-y-6 w-full lg:max-w-[630px]">
								<div className="flex flex-col gap-y-2">
									<h6 className="text-primary font-medium font-tilda-sans text-sm uppercase">Сердце FirUza Nail Studio</h6>
									<h4 className="font-tenor-sans text-[28px] md:text-[44px] uppercase">
										наша команда
									</h4>
								</div>
								<div className="relative w-full h-[480px] block lg:hidden">
									<img 
										ref={addToRefs}
										src="/images/teams/1.png" 
										alt="team" 
										className="object-cover absolute top-0 left-0 w-full h-full" 
									/>
								</div>
								<p className="font-tilda-sans text-[16px] font-light md:text-[18px]">
									Для нас нет ничего дороже, чем видеть вашу счастливую улыбку на лице.
								</p>
								<p className="font-tilda-sans text-[16px] font-light md:text-[18px]">
									Поэтому все наши специалисты профессионалы своего дела - их отличительная черта - любовь к своей работе.
								</p>
								<div className="flex flex-col gap-y-2">
									<h6 className="font-tilda-sans font-bold text-[14px] uppercase">
										Мастерство, рожденное из любви:
									</h6>
									<p className="font-tilda-sans font-light text-[16px] md:text-[18px]">
										Наши мастера — это не просто специалисты, это люди, искренне увлеченные ногтевым искусством.
									</p>
									<p className="font-tilda-sans font-light text-[16px] md:text-[18px]">
										Эта любовь к делу проявляется в каждом их движении, в каждом созданном образе.
									</p>
									<p className="font-tilda-sans font-light text-[16px] md:text-[18px]">
										Они постоянно развиваются, следят за последними тенденциями и совершенствуют свои навыки.
									</p>
								</div>
							</div>
							<div className="hidden lg:block h-[750px] max-w-[500px] w-full relative">
								<img
									ref={addToRefs}
									src="/images/teams/1.png"
									alt="team" 
									className="object-cover absolute top-0 left-0 w-full h-full" 
								/>
							</div>
						</div>
						<div className="relative w-full h-[240px] md:h-[750px]">
							<img 
								ref={addToRefs}
								src="/images/teams/2.png" 
								alt="team-2" 
								className="object-cover absolute top-0 left-0 w-full h-full" 
							/>
						</div>
						<div className="flex items-center flex-col lg:flex-row justify-between gap-y-6">
							<div className="relative w-full lg:w-[630px] h-[480px] md:h-[750px]">
								<img 
									ref={addToRefs}
									src="/images/teams/3.png" 
									alt="team-3" 
									className="object-cover absolute top-0 left-0 w-full h-full" 
								/>
							</div>
							<div className="relative w-full lg:w-[630px] h-[480px] md:h-[750px]">
								<img 
									ref={addToRefs}
									src="/images/teams/4.png" 
									alt="team-4" 
									className="object-cover absolute top-0 left-0 w-full h-full" 
								/>
							</div>
						</div>
						<div className="relative w-full h-[240px] md:h-[750px]">
							<img 
								ref={addToRefs}
								src="/images/teams/5.png" 
								alt="team-2" 
								className="object-cover absolute top-0 left-0 w-full h-full" 
							/>
						</div>
					</section>
					<Footer />
        </main>
    )
}