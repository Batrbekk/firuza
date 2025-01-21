'use client'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'white' | 'black'
  error?: boolean
  errorMessage?: string
}

export default function Input({ 
  variant = 'white',
  error,
  errorMessage,
  className,
  ...props 
}: InputProps) {
  return (
    <div className="w-full">
      <input
        className={`
          w-full h-[40px] px-4 font-tilda-sans text-[14px] transition-colors
          ${variant === 'white' ? 'bg-white text-black' : 'bg-transparent text-black'} 
          ${error 
            ? 'border border-[#F00F0F] focus:border-[#F00F0F]' 
            : variant === 'black' 
              ? 'border border-black focus:border-primary' 
              : 'focus:border-primary'
          }
          ${className}
        `}
        {...props}
      />
      {error && errorMessage && (
        <p className="mt-1 text-[#F00F0F] text-sm font-tilda-sans">
          {errorMessage}
        </p>
      )}
    </div>
  )
} 