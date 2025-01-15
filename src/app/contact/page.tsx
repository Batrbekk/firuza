'use client'

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from "../components/Footer";
import Header from "../components/Header";
import TextReveal from "../components/TextReveal";
import ContactForm from "../components/ContactForm";

export default function Contact() {
		const [mounted, setMounted] = useState(false);

		const firstInfoRef = useRef(null);
    const firstMapRef = useRef(null);
    const secondInfoRef = useRef(null);
    const secondMapRef = useRef(null);
	
		useEffect(() => {
			setMounted(true);

			if (mounted) {
				gsap.registerPlugin(ScrollTrigger);

				// Первый блок
        gsap.from(firstInfoRef.current, {
					x: -100,
					opacity: 0,
					duration: 1,
					scrollTrigger: {
							trigger: firstInfoRef.current,
							start: 'top 80%',
					}
				});

				gsap.from(firstMapRef.current, {
					x: 100,
					opacity: 0,
					duration: 1,
					scrollTrigger: {
							trigger: firstMapRef.current,
							start: 'top 80%',
					}
				});

				// Второй блок
				gsap.from(secondInfoRef.current, {
						x: 100,
						opacity: 0,
						duration: 1,
						scrollTrigger: {
								trigger: secondInfoRef.current,
								start: 'top 80%',
						}
				});

				gsap.from(secondMapRef.current, {
						x: -100,
						opacity: 0,
						duration: 1,
						scrollTrigger: {
								trigger: secondMapRef.current,
								start: 'top 80%',
						}
				});
			}

			return () => {
				ScrollTrigger.getAll().forEach(t => t.kill())
				gsap.killTweensOf("*")
			}
		}, [mounted]);

    return (
        <main>
					<section className="relative">
            <Header />
						<img 
							src="/images/bg-contact.png" 
							alt="team" 
							className="-z-10 absolute object-cover object-top md:object-center lg:object-[50%_83%] top-0 left-0 w-full h-full" 
						/>
            <div className="px-5 md:px-0 flex flex-col items-center gap-y-6 md:gap-y-4 mx-auto md:max-w-[528px] text-center py-24 md:pt-[60px] md:pb-20">
                <TextReveal className="uppercase text-white font-tenor-sans text-[28px] md:text-[64px]">
									Контакты
                </TextReveal>
                <p 
                    className="text-white font-tilda-sans text-[18px]"
                >
                   Мы будем рады видеть вас в одном из наших салонов. 
									 Выберите удобное для вас местоположение и запишитесь на услугу
                </p>
            </div>
        	</section>
					<section className="max-w-[1280px] mx-auto px-5 lg:px-0">
						<div className="pt-24 pb-6 md:pt-20 md:pb-[30px] flex flex-col lg:flex-row items-center justify-between gap-y-12">
							<div 
								ref={firstInfoRef}
								className="w-full lg:w-[390px] h-auto md:h-[460px] flex flex-col justify-between gap-y-12"
							>
								<div className="flex flex-col gap-y-4">
									<div className="flex flex-col gap-y-4">
										<h3 className="font-tenor-sans text-[28px] md:text-[31px]">
											ЖЕЛЕЗНОДОРОЖНЫЙ
										</h3>
										<p className="font-tilda-sans text-[18px] pb-4">
											Московская область, город Балашиха, микрорайон Железнодорожный, Саввинское шоссе, дом 4, корпус 2
										</p>
									</div>
									<div className="flex flex-col gap-y-2">
										<a 
											href="tel:+79060811441" 
											className="font-tilda-sans font-bold text-[20px]"
										>
											+7 (906) 081-14-41
										</a>
										<a 
											href="mailto:firuzanails@gmail.com" className="font-tilda-sans font-bold text-[20px]"
										>
											firuzanails@gmail.com
										</a>
									</div>
								</div>
								<div className="flex flex-col gap-y-4">
									<h3 className="font-tenor-sans md:text-[38px] text-[28px]">
										Режим работы
									</h3>
									<div className="flex items-center gap-x-4">
										<p className="text-primary font-tilda-sans text-[18px]">
											Пн - Пт
										</p>
										<h5 className="font-tilda-sans text-[18px] font-bold">
											09:00–21:00
										</h5>
									</div>
									<div className="flex items-center gap-x-4">
										<p className="text-primary font-tilda-sans text-[18px]">
											Сб - Вс
										</p>
										<h5 className="font-tilda-sans text-[18px] font-bold">
											09:30–21:00
										</h5>
									</div>
								</div>
							</div>	
							<div 
								ref={firstMapRef}
								className="relative w-full lg:w-[760px] h-[360px] lg:h-[664px]"
							>
								<div className="absolute top-0 left-0 w-full h-full">
									<iframe 
										src="https://yandex.ru/map-widget/v1/?ll=38.010094%2C55.744121&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjcwMzE5MBKfAdCg0L7RgdGB0LjRjywg0JzQvtGB0LrQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCR0LDQu9Cw0YjQuNGF0LAsINC80LjQutGA0L7RgNCw0LnQvtC9INCW0LXQu9C10LfQvdC-0LTQvtGA0L7QttC90YvQuSwg0KHQsNCy0LLQuNC90YHQutC-0LUg0YjQvtGB0YHQtSwgNNC6MiIKDUsKGEIVKfpeQg%2C%2C&z=16.12" 
										width="100%" 
										height="100%" 
										frameBorder="0" 
										allowFullScreen={true} 
										className="relative w-full h-full"
									/>
								</div>
							</div>
						</div>
						<div className="pt-6 pb-12 md:pt-20 md:pb-[30px] flex flex-col lg:flex-row-reverse items-center justify-between gap-y-12">
							<div 
								ref={secondInfoRef}
								className="w-full lg:w-[390px] h-auto md:h-[460px] flex flex-col justify-between gap-y-12"
							>
								<div className="flex flex-col gap-y-4">
									<div className="flex flex-col gap-y-4">
										<h3 className="font-tenor-sans text-[28px] md:text-[31px]">
											САВВИНО
										</h3>
										<p className="font-tilda-sans text-[18px] pb-4">
											Московская область, город Балашиха, микрорайон Саввино, ул. Народного ополчения, д. 1
										</p>
									</div>
									<div className="flex flex-col gap-y-2">
										<a 
											href="tel:+79260411441" 
											className="font-tilda-sans font-bold text-[20px]"
										>
											+7 (926) 041-14-41
										</a>
										<a 
											href="mailto:firuzanailstudio@gmail.com" className="font-tilda-sans font-bold text-[20px]"
										>
											firuzanailstudio@gmail.com
										</a>
									</div>
								</div>
								<div className="flex flex-col gap-y-4">
									<h3 className="font-tenor-sans text-[28px] md:text-[38px]">Режим работы</h3>
									<div className="flex items-center gap-x-4">
										<p className="text-primary font-tilda-sans text-[18px]">
											Пн - Пт
										</p>
										<h5 className="font-tilda-sans text-[18px] font-bold">
											09:00–21:00
										</h5>
									</div>
									<div className="flex items-center gap-x-4">
										<p className="text-primary font-tilda-sans text-[18px]">
											Сб - Вс
										</p>
										<h5 className="font-tilda-sans text-[18px] font-bold">
											09:30–21:00
										</h5>
									</div>
								</div>
							</div>	
							<div 
								ref={secondMapRef}
								className="relative w-full lg:w-[760px] h-[360px] lg:h-[664px]"
							>
								<div className="absolute top-0 left-0 w-full h-full">
									<iframe 
										src="https://yandex.ru/map-widget/v1/?ll=38.026944%2C55.735277&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgozMjY1NDk4MDc3Ep0B0KDQvtGB0YHQuNGPLCDQnNC-0YHQutC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0JHQsNC70LDRiNC40YXQsCwg0LzQuNC60YDQvtGA0LDQudC-0L0g0KHQsNCy0LLQuNC90L4sINGD0LvQuNGG0LAg0J3QsNGA0L7QtNC90L7Qs9C-INCe0L_QvtC70YfQtdC90LjRjywgMSIKDZYbGEIV7PBeQg%2C%2C&z=16.88" 
										width="100%" 
										height="100%" 
										frameBorder="0" 
										allowFullScreen={true} 
										className="relative w-full h-full"
									/>
								</div>
							</div>
						</div>
					</section>
					<section className="max-w-[1020px] mx-auto px-5 lg:px-0 pt-12 pb-24 md:py-20 flex flex-col item-center gap-y-10">
						<div className="flex flex-col items-center gap-y-6">
							<h3 className="font-tenor-sans text-[28px] md:text-[38px] text-center">
								ОСТАВЬТЕ СВОË СООБЩЕНИЕ
							</h3>
							<p className="hidden md:block font-tilda-sans text-[18px] text-center">
								Оставьте нам сообщение, <br />
								и мы свяжемся с вами как можно скорее.
							</p>
							<p className="block md:hidden font-tilda-sans text-[18px] text-center">
								И мы свяжемся с вами <br /> как можно скорее
							</p>
						</div>
						<ContactForm />
					</section>
					<Footer />
        </main>
    )
}