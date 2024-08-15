import { ChangeEvent, SyntheticEvent, useState } from 'react';
import Emoji from 'assets/icons/emoji.svg';
import Send from 'assets/icons/send.svg';
import SendBlue from 'assets/icons/send-blue.svg';

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
    <form className='flex w-full shrink-0 gap-12 border-t border-[#E5E5EA] px-24 pb-32 pt-12'>
      <button type='button'>
        <img src={Emoji} alt='이모티콘 버튼' />
      </button>
      <div className='relative w-full'>
        <input
          onChange={handleChange}
          value={value}
          placeholder='Start typing...'
          className='h-40 w-full rounded-full bg-[#F2F2F7] py-12 pl-20 pr-52 outline-none placeholder:text-[#666668]'
        />
        <button
          onClick={handleSubmit}
          className='absolute right-20 top-1/2 -translate-y-1/2'
        >
          {value ? (
            <img src={SendBlue} alt='전송 버튼' />
          ) : (
            <img src={Send} alt='전송 버튼' />
          )}
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
