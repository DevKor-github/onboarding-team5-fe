interface InputProps {
  placeholder: string;
  required?: boolean;
  type?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; 
  value?: any
  
}

const Input = ({ placeholder, required = false, type='email', onChange, value }: InputProps) => {
  return (
    <input
      placeholder={placeholder}
      required={required}
      type={type}
      className='focus: placeholder:text-gray-40 text-c 
                                    block h-[50px] w-[325px]
                                    rounded-[10px] border-none px-[14px] py-[15px] text-gray-900  
                                    shadow-sm outline-none ring-1 ring-inset ring-gray-300 focus:border-violet-500 focus:ring-2
                                    focus:ring-violet-500'
                                    onChange={onChange}
                                    value={value}
    />
  );
};

export default Input;
