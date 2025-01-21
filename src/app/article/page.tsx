'use client'

import Header from "../components/Header";
import ArticleCard from "../components/ArticleCard";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Button from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { useState, FormEvent } from "react";
import SlideUpReveal from "../components/SlideUpReveal";
import FadeUpText from "../components/FadeUpText";
import { toast } from 'sonner'

export default function Article() {
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
	];

	const [isChecked, setIsChecked] = useState(false);
	const [isChecked2, setIsChecked2] = useState(false);
	const [email, setEmail] = useState('')
	const [emailError, setEmailError] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [checkboxError, setCheckboxError] = useState(false)

	const validateEmail = (email: string) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
	}

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		
		// Сброс ошибок
		setEmailError(false)
		setCheckboxError(false)
		
		// Валидация
		let hasError = false
		
		if (!validateEmail(email)) {
			setEmailError(true)
			hasError = true
		}
		
		if (!isChecked || !isChecked2) {
			setCheckboxError(true)
			hasError = true
		}
		
		if (hasError) return

		// Эмуляция отправки
		setIsLoading(true)
		
		try {
			await new Promise(resolve => setTimeout(resolve, 1500))
			
			toast.success('Подписка успешно оформлена!', {
				className: 'font-tilda-sans',
				style: {
					background: '#292929',
					color: 'white',
					border: 'none'
				},
				duration: 3000
			})
			
			// Очистка формы
			setEmail('')
			setIsChecked(false)
			setIsChecked2(false)
			
		} catch (error) {
			toast.error('Произошла ошибка. Попробуйте позже.', {
				className: 'font-tilda-sans',
				style: {
					background: '#F00F0F',
					color: 'white',
					border: 'none'
				}
			})
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<main>
			<section className="bg-grey">
					<Header />
					<div className="flex items-center flex-col md:flex-row lg:gap-x-[110px]">
						<SlideUpReveal delay={0} maskColor="#292929" className="w-full lg:w-[46.817%] h-[336px] lg:h-[555px] relative">
							<img src="/images/article/1.png" alt="article" className="absolute top-0 left-0 w-full h-full object-left" />
						</SlideUpReveal>
						<div className="px-5 lg:px-0 pb-[38px] lg:pb-[74px] pt-[48px] lg:pt-0 flex flex-col gap-y-9 lg:gap-y-6 max-w-[645px] w-full text-center">
							<div className="flex flex-col items-center gap-y-2">
								<FadeUpText delay={0.1}>
									<div className="flex items-center gap-x-2">
										<p className="font-tilda-sans font-light text-[14px] text-white uppercase">
											здоровье
										</p>
										<div className="w-1 h-1 bg-white rounded-full" />
										<p className="font-tilda-sans font-light text-[14px] text-white uppercase">
											Май 20, 2024
										</p>
									</div>
								</FadeUpText>
								<FadeUpText delay={0.2}>
									<h3 className="font-tenor-sans text-[24px] lg:text-[38px] text-white ">
										Оформление бровей в салоне: особенности, преимущества и возможные недостатки
									</h3>
								</FadeUpText>
							</div>
							<FadeUpText delay={0.3}>
								<p className="font-tilda-sans text-[18px] text-white">
									Особенности процедуры
								</p>
							</FadeUpText>
						</div>
					</div>
			</section>
			<section className="px-5 lg:px-0 pb-[38px] pt-12 lg:py-20 w-full md:max-w-[760px] mx-auto">
				<div className="flex flex-col gap-y-10">
					<div className="flex flex-col gap-y-6">
						<FadeUpText>
							<p className="font-tilda-sans text-[18px]">
								Оформление бровей стало неотъемлемой частью ухода за внешностью для многих людей. Это процедура, которая помогает подчеркнуть естественную красоту лица, сделать взгляд более выразительным и ухоженным. В салонах красоты предлагают различные методы оформления бровей, каждый из которых имеет свои особенности, преимущества и возможные недостатки.
							</p>
						</FadeUpText>
						<FadeUpText delay={0.1}>
							<p className="font-tilda-sans text-[18px]">
								Особенности процедуры
							</p>
						</FadeUpText>
					</div>
					<div className="flex flex-col gap-y-[18px]">
						<FadeUpText>
							<h5 className="font-tilda-sans font-bold text-[18px] uppercase">
								Салонное оформление бровей включает в себя несколько этапов:
							</h5>
						</FadeUpText>
						<FadeUpText delay={0.1}>
							<p className="font-tilda-sans text-[18px]">
								1. Консультация с мастером. Специалист оценивает форму лица, структуру и цвет волос, а также учитывает пожелания клиента.
							</p>
						</FadeUpText>
						<FadeUpText delay={0.2}>
							<p className="font-tilda-sans text-[18px]">
								2. Выбор метода коррекции. В зависимости от предпочтений и особенностей клиента, мастер может предложить несколько вариантов: классическое выщипывание или восковая эпиляция
							</p>
						</FadeUpText>
						<FadeUpText delay={0.3}>
							<p className="font-tilda-sans text-[18px]">
								3. Окрашивание. Для придания бровям более насыщенного цвета и создания гармоничного образа, используется краска или хна.
							</p>
						</FadeUpText>
						<FadeUpText delay={0.4}>
							<p className="font-tilda-sans text-[18px]">
								4. Укладка. Завершающий этап, в ходе которого брови укладываются с помощью специальных гелей или восков.
							</p>
						</FadeUpText>
					</div>
					<div className="flex flex-col gap-y-[18px]">
						<FadeUpText>
							<h5 className="font-tilda-sans font-bold text-[18px] uppercase">
								Преимущества оформления бровей в салоне
							</h5>
						</FadeUpText>
						<FadeUpText delay={0.1}>
							<p className="font-tilda-sans text-[18px]">
								1. Профессионализм. Опытные мастера обладают знаниями и навыками, необходимыми для создания идеальной формы бровей, которая подчеркнет достоинства и скроет недостатки.
							</p>
						</FadeUpText>
						<FadeUpText delay={0.2}>
							<p className="font-tilda-sans text-[18px]">
								2. Долговременный результат. Благодаря использованию качественных материалов и профессиональных техник, результат сохраняется дольше, чем при самостоятельном оформлении.
							</p>
						</FadeUpText>
						<FadeUpText delay={0.3}>
							<p className="font-tilda-sans text-[18px]">
								3. Индивидуальный подход. В салоне учитываются все особенности клиента, включая форму лица, цветотип и личные предпочтения.
							</p>
						</FadeUpText>
						<FadeUpText delay={0.4}>
							<p className="font-tilda-sans text-[18px]">
								4. Безопасность. Использование стерильных инструментов и соблюдение всех санитарных норм минимизируют риск раздражений и инфекций.
							</p>
						</FadeUpText>
					</div>
					<div className="flex flex-col gap-y-[18px]">
						<FadeUpText>
							<h5 className="font-tilda-sans font-bold text-[18px] uppercase">
								Возможные недостатки
							</h5>
						</FadeUpText>
						<FadeUpText delay={0.1}>
							<p className="font-tilda-sans text-[18px]">
								1. Стоимость. Услуги профессионального мастера могут быть дороже, чем самостоятельное оформление.
							</p>
						</FadeUpText>
						<FadeUpText delay={0.2}>
							<p className="font-tilda-sans text-[18px]">
								2. Необходимость регулярного посещения. Для поддержания идеальной формы бровей требуется регулярное посещение салона.
							</p>
						</FadeUpText>
						<FadeUpText delay={0.3}>
							<p className="font-tilda-sans text-[18px]">
								3. Возможность аллергии. Некоторые клиенты могут испытывать аллергическую реакцию на используемые краски или воски.
							</p>
						</FadeUpText>
					</div>
					<div className="flex flex-col gap-y-[18px]">
						<FadeUpText>
							<h5 className="font-tilda-sans font-bold text-[18px] uppercase">
								Заключение
							</h5>
						</FadeUpText>
						<FadeUpText delay={0.1}>
							<p className="font-tilda-sans text-[18px]">
								Оформление бровей в салоне — это удобная и эффективная процедура для тех, кто хочет достичь идеального результата без лишних хлопот. Несмотря на некоторые недостатки, профессиональный подход и качественные материалы делают эту услугу популярной и востребованной. Выбор в пользу салонного оформления бровей позволит вам всегда выглядеть ухоженно и привлекательно.
							</p>
						</FadeUpText>
					</div>
				</div>
			</section>
			<section className="py-12 md:py-20 px-5 lg:px-0 w-full max-w-[1280px] mx-auto">
				<div className="flex flex-col items-center gap-y-10">
					<FadeUpText delay={0.1}>
						<h3 className="font-tenor-sans text-[28px] md:text-[38px] text-center">
							Статьи из этой категории
						</h3>
					</FadeUpText>
					<div className="flex flex-col md:flex-row gap-y-7 flex-wrap md:justify-between w-full">
						{articles.map((article, index) => (
							<ArticleCard 
								key={index}
								image={article.img}
								category={article.category}
								date={article.date}
								title={article.title}
							/>
						))}
					</div>
				</div>
			</section>
			<section className="max-w-[1020px] mx-auto pt-12 pb-24 md:py-20 flex flex-col gap-y-6 px-5 lg:px-0">
				<div className="flex flex-col items-center text-center gap-y-2">
					<FadeUpText delay={0.1}>
						<h3 className="font-tenor-sans text-[28px] md:text-[38px]">
							СЛЕДИТЕ ЗА НОВОСТЯМИ
						</h3>
					</FadeUpText>
					<FadeUpText delay={0.2}>
						<p className="font-tilda-sans font-light text-[16px]">
							Спасибо, что Вы с нами!
						</p>
					</FadeUpText>
				</div>
				<form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
					<Input 
						variant="black" 
						placeholder="Введите свою почту" 
						value={email}
						onChange={(e) => {
							setEmail(e.target.value)
							setEmailError(false)
						}}
						error={emailError}
						errorMessage={emailError ? "Введите корректный email" : undefined}
					/>
					<div className="flex flex-col gap-y-3 max-w-[459px]">
						<Checkbox 
							label="Я прочитал(а) и даю Согласие на получение информационной и рекламной рассылки" 
							checked={isChecked} 
							onChange={() => {
								setIsChecked(!isChecked)
								setCheckboxError(false)
							}}
							error={checkboxError}
						/>
						<Checkbox 
							label="Я прочитал(а) и согласен(а) с Политикой обработки персональных данных и даю Согласие на обработку персональных данных" 
							checked={isChecked2} 
							onChange={() => {
								setIsChecked2(!isChecked2)
								setCheckboxError(false)
							}}
							error={checkboxError}
						/>
						<Button 
							type="submit"
							disabled={isLoading}
						>
							{isLoading ? (
								<div className="flex items-center justify-center gap-x-2">
									<div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
									<span>Отправка...</span>
								</div>
							) : (
								'Получать новости и следовать вашим советам'
							)}
						</Button>
					</div>
				</form>
			</section>
			<Footer />
		</main>
	)
}