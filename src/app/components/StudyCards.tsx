import { cn } from "@/lib/utils"
import Image from "next/image"
import Button from "./Button"
import { useState } from "react"
import { motion, AnimatePresence } from 'framer-motion'
import FadeUpText from "./FadeUpText"
import CourseModal from './CourseModal'

interface StudyList {
	title: string
	list: string[]
}

interface LessonListItem {
	isBold?: boolean
	withIcon?: boolean
	description: string
}

interface StudyLessonList {
	title: string
	list: LessonListItem[]
}

interface StudyCardProps {
	dark: boolean
	title: string
	description: string
	duration: string
	start_date: string
	course_for: string | StudyList | null
	lessons: StudyLessonList[]
	price: string,
	info: string
}

const studyCardsData: StudyCardProps[] = [
	{
		title: "Маникюр базовый с 0",
		description: "Идеальный курс для начинающих! За три дня вы освоите все необходимые навыки и знания для выполнения качественного маникюра.",
		duration: "3 дня",
		start_date: "12 декабря 25",
		course_for: "Мини группа",
		dark: false,
		lessons: [
			{
				title: "1-й день курса",
				list: [
					{
						withIcon: true,
						description: "СанПиН нового времени"
					},
					{
						withIcon: true,
						description: "Санитарные (санитарно-эпидемиологические) правила (СП), нормы (СН), правила и нормы (СанПиН), гигиенические нормативы (ГН)"
					},
					{
						withIcon: true,
						description: "Анатомическое строение НП"
					},
					{
						withIcon: true,
						description: "Формы НП, опил"
					},
					{
						withIcon: true,
						description: "Инструменты и Материалы"
					},
					{
						withIcon: true,
						description: "Характеристики инструментов и оборудования, правила обращения с ними"
					},
					{
						withIcon: true,
						description: "Организация, оснащение рабочего места"
					},
					{
						withIcon: true,
						description: "Инфекции и заболевания НП"
					}
				]
			},
			{
				title: "2-й день курса",
				list: [
					{
						withIcon: true,
						description: "Знакомство с кусачками, правильная постановка руки, ровный срез"
					},
					{
						withIcon: true,
						description: "Санитарные (санитарно-эпидемиологические) правила (СП), нормы (СН), правила и нормы (СанПиН), гигиенические нормативы (ГН)"
					},
					{
						withIcon: true,
						description: "Анатомическое строение НП"
					},
					{
						withIcon: true,
						description: "Формы НП, опил"
					},
					{
						withIcon: true,
						description: "Инструменты и Материалы"
					},
					{
						withIcon: true,
						description: "Характеристики инструментов и оборудования, правила обращения с ними"
					},
					{
						withIcon: true,
						description: "Организация, оснащение рабочего места"
					},
					{
						withIcon: true,
						description: "Инфекции и заболевания НП"
					}
				]
			},
			{
				title: "3-й день курса",
				list: [
					{
						withIcon: true,
						description: "СанПиН нового времени"
					},
					{
						withIcon: true,
						description: "Санитарные (санитарно-эпидемиологические) правила (СП), нормы (СН), правила и нормы (СанПиН), гигиенические нормативы (ГН)"
					},
					{
						withIcon: true,
						description: "Анатомическое строение НП"
					},
					{
						withIcon: true,
						description: "Формы НП, опил"
					},
					{
						withIcon: true,
						description: "Инструменты и Материалы"
					},
					{
						withIcon: true,
						description: "Характеристики инструментов и оборудования, правила обращения с ними"
					},
					{
						withIcon: true,
						description: "Организация, оснащение рабочего места"
					},
					{
						withIcon: true,
						description: "Инфекции и заболевания НП"
					}
				]
			}
		],
		price: "35 000 ₽",
		info: "*Отработка на 3 моделях и плюс делаем маникюр с покрытием на себе, чтобы почувствовать аппарат"
	},
	{
		title: "PRO - маникюр",
		description: "Вы уже мастер маникюра, но хотите большего? Стремитесь к совершенству, желаете повысить свой доход и работать с ещё более сложными дизайнами? Тогда курс «PRO-маникюр» – именно то, что вам нужно!",
		duration: "1 день",
		start_date: "12 декабря 25",
		course_for: {
			title: "Для кого этот курс?",
			list: [
				"Хотите улучшить свои навыки, выйти на новый уровень мастерства и качества работ",
				"Хотите повысить чек и зарабатывать больше",
				"Мастер с опытом работы кусачками/ ножничками",
				"Мастер с нулевой подготовкой аппаратом"
			]
		},
		dark: true,
		lessons: [
			{
				title: "1-й день курса",
				list: [
					{
						withIcon: true,
						description: "Идеальная архитектура ногтя: создание “четкого квадрата” и “идеального миндаля”"
					},
					{
						withIcon: true,
						description: "Донаращивание без форм: мастерство работы с полигелем"
					},
					{
						withIcon: true,
						description: "Поднятие клюющих торцов: решение распространенной проблемы"
					},
					{
						withIcon: true,
						description: "Опил формы: точные и аккуратные движения"
					},
					{
						withIcon: true,
						description: "Секреты раскрытия пазух и синусов: для безупречного маникюра"
					},
					{
						withIcon: true,
						description: "Топовые полировки: для идеальной макросъемки"
					},
					{
						withIcon: true,
						description: "Трендовые дизайны: работа с пигментами, замесами, градиентом, блестками и молочком"
					},
					{
						withIcon: true,
						description: "Укрепление и выравнивание: использование конструирующего жидкого геля без опила"
					},
					{
						withIcon: true,
						description: "Арочная коррекция: мастерство работы с ТВ-фрезами"
					},
					{
						withIcon: true,
						description: "Идеальный френч FIRUZANAILS: фирменная техника"
					},
					{
						withIcon: true,
						description: "Фотосессия: научимся делать профессиональные снимки ваших работ"
					},
					{
						withIcon: true,
						description: "Отработка на моделях: практическое закрепление навыков"
					}
				]
			},
			{
				title: "Результат",
				list: [
					{
						withIcon: false,
						description: "Вы получите широкий спектр новых навыков и знаний, которые позволят вам поднять уровень вашего мастерства и значительно увеличить доход!"
					},
					{
						withIcon: true,
						description: "Поддержка и консультация преподавателя после курса!",
						isBold: true
					},
					{
						withIcon: true,
						description: "Возможность трудоустройства в салонах Firuza Nail Studio",
						isBold: true
					}
				]
			}
		],
		price: "15 000 ₽",
		info: "*Отработка на моделях"
	},
	{
		title: "ВЕРХНИЕ ФОРМЫ",
		description: "Этот интенсивный однодневный курс научит вас всем тонкостям моделирования ногтей с помощью верхних форм.",
		duration: "1 день",
		start_date: "12 декабря 25",
		course_for: null,
		dark: false,
		lessons: [
			{
				title: "1-й день курса",
				list: [
					{
						withIcon: true,
						description: "Строение Натуральной Ногтевой Пластины"
					},
					{
						withIcon: true,
						description: "Обзор материалов и инструментов"
					},
					{
						withIcon: true,
						description: "Подготовка ННП к моделированию"
					},
					{
						withIcon: true,
						description: "Разбор разных типов ННП (стандартный, внизрастущий, трапециевидный, онихофагия)"
					},
					{
						withIcon: true,
						description: "Схема подбора верхних форм под разные типы"
					},
					{
						withIcon: true,
						description: "Техника нанесения материала на типсу на формы- миндаль и квадрат"
					},
					{
						withIcon: true,
						description: "Постановка ВФ и идеальная отпечатка под разные виды ННП на форму миндаль и квадрат"
					},
					{
						withIcon: true,
						description: "Разбор архитектуры смоделированного ногтя формы миндаль и квадрат"
					},
					{
						withIcon: true,
						description: "Создание архитектуры с помощью заливки в одну каплю, гелем, без поверхностного опила"
					},
					{
						withIcon: true,
						description: "Обзор ТВ фрез для идеального моделирования"
					},
					{
						withIcon: true,
						description: "Подготовка ногтей к макросъёмке для «вкусного» и продающего контента"
					},
					{
						withIcon: true,
						description: "Разбор ошибок, доведение до результата"
					},
					{
						withIcon: true,
						description: "Отработка формы миндаль и квадрат на моделях"
					},
					{
						withIcon: true,
						description: "Поддержка и консультация преподавателя после курса!",
						isBold: true
					},
					{
						withIcon: true,
						description: "Возможность трудоустройства в салонах Firuza Nail Studio",
						isBold: true
					}
				]
			}
		],
		price: "15 000 ₽",
		info: "*Отработка на моделях"
	}
];

