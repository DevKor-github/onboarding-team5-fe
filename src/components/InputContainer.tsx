import { HTMLInputTypeAttribute, ReactNode } from 'react';
import {
  FieldValues,
  UseControllerProps,
  useController,
} from 'react-hook-form';

interface Props<T extends FieldValues> extends UseControllerProps<T> {
  children: ReactNode;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}

const InputContainer = <T extends FieldValues>({
  children,
  placeholder,
  ...controls
}: Props<T>) => {
  const { field } = useController({
    ...controls,
  });
  return (
    <div className='relative'>
      <label htmlFor={field.name} className='block h-20 text-16 font-600'>
        {children}
      </label>
      <input
        id={field.name}
        placeholder={placeholder}
        {...field}
        className={`mt-8 h-40 w-full rounded-8 border border-gray-300 bg-[#fdfdfd] px-12 disabled:bg-[#e7e7e7]`}
      />
    </div>
  );
};

export default InputContainer;
