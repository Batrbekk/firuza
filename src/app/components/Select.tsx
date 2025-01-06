import { useState } from 'react';

interface SelectProps {
  options: string[];
  placeholder?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}

export default function Select({ 
  options, 
  placeholder = 'Выберите значение',
  defaultValue, 
  onChange,
  className = '' 
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue || '');

  const handleSelect = (value: string) => {
    setSelected(value);
    setIsOpen(false);
    onChange?.(value);
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-[240px] h-[50px] px-[10px] 
          border border-[#292929]
          flex items-center justify-between
          font-tilda-sans text-base font-light
          ${className}
        `}
      >
        <span className={selected ? 'text-black' : 'text-black/60'}>
          {selected || placeholder}
        </span>
        <svg 
          width="16" 
          height="20" 
          viewBox="0 0 16 20" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
        >
          <path 
            d="M4 10L8 13.4286L12 10" 
            stroke="black" 
            strokeWidth="1.5" 
            strokeLinecap="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="
          absolute top-full left-0 
          w-full mt-1 
          border border-[#292929] 
          bg-white 
          z-50
        ">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className={`
                w-full px-[10px] py-2.5
                text-left font-tilda-sans text-base
                hover:bg-gray-50 transition-colors
                ${selected === option ? 'text-primary' : 'text-black'}
              `}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
} 