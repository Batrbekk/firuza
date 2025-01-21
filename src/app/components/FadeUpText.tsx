'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cn } from '@/utils/cn'

gsap.registerPlugin(ScrollTrigger)

interface FadeUpTextProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function FadeUpText({ children, className, delay = 0 }: FadeUpTextProps) {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = textRef.current
    let ctx = gsap.context(() => {
      gsap.from(element, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        }
      })
    })

    return () => ctx.revert()
  }, [delay])

  return (
    <div ref={textRef} className={cn('will-change-transform', className)}>
      {children}
    </div>
  )
} 