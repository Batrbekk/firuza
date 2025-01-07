'use client'

import { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { cn } from '@/lib/utils';

interface DropdownProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function Dropdown({ title, children, className }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current && arrowRef.current) {
      if (isOpen) {
        gsap.to(contentRef.current, {
          height: 'auto',
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
        gsap.to(arrowRef.current, {
          rotation: 180,
          duration: 0.3,
          ease: 'power2.out'
        });
      } else {
        gsap.to(contentRef.current, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
        gsap.to(arrowRef.current, {
          rotation: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    }
  }, [isOpen]);

  return (
    <div className={cn("w-full relative", className)}>
      <div 
        className="flex items-center justify-center gap-x-[5px] cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="font-tilda-sans font-bold text-white text-[14px] uppercase">
          {title}
        </p>
        <div 
          ref={arrowRef}
          className="w-4 h-5 flex items-center justify-center"
        >
          <svg 
            width="8" 
            height="4" 
            viewBox="0 0 8 4" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M1 0.5L4 3.5L7 0.5" 
              stroke="white" 
              strokeWidth="1.5" 
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
      
      <div 
        ref={contentRef} 
        className="absolute top-[32px] left-5 right-5 h-0 opacity-0 overflow-hidden bg-white"
        style={{
          boxShadow: '0px 91px 54px 0px rgba(61, 61, 61, 0.03), 0px 161px 64px 0px rgba(61, 61, 61, 0.01), 0px 252px 70px 0px rgba(61, 61, 61, 0.00)'
        }}
      >
        <div className="py-10 px-[45px] flex flex-col gap-y-4">
          {children}
        </div>
      </div>
    </div>
  );
} 