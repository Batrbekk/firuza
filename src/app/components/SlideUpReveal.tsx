'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/utils/cn'

gsap.registerPlugin(ScrollTrigger)

interface SlideUpRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  maskColor?: string
}

export default function SlideUpReveal({ 
  children, 
  className,
  delay = 0,
  duration = 1.2,
  maskColor = 'white'
}: SlideUpRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const maskRef = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    const mask = maskRef.current

    if (!element || !mask || hasAnimated) return

    const ctx = gsap.context(() => {
      // Устанавливаем начальное положение маски
      gsap.set(mask, {
        top: 0,
        height: '100%'
      })
      
      // Анимируем маску сверху вниз
      gsap.to(mask, {
        top: '100%',
        duration,
        delay,
        ease: 'power3.inOut',
        onComplete: () => setHasAnimated(true),
        scrollTrigger: {
          trigger: element,
          start: 'top bottom-=100',
          once: true
        }
      })
    })

    return () => ctx.revert()
  }, [delay, duration, hasAnimated])

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <div ref={elementRef} className="w-full">
        {children}
        <div 
          ref={maskRef} 
          className="absolute left-0 w-full pointer-events-none"
          style={{ backgroundColor: maskColor }} 
        />
      </div>
    </div>
  )
} 