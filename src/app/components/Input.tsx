interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, className = '', ...props }: InputProps) {
  return (
    <div className="w-full">
      <input
        {...props}
        className={`w-full h-[50px] px-5 border border-primary font-tilda-sans text-base font-light
          focus:outline-none focus:border-primary/80 transition-colors
          ${className}`}
      />
    </div>
  )
} 