'use client'

import { useState, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface AccordionProps {
  title: string | ReactNode
  children: ReactNode
  titleClassName?: string
  defaultOpen?: boolean
}

export default function MobileAccordion({ 
  title, 
  children, 
  titleClassName,
  defaultOpen = false 
}: AccordionProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className={cn("flex flex-col", isOpen ? 'gap-y-4' : 'gap-y-0')}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "w-full flex items-center justify-center text-left gap-x-1",
                    titleClassName,
                    isOpen ? 'text-primary' : 'text-black'
                )}
            >
                <p className="uppercase font-tilda-sans font-bold text-sm">{title}</p>
                <div className={`transform transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                }`}>
                    <svg 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="none"
                    >
                        <path 
                            d="M6 9L12 15L18 9" 
                            stroke="currentColor" 
                            strokeWidth="2"
                        />
                    </svg>
                </div>
            </button>
            
            <div className={cn(
                "grid transition-all duration-300 ease-in-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            )}>
                <div className="overflow-hidden">
                    {children}
                </div>
            </div>
        </div>
    )
}