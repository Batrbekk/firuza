'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

interface TextRevealProps {
  children: string
  className?: string
  delay?: number
}

export default function TextReveal({ children, className, delay = 0 }: TextRevealProps) {
  const textRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !textRef.current) return

    const chars = textRef.current.querySelectorAll('span')
    if (!chars || chars.length === 0) return

    gsap.set(chars, { opacity: 0, y: 20 })
    
    gsap.to(chars, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.02,
      ease: "power2.out",
      delay: delay,
    })

    return () => {
      gsap.killTweensOf(chars)
    }
  }, [mounted, delay])

  const splitText = children.split('').map((char, index) => (
    <span 
      key={index} 
      className="inline-block"
    >
      {char === ' ' ? '\u00A0' : char}
    </span>
  ))

  return (
    <div ref={textRef} className={className}>
      {splitText}
    </div>
  )
} 