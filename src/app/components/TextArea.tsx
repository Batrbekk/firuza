'use client'

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'white' | 'black'
  error?: boolean
  errorMessage?: string
}

export default function TextArea({ 
  variant = 'white',
  error,
  errorMessage,
  className,
  ...props 
}: TextAreaProps) {
  return (
    <div className="w-full">
      <textarea
        className={`
          w-full p-4 font-tilda-sans text-[14px] transition-colors outline-none resize-none
          caret-primary
          ${variant === 'white' ? 'bg-white text-black' : 'bg-transparent text-black'} 
          ${error 
            ? 'border border-[#F00F0F] focus:border-[#F00F0F]' 
            : variant === 'black' 
              ? 'border border-black focus:border-primary' 
              : 'focus:border-primary'
          }
          focus:border
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