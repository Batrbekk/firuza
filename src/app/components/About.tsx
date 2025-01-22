'use client'
import SlideUpReveal from './SlideUpReveal'
import Image from 'next/image'

export default function About() {
  return (
    <div className="gap-x-4 hidden lg:flex">
      <div className="flex flex-col gap-y-5">
        <SlideUpReveal delay={0}>
          <div className="w-[242px] h-[371px] relative">
            <Image
              fill 
              src="/images/about/1.png" 
              alt="about" 
              className="w-full h-full object-cover absolute top-0 left-0" 
            />
          </div>
        </SlideUpReveal>
        <SlideUpReveal delay={0}>
          <div className="w-[242px] h-[318px] relative">
            <Image
              fill 
              src="/images/about/2.png" 
              alt="about" 
              className="w-full h-full object-cover absolute top-0 left-0" 
            />
          </div>
        </SlideUpReveal>
      </div>
      <div className="flex flex-col gap-y-5">
        <SlideUpReveal delay={0}>
          <div className="w-[242px] h-[447px] relative">
            <Image
              fill 
              src="/images/about/3.png" 
              alt="about" 
              className="w-full h-full object-cover absolute top-0 left-0" 
            />
          </div>
        </SlideUpReveal>
        <SlideUpReveal delay={0}>
          <div className="w-[242px] h-[242px] relative">
            <Image
              fill 
              src="/images/about/4.png" 
              alt="about" 
              className="w-full h-full object-cover absolute top-0 left-0" 
            />
          </div>
        </SlideUpReveal>
      </div>
      <div className="flex flex-col gap-y-5">
        <SlideUpReveal delay={0}>
          <div className="w-[242px] h-[343px] relative">
            <Image
              fill 
              src="/images/about/5.png" 
              alt="about" 
              className="w-full h-full object-cover absolute top-0 left-0" 
            />
          </div>
        </SlideUpReveal>
        <SlideUpReveal delay={0}>
          <div className="w-[242px] h-[346px] relative">
            <Image
              fill 
              src="/images/about/6.png" 
              alt="about" 
              className="w-full h-full object-cover absolute top-0 left-0" 
            />
          </div>
        </SlideUpReveal>
      </div>
    </div>
  )
} 