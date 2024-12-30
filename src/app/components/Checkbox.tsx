import Image from "next/image";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Checkbox({ label, checked, onChange }: CheckboxProps) {
  return (
    <label className="flex items-center gap-3 cursor-pointer select-none">
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="sr-only"
        />
        <div 
          className={`
            w-[18px] h-[18px] border-[1.2px]
            flex items-center justify-center bg-white
            ${checked ? 'border-[#292929]' : 'border-[#29292960]'}
            transition-colors duration-200
          `}
        >
          {checked && (
            <Image src="/icons/checked.svg" alt="check" width={14} height={10} />
          )}
        </div>
      </div>
      <span className="text-sm text-[#292929] font-tilda-sans font-light">
        {label}
      </span>
    </label>
  )
} 