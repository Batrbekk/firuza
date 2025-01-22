'use client'

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function AboutGallery() {
  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Начальные позиции
    gsap.set(topRowRef.current, { x: 0 });
    gsap.set(bottomRowRef.current, { x: '-100%' });

    // Анимация верхнего ряда (справа налево, от 0 до -100%)
    gsap.to(topRowRef.current, {
      x: '-100%',
      ease: 'none',
      scrollTrigger: {
        trigger: topRowRef.current,
        start: '5% 95%', // Начинаем когда 5% элемента видно в нижних 95% viewport
        end: 'bottom top', // Заканчиваем когда элемент полностью уходит из viewport
        scrub: 1,
        toggleActions: 'play none none reverse',
        // markers: true,
      }
    });

    // Анимация нижнего ряда (слева направо, от -100% до 0)
    gsap.to(bottomRowRef.current, {
      x: '0%',
      ease: 'none',
      scrollTrigger: {
        trigger: bottomRowRef.current,
        start: '5% 95%', // Начинаем когда 5% элемента видно в нижних 95% viewport
        end: 'bottom top',
        scrub: 1,
        toggleActions: 'play none none reverse',
        // markers: true,
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="flex flex-col gap-4 overflow-hidden md:hidden">
      <div 
        ref={topRowRef}
        className="flex items-center gap-x-4 pl-5"
      >
        <div className="relative w-[248px] h-[372px] flex-shrink-0">
          <Image
            fill 
            src="/images/about-gallery/1.png" 
            alt="gallery" 
            className="w-full h-full object-cover absolute top-0 left-0"
          />
        </div>
        <div className="relative w-[248px] h-[372px] flex-shrink-0">
          <Image
            fill 
            src="/images/about-gallery/2.png" 
            alt="gallery" 
            className="w-full h-full object-cover absolute top-0 left-0"
          />
        </div>
        <div className="relative w-[248px] h-[372px] flex-shrink-0">
          <Image
            fill 
            src="/images/about-gallery/3.png" 
            alt="gallery" 
            className="w-full h-full object-cover absolute top-0 left-0"
          />
        </div>
      </div>
      <div 
        ref={bottomRowRef}
        className="flex items-center gap-x-4 pr-5"
      >
        <div className="relative w-[248px] h-[372px] flex-shrink-0">
          <Image
            fill 
            src="/images/about-gallery/5.png" 
            alt="gallery" 
            className="w-full h-full object-cover absolute top-0 left-0"
          />
        </div>
        <div className="relative w-[248px] h-[372px] flex-shrink-0">
          <Image
            fill 
            src="/images/about-gallery/6.png" 
            alt="gallery" 
            className="w-full h-full object-cover absolute top-0 left-0"
          />
        </div>
        <div className="relative w-[248px] h-[372px] flex-shrink-0">
          <Image
            fill 
            src="/images/about-gallery/4.png" 
            alt="gallery" 
            className="w-full h-full object-cover absolute top-0 left-0"
          />
        </div>
      </div>
    </div>
  );
}