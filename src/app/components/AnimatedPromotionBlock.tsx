'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/lib/utils'
import Image from 'next/image'

// Регистрируем ScrollTrigger
gsap.registerPlugin(ScrollTrigger)

interface AnimatedBlockProps {
  imagePosition: 'left' | 'right'
  imageSrc: string
  imageAlt: string
  children: React.ReactNode
  className?: string
}

export default function AnimatedPromotionBlock({
  imagePosition,
  imageSrc,
  imageAlt,
  children,
  className
}: AnimatedBlockProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Анимация для изображения
    gsap.fromTo(imageRef.current,
      {
        opacity: 0,
        x: imagePosition === 'left' ? -100 : 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Анимация для текстового блока
    gsap.fromTo(contentRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.3, // Небольшая задержка после анимации картинки
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Очистка ScrollTrigger при размонтировании
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [imagePosition])

  return (
    <div 
      ref={containerRef}
      className={cn(
        "flex flex-col md:flex-row px-5 py-6 md:px-0 md:py-0 gap-6",
        imagePosition === 'right' && "md:flex-row-reverse",
        className
      )}
    >
      <div 
        ref={imageRef}
        className="w-full h-[480px] md:w-[59.219%] md:h-[600px] relative opacity-0"
      >
        <Image
          fill 
          src={imageSrc} 
          alt={imageAlt} 
          className="absolute object-cover top-0 left-0 w-full h-full object-center"
        />
      </div>
      <div 
        ref={contentRef}
        className="w-full md:w-[38.8%] flex items-center opacity-0"
      >
        {children}
      </div>
    </div>
  )
} 