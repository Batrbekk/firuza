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
              <Button className="w-full md:w-[240px]">
                Записаться
              </Button>
              <Button variant='outline' className="w-full md:w-[240px] text-white border-white">
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
                о наших салонах
              </h6>
              <h2 className="text-[28px] md:text-[44px] font-tenor-sans uppercase">
                Firuza Nail Studio
              </h2>
            </div>
            <p className="font-tilda-sans font-light md:font-normal text-[16px] md:text-[18px]">
              Добро пожаловать в сеть салонов красоты FirUza Nail Studio!
              В наших салонах мы создали уютную и гостеприимную атмосферу, где каждый посетитель чувствует себя как дома. Мы уделяем большое внимание мелочам, чтобы ваш визит был максимально комфортным и приятным.
            </p>
            <p className="font-tilda-sans font-light md:font-normal text-[16px] md:text-[18px]">
              Приходите к нам и убедитесь сами, почему FirUza Nail Studio — это идеальное место для заботы о себе и своем внешнем виде. Мы всегда рады видеть вас и готовы подарить вам радость и уверенность в своей красоте!
            </p>
          </div>
          <div className="flex items-center flex-col md:flex-row justify-between mt-4">
            <div className="flex items-center w-full gap-x-4">
              <p className="font-tilda-sans font-light text-[16px]">
                актуальных <br />
                расцветок
              </p>
              <p className="font-tenor-sans text-[90px]">
                100<span className="text-[64px]">+</span>
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
      <section className="px-5 lg:px-0 py-12 lg:py-20 flex flex-col">
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