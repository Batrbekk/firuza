'use client'
import Services from '../components/Services'
import Footer from '../components/Footer'
import MastersSection from '../components/MastersSection'
import Header from '../components/Header'
import TextReveal from '../components/TextReveal'
import Button from '../components/Button'
import OpolchAbout from '../components/OpolchAbout'
import AboutGallery from '../components/AboutGallery'

export default function Home() {
  return (
    <main>
      <section className="relative">
        <Header />
        <img 
          src="/images/bg-opolch.png" 
          alt="team" 
          className="-z-10 absolute object-cover object-center top-0 left-0 w-full h-full" 
        />
        <div className="px-5 md:px-0 flex flex-col items-center gap-y-[96px] md:gap-y-[60px] text-center md:py-20 py-[96px]">
            <div className="flex flex-col">
              <TextReveal className="uppercase text-white font-tenor-sans text-[28px] md:text-[64px]">
                САЛОН
              </TextReveal>
              <TextReveal className="uppercase text-white font-tenor-sans text-[28px] md:text-[64px] max-w-[314px] md:max-w-full">
                на Народного ополчения
              </TextReveal>
            </div>
            <div 
              className='flex items-center justify-center flex-col md:flex-row gap-5 w-full'
            >
              <Button 
                onClick={() => {
                  window.open('https://n1219727.yclients.com/company/1116949/personal/menu?o=', '_blank')
                }}
                className="w-full md:w-[240px] hover:bg-white hover:text-primary"
              >
                Записаться
              </Button>
              <Button 
                variant='outline' 
                className="w-full md:w-[240px] text-white border-white hover:text-primary hover:border-primary"
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
        <OpolchAbout />
        <div id="about-desc" className="w-full max-w-[695px]">
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-2">
              <h6 className="text-primary font-bold font-tilda-sans text-[14px] uppercase">
                о салоне 
              </h6>
              <h2 className="text-[28px] md:text-[44px] font-tenor-sans uppercase">
                Firuza Nail Studio
              </h2>
            </div>
            <p className="font-tilda-sans font-light md:font-normal text-[16px] md:text-[18px]">
              Добро пожаловать в наш салон, где качество встречается с брендом!
            </p>
            <p className="font-tilda-sans font-light md:font-normal text-[16px] md:text-[18px]">
              Мы гордимся тем, что предоставляем нашим клиентам только самое лучшее. Каждый визит к нам — это уникальный опыт, где внимание к деталям и высокие стандарты обслуживания стоят на первом месте. Уже 6 лет мы дарим улыбки и хорошее настроение нашим гостям, именно поэтому мы открыли второй филиал FirUza Nail Studio.
            </p>
            <p className="font-tilda-sans font-light md:font-normal text-[16px] md:text-[18px]">
              Почему выбирают нас?
            </p>
            <p className="font-tilda-sans font-light md:font-normal text-[16px] md:text-[18px]">
              С нами безопасно, красиво, качественно и удобно.
              Мы создаём прекрасное настроение на весь день!
              Приходите и убедитесь сами. Мы ждем вас для того, чтобы сделать ваш день особенным!
            </p>
          </div>
          <div className="flex items-center flex-col md:flex-row justify-between mt-4">
            <div className="flex items-center w-full gap-x-4">
              <p className="font-tilda-sans font-light text-[16px]">
                опытных <br />
                мастеров
              </p>
              <p className="font-tenor-sans text-[90px]">
                12<span className="text-[64px]">+</span>
              </p>
            </div>
            <div className="flex items-center w-full justify-end md:justify-start gap-x-4">
              <p className="font-tilda-sans font-light text-[16px]">
                довольных <br />
                клиентов
              </p>
              <p className="font-tenor-sans text-[90px]">
                5к<span className="text-[64px]">+</span>
              </p>
            </div>
          </div>
          <Button className="w-full md:w-[240px] mt-7">
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
    </main> 
  );
}