import ArrowUp from 'assets/icons/arrow-up.svg';
import { ChangeEvent, SyntheticEvent, useState } from 'react';

interface Props {
  handleSendChat: (value: string) => void;
}

const ChatInput = ({ handleSendChat }: Props) => {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (!value) {
      return;
    }
    handleSendChat(value);
    setValue('');
  };

  return (
    <form className='flex h-52 w-full shrink-0 items-center gap-8 bg-[#424242] p-8'>
      <input
        onChange={handleChange}
        value={value}
        className='h-full w-full rounded-full border border-[#3f3f3f] bg-[#505050] px-12 outline-none'
      />
      <button
        onClick={handleSubmit}
        className='flex aspect-square h-full items-center justify-center rounded-full border border-[#3f3f3f] bg-[#717171]'
      >
        <img src={ArrowUp} />
      </button>
    </form>
  );
};

export default ChatInput;
