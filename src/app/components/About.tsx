'use client'

export default function About() {
  return (
    <section className="py-20">
      <div className="container mx-auto">
        <div className="flex gap-[169px]">
          {/* Left side - Image collage */}
          <div className="flex flex-col -space-y-[84px]">
            {/* Top row */}
            <div className="flex gap-[17px]">
              <div className="relative w-[242px] h-[371px]">
                <img
                  src="/images/about/about-1.jpg"
                  alt="Салон красоты 1"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative w-[242px] h-[447px]">
                <img
                  src="/images/about/about-2.jpg"
                  alt="Салон красоты 2"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative w-[242px] h-[344px]">
                <img
                  src="/images/about/about-3.jpg"
                  alt="Салон красоты 3"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            {/* Bottom row */}
            <div className="flex gap-[17px]">
              <div className="relative w-[242px] h-[318px] mt-[23px]">
                <img
                  src="/images/about/about-4.jpg"
                  alt="Салон красоты 4"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative w-[242px] h-[240px] mt-[102px]">
                <img
                  src="/images/about/about-5.jpg"
                  alt="Салон красоты 5"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="relative w-[242px] h-[341px]">
                <img
                  src="/images/about/about-6.jpg"
                  alt="Салон красоты 6"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex flex-col gap-[29px] max-w-[695px]">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h6 className="text-[#6A7B61] font-bold text-sm">о наших салонах</h6>
                <h2 className="text-[44px] leading-[56px]">Добро пожаловать в сеть салонов красоты FirUza Nail Studio!</h2>
              </div>
              <p className="text-lg leading-[29px]">
                В наших салонах мы создали уютную и гостеприимную атмосферу, где каждый посетитель чувствует себя как дома. 
                Мы уделяем большое внимание мелочам, чтобы ваш визит был максимально комфортным и приятным.
              </p>
              <p className="text-lg leading-[29px]">
                Приходите к нам и убедитесь сами, почему FirUza Nail Studio — это идеальное место для заботы о себе и своём внешнем виде. 
                Мы всегда рады видеть вас и готовы подарить вам радость и уверенность в своей красоте!
              </p>
            </div>

            <div className="flex gap-[120px]">
              <div className="flex gap-4 flex-1">
                <p className="text-2xl leading-6">500+</p>
                <p className="text-base leading-6">актуальных расцветок</p>
              </div>
              <div className="flex gap-4">
                <p className="text-2xl leading-6">5+</p>
                <p className="text-base leading-6">лет опыта работы</p>
              </div>
            </div>

            <button className="bg-[#6A7B61] text-white py-[15px] px-[70px] w-fit">
              Записаться онлайн
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 