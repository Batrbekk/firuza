interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'text';
  rightIcon?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary',
  rightIcon,
  className = '', 
  ...props 
}: ButtonProps) {
  const baseStyles = {
    primary: 'bg-primary text-white hover:bg-primary/90',
    text: 'bg-transparent text-primary hover:bg-primary/5'
  }

  return (
    <button
      {...props}
      className={`
        flex items-center justify-center gap-2 px-5 py-4
        font-tilda-sans font-bold text-sm uppercase
        transition-colors duration-300
        ${baseStyles[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  )
} 