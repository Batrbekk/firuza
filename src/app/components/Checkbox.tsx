'use client'

import Image from "next/image";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
  error?: boolean;
}

export function Checkbox({ label, checked, onChange, error }: CheckboxProps) {
  return (
    <label className="flex items-start gap-x-2 cursor-pointer group">
      <div className="relative flex items-center justify-center mt-1">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only peer"
        />
        <div className={`
          w-4 h-4 border transition-colors
          ${error 
            ? 'border-[#F00F0F]' 
            : 'border-black group-hover:border-primary peer-checked:border-primary'
          }
        `} 
        />
        <svg
          className={`
            absolute w-3 h-3 pointer-events-none opacity-0 transition-opacity
            ${checked ? 'opacity-100' : ''}
            ${error ? 'text-[#F00F0F]' : 'text-primary'}
          `}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <span className={`
        font-tilda-sans text-[14px] font-light
        ${error ? 'text-[#F00F0F]' : 'text-black'}
      `}>
        {label}
      </span>
    </label>
  )
} 