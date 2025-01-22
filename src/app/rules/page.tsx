'use client'

import Footer from "../components/Footer";
import Header from "../components/Header";
import TextReveal from "../components/TextReveal";
import FadeUpText from "../components/FadeUpText";
import SlideUpReveal from "../components/SlideUpReveal";
import Image from 'next/image'

export default function Rules() {
    return (
        <main>
            <section className="bg-primary">
                <Header />
                <div className="pt-[62px] md:pt-[60px] pb-24 md:pb-20 px-5 md:px-0 flex flex-col items-center gap-y-9 md:gap-y-4 text-center">
                    <TextReveal className="uppercase text-white font-tenor-sans text-[28px] md:text-[64px] w-[335px] md:w-[748px] lg:w-full">
                        правила ОКАЗАНИЯ УСЛУГ
                    </TextReveal>
                    <FadeUpText delay={0}>
                        <p className="text-white font-tilda-sans text-lg">
                            Добро пожаловать в FirUza Nail Studio!
                        </p>
                    </FadeUpText>
                </div>
            </section>
            <section className="flex flex-col px-5 lg:px-0 lg:gap-y-6 lg:py-20 max-w-[1345px] mx-auto">
                <div className="flex items-start gap-x-[150px]">
                    <div className="flex flex-col gap-y-6 w-full lg:max-w-[630px] pt-8 pb-12 lg:pt-0 lg:pb-0">
                        <div className="flex flex-col gap-y-2">
                            <FadeUpText>
                                <h6 className="text-primary font-medium font-tilda-sans text-sm uppercase">Правила</h6>
                            </FadeUpText>
                            <FadeUpText delay={0.1}>
                                <h4 className="font-tenor-sans text-[44px] uppercase">
                                    Firuza Nail Studio
                                </h4>
                            </FadeUpText>
                        </div>
                        <FadeUpText delay={0.2}>
                            <p className="font-tilda-sans font-light text-[18px]">
                                Мы стремимся сделать ваш визит в наши салоны максимально комфортным и приятным. Для этого мы разработали ряд правил, с которыми просим вас ознакомиться.
                            </p>
                        </FadeUpText>
                        <SlideUpReveal className="w-full h-[480px] relative block lg:hidden">
                            <Image
                                fill
                                quality={90}
                                src="/images/rules/1.png" 
                                alt="rules" 
                                className="object-cover object-bottom absolute top-0 left-0 w-full h-full" 
                            />
                        </SlideUpReveal>
                        <div className="flex flex-col gap-y-2">
                            <FadeUpText>
                                <h6 className="font-tilda-sans font-bold text-[14px] uppercase">1.График работы:</h6>
                            </FadeUpText>
                            <FadeUpText delay={0.1}>
                                <p className="font-tilda-sans font-light text-[16px]">
                                    Все салоны сети FirUza Nail Studio открыты для посещения
                                </p>
                            </FadeUpText>
                            <div className="flex items-center gap-x-3.5">
                                <p className="font-tilda-sans font-light text-primary text-[16px]">
                                    Пн - Вс
                                </p>
                                <p className="font-bold text-[16px] font-tilda-sans">
                                    09:00–21:00
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <FadeUpText>
                                <h6 className="font-tilda-sans font-bold text-[14px] uppercase">2.Запись и подтверждение:</h6>
                            </FadeUpText>
                            <FadeUpText delay={0.1}>
                                <p className="font-tilda-sans font-light text-[16px]">
                                    Просим Вас подтверждать запись – за день до Вашего визита. Администратор салона предпринимает попытку связаться с Вами - 2 раза в течение 24 часов по телефону и посредством мессенджера (cмс, WhatsApp), если возможности подтвердить запись нет, салон может отменить Вашу запись в пользу другого клиента.
                                </p>
                            </FadeUpText>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <FadeUpText>
                                <h6 className="font-tilda-sans font-bold text-[14px] uppercase">3.Пунктуальность:</h6>
                            </FadeUpText>
                            <FadeUpText delay={0.1}>
                                <p className="font-tilda-sans font-light text-[16px]">
                                    Просим Вас приходить вовремя. Если Вы опоздали более, чем на 15 минут - администрация салона может перенести Вашу запись на другое время / к другому мастеру или отказать Вам в оказании части услуг, на которые Вы были записаны, чтобы избежать задержек других посетителей, а также если время работы салона не позволяет полностью оказать услугу.
                                </p>
                            </FadeUpText>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <FadeUpText>
                                <h6 className="font-tilda-sans font-bold text-[14px] uppercase">4.Запись на услуги:</h6>
                            </FadeUpText>
                            <FadeUpText delay={0.1}>
                                <p className="font-tilda-sans font-light text-[16px]">
                                    Просим Вас указывать все желаемые услуги при записи. Если Вы желаете получить услуги, на которые Вы не были записаны, администрация салона приложит все усилия, чтобы исполнить Ваши пожелания. Однако, в случае недостаточности времени у мастера до следующего клиента или до закрытия салона, мы оставляем за собой право отказать Вам в предоставлении услуг. Администратор обязательно предложит Вам другое время для записи.
                                </p>
                            </FadeUpText>
                        </div>
                    </div>
                    <SlideUpReveal className="w-[500px] h-[750px] hidden lg:block relative">
											<Image
                            fill
                            quality={90}
                            src="/images/rules/1.png" 
                            alt="rules" 
                            className="object-cover object-bottom absolute top-0 left-0 w-full h-full" 
											/>
										</SlideUpReveal>
                </div>
                <div className="flex flex-col lg:flex-row items-start gap-x-[150px] gap-y-6 py-12 lg:py-0">
                    <SlideUpReveal className="lg:w-[565px] lg:h-[750px] w-full h-[480px] relative">
											<Image
                            fill
                            quality={90}
                            src="/images/rules/2.png" 
                            alt="rules" 
                            className="object-cover object-bottom absolute top-0 left-0 w-full h-full" 
											/>
											</SlideUpReveal>
                    <div className="flex flex-col gap-y-6 w-full lg:max-w-[630px]">
                        <div className="flex flex-col gap-y-2">
                            <FadeUpText>
                                <h6 className="font-tilda-sans font-bold text-[14px] uppercase">5.Условия оказания услуг:</h6>
                            </FadeUpText>
                            <FadeUpText delay={0.1}>
                                <p className="font-tilda-sans font-light text-[16px]">
                                    Просим Вас принимать во внимание, что некоторые услуги требуют определенных условий. Мы будем вынуждены отказать Вам в услуге, если мастер заведомо видит, что ее выполнение Вас не удовлетворит – не достаточна длина ногтей для френча, состояние ресниц не позволяет выполнить объемное наращивание и т.д.
                                </p>
                            </FadeUpText>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <FadeUpText>
                                <h6 className="font-tilda-sans font-bold text-[14px] uppercase">6.Здоровье и безопасность:</h6>
                            </FadeUpText>
                            <FadeUpText delay={0.1}>
                                <p className="font-tilda-sans font-light text-[16px]">
                                    Мы оставляем за собой право отказать Вам в предоставлении услуг, если мастером будут обнаружены изменения кожных покровов или ногтей, свидетельствующие о возможном наличии инфекционных заболеваний. Мы заботимся о здоровье и комфорте всех наших клиентов!
                                </p>
                            </FadeUpText>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <FadeUpText>
                                <h6 className="font-tilda-sans font-bold text-[14px] uppercase">7.Аллергические реакции:</h6>
                            </FadeUpText>
                            <FadeUpText delay={0.1}>
                                <p className="font-tilda-sans font-light text-[16px]">
                                    Существуют услуги, которые могут вызвать аллергические реакции. Салон может предложить Вам для подписания документ «Информированное согласие», согласно которому ответственность за индивидуальные реакции организма возлагается на клиента. Если Вы хотите проверить, есть ли у Вас аллергии на косметические средства, Вы можете либо обратиться к врачу и получить заключение до визита в салон, либо заранее (не менее чем за 24 часа до услуги) пройти в салоне тест – косметическое средство будет нанесено мастером на безопасный участок кожи для оценки реакции, согласно инструкции производителя косметического средства.
                                </p>
                            </FadeUpText>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <FadeUpText>
                                <h6 className="font-tilda-sans font-bold text-[14px] uppercase">8.Рекомендации по уходу:</h6>
                            </FadeUpText>
                            <FadeUpText delay={0.1}>
                                <p className="font-tilda-sans font-light text-[16px]">
                                    Существуют услуги, результат которых закрепляется в течение 24 часов с момента оказания. Просим Вас неукоснительно соблюдать рекомендации по уходу, выданные мастером по завершении процедуры (не использовать в течение 24 часов косметические средства для глаз при наращивании ресниц и т.д.). Обращения о некачественном оказании услуги в случае несоблюдения рекомендаций по уходу не принимаются.
                                </p>
                            </FadeUpText>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-x-[85px]">
                    <div className="flex flex-col gap-y-6 w-full lg:max-w-[630px] py-12 lg:py-0">
                        <div className="flex flex-col gap-y-2">
                            <FadeUpText>
                                <h6 className="font-tilda-sans font-bold text-[14px] uppercase">9.Промокоды и скидки:</h6>
                            </FadeUpText>
                            <FadeUpText delay={0.1}>
                                <p className="font-tilda-sans font-light text-[16px]">
                                    Если Вы хотите воспользоваться промокодами для получения скидки, просим Вас иметь с собой телефон, который Вы использовали для записи. Администратор вправе отказать Вам в предоставлении скидки, если указанный при записи номер будет недоступен во время вашего визита.
                                </p>
                            </FadeUpText>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <FadeUpText>
                                <h6 className="font-tilda-sans font-bold text-[14px] uppercase">10.Домашние животные:</h6>
                            </FadeUpText>
                            <FadeUpText delay={0.1}>
                                <p className="font-tilda-sans font-light text-[16px]">
                                    Мы очень любим домашних питомцев, но вход с животными в наши салоны запрещен. Мы заботимся о здоровье и комфорте всех наших клиентов!
                                </p>
                            </FadeUpText>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <FadeUpText>
                                <h6 className="font-tilda-sans font-bold text-[14px] uppercase">11.Этикет и поведение:</h6>
                            </FadeUpText>
                            <FadeUpText delay={0.1}>
                                <p className="font-tilda-sans font-light text-[16px]">
                                    Просим вас соблюдать этические нормы и воздерживаться от хамства, оскорблений и угроз в адрес сотрудников или других Посетителей.
                                </p>
                            </FadeUpText>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <FadeUpText>
                                <h6 className="font-tilda-sans font-bold text-[14px] uppercase">12.Ограничения по обслуживанию:</h6>
                            </FadeUpText>
                            <FadeUpText delay={0.1}>
                                <p className="font-tilda-sans font-light text-[16px]">
                                    Просим с пониманием отнестись к тому, что мы не обслуживаем: <br />
                                    -  клиентов моложе 18 лет, без сопровождения родителей и их согласия на проведение услуги. <br />
                                    Администратор салона может попросить Вас предъявить паспорт, чтобы уточнить Ваш возраст; <br />
                                    - клиентов в состоянии видимого алкогольного или наркотического опьянения; <br />
                                    - клиентов, использующих нецензурную брань, разговаривающих на повышенных тонах, мешающих своими действиями другим посетителям салона (шум, оскорбления, грязная одежда и пр.).
                                </p>
                            </FadeUpText>
                        </div>
                        <div className="flex flex-col gap-y-2">
                            <FadeUpText>
                                <h6 className="font-tilda-sans font-bold text-[14px] uppercase">13.Курение:</h6>
                            </FadeUpText>
                            <FadeUpText delay={0.1}>
                                <p className="font-tilda-sans font-light text-[16px]">
                                    Во всех наших салонах запрещено курить, в том числе электронные сигареты.
                                </p>
                            </FadeUpText>
                        </div>
                    </div>
                    <SlideUpReveal className="w-[630px] h-[357px] hidden lg:block relative">
											<Image
                            fill
                            quality={90}
                            src="/images/rules/3.svg" 
                            alt="rules" 
                            className="object-cover object-bottom absolute top-0 left-0 w-full h-full" 
											/>
										</SlideUpReveal>
                </div>
            </section>
            <Footer />
        </main>
    )
}