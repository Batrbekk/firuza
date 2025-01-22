'use client'

import { useState, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface AccordionProps {
  text: string
  children: ReactNode
  id: string
  isOpen: boolean
  onToggle: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  titleClassName?: string
}

export default function Accordion({ 
  text, 
  children, 
  id,
  isOpen,
  onToggle,
  onMouseEnter,
  onMouseLeave,
  titleClassName 
}: AccordionProps) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        onClick={onToggle}
        className={cn(
          "py-4 flex items-center gap-2 uppercase font-tilda-sans font-bold text-sm",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",
          titleClassName,
          isOpen ? 'text-white/50' : 'text-white'
        )}
      >
        <p className="">{text}</p>
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none"
          className={cn(
            "transition-transform duration-300",
            isOpen ? "rotate-180" : ""
          )}
        >
          <path 
            d="M6 9L12 15L18 9" 
            stroke="currentColor" 
            strokeWidth="2"
          />
        </svg>
      </button>

      <div className={cn(
        "transition-all duration-300 absolute bg-white w-full left-0 top-full",
        isOpen ? "animate-fade-in-top" : "hidden"
      )}>
        <div className="overflow-hidden py-4 md:max-w-[720px] lg:max-w-[1020px] mx-auto w-full flex justify-center">
          {children}
        </div>
      </div>
    </div>
  )
}