interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'text' | 'outline';
  rightIcon?: boolean;
}

export default function Button({ 
  children, 
  variant = 'primary',
  rightIcon,
  className = '', 
  ...props 
}: ButtonProps) {
  const baseStyles = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    text: 'bg-transparent text-primary hover:bg-primary/5',
    outline: 'bg-transparent border border-primary text-primary'
  }

  return (
    <button
      {...props}
      className={`
        flex items-center justify-center gap-2 px-5 py-4
        font-tilda-sans font-bold text-sm uppercase
        transition-colors duration-300
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 h-[50px]
        ${baseStyles[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  )
} 