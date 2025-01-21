'use client'

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
  className?: string;
  error?: boolean;
  errorMessage?: string;
}

export default function TextArea({ 
  placeholder = 'Введите текст',
  className = '',
  error,
  errorMessage,
  ...props
}: TextAreaProps) {
  return (
    <div className="w-full">
      <textarea
        placeholder={placeholder}
        className={`
          w-full min-h-[120px] p-4 font-tilda-sans text-[14px] 
          border border-black focus:border-primary transition-colors
          ${error ? 'border-[#F00F0F] focus:border-[#F00F0F]' : ''}
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
  );
} 