"use client"

import Header from "../components/Header";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Input from "../components/Input";
import { Checkbox } from "../components/Checkbox";
import { useEffect, useRef, useState } from "react";
import TabsSection from "../components/TabsSection";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Blog() {
	const [isChecked, setIsChecked] = useState(false);
	const [isChecked2, setIsChecked2] = useState(false);

	const contentRef = useRef(null);
	const imageRef = useRef(null);

	useEffect(() => {
		gsap.from(contentRef.current, {
				x: -100,
				opacity: 0,
				duration: 1,
				scrollTrigger: {
						trigger: contentRef.current,
						start: 'top 80%',
				}
		});

		gsap.from(imageRef.current, {
				x: 100,
				opacity: 0,
				duration: 1,
				scrollTrigger: {
						trigger: imageRef.current,
						start: 'top 80%',
				}
		});
}, []);

	const articles = [
		{
			img: '/images/articleCards/1.png',
			category: 'здоровье',
			date: 'Май 20, 2024',
			title: '10 советов для здоровья души и тела'
		},
		{
			img: '/images/articleCards/2.png',
			category: 'здоровье',
			date: 'июнь 18, 2024',
			title: 'Ароматерапия и ароматерапевтические процедуры'
		},
		{
			img: '/images/articleCards/3.png',
			category: 'Уход за кожей',
			date: 'дек 10, 2023',
			title: 'Тенденции красоты 2020: Естественность Красота'
		},
		{
			img: '/images/articleCards/4.png',
			category: 'Макияж',
			date: 'апр 15, 2024',
			title: 'Здоровый дух и тело: Дистресс Терапия'
		},
		{
			img: '/images/articleCards/5.png',
			category: 'здоровье',
			date: 'авг 24, 2024',
			title: '10 советов для здоровья души и тела'
		},
		{
			img: '/images/articleCards/6.png',
			category: 'здоровье',
			date: 'июнь 18, 2024',
			title: 'Здоровый дух и тело: Дистресс Терапия'
		},
		{
			img: '/images/articleCards/7.png',
			category: 'Макияж',
			date: 'дек 10, 2023',
			title: 'Секреты приготовления кофе, чая и матча'
		},
		{
			img: '/images/articleCards/8.png',
			category: 'Макияж',
			date: 'апр 15, 2024',
			title: 'Здоровый дух и тело: Дистресс Терапия'
		},
		{
			img: '/images/articleCards/9.png',
			category: 'Макияж',
			date: 'апр 15, 2024',
			title: 'Здоровый дух и тело: Дистресс Терапия'
		},
		{
			img: '/images/articleCards/10.png',
			category: 'Макияж',
			date: 'апр 15, 2024',
			title: 'Здоровый дух и тело: Дистресс Терапия'
		},
	];

	const articles2 = [
		{
			img: '/images/articleCards/1.png',
			category: 'здоровье',
			date: 'Май 20, 2024',
			title: '10 советов для здоровья души и тела'
		},
		{
			img: '/images/articleCards/2.png',
			category: 'здоровье',
			date: 'июнь 18, 2024',
			title: 'Ароматерапия и ароматерапевтические процедуры'
		},
		{
			img: '/images/articleCards/3.png',
			category: 'Уход за кожей',
			date: 'дек 10, 2023',
			title: 'Тенденции красоты 2020: Естественность Красота'
		},
		{
			img: '/images/articleCards/4.png',
			category: 'Макияж',
			date: 'апр 15, 2024',
			title: 'Здоровый дух и тело: Дистресс Терапия'
		},
		{
			img: '/images/articleCards/5.png',
			category: 'здоровье',
			date: 'авг 24, 2024',
			title: '10 советов для здоровья души и тела'
		},
		{
			img: '/images/articleCards/6.png',
			category: 'здоровье',
			date: 'июнь 18, 2024',
			title: 'Здоровый дух и тело: Дистресс Терапия'
		},
		{
			img: '/images/articleCards/7.png',
			category: 'Макияж',
			date: 'дек 10, 2023',
			title: 'Секреты приготовления кофе, чая и матча'
		}
	];

	const articles3 = [
		{
			img: '/images/articleCards/1.png',
			category: 'здоровье',
			date: 'Май 20, 2024',
			title: '10 советов для здоровья души и тела'
		},
		{
			img: '/images/articleCards/2.png',
			category: 'здоровье',
			date: 'июнь 18, 2024',
			title: 'Ароматерапия и ароматерапевтические процедуры'
		},
		{
			img: '/images/articleCards/3.png',
			category: 'Уход за кожей',
			date: 'дек 10, 2023',
			title: 'Тенденции красоты 2020: Естественность Красота'
		},
		{
			img: '/images/articleCards/4.png',
			category: 'Макияж',
			date: 'апр 15, 2024',
			title: 'Здоровый дух и тело: Дистресс Терапия'
		},
		{
			img: '/images/articleCards/5.png',
			category: 'здоровье',
			date: 'авг 24, 2024',
			title: '10 советов для здоровья души и тела'
		}
	];

	const articles4 = [
		{
			img: '/images/articleCards/1.png',
			category: 'здоровье',
			date: 'Май 20, 2024',
			title: '10 советов для здоровья души и тела'
		},
		{
			img: '/images/articleCards/2.png',
			category: 'здоровье',
			date: 'июнь 18, 2024',
			title: 'Ароматерапия и ароматерапевтические процедуры'
		},
		{
			img: '/images/articleCards/3.png',
			category: 'Уход за кожей',
			date: 'дек 10, 2023',
			title: 'Тенденции красоты 2020: Естественность Красота'
		},
		{
			img: '/images/articleCards/4.png',
			category: 'Макияж',
			date: 'апр 15, 2024',
			title: 'Здоровый дух и тело: Дистресс Терапия'
		}
	];

	return (
		<main>
			<section className="bg-grey">
					<Header />
					<div className="max-w-[1280px] mx-auto px-5 lg:px-0 pt-0 pb-24 lg:py-20 flex items-center justify-between flex-col-reverse lg:flex-row gap-y-20">
						<div ref={contentRef} className="flex flex-col gap-y-6 max-w-[645px] w-full">
							<div className="flex flex-col items-center lg:items-start gap-y-2">
								<div className="flex items-center gap-x-2">
									<p className="font-tilda-sans font-light text-[14px] text-white uppercase">
										здоровье
									</p>
									<div className="w-1 h-1 bg-white rounded-full" />
									<p className="font-tilda-sans font-light text-[14px] text-white uppercase">
										Май 20, 2024
									</p>
								</div>
								<h3 className="font-tenor-sans text-[24px] lg:text-[38px] text-white text-center lg:text-left">
									Оформление бровей в салоне: особенности, преимущества и возможные недостатки
								</h3>
							</div>
							<p className="w-full line-clamp-5 lg:line-clamp-1 pr-0 lg:pr-4 text-white font-tilda-sans text-[18px] h-[136px] lg:h-[27px]">
								Оформление бровей стало неотъемлемой частью ухода за внешностью для многих людей. Это процедура, которая помогает подчеркнуть естественную красоту лица, сделать взгляд более выразительным и ухоженным. В салонах красоты предлагают различные методы оформления бровей, каждый из которых имеет свои особенности, преимущества и возможные недостатки.
							</p>
							<Button variant="outline" className="text-secondary border-secondary w-full lg:max-w-[240px] hover:bg-secondary hover:text-white">прочитать статью</Button>
						</div>
						<div ref={imageRef} className="relative w-full h-[336px] md:h-[420px] lg:w-[555px] lg:h-[555px]">
							<img src="/images/article/1.png" alt="blog" className="absolute top-0 left-0 w-full h-full object-cover object-left" />
						</div>
					</div>
			</section>
			<section className="max-w-[1280px] mx-auto pb-12 md:py-20 px-5 lg:px-0">
				<TabsSection 
					articles={articles} 
					articles2={articles2} 
					articles3={articles3} 
					articles4={articles4} 
				/>
			</section>
			<section className="max-w-[1020px] mx-auto pt-12 pb-24 md:py-20 flex flex-col gap-y-6 px-5 lg:px-0">
				<div className="flex flex-col items-center text-center gap-y-2">
					<h3 className="font-tenor-sans text-[28px] md:text-[38px]">
						СЛЕДИТЕ ЗА НОВОСТЯМИ
					</h3>
					<p className="font-tilda-sans font-light text-[16px]">
						Спасибо, что Вы с нами!
					</p>
				</div>
				<Input variant="black" placeholder="Введите свою почту" />
				<div className="flex flex-col gap-y-3 max-w-[459px]">
					<Checkbox 
						label="Я прочитал(а) и даю Согласие на получение информационной и рекламной рассылки" 
						checked={isChecked} 
						onChange={() => setIsChecked(!isChecked)} 
					/>
					<Checkbox 
						label="Я прочитал(а) и согласен(а) с Политикой обработки персональных данных и даю Согласие на обработку персональных данных" 
						checked={isChecked2} 
						onChange={() => setIsChecked2(!isChecked2)} 
					/>
					<Button>
						Получать новости и следовать вашим советам
					</Button>
				</div>
			</section>
			<Footer />
		</main>
	)
}