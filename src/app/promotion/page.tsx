"use client"

import { useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from "next/image";
import Header from "../components/Header";
import TextReveal from "../components/TextReveal";
import AnimatedPromotionBlock from "../components/AnimatedPromotionBlock";
import Link from "next/link";
import vk from '../../../public/icons/vk-green.svg';
import telegram from '../../../public/icons/telegram-green.svg';
import { Checkbox } from "../components/Checkbox";
import Button from "../components/Button";
import Footer from "../components/Footer";
import FadeUpText from "../components/FadeUpText";

// Регистрируем плагин ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Promotion() {
    const [checked, setChecked] = useState(false);
    const [checkPolicy, setCheckPolicy] = useState(false);

    return (
        <main>
            <section className="relative">
                <div className="absolute inset-0 bg-primary" />
                <Header />
                <div className="relative pt-[62px] pb-24 px-5 md:px-0 md:pt-[60px] md:pb-20 flex flex-col items-center gap-y-[36px] md:gap-y-4 mx-auto md:max-w-[760px] text-center">
                    <TextReveal className="uppercase text-white font-tenor-sans text-[28px] md:text-[64px]">
                        акции и скидки
                    </TextReveal>
                    <FadeUpText delay={0.1}>
                        <p className="text-white font-tilda-sans text-lg">
                            Добро пожаловать на страницу акций и специальных предложений от FirUza Nail Studio.
                            Выбирайте и преображайтесь!
                        </p>
                    </FadeUpText>
                </div>
            </section>
            <section className="mx-auto md:max-w-[720px] lg:max-w-[1280px] w-full pt-0 pb-0 md:pb-10 md:pt-20 flex flex-col gap-0 md:gap-y-12 overflow-hidden block-p">
                <AnimatedPromotionBlock
                    imagePosition="left"
                    imageSrc="/images/promotions/1.png"
                    imageAlt="promotion"
                >
                    <div className="flex flex-col gap-y-2">
                            <h5 className="font-tilda-sans font-bold text-[18px] uppercase">
                                Скидка для новых клиентов
                            </h5>
                            <p className="font-tilda-sans font-light text-[16px]">
                                Приветственная скидка 10% на первое посещение!
                            </p>
                            <p className="font-tilda-sans font-light text-[16px]">
                                Впервые у нас? Мы рады вас приветствовать! Получите скидку 10% на любое обслуживание 
                                в нашей студии в любое удобное для вас время. Это отличная возможность познакомиться 
                                с нашими мастерами и оценить качество наших услуг по привлекательной цене.
                            </p>
                            <h6 className="font-tilda-sans font-bold text-[14px] uppercase">
                                Условия:
                            </h6>
                            <p className="font-tilda-sans font-light text-[16px]">
                                Скидка действует только для новых клиентов. <br />
                                Скидка предоставляется на первое посещение. <br />
                                Не суммируется с другими акциями и скидками. <br />
                                Срок действия акции не ограничен.
                            </p>
                        </div>
                </AnimatedPromotionBlock>
                <AnimatedPromotionBlock
                    imagePosition="right"
                    imageSrc="/images/promotions/2.png"
                    imageAlt="promotion"
                >
                    <div className="flex flex-col gap-y-2">
                            <h5 className="font-tilda-sans font-bold text-[18px] uppercase">
                                Акция &quot;День рождения&quot;
                            </h5>
                            <p className="font-tilda-sans font-light text-[16px]">
                                Поздравляем с Днем рождения! Скидка 10% в подарок!
                            </p>
                            <p className="font-tilda-sans font-light text-[16px]">
                                День рождения — это особенный день, и мы хотим сделать его ещё приятнее! 
                                Получите скидку 10% на любую услугу нашей студии в течение 7 дней до и 7 дней после вашего Дня рождения. 
                                Позвольте себе расслабиться и насладиться заботой о своих ручках и ножках.
                            </p>
                            <h6 className="font-tilda-sans font-bold text-[14px] uppercase">
                                Условия:
                            </h6>
                            <p className="font-tilda-sans font-light text-[16px]">
                                Скидка действует в течение 7 дней до и 7 дней после дня рождения. <br />
                                Необходимо предъявить паспорт для подтверждения даты рождения. <br />   
                                Скидка распространяется на все услуги студии. <br />
                                Не суммируется с другими акциями и скидками.
                            </p>
                    </div>
                </AnimatedPromotionBlock>
                <AnimatedPromotionBlock 
                    imagePosition="left"
                    imageSrc="/images/promotions/3.png"
                    imageAlt="promotion"
                >
                    <div className="flex flex-col gap-y-2">
                            <h5 className="font-tilda-sans font-bold text-[18px] uppercase">
                                Акция &quot;Приведи подругу&quot;
                            </h5>
                            <p className="font-tilda-sans font-light text-[16px]">
                                Делитесь красотой с подругой и получайте скидки!
                            </p>
                            <p className="font-tilda-sans font-light text-[16px]">
                                Красота лучше всего, когда ею делятся! Пригласите подругу посетить FirUza Nail Studio, 
                                и обе получите скидку 10% на любые услуги. Это отличный повод провести 
                                время вместе и насладиться профессиональным уходом за вашими ногтями.
                            </p>
                            <h6 className="font-tilda-sans font-bold text-[14px] uppercase">
                                Условия:
                            </h6>
                            <p className="font-tilda-sans font-light text-[16px]">
                                Скидку получает как пригласивший, так и приглашённый клиент. <br />
                                Скидка предоставляется на любые услуги. <br />
                                Для получения скидки подруга должна указать имя пригласившего при записи. <br />
                                Не суммируется с другими акциями и скидками.
                            </p>
                    </div>
                </AnimatedPromotionBlock>
            </section>
            <section className="pt-12 pb-24 px-5 md:px-0 md:pt-10 md:pb-20 flex flex-col items-center gap-y-6">
                <div className="flex flex-col gap-y-2 max-w-[564px] text-center">
                    <h3 className="font-tenor-sans text-[28px] md:text-[38px]">
                        Поделитесь этой акцией с подругой и записывайтесь вместе!
                    </h3>
                    <p className="font-tilda-sans font-light text-[16px]">
                        Следите за обновлениями на нашей странице, чтобы не пропустить новые выгодные предложения и акции! Мы всегда рады видеть вас в FirUza Nail Studio
                    </p>
                </div>
                <div className="flex items-center gap-x-2.5">
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
                <div className="max-w-[628px] w-full flex flex-col gap-y-3">
                    <Checkbox 
                        label="Я прочитал(а) и даю Согласие на получение информационной и рекламной рассылки"
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                    />
                    <Checkbox 
                        label="Я прочитал(а) и согласен(а) с Политикой обработки персональных данных и даю Согласие на обработку персональных данных"
                        checked={checkPolicy}
                        onChange={() => setCheckPolicy(!checkPolicy)}
                    />
                    <Button>
                        Записаться
                    </Button>
                </div>
            </section>
            <Footer />
        </main>
    );
}