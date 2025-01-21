'use client'

import { useEffect, useState } from 'react'
import gsap from 'gsap'

interface PreloaderProps {
  onLoadComplete: () => void;
}

export default function Preloader({ onLoadComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to('.preloader', {
          yPercent: -100,
          duration: 0.8,
          ease: 'power4.inOut',
          onComplete: onLoadComplete
        })
      }
    })

    // Имитация загрузки
    tl.to({ value: 0 }, {
      value: 100,
      duration: 2,
      ease: 'power2.inOut',
      onUpdate: function() {
        setProgress(Math.round(this.targets()[0].value))
      }
    })
  }, [onLoadComplete])

  return (
    <div className="preloader fixed inset-0 bg-primary z-50 flex items-center justify-center">
      <div className="flex flex-col items-center gap-y-4">
        <img 
          src="/images/logo.svg" 
          alt="FirUza" 
          className="w-[120px] md:w-[180px]"
        />
        <div className="w-[200px] md:w-[300px] h-[2px] bg-white/20 relative overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-white transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="font-tenor-sans text-white text-lg">
          {progress}%
        </p>
      </div>
    </div>
  )
} 