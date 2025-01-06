import { ChangeEvent, useRef, useState } from 'react';

interface FileInputProps {
  onChange?: (files: FileList) => void;
  className?: string;
  accept?: string;
  multiple?: boolean;
}

export default function FileInput({ 
  onChange,
  className = '',
  accept,
  multiple = false
}: FileInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileCount, setFileCount] = useState(0);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFileCount(files.length);
      onChange?.(files);
    }
  };

  return (
    <div className={className}>
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={handleChange}
        className="hidden"
      />
      
      <button
        onClick={handleClick}
        className="
          h-[45px] px-3
          border border-primary
          flex items-center gap-x-3
          hover:opacity-80 transition-opacity
        "
      >
				<img src="/icons/upload.svg" alt="file" />
        <span className="font-tilda-sans font-light text-[14px] text-primary">
          {fileCount > 0 ? `Выбрано файлов: ${fileCount}` : 'Прикрепить файлы'}
        </span>
      </button>
    </div>
  );
} 