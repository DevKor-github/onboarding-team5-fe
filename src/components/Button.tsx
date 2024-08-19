interface ButtonProps {
  label: string;
  defaultColor: string;
  textColor?: string;
  height: string;
  width: string;
  onClick?: (event: React.FormEvent<HTMLButtonElement>) => void;
}

const Button = ({
  label,
  defaultColor,
  textColor,
  height,
  width,
  onClick,
}: ButtonProps) => {
  return (
    <div>
      <button
        type='submit'
        className={`text-sm font-semibold box-shadow: box-shadow: 0px  
            -1px 0px 0px flex justify-center text-balance 
            rounded-[8px] px-0 pt-[14px] align-middle text-[16px]
            ${textColor}
            ${height}
            ${width}
            ${defaultColor} 
            `}
        onClick={onClick!}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;