function StudyAccordion() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="w-full h-fit bg-primary cursor-pointer flex flex-col gap-y-4">
			<div 
				className="flex items-center justify-between h-[50px]"
				onClick={() => setIsOpen(!isOpen)}
			>
				<h6 className="font-tilda-sans text-[14px] font-bold uppercase pl-5 text-white">
					Что взять с собой:
				</h6>
				<div 
					className={cn(
						"w-[30px] h-[30px] relative mr-[10px] transition-transform duration-300 ease-in-out",
						isOpen ? "rotate-0" : "rotate-45"
					)}
				>
					<Image src="/icons/close-white.svg" alt="check" fill />
				</div>
			</div>
			
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ 
							height: "auto",
							opacity: 1,
							transition: {
								height: {
									duration: 0.3,
									ease: "easeOut"
								},
								opacity: {
									duration: 0.2,
									delay: 0.1
								}
							}
						}}
						exit={{ 
							height: 0,
							opacity: 0,
							transition: {
								height: {
									duration: 0.3,
									ease: "easeIn"
								},
								opacity: {
									duration: 0.2
								}
							}
						}}
						className="overflow-hidden"
					>
						<div className="px-5 pb-5">
							<ul className="list-decimal pl-5 text-white font-tilda-sans text-[16px] font-light">
								<li>Паспорт (для договора)</li>
								<li>Ручка блокнот</li>
								<li>Кисть овал</li>
								<li>Кисть волосок для френча 11мм</li>
								<li>Сменная обувь</li>
								<li>Защитная одежда (фартук/халат)</li>
								<li>Резинка для волос</li>
								<li>(По желанию) Мини-обед (есть микроволновка, чай/кофе)</li>
							</ul>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	)
}

