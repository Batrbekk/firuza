'use client'

import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const menuItems = [
    'Салоны',
    'наша команда', 
    'подарочные карты',
    'акции',
    'обучение',
    'блог',
    'условия оказания услуг'
  ]

  const services = [
    'маникюр',
    'педикюр', 
    'наращивание ногтей',
    'перманентный макияж',
    'брови'
  ]

  const legalLinks = [
    'Политика использования файлов cookie',
    'Политика обработки персональных данных',
    'Согласие на обработку персональных данных',
    'Согласие на получение информационной и рекламной рассылки',
    'Условия оказания услуг',
    'Уведомление об авторских правах',
    'Публичный договор-оферта оказания услуг ногтевого сервиса',
    'Публичная оферта оказания услуг по обучению',
    'Правила предоставления скидок, бонусных и подарочных карт'
  ]

  return (
    <footer className="bg-[#292929] pt-20 pb-6">
      <div className="container mx-auto">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-6 max-w-[259px]">
            <Image 
              src="/images/logo.svg"
              alt="Firuza Nail Studio"
              width={160}
              height={72}
            />
            
            <p className="text-white text-sm font-tilda-sans font-light">
              Индивидуальный предприниматель<br/>
              Юркова Фируза Мардиевна<br/>
              ОГРНИП 319505300002894<br/>
              ИНН 501211813787
            </p>

            <div>
                <p className="text-secondary font-tilda-sans font-bold text-sm uppercase">Почта</p>
                <a href="mailto:firuzanails@gmail.com" className="text-white text-lg font-tilda-sans">firuzanails@gmail.com</a>
            </div>

            <div>
                <p className="text-secondary font-tilda-sans font-bold text-sm uppercase">Телефон</p>
                <a href="tel:+79060811441" className="text-white text-lg font-tilda-sans">+7 (906) 081-14-41</a>
            </div>

            <div>
                <p className="text-secondary font-tilda-sans font-bold text-sm uppercase">мы в соцсетях</p>
                <div className="flex gap-4">
                    <Link href="/">
                        <Image src="/icons/vk.svg" alt="Vk" width={40} height={40} />
                    </Link>
                    <Link href="/">
                        <Image src="/icons/instagram.svg" alt="Instagram" width={40} height={40} />
                    </Link>
                </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 max-w-[239px]">
            <h5 className="text-lightGrey text-sm font-tilda-sans font-medium">ЖЕЛЕЗНОДОРОЖНЫЙ</h5>
            <div>
                <p className="text-secondary font-tilda-sans font-light text-sm">Адрес:</p>
                <p className="text-white text-sm font-tilda-sans font-light">
                    Московская область, город Балашиха, микрорайон Железнодорожный, Саввинское шоссе, дом 4, корпус 2
                </p>
            </div>
            <div>
                <p className="text-secondary font-tilda-sans font-light text-sm">Телефон:</p>
                <a href="tel:+79060811441" className="text-white text-sm font-tilda-sans font-light">
                    +7 (906) 081-14-41
                </a>
            </div>
            <div>
                <p className="text-secondary font-tilda-sans font-light text-sm">Почта:</p>
                <a href="mailto:firuzanails@gmail.com" className="text-white text-sm font-tilda-sans font-light">
                    firuzanails@gmail.com
                </a>
            </div>
            <div>
                <p className="text-secondary font-tilda-sans font-light text-sm">Режим работы:</p>
                <p className="text-white text-sm font-tilda-sans font-light">
                    Пн-Пт: 09:00–21:00 <br/>
                    Сб-Вс: 09:30–21:00
                </p>
            </div>
            <h5 className="text-lightGrey text-sm font-tilda-sans font-medium">САВВИНО</h5>
            <div>
                <p className="text-secondary font-tilda-sans font-light text-sm">Адрес:</p>
                <p className="text-white text-sm font-tilda-sans font-light">
                    Московская область, город Балашиха, микрорайон Саввино, ул. Народного ополчения, д. 1
                </p>
            </div>
            <div>
                <p className="text-secondary font-tilda-sans font-light text-sm">Телефон:</p>
                <a href="tel:+79260411441" className="text-white text-sm font-tilda-sans font-light">
                    +7 (926) 041-14-41
                </a>
            </div>
            <div>
                <p className="text-secondary font-tilda-sans font-light text-sm">Почта:</p>
                <a href="mailto:firuzanailstudio@gmail.com" className="text-white text-sm font-tilda-sans font-light">
                    firuzanailstudio@gmail.com
                </a>
            </div>
            <div>
                <p className="text-secondary font-tilda-sans font-light text-sm">Режим работы:</p>
                <p className="text-white text-sm font-tilda-sans font-light">
                    Пн-Пт: 09:00–21:00 <br/>
                    Сб-Вс: 09:30–21:00  
                </p>
            </div>
          </div>

          {/* Меню */}
          <div className="flex flex-col gap-9 max-w-[239px]">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm uppercase font-tilda-sans font-bold text-[#696969]">меню</h3>
              {menuItems.map((item, index) => (
                <Link 
                  key={index}
                  href="#"
                  className="text-white text-sm hover:text-secondary font-tilda-sans font-light transition-colors uppercase"
                >
                  {item}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-sm uppercase font-tilda-sans font-bold text-[#696969]">услуги</h3>
              {services.map((service, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-white text-sm hover:text-secondary font-tilda-sans font-light transition-colors uppercase"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/* Правовая информация */}
          <div className="flex flex-col gap-4 max-w-[370px]">
            <h3 className="text-lightGrey font-tilda-sans font-bold uppercase text-sm">Правовая информация:</h3>
            <div className="flex flex-col gap-2">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  href="#"
                  className="text-[#696969] text-sm hover:text-secondary transition-colors font-tilda-sans font-light"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
       {/* Копирайт */}
       <div className="mt-20">
          <div className="py-4 border-y border-white/10">
            <div className="flex justify-between items-center container mx-auto">
                <span className="text-[#696969] text-xs font-tilda-sans font-light">
                    Copyright ©2024 Firuza Nail Studio. Все права защищены
                </span>
                <Link href="#" className="text-[#696969] text-xs hover:text-[#D4B899] transition-colors font-tilda-sans font-light">
                    Политика использования файлов cookie
                </Link>
                <Link href="#" className="text-[#696969] text-xs hover:text-[#D4B899] transition-colors font-tilda-sans font-light">
                    Политика обработки персональных данных
                </Link>
                <Link href="#" className="text-[#696969] text-xs hover:text-[#D4B899] transition-colors font-tilda-sans font-light">
                    Специальная оценка условий труда
                </Link>
                <Link href="#" className="text-[#696969] text-xs hover:text-[#D4B899] transition-colors font-tilda-sans font-light">
                    Сделано в Mojo
                </Link>
            </div>
          </div>
          <div>
            <p className="text-[#696969] text-xs mt-2.5 container mx-auto font-tilda-sans font-light">
                Запрещается повторение, копирование, передача, воспроизведение, распространение, продажа (перепродажа) и иное использование любых полученных и (или) размещённых на сайте https://firuzanail.ru данных, сведений, материалов, а также информации о предоставляемых и (или) уже предоставленных услугах и их результатах для каких‑либо коммерческих целей (в том числе, для продвижения или извлечения прибыли) без согласия администрации сайта.
            </p>
          </div>
        </div>
    </footer>
  )
}

export default Footer 