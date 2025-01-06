interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  placeholder?: string;
  className?: string;
}

export default function TextArea({ 
  placeholder = 'Введите текст',
  className = '',
  ...props
}: TextAreaProps) {
  return (
    <textarea
      placeholder={placeholder}
      className={`
        w-[500px] min-h-[200px] p-[10px]
        border border-[#292929]
				font-light
        font-tilda-sans text-base
        resize-none
        placeholder:text-black/60
        focus:outline-none
        ${className}
      `}
      {...props}
    />
  );
} 