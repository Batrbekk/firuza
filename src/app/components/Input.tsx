interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  variant?: 'black' | 'primary';
}

export default function Input({ 
  label, 
  className = '', 
  variant = 'primary',
  ...props 
}: InputProps) {
  return (
    <input
        {...props}
        className={`w-full h-[50px] px-5 font-tilda-sans text-base font-light
          focus:outline-none transition-colors
          ${variant === 'black' ? 'border-black focus:border-black/80' : 'border-primary focus:border-primary/80'}
          border
          ${className}`}
    />
  )
} 