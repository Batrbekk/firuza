'use client'

import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="flex items-center gap-x-[89px]">
            <div className="flex gap-4 max-w-[760px]">
                <div className="flex flex-col gap-4">
                    <div className="relative w-[242px] h-[371px]">
                        <Image 
                            src="/images/about/1.svg" 
                            alt="Салон красоты 1"
                            fill
                        />
                    </div>
                    <div className="relative w-[242px] h-[318px]">
                        <Image
                            src="/images/about/4.svg" 
                            alt="Салон красоты 4"
                            fill
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="relative w-[242px] h-[447px]">
                        <Image
                            src="/images/about/2.svg" 
                            alt="Салон красоты 2"
                            fill
                        />
                    </div>
                    <div className="relative w-[242px] h-[239px]">
                        <Image
                            src="/images/about/5.svg" 
                            alt="Салон красоты 5"
                            fill
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="relative w-[242px] h-[343px]">
                        <Image
                            src="/images/about/3.svg" 
                            alt="Салон красоты 3"
                            fill
                        />
                    </div>
                    <div className="relative w-[242px] h-[341px]">
                        <Image
                            src="/images/about/6.svg" 
                            alt="Салон красоты 6"
                            fill
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col max-w-[695px]">
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <h6 className="text-primary uppercase font-tilda-sans font-bold text-sm">о наших салонах</h6>
                            <h2 className="text-[44px] font-tenor-sans uppercase">FirUza Nail Studio</h2>
                        </div>
                        
                        <div className="flex flex-col gap-6">
                            <p className="font-tilda-sans text-lg">
                                Добро пожаловать в сеть салонов красоты FirUza Nail Studio! В наших салонах мы создали уютную и гостеприимную атмосферу, где каждый посетитель чувствует себя как дома. Мы уделяем большое внимание мелочам, чтобы ваш визит был максимально комфортным и приятным.
                            </p>
                            <p className="font-tilda-sans text-lg">
                                Приходите к нам и убедитесь сами, почему FirUza Nail Studio — это идеальное место для заботы о себе и своём внешнем виде. Мы всегда рады видеть вас и готовы подарить вам радость и уверенность в своей красоте!
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-[120px] mt-4">
                        <div className="flex gap-4 items-center">
                            <p className="font-tilda-sans text-base">актуальных расцветок</p>
                            <p className="font-tenor-sans text-[90px] flex items-center">300 <span className="text-[60px]">+</span></p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <p className="font-tilda-sans text-base">довольных клиентов</p>
                            <p className="font-tenor-sans text-[90px] flex items-center">5K <span className="text-[60px]">+</span></p>
                        </div>
                    </div>

                    <button className="max-w-[240px] mt-7 w-full bg-primary text-white text-sm font-tilda-sans font-bold uppercase py-4">
                        Записаться
                    </button>
            </div>
        </div>
      </div>
    </section>
  )
} 