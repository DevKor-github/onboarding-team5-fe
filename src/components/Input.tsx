import { forwardRef } from 'react';

interface InputProps {
  placeholder: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  disabled?: boolean;
  required?: boolean; // required 속성 추가
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      placeholder,
      type = 'text',
      onChange,
      value,
      disabled = false,
      required = false,
    },
    ref,
  ) => {
    return (
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        disabled={disabled}
        required={required} // required 속성 적용
        className='focus: placeholder:text-gray-40 text-c 
                   block h-[50px] w-[325px]
                   rounded-[10px] border-none px-[14px] py-[15px] text-gray-900  
                   shadow-sm outline-none ring-1 ring-inset ring-gray-300 focus:border-violet-500 focus:ring-2
                   focus:ring-violet-500'
      />
    );
  },
);

export default Input;
