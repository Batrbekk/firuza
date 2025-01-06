'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { cn } from '@/lib/utils'

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
}

export default function TextReveal({ 
  children, 
  className,
  delay = 0 
}: TextRevealProps) {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const chars = textRef.current?.querySelectorAll('span')
    
    if (chars) {
      gsap.fromTo(chars, 
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.02,
          ease: "power2.out",
          delay: delay,
        }
      )
    }
  }, [delay])

  // Разбиваем текст на отдельные символы
  const splitText = children.split('').map((char, index) => (
    <span 
      key={index} 
      className="inline-block"
      style={{ opacity: 0 }}
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ))

  return (
    <div ref={textRef} className={cn("", className)}>
      {splitText}
    </div>
  )
} 