function StudyCard({ 
	dark,
	title, 
	description, 
	duration, 
	start_date,
	course_for,
	lessons,
	price,
	info,
	onEnroll
}: StudyCardProps & { onEnroll: (title: string) => void }) {
	return (
		<div className="flex flex-col">
			<div className={cn(
				"w-full lg:max-w-[500px] p-6 border flex flex-col gap-y-6 items-center study-card",
				dark ? "border-primaryLight bg-grey text-white" : "border-primary",
			)}>
				<div className="flex flex-col items-center gap-y-4">
					<div className="flex flex-col items-center gap-y-2 text-center">
						<h3 className="font-tenor-sans text-[38px]">{title}</h3>
						<p className="font-tilda-sans text-[16px]">{description}</p>
					</div>
					<div className="flex flex-col items-center gap-y-2 py-2 border-y border-primary w-full">
						<div className="flex items-center gap-x-3">
							<p className="uppercase font-tilda-sans font-light text-[18px] ">
								длительность
							</p>
							<div 
								className={cn(
									'w-[5px] h-[5px] rounded-full',
									dark ? "bg-white" : "bg-black"
								)} 
							/>
							<p className="font-tilda-sans text-[18px] font-bold uppercase">{duration}</p>
						</div>
						<div className="flex items-center gap-x-3">
							<p className="uppercase font-tilda-sans font-light text-[18px] ">
								начало
							</p>
							<div 
								className={cn(
									'w-[5px] h-[5px] rounded-full',
									dark ? "bg-white" : "bg-black"
								)} 
							/>
							<p className="font-tilda-sans text-[18px] font-bold uppercase">{start_date}</p>
						</div>
					</div>
				</div>
				{course_for && (
					<div className="flex flex-col gap-y-[18px] w-full">
						<p className="font-tilda-sans text-[16px] font-bold w-full">
							{typeof course_for === "string" ? course_for : course_for?.title}
						</p>
						{typeof course_for === "object" && (
							<div className="flex flex-col gap-y-2">
								{course_for?.list.map((item, index) => (
									<div key={index} className="flex items-start gap-x-1">
										<div className="w-6 h-6 relative">
											<Image src="/icons/check-study.svg" alt="check" fill />
										</div>
										<p className="font-tilda-sans text-[16px] font-light w-[90%]">
											{item}
										</p>
									</div>
								))}
							</div>
						)}
					</div>
				)}
				<div className="flex flex-col gap-y-4">
					<p className="font-tilda-sans text-[14px] font-light uppercase">
						программа курса:
					</p>
					{lessons.map((lesson, index) => (
						<div key={index} className="flex flex-col gap-y-4">
							<p className="font-tilda-sans text-[16px] font-bold text-primary py-2 border-y border-primary">	
								{lesson.title}
							</p>
							<div className="flex flex-col gap-y-2">
								{lesson.list.map((item, index) => (
									<div key={index} className="flex items-start gap-x-1">
										{item.withIcon && (
											<div className="w-6 h-6 relative">
												<Image src="/icons/arrow-up-right.svg" alt="check" fill />
											</div>
										)}
										<p className={cn(
											"font-tilda-sans text-[16px]",
											item.withIcon ? "w-[90%]" : "w-[100%]",
											item.isBold ? "font-bold" : "font-light"
										)}>
											{item.description}
										</p>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
				<div className="flex items-center justify-center gap-x-4 w-full">
					<p className="font-tilda-sans font-light text-[16px]">стоимость</p>
					<h3 className="font-tenor-sans text-[38px]">{price}</h3>
				</div>
				<Button 
					className="max-w-[240px]" 
					onClick={() => onEnroll(title)}
				>
					Записаться на курс
				</Button>
				<p className="font-tilda-sans font-light text-[14px] w-full">
					{info}
				</p>
			</div>
			<StudyAccordion />
		</div>
	)
}

export default function StudyCards() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedCourse, setSelectedCourse] = useState('');

	const handleEnroll = (courseTitle: string) => {
		setSelectedCourse(courseTitle);
		setIsModalOpen(true);
	};

	return (
		<>
			<div className="w-full flex lg:flex-row flex-col gap-5 items-start study-cards-wrapper justify-center">
				{studyCardsData.map((cardData, index) => (
					<FadeUpText key={index} delay={index * 0.1}>
						<StudyCard 
							{...cardData} 
							onEnroll={handleEnroll}
						/>
					</FadeUpText>
				))}
			</div>

			<CourseModal 
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
		</>
	)
